// Runde 54: Landingpage Performance-Analyse, gebaut aus den Bausteinen der Startseite.
// Navigation, Logo-Band, «Unser Vorgehen», «Gut zu wissen», Kontakt und Footer kommen 1:1 von der Testadresse;
// ersetzt werden nur Texte. Neu sind Header B (wie Runde 50), «Ausgangslage» und «Musterauswertung».
const {chromium}=require('playwright');const fs=require('fs');const D=__dirname;
const OUT=process.argv[2]||D+'/out';
const css=`<style>
.mk-b{position:relative;overflow:hidden;background:#1D3149;color:#fff}
.mk-b .padding-section-large{padding-top:clamp(6rem,8vw,7.5rem);padding-bottom:clamp(4rem,7vw,6rem)}
.mk-b-grid{position:relative;z-index:2;display:grid;grid-template-columns:8fr 4fr;gap:3rem;align-items:center}
.mk-crumb{font-size:.875rem;opacity:.7;margin-bottom:2rem}.mk-crumb b{font-weight:600;opacity:1}
.mk-b h1{color:#fff;margin:0 0 1.5rem;font-size:clamp(2.25rem,4vw,3.75rem);line-height:1.08;max-width:none}.mk-b .mk-lead{font-size:1.25rem;line-height:1.5;max-width:36rem;opacity:.9;margin:0 0 2rem}
.mk-fig img{width:100%;max-width:340px;display:block;margin-left:auto}
.mk-sea{position:absolute;left:0;right:0;bottom:0;height:42%;background:url(https://mock.local/punktemeer.jpg) center bottom/cover no-repeat;opacity:.45;z-index:1;-webkit-mask-image:linear-gradient(to bottom,transparent,#000 45%)}
.mk-strich{width:4rem;height:3px;background:#AA1351;margin:0 0 1.5rem}
.mk-b .button.is-secondary{color:#fff;border-color:rgba(255,255,255,.6);background:transparent}
.pa-sec .padding-section-large{padding-top:clamp(4rem,8vw,7rem);padding-bottom:clamp(4rem,8vw,7rem)}
.pa-q{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3rem}
.pa-q div{border-top:1px solid #AA1351;padding-top:1.25rem}
.pa-q .text-style-kicker{color:#486EA3}
.pa-q h3{margin:.75rem 0 0}
.pa-claim{margin-top:3rem;font-size:1.25rem;line-height:1.5;color:#1D3149;font-weight:600;max-width:46rem}
.pa-grid2{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-top:3rem}
.pa-chart{background:#fff;border-radius:8px;padding:2rem;border:1px solid #d5d9de;display:flex;flex-direction:column}
.pa-chart .top{display:flex;justify-content:space-between;align-items:center;gap:1rem;margin-bottom:.75rem}
.pa-chart .text-style-kicker{color:#486EA3}
.pa-muster{display:inline-block;font-size:.7rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#AA1351;border:1px solid #AA1351;border-radius:2px;padding:.15rem .4rem;white-space:nowrap}
.pa-chart h3{margin:0 0 1.25rem}
.pa-heat{width:100%;border-collapse:separate;border-spacing:4px;font-size:.95rem}.pa-heat th{font-weight:600;text-align:center;color:#3a4a5e;font-size:.8rem;padding:.25rem}
.pa-heat td{text-align:center;padding:.6rem 0;border-radius:4px;font-weight:600}.pa-heat td.l{text-align:left;font-weight:600;color:#1D3149}
.pa-pair{display:grid;grid-template-columns:12rem 1fr;gap:1rem;align-items:center;margin:.8rem 0;font-size:.95rem}
.pa-track{height:9px;background:#E8E9E9;border-radius:6px;position:relative;margin:3px 0}
.pa-fill{position:absolute;left:0;top:0;bottom:0;border-radius:6px;background:#486EA3}.pa-fill.f2{background:#A0C4DF}
.pa-legend{display:flex;gap:1.25rem;font-size:.8rem;color:#3a4a5e;margin-top:.75rem}.pa-legend i{display:inline-block;width:12px;height:8px;border-radius:4px;margin-right:.4rem;vertical-align:middle}
.pa-take{margin-top:auto;padding-top:1.25rem;border-top:1px solid #E8E9E9;font-size:.95rem;line-height:1.5;color:#3a4a5e}
.pa-take b{color:#1D3149}
.pa-best{margin-top:1.5rem;background:#fff;border-radius:8px;border-left:4px solid #AA1351;padding:1.75rem 2rem;display:grid;grid-template-columns:5fr 7fr;gap:2.5rem;align-items:center}
.pa-best h3{margin:.5rem 0 0}.pa-best p{margin:0;color:#3a4a5e;line-height:1.6}
.pa-small{font-size:.85rem;color:#3a4a5e;margin-top:1.5rem}
.pa-otj{margin-top:2.5rem;background:#1D3149;color:#fff;border-radius:8px;border-left:4px solid #AA1351;padding:1.75rem 2rem;display:grid;grid-template-columns:7fr 5fr;gap:2rem;align-items:center}
.pa-otj .text-style-kicker{color:#A0C4DF}.pa-otj h3{color:#fff;margin:.5rem 0}.pa-otj p{margin:0;color:rgba(255,255,255,.8);line-height:1.6}
.pa-otj ul{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:1fr 1fr;gap:.5rem}
.pa-otj li{border:1px solid rgba(160,196,223,.35);border-radius:4px;padding:.6rem .8rem;font-size:.9rem;font-weight:600}
.section_vorgehen *{opacity:1!important;transform:none!important}
@media (max-width:991px){.pa-q,.pa-grid2,.pa-best,.pa-otj{grid-template-columns:1fr}.pa-best,.pa-otj{gap:1.25rem}}
@media (max-width:767px){.mk-b-grid{grid-template-columns:1fr;gap:2.5rem}.mk-fig img{max-width:140px;margin:0 auto}.mk-b .padding-section-large{padding-top:2rem!important}.mk-b .mk-lead{font-size:1.0625rem}.mk-crumb{margin-bottom:1.25rem}
 .pa-pair{grid-template-columns:1fr;gap:.25rem}.pa-heat{font-size:.85rem;border-spacing:3px}.pa-heat th{font-size:.66rem;padding:.1rem}.pa-heat td.l{font-size:.8rem}.pa-chart,.pa-best,.pa-otj{padding:1.5rem}.pa-otj ul{grid-template-columns:1fr}}
</style>`;
const head2=(k,t,p)=>`<div class="section-head"><div class="kicker"><div class="kicker_line"></div><div class="text-style-kicker">${k}</div></div><h2 class="heading-style-h2">${t}</h2>${p?`<p class="text-size-medium text-color-muted">${p}</p>`:''}</div>`;
const sec=(cls,inner)=>`<section class="pa-sec ${cls}"><div class="padding-global"><div class="container-large"><div class="padding-section-large">${inner}</div></div></div></section>`;

// 1 Header B (wie Runde 50): Brotkrumen, Titel, Strich, ein Satz, zwei Buttons, Figur
const header=`<section class="mk-b"><div class="mk-sea"></div><div class="padding-global"><div class="container-large"><div class="padding-section-large"><div class="mk-b-grid"><div>
<div class="mk-crumb">Für Unternehmen › <b>Performance-Analyse</b></div>
<h1 class="heading-style-h1">Sie kennen Ihre Ergebnisse. Wir zeigen, wo Sie gezielt ansetzen können.</h1><div class="mk-strich"></div>
<p class="mk-lead">Die Performance-Analyse verbindet digitale Kompetenzerhebung mit Gesprächen und Beobachtungen im Arbeitsalltag. Für mehr Vertriebs- und Mitarbeiterperformance.</p>
<div class="button-group"><a href="mailto:boek@rowapa.ch" class="button">Erstgespräch vereinbaren</a><a href="#ablauf" class="button is-secondary is-alternate">So funktioniert unsere Methode</a></div>
</div><div class="mk-fig"><img src="https://mock.local/lupe.png" alt="Figur Lupe aus Punkten"></div></div></div></div></div></section>`;

// 2 Logo-Band: Baustein der Startseite, unverändert
const logos=fs.readFileSync(D+'/section_logos.html','utf8');

// 3 Ausgangslage
const ausgang=sec('theme-hell',head2('Die Ausgangslage','Die Resultate sind bekannt. Die Hintergründe oft nicht.','Ergebnisse zeigen, was erreicht wurde. Sie erklären nicht, warum Potenzial ungenutzt bleibt.')+
 `<div class="pa-q"><div><div class="text-style-kicker">Vertrieb</div><h3 class="heading-style-h4">Warum erreichen einzelne Teams ihre Ziele und andere nicht?</h3></div>
 <div><div class="text-style-kicker">Mitarbeitende</div><h3 class="heading-style-h4">Wo bleiben Stärken ungenutzt?</h3></div>
 <div><div class="text-style-kicker">Führung</div><h3 class="heading-style-h4">Wie wirksam wird Führung im Alltag erlebt?</h3></div></div>
 <p class="pa-claim">Die Performance-Analyse zeigt, wo sich gezielte Entwicklung lohnt und wo nicht.</p>`);

// 4 Musterauswertung
const T=[['Team A',7.8,6.9,7.3,6.8],['Team B',7.5,6.4,7.0,6.3],['Team C',7.4,6.1,6.8,6.0],['Team D',6.9,5.3,6.4,5.2]];
const col=v=>{const t=Math.max(0,Math.min(1,(v-5)/3));const a=[170,19,81],b=[160,196,223];return `rgb(${a.map((x,i)=>Math.round(x+(b[i]-x)*t))})`};
const heat=`<table class="pa-heat"><tr><th></th><th>Bedarfs­ergründung</th><th>Kunden­potenziale</th><th>Abschluss­orientierung</th><th>Verbind­lichkeit</th></tr>${T.map(r=>`<tr><td class="l">${r[0]}</td>${r.slice(1).map(v=>`<td style="background:${col(v)};color:${v<6?'#fff':'#1D3149'}">${v.toFixed(1)}</td>`).join('')}</tr>`).join('')}</table>`;
const pct=v=>((v-4)/6*100).toFixed(1)+'%';
const P=[['Coaching im Alltag',8.4,6.2],['Verbindlichkeit einfordern',7.1,5.4],['Entwicklung begleiten',7.8,6.0],['Vorbild im Kundenkontakt',7.4,7.6]];
const pairs=P.map(([n,a,b])=>`<div class="pa-pair"><span>${n}</span><div><div class="pa-track"><div class="pa-fill" style="width:${pct(a)}"></div></div><div class="pa-track"><div class="pa-fill f2" style="width:${pct(b)}"></div></div></div></div>`).join('');
const ergebnis=sec('theme-soft',head2('Was Sie erhalten','Eine klare Grundlage für Ihre Entscheidung','Sie sehen Stärken und Entwicklungsfelder je Team und Person und wissen, welche Massnahme sich lohnt.')+
 `<div class="pa-grid2">
 <div class="pa-chart"><div class="top"><div class="text-style-kicker">Team-Standortbestimmung</div><span class="pa-muster">Musterdaten</span></div><h3 class="heading-style-h4">Dieselbe Rolle in vier Teams</h3>${heat}<p class="pa-take"><b>Daraus abgeleitet:</b> Kundenpotenziale und Verbindlichkeit sind überall die tiefsten Werte. Ein gemeinsamer Schwerpunkt für alle Teams, Team D zusätzlich begleiten.</p></div>
 <div class="pa-chart"><div class="top"><div class="text-style-kicker">Individuelle Standortbestimmung</div><span class="pa-muster">Musterdaten</span></div><h3 class="heading-style-h4">Teamleitung: Eigen- und Fremdsicht</h3>${pairs}<div class="pa-legend"><span><i style="background:#486EA3"></i>Eigensicht</span><span><i style="background:#A0C4DF"></i>Fremdsicht durch das Team</span></div><p class="pa-take"><b>Daraus abgeleitet:</b> Beim Coaching liegen die Sichten am weitesten auseinander. Ein Anlass für den Führungsdialog und eine gezielte Vertiefung.</p></div></div>
 <div class="pa-best"><div><div class="text-style-kicker" style="color:#AA1351">Optional</div><h3 class="heading-style-h3">Lernen Sie von Ihren eigenen Besten.</h3></div><p>Ist die Gruppe gross genug, untersuchen wir Ihre erfolgreichsten Mitarbeitenden nach gemeinsam festgelegten Kriterien. Das daraus entstehende interne Referenzprofil zeigt, was sie anders machen, und ergänzt das Anforderungsprofil der Rolle.</p></div>
 <p class="pa-small">Alle gezeigten Werte sind illustrativ, ohne reale Personen- oder Kundendaten.</p>`);

// 5 «Unser Vorgehen» der Startseite, Texte für die Analyse
let vorgehen=fs.readFileSync(D+'/section_vorgehen.html','utf8');
const steps=[['Ausrichten','Fragestellung und Rolle festlegen.','Gemeinsam bestimmen wir Ziele, beteiligte Personen und das Kompetenzprofil der Rolle.'],
 ['Erheben','Fünf Perspektiven.','Skill-Check, Eigen- und Fremdsicht, Interviews und Begleitung im Arbeitsalltag.'],
 ['Auswerten','Muster erkennen.','Wir führen die Erkenntnisse je Person und Team fachlich zusammen.'],
 ['Entscheiden','Prioritäten setzen.','Im Ergebnisgespräch leiten wir die Massnahmen ab, die sich lohnen.']];
vorgehen=vorgehen.replace('<section class="section_vorgehen theme-hell"','<section id="ablauf" class="section_vorgehen theme-hell"')
 .replace(/<div class="text-style-kicker">So arbeiten wir<\/div>/,'<div class="text-style-kicker">Die Methode</div>')
 .replace(/<h2 class="heading-style-h2">Unser Vorgehen<\/h2>/,'<h2 class="heading-style-h2">In vier Schritten zur Entscheidungsgrundlage</h2>')
 .replace(/<p class="text-size-medium text-color-muted">[^<]*<\/p>/,'<p class="text-size-medium text-color-muted">Typischerweise vier bis sechs Wochen. Ihr Aufwand: je ein halber Tag zum Start und für das Ergebnisgespräch, rund 25 Minuten Skill-Check je Teilnehmerin und Teilnehmer.</p>');
let i=0;vorgehen=vorgehen.replace(/<h3 class="heading-style-h4">[^<]*<\/h3><div class="step_lead">[^<]*<\/div><p class="text-size-regular text-color-muted">[^<]*<\/p>/g,()=>{const s=steps[i++];return `<h3 class="heading-style-h4">${s[0]}</h3><div class="step_lead">${s[1]}</div><p class="text-size-regular text-color-muted">${s[2]}</p>`});
vorgehen=vorgehen.replace(/<div class="steps_note">[\s\S]*?<\/div>(?=<\/div><\/div><\/div><\/section>)/,
 `<div class="pa-otj"><div><div class="text-style-kicker">Fester Bestandteil</div><h3 class="heading-style-h3">Wir schauen in den Arbeitsalltag.</h3><p>Fachpersonen von ROWAPA begleiten Mitarbeitende und Führungskräfte in ausgewählten Situationen. So wird sichtbar, wie Kompetenzen im Alltag tatsächlich eingesetzt werden.</p></div><ul><li>Kundengespräche</li><li>Führungsgespräche</li><li>Teamsitzungen</li><li>Weitere Meetings</li></ul></div><div class="steps_note">Optional zeigt eine Folgemessung, was sich verändert hat. <a href="/so-arbeiten-wir" class="text-style-link">Mehr zu unserem Vorgehen</a></div>`);

// 6 «Gut zu wissen» der Startseite, Fragen zur Analyse
let faq=fs.readFileSync(D+'/section_faq.html','utf8');
const Q=[['Ist die Performance-Analyse ein Online-Test?','Nein. Der Online-Skill-Check ist eine von fünf Methoden. Dazu kommen Eigen- und Fremdsicht, Interviews und Begleitungen im Arbeitsalltag. ROWAPA führt die Erkenntnisse fachlich zusammen.'],
 ['Womit werden die Ergebnisse verglichen?','Mit den Anforderungen der Rolle, zwischen Teams mit vergleichbaren Aufgaben und optional mit einem internen Referenzprofil Ihrer erfolgreichsten Mitarbeitenden. Welche Vergleiche sinnvoll sind, legen wir gemeinsam fest.'],
 ['Wie viel Aufwand entsteht für uns?','Für die Projektverantwortlichen je ein halber Tag zum Start und für das Ergebnisgespräch. Teilnehmende brauchen rund 25 Minuten für den Skill-Check, weitere Gespräche und Begleitungen nach Absprache. Typische Dauer: vier bis sechs Wochen.'],
 ['Wer sieht die Ergebnisse?','Das klären wir vor Projektbeginn: auf welcher Ebene ausgewertet wird und wer welche Ergebnisse erhält. Teilnehmende erhalten ihr eigenes Ergebnis.'],
 ['Was kostet die Performance-Analyse?','Das hängt von Fragestellung, Rollen und Zahl der Teilnehmenden ab. Nach dem Erstgespräch erhalten Sie einen konkreten Vorschlag zu Umfang und Investition.'],
 ['Können wir später sehen, was sich verändert hat?','Ja, mit einer separat vereinbarten Folgemessung zu denselben Kompetenzen. Den Zeitpunkt legen wir individuell fest.']];
faq=faq.replace(/<div class="faq_list">[\s\S]*<\/details><\/div>/,`<div class="faq_list">${Q.map(([q,a],n)=>`<details class="faq_item"${n==0?' open':''}><summary class="faq_question"><h3 class="faq_question-text">${q}</h3><div class="icon-box">+</div></summary><p class="faq_answer">${a}</p></details>`).join('')}</div>`);

// 7 Kontakt der Startseite, unverändert
const kontakt=fs.readFileSync(D+'/kontakt.html','utf8');

const page=header+logos+ausgang+ergebnis+vorgehen+faq+kontakt;
(async()=>{const b=await chromium.launch();fs.mkdirSync(OUT,{recursive:true});
for(const [vw,vh,tag] of [[1440,900,'desktop'],[390,844,'handy']]){
  const p=await b.newPage({viewport:{width:vw,height:vh},deviceScaleFactor:vw<500?2:1});
  await p.route(/fastly\.net\/.*\.woff2/,r=>{const n=r.request().url().split('/').pop().replace(/^[0-9a-f]+-/,'');r.fulfill({path:D+'/../fonts/'+n,contentType:'font/woff2'})});
  await p.route('https://mock.local/*',r=>r.fulfill({path:D+'/'+r.request().url().split('/').pop()}));
  await p.goto('https://rowapa-website-2027-automation.webflow.io/',{waitUntil:'networkidle'});
  await p.evaluate(([css,html])=>{document.querySelectorAll('script[src*="rowapagrafik"],canvas').forEach(e=>e.remove());
    const m=document.querySelector('main')||document.querySelector('.main-wrapper');m.innerHTML=html;document.head.insertAdjacentHTML('beforeend',css);window.scrollTo(0,0);},[css,page]);
  await p.evaluate(()=>document.fonts.ready);
  await p.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=600){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,100));}window.scrollTo(0,0);});
  await p.waitForTimeout(2000);
  const ov=await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth);
  await p.screenshot({path:`${OUT}/seite_performance-analyse_${tag}.png`,fullPage:true});
  console.log(tag,'overflowX',ov,'height',await p.evaluate(()=>document.body.scrollHeight));
  await p.close();}
await b.close();})();
