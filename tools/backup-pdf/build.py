import markdown, sys, re, os
src, out_html, label = sys.argv[1], sys.argv[2], sys.argv[3]
md=open(src).read()
import re as _re
_lines=md.splitlines(); _out=[]
_isli=lambda l: bool(_re.match(r'^\s*([-*]|\d+\.)\s', l))
for _i,_l in enumerate(_lines):
    _m=_re.match(r'^( {2,3})([-*]|\d+\.)\s', _l)
    if _m: _l='    '+_l.lstrip()
    if _isli(_l) and _out and _out[-1].strip() and not _isli(_out[-1]) and not _out[-1].startswith('|'):
        _out.append('')
    _out.append(_l)
md='\n'.join(_out)
title=md.splitlines()[0].lstrip('# ').strip()
body=markdown.markdown('\n'.join(md.splitlines()[1:]), extensions=['tables','sane_lists','nl2br'])
css='''
@font-face{font-family:"TASA Orbiter";src:url(TASAOrbiterDisplay-Regular.woff2);font-weight:400}
@font-face{font-family:"TASA Orbiter";src:url(TASAOrbiterDisplay-Medium.woff2);font-weight:500}
@font-face{font-family:"TASA Orbiter";src:url(TASAOrbiterDisplay-SemiBold.woff2);font-weight:600}
@font-face{font-family:"TASA Orbiter";src:url(TASAOrbiterDisplay-Bold.woff2);font-weight:700}
@font-face{font-family:"TASA Explorer";src:url(TASAExplorer-ExtraBold.woff2);font-weight:800}
@page{size:A4;margin:18mm 16mm 18mm 16mm}
*{box-sizing:border-box}
body{font-family:"TASA Orbiter",Arial,sans-serif;color:#1D3149;font-size:9.6pt;line-height:1.5;margin:0}
.cover{display:flex;justify-content:space-between;align-items:flex-end;border-bottom:1px solid rgba(29,49,73,.14);padding-bottom:14px;margin-bottom:22px}
.cover img{height:34px}
.kicker{display:flex;align-items:center;gap:10px;font-family:"TASA Explorer";font-weight:800;font-size:7.5pt;letter-spacing:.14em;text-transform:uppercase;color:#486EA3;margin:0 0 6px}
.kicker:before{content:"";width:22px;height:2px;background:#AA1351;display:inline-block}
h1{font-weight:700;font-size:24pt;line-height:1.1;margin:0 0 14px;letter-spacing:-.01em}
h2{font-weight:600;font-size:14pt;line-height:1.2;margin:22px 0 8px;padding-top:10px;border-top:1px solid rgba(29,49,73,.14)}
h3{font-weight:600;font-size:11pt;margin:16px 0 6px}
p{margin:0 0 8px}
strong{font-weight:600}
a{color:#486EA3}
code{font-family:"SFMono-Regular",Consolas,monospace;font-size:8.2pt;background:#E8E9E9;padding:1px 4px;border-radius:3px}
pre{background:#E8E9E9;padding:10px;border-radius:4px;font-size:7pt;white-space:pre-wrap;word-break:break-all}
pre code{background:none;padding:0}
table{width:100%;border-collapse:collapse;margin:8px 0 14px;font-size:8.4pt;page-break-inside:auto}
th{font-family:"TASA Explorer";font-weight:800;font-size:6.8pt;letter-spacing:.1em;text-transform:uppercase;color:#486EA3;text-align:left;border-bottom:2px solid #1D3149;padding:5px 6px}
td{border-bottom:1px solid rgba(29,49,73,.14);padding:5px 6px;vertical-align:top}
tr{page-break-inside:avoid}
ul,ol{margin:0 0 10px;padding-left:18px}
li{margin:2px 0}
hr{border:0;border-top:1px solid rgba(29,49,73,.14);margin:16px 0}
blockquote{border-left:2px solid #AA1351;margin:8px 0;padding:2px 10px;color:#4A5A70}
.foot{margin-top:24px;padding-top:8px;border-top:1px solid rgba(29,49,73,.14);font-size:7.5pt;color:#4A5A70;display:flex;justify-content:space-between}
'''
html=f'''<!doctype html><html lang="de"><head><meta charset="utf-8"><title>{title}</title><style>{css}</style></head><body>
<div class="cover"><img src="logo.svg" alt="ROWAPA"><div class="kicker">{label}</div></div>
<h1>{title.replace("ROWAPA Website 2027 · ","")}</h1>
<div class="kicker">ROWAPA Website 2027 · Backup 25.10.2026</div>
{body}
<div class="foot"><span>ROWAPA AG · Lösungen für Vertriebs- und Mitarbeiterperformance</span><span>Backup 25.10.2026</span></div>
</body></html>'''
open(out_html,'w').write(html)
