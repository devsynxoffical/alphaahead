#!/usr/bin/env python3
"""
Compare key pages on the live site with the fresh build: <title>, meta description, <h1> and canonical.
Each page is fetched twice: as a normal browser and as Googlebot, so a stale cache or a host
bot-challenge page ("One moment, please...") served to crawlers fails the deploy.

Usage: python3 scripts/check-live-content.py build [/path ...]
Retries each page a few times because the host cache can lag a minute after upload.
"""
import html, re, sys, time, urllib.request

SITE = "https://alphaaheadllc.com"
DEFAULT_PAGES = [
    "/", "/business-assistant", "/virtual-assistant", "/appointment-setting", "/bookkeeping-virtual-assistant",
    "/cold-calling", "/industries", "/virtual-assistant-for-accountants", "/virtual-assistant-for-startups",
    "/blog/executive-assistant-tasks", "/about",
]
UAS = {
    "browser": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36",
    "googlebot": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
}


def fields(doc: str) -> dict:
    def one(pattern):
        m = re.search(pattern, doc, re.S | re.I)
        return html.unescape(re.sub(r"<[^>]+>", "", m.group(1))).strip() if m else None
    return {
        "title": one(r"<title[^>]*>(.*?)</title>"),
        "description": one(r'<meta[^>]*name="description"[^>]*content="([^"]*)"')
        or one(r'<meta[^>]*content="([^"]*)"[^>]*name="description"'),
        "h1": one(r"<h1[^>]*>(.*?)</h1>"),
        "canonical": one(r'<link[^>]*rel="canonical"[^>]*href="([^"]*)"'),
    }


def build_file(build: str, path: str) -> str:
    return f"{build}/index.html" if path == "/" else f"{build}{path}.html"


def fetch(url: str, ua: str) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": ua, "Cache-Control": "no-cache"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read().decode("utf-8", "replace")


def main() -> int:
    build = sys.argv[1] if len(sys.argv) > 1 else "build"
    pages = sys.argv[2:] or DEFAULT_PAGES
    failed = 0
    for path in pages:
        want = fields(open(build_file(build, path), encoding="utf-8").read())
        for name, ua in UAS.items():
            got, ok = {}, False
            for attempt in range(6):
                try:
                    got = fields(fetch(f"{SITE}{path}?v=lc{int(time.time())}{attempt}", ua))
                except Exception as e:  # network error: retry
                    got = {"error": str(e)}
                if got == want:
                    ok = True
                    break
                time.sleep(15)
            if ok:
                print(f"OK   {name:9} {path}  | {want['h1']}")
            else:
                failed = 1
                print(f"FAIL {name:9} {path}")
                for k in want:
                    if got.get(k) != want[k]:
                        print(f"     {k}: live={got.get(k)!r}\n     {' ' * len(k)}  build={want[k]!r}")
                if "error" in got:
                    print(f"     error: {got['error']}")
    return failed


if __name__ == "__main__":
    sys.exit(main())
