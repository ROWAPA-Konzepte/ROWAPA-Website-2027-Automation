// Runde 62: Themenlinie «Vertriebsperformance» im Standard der abgenommenen Performance-Analyse (Entscheide 363, 367, 370, 371).
// Bausteine der Startseite (Logo-Band, Erfolge-Karten, «Gut zu wissen», Kontakt), Header B mit Kopfzeile C, besonderer Effekt: Hebel-Karten stapeln sich (Idee 1).
// Aufruf: node themen62.js <Ausgabeordner>   (MODE=page: ganze Seite Desktop + Handy; MODE=video: Video Desktop + Handy)
const {chromium}=require('playwright');const fs=require('fs');const D=__dirname;
const OUT=process.argv[2]||D+'/out62';
const {FX_CSS,FX_JS}=require('./fx60.js');
const SRC_PA=fs.existsSync(D+'/page61.js')?D+'/page61.js':D+'/runde61_performance-analyse.js'; // im Repo: runde61_performance-analyse.js
const baseCss=fs.readFileSync(SRC_PA,'utf8').match(/const css=`([\s\S]*?)`;\nconst head2/)[1];
const FIGDATA='data:image/png;base64,'+fs.readFileSync(D+'/fig_vertrieb_360.png').toString('base64');
const FIG='https://cdn.prod.website-files.com/6addf1532819c0aacc74a496/6ae10a40c96ff8c9215827f8_grafik-thema-vertrieb-plum-gross.png';
const HOME='https://rowapa-website-2027-automation.webflow.io/';

const css=baseCss+`<style>
.mk-fig img{max-width:300px}
.tl-sec .padding-section-large{padding-top:clamp(4rem,8vw,7rem);padding-bottom:clamp(4rem,8vw,7rem)}
/* Idee 1: Hebel-Karten stapeln sich */
.tl-stack{margin-top:3rem}
.tl-card{position:sticky;top:calc(112px + var(--i)*24px);height:min(60vh,540px);min-height:400px;margin-bottom:6vh}
.tl-card:last-child{margin-bottom:0}
.tl-card-in{height:100%;border-radius:12px;display:grid;grid-template-columns:7fr 5fr;align-items:center;gap:3rem;padding:3rem 3.5rem;transform-origin:center top;will-change:transform;box-shadow:0 24px 60px rgba(29,49,73,.14);background:#fff;border:1px solid #d5d9de;position:relative;overflow:hidden;text-decoration:none;color:inherit}
.tl-card-in:before{content:"";position:absolute;left:0;top:0;right:0;height:4px;background:#AA1351}
.tl-card.is-dark .tl-card-in{background:#1D3149;border-color:#1D3149}.tl-card.is-dark h3,.tl-card.is-dark .tl-no{color:#fff}.tl-card.is-dark p{color:rgba(255,255,255,.82)}.tl-card.is-dark .text-style-kicker{color:#A0C4DF}.tl-card.is-dark .tl-more{color:#fff}
.tl-no{font-weight:700;font-size:clamp(3rem,6vw,5rem);line-height:1;color:#1D3149;opacity:.12;margin-bottom:.5rem}
.tl-card h3{margin:.5rem 0 1rem}.tl-card p{margin:0 0 1.5rem;color:#3a4a5e;max-width:34rem;font-size:1.125rem;line-height:1.55}
.tl-more{font-weight:600;color:#1D3149;text-decoration:underline;text-underline-offset:4px}
.tl-fig img{width:100%;max-width:300px;display:block;margin:0 auto}
/* Ihr Vorteil + Wo anfangen */
.tl-two{display:grid;grid-template-columns:5fr 7fr;gap:4rem;align-items:start}.tl-two .section-head{margin-bottom:0!important}
.tl-two .lead{font-size:1.25rem;line-height:1.6;color:#1D3149;margin:0}
.tl-start{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-top:2.5rem}
.tl-start .card_content{gap:.75rem;height:100%}.tl-start h3{margin:0}.tl-start p{margin:0;color:#3a4a5e}
.tl-start .text-style-link{margin-top:auto;padding-top:.5rem}
.tl-start .card.is-plum .card_content{border-top:3px solid #AA1351}
.tl-links{margin-top:1.5rem}
/* Aus der Praxis */
.tl-praxis .layout-grid{margin-top:3rem}
.tl-praxis .layout-grid.is-erfolge{display:grid!important;grid-template-columns:repeat(3,1fr);gap:1.5rem}
.tl-praxis .card{background:#fff}
@media (max-width:991px){.tl-two{grid-template-columns:1fr;gap:2rem}.tl-card-in{grid-template-columns:1fr;gap:1.5rem;padding:2.5rem}.tl-fig img{max-width:200px;margin:0}}
@media (max-width:991px){.tl-praxis .layout-grid.is-erfolge{grid-template-columns:1fr}}
@media (max-width:767px){.tl-card{top:calc(76px + var(--i)*14px);height:auto;min-height:0;margin-bottom:4vh}.tl-card-in{padding:2rem 1.5rem 1.75rem;gap:1rem}.tl-no{font-size:2.75rem}.tl-card p{font-size:1rem;margin-bottom:1rem}.tl-fig img{max-width:150px}.tl-start{grid-template-columns:1fr}.tl-two .lead{font-size:1.0625rem}}
</style>`;
const STATIC_CSS=`<style>.tl-card{position:relative!important;top:auto!important}</style>`;

const head2=(k,t,p)=>`<div class="section-head"><div class="kicker"><div class="kicker_line"></div><div class="text-style-kicker">${k}</div></div><h2 class="heading-style-h2">${t}</h2>${p?`<p class="text-size-medium text-color-muted">${p}</p>`:''}</div>`;
const sec=(cls,inner,id='')=>`<section ${id?`id="${id}" `:''}class="tl-sec ${cls}"><div class="padding-global"><div class="container-large"><div class="padding-section-large">${inner}</div></div></div></section>`;

// 1 Header B (wie Performance-Analyse): Kopfzeile C, kein Kicker, Strich, ein Satz, zwei Buttons, Themenfigur aus Punkten
const header=`<section class="mk-b"><div class="fx-sea hero_grafik" data-grafik="punktemeer"><img class="hero_grafik-image" src="https://cdn.prod.website-files.com/6addf1532819c0aacc74a496/6ade29614f41302393c93236_grafik-punktemeer-hero.jpg" alt=""></div><div class="padding-global"><div class="container-large"><div class="padding-section-large"><div class="mk-b-grid"><div>
<div class="mk-crumb is-linie"><span class="k">Für Unternehmen</span> › <b>Vertriebsperformance</b></div>
<h1 class="heading-style-h1">Vertriebsstärke ist kein Zufall.</h1><div class="mk-strich"></div>
<p class="mk-lead">ROWAPA entwickelt die Verkaufsleistung Ihres Unternehmens entlang von vier Hebeln, von der Diagnostik über Trainings bis zur Begleitung im Kundenkontakt.</p>
<div class="button-group"><a href="mailto:boek@rowapa.ch" class="button">Erstgespräch vereinbaren</a><a href="#hebel" class="button is-secondary is-alternate">Die vier Hebel</a></div>
</div><div class="mk-fig"><img src="${FIGDATA}" alt="Themenfigur Vertriebsperformance aus Punkten"></div></div></div></div></div></section>`;

// 2 Logo-Band der Startseite
const logos=fs.readFileSync(D+'/section_logos.html','utf8');

// 3 Die Hebel (CMS Hebel, Texte v11), Idee 1
const H=[['Hebel 1','Individuell zugeschnittene Verkaufstrainings','Kundenorientierte Trainings auf Stufe Geschäftsstelle, Generalagentur und Vertriebseinheit, für mehr Wertschöpfung in jedem Gespräch.'],
 ['Hebel 2','Sales-Story-Entwicklung','Kundenorientierte Sales-Stories für Ihre Beratungsansätze und Tools, mit hybridem Storytelling als Game-Changer.'],
 ['Hebel 3','Verkaufsprozess & Strategien','Einheitliche Beratungsstandards entwickeln und verankern, für Kundenbindung und Wettbewerbsvorteile.'],
 ['Hebel 4','Digitales & hybrides Verkaufen','Online-Beratung und hybride Kundenkontakte professionalisieren, für mehr Schlagzahl und Schlagkraft.']];
const hebel=sec('theme-soft',head2('Die Hebel','Vier Hebel für messbare Vertriebsleistung','Einzeln wirksam, gemeinsam ein System.')+
 `<div class="tl-stack">${H.map(([k,t,p],i)=>`<article class="tl-card${i%2?' is-dark':''}" style="--i:${i}"><a href="#" class="tl-card-in"><div><div class="tl-no">0${i+1}</div><div class="text-style-kicker">${k}</div><h3 class="heading-style-h2">${t}</h3><p>${p}</p><span class="tl-more">Mehr erfahren →</span></div><div class="tl-fig"><img src="${FIG}" alt=""></div></a></article>`).join('')}</div>`,'hebel');

// 4 Ihr Vorteil (CMS Vorteil, gekürzt) mit «Wo anfangen?»: Performance-Analyse und SalesStep
const vorteil=sec('theme-hell',`<div class="tl-two"><div>${head2('Ihr Vorteil','Gesicherte Entscheidungen und Wirkung, die bleibt','')}</div><div>
 <p class="lead fx-rev">Sie entscheiden auf gesicherter Grundlage statt aus dem Bauch. Alle unsere Werkzeuge greifen auf die ROWAPA Wissensplattform zu, das Praxiswissen aus 20 Jahren Finanzvertrieb. So arbeiten Ihre Leute mit dem, was in Ihrer Branche wirklich verkauft, und die Wirkung trägt in den Alltag.</p>
 <div class="tl-start">
  <div class="card is-linie is-plum fx-rev"><div class="card_content is-linie"><div class="text-style-kicker">Wo anfangen?</div><h3 class="heading-style-h4">Performance-Analyse</h3><p>Fünf Methoden zeigen, wo in Ihren Teams Potenzial liegt und welcher Hebel am meisten bewegt. Fachlich ausgewertet durch ROWAPA.</p><a href="#" class="text-style-link">Zur Performance-Analyse →</a></div></div>
  <div class="card is-linie fx-rev" style="transition-delay:.14s"><div class="card_content is-linie"><div class="text-style-kicker">Werkzeug</div><h3 class="heading-style-h4">SalesStep</h3><p>Diagnostik der Vertriebskompetenz: Sie sehen schwarz auf weiss, wo Ihre Vertriebsstärke liegt.</p><a href="#" class="text-style-link">Tools und Methoden →</a></div></div>
 </div>
 <div class="tl-links"><a href="#" class="text-style-link">Digitale Lösungen für den Vertrieb →</a></div>
</div></div>`);

// 5 Aus der Praxis: drei Erfolge-Karten der Startseite (freigegebene Stimmen)
const er=fs.readFileSync(D+'/../r54/sec_3_section_erfolge.html','utf8');
function grab(s,start){let i=s.indexOf(start),d=0,j=i;const re=/<\/?div\b/g;re.lastIndex=i;let m;while((m=re.exec(s))){if(m[0]==='<div')d++;else{d--;if(d===0){j=s.indexOf('>',m.index)+1;break}}}return s.slice(i,j)}
let cards=grab(er,'<div class="layout-grid is-3-col is-erfolge">').replace(/<div class="card is-linie">/g,(m,o)=>'<div class="card is-linie fx-rev">');
let n=0;cards=cards.replace(/class="card is-linie fx-rev"/g,()=>`class="card is-linie fx-rev" style="transition-delay:${(n++)*0.14}s"`);
const praxis=sec('theme-soft tl-praxis',head2('Aus der Praxis','Was unsere Kunden über die Zusammenarbeit sagen','')+cards);

// 6 «Gut zu wissen» der Startseite mit den Fragen der Themenlinie (CMS FAQ, v11)
let faq=fs.readFileSync(D+'/section_faq.html','utf8');
const Q=[['Wie individuell sind die Trainings wirklich?','Wir trainieren an Ihren Produkten, Ihren Gesprächssituationen und mit Ihren Zahlen, Standardfolien gibt es bei uns nicht.'],
 ['Wie wird der Erfolg gemessen?','Über vereinbarte Kennzahlen und Beobachtung im Feld. Wirkung wird sichtbar gemacht, nicht behauptet.'],
 ['Was unterscheidet eine Sales-Story von einem Verkaufsleitfaden?','Ein Leitfaden sagt, was zu tun ist. Eine Story gibt dem Gespräch Sinn und Richtung, aus Kundensicht erzählt.'],
 ['Ersticken Standards nicht die Individualität?','Nein. Standards sichern die Basisqualität, damit Persönlichkeit dort wirken kann, wo sie den Unterschied macht.'],
 ['Wie lange dauert die Verankerung?','Verankerung ist Führungsarbeit über Monate. Wir begleiten, bis der Prozess trägt.'],
 ['Verlieren wir online nicht die Beziehung?','Nur ohne Handwerk. Wer Präsenz und Dialog auch am Bildschirm beherrscht, baut Beziehung auf jedem Kanal.']];
faq=faq.replace(/<div class="faq_list">[\s\S]*<\/details><\/div>/,`<div class="faq_list">${Q.map(([q,a],i)=>`<details class="faq_item"${i==0?' open':''}><summary class="faq_question"><h3 class="faq_question-text">${q}</h3><div class="icon-box">+</div></summary><p class="faq_answer">${a}</p></details>`).join('')}</div>`);

// 7 Kontakt der Startseite, Satz angepasst, Button «Erstgespräch vereinbaren» (Entscheid 367: je Seite)
const kontakt=fs.readFileSync(D+'/kontakt.html','utf8').replace(/<p class="text-size-medium text-color-muted">[^<]*<\/p>/,'<p class="text-size-medium text-color-muted">Im Erstgespräch klären wir Ihre Ausgangslage und welcher Hebel in Ihrem Unternehmen am meisten bewegt.</p>');

const page=header+logos+hebel+vorteil+praxis+faq+kontakt;

// Idee 1: Karten treten beim Überdecken leicht zurück
const STACK_JS=`<script>(function(){if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)return;function ready(f){document.readyState!=='loading'?f():document.addEventListener('DOMContentLoaded',f)}
ready(function(){var cards=[].slice.call(document.querySelectorAll('.tl-card'));function u(){var mob=innerWidth<768;cards.forEach(function(c,i){var nx=cards[i+1],inr=c.querySelector('.tl-card-in');if(!nx){inr.style.transform='';inr.style.filter='';return}var st=(mob?76:112)+i*(mob?14:24);var nt=nx.getBoundingClientRect().top;var p=Math.max(0,Math.min(1,1-(nt-st)/(innerHeight*.75)));inr.style.transform='scale('+(1-(mob?0.04:0.06)*p)+')';inr.style.filter='brightness('+(1-0.12*p)+')'})}addEventListener('scroll',u,{passive:true});addEventListener('resize',u);u()})})();</script>`;

const MODE=process.env.MODE||'page';
async function smooth(p,y,ms){await p.evaluate(([y,ms])=>new Promise(res=>{const s0=scrollY,t0=performance.now();const f=n=>{const k=Math.min(1,(n-t0)/ms);const e=k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2;scrollTo(0,s0+(y-s0)*e);k<1?requestAnimationFrame(f):res()};requestAnimationFrame(f)}),[y,ms]);}
const yOf=(p,sel,off=0)=>p.evaluate(([sel,off])=>{const e=document.querySelector(sel);return e?e.getBoundingClientRect().top+scrollY+off:0},[sel,off]);
const fonts=p=>p.route(/fastly\.net\/.*\.woff2/,r=>{const n=r.request().url().split('/').pop().replace(/^[0-9a-f]+-/,'');r.fulfill({path:D+'/../fonts/'+n,contentType:'font/woff2'})});
let MARK=0;
async function video(b,vw,vh,tag,mobile){
  const ctx=await b.newContext({viewport:{width:vw,height:vh},deviceScaleFactor:mobile?2:1,isMobile:!!mobile,hasTouch:!!mobile,recordVideo:{dir:OUT+'/vid_'+tag,size:mobile?{width:780,height:1688}:{width:1440,height:900}}});
  const p=await ctx.newPage();const T0=Date.now();await fonts(p);
  await p.route(HOME,async r=>{let h=fs.readFileSync(D+'/../r54/home_raw.html','utf8');h=h.replace(/<main class="main-wrapper">[\s\S]*<\/main>/,()=>'<main class="main-wrapper">'+page+'</main>');h=h.replace('</head>',()=>css+FX_CSS+'</head>');h=h.replace('</body>',()=>FX_JS+STACK_JS+'</body>');r.fulfill({status:200,body:h,contentType:'text/html; charset=utf-8'})});
  await p.goto(HOME,{waitUntil:'domcontentloaded'});MARK=Date.now();
  const W=ms=>p.waitForTimeout(ms);
  if(!mobile){
    await p.mouse.move(700,300);await W(3800);
    await p.mouse.move(1000,640,{steps:40});await p.mouse.move(380,700,{steps:50});await W(500);
    const y=await yOf(p,'#hebel',0);await smooth(p,y,1600);await W(1200);
    const yS=await yOf(p,'.tl-stack',-150),hS=await p.evaluate(()=>document.querySelector('.tl-stack').offsetHeight);
    await smooth(p,yS,900);await W(500);
    await smooth(p,yS+hS-560,7600);await W(1400);
    await smooth(p,await yOf(p,'.tl-two',-140),1500);await W(2400);
    await smooth(p,await yOf(p,'.tl-praxis',-40),1400);await W(2400);
    await smooth(p,await yOf(p,'.section_faq',-40),1400);await W(1800);
    await smooth(p,await yOf(p,'.section_kontakt',0),1400);await W(2200);
  } else {
    await W(4000);
    const yS=await yOf(p,'#hebel',0),hS=await p.evaluate(()=>document.querySelector('#hebel').offsetHeight);
    await smooth(p,yS,1400);await W(800);
    await smooth(p,yS+hS-700,6500);await W(1200);
    await smooth(p,await yOf(p,'.tl-start',-120),1500);await W(1800);
    await smooth(p,await yOf(p,'.section_kontakt',0),2200);await W(1800);
  }
  const vpath=await p.video().path();await ctx.close();return {vpath,skip:0};
}
(async()=>{const b=await chromium.launch({args:['--use-gl=swiftshader','--enable-webgl','--ignore-gpu-blocklist']});fs.mkdirSync(OUT,{recursive:true});
if(MODE==='video'){const d=await video(b,1440,900,'desktop',false);console.log('desktop',d.vpath);const m=await video(b,390,844,'handy',true);console.log('handy',m.vpath);await b.close();return;}
for(const [vw,vh,tag] of [[1440,900,'desktop'],[390,844,'handy']]){
  const p=await b.newPage({viewport:{width:vw,height:vh},deviceScaleFactor:vw<500?2:1});await fonts(p);
  await p.goto(HOME,{waitUntil:'networkidle'});
  await p.evaluate(([css,html])=>{document.querySelectorAll('script[src*="rowapagrafik"],canvas').forEach(e=>e.remove());
    const m=document.querySelector('main')||document.querySelector('.main-wrapper');m.innerHTML=html;document.head.insertAdjacentHTML('beforeend',css);window.scrollTo(0,0);},[css+STATIC_CSS,page]);
  await p.evaluate(()=>document.fonts.ready);
  await p.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=600){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,100));}window.scrollTo(0,0);});
  await p.waitForTimeout(2000);
  const ov=await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth);
  await p.screenshot({path:`${OUT}/seite_vertriebsperformance_${tag}.png`,fullPage:true});
  console.log(tag,'overflowX',ov,'height',await p.evaluate(()=>document.body.scrollHeight));
  await p.close();}
await b.close();})();
