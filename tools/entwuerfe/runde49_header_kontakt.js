const {chromium}=require('playwright');const fs=require('fs');const D=__dirname;
const FIG='https://cdn.prod.website-files.com/6addf1532819c0aacc74a496/6ae10a40c96ff8c9215827f8_grafik-thema-vertrieb-plum-gross.png';
const BLOGIMG='https://cdn.prod.website-files.com/6ae263a5504d44b2b791fe20/6ae283198fdb11c9db64e3f2_Positive-Leadership-scaled.jpeg';
const kontakt=fs.readFileSync(D+'/kontakt.html','utf8');
const css=`<style>
.mk-b{position:relative;overflow:hidden;background:#1D3149;color:#fff}
.mk-b .padding-section-large{padding-top:clamp(6rem,8vw,7.5rem);padding-bottom:clamp(4rem,7vw,6rem)}
.mk-b-grid{position:relative;z-index:2;display:grid;grid-template-columns:7fr 5fr;gap:4rem;align-items:center}
.mk-crumb{font-size:.875rem;opacity:.7;margin-bottom:2rem}.mk-crumb b{font-weight:600;opacity:1}
.mk-b h1{color:#fff;margin:0 0 1.5rem}.mk-b .mk-lead{font-size:1.25rem;line-height:1.5;max-width:36rem;opacity:.9;margin:0 0 2rem}
.mk-fig img{width:100%;max-width:440px;display:block;margin-left:auto}
.mk-sea{position:absolute;left:0;right:0;bottom:0;height:42%;background:url(https://mock.local/punktemeer.jpg) center bottom/cover no-repeat;opacity:.45;z-index:1;-webkit-mask-image:linear-gradient(to bottom,transparent,#000 45%)}
.mk-strich{width:4rem;height:3px;background:#AA1351;margin:0 0 1.5rem}
.mk-c{background:#fff;position:relative;overflow:hidden}.mk-c .padding-section-large{padding-top:clamp(6rem,8vw,7.5rem);padding-bottom:clamp(4rem,7vw,6rem)}
.mk-c-grid{display:grid;grid-template-columns:7fr 5fr;gap:4rem;align-items:center}.mk-c h1{font-size:clamp(2.25rem,3.6vw,3.5rem);line-height:1.08}
.mk-c h1{margin:0 0 1.5rem;color:#1D3149}.mk-c .mk-lead{font-size:1.25rem;line-height:1.5;color:#3a4a5e;margin:0 0 2rem;max-width:34rem}
.mk-c .mk-crumb{color:#1D3149}
.mk-photo{position:relative;border-radius:8px;overflow:hidden;aspect-ratio:4/5}.mk-photo img{width:100%;height:100%;object-fit:cover;display:block}
.mk-photo:after{content:"";position:absolute;inset:0;border-radius:8px;box-shadow:inset 0 0 0 0 transparent;border-bottom:4px solid #AA1351}
.mk-rib{position:absolute;top:28px;right:-70px;width:260px;height:26px;background:#AA1351;opacity:.8;transform:rotate(45deg);z-index:3}
.mk-chips{display:flex;flex-wrap:wrap;gap:.5rem 1.5rem;margin-top:2rem;font-size:.9rem;color:#3a4a5e}.mk-chips span b{color:#1D3149}
.mk-a{background:#fff}.mk-a .padding-section-large{padding-top:clamp(7rem,9vw,9rem);padding-bottom:3rem}
.mk-a-inner{max-width:48rem}.mk-a h1{color:#1D3149;margin:1rem 0 1.25rem;font-size:clamp(2.25rem,4vw,3.5rem);line-height:1.1}
.mk-cat{display:inline-block;font-family:var(--_typo---font-accent,inherit);font-weight:800;letter-spacing:.14em;text-transform:uppercase;font-size:.75rem;color:#486EA3}
.mk-meta{display:flex;flex-wrap:wrap;gap:.5rem 1.25rem;align-items:center;font-size:.95rem;color:#3a4a5e;margin-top:1.5rem}
.mk-meta img{width:36px;height:36px;border-radius:50%;background:#E8E9E9}
.mk-av{width:36px;height:36px;border-radius:50%;background:#A0C4DF;display:inline-flex;align-items:center;justify-content:center;font-weight:700;color:#1D3149;font-size:.85rem}
.mk-a-img{margin-top:2.5rem;border-radius:8px;overflow:hidden;aspect-ratio:16/7}.mk-a-img img{width:100%;height:100%;object-fit:cover;display:block}
.mk-b .button.is-secondary{color:#fff;border-color:rgba(255,255,255,.6);background:transparent}.mk-note{position:fixed;left:12px;bottom:12px;z-index:99;background:#AA1351;color:#fff;font:600 12px/1.3 sans-serif;padding:6px 10px;border-radius:4px}
@media (max-width:767px){.mk-b-grid,.mk-c-grid{grid-template-columns:1fr;gap:2.5rem}.mk-fig img{max-width:200px;margin:0 auto}.mk-b .padding-section-large,.mk-c .padding-section-large,.mk-a .padding-section-large{padding-top:2rem!important}.mk-photo{aspect-ratio:4/3}.mk-b .mk-lead,.mk-c .mk-lead{font-size:1.0625rem}.mk-a-img{aspect-ratio:4/3}.mk-crumb{margin-bottom:1.25rem}}
</style>`;
const btns=(a,b,dark)=>`<div class="button-group"><a href="#" class="button">${a}</a><a href="#" class="button is-secondary${dark?' is-alternate':''}">${b}</a></div>`;
const headerB=`<section class="mk-b"><div class="mk-sea"></div><div class="padding-global"><div class="container-large"><div class="padding-section-large"><div class="mk-b-grid"><div>
<div class="mk-crumb">Für Unternehmen › <b>Vertriebsperformance</b></div>
<div class="kicker"><div class="kicker_line"></div><div class="text-style-kicker">Für Unternehmen · Vertriebsperformance</div></div>
<h1 class="heading-style-h1">Vertriebsstärke ist kein Zufall.</h1><div class="mk-strich"></div>
<p class="mk-lead">ROWAPA entwickelt die Verkaufsleistung Ihres Unternehmens entlang von vier Hebeln, von der Diagnostik über Trainings bis zur Begleitung im Kundenkontakt.</p>
${btns('Erstgespräch vereinbaren','Die vier Hebel',true)}</div><div class="mk-fig"><img src="${FIG}" alt=""></div></div></div></div></div></section>`;
const headerC=`<section class="mk-c"><div class="padding-global"><div class="container-large"><div class="padding-section-large"><div class="mk-c-grid"><div>
<div class="mk-crumb">Meine Entwicklung › Fit for Leadership › <b>Leadership-Mentoring 1:1</b></div>
<div class="kicker"><div class="kicker_line"></div><div class="text-style-kicker">Fit for Leadership · Mentoring 1:1</div></div>
<h1 class="heading-style-h1">Führung ist manchmal einsam. Muss sie aber nicht sein.</h1>
<p class="mk-lead">Persönliches Mentoring über mehrere Monate, mit jemandem, der Führungsverantwortung in der Finanzbranche selbst getragen hat.</p>
${btns('Erstgespräch vereinbaren','So funktioniert Dein Mentoring')}
<div class="mk-chips"><span><b>Format</b> 1:1, mehrere Monate</span><span><b>Für</b> neue bis Senior-Führungskräfte</span></div></div>
<div class="mk-photo"><img src="https://mock.local/sofa.jpg" alt=""><div class="mk-rib"></div></div></div></div></div></div></section>`;
const headerA=`<section class="mk-a"><div class="padding-global"><div class="container-large"><div class="padding-section-large"><div class="mk-a-inner">
<div class="mk-crumb" style="color:#1D3149">Wissen › Blog › <b>Leadership</b></div><span class="mk-cat">Leadership</span>
<h1>Positive Leadership im Finanzvertrieb</h1>
<p class="mk-lead" style="font-size:1.25rem;line-height:1.5;color:#3a4a5e;margin:0">Durch Positive Leadership schaffen Sie ein Arbeitsumfeld, in dem sich jeder Einzelne wertgeschätzt fühlt und sein volles Potenzial entfalten kann.</p>
<div class="mk-meta"><span class="mk-av">GS</span><span><b style="color:#1D3149">Galina Shokhova</b></span><span>11. Mai 2025</span><span>8 Min. Lesezeit</span></div></div>
<div class="mk-a-img"><img src="${BLOGIMG}" alt=""></div></div></div></div></section>`;
const k=(title,text,a,b)=>kontakt.replace(/<h2 class="heading-style-h2">.*?<\/h2>/,`<h2 class="heading-style-h2">${title}</h2>`)
  .replace(/<p class="text-size-medium text-color-muted">.*?<\/p>/,`<p class="text-size-medium text-color-muted">${text}</p>`)
  .replace(/<a href="mailto:boek@rowapa.ch" class="button">.*?<\/a>/,`<div class="button-group"><a href="#" class="button">${a}</a><a href="#" class="button is-secondary">${b}</a></div>`);
const kSie=k('Sprechen wir über Ihre Ausgangslage.','Im Erstgespräch klären wir, welcher Hebel in Ihrem Unternehmen am meisten bewegt. Den Termin wählen Sie direkt im Kalender.','Termin buchen','Nachricht schreiben');
const kDu=k('Lass uns über Deinen nächsten Schritt sprechen.','Im kostenlosen Erstgespräch klären wir, ob das Mentoring zu Dir passt. Den Termin wählst Du direkt im Kalender.','Termin buchen','Nachricht schreiben');
const pages={themenlinie:headerB+kSie, angebot:headerC+kDu, artikel:headerA+kSie};
(async()=>{const b=await chromium.launch();
for(const [vw,vh,tag] of [[1440,900,'desktop'],[390,844,'handy']]){
 for(const [name,html] of Object.entries(pages)){
  const p=await b.newPage({viewport:{width:vw,height:vh},deviceScaleFactor:vw<500?2:1});
  await p.route(/fastly\.net\/.*\.woff2/,r=>{const n=r.request().url().split('/').pop().replace(/^[0-9a-f]+-/,'');r.fulfill({path:D+'/../fonts/'+n,contentType:'font/woff2'})});
  await p.route('https://mock.local/*',r=>r.fulfill({path:D+'/'+r.request().url().split('/').pop()}));
  await p.goto('https://rowapa-website-2027-automation.webflow.io/',{waitUntil:'networkidle'});
  await p.evaluate(([css,html])=>{document.querySelectorAll('script[src*="rowapagrafik"],canvas').forEach(e=>e.remove());
    const m=document.querySelector('main')||document.querySelector('.main-wrapper');m.innerHTML=html;document.head.insertAdjacentHTML('beforeend',css);window.scrollTo(0,0);},[css,html]);
  await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(2500);
  const secs=await p.$$('main > section');
  const bb=await secs[0].boundingBox();await p.screenshot({path:`${D}/out/${name}_header_${tag}.png`,clip:{x:0,y:0,width:vw,height:Math.ceil(bb.y+bb.height)},fullPage:true});
  await p.evaluate(()=>{const n=document.querySelector('.navbar_component,nav');if(n)n.style.visibility='hidden'});await secs[1].scrollIntoViewIfNeeded();await p.waitForTimeout(600);
  await secs[1].screenshot({path:`${D}/out/${name}_kontakt_${tag}.png`});
  await p.close();}}
await b.close();})();
