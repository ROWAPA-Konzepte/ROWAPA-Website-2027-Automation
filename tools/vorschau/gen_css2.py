import json, re
F='styles_v2.txt'
s=open(F).read(); styles=json.loads(s[s.index('{'):])['result']
V={  # static variables
 'fe3a3a7b-09db-9af5-1993-da81578cef40':'#1D3149','cf365b75-1779-9932-2fe8-2b23de60d578':'#111D2C','5aa61c47-0ac4-22fa-0415-c0afd2a1e98a':'#486EA3',
 'c539e536-21ff-cae0-f59a-65fd654b9b17':'#A0C4DF','1a78331c-66ce-fda1-e524-e6390f73f1b4':'#AA1351','1582ab5b-4a11-a9d0-c3f6-72de553b6d0b':'#8E0F44',
 'fd17a0e7-42ae-cfc1-edf1-0d95a6648d0a':'#E8E9E9','f1c9d591-38ee-54e0-1404-03e27f38ebb4':'#FFFFFF','0637c7f5-daf3-e230-49de-bab6a340e5d6':'#D9E7F2',
 '76b27da2-711f-784f-24f1-206cc211562e':'#FBEEF3','c30c831b-0c1d-6fba-188d-32fb747afc54':'#4A5A70','06720d3a-77de-6eea-1e97-04dd2c0a63d8':'rgba(29,49,73,0.14)',
 '7e5f647f-b097-1208-40b9-5c98a4dd7bdf':'rgba(255,255,255,0.16)','e37ff32c-9e84-0efa-cc6c-920013f244a8':'rgba(255,255,255,0.76)','bdfbaab1-2a9a-c868-1a09-8a3e89303572':'0.7',
 '5e857e69-0571-e1b6-5958-cd8765bdb148':'0.12',
 '95314c16-941a-4e52-dcef-5071dc4fca12':'0.5rem','183f7062-9fcb-933f-ab41-afeaccfa6f4e':'1rem','cc35f698-1593-0f98-a7f9-94bd7ff2ca46':'1.5rem','cfe0af03-1669-2aad-195e-55fb14b6a3b9':'2rem',
 '9910cdf3-c609-16bb-954c-8db6d6448f06':'3rem','96cbd6d6-9f24-f7f9-a689-152ce3828ad8':'4rem','1f6d862a-fb8c-00ef-51e5-e4ebc94b0fa3':'0.25rem','3a7f0c26-29e5-6c28-807f-6dbd5ed1b0d7':'0.5rem',
 'bced950a-0f98-d76d-669e-51fbc6e64acf':'6rem','ec12a868-12f3-351c-bb7a-0c930433a6cb':'8rem',
 'fed16afd-7f43-266f-5355-bb5bc3f01043':'"TASA Orbiter Display", Arial, sans-serif','e5983ef6-9385-4978-c775-415b83776cf4':'"TASA Explorer", Arial, sans-serif',
 'df1bb2fc-c937-a2c8-2309-882dee03e4ea':'1.1','4c2e2596-f590-8ce1-fbd7-30dfdbf789c3':'1.5',
 '189f0618-8831-ce59-d5ae-00ef4194d9d3':'80rem','ff099e6b-498b-c390-384a-d4f1c153cf90':'90rem','2ac3d4c2-48c8-df94-5900-5cc9e3150c95':'108rem','73da4b95-1b01-ceba-c04b-97f63464ccc5':'64rem','65693995-8b19-c3be-37c2-5058ebe5647f':'48rem',
}
W='f1c9d591-38ee-54e0-1404-03e27f38ebb4'; M='fe3a3a7b-09db-9af5-1993-da81578cef40'
T={ # theme var id -> [base, soft, sea, kontrast, tiefsee] (variable ids or literals)
 '84191b01-299a-f30a-c229-75c204c58ff4':[W,'fd17a0e7-42ae-cfc1-edf1-0d95a6648d0a','0637c7f5-daf3-e230-49de-bab6a340e5d6',M,'cf365b75-1779-9932-2fe8-2b23de60d578'],
 '0f82aeba-36d1-bcfd-7312-60a8c2140c3b':[M,M,M,W,W],
 'a89cd6bf-43db-2040-0305-ffc64bf0af71':[M,M,M,W,W],
 '16164893-6702-f14c-849c-e691dc2a3fd6':['c30c831b-0c1d-6fba-188d-32fb747afc54']*3+['e37ff32c-9e84-0efa-cc6c-920013f244a8']*2,
 '315e777a-f594-d701-ad1a-ed832ec613b1':['06720d3a-77de-6eea-1e97-04dd2c0a63d8']*3+['7e5f647f-b097-1208-40b9-5c98a4dd7bdf']*2,
 '2ff9e1f7-a1cc-b561-337a-62098f4338a2':['1a78331c-66ce-fda1-e524-e6390f73f1b4']*5,
 'ea9a0156-340e-6bf3-e943-9b8770e6b360':[W,W,W,'rgba(255,255,255,0.06)','rgba(255,255,255,0.06)'],
 'a8099603-5147-a808-3591-d89fade65a71':['06720d3a-77de-6eea-1e97-04dd2c0a63d8']*3+['7e5f647f-b097-1208-40b9-5c98a4dd7bdf']*2,
 '02687d7a-a3cc-6024-60b9-0e72b1ae08fb':['5aa61c47-0ac4-22fa-0415-c0afd2a1e98a']*3+['c539e536-21ff-cae0-f59a-65fd654b9b17']*2,
 'e43e9a6e-4374-4321-7eaa-05ebb6c45ce7':[M,M,M,'rgba(255,255,255,0.12)','rgba(255,255,255,0.12)'],
 '565c4129-de49-6a9d-07b3-e59bbae0dc71':[W]*5,
}
MODES={'base':0,'mode-f74fc9d0-83d2-1439-2937-e8a77dfb0800':1,'mode-27be7aa1-8719-6377-ff5e-e7157d15fd56':2,'mode-94a56d37-f88d-dd42-b715-095bf477aec4':3,'mode-63d57d41-e6c9-e9e2-30e8-f7cbea779ff8':4}
def val(v):
    return V.get(v, v) if not v.startswith('rgba') else v
def theme_block(i):
    return ''.join(f'--t-{k}:{val(vals[i])};' for k,vals in T.items())
def prop(v):
    if isinstance(v,dict):
        vid=v['id'].replace('variable-','')
        if vid in T: return f'var(--t-{vid})'
        if vid in V: return V[vid]
        return 'inherit'
    return v
def block(props):
    out=[]
    for k,v in props.items():
        if k.startswith('---mode--'):
            out.append(theme_block(MODES.get(v,0)))
        elif k=='grid-column-gap': out.append(f'column-gap:{prop(v)};')
        elif k=='grid-row-gap': out.append(f'row-gap:{prop(v)};')
        else: out.append(f'{k}:{prop(v)};')
    return ''.join(out)
css=[':root{'+theme_block(0)+'}']
maxbps={'medium':991,'small':767,'tiny':479}
minbps={'large':1280,'xl':1440,'xxl':1920}
media={b:[] for b in list(maxbps)+list(minbps)}
for st in styles:
    sel=st['selector']; p=st['properties']
    b=p.get('base',{}).get('properties')
    if b: css.append(f'{sel}{{{block(b)}}}')
    for bp,pp in (p.get('breakpoints') or {}).items():
        props=dict(pp.get('properties') or {})
        if sel=='.padding-global' and bp=='xxl':  # in Webflow bereits korrigiert
            props={k:v for k,v in props.items() if not k.startswith('---mode')}
        if bp in media and props: media[bp].append(f'{sel}{{{block(props)}}}')
for bp in ['large','xl','xxl']:
    css.append(f'@media (min-width:{minbps[bp]}px){{'+''.join(media[bp])+'}')
for bp in ['medium','small','tiny']:
    css.append(f'@media (max-width:{maxbps[bp]}px){{'+''.join(media[bp])+'}')
open('site.css','w').write('\n'.join(css)); print(len(css))
