/* eslint-disable no-console */
/**
 * Post-build prerender + sitemap generator.
 *
 * 1. Serves build/ locally (SPA fallback to the original index.html template).
 * 2. Crawls the app from "/" with headless Chromium, following every internal <a href>.
 * 3. Saves each rendered page as static HTML: "/" -> build/index.html, "/seo" -> build/seo.html,
 *    "/blog/x" -> build/blog/x.html (Apache serves these via .htaccess rewrites).
 * 4. Renders a 404 page to build/404.html.
 * 5. Writes build/sitemap.xml from every indexable page found (skips noindex pages).
 *
 * Usage: node scripts/prerender.js   (after `npm run build`)
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

const SITE = 'https://alphaaheadllc.com';
const BUILD = path.resolve(__dirname, '..', 'build');
const PORT = 45678;
const ORIGIN = `http://127.0.0.1:${PORT}`;

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'application/javascript', '.css': 'text/css', '.json': 'application/json',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif',
  '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.txt': 'text/plain', '.xml': 'application/xml', '.pdf': 'application/pdf',
};

function loadChromium() {
  let pw;
  try {
    pw = require('playwright');
  } catch (e) {
    console.error('playwright is not installed. Run: npm i --no-save playwright && npx playwright install chromium');
    process.exit(1);
  }
  return pw.chromium;
}

async function main() {
  const template = fs.readFileSync(path.join(BUILD, 'index.html'), 'utf8');

  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split('?')[0]);
    const file = path.join(BUILD, urlPath);
    if (file.startsWith(BUILD) && path.extname(urlPath) && fs.existsSync(file) && fs.statSync(file).isFile()) {
      res.writeHead(200, { 'Content-Type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream' });
      fs.createReadStream(file).pipe(res);
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(template); // SPA fallback: always the untouched template
  });
  await new Promise(r => server.listen(PORT, '127.0.0.1', r));

  const browser = await loadChromium().launch();
  const context = await browser.newContext({ viewport: { width: 1366, height: 900 }, locale: 'en-US' });
  // Only load our own assets: no chat widget, analytics or fonts in the snapshot.
  await context.route('**/*', route => {
    const u = route.request().url();
    if (u.startsWith(ORIGIN)) return route.continue();
    return route.abort();
  });

  const queue = ['/'];
  const seen = new Set(queue);
  const pages = []; // { path, noindex }
  const errors = [];

  async function render(routePath) {
    const page = await context.newPage();
    page.on('pageerror', err => errors.push(`${routePath}: ${err.message}`));
    await page.goto(ORIGIN + routePath, { waitUntil: 'load' });
    await page.waitForFunction(() => document.title && document.querySelector('meta[name="robots"][data-seo]'), null, { timeout: 15000 });
    await page.waitForTimeout(400);
    const data = await page.evaluate(() => {
      document.getElementById('ag-chat-widget-script')?.remove();
      // Snapshot must not contain client-only animation state.
      document.documentElement.classList.remove('aa-js');
      document.querySelectorAll('.is-visible').forEach(el => el.classList.remove('is-visible'));
      const links = Array.from(document.querySelectorAll('a[href]'))
        .map(a => a.getAttribute('href'))
        .filter(h => h && h.startsWith('/') && !h.startsWith('//'));
      const robots = document.querySelector('meta[name="robots"]')?.getAttribute('content') || '';
      return { html: '<!DOCTYPE html>' + document.documentElement.outerHTML, links, robots, finalPath: location.pathname };
    });
    await page.close();
    return data;
  }

  const outFile = p => (p === '/' ? path.join(BUILD, 'index.html') : path.join(BUILD, `${p.replace(/^\//, '')}.html`));

  while (queue.length) {
    const p = queue.shift();
    const { html, links, robots, finalPath } = await render(p);
    if (finalPath !== p) {
      console.log(`  ↪ ${p} redirects to ${finalPath} (not saved)`);
      continue;
    }
    const file = outFile(p);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, html);
    const noindex = /noindex/.test(robots);
    pages.push({ path: p, noindex });
    console.log(`  ✓ ${p}${noindex ? ' (noindex)' : ''}`);

    for (const raw of links) {
      const clean = raw.split('#')[0].split('?')[0].replace(/\/+$/, '') || '/';
      if (path.extname(clean)) continue; // files (pdf, images)
      if (!seen.has(clean)) {
        seen.add(clean);
        queue.push(clean);
      }
    }
  }

  // Explicit routes that are not linked anywhere but should still be static.
  for (const extra of ['/staff']) {
    if (!seen.has(extra)) {
      const { html, robots } = await render(extra);
      fs.writeFileSync(outFile(extra), html);
      pages.push({ path: extra, noindex: /noindex/.test(robots) });
      console.log(`  ✓ ${extra} (unlinked)`);
    }
  }

  // 404 page
  const nf = await render('/__not-found__');
  fs.writeFileSync(path.join(BUILD, '404.html'), nf.html);
  console.log('  ✓ 404.html');

  await browser.close();
  server.close();

  // Sitemap
  const today = new Date().toISOString().slice(0, 10);
  const priority = p =>
    p === '/' ? '1.0' : ['/services', '/contact'].includes(p) ? '0.9' : p.startsWith('/blog/') || p.startsWith('/case-studies/') ? '0.7' : '0.8';
  const urls = pages
    .filter(p => !p.noindex)
    .sort((a, b) => a.path.localeCompare(b.path))
    .map(p => `  <url>\n    <loc>${SITE}${p.path === '/' ? '/' : p.path}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority(p.path)}</priority>\n  </url>`)
    .join('\n');
  fs.writeFileSync(
    path.join(BUILD, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  );
  console.log(`\nPrerendered ${pages.length} pages, sitemap has ${pages.filter(p => !p.noindex).length} URLs.`);

  if (errors.length) {
    console.error('\nPage errors during prerender:\n' + errors.join('\n'));
    process.exit(1);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
