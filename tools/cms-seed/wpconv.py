import json,re,html,sys
from html.parser import HTMLParser
S='/tmp/claude-0/-home-user-ROWAPA-Website-2027-Automation/700fce16-b9c8-5401-98b4-a873784ad01f/scratchpad/'
d=json.load(open(S+'wp/posts1.json'))
CAT={'Sales':'6ae2642911b6933e17058981','Leadership':'6ae2642911b6933e17058983','Persönlichkeit':'6ae2642911b6933e17058985','Recruiting':'6ae2642911b6933e17058987','ROWAPA':'6ae2642911b6933e17058989'}
KEEP={'h2','h3','h4','p','ul','ol','li','blockquote','strong','b','em','i','a','br','img','figure','figcaption','cite','sub','sup','table'}
class C(HTMLParser):
    def __init__(s):
        super().__init__(convert_charrefs=True); s.o=[]; s.skip=0; s.stack=[]; s.cta=None; s.ctadepth=0
    def handle_starttag(s,t,a):
        a=dict(a); cl=a.get('class','')
        if s.skip: 
            if t=='div': s.skip+=1
            return
        if t=='div' and ('wp-block-group' in cl and ('has-background' in cl)):
            s.skip=1; s.cta={'h':'','p':'','btn':'','href':''}; s.ctabuf=None; s.inbox=True; return
        if t in('script','style','iframe','noscript'): s.stack.append(t); return
        if t=='h4': t='h3'
        if t=='b': t='strong'
        if t=='i': t='em'
        if t not in KEEP: return
        if t=='a':
            href=a.get('href','')
            href=re.sub(r'^https?://(www\.)?rowapa\.ch','',href)
            s.o.append(f'<a href="{html.escape(href,quote=True)}">'); return
        if t=='img':
            src=a.get('src',''); alt=a.get('alt','')
            if src: s.o.append(f'<img src="{html.escape(src,quote=True)}" alt="{html.escape(alt,quote=True)}">')
            return
        if t in('figure','figcaption','cite','table'): 
            if t=='cite': s.o.append('<br><em>')
            return
        s.o.append('<br>' if t=='br' else f'<{t}>')
    def handle_endtag(s,t):
        if s.skip:
            if t=='div':
                s.skip-=1
            return
        if s.stack and t==s.stack[-1]: s.stack.pop(); return
        if t=='h4': t='h3'
        if t=='b': t='strong'
        if t=='i': t='em'
        if t=='cite': s.o.append('</em>'); return
        if t in KEEP and t not in('br','img','figure','figcaption','table'): s.o.append(f'</{t}>')
    def handle_data(s,x):
        if s.stack: return
        if s.skip:
            return
        s.o.append(html.escape(x,quote=False))
def ctabox(raw):
    m=re.search(r'<div class="wp-block-group[^"]*has-background[^"]*"[^>]*>(.*?)<div style="height:70px" aria-hidden="true" class="wp-block-spacer"></div>\s*</div>',raw,re.S)
    if not m: return None
    b=m.group(1)
    t=lambda r: html.unescape(re.sub(r'<[^>]+>','',r)).strip()
    h=re.search(r'<h[2-4][^>]*>(.*?)</h[2-4]>',b,re.S); p=re.search(r'<p[^>]*>(.*?)</p>',b,re.S); a=re.search(r'<a[^>]*href="([^"]+)"[^>]*>(.*?)</a>',b,re.S)
    return {'h':t(h.group(1)) if h else '','p':t(p.group(1)) if p else '','btn':t(a.group(2)) if a else '','href':a.group(1) if a else ''}
def clean(raw):
    c=C(); c.feed(raw); h=''.join(c.o)
    h=re.sub(r'\s+',' ',h); h=re.sub(r'<p>\s*</p>','',h); h=re.sub(r'<(strong|em)>\s*</\1>','',h)
    h=h.replace('<p> ','<p>').replace(' </p>','</p>')
    h=re.sub(r'>\s+<','><',h)
    return h.strip()
def txt(x): return re.sub(r'\s+',' ',html.unescape(re.sub(r'<[^>]+>',' ',x))).strip()
out=[]
for p in d:
    raw=p['content']['rendered']; body=clean(raw); cta=ctabox(raw)
    cats=[x['name'] for g in p['_embedded'].get('wp:term',[]) for x in g if x['taxonomy']=='category']
    fm=p['_embedded'].get('wp:featuredmedia',[{}])[0]; img=fm.get('source_url'); alt=fm.get('alt_text') or txt(p['title']['rendered'])
    y=p.get('yoast_head_json') or {}
    ex=txt(p['excerpt']['rendered']).replace(' [&hellip;]','').replace('[…]','').strip()
    if len(ex)>180:
        cut=ex[:180]; ex=cut[:cut.rfind(' ')].rstrip(',;:')+' …'
    words=len(txt(body).split())
    fd={'name':txt(p['title']['rendered']),'slug':p['slug'],'veroffentlicht-am':p['date']+'.000Z','lesezeit':max(1,round(words/200)),'teaser':ex,'inhalt':body,'alte-url':re.sub(r'^https?://(www\.)?rowapa\.ch','',p['link']),'hervorheben':False}
    if cats and cats[0] in CAT: fd['kategorie']=CAT[cats[0]]
    if img: fd['titelbild']={'url':img,'alt':alt}
    if y.get('title'): fd['seo-titel']=y['title'].replace(' - ROWAPA','').replace(' | ROWAPA','')[:60]
    if y.get('description'): fd['seo-beschreibung']=y['description']
    if cta and cta['h']:
        fd['losungs-cta-titel']=cta['h']; fd['losungs-cta-text']=cta['p']; fd['losungs-cta-button-text']=cta['btn']; fd['losungs-cta-link']=re.sub(r'^https?://(www\.)?rowapa\.ch','https://rowapa.ch',cta['href'])
    if words<60: fd['platzhalter']=True
    out.append({'isDraft':True,'fieldData':fd,'_autor':p['_embedded'].get('author',[{}])[0].get('name'),'_cats':cats,'_words':words})
json.dump(out,open(S+'wpjob/all.json','w'),ensure_ascii=False)
import statistics
print(len(out),sum(len(json.dumps(o['fieldData'],ensure_ascii=False)) for o in out))
o=out[5]['fieldData']; print(json.dumps({k:v for k,v in o.items() if k!='inhalt'},ensure_ascii=False,indent=0)); print(o['inhalt'][:1500])
