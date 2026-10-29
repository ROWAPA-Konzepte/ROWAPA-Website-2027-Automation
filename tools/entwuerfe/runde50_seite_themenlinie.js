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

const vorgehen=fs.readFileSync(D+'/section_vorgehen.html','utf8');
let faq=fs.readFileSync(D+'/section_faq.html','utf8');
const Q=[['Wie individuell sind die Trainings wirklich?','Wir trainieren an Ihren Produkten, Ihren Gesprächssituationen und mit Ihren Zahlen, Standardfolien gibt es bei uns nicht.'],
['Wie wird der Erfolg gemessen?','Über vereinbarte Kennzahlen und Beobachtung im Feld, Wirkung wird sichtbar gemacht, nicht behauptet.'],
['Was unterscheidet eine Sales-Story von einem Verkaufsleitfaden?','Ein Leitfaden sagt, was zu tun ist, eine Story gibt dem Gespräch Sinn und Richtung, aus Kundensicht erzählt.'],
['Ersticken Standards nicht die Individualität?','Nein, Standards sichern die Basisqualität, damit Persönlichkeit dort wirken kann, wo sie den Unterschied macht.'],
['Wie lange dauert die Verankerung?','Verankerung ist Führungsarbeit über Monate, wir begleiten, bis der Prozess trägt.'],
['Verlieren wir online nicht die Beziehung?','Nur ohne Handwerk: Wer Präsenz und Dialog auch am Bildschirm beherrscht, baut Beziehung auf jedem Kanal.']];
const items=Q.map(([q,a],i)=>`<details class="faq_item"${i==0?' open':''}><summary class="faq_question"><h3 class="faq_question-text">${q}</h3><div class="icon-box">+</div></summary><p class="faq_answer">${a}</p></details>`).join('');
faq=faq.replace(/<div class="faq_list">[\s\S]*<\/details><\/div>/,`<div class="faq_list">${items}</div>`);
const css2=`<style>
.mk-sec .padding-section-large{padding-top:clamp(4rem,8vw,7rem);padding-bottom:clamp(4rem,8vw,7rem)}
.mk-hebel{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem;margin-top:3rem}
.mk-hebel .card{text-decoration:none}.mk-hebel .card_content{gap:1rem}.mk-more{margin-top:auto;font-weight:600;color:#AA1351}
.mk-soft{background:#E8E9E9}.mk-two{display:grid;grid-template-columns:5fr 7fr;gap:4rem;align-items:start}
.mk-tool{display:inline-flex;align-items:center;gap:.75rem;margin-top:2rem;padding:1rem 1.25rem;background:#fff;border-radius:6px;border-left:3px solid #AA1351}
.mk-tool b{color:#1D3149}.mk-links{margin-top:1.5rem;display:flex;gap:1.5rem;flex-wrap:wrap}
.mk-dark{background:#1D3149;color:#fff}.mk-dark .heading-style-h2,.mk-dark h3{color:#fff}.mk-dark .text-color-muted{color:rgba(255,255,255,.75)!important}
.mk-cases{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3rem}
.mk-case{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.15);border-radius:8px;padding:2rem;display:flex;flex-direction:column;gap:1rem}
.mk-case .text-style-kicker{color:#A0C4DF}.mk-case p{font-size:1.125rem;line-height:1.5;margin:0}
.mk-foot{margin-top:2rem;font-size:.875rem;opacity:.7}.mk-ph{display:inline-block;background:#AA1351;color:#fff;font-size:.75rem;font-weight:700;letter-spacing:.08em;padding:.25rem .5rem;border-radius:2px;margin-left:.5rem;vertical-align:middle}
.section_vorgehen *{opacity:1!important;transform:none!important}.mk-two .section-head{margin-bottom:0!important}
@media (max-width:991px){.mk-hebel{grid-template-columns:1fr 1fr}.mk-cases{grid-template-columns:1fr}.mk-two{grid-template-columns:1fr;gap:2rem}}
@media (max-width:767px){.mk-hebel{grid-template-columns:1fr}}
</style>`;
const head2=(k,t,p)=>`<div class="section-head"><div class="kicker"><div class="kicker_line"></div><div class="text-style-kicker">${k}</div></div><h2 class="heading-style-h2">${t}</h2>${p?`<p class="text-size-medium text-color-muted">${p}</p>`:''}</div>`;
const H=[['Hebel 1','Individuell zugeschnittene Verkaufstrainings','Kundenorientierte Trainings auf Stufe Geschäftsstelle, Generalagentur und Vertriebseinheit, für mehr Wertschöpfung in jedem Gespräch.'],
['Hebel 2','Sales-Story-Entwicklung','Kundenorientierte Sales-Stories für Ihre Beratungsansätze und Tools, mit hybridem Storytelling als Game-Changer.'],
['Hebel 3','Verkaufsprozess & Strategien','Einheitliche Beratungsstandards entwickeln und verankern, für Kundenbindung und Wettbewerbsvorteile.'],
['Hebel 4','Digitales & hybrides Verkaufen','Online-Beratung und hybride Kundenkontakte professionalisieren, für mehr Schlagzahl und Schlagkraft.']];
const hebel=`<section class="mk-sec theme-hell" style="background:#fff"><div class="padding-global"><div class="container-large"><div class="padding-section-large">${head2('Die Hebel','Vier Hebel für messbare Vertriebsleistung','Einzeln wirksam, gemeinsam ein System.')}<div class="mk-hebel">${H.map(([a,b,c])=>`<a href="#" class="card w-inline-block"><div class="card_content"><div class="text-style-kicker">${a}</div><h3 class="heading-style-h4">${b}</h3><p class="text-size-regular text-color-muted">${c}</p><div class="mk-more">Mehr erfahren →</div></div></a>`).join('')}</div></div></div></div></section>`;
const vorteil=`<section class="mk-sec mk-soft"><div class="padding-global"><div class="container-large"><div class="padding-section-large"><div class="mk-two"><div>${head2('Ihr Vorteil','Gesicherte Entscheidungen und Wirkung, die bleibt','')}</div><div><p class="text-size-large" style="line-height:1.6;margin:0">Sie entscheiden auf gesicherter Grundlage statt aus dem Bauch. Mit bewährten Verfahren wie SalesStep sehen Sie schwarz auf weiss, wo Ihre Vertriebsstärke liegt und wo der grösste Hebel wartet. Und weil alle unsere Werkzeuge auf die ROWAPA Wissensplattform zugreifen, das Praxiswissen aus 20 Jahren Finanzvertrieb, arbeiten Ihre Leute nicht mit generischen Tipps, sondern mit dem, was in Ihrer Branche wirklich verkauft. So bleibt Wirkung nicht am Trainingstag hängen, sondern trägt in den Alltag.</p><div class="mk-tool"><span class="text-style-kicker">Werkzeug</span><b>SalesStep</b><span class="text-color-muted">Diagnostik der Vertriebskompetenz</span></div><div class="mk-links"><a href="#" class="text-style-link">Tools und Methoden</a><a href="#" class="text-style-link">Digitale Lösungen →</a></div></div></div></div></div></div></section>`;
const C=[['Versicherung · Aussendienst','Besuchsbegleitungen und Methodentraining über 12 Monate: «Plus 40 Prozent Abschlussquote.»*'],['Bank · Beratungscenter','Hybride Beratung eingeführt und trainiert: «Kundenzufriedenheit deutlich gestiegen.»*'],['Krankenkasse · Vertrieb','Diagnostik-gestützte Entwicklung der Beraterteams: «Stornoquote spürbar gesunken.»*']];
const cases=`<section class="mk-sec mk-dark"><div class="padding-global"><div class="container-large"><div class="padding-section-large">${head2('Aus der Praxis','Case-Stories <span class="mk-ph">PLATZHALTER</span>','Ausgangslage, Vorgehen, Wirkung, anonymisiert aus laufenden und abgeschlossenen Mandaten.')}<div class="mk-cases">${C.map(([a,b])=>`<div class="mk-case"><div class="text-style-kicker">${a}</div><p>${b}</p><div class="mk-more" style="color:#fff">Case lesen →</div></div>`).join('')}</div><p class="mk-foot">* Kennzahlen sind Platzhalter und werden vor dem Live-Gang verifiziert oder durch freigegebene Case-Stories ersetzt. [ROWAPA bestätigen]</p></div></div></div></section>`;
const page=headerB+hebel+vorteil+vorgehen+cases+faq+kSie;
(async()=>{const b=await chromium.launch();
for(const [vw,vh,tag] of [[1440,900,'desktop'],[390,844,'handy']]){
  const p=await b.newPage({viewport:{width:vw,height:vh},deviceScaleFactor:vw<500?2:1});
  await p.route(/fastly\.net\/.*\.woff2/,r=>{const n=r.request().url().split('/').pop().replace(/^[0-9a-f]+-/,'');r.fulfill({path:D+'/../fonts/'+n,contentType:'font/woff2'})});
  await p.route('https://mock.local/*',r=>r.fulfill({path:D+'/'+r.request().url().split('/').pop()}));
  await p.goto('https://rowapa-website-2027-automation.webflow.io/',{waitUntil:'networkidle'});
  await p.evaluate(([css,html])=>{document.querySelectorAll('script[src*="rowapagrafik"],canvas').forEach(e=>e.remove());
    const m=document.querySelector('main')||document.querySelector('.main-wrapper');m.innerHTML=html;document.head.insertAdjacentHTML('beforeend',css);window.scrollTo(0,0);},[css+css2,page]);
  await p.evaluate(()=>document.fonts.ready);
  await p.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=600){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,120));}window.scrollTo(0,0);});
  await p.waitForTimeout(2000);
  
  await p.screenshot({path:`${D}/out/seite_vertriebsperformance_${tag}.png`,fullPage:true});
  await p.close();}
await b.close();})();
