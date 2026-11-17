"""Check that every image referenced by the given prerendered pages loads on the live site."""
import re, sys, urllib.parse, urllib.request

SITE = 'https://alphaaheadllc.com'
paths = set()
for f in sys.argv[1:]:
    html = open(f, encoding='utf-8').read()
    for m in re.finditer(r'''(?:src="|url\(&quot;|url\(["']?)(/[^"'&)]+\.(?:png|jpe?g|webp|avif|svg))''', html, re.I):
        paths.add(urllib.parse.unquote(m.group(1)))
bad = 0
for p in sorted(paths):
    url = SITE + urllib.parse.quote(p)
    try:
        req = urllib.request.Request(url, method='HEAD', headers={'User-Agent': 'Mozilla/5.0 deploy-check'})
        code = urllib.request.urlopen(req, timeout=30).status
    except urllib.error.HTTPError as e:
        code = e.code
    except Exception as e:  # network error
        code = str(e)
    ok = code == 200
    bad += not ok
    print(('OK  ' if ok else 'FAIL'), code, p)
print(f'{len(paths) - bad}/{len(paths)} images OK')
sys.exit(1 if bad else 0)
