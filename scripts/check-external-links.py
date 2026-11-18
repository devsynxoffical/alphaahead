"""Report outbound links in the built pages that don't resolve (warning only)."""
import glob, re, sys, urllib.request

urls = set()
for f in glob.glob(sys.argv[1] + '/**/*.html', recursive=True):
    for m in re.finditer(r'href="(https?://[^"#]+)"', open(f, encoding='utf-8').read()):
        u = m.group(1)
        if not any(x in u for x in ('alphaaheadllc.com', 'maps.google.com', 'fonts.googleapis.com', 'fonts.gstatic.com')):
            urls.add(u)
bad = 0
for u in sorted(urls):
    try:
        req = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0 (link check)'})
        code = urllib.request.urlopen(req, timeout=25).status
    except urllib.error.HTTPError as e:
        code = e.code
    except Exception as e:
        code = type(e).__name__
    ok = isinstance(code, int) and code < 400
    bad += not ok
    print(('OK  ' if ok else 'WARN'), code, u)
print(f'{len(urls) - bad}/{len(urls)} outbound links OK')
