#!/usr/bin/env python3
"""
Build a Google disavow file from a Semrush backlink export.

Usage:
  python3 scripts/build-disavow.py <semrush-export.csv> [--max-as 10] [--out seo-reports/disavow-YYYY-MM-DD.txt]

Works with either Semrush export:
  - Backlink Analytics > Referring Domains  (columns like "Domain", "Domain ascore")
  - Backlink Analytics > Backlinks          (columns like "Source url", "Page ascore", "Anchor")

A domain is disavowed when its Authority Score is <= --max-as, OR any of its anchors matches a
paid-link/spam pattern. Sister sites and well-known platforms are never disavowed (see KEEP).
Review the output before uploading it at https://search.google.com/search-console/disavow-links
"""
import csv, re, sys, datetime, argparse
from urllib.parse import urlparse

SPAM_ANCHOR = re.compile(
    r"backlink|dofollow|do-follow|link ?building|tiered|seo premium|buy (links|backlinks)|cheap|"
    r"casino|slot|betting|porn|viagra|cialis|loan|crypto|pinterest marketing|fully automated|visit site",
    re.I,
)
KEEP = {
    "zingoassist.us", "alphamediassist.com", "learnwithalpha.com", "devsynx.com", "rankempire.us",
    "qualifiedleadsx.com", "google.com", "linkedin.com", "facebook.com", "instagram.com", "x.com", "twitter.com",
    "youtube.com", "clutch.co", "goodfirms.co", "upwork.com", "crunchbase.com", "trustpilot.com", "bebee.com",
}

def root(host: str) -> str:
    host = (host or "").lower().strip().lstrip(".")
    host = re.sub(r"^www\d*\.", "", host)
    return host

def col(row, *names):
    for n in names:
        for k in row:
            if k and k.strip().lower() == n:
                return row[k]
    return ""

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("csv")
    ap.add_argument("--max-as", type=int, default=10)
    ap.add_argument("--out", default=f"seo-reports/disavow-{datetime.date.today().isoformat()}.txt")
    a = ap.parse_args()

    score, spam, seen = {}, set(), set()
    with open(a.csv, newline="", encoding="utf-8-sig") as f:
        for row in csv.DictReader(f):
            dom = col(row, "domain", "referring domain")
            if not dom:
                src = col(row, "source url", "source_url", "url")
                dom = urlparse(src if "://" in src else "http://" + src).hostname or ""
            dom = root(dom)
            if not dom:
                continue
            seen.add(dom)
            s = col(row, "domain ascore", "page ascore", "authority score", "ascore")
            try:
                s = int(float(s))
                score[dom] = min(score.get(dom, s), s)
            except ValueError:
                pass
            if SPAM_ANCHOR.search(col(row, "anchor", "anchor text") or ""):
                spam.add(dom)

    bad = sorted(d for d in seen if d not in KEEP and not any(d.endswith("." + k) for k in KEEP)
                 and (d in spam or score.get(d, 99) <= a.max_as))
    with open(a.out, "w") as f:
        f.write(f"# Disavow file for alphaaheadllc.com, built {datetime.date.today().isoformat()} from {a.csv}\n")
        f.write(f"# Rule: Authority Score <= {a.max_as} or paid-link/spam anchor. Reviewed by the owner before upload.\n")
        for d in bad:
            f.write(f"domain:{d}\n")
    print(f"{len(seen)} referring domains read, {len(bad)} to disavow, {len(spam)} with spam anchors -> {a.out}")

if __name__ == "__main__":
    main()
