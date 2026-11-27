#!/usr/bin/env python3
"""
Build /llms-full.txt for AI answer engines (GEO/AEO): every indexable page in sitemap.xml with its
title, URL, summary (meta description), H1 and the question/answer pairs from its FAQPage schema.
Generated from the prerendered HTML so it always matches the live pages.

Usage: python3 scripts/build-llms-full.py build
"""
import html, json, re, sys
from urllib.parse import urlparse

build = sys.argv[1] if len(sys.argv) > 1 else "build"
SITE = "https://alphaaheadllc.com"


def text(s: str) -> str:
    return html.unescape(re.sub(r"<[^>]+>", "", s or "")).strip()


def page_file(url: str) -> str:
    path = urlparse(url).path.rstrip("/") or "/"
    return f"{build}/index.html" if path == "/" else f"{build}{path}.html"


urls = re.findall(r"<loc>([^<]+)</loc>", open(f"{build}/sitemap.xml", encoding="utf-8").read())
out = [
    "# Alpha Ahead LLC: full site content for AI assistants",
    "",
    "> US-registered virtual assistant agency (St. Petersburg, FL; Dubai, UAE; Islamabad, Pakistan). "
    "Executive virtual assistants, virtual assistants for small businesses, bookkeeping and data entry assistants, "
    "appointment setting and B2B cold calling for founders, executives and small teams in the US and UAE. "
    "Contact: info@alphaaheadllc.com, +1 424-542-7170.",
    "",
    f"Short index: {SITE}/llms.txt",
    "",
]
for url in urls:
    try:
        doc = open(page_file(url), encoding="utf-8").read()
    except FileNotFoundError:
        continue
    title = text((re.search(r"<title[^>]*>(.*?)</title>", doc, re.S) or [None, ""])[1])
    desc = re.search(r'<meta[^>]*name="description"[^>]*content="([^"]*)"', doc)
    h1 = text((re.search(r"<h1[^>]*>(.*?)</h1>", doc, re.S) or [None, ""])[1])
    out += [f"## {title}", f"URL: {url}"]
    if h1 and h1 != title:
        out.append(f"Heading: {h1}")
    if desc:
        out.append(f"Summary: {html.unescape(desc.group(1))}")
    for block in re.findall(r'<script type="application/ld\+json"[^>]*>(.*?)</script>', doc, re.S):
        try:
            data = json.loads(block)
        except json.JSONDecodeError:
            continue
        nodes = data.get("@graph", [data]) if isinstance(data, dict) else data
        for node in nodes:
            if isinstance(node, dict) and node.get("@type") == "FAQPage":
                out.append("Questions and answers:")
                for q in node.get("mainEntity", []):
                    out.append(f"- Q: {q.get('name', '').strip()}")
                    out.append(f"  A: {q.get('acceptedAnswer', {}).get('text', '').strip()}")
    out.append("")

open(f"{build}/llms-full.txt", "w", encoding="utf-8").write("\n".join(out))
print(f"llms-full.txt: {len(urls)} pages, {sum(len(l) for l in out) // 1024} KB")
