"""Audit prerendered pages: one <title>/description/H1 each, canonical, JSON-LD types, image alts, duplicates.
Usage: python3 scripts/audit-seo.py build"""
import re,glob,json,os,html,sys
B=sys.argv[1]
files=sorted(glob.glob(B+'/**/*.html',recursive=True))
titles={}; descs={}
for f in files:
    s=open(f).read()
    rel='/'+os.path.relpath(f,B)[:-5]
    t=re.findall(r'<title[^>]*>(.*?)</title>',s,re.S)
    d=re.findall(r'<meta[^>]*name="description"[^>]*content="([^"]*)"',s)
    c=re.findall(r'<link[^>]*rel="canonical"[^>]*href="([^"]*)"',s)
    h1=re.findall(r'<h1[\s>]',s)
    ld=re.findall(r'<script type="application/ld\+json">(.*?)</script>',s,re.S)
    types=[]
    for j in ld:
        g=json.loads(j)
        types+= [x['@type'] for x in g.get('@graph',[])]
    imgs=re.findall(r'<img[^>]*>',s)
    noalt=[i for i in imgs if 'alt=' not in i or 'alt=""' in i]
    words=len(re.sub(r'<[^>]+>',' ',re.sub(r'<(script|style)[^>]*>.*?</\1>','',s,flags=re.S)).split())
    tt=html.unescape(t[0]) if t else ''
    flag=[]
    if len(t)!=1: flag.append(f'titles={len(t)}')
    if len(d)!=1: flag.append(f'desc={len(d)}')
    if len(h1)!=1: flag.append(f'h1={len(h1)}')
    if len(tt)>60: flag.append(f'titlelen={len(tt)}')
    if d and len(html.unescape(d[0]))>160: flag.append(f'desclen={len(d[0])}')
    if noalt: flag.append(f'noalt={len(noalt)}')
    titles.setdefault(tt,[]).append(rel); 
    if d: descs.setdefault(d[0],[]).append(rel)
    print(f"{rel:55} w={words:5} h1={len(h1)} canon={'Y' if c else 'N'} ld={','.join(types)} {' '.join(flag)}")
print('dup titles:',[v for v in titles.values() if len(v)>1])
print('dup descs:',[v for v in descs.values() if len(v)>1])
