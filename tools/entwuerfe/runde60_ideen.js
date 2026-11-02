// Runde 60: Vorschau «besonderer Effekt je Seitenfamilie» als Video (vier Ideen auf einer Vorschauseite).
// Hülle: Startseite der Testadresse (Navigation, Footer, ROWAPA-Grafik-Skript mit Mauszeiger); Inhalte aus Startseite, Runde 50 und v11.
// Aufruf: node runde60_ideen.js <Ausgabeordner> (einzeln: ONLY=idee4). Pfade zu Startseiten-Kopie und Schriften zeigen auf den Arbeitsordner (scratchpad).
const {chromium}=require('playwright');const fs=require('fs');const D=__dirname;
const OUT=process.argv[2]||D+'/out60';
const HOME='https://rowapa-website-2027-automation.webflow.io/';
const FIG='https://cdn.prod.website-files.com/6addf1532819c0aacc74a496/6ae10a40c96ff8c9215827f8_grafik-thema-vertrieb-plum-gross.png';
const head2=(k,t,p)=>`<div class="section-head"><div class="kicker"><div class="kicker_line"></div><div class="text-style-kicker">${k}</div></div><h2 class="heading-style-h2">${t}</h2>${p?`<p class="text-size-medium text-color-muted">${p}</p>`:''}</div>`;
const sec=(cls,inner,id)=>`<section id="${id}" class="dm-sec ${cls}"><div class="padding-global"><div class="container-large"><div class="padding-section-large">${inner}</div></div></div></section>`;
const tag=t=>`<div class="dm-tag">${t}</div>`;

const css=`<style>
.dm-sec .padding-section-large{padding-top:clamp(5rem,8vw,7rem);padding-bottom:clamp(5rem,8vw,7rem)}
.dm-tag{display:inline-block;margin-bottom:1.5rem;background:#AA1351;color:#fff;font-family:var(--_typo---font-accent,inherit);font-weight:800;font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;padding:.35rem .7rem;border-radius:2px}
.dm-intro{background:#1D3149;color:#fff}.dm-intro h1{color:#fff;margin:0 0 1rem;font-size:clamp(2.25rem,4vw,3.5rem)}.dm-intro p{color:rgba(255,255,255,.8);max-width:44rem;font-size:1.15rem}
/* 1 Karten stapeln */
.dm-stack{margin-top:3rem}
.dm-card{position:sticky;top:calc(120px + var(--i)*26px);height:min(62vh,560px);min-height:420px;margin-bottom:7vh}
.dm-card-in{height:100%;border-radius:12px;display:grid;grid-template-columns:7fr 5fr;align-items:center;gap:3rem;padding:3rem 3.5rem;transform-origin:center top;will-change:transform;box-shadow:0 24px 60px rgba(29,49,73,.16);background:#fff;border:1px solid #d5d9de;position:relative;overflow:hidden}
.dm-card-in:before{content:"";position:absolute;left:0;top:0;right:0;height:4px;background:#AA1351}
.dm-card.is-dark .dm-card-in{background:#1D3149;border-color:#1D3149}.dm-card.is-dark h3,.dm-card.is-dark .dm-no{color:#fff}.dm-card.is-dark p{color:rgba(255,255,255,.82)}.dm-card.is-dark .text-style-kicker{color:#A0C4DF}.dm-card.is-dark a{color:#fff}
.dm-no{font-weight:700;font-size:clamp(3rem,6vw,5rem);line-height:1;color:#1D3149;opacity:.12;margin-bottom:.5rem}
.dm-card h3{margin:.5rem 0 1rem}.dm-card p{margin:0 0 1.5rem;color:#3a4a5e;max-width:34rem}
.dm-fig img{width:100%;max-width:320px;display:block;margin:0 auto}
/* 2 Text bleibt stehen */
.dm-sticky{display:grid;grid-template-columns:5fr 7fr;gap:5rem;margin-top:1rem}
.dm-left-in{position:sticky;top:28vh}
.dm-left h2{margin:.75rem 0 1rem}.dm-left p{color:#3a4a5e;margin:0 0 2rem}
.dm-dots{display:flex;gap:.5rem;margin-top:2rem}.dm-dots span{width:2.25rem;height:3px;background:#d5d9de;transition:background .3s}.dm-dots span.on{background:#AA1351}
.dm-count{margin-top:.75rem;font-family:var(--_typo---font-accent,inherit);font-weight:800;font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:#AA1351}
.dm-item{min-height:62vh;display:flex;align-items:center}
.dm-item-in{width:100%;background:#fff;border:1px solid #d5d9de;border-radius:10px;padding:3rem;transition:opacity .5s,transform .6s cubic-bezier(.2,.7,.2,1);opacity:.25;transform:scale(.96)}
.dm-item.on .dm-item-in{opacity:1;transform:none;box-shadow:0 20px 50px rgba(29,49,73,.12)}
.dm-big{font-weight:700;font-size:clamp(4rem,8vw,6.5rem);line-height:1;color:#AA1351;margin-bottom:1rem}
.dm-item .quote_text{font-size:1.5rem;line-height:1.45;color:#1D3149;margin:1rem 0 1.5rem}
/* 3 Lernweg */
.dm-path{position:relative;margin-top:4rem;padding:2rem 0}
.dm-path svg{position:absolute;left:50%;top:0;height:100%;width:40px;margin-left:-20px;overflow:visible}
.dm-path path.base{stroke:#d5d9de;stroke-width:2;fill:none}.dm-path path.draw{stroke:#AA1351;stroke-width:3;fill:none}
.dm-path circle.tip{fill:#AA1351}
.dm-step{position:relative;display:grid;grid-template-columns:1fr 80px 1fr;align-items:center;min-height:38vh}
.dm-step .dm-dot{grid-column:2;justify-self:center;width:3.5rem;height:3.5rem;border-radius:50%;background:#fff;border:2px solid #c9ced4;display:flex;align-items:center;justify-content:center;font-family:var(--_typo---font-accent,inherit);font-weight:800;color:#5a6878;transition:all .4s;z-index:2}
.dm-step.on .dm-dot{background:#AA1351;border-color:#AA1351;color:#fff;box-shadow:0 0 0 8px rgba(170,19,81,.15)}
.dm-step .dm-box{background:#fff;border-radius:10px;padding:2rem;border:1px solid #d5d9de;max-width:30rem;transition:opacity .6s,transform .7s cubic-bezier(.2,.7,.2,1);opacity:0}
.dm-step:nth-child(odd) .dm-box{grid-column:1;justify-self:end;transform:translateX(-40px)}.dm-step:nth-child(even) .dm-box{grid-column:3;grid-row:1;transform:translateX(40px)}
.dm-step.on .dm-box{opacity:1;transform:none}
.dm-box .text-style-kicker{color:#486EA3}.dm-box h3{margin:.5rem 0}.dm-box p{margin:0;color:#3a4a5e}
/* 4 Team */
.dm-team .team_card{opacity:1!important;transform:none!important}
.dm-team canvas.dm-pix{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}
.dm-team .dm-hint{margin-top:1rem;font-size:.9rem;color:#3a4a5e}
</style>`;

const H=[['Hebel 1','Individuell zugeschnittene Verkaufstrainings','Kundenorientierte Trainings auf Stufe Geschäftsstelle, Generalagentur und Vertriebseinheit, für mehr Wertschöpfung in jedem Gespräch.'],
 ['Hebel 2','Sales-Story-Entwicklung','Kundenorientierte Sales-Stories für Ihre Beratungsansätze und Tools, mit hybridem Storytelling als Game-Changer.'],
 ['Hebel 3','Verkaufsprozess & Strategien','Einheitliche Beratungsstandards entwickeln und verankern, für Kundenbindung und Wettbewerbsvorteile.'],
 ['Hebel 4','Digitales & hybrides Verkaufen','Online-Beratung und hybride Kundenkontakte professionalisieren, für mehr Schlagzahl und Schlagkraft.']];
const intro=`<section class="dm-intro"><div class="padding-global"><div class="container-large"><div class="padding-section-large" style="padding-top:8rem;padding-bottom:4rem">${tag('Vorschau')}<h1>Ein besonderer Effekt je Seitenfamilie</h1><p>Vier Ideen, jeweils mit echten Inhalten von der Startseite und den bisherigen Entwürfen. Navigation, Mauszeiger und Footer wie auf der Website.</p></div></div></div></section>`;
const s1=sec('theme-soft',tag('Idee 1 · Themenlinie')+head2('Die Hebel','Vier Hebel für messbare Vertriebsleistung','Einzeln wirksam, gemeinsam ein System.')+
 `<div class="dm-stack">${H.map(([k,t,p],i)=>`<article class="dm-card${i%2?' is-dark':''}" style="--i:${i}"><div class="dm-card-in"><div><div class="dm-no">0${i+1}</div><div class="text-style-kicker">${k}</div><h3 class="heading-style-h2">${t}</h3><p class="text-size-medium">${p}</p><a href="#" class="text-style-link">Mehr erfahren →</a></div><div class="dm-fig"><img src="${FIG}" alt=""></div></div></article>`).join('')}</div>`,'idee1');
const B=[`<div class="dm-big">98 %</div><h3 class="heading-style-h3">zufriedene Kunden aus der Befragung 2025</h3>`,
 `<div class="dm-big">100 %</div><h3 class="heading-style-h3">unserer Kunden beauftragen uns erneut</h3>`,
 `<h3 class="quote_headline is-small">Sehr hohe Umsetzungsquote.</h3><p class="quote_text is-plain">«Die Seminare zeichnen sich durch einen sehr hohen Praxisbezug aus. Sie gewinnen unsere Mitarbeitenden für sich und garantieren eine sehr hohe Umsetzungsquote.»</p><div class="quote_author"><div class="person_name">Bernard Dietrich</div><div class="person_role">Leiter Vertrieb &amp; Marketing, Basler Versicherung</div></div>`,
 `<h3 class="quote_headline is-small">Vier Kennzahlen massgeblich verbessert.</h3><p class="quote_text is-plain">«Durch die Schulungen konnten wir verschiedene Zahlen massgeblich und qualitativ stark verbessern: Abschlussquote, Prämiendurchschnitt, Cross- und Up-Selling-Quote und Stornoquote.»</p><div class="quote_author"><div class="person_name">Adrian Künzli</div><div class="person_role">Generalagent, die Mobiliar Ausserrhoden</div></div>`];
const s2=sec('theme-hell',tag('Idee 2 · Hebel-Seite')+`<div class="dm-sticky"><div class="dm-left"><div class="dm-left-in"><div class="kicker"><div class="kicker_line"></div><div class="text-style-kicker">Hebel 1 · Vertriebsperformance</div></div><h2 class="heading-style-h2">Individuell zugeschnittene Verkaufstrainings</h2><p class="text-size-medium">Kundenorientierte Trainings auf Stufe Geschäftsstelle, Generalagentur und Vertriebseinheit, für mehr Wertschöpfung in jedem Gespräch.</p><a href="#" class="button">Erstgespräch vereinbaren</a><div class="dm-dots">${B.map(()=>'<span></span>').join('')}</div><div class="dm-count"></div></div></div>
 <div class="dm-right">${B.map(b=>`<div class="dm-item"><div class="dm-item-in">${b}</div></div>`).join('')}</div></div>`,'idee2');
const P=[['01','Standort bestimmen','Mit einem Selbstcheck oder einer Standortbestimmung siehst Du, wo Du stehst und wohin Du willst.'],
 ['02','Weiterbilden','Seminare und der CAS Professional Leadership for Finance bringen Dich fachlich und persönlich weiter.'],
 ['03','Begleitet umsetzen','Coaching und Mentoring 1:1 helfen Dir, Neues im Alltag umzusetzen.'],
 ['04','Nächster Schritt','Mehr Verantwortung, eine neue Rolle oder Dein eigenes Team.']];
const s3=sec('theme-soft',tag('Idee 3 · Meine Entwicklung')+head2('Persönliche Entwicklung','Dein Weg vom Einstieg bis zur Führungsrolle','Eine Plum-Linie zeichnet beim Scrollen Deinen Lernweg.')+
 `<div class="dm-path"><svg aria-hidden="true"><path class="base"/><path class="draw"/><circle class="tip" r="7" cx="20" cy="0"/></svg>${P.map(([n,t,p])=>`<div class="dm-step"><div class="dm-box"><div class="text-style-kicker">Schritt ${n}</div><h3 class="heading-style-h3">${t}</h3><p>${p}</p></div><div class="dm-dot">${n}</div></div>`).join('')}</div>`,'idee3');
let team=fs.readFileSync(D+'/../r54/sec_6_section_team.html','utf8').replace(/ style="translate:[^"]*"/g,'').replace('<section class="section_team theme-hell">','<section id="idee4" class="section_team theme-hell dm-team">').replace('<div class="section-head_row is-breit">','<div class="dm-tag">Idee 4 · Team</div><div class="section-head_row is-breit">').replace(/(<h2 class="heading-style-h2">Die Menschen hinter ROWAPA<\/h2>)/,'$1<p class="dm-hint">Beim Darüberfahren setzt sich das Porträt aus Punkten zusammen.</p>');
const page=intro+s1+s2+s3+team;

const js=`<script>(function(){
function ready(f){document.readyState!=='loading'?f():document.addEventListener('DOMContentLoaded',f)}
ready(function(){stack();sticky();path();teamPix();});
function stack(){var cards=[].slice.call(document.querySelectorAll('.dm-card'));function u(){cards.forEach(function(c,i){var n=cards[i+1];var inr=c.querySelector('.dm-card-in');if(!n){inr.style.transform='';return}var st=120+i*26;var nt=n.getBoundingClientRect().top;var p=Math.max(0,Math.min(1,1-(nt-st)/(innerHeight*.75)));inr.style.transform='scale('+(1-0.06*p)+')';inr.style.filter='brightness('+(1-0.12*p)+')'})}addEventListener('scroll',u,{passive:true});u()}
function sticky(){var items=[].slice.call(document.querySelectorAll('.dm-item')),dots=[].slice.call(document.querySelectorAll('.dm-dots span')),cnt=document.querySelector('.dm-count');function u(){var best=-1,bd=1e9;items.forEach(function(it,i){var r=it.getBoundingClientRect();var d=Math.abs(r.top+r.height/2-innerHeight/2);if(d<bd){bd=d;best=i}});items.forEach(function(it,i){it.classList.toggle('on',i===best)});dots.forEach(function(d,i){d.classList.toggle('on',i<=best)});if(cnt)cnt.textContent='Beleg '+(best+1)+' von '+items.length}addEventListener('scroll',u,{passive:true});u()}
function path(){var wrap=document.querySelector('.dm-path');if(!wrap)return;var svg=wrap.querySelector('svg'),base=svg.querySelector('.base'),draw=svg.querySelector('.draw'),tip=svg.querySelector('.tip'),steps=[].slice.call(wrap.querySelectorAll('.dm-step'));var L=0;
  function lay(){var h=wrap.offsetHeight;var d='M20,0 ';for(var i=1;i<=8;i++){var y=h*i/8;d+='Q'+(i%2?44:-4)+','+(y-h/16)+' 20,'+y+' '}base.setAttribute('d',d);draw.setAttribute('d',d);L=draw.getTotalLength();draw.style.strokeDasharray=L;u()}
  function u(){var r=wrap.getBoundingClientRect();var p=Math.max(0,Math.min(1,(innerHeight*.6-r.top)/r.height));draw.style.strokeDashoffset=L*(1-p);var pt=draw.getPointAtLength(L*p);tip.setAttribute('cx',pt.x);tip.setAttribute('cy',pt.y);var yAbs=r.top+r.height*p;steps.forEach(function(s){var dr=s.querySelector('.dm-dot').getBoundingClientRect();s.classList.toggle('on',dr.top+dr.height/2<=yAbs+4)})}
  addEventListener('scroll',u,{passive:true});addEventListener('resize',lay);setTimeout(lay,60)}
function teamPix(){[].slice.call(document.querySelectorAll('.dm-team .team_image-wrapper')).forEach(function(w){var img=w.querySelector('img');if(!img)return;var cv=document.createElement('canvas');cv.className='dm-pix';w.appendChild(cv);var run=false,bm=null;function prep(){bm=new Image();bm.src=img.currentSrc||img.src}if(img.complete&&img.naturalWidth)prep();else img.addEventListener('load',prep);
  w.addEventListener('mouseenter',function(){if(run||!bm||!bm.complete||!bm.naturalWidth)return;run=true;var W=w.clientWidth,Hh=w.clientHeight,dpr=Math.min(2,devicePixelRatio||1);cv.width=W*dpr;cv.height=Hh*dpr;var x=cv.getContext('2d');x.setTransform(dpr,0,0,dpr,0,0);
    var nw=bm.naturalWidth,nh=bm.naturalHeight,s=Math.max(W/nw,Hh/nh),ox=(W-nw*s)/2,oy=(Hh-nh*s)/2,step=7,T=[];
    for(var yy=0;yy<Hh;yy+=step)for(var xx=0;xx<W;xx+=step){var a=Math.random()*6.283,r=40+Math.random()*120;T.push({x:xx,y:yy,sx:xx+Math.cos(a)*r,sy:yy+Math.sin(a)*r+60,dl:Math.random()*.35})}
    img.style.transition='opacity .25s';img.style.opacity='0';var t0=performance.now(),D=.9;
    (function tick(n){var t=(n-t0)/1000,done=true;x.clearRect(0,0,W,Hh);for(var i=0;i<T.length;i++){var p=T[i],q=Math.min(1,Math.max(0,(t-p.dl)/D));if(q<1)done=false;var e=1-Math.pow(1-q,3);var px=p.sx+(p.x-p.sx)*e,py=p.sy+(p.y-p.sy)*e,rad=(step/2)*(0.55+0.45*e);
      x.save();x.beginPath();x.arc(px+step/2,py+step/2,rad*(q<1?1:1.42),0,6.283);x.clip();x.drawImage(bm,(p.x-ox)/s,(p.y-oy)/s,step/s,step/s,px,py,step,step);x.restore()}
      if(!done)requestAnimationFrame(tick);else{img.style.opacity='1';setTimeout(function(){x.clearRect(0,0,W,Hh);run=false},250)}})(t0)});
  w.addEventListener('mouseleave',function(){})})}
})();</script>`;

async function smooth(p,y,ms){await p.evaluate(([y,ms])=>new Promise(res=>{const s0=scrollY,t0=performance.now();const f=n=>{const k=Math.min(1,(n-t0)/ms);const e=k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2;scrollTo(0,s0+(y-s0)*e);k<1?requestAnimationFrame(f):res()};requestAnimationFrame(f)}),[y,ms]);}
const yOf=(p,sel,off=0)=>p.evaluate(([sel,off])=>{const e=document.querySelector(sel);return e?e.getBoundingClientRect().top+scrollY+off:0},[sel,off]);
const hOf=(p,sel)=>p.evaluate(sel=>document.querySelector(sel).offsetHeight,sel);
let MARK=0;const SKIP={};const ON=n=>!process.env.ONLY||process.env.ONLY.split(',').includes(n);
async function clip(b,name,run){
  const ctx=await b.newContext({viewport:{width:1440,height:900},recordVideo:{dir:OUT+'/'+name,size:{width:1440,height:900}}});const p=await ctx.newPage();const T0=Date.now();MARK=0;
  await p.route(/fastly\.net\/.*\.woff2/,r=>{const n=r.request().url().split('/').pop().replace(/^[0-9a-f]+-/,'');r.fulfill({path:D+'/../fonts/'+n,contentType:'font/woff2'})});
  await p.route(HOME,async r=>{let h=fs.readFileSync(D+'/../r54/home_raw.html','utf8');h=h.replace(/<main class="main-wrapper">[\s\S]*<\/main>/,()=>'<main class="main-wrapper">'+page+'</main>');h=h.replace('</head>',()=>css+'</head>');h=h.replace('</body>',()=>js+'</body>');r.fulfill({status:200,body:h,contentType:'text/html; charset=utf-8'})});
  await p.goto(HOME,{waitUntil:'load'});await p.waitForTimeout(800);await p.mouse.move(720,450);
  await run(p);const v=await p.video().path();await ctx.close();SKIP[name]=MARK?((MARK-T0)/1000).toFixed(2):'0';return v;}
(async()=>{const b=await chromium.launch({args:['--use-gl=swiftshader','--enable-webgl','--ignore-gpu-blocklist']});fs.mkdirSync(OUT,{recursive:true});const W=(p,ms)=>p.waitForTimeout(ms);
 const r1=ON('idee1')&&await clip(b,'idee1',async p=>{const y=await yOf(p,'#idee1',-40);await p.evaluate(y=>scrollTo(0,y),y);await W(p,350);MARK=Date.now();await W(p,1150);const h=await hOf(p,'#idee1');await smooth(p,y+h-700,11000);await W(p,1500)});
 const r2=ON('idee2')&&await clip(b,'idee2',async p=>{const y=await yOf(p,'#idee2',-40);await p.evaluate(y=>scrollTo(0,y),y);await W(p,350);MARK=Date.now();await W(p,1150);const h=await hOf(p,'#idee2');await smooth(p,y+h-850,10000);await W(p,1500)});
 const r3=ON('idee3')&&await clip(b,'idee3',async p=>{const y=await yOf(p,'#idee3',-40);await p.evaluate(y=>scrollTo(0,y),y);await W(p,350);MARK=Date.now();await W(p,1150);const h=await hOf(p,'#idee3');await smooth(p,y+h-800,9000);await W(p,1500)});
 const r4=ON('idee4')&&await clip(b,'idee4',async p=>{const y=await yOf(p,'#idee4',-60);await p.evaluate(y=>scrollTo(0,y),y);await W(p,600);MARK=Date.now();await W(p,1200);const imgs=await p.$$('.dm-team .team_image-wrapper');for(const k of [0,1,2,3]){const bb=await imgs[k].boundingBox();if(!bb)continue;await p.mouse.move(bb.x+bb.width/2,bb.y+bb.height/2,{steps:25});await W(p,1700);await p.mouse.move(bb.x+bb.width/2,bb.y+bb.height+80,{steps:8});await W(p,300)}await W(p,800)});
 console.log([r1,r2,r3,r4].join('\n'));let old={};try{old=JSON.parse(fs.readFileSync(OUT+'/skip.json','utf8'))}catch(e){}fs.writeFileSync(OUT+'/skip.json',JSON.stringify(Object.assign(old,SKIP)));await b.close();})();
