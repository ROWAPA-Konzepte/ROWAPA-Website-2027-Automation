// Runde 55: Landingpage Performance-Analyse aus den Bausteinen der Startseite (Basis Runde 54).
// Neu: «Was Sie erreichen» mit Auswertungs-Slider (Slider der Startseite «Unsere Erfolge»), «Unser Vorgehen» mit den
// vier Phasen der Startseite und den sechs Analyse-Phasen darin, fünf Erhebungsmethoden mit «Warum», Brotkrumen mit Plum.
// Aufruf: node page55.js <Ausgabeordner> [crumb=a|b|c]
const {chromium}=require('playwright');const fs=require('fs');const D=__dirname;
const OUT=process.argv[2]||D+'/out';
const css=`<style>
.mk-b{position:relative;overflow:hidden;background:#1D3149;color:#fff}
.mk-b .padding-section-large{padding-top:clamp(6rem,8vw,7.5rem);padding-bottom:clamp(4rem,7vw,6rem)}
.mk-b-grid{position:relative;z-index:2;display:grid;grid-template-columns:8fr 4fr;gap:3rem;align-items:center}
.mk-crumb{font-size:.875rem;margin-bottom:2rem;color:rgba(255,255,255,.75)}.mk-crumb b{font-weight:600;color:#fff}
.mk-crumb .k{color:#AA1351;font-weight:600}
.mk-crumb.is-label .k{display:inline-block;background:#AA1351;color:#fff;padding:.25rem .6rem;border-radius:2px;margin-right:.35rem}
.mk-crumb.is-linie .k{color:#fff;display:inline-flex;align-items:center;gap:.6rem}.mk-crumb.is-linie .k:before{content:"";width:1.5rem;height:2px;background:#AA1351}
.mk-b h1{color:#fff;margin:0 0 1.5rem;font-size:clamp(2.25rem,4vw,3.75rem);line-height:1.08;max-width:none}.mk-b .mk-lead{font-size:1.25rem;line-height:1.5;max-width:36rem;opacity:.9;margin:0 0 2rem}
.mk-fig img{width:100%;max-width:340px;display:block;margin-left:auto}
.mk-sea{position:absolute;left:0;right:0;bottom:0;height:42%;background:url(https://mock.local/punktemeer.jpg) center bottom/cover no-repeat;opacity:.45;z-index:1;-webkit-mask-image:linear-gradient(to bottom,transparent,#000 45%)}
.mk-strich{width:4rem;height:3px;background:#AA1351;margin:0 0 1.5rem}
.mk-b .button.is-secondary{color:#fff;border-color:rgba(255,255,255,.6);background:transparent}
.pa-sec .padding-section-large{padding-top:clamp(4rem,8vw,7rem);padding-bottom:clamp(4rem,8vw,7rem)}
.pa-q{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3rem}
.pa-q div{border-top:1px solid #AA1351;padding-top:1.25rem}.pa-q .text-style-kicker{color:#486EA3}.pa-q h3{margin:.75rem 0 0}
.pa-claim{margin-top:3rem;font-size:1.25rem;line-height:1.5;color:#1D3149;font-weight:600;max-width:46rem}
.pa-win{display:grid;grid-template-columns:repeat(3,1fr);gap:0;margin-top:3rem;background:#fff;border:1px solid #d5d9de}
.pa-win>div{padding:2rem;border-right:1px solid #d5d9de}.pa-win>div:last-child{border-right:0}
.pa-win .n{font-family:var(--_typo---font-accent,inherit);font-weight:800;font-size:.8rem;letter-spacing:.12em;color:#AA1351}
.pa-win h3{margin:1rem 0 .5rem}.pa-win p{margin:0;color:#3a4a5e;line-height:1.55}
.pa-sl-head{display:flex;justify-content:space-between;align-items:end;gap:2rem;margin:5rem 0 2rem}
.pa-sl-head h3{margin:0}.pa-sl-head p{margin:.5rem 0 0;color:#3a4a5e}
.pa-muster{display:inline-block;font-size:.7rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#AA1351;border:1px solid #AA1351;border-radius:2px;padding:.15rem .4rem;white-space:nowrap}
.pa-slider .erfolge_folie{display:none}.pa-slider .erfolge_folie.is-on{display:block;visibility:visible!important}
.pa-vis{background:#fff!important;display:flex;flex-direction:column;justify-content:center;padding:2rem;aspect-ratio:auto!important;min-height:26rem}
.pa-vis .top{display:flex;justify-content:space-between;align-items:center;gap:1rem;margin-bottom:1.25rem}
.pa-vis .top b{color:#1D3149;font-size:1rem}
.pa-heat{width:100%;border-collapse:separate;border-spacing:4px;font-size:.95rem}.pa-heat th{font-weight:600;text-align:center;color:#3a4a5e;font-size:.78rem;padding:.25rem}
.pa-heat td{text-align:center;padding:.6rem 0;border-radius:4px;font-weight:600}.pa-heat td.l{text-align:left;font-weight:600;color:#1D3149}
.pa-bar{display:grid;grid-template-columns:10.5rem 1fr 2.5rem;gap:.75rem;align-items:center;margin:.5rem 0;font-size:.9rem;color:#1D3149}
.pa-track{height:9px;background:#E8E9E9;border-radius:6px;position:relative;margin:3px 0}
.pa-fill{position:absolute;left:0;top:0;bottom:0;border-radius:6px;background:#486EA3}.pa-fill.f2{background:#A0C4DF}.pa-fill.low,.pa-fill.best{background:#AA1351}
.pa-soll{position:absolute;top:-4px;bottom:-4px;width:3px;background:#AA1351;border-radius:2px}
.pa-pair{display:grid;grid-template-columns:10.5rem 1fr;gap:.75rem;align-items:center;margin:.7rem 0;font-size:.9rem;color:#1D3149}
.pa-legend{display:flex;flex-wrap:wrap;gap:.5rem 1.25rem;font-size:.78rem;color:#3a4a5e;margin-top:.75rem}.pa-legend i{display:inline-block;width:12px;height:8px;border-radius:4px;margin-right:.4rem;vertical-align:middle}
.pa-plan{width:100%;border-collapse:collapse;font-size:.9rem;color:#1D3149}.pa-plan th{text-align:left;font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;color:#486EA3;padding:.5rem .5rem .5rem 0;border-bottom:1px solid #d5d9de}
.pa-plan td{padding:.75rem .5rem .75rem 0;border-bottom:1px solid #E8E9E9;vertical-align:top;line-height:1.4}.pa-plan td:first-child{font-weight:600}
.pa-plan .w{white-space:nowrap;color:#AA1351;font-weight:600}
.pa-small{font-size:.85rem;color:#3a4a5e;margin-top:1.5rem}
.section_vorgehen .steps_list{align-items:stretch!important}.section_vorgehen .step_item{align-content:start!important}
.pa-phl{list-style:none;margin:1rem 0 0;padding:0;display:grid;gap:.4rem}
.pa-phl li{display:flex;justify-content:space-between;gap:.75rem;border-top:1px solid #E8E9E9;padding-top:.4rem;font-size:.85rem;color:#1D3149;font-weight:600}
.pa-phl em{font-style:normal;font-weight:400;color:#486EA3;white-space:nowrap}
.section_vorgehen *{opacity:1!important;transform:none!important}
.pa-five{margin-top:4rem;padding-top:3rem;border-top:1px solid #d5d9de}
.pa-five-head{display:grid;grid-template-columns:5fr 7fr;gap:3rem;align-items:end;margin-bottom:2.5rem}.pa-five-head h3{margin:0}.pa-five-head p{margin:0;color:#3a4a5e;line-height:1.6}
.pa-m5{display:grid;grid-template-columns:repeat(5,1fr);gap:1rem;position:relative}
.pa-m5:before{content:"";position:absolute;left:2rem;right:2rem;top:1.25rem;height:1px;background:#A0C4DF;z-index:0}
.pa-m{position:relative;z-index:1;display:flex;flex-direction:column;gap:.6rem}
.pa-m .dot{width:2.5rem;height:2.5rem;border-radius:50%;background:#fff;border:2px solid #486EA3;display:flex;align-items:center;justify-content:center;font-family:var(--_typo---font-accent,inherit);font-weight:800;font-size:.8rem;color:#486EA3}
.pa-m .tag{font-family:var(--_typo---font-accent,inherit);font-weight:800;font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;color:#486EA3}
.pa-m h4{margin:0;font-size:1.15rem;color:#1D3149}.pa-m p{margin:0;font-size:.92rem;line-height:1.5;color:#3a4a5e}
.pa-m.otj{background:#1D3149;border-radius:8px;padding:1.25rem;margin-top:-1.25rem;border-left:4px solid #AA1351}
.pa-m.otj .dot{background:#AA1351;border-color:#AA1351;color:#fff}.pa-m.otj .tag{color:#A0C4DF}.pa-m.otj h4{color:#fff}.pa-m.otj p{color:rgba(255,255,255,.82)}
.pa-res{margin-top:2rem;display:flex;align-items:center;gap:1rem;font-weight:600;color:#1D3149}
.pa-res:before{content:"";flex:1;height:2px;background:linear-gradient(90deg,#A0C4DF,#486EA3)}
.pa-res span{background:#E8E9E9;border-radius:2px;padding:.6rem 1rem}
@media (max-width:991px){.pa-q,.pa-win,.pa-five-head{grid-template-columns:1fr}.pa-win>div{border-right:0;border-bottom:1px solid #d5d9de}.pa-m5{grid-template-columns:1fr 1fr}.pa-m5:before{display:none}.pa-m.otj{margin-top:0}.pa-sl-head{display:block}}
@media (max-width:767px){.mk-b-grid{grid-template-columns:1fr;gap:2.5rem}.mk-fig img{max-width:140px;margin:0 auto}.mk-b .padding-section-large{padding-top:2rem!important}.mk-b .mk-lead{font-size:1.0625rem}.mk-crumb{margin-bottom:1.25rem}
 .pa-m5{grid-template-columns:1fr}.pa-pair,.pa-bar{grid-template-columns:1fr 2.5rem}.pa-pair{grid-template-columns:1fr;gap:.25rem}.pa-bar span{grid-column:1/-1}
 .pa-heat{font-size:.85rem;border-spacing:3px}.pa-heat th{font-size:.62rem;padding:.1rem}.pa-heat td.l{font-size:.78rem}.pa-vis{padding:1.25rem;min-height:0}.pa-win>div{padding:1.5rem}.pa-plan{font-size:.8rem}.pa-res{flex-direction:column;align-items:stretch}.pa-res:before{display:none}}
</style>`;
const head2=(k,t,p)=>`<div class="section-head"><div class="kicker"><div class="kicker_line"></div><div class="text-style-kicker">${k}</div></div><h2 class="heading-style-h2">${t}</h2>${p?`<p class="text-size-medium text-color-muted">${p}</p>`:''}</div>`;
const sec=(cls,inner,id='')=>`<section ${id?`id="${id}" `:''}class="pa-sec ${cls}"><div class="padding-global"><div class="container-large"><div class="padding-section-large">${inner}</div></div></div></section>`;

// 1 Header B
const crumbCls={a:'',b:' is-label',c:' is-linie'}[process.argv[3]||'b'];
const header=`<section class="mk-b"><div class="mk-sea"></div><div class="padding-global"><div class="container-large"><div class="padding-section-large"><div class="mk-b-grid"><div>
<div class="mk-crumb${crumbCls}"><span class="k">Für Unternehmen</span> › <b>Performance-Analyse</b></div>
<h1 class="heading-style-h1">Sie kennen Ihre Ergebnisse. Wir zeigen, wo Sie gezielt ansetzen können.</h1><div class="mk-strich"></div>
<p class="mk-lead">Die Performance-Analyse verbindet digitale Kompetenzerhebung mit Gesprächen und Beobachtungen im Arbeitsalltag. Für mehr Vertriebs- und Mitarbeiterperformance.</p>
<div class="button-group"><a href="mailto:boek@rowapa.ch" class="button">Erstgespräch vereinbaren</a><a href="#ablauf" class="button is-secondary is-alternate">So funktioniert unsere Methode</a></div>
</div><div class="mk-fig"><img src="https://mock.local/lupe.png" alt="Figur Lupe aus Punkten"></div></div></div></div></div></section>`;

// 2 Logo-Band der Startseite
const logos=fs.readFileSync(D+'/section_logos.html','utf8');

// 3 Ausgangslage
const ausgang=sec('theme-hell',head2('Die Ausgangslage','Die Resultate sind bekannt. Die Hintergründe oft nicht.','Ergebnisse zeigen, was erreicht wurde. Sie erklären nicht, warum Potenzial ungenutzt bleibt.')+
 `<div class="pa-q"><div><div class="text-style-kicker">Vertrieb</div><h3 class="heading-style-h4">Warum erreichen einzelne Teams ihre Ziele und andere nicht?</h3></div>
 <div><div class="text-style-kicker">Mitarbeitende</div><h3 class="heading-style-h4">Wo bleiben Stärken ungenutzt?</h3></div>
 <div><div class="text-style-kicker">Führung</div><h3 class="heading-style-h4">Wie wirksam wird Führung im Alltag erlebt?</h3></div></div>
 <p class="pa-claim">Die Performance-Analyse zeigt, wo sich gezielte Entwicklung lohnt und wo nicht.</p>`);

// 4 Was Sie erreichen + Auswertungs-Slider
const pct=v=>((v-4)/6*100).toFixed(1)+'%';
const SOLL=[['Bedarfsergründung',8.0,7.4],['Gesprächsführung',7.5,7.6],['Kundenpotenziale',8.0,6.2],['Produkt- und Fachwissen',7.0,7.8],['Abschlussorientierung',7.5,6.9],['Verbindlichkeit',8.0,6.1]];
const v1=`<div class="top"><b>Rolle Kundenberatung: Ist gegen Soll</b><span class="pa-muster">Musterdaten</span></div>${SOLL.map(([n,s,v])=>`<div class="pa-bar"><span>${n}</span><div class="pa-track"><div class="pa-fill${v<s-0.5?' low':''}" style="width:${pct(v)}"></div><div class="pa-soll" style="left:${pct(s)}"></div></div><b style="color:${v<s-0.5?'#AA1351':'#1D3149'};font-size:.85rem">${(v-s>0?'+':'')+(v-s).toFixed(1)}</b></div>`).join('')}<div class="pa-legend"><span><i style="background:#486EA3"></i>Ist</span><span><i style="background:#AA1351;width:3px;height:12px"></i>Soll der Rolle</span></div>`;
const T=[['Team A',7.8,6.9,7.3,6.8],['Team B',7.5,6.4,7.0,6.3],['Team C',7.4,6.1,6.8,6.0],['Team D',6.9,5.3,6.4,5.2]];
const col=v=>{const t=Math.max(0,Math.min(1,(v-5)/3));const a=[170,19,81],b=[160,196,223];return `rgb(${a.map((x,i)=>Math.round(x+(b[i]-x)*t))})`};
const v2=`<div class="top"><b>Dieselbe Rolle in vier Teams</b><span class="pa-muster">Musterdaten</span></div><table class="pa-heat"><tr><th></th><th>Bedarfs­ergründung</th><th>Kunden­potenziale</th><th>Abschluss­orientierung</th><th>Verbind­lichkeit</th></tr>${T.map(r=>`<tr><td class="l">${r[0]}</td>${r.slice(1).map(v=>`<td style="background:${col(v)};color:${v<6?'#fff':'#1D3149'}">${v.toFixed(1)}</td>`).join('')}</tr>`).join('')}</table>`;
const P=[['Coaching im Alltag',8.4,6.2],['Verbindlichkeit einfordern',7.1,5.4],['Entwicklung begleiten',7.8,6.0],['Vorbild im Kundenkontakt',7.4,7.6]];
const v3=`<div class="top"><b>Teamleitung: Eigen- und Fremdsicht</b><span class="pa-muster">Musterdaten</span></div>${P.map(([n,a,b])=>`<div class="pa-pair"><span>${n}</span><div><div class="pa-track"><div class="pa-fill" style="width:${pct(a)}"></div></div><div class="pa-track"><div class="pa-fill f2" style="width:${pct(b)}"></div></div></div></div>`).join('')}<div class="pa-legend"><span><i style="background:#486EA3"></i>Eigensicht</span><span><i style="background:#A0C4DF"></i>Fremdsicht durch das Team</span></div>`;
const TP=[['Bedarfsergründung',5.8,8.1],['Gesprächsführung',6.2,8.0],['Verbindlichkeit',5.5,7.7]];
const v4=`<div class="top"><b>Vergleichsgruppe und interne Referenz</b><span class="pa-muster">Musterdaten</span></div>${TP.map(([n,a,b])=>`<div class="pa-pair"><span>${n}</span><div><div class="pa-track"><div class="pa-fill f2" style="width:${a*10}%"></div></div><div class="pa-track"><div class="pa-fill best" style="width:${b*10}%"></div></div></div></div>`).join('')}<div class="pa-legend"><span><i style="background:#A0C4DF"></i>Vergleichsgruppe</span><span><i style="background:#AA1351"></i>Referenz Ihrer erfolgreichsten Mitarbeitenden</span></div>`;
const v5=`<div class="top"><b>Handlungsfelder und Empfehlungen</b><span class="pa-muster">Musterdaten</span></div><table class="pa-plan"><tr><th>Handlungsfeld</th><th>Für wen</th><th>Empfehlung</th><th>Wann</th></tr>
<tr><td>Kundenpotenziale</td><td>alle Teams</td><td>Training Bedarfsergründung, Begleitung im Kundentermin</td><td class="w">Start</td></tr>
<tr><td>Verbindlichkeit</td><td>Teamleitungen</td><td>Coaching Führungsdialog</td><td class="w">ab Monat 2</td></tr>
<tr><td>Team D</td><td>Team D</td><td>On-the-Job-Begleitung</td><td class="w">ab Monat 2</td></tr>
<tr><td>Fachwissen</td><td>alle Teams</td><td>keine Massnahme, Soll erreicht</td><td class="w">–</td></tr></table>`;
const SL=[[v1,'Wo steht das Team gegenüber der Rolle?','Kundenpotenziale und Verbindlichkeit liegen deutlich unter dem Soll. Beim Fachwissen liegt das Team darüber: Eine Fachschulung würde dort ansetzen, wo kein Bedarf besteht.','Auswertung 1 von 5','Abgleich mit dem Kompetenzprofil der Rolle'],
 [v2,'Zwei Themen, nicht vier Teams.','Kundenpotenziale und Verbindlichkeit sind in allen Teams die tiefsten Werte. Ein gemeinsamer Schwerpunkt reicht, Team D wird zusätzlich begleitet.','Auswertung 2 von 5','Team-Standortbestimmung'],
 [v3,'Wo Selbstbild und Wirkung auseinanderliegen.','Beim Coaching im Alltag ist der Abstand am grössten. Ein Anlass für den Führungsdialog, kein Urteil über die Person.','Auswertung 3 von 5','Individuelle Standortbestimmung'],
 [v4,'Was Ihre Besten anders machen.','Bei der Bedarfsergründung ist der Abstand zur internen Referenz am grössten. Hier setzt ein Training mit Praxisbeispielen der Referenzgruppe an.','Auswertung 4 von 5','Optional, bei ausreichender Gruppengrösse'],
 [v5,'Klare Handlungsfelder, konkrete Empfehlungen.','Je Handlungsfeld eine Massnahme mit Zielgruppe und Zeitpunkt, und wo das Soll erreicht ist, keine. Auf Wunsch setzen Sie die Empfehlungen direkt mit ROWAPA um.','Auswertung 5 von 5','Ergebnisgespräch']];
const ON=+(process.env.SLIDE||1)-1;
const slider=`<div data-delay="4000" data-animation="cross" class="erfolge_slider w-slider pa-slider" aria-label="Musterauswertungen" role="region"><div class="erfolge_maske w-slider-mask">${SL.map(([v,h,t,a,r],i)=>`<div class="erfolge_folie w-slide${i==ON?' is-on':''}" aria-label="${i+1} of ${SL.length}" role="group"><div class="quote_featured"><div class="quote_image-wrapper is-plum-soft pa-vis">${v}</div><div class="quote_content"><h3 class="quote_headline">${h}</h3><p class="quote_text">${t}</p><div class="quote_author"><div class="person_name">${a}</div><div class="person_role">${r}</div></div></div></div></div>`).join('')}</div>
<div class="erfolge_slider-arrow is-prev w-slider-arrow-left" role="button" tabindex="0" aria-label="previous slide"><div class="w-icon-slider-left"></div></div><div class="erfolge_slider-arrow is-next w-slider-arrow-right" role="button" tabindex="0" aria-label="next slide"><div class="w-icon-slider-right"></div></div>
<div class="erfolge_slider-nav w-slider-nav w-round w-num">${SL.map((s,i)=>`<div class="w-slider-dot${i==ON?' w-active':''}" style="margin-left:3px;margin-right:3px">${i+1}</div>`).join('')}</div></div>`;
const ergebnis=sec('theme-soft',head2('Was Sie erreichen','Klare Handlungsfelder. Konkrete Empfehlungen.','Und auf Wunsch die Umsetzung aus einer Hand.')+
 `<div class="pa-win"><div><div class="n">01</div><h3 class="heading-style-h4">Klare Handlungsfelder</h3><p>Sie sehen, wo Entwicklung nötig ist und wo das Soll bereits erreicht ist, je Thema, Team und Person.</p></div>
 <div><div class="n">02</div><h3 class="heading-style-h4">Konkrete Empfehlungen</h3><p>Zu jedem Handlungsfeld eine Massnahme mit Zielgruppe und Zeitpunkt. So setzen Sie Ihr Budget gezielt ein.</p></div>
 <div><div class="n">03</div><h3 class="heading-style-h4">Umsetzung mit ROWAPA</h3><p>Training, Coaching, Begleitung im Alltag und digitale Lösungen aus einer Hand. Eine Folgemessung zeigt, was sich verändert hat.</p></div></div>
 <div class="pa-sl-head"><div><h3 class="heading-style-h3">So sieht ein Ergebnis aus</h3><p>Fünf Auszüge aus einem Musterbericht.</p></div><span class="pa-muster">Alle Werte illustrativ</span></div>${slider}`,'ergebnis');

// 5 «Unser Vorgehen» der Startseite: vier Phasen mit den sechs Analyse-Phasen, darunter die fünf Methoden
let vorgehen=fs.readFileSync(D+'/section_vorgehen.html','utf8');
const steps=[['Analysieren','Auftrag · Profil · Erhebung','Wir klären Fragestellung und beteiligte Personen, entwickeln das Kompetenzprofil der Rolle und erheben drei bis vier Wochen lang mit fünf Methoden.'],
 ['Verstehen','Auswertung · Ergebnisgespräch','Wir werten je Person und Team aus und zeigen Ihnen im Ergebnisgespräch die Handlungsfelder und Empfehlungen.'],
 ['Handeln','Umsetzung, auf Wunsch mit ROWAPA','Training, Coaching, Begleitung im Alltag oder digitale Lösungen, genau dort, wo die Analyse Bedarf zeigt.'],
 ['Messen','Folgemessung, optional','Mit derselben Erhebung sehen Sie, was sich verändert hat. Den Zeitpunkt legen wir gemeinsam fest.']];
vorgehen=vorgehen.replace('<section class="section_vorgehen theme-hell"','<section id="ablauf" class="section_vorgehen theme-hell"')
 .replace(/<div class="text-style-kicker">So arbeiten wir<\/div>/,'<div class="text-style-kicker">Die Methode</div>')
 .replace(/<h2 class="heading-style-h2">Unser Vorgehen<\/h2>/,'<h2 class="heading-style-h2">Vom Auftrag bis zur Wirkung</h2>')
 .replace(/<p class="text-size-medium text-color-muted">[^<]*<\/p>/,'<p class="text-size-medium text-color-muted">Die Performance-Analyse folgt unseren vier Phasen. Bis zum Ergebnis typischerweise vier bis sechs Wochen. Ihr Aufwand: je ein halber Tag zum Start und für das Ergebnisgespräch.</p>');
const PH=[[['Auftrag aufsetzen','Stunden'],['Profil entwickeln','1–2 Tage je Rolle'],['Erheben','3–4 Wochen']],[['Auswerten','Tage'],['Ergebnis','Ergebnisgespräch']],[['Massnahmen umsetzen','nach Vereinbarung']],[['Wirkung messen','optional']]];
let i=0;vorgehen=vorgehen.replace(/<h3 class="heading-style-h4">[^<]*<\/h3><div class="step_lead">[^<]*<\/div><p class="text-size-regular text-color-muted">[^<]*<\/p>/g,()=>{const k=i++,s=steps[k];return `<h3 class="heading-style-h4">${s[0]}</h3><div class="step_lead">${s[1]}</div><p class="text-size-regular text-color-muted">${s[2]}</p><ul class="pa-phl">${PH[k].map(([n,d])=>`<li><span>${n}</span><em>${d}</em></li>`).join('')}</ul>`});
const M=[['01','Digital','Skill-Check','Zeigt den Stand der Kompetenzen, vergleichbar über Personen und Teams. Zugeschnitten auf das Kompetenzprofil der Rolle.'],
 ['02','Perspektive','Eigensicht','Zeigt, wie Mitarbeitende und Führungskräfte sich selbst einschätzen.'],
 ['03','Perspektive','Fremdsicht','Zeigt, wie dasselbe Verhalten bei anderen ankommt, mit denselben Aussagen.'],
 ['04','Gespräch','Interviews','Erklären die Zahlen: Was hilft im Alltag, was bremst?'],
 ['05','Fester Bestandteil','On-the-Job-Begleitung','Zeigt, was in echten Situationen geschieht: in Kundengesprächen, Führungsgesprächen und Teamsitzungen.']];
const five=`<div class="pa-five"><div class="pa-five-head"><h3 class="heading-style-h3">Fünf Methoden, ein vollständiges Bild</h3><p>Jede Methode zeigt etwas, das die anderen nicht zeigen. Erst zusammen ergeben sie ein belastbares Bild, darum kombinieren wir digitale Erhebung, Gespräche und Beobachtung im Alltag.</p></div>
<div class="pa-m5">${M.map(([n,t,h,p],k)=>`<div class="pa-m${k==4?' otj':''}"><div class="dot">${n}</div><div class="tag">${t}</div><h4>${h}</h4><p>${p}</p></div>`).join('')}</div>
<div class="pa-res"><span>Ein differenzierter Ist-Zustand je Person und Team</span></div></div>`;
vorgehen=vorgehen.replace(/(<div class="steps_note">)/,five+'$1');

// 6 «Gut zu wissen» der Startseite
let faq=fs.readFileSync(D+'/section_faq.html','utf8');
const Q=[['Ist die Performance-Analyse ein Online-Test?','Nein. Der Online-Skill-Check ist eine von fünf Methoden. Dazu kommen Eigen- und Fremdsicht, Interviews und Begleitungen im Arbeitsalltag. ROWAPA führt die Erkenntnisse fachlich zusammen.'],
 ['Womit werden die Ergebnisse verglichen?','Mit den Anforderungen der Rolle, zwischen Teams mit vergleichbaren Aufgaben und optional mit einem internen Referenzprofil Ihrer erfolgreichsten Mitarbeitenden. Welche Vergleiche sinnvoll sind, legen wir gemeinsam fest.'],
 ['Wie viel Aufwand entsteht für uns?','Für die Projektverantwortlichen je ein halber Tag zum Start und für das Ergebnisgespräch. Teilnehmende brauchen rund 25 Minuten für den Skill-Check, weitere Gespräche und Begleitungen nach Absprache. Typische Dauer: vier bis sechs Wochen.'],
 ['Wer sieht die Ergebnisse?','Das klären wir vor Projektbeginn: auf welcher Ebene ausgewertet wird und wer welche Ergebnisse erhält. Teilnehmende erhalten ihr eigenes Ergebnis.'],
 ['Was kostet die Performance-Analyse?','Das hängt von Fragestellung, Rollen und Zahl der Teilnehmenden ab. Nach dem Erstgespräch erhalten Sie einen konkreten Vorschlag zu Umfang und Investition.'],
 ['Können wir die Massnahmen auch mit ROWAPA umsetzen?','Ja. Training, Coaching, Begleitung im Alltag und digitale Lösungen setzen genau bei den Handlungsfeldern an. Eine Folgemessung zeigt danach, was sich verändert hat.']];
faq=faq.replace(/<div class="faq_list">[\s\S]*<\/details><\/div>/,`<div class="faq_list">${Q.map(([q,a],n)=>`<details class="faq_item"${n==0?' open':''}><summary class="faq_question"><h3 class="faq_question-text">${q}</h3><div class="icon-box">+</div></summary><p class="faq_answer">${a}</p></details>`).join('')}</div>`);

// 7 Kontakt der Startseite
const kontakt=fs.readFileSync(D+'/kontakt.html','utf8');

const page=header+logos+ausgang+ergebnis+vorgehen+faq+kontakt;
const MODE=process.env.MODE||'page';
(async()=>{const b=await chromium.launch();fs.mkdirSync(OUT,{recursive:true});
const sizes=MODE==='page'?[[1440,900,'desktop'],[390,844,'handy']]:[[1440,900,'desktop']];
for(const [vw,vh,tag] of sizes){
  const p=await b.newPage({viewport:{width:vw,height:vh},deviceScaleFactor:vw<500?2:1});
  await p.route(/fastly\.net\/.*\.woff2/,r=>{const n=r.request().url().split('/').pop().replace(/^[0-9a-f]+-/,'');r.fulfill({path:D+'/../fonts/'+n,contentType:'font/woff2'})});
  await p.route('https://mock.local/*',r=>r.fulfill({path:D+'/'+r.request().url().split('/').pop()}));
  await p.goto('https://rowapa-website-2027-automation.webflow.io/',{waitUntil:'networkidle'});
  await p.evaluate(([css,html])=>{document.querySelectorAll('script[src*="rowapagrafik"],canvas').forEach(e=>e.remove());
    const m=document.querySelector('main')||document.querySelector('.main-wrapper');m.innerHTML=html;document.head.insertAdjacentHTML('beforeend',css);window.scrollTo(0,0);},[css,page]);
  await p.evaluate(()=>document.fonts.ready);
  await p.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=600){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,100));}window.scrollTo(0,0);});
  await p.waitForTimeout(2000);
  if(MODE==='page'){
    const ov=await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth);
    await p.screenshot({path:`${OUT}/seite_performance-analyse_${tag}.png`,fullPage:true});
    console.log(tag,'overflowX',ov,'height',await p.evaluate(()=>document.body.scrollHeight));
  } else if(MODE==='slides'){
    for(let k=0;k<SL.length;k++){
      await p.evaluate(k=>{document.querySelectorAll('.pa-slider .erfolge_folie').forEach((f,i)=>f.classList.toggle('is-on',i===k));document.querySelectorAll('.pa-slider .w-slider-dot').forEach((d,i)=>d.classList.toggle('w-active',i===k));},k);
      const el=await p.$('.pa-slider');await el.scrollIntoViewIfNeeded();await p.waitForTimeout(300);
      const bb=await el.boundingBox();await p.screenshot({path:`${OUT}/folie_${k+1}.png`,clip:{x:0,y:bb.y-24,width:1440,height:bb.height+48}});
    }
  } else if(MODE==='header'){
    const el=await p.$('.mk-b');await el.screenshot({path:`${OUT}/header_${process.argv[3]||'b'}.png`});
  }
  await p.close();}
await b.close();})();
