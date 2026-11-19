<?php
/**
 * Website lead endpoint for alphaaheadllc.com (contact + careers forms).
 *
 * - Validates input, rejects bots (honeypot) and floods (rate limit per IP).
 * - Stores every lead in ../leads/leads-YYYY-MM.jsonl (directory is web-blocked by .htaccess),
 *   so no enquiry is lost even if email delivery fails.
 * - Emails the lead to info@alphaaheadllc.com with Reply-To set to the visitor.
 * - GET ?health=1 returns a JSON health check (used by the deploy workflow).
 */

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Robots-Tag: noindex');

const LEAD_TO = 'info@alphaaheadllc.com';
const LEAD_FROM = 'website@alphaaheadllc.com';
const MAX_PER_HOUR = 5;

$leadDir = dirname(__DIR__) . '/leads';

function respond(int $code, array $body): void {
    http_response_code($code);
    echo json_encode($body);
    exit;
}

function clean($v, int $max = 500): string {
    $v = is_string($v) ? $v : '';
    $v = str_replace(["\r", "\0"], '', trim($v));
    return mb_substr($v, 0, $max);
}

function one_line(string $v): string {
    return trim(preg_replace('/[\r\n]+/', ' ', $v));
}

if (!is_dir($leadDir)) {
    @mkdir($leadDir, 0700, true);
}

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['health'])) {
    respond(200, [
        'ok' => true,
        'php' => PHP_VERSION,
        'storage_writable' => is_dir($leadDir) && is_writable($leadDir),
        'mail_function' => function_exists('mail'),
    ]);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'Method not allowed']);
}

$raw = file_get_contents('php://input');
$in = json_decode($raw ?: '', true);
if (!is_array($in)) {
    $in = $_POST;
}

// Honeypot: real visitors never fill this hidden field.
if (!empty($in['company_website'])) {
    respond(200, ['ok' => true]);
}

// Rate limit per IP (hashed, never stored in clear).
$ipHash = hash('sha256', ($_SERVER['REMOTE_ADDR'] ?? '') . '|alphaahead');
$rlFile = $leadDir . '/rl-' . substr($ipHash, 0, 16) . '.json';
$now = time();
$hits = [];
if (is_file($rlFile)) {
    $hits = array_filter((array) json_decode((string) @file_get_contents($rlFile), true), fn($t) => $t > $now - 3600);
}
if (count($hits) >= MAX_PER_HOUR) {
    respond(429, ['ok' => false, 'error' => 'Too many submissions. Please email ' . LEAD_TO]);
}
$hits[] = $now;
@file_put_contents($rlFile, json_encode(array_values($hits)), LOCK_EX);

$lead = [
    'type' => in_array($in['type'] ?? '', ['contact', 'job_application'], true) ? $in['type'] : 'contact',
    'name' => one_line(clean($in['name'] ?? '', 120)),
    'email' => one_line(clean($in['email'] ?? '', 160)),
    'phone' => one_line(clean($in['phone'] ?? '', 40)),
    'inquiryType' => one_line(clean($in['inquiryType'] ?? '', 80)),
    'subject' => one_line(clean($in['subject'] ?? '', 160)),
    'message' => clean($in['message'] ?? '', 5000),
    'industry' => one_line(clean($in['industry'] ?? '', 80)),
    'budget' => one_line(clean($in['budget'] ?? '', 80)),
    'timeframe' => one_line(clean($in['timeframe'] ?? '', 80)),
    'service' => one_line(clean($in['service'] ?? '', 120)),
    'position' => one_line(clean($in['position'] ?? '', 120)),
    'experience' => one_line(clean($in['experience'] ?? '', 120)),
    // Attribution (where the visitor came from)
    'page' => one_line(clean($in['page'] ?? '', 300)),
    'landing' => one_line(clean($in['landing'] ?? '', 300)),
    'referrer' => one_line(clean($in['referrer'] ?? '', 300)),
    'utm' => array_map(fn($v) => one_line(clean($v, 120)), array_intersect_key((array) ($in['utm'] ?? []), array_flip(['source', 'medium', 'campaign', 'term', 'content']))),
    'received' => gmdate('c'),
];

if ($lead['name'] === '' || !filter_var($lead['email'], FILTER_VALIDATE_EMAIL)) {
    respond(422, ['ok' => false, 'error' => 'Please provide your name and a valid email address.']);
}
if ($lead['type'] === 'contact' && $lead['message'] === '') {
    respond(422, ['ok' => false, 'error' => 'Please add a short message.']);
}

$lead['id'] = substr(hash('sha256', $lead['email'] . $now . random_int(0, PHP_INT_MAX)), 0, 10);

// 1) Store (source of truth)
$stored = @file_put_contents(
    $leadDir . '/leads-' . gmdate('Y-m') . '.jsonl',
    json_encode($lead, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . "\n",
    FILE_APPEND | LOCK_EX
) !== false;

// 2) Email
$label = $lead['type'] === 'job_application' ? 'Job application' : 'Website lead';
$subject = "[$label] " . ($lead['subject'] ?: ($lead['inquiryType'] ?: $lead['position'] ?: 'New enquiry')) . ' - ' . $lead['name'];
$lines = [];
foreach ($lead as $k => $v) {
    if ($k === 'utm') { $v = $v ? http_build_query($v, '', ', ') : ''; }
    if ($v === '' || $v === []) continue;
    $lines[] = str_pad(ucfirst($k) . ':', 13) . (is_string($v) ? $v : json_encode($v));
}
$headers = implode("\r\n", [
    'From: Alpha Ahead Website <' . LEAD_FROM . '>',
    'Reply-To: ' . $lead['name'] . ' <' . $lead['email'] . '>',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Lead-Id: ' . $lead['id'],
]);
$mailed = function_exists('mail') && @mail(LEAD_TO, '=?UTF-8?B?' . base64_encode($subject) . '?=', implode("\n", $lines), $headers, '-f' . LEAD_FROM);

if (!$stored && !$mailed) {
    respond(500, ['ok' => false, 'error' => 'We could not send your message. Please email ' . LEAD_TO . ' or call +1 424-542-7170.']);
}
respond(200, ['ok' => true, 'id' => $lead['id'], 'stored' => $stored, 'mailed' => $mailed]);
