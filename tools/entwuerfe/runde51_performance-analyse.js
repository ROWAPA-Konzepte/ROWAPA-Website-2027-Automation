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

let faq=fs.readFileSync(D+'/section_faq.html','utf8');
const logos=fs.readFileSync(D+'/section_logos.html','utf8').replace(/<div class="logos_label">[\s\S]*?<\/div>/,'<div class="logos_label">Ausgewählte Referenzen aus der Finanzbranche</div>');
const css3=`<style>
.pa-sec .padding-section-large{padding-top:clamp(4rem,8vw,7rem);padding-bottom:clamp(4rem,8vw,7rem)}
.pa-layers{display:grid;grid-template-columns:1fr;gap:0;margin-top:3rem;max-width:56rem}
.pa-layer{padding:2rem 2.5rem;border-radius:8px}.pa-layer .text-style-kicker{margin-bottom:.75rem}
.pa-top{background:#fff;border:1px solid #d5d9de}.pa-bottom{background:#1D3149;color:#fff}
.pa-layer p{margin:0;font-size:1.25rem;line-height:1.5}.pa-arrow{font-size:1.75rem;color:#AA1351;padding:.5rem 2.5rem}
.pa-2{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-top:3rem}
.pa-card{background:#fff;border:1px solid #d5d9de;border-radius:8px;padding:2rem;display:flex;flex-direction:column;gap:1rem}
.pa-card ul{margin:0;padding-left:1.1rem;color:#3a4a5e;line-height:1.7}
.pa-chart{background:#fff;border-radius:8px;padding:2rem;border:1px solid #d5d9de}
.pa-bar{display:grid;grid-template-columns:12rem 1fr 3rem;gap:1rem;align-items:center;margin:.55rem 0;font-size:.95rem}
.pa-track{height:12px;background:#E8E9E9;border-radius:6px;position:relative}
.pa-fill{position:absolute;left:0;top:0;bottom:0;border-radius:6px;background:#486EA3}
.pa-soll{position:absolute;top:-4px;bottom:-4px;width:3px;background:#AA1351;border-radius:2px}
.pa-muster{display:inline-block;font-size:.7rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#AA1351;border:1px solid #AA1351;border-radius:2px;padding:.15rem .4rem;margin-bottom:1rem}
.pa-grid2{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-top:3rem}
.pa-heat{width:100%;border-collapse:separate;border-spacing:4px;font-size:.95rem}.pa-heat th{font-weight:600;text-align:center;color:#3a4a5e;font-size:.8rem;padding:.25rem}
.pa-heat td{text-align:center;padding:.6rem 0;border-radius:4px;font-weight:600}.pa-heat td.l{text-align:left;font-weight:600;color:#1D3149}
.pa-note{font-size:.95rem;color:#3a4a5e;margin-top:1.25rem;line-height:1.5}
.pa-pair{display:grid;grid-template-columns:12rem 1fr;gap:1rem;align-items:center;margin:.8rem 0;font-size:.95rem}
.pa-pair .pa-track{height:9px;margin:3px 0}.pa-fill.f2{background:#A0C4DF}
.pa-legend{display:flex;gap:1.25rem;font-size:.8rem;color:#3a4a5e;margin-top:1rem}.pa-legend i{display:inline-block;width:12px;height:8px;border-radius:4px;margin-right:.4rem;vertical-align:middle}
.pa-5{display:grid;grid-template-columns:repeat(5,1fr);gap:1rem;margin-top:3rem}
.pa-m{border-top:3px solid #486EA3;padding-top:1.25rem}.pa-m.obs{border-top-color:#AA1351}
.pa-m .n{font-family:var(--_typo---font-accent,inherit);font-weight:800;font-size:.8rem;letter-spacing:.12em;color:#486EA3}
.pa-m h3{margin:.5rem 0}.pa-m p{margin:0;color:#3a4a5e;font-size:.95rem;line-height:1.5}
.pa-tag{display:inline-block;margin-top:.75rem;font-size:.75rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:.2rem .5rem;border-radius:2px;background:#E8E9E9;color:#1D3149}
.pa-trust{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem;margin-top:3rem}
.pa-trust div{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.15);border-radius:8px;padding:1.75rem}
.pa-trust h3{color:#fff;margin:0 0 .75rem}.pa-trust p{margin:0;color:rgba(255,255,255,.8);line-height:1.5;font-size:.95rem}
.pa-stufen{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:1.5rem}
.pa-stufen div{border:1px solid rgba(255,255,255,.25);border-radius:6px;padding:1.25rem}.pa-stufen b{color:#fff;display:block;margin-bottom:.35rem}.pa-stufen span{color:rgba(255,255,255,.75);font-size:.9rem}
.pa-6{display:grid;grid-template-columns:repeat(6,1fr);gap:.75rem;margin-top:3rem}
.pa-ph{background:#fff;border:1px solid #d5d9de;border-radius:8px;padding:1.25rem;display:flex;flex-direction:column;gap:.5rem}
.pa-ph .n{font-weight:800;color:#AA1351}.pa-ph h3{margin:0;font-size:1.05rem}.pa-ph p{margin:0;font-size:.85rem;color:#3a4a5e;line-height:1.45}.pa-ph .t{margin-top:auto;font-size:.75rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#486EA3}
.pa-ph.opt{border-style:dashed}
.pa-map{display:grid;grid-template-columns:3fr 2fr 1fr;gap:.75rem;margin-top:.75rem}
.pa-map div{background:#1D3149;color:#fff;border-radius:6px;padding:.75rem 1rem;font-size:.85rem}.pa-map div b{font-weight:800;letter-spacing:.08em;text-transform:uppercase;font-size:.75rem;display:block;color:#A0C4DF}
.pa-map .h{background:#AA1351}
.pa-aufw{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem;margin-top:3rem}
.pa-aufw .z{font-size:clamp(2.5rem,4vw,3.5rem);font-weight:700;color:#1D3149;line-height:1}
.pa-aufw h3{margin:.75rem 0 .35rem;font-size:1.05rem}.pa-aufw p{margin:0;color:#3a4a5e;font-size:.95rem;line-height:1.5}
.pa-3{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3rem}
.pa-budget{margin-top:2rem;background:#fff;border-left:4px solid #AA1351;border-radius:6px;padding:1.75rem 2rem}
.pa-budget p{margin:.5rem 0 0;line-height:1.6}
.pa-small{font-size:.85rem;color:#3a4a5e;margin-top:1.5rem}
.pa-spot{display:grid;grid-template-columns:5fr 7fr;gap:4rem;align-items:center}
.pa-cover{aspect-ratio:4/3;border-radius:8px;background:#1D3149;color:#fff;padding:2.5rem;display:flex;flex-direction:column;justify-content:space-between;box-shadow:24px 24px 0 #A0C4DF;position:relative;overflow:hidden}
.pa-cover:after{content:"";position:absolute;right:-60px;top:30px;width:260px;height:24px;background:#AA1351;transform:rotate(45deg);opacity:.85}
.pa-cover small{font-weight:800;letter-spacing:.14em;text-transform:uppercase;font-size:.7rem;color:#A0C4DF}.pa-cover h3{color:#fff;font-size:1.75rem;line-height:1.2;margin:0}
.pa-form{display:flex;gap:.75rem;margin-top:1.5rem;flex-wrap:wrap}.pa-form input{flex:1;min-width:14rem;border:1px solid #b7bec7;border-radius:4px;padding:.85rem 1rem;font:inherit}
@media (max-width:991px){.pa-5,.pa-trust,.pa-aufw{grid-template-columns:1fr 1fr}.pa-6{grid-template-columns:1fr 1fr 1fr}.pa-map{display:none}.pa-grid2,.pa-2,.pa-3,.pa-spot,.pa-stufen{grid-template-columns:1fr}}
@media (max-width:767px){.pa-5,.pa-trust,.pa-aufw,.pa-6{grid-template-columns:1fr}.pa-bar,.pa-pair{grid-template-columns:8.5rem 1fr 2.5rem}.pa-pair{grid-template-columns:8.5rem 1fr}.pa-layer{padding:1.5rem}.pa-grid2>*,.pa-2>*{min-width:0}.pa-heat{font-size:.85rem;border-spacing:3px}.pa-heat th{font-size:.68rem;padding:.15rem}.pa-heat td.l{font-size:.8rem}}
</style>`;
const hB=headerB.replace('Für Unternehmen › <b>Vertriebsperformance</b>','Für Unternehmen › <b>Performance-Analyse</b>').replace('Für Unternehmen · Vertriebsperformance','Für Unternehmen · Performance-Analyse')
 .replace('Vertriebsstärke ist kein Zufall.','Wo liegt Ihr grösstes Potenzial?')
 .replace('ROWAPA entwickelt die Verkaufsleistung Ihres Unternehmens entlang von vier Hebeln, von der Diagnostik über Trainings bis zur Begleitung im Kundenkontakt.','Die Performance-Analyse ist eine praxisnahe Standortbestimmung für mehr Vertriebs- und Mitarbeiterperformance. Sie zeigt, welche Kompetenzen hinter Ihren Resultaten stehen, und wo sich Entwicklung lohnt.')
 .replace("btns('Erstgespräch vereinbaren','Die vier Hebel',true)","")
 .replace('Erstgespräch vereinbaren</a><a href="#" class="button is-secondary is-alternate">Die vier Hebel','Analyse besprechen</a><a href="#" class="button is-secondary is-alternate">Musterbericht ansehen')
 .replace(FIG,'https://mock.local/lupe.png');
const sec=(cls,inner,st='')=>`<section class="pa-sec ${cls}" style="${st}"><div class="padding-global"><div class="container-large"><div class="padding-section-large">${inner}</div></div></div></section>`;
const ausgang=sec('',head2('Die Ausgangsfrage','Sie kennen die Resultate Ihres Unternehmens. Kennen Sie auch die Kompetenzen dahinter?','Manche Mitarbeitende erreichen ihre Ziele regelmässig, andere bleiben hinter ihren Möglichkeiten zurück. Auch zwischen Geschäftsstellen, Agenturen und Teams zeigen sich oft deutliche Unterschiede.')+
 `<div class="pa-layers"><div class="pa-layer pa-top"><div class="text-style-kicker">Was Sie heute sehen</div><p>Zielerreichung · Abschlussquote · Bestandsentwicklung · Fluktuation</p></div><div class="pa-arrow">↓</div><div class="pa-layer pa-bottom"><div class="text-style-kicker" style="color:#A0C4DF">Was darunter liegt</div><p>Bedarfsergründung · Gesprächsführung · Kundenpotenziale erkennen · Verbindlichkeit · Coaching und Feedback der Führung</p></div></div>`,'background:#fff');
const felder=sec('mk-soft',head2('Zwei Blickwinkel auf Leistung','Was möchten Sie in Ihrem Unternehmen verbessern?','Nicht jedes Thema muss untersucht werden. Fragestellung und Umfang legen wir gemeinsam fest.')+
 `<div class="pa-2"><div class="pa-card"><div class="text-style-kicker">Leistungsfeld 01</div><h3 class="heading-style-h3">Vertriebsperformance</h3><p class="text-color-muted" style="margin:0">Wie gelingt es, Kundenpotenziale besser zu nutzen und die Beratungs- und Vertriebsergebnisse weiterzuentwickeln?</p><ul><li>Warum erreichen einzelne Teams ihre Ziele und andere nicht?</li><li>Wo gibt es Potenzial bei Bedarfsergründung und Gesprächsführung?</li><li>Was unterscheidet erfolgreiches Beratungsverhalten?</li></ul><a href="#" class="text-style-link">Zur Themenlinie Vertriebsperformance →</a></div>
 <div class="pa-card"><div class="text-style-kicker">Leistungsfeld 02</div><h3 class="heading-style-h3">Mitarbeiterperformance</h3><p class="text-color-muted" style="margin:0">Wie lassen sich Mitarbeitende und Führungskräfte bei ihren Aufgaben wirksamer unterstützen und gezielt entwickeln?</p><ul><li>Wo liegen individuelle Stärken und ungenutzte Entwicklungspotenziale?</li><li>Wie wirksam sind Führung, Feedback und Coaching im Alltag?</li><li>Wo braucht es mehr Zusammenarbeit und Verbindlichkeit?</li></ul><a href="#" class="text-style-link">Zur Themenlinie Mitarbeiterperformance →</a></div></div>`);
const SOLL=[['Bedarfsergründung',8.0],['Gesprächsführung',7.5],['Kundenpotenziale',8.0],['Produkt- und Fachwissen',7.0],['Abschlussorientierung',7.5],['Verbindlichkeit',8.0],['Digitale Beratung',6.5],['Zusammenarbeit im Team',7.0]];
const IST=[7.4,7.6,6.2,7.8,6.9,6.1,6.8,7.5];
const pct=v=>((v-4)/6*100).toFixed(1)+'%';
const bars=SOLL.map(([n,s],i)=>`<div class="pa-bar"><span>${n}</span><div class="pa-track"><div class="pa-fill" style="width:${pct(IST[i])}${IST[i]<s-0.5?';background:#AA1351':''}"></div><div class="pa-soll" style="left:${pct(s)}"></div></div><b style="color:${IST[i]<s-0.5?'#AA1351':'#1D3149'}">${(IST[i]-s>0?'+':'')+(IST[i]-s).toFixed(1)}</b></div>`).join('');
const massstab=sec('',`<div class="mk-two"><div>${head2('Der Massstab','Zuerst legen wir fest, was die Rolle können muss','')}<div style="display:flex;flex-direction:column;gap:1.25rem;margin-top:1rem"><div><b>01 · Wir bringen einen Vorschlag mit</b><p class="text-color-muted" style="margin:.35rem 0 0">Aus zwanzig Jahren Mandaten in der Finanzbranche: welche Kompetenzen die Rolle braucht und auf welchem Niveau.</p></div><div><b>02 · Sie entscheiden</b><p class="text-color-muted" style="margin:.35rem 0 0">Die Führung prüft den Vorschlag gegen den eigenen Anspruch und den Rollenauftrag im Haus.</p></div><div><b>03 · Das Ergebnis ist der Massstab</b><p class="text-color-muted" style="margin:.35rem 0 0">Jeder erhobene Wert wird gegen dieses Soll-Profil gelesen, nicht gegen ein Mittelfeld.</p></div></div></div>
 <div class="pa-chart"><span class="pa-muster">Musterdaten</span><h3 class="heading-style-h4" style="margin:0 0 1rem">Rolle Beratung im Kundenkontakt: Ist gegen Soll</h3>${bars}<div class="pa-legend"><span><i style="background:#486EA3"></i>Ist-Wert</span><span><i style="background:#AA1351;width:3px;height:12px"></i>Soll der Rolle</span><span><i style="background:#AA1351"></i>deutlich unter dem Soll</span></div><p class="pa-note">Zwei Lücken, zwei Überdeckungen: Beim Fachwissen liegt das Team über dem Soll. Eine fachliche Schulung würde dort ansetzen, wo kein Bedarf besteht.</p></div></div>`,'background:#fff');
const T=[['Team A',7.8,6.9,7.3,6.8],['Team B',7.5,6.4,7.0,6.3],['Team C',7.4,6.1,6.8,6.0],['Team D',6.9,5.3,6.4,5.2]];
const col=v=>{const t=Math.max(0,Math.min(1,(v-5)/3));const a=[170,19,81],b=[160,196,223];const c=a.map((x,i)=>Math.round(x+(b[i]-x)*t));return `rgb(${c})`};
const heat=`<table class="pa-heat"><tr><th></th><th>Bedarfs­ergründung</th><th>Kunden­potenziale</th><th>Abschluss­orientierung</th><th>Verbind­lichkeit</th></tr>${T.map(r=>`<tr><td class="l">${r[0]}</td>${r.slice(1).map(v=>`<td style="background:${col(v)};color:${v<6?'#fff':'#1D3149'}">${v.toFixed(1)}</td>`).join('')}</tr>`).join('')}</table>`;
const P=[['Coaching im Alltag',8.4,6.2],['Verbindlichkeit einfordern',7.1,5.4],['Entwicklung begleiten',7.8,6.0],['Vorbild im Kundenkontakt',7.4,7.6]];
const pairs=P.map(([n,a,b])=>`<div class="pa-pair"><span>${n}</span><div><div class="pa-track"><div class="pa-fill" style="width:${pct(a)}"></div></div><div class="pa-track"><div class="pa-fill f2" style="width:${pct(b)}"></div></div></div></div>`).join('');
const auswertung=sec('mk-soft',head2('So sieht ein Ergebnis aus','Zwei Themen, nicht vier Teams','Ein Auszug aus dem Musterbericht: dieselbe Rolle in vier Teams, und wie Führung erlebt wird.')+
 `<div class="pa-grid2"><div class="pa-chart"><span class="pa-muster">Musterdaten</span><h3 class="heading-style-h4" style="margin:0 0 1rem">Teamvergleich</h3>${heat}<p class="pa-note">Kundenpotenziale und Verbindlichkeit sind in jedem Team die tiefsten Werte. Das ist kein Team-, sondern ein Themenbefund.</p></div>
 <div class="pa-chart"><span class="pa-muster">Musterdaten</span><h3 class="heading-style-h4" style="margin:0 0 1rem">Teamleitung: Eigen- und Fremdsicht</h3>${pairs}<div class="pa-legend"><span><i style="background:#486EA3"></i>Eigensicht</span><span><i style="background:#A0C4DF"></i>Fremdsicht durch das Team</span></div><p class="pa-note">Beim Coaching liegen die Sichten 2.2 Punkte auseinander. Eine Abweichung ist ein Anlass für den Dialog, kein Urteil über eine Person.</p></div></div>
 <p class="pa-small">Alle gezeigten Werte sind illustrativ.</p>`);
const M=[['01','Skill-Check','Eigener Fragebogen, zugeschnitten auf die untersuchte Rolle.','misst'],['02','Eigensicht','Wie schätzen Mitarbeitende sich selbst ein?','misst'],['03','Fremdsicht','Wie beurteilen andere dieselben Kompetenzen, mit denselben Aussagen wie die Eigensicht?','misst'],['04','Interviews','Was hilft im Alltag, was bremst? Erklärt die Zahlen.','ordnet ein'],['05','On-the-Job','Beobachtung in realen Kundenterminen durch ROWAPA.','misst am stärksten']];
const methoden=sec('',head2('Unsere Erhebung','Fünf Methoden, ein differenzierter Blick auf den Ist-Zustand','Die Methoden liefern unterschiedliche Arten von Erkenntnis. Wir werten sie nachvollziehbar aus und führen nicht einfach alles zu einer einzigen Zahl zusammen.')+
 `<div class="pa-5">${M.map(([n,t,p,g],i)=>`<div class="pa-m${i==4?' obs':''}"><div class="n">${n}</div><h3 class="heading-style-h4">${t}</h3><p>${p}</p><span class="pa-tag">${g}</span></div>`).join('')}</div>`,'background:#fff');
const sorgfalt=sec('mk-dark',head2('Messen mit Sorgfalt','Was die Performance-Analyse von einem Fragebogen unterscheidet','')+
 `<div class="pa-trust"><div><h3 class="heading-style-h4">Verhalten zählt am meisten</h3><p>Die Beobachtung im echten Kundentermin wiegt stärker als jede Einschätzung.</p></div><div><h3 class="heading-style-h4">Gemessen an der Rolle</h3><p>Verglichen wird mit dem Soll-Profil, nie mit Kolleginnen und Kollegen.</p></div><div><h3 class="heading-style-h4">Zwei Vergleiche, sauber getrennt</h3><p>Ist gegen Soll und Eigen- gegen Fremdsicht werden getrennt ausgewertet.</p></div><div><h3 class="heading-style-h4">Ehrliche Antworten</h3><p>Eingebaute Prüffragen erkennen widersprüchliches und geschöntes Antworten.</p></div></div>
 <h3 class="heading-style-h4" style="margin:3rem 0 0">Vertraulichkeit, je Gruppe wählbar</h3><div class="pa-stufen"><div><b>Anonym</b><span>Niemand weiss, wer geantwortet hat.</span></div><div><b>Pseudonym</b><span>Einzelergebnisse an die Führung nur mit Zustimmung.</span></div><div><b>Mit Namen</b><span>Für kleine Teams, in denen Anonymität nur behauptet wäre.</span></div></div>
 <p class="mk-foot" style="opacity:.8">Gruppen unter fünf Personen werden nie ausgewiesen. Jede Person sieht ihr eigenes Ergebnis.</p>`);
const PH=[['0','Auftrag aufsetzen','Fragestellung, Teams und Erhebungskreis festlegen.','Stunden'],['1','Profil entwickeln','Kompetenzen und Soll-Werte je Rolle, Fragebogen.','1–2 Tage je Rolle'],['2','Erheben','Alle fünf Methoden, teils parallel.','3–4 Wochen'],['3','Auswerten','Unternehmen, Bereich, Team und Person.','Tage'],['4','Ergebnis','Befunde, Massnahmen, Pläne je Person.','Tage'],['5','Wirkung messen','Dieselbe Erhebung noch einmal, zeitlich individuell.','optional']];
const ablauf=sec('mk-soft',head2('Der Ablauf','Sechs Phasen vom Auftrag bis zur Wirkung','Die Reihenfolge ist verbindlich: ohne Profil kein Fragebogen, ohne Erhebung keine Auswertung.')+
 `<div class="pa-6">${PH.map(([n,t,p,z],i)=>`<div class="pa-ph${i==5?' opt':''}"><span class="n">${n}</span><h3 class="heading-style-h4">${t}</h3><p>${p}</p><span class="t">${z}</span></div>`).join('')}</div>
 <div class="pa-map"><div><b>01 Analysieren</b>Phasen 0 bis 2</div><div><b>02 Verstehen</b>Phasen 3 und 4</div><div class="h"><b style="color:#fff">04 Messen</b>Phase 5</div></div>
 <p class="pa-small">So passt die Analyse in unser Vorgehen: Sie füllt «Analysieren» und «Verstehen». «Handeln» sind die Massnahmen, die daraus folgen, «Messen» die Folgemessung.</p>`);
const aufwand=sec('',head2('Ihr Aufwand','Ein halber Tag am Anfang, ein halber Tag am Ende','Dazwischen organisieren wir die Erhebung und führen Interviews und Begleitungen durch.')+
 `<div class="pa-aufw"><div><div class="z">Halber Tag</div><h3>Gemeinsamer Start</h3><p>Fragestellung, Umfang und Vorgehen abstimmen.</p></div><div><div class="z">ca. 25 Min.</div><h3>Digitaler Skill-Check</h3><p>Je teilnehmende Person. Eigen- und Fremdsicht separat.</p></div><div><div class="z">4–6 Wo.</div><h3>Typische Dauer</h3><p>Von der Vorbereitung bis zur Auswertung.</p></div><div><div class="z">Halber Tag</div><h3>Ergebnisgespräch</h3><p>Erkenntnisse und Entwicklungsansätze besprechen.</p></div></div>
 <p class="pa-small">Für Eigen- und Fremdsicht, Interviews und Begleitungen entsteht bei den Beteiligten zusätzlicher Aufwand. Umfang und Termine stimmen wir gemeinsam ab.</p>`,'background:#fff');
const nutzen=sec('mk-soft',head2('Der Nutzen','Ihr Entwicklungsbudget gezielt einsetzen, statt es zu verteilen','')+
 `<div class="pa-3"><div class="pa-card"><div class="text-style-kicker">01</div><h3 class="heading-style-h4">Themen, Personen, Reihenfolge</h3><p class="text-color-muted" style="margin:0">Welche Themen Entwicklung brauchen, bei welchen Rollen und Personen, und womit anzufangen sich lohnt.</p></div><div class="pa-card"><div class="text-style-kicker">02</div><h3 class="heading-style-h4">Konkrete Empfehlungen</h3><p class="text-color-muted" style="margin:0">Je Befund eine Massnahme mit Zielgruppe, Begründung und Zeitpunkt.</p></div><div class="pa-card"><div class="text-style-kicker">03</div><h3 class="heading-style-h4">Eine Entscheidungsgrundlage</h3><p class="text-color-muted" style="margin:0">Mit der Sie Ihr Budget begründen, intern und gegenüber Ihrem Gremium.</p></div></div>
 <div class="pa-budget"><div class="text-style-kicker">Und wofür kein Budget nötig ist</div><p>Die Analyse zeigt auch, wo das Soll bereits erreicht ist. Im Musterbericht brauchten sechs von achtzehn Beratenden keine Massnahme. Ein gleichmässig verteiltes Budget hätte dort Mittel gebunden.</p></div>
 <div class="pa-budget" style="border-left-color:#486EA3"><div class="text-style-kicker" style="color:#486EA3">Folgemessung</div><p>Mit derselben Erhebung wird sichtbar, was sich verändert hat. Den Zeitpunkt legen wir individuell fest, je nach Massnahme zum Beispiel nach sechs Monaten.</p></div>
 <p class="pa-small">Die Performance-Analyse zeigt Kompetenzen und beobachtetes Verhalten. Eine Veränderung geschäftlicher Kennzahlen wird dadurch nicht automatisch nachgewiesen.</p>`);
const bericht=sec('',`<div class="pa-spot"><div class="pa-cover"><small>Musterbericht · anonymisiertes Beispiel</small><h3>Was am Ende einer Performance-Analyse vorliegt</h3><small style="color:#fff;opacity:.7">Regionalbank · 24 Personen · zwei Rollen · vier Teams</small></div><div>${head2('Der Musterbericht','Sehen Sie, was Sie am Ende in der Hand halten','Soll-Profil, Abgleich, Teamvergleich, Eigen- und Fremdsicht, ein Profil je Person, Befunde und Massnahmen. Ein erfundener Fall, Ihrer sieht anders aus.')}<div class="pa-form"><input placeholder="Ihre geschäftliche E-Mail-Adresse"><a href="#" class="button">Musterbericht erhalten</a></div><p class="pa-small">Wir senden Ihnen den Link zum PDF. Keine Weitergabe Ihrer Adresse.</p></div></div>`,'background:#fff');
const Q=[['Wie lange dauert eine Performance-Analyse?','Typischerweise vier bis sechs Wochen von der Vorbereitung bis zur Auswertung. Die Erhebung selbst läuft drei bis vier Wochen.'],
['Wie viel Aufwand entsteht für uns?','Je ein halber Tag zum Start und für das Ergebnisgespräch. Der digitale Skill-Check dauert rund 25 Minuten je Person, dazu kommen Eigen- und Fremdsicht, Interviews und Begleitungen nach Absprache.'],
['Sieht die Führung die Einzelergebnisse?','Das entscheiden Sie vor der Erhebung, je Gruppe: anonym, pseudonym oder mit Namen. Gruppen unter fünf Personen werden nie ausgewiesen, und jede Person sieht ihr eigenes Ergebnis.'],
['Wie viele Rollen können wir untersuchen?','Eine Rolle ist ein überschaubarer Einstieg. Jede weitere Rolle erhält ein eigenes Soll-Profil und einen eigenen Satz Instrumente.'],
['Was kostet die Performance-Analyse?','Das hängt von Fragestellung, Rollen und Teilnehmerzahl ab. Nach dem Erstgespräch erhalten Sie einen konkreten Vorschlag zu Umfang und Investition.'],
['Können wir die Wirkung später messen?','Ja, mit einer separat vereinbarten Folgemessung mit denselben Kompetenzen. Den Zeitpunkt legen wir individuell fest.']];
const items=Q.map(([q,a],i)=>`<details class="faq_item"${i==0?' open':''}><summary class="faq_question"><h3 class="faq_question-text">${q}</h3><div class="icon-box">+</div></summary><p class="faq_answer">${a}</p></details>`).join('');
faq=faq.replace(/<div class="faq_list">[\s\S]*<\/details><\/div>/,`<div class="faq_list">${items}</div>`);
const kPA=k('Welche Fragestellung möchten Sie genauer untersuchen?','Vielleicht gibt es ein Team, eine Rolle oder ein Thema, bei dem Sie Potenzial vermuten. Im Gespräch wählen wir gemeinsam einen Bereich aus, danach erhalten Sie einen konkreten Vorschlag zu Umfang und Investition.','Analyse besprechen','Nachricht schreiben');
const page=hB+logos+ausgang+felder+massstab+auswertung+methoden+sorgfalt+ablauf+aufwand+nutzen+bericht+faq+kPA;
(async()=>{const b=await chromium.launch();
for(const [vw,vh,tag] of [[1440,900,'desktop'],[390,844,'handy']]){
  const p=await b.newPage({viewport:{width:vw,height:vh},deviceScaleFactor:vw<500?2:1});
  await p.route(/fastly\.net\/.*\.woff2/,r=>{const n=r.request().url().split('/').pop().replace(/^[0-9a-f]+-/,'');r.fulfill({path:D+'/../fonts/'+n,contentType:'font/woff2'})});
  await p.route('https://mock.local/*',r=>r.fulfill({path:D+'/'+r.request().url().split('/').pop()}));
  await p.goto('https://rowapa-website-2027-automation.webflow.io/',{waitUntil:'networkidle'});
  await p.evaluate(([css,html])=>{document.querySelectorAll('script[src*="rowapagrafik"],canvas').forEach(e=>e.remove());
    const m=document.querySelector('main')||document.querySelector('.main-wrapper');m.innerHTML=html;document.head.insertAdjacentHTML('beforeend',css);window.scrollTo(0,0);},[css+css2+css3,page]);
  await p.evaluate(()=>document.fonts.ready);
  await p.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=600){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,100));}window.scrollTo(0,0);});
  await p.waitForTimeout(2000);
  await p.screenshot({path:`${D}/out/seite_performance-analyse_${tag}.png`,fullPage:true});
  await p.close();}
await b.close();})();
