"""Submit the sitemap to Google Search Console and report index status via the official API.

Credentials: a Google service account that is an Owner of the Search Console property.
Provide the key JSON via the GSC_SERVICE_ACCOUNT_JSON env var (GitHub secret) or a file path
in GSC_SERVICE_ACCOUNT_FILE. Never commit the key.

Uses only the Search Console API (sitemaps.submit / sitemaps.get / urlInspection.index.inspect).
It does NOT use the Google Indexing API, which Google supports only for JobPosting and
BroadcastEvent pages.

Usage: python3 scripts/gsc-submit.py [--inspect N]
"""
import json, os, sys, time, urllib.parse, urllib.request, urllib.error

import jwt  # PyJWT (+ cryptography)

SITE = 'https://alphaaheadllc.com/'
SITEMAP = 'https://alphaaheadllc.com/sitemap.xml'
SCOPE = 'https://www.googleapis.com/auth/webmasters'


def load_key():
    raw = os.environ.get('GSC_SERVICE_ACCOUNT_JSON')
    if not raw and os.environ.get('GSC_SERVICE_ACCOUNT_FILE'):
        raw = open(os.environ['GSC_SERVICE_ACCOUNT_FILE']).read()
    if not raw:
        sys.exit('No credentials: set GSC_SERVICE_ACCOUNT_JSON or GSC_SERVICE_ACCOUNT_FILE')
    return json.loads(raw)


def access_token(key):
    now = int(time.time())
    assertion = jwt.encode(
        {'iss': key['client_email'], 'scope': SCOPE, 'aud': key['token_uri'], 'iat': now, 'exp': now + 3600},
        key['private_key'], algorithm='RS256', headers={'kid': key['private_key_id']} if key.get('private_key_id') else None,
    )
    body = urllib.parse.urlencode({'grant_type': 'urn:ietf:params:oauth:grant-type:jwt-bearer', 'assertion': assertion}).encode()
    with urllib.request.urlopen(urllib.request.Request(key['token_uri'], data=body), timeout=30) as r:
        return json.load(r)['access_token']


def call(token, method, url, payload=None):
    data = json.dumps(payload).encode() if payload is not None else None
    req = urllib.request.Request(url, data=data, method=method, headers={'Authorization': f'Bearer {token}', 'Content-Type': 'application/json'})
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            text = r.read().decode()
            return r.status, (json.loads(text) if text.strip() else {})
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode()[:500]


def main():
    n_inspect = int(sys.argv[sys.argv.index('--inspect') + 1]) if '--inspect' in sys.argv else 0
    key = load_key()
    token = access_token(key)
    site = urllib.parse.quote(SITE, safe='')
    feed = urllib.parse.quote(SITEMAP, safe='')

    code, res = call(token, 'PUT', f'https://www.googleapis.com/webmasters/v3/sites/{site}/sitemaps/{feed}')
    print(f'sitemaps.submit -> HTTP {code} {res if code >= 300 else "OK"}')
    if code >= 300:
        sys.exit(1)

    code, res = call(token, 'GET', f'https://www.googleapis.com/webmasters/v3/sites/{site}/sitemaps/{feed}')
    if code == 200:
        print('sitemap status:', json.dumps({k: res.get(k) for k in ('lastSubmitted', 'lastDownloaded', 'isPending', 'errors', 'warnings', 'contents')}))

    if n_inspect:
        with urllib.request.urlopen(SITEMAP, timeout=30) as r:
            import re
            urls = re.findall(r'<loc>([^<]+)</loc>', r.read().decode())[:n_inspect]
        for u in urls:
            code, res = call(token, 'POST', 'https://searchconsole.googleapis.com/v1/urlInspection/index:inspect',
                             {'inspectionUrl': u, 'siteUrl': SITE})
            if code == 200:
                s = res.get('inspectionResult', {}).get('indexStatusResult', {})
                print(f"{s.get('coverageState', '?'):40} last crawl {s.get('lastCrawlTime', '-'):22} {u}")
            else:
                print(f'inspect HTTP {code} {u}: {res}')


if __name__ == '__main__':
    main()
