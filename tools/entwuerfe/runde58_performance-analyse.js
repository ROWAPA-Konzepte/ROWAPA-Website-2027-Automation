// Runde 58 (Basis Runde 57: Strategiegespräch, Kopfzeile bündig, Kundenstimme, Aufwand Fremdsicht; vorher Runde 57, Auswertung der Rückmeldungen ROWAPA und ChatGPT): Landingpage Performance-Analyse aus den Bausteinen der Startseite (Basis Runde 54).
// Neu: «Was Sie erreichen» mit Auswertungs-Slider (Slider der Startseite «Unsere Erfolge»), «Unser Vorgehen» mit den
// vier Phasen der Startseite und den sechs Analyse-Phasen darin, fünf Erhebungsmethoden mit «Warum», Brotkrumen mit Plum.
// Aufruf: node page55.js <Ausgabeordner> [crumb=a|b|c]
const {chromium}=require('playwright');const fs=require('fs');const D=__dirname;
const OUT=process.argv[2]||D+'/out';
const css=`<style>
.mk-b{position:relative;overflow:hidden;background:#1D3149;color:#fff}
.mk-b .padding-section-large{padding-top:clamp(6rem,8vw,7.5rem);padding-bottom:clamp(4rem,7vw,6rem)}
.mk-b-grid{position:relative;z-index:2;display:grid;grid-template-columns:8fr 4fr;gap:3rem;align-items:center}
.mk-crumb{font-size:.875rem;line-height:1.4;margin-bottom:2rem;color:rgba(255,255,255,.75);display:flex;align-items:center;flex-wrap:wrap;gap:.4rem}.mk-crumb b{font-weight:600;color:#fff}
.mk-crumb .k{color:#AA1351;font-weight:600}
.mk-crumb.is-label .k{display:inline-block;background:#AA1351;color:#fff;padding:.25rem .6rem;border-radius:2px;margin-right:.35rem}
.mk-crumb.is-linie .k{color:#fff;display:inline-flex;align-items:center;gap:.6rem;line-height:1.4}.mk-crumb.is-linie .k:before{content:"";width:1.5rem;height:2px;background:#AA1351}
.mk-b h1{color:#fff;margin:0 0 1.5rem;font-size:clamp(2.25rem,4vw,3.75rem);line-height:1.08;max-width:none}.mk-b .mk-lead{font-size:1.25rem;line-height:1.5;max-width:36rem;opacity:.9;margin:0 0 2rem}
.mk-fig img{width:100%;max-width:240px;display:block;margin:0 0 0 auto}
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
@media (max-width:767px){.mk-b-grid{grid-template-columns:1fr;gap:2.5rem}.mk-fig img{max-width:110px;margin:0 auto}.mk-b .padding-section-large{padding-top:2rem!important}.mk-b .mk-lead{font-size:1.0625rem}.mk-crumb{margin-bottom:1.25rem}
 .pa-m5{grid-template-columns:1fr}.pa-pair,.pa-bar{grid-template-columns:1fr 2.5rem}.pa-pair{grid-template-columns:1fr;gap:.25rem}.pa-bar span{grid-column:1/-1}
 .pa-heat{font-size:.85rem;border-spacing:3px}.pa-heat th{font-size:.62rem;padding:.1rem}.pa-heat td.l{font-size:.78rem}.pa-vis{padding:1.25rem;min-height:0}.pa-win>div{padding:1.5rem}.pa-plan{font-size:.8rem}.pa-res{flex-direction:column;align-items:stretch}.pa-res:before{display:none}}

.pa-lf{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-top:3rem}
.pa-lf .card{height:100%}.pa-lf .card_content{gap:1rem;padding:2rem}
.pa-lf .text-style-kicker{color:#486EA3}.pa-lf h3{margin:0}.pa-lf p{margin:0;color:#3a4a5e;line-height:1.55}
.pa-lf ul{margin:0;padding:0;list-style:none;display:grid;gap:.6rem}
.pa-lf li{display:grid;grid-template-columns:1.25rem 1fr;gap:.5rem;color:#1D3149;line-height:1.45}.pa-lf li:before{content:"→";color:#AA1351;font-weight:700}
.pa-fu{margin-top:1.5rem;background:#1D3149;color:#fff;border-radius:8px;border-left:4px solid #AA1351;padding:2rem 2.25rem;display:grid;grid-template-columns:5fr 7fr;gap:2.5rem;align-items:center}
.pa-fu .text-style-kicker{color:#A0C4DF}.pa-fu h3{color:#fff;margin:.5rem 0 0}.pa-fu p{margin:0;color:rgba(255,255,255,.85);line-height:1.6}
.pa-fu ul{margin:1rem 0 0;padding:0;list-style:none;display:flex;flex-wrap:wrap;gap:.5rem}.pa-fu li{border:1px solid rgba(160,196,223,.4);border-radius:4px;padding:.4rem .7rem;font-size:.85rem;font-weight:600}
.pa-tri{margin:.9rem 0}.pa-tri .t{font-size:.9rem;color:#1D3149;margin-bottom:.35rem}
.pa-tri .ax{position:relative;height:18px}.pa-tri .ax:before{content:"";position:absolute;left:0;right:0;top:8px;height:2px;background:#E8E9E9}
.pa-tri .mk{position:absolute;top:2px;width:14px;height:14px;margin-left:-7px;border-radius:50%}
.pa-tri .mk.e{background:#486EA3}.pa-tri .mk.f{background:#fff;border:2px solid #1D3149}.pa-tri .mk.b{background:#1D3149;border-radius:2px;transform:rotate(45deg);width:12px;height:12px;margin-left:-6px;top:3px}
.pa-scale{display:flex;justify-content:space-between;font-size:.72rem;color:#3a4a5e;margin-top:.25rem}
.pa-meth{display:grid;grid-template-columns:minmax(0,1.05fr) 110px minmax(0,.85fr);margin-top:3rem;align-items:stretch}
.pa-ml{display:grid;gap:.75rem}
.pa-mr{background:#fff;border:1px solid #d5d9de;border-left:3px solid #486EA3;border-radius:6px;padding:1.1rem 1.35rem}
.pa-mr.otj{border-left-color:#AA1351;background:#F8EEF2}
.pa-mr .t{display:flex;justify-content:space-between;align-items:baseline;gap:1rem}
.pa-mr h3{margin:0;font-size:1.15rem}.pa-mr h3 small{font-family:var(--_typo---font-accent,inherit);font-weight:800;font-size:.75rem;letter-spacing:.1em;color:#486EA3;margin-right:.6rem}
.pa-mr .tag{font-family:var(--_typo---font-accent,inherit);font-weight:800;font-size:.68rem;letter-spacing:.12em;text-transform:uppercase;color:#486EA3;white-space:nowrap}
.pa-mr.otj .tag{color:#AA1351}
.pa-mr p{margin:.35rem 0 0;color:#3a4a5e;font-size:.95rem;line-height:1.5}
.pa-chips{display:flex;flex-wrap:wrap;align-items:center;gap:.35rem;margin-top:.6rem;font-size:.78rem;font-weight:600;color:#486EA3}
.pa-chips span{background:#EEF4F9;border:1px solid #C8D7E6;border-radius:3px;padding:.15rem .5rem}
.pa-mr.otj .pa-chips span{background:#fff;border-color:#E4BFCD;color:#1D3149}
.pa-wires{position:relative}.pa-wires svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.pa-wires path{fill:none;stroke:#486EA3;stroke-width:1.5;stroke-dasharray:4 6;opacity:.7}.pa-wires path.o{stroke:#AA1351;opacity:1;stroke-width:2}.pa-wires path.ar{stroke-dasharray:none;opacity:.9}
.pa-mp{background:#1D3149;color:#fff;border-radius:8px;padding:2.25rem;display:flex;flex-direction:column;justify-content:center;gap:1rem;position:relative;overflow:hidden}
.pa-mp .text-style-kicker{color:#A0C4DF}.pa-mp h3{color:#fff;margin:0}
.pa-mp ul{margin:0;padding:0;list-style:none;display:grid;gap:.6rem;position:relative;z-index:1}.pa-mp li{display:grid;grid-template-columns:.75rem 1fr;gap:.75rem;color:rgba(255,255,255,.88);line-height:1.45}.pa-mp li:before{content:"";width:.5rem;height:.5rem;background:#A0C4DF;margin-top:.45rem}
.pa-mp li.f:before{background:#AA1351}
.pa-mp img{position:absolute;right:-1.5rem;bottom:-1.5rem;width:9rem;opacity:.22}
.pa-mnote{margin-top:2rem;border:1px solid #d5d9de;border-radius:6px;padding:1rem 1.25rem;font-size:.92rem;color:#3a4a5e;background:#fff}
@media (max-width:991px){.pa-lf,.pa-fu{grid-template-columns:1fr}.pa-fu{gap:1rem}.pa-meth{grid-template-columns:1fr}.pa-wires{display:none}.pa-mp{margin-top:1rem}}
@media (max-width:767px){.pa-lf .card_content{padding:1.5rem}.pa-fu{padding:1.5rem}.pa-mp{padding:1.5rem}.pa-mr .t{flex-direction:column;gap:.25rem}}

.pa-tabs{margin-top:0}
.pa-tabmenu{display:flex;flex-wrap:wrap;gap:.25rem 2rem;border-bottom:1px solid #c9ced4;margin-bottom:2.5rem}
.pa-tabmenu .w-tab-link{background:transparent!important;padding:.85rem 0!important;vertical-align:baseline}
.pa-tabmenu a{display:block;padding:.85rem 0;font-weight:600;font-size:1rem;color:#5a6878;text-decoration:none;border-bottom:3px solid transparent;margin-bottom:-1px}
.pa-tabmenu a.w--current{color:#1D3149;border-bottom-color:#AA1351}
.pa-tabmenu a small{font-family:var(--_typo---font-accent,inherit);font-weight:800;font-size:.68rem;letter-spacing:.12em;text-transform:uppercase;color:#AA1351;margin-left:.4rem}
.pa-tabs .w-tab-pane{display:none}.pa-tabs .w-tab-pane.w--tab-active{display:block}
.pa-cap{margin-top:1rem;padding-top:.75rem;border-top:1px solid #E8E9E9;font-size:.78rem;line-height:1.45;color:#3a4a5e}
.pa-cta{margin-top:2.5rem;display:flex;align-items:center;justify-content:space-between;gap:1.5rem;flex-wrap:wrap;border-top:1px solid #c9ced4;padding-top:2rem}
.pa-cta p{margin:0;font-size:1.15rem;font-weight:600;color:#1D3149}
.pa-mp p.who{margin:0;color:rgba(255,255,255,.85);line-height:1.55;position:relative;z-index:1}
.pa-voice{margin-top:2.5rem;display:grid;grid-template-columns:3fr 9fr;gap:2rem;align-items:start}.pa-voice .text-style-kicker{padding-top:1.5rem}.pa-voice .card{background:#fff}
.pa-eff{margin-top:1.5rem;display:grid;grid-template-columns:repeat(3,1fr);gap:0;border:1px solid #d5d9de;border-radius:6px;background:#fff}
.pa-eff>div{padding:1.5rem;border-right:1px solid #d5d9de}.pa-eff>div:last-child{border-right:0}
.pa-eff .text-style-kicker{color:#486EA3}.pa-eff p{margin:.5rem 0 0;color:#1D3149;line-height:1.5;font-size:.95rem}
@media (max-width:991px){.pa-voice{grid-template-columns:1fr;gap:.75rem}.pa-voice .text-style-kicker{padding-top:0}.pa-eff{grid-template-columns:1fr}.pa-eff>div{border-right:0;border-bottom:1px solid #d5d9de}.pa-eff>div:last-child{border-bottom:0}}
@media (max-width:767px){.pa-tabmenu{gap:.1rem 1.25rem;margin-bottom:1.5rem}.pa-tabmenu a{font-size:.9rem;padding:.6rem 0}.pa-cta .button{width:100%}}
</style>`;
const head2=(k,t,p)=>`<div class="section-head"><div class="kicker"><div class="kicker_line"></div><div class="text-style-kicker">${k}</div></div><h2 class="heading-style-h2">${t}</h2>${p?`<p class="text-size-medium text-color-muted">${p}</p>`:''}</div>`;
const sec=(cls,inner,id='')=>`<section ${id?`id="${id}" `:''}class="pa-sec ${cls}"><div class="padding-global"><div class="container-large"><div class="padding-section-large">${inner}</div></div></div></section>`;

// 1 Header B
const crumbCls={a:'',b:' is-label',c:' is-linie'}[process.argv[3]||'c'];
const header=`<section class="mk-b"><div class="mk-sea"></div><div class="padding-global"><div class="container-large"><div class="padding-section-large"><div class="mk-b-grid"><div>
<div class="mk-crumb${crumbCls}"><span class="k">Für Unternehmen</span> › <b>Performance-Analyse</b></div>
<h1 class="heading-style-h1">Sie kennen Ihre Ergebnisse. Wir zeigen, wo Sie gezielt ansetzen können.</h1><div class="mk-strich"></div>
<p class="mk-lead">Für mehr Vertriebs- und Mitarbeiterperformance in Banken, Versicherungen und bei Brokern. Wir verbinden digitale Erhebung mit Gesprächen und Beobachtungen im Arbeitsalltag, unsere Fachpersonen leiten daraus konkrete Empfehlungen ab.</p>
<div class="button-group"><a href="mailto:boek@rowapa.ch" class="button">Strategiegespräch anfragen</a><a href="#methode" class="button is-secondary is-alternate">So funktioniert unsere Methode</a></div>
</div><div class="mk-fig"><img src="https://mock.local/lupe_kopf.png" alt="Figur Lupe aus Punkten"></div></div></div></div></div></section>`;

// 2 Logo-Band der Startseite
const logos=fs.readFileSync(D+'/section_logos.html','utf8');

// 3 Ausgangslage: Was möchten Sie verbessern? (Leistungsfelder aus der Vorlage «Standortbestimmung»), Führung in beiden Feldern
const lf=(n,t,p,q)=>`<div class="card is-linie"><div class="card_content is-linie"><div class="text-style-kicker">Leistungsfeld ${n}</div><h3 class="heading-style-h3">${t}</h3><p>${p}</p><ul>${q.map(x=>`<li>${x}</li>`).join('')}</ul></div></div>`;
const ausgang=sec('theme-hell',head2('Die Ausgangslage','Wo bleibt in Ihrem Unternehmen Potenzial ungenutzt?','Was möchten Sie verbessern? Fragestellung und Umfang legen wir gemeinsam fest.')+
 `<div class="pa-lf">${lf('01','Vertriebsperformance','Kundenpotenziale besser nutzen und Beratungs- und Vertriebsergebnisse weiterentwickeln.',['Warum erreichen einzelne Teams ihre Ziele und andere nicht?','Wo gibt es Potenzial bei Bedarfsergründung und Gesprächsführung?','Was unterscheidet erfolgreiches Beratungsverhalten?'])}
 ${lf('02','Mitarbeiterperformance','Mitarbeitende und Führungskräfte wirksamer unterstützen und gezielt entwickeln.',['Wo liegen Stärken und ungenutzte Potenziale?','Wie wirksam sind Feedback und Coaching im Alltag?','Wo braucht es mehr Zusammenarbeit und Verbindlichkeit?'])}</div>
 <div class="pa-fu"><div><div class="text-style-kicker">In beiden Feldern</div><h3 class="heading-style-h3">Wie Führung funktioniert und wirkt</h3></div><div><p>Führung prägt beide Felder. Darum messen wir sie mit: mit einem eigenen Kompetenzprofil, dem Urteil der Mitarbeitenden und der Begleitung in Führungsgesprächen.</p></div></div>`);
// 4 Was Sie erreichen + Auswertungs-Slider
const pct=v=>((v-4)/6*100).toFixed(1)+'%';
const SOLL=[['Bedarfsergründung',8.0,7.4],['Gesprächsführung',7.5,7.6],['Kundenpotenziale',8.0,6.2],['Produkt- und Fachwissen',7.0,7.8],['Abschlussorientierung',7.5,6.9],['Verbindlichkeit',8.0,6.1]];
const v1=`<div class="top"><b>Rolle Kundenberatung: Ist gegen Soll</b><span class="pa-muster">Musterdaten</span></div>${SOLL.map(([n,s,v])=>`<div class="pa-bar"><span>${n}</span><div class="pa-track"><div class="pa-fill${v<s-0.5?' low':''}" style="width:${pct(v)}"></div><div class="pa-soll" style="left:${pct(s)}"></div></div><b style="color:${v<s-0.5?'#AA1351':'#1D3149'};font-size:.85rem">${(v-s>0?'+':'')+(v-s).toFixed(1)}</b></div>`).join('')}<div class="pa-legend"><span><i style="background:#486EA3"></i>Ist</span><span><i style="background:#AA1351;width:3px;height:12px"></i>Soll der Rolle</span></div>`;
const T=[['Team A',7.8,6.9,7.3,6.8],['Team B',7.5,6.4,7.0,6.3],['Team C',7.4,6.1,6.8,6.0],['Team D',6.9,5.3,6.4,5.2]];
const col=v=>{const t=Math.max(0,Math.min(1,(v-5)/3));const a=[170,19,81],b=[160,196,223];return `rgb(${a.map((x,i)=>Math.round(x+(b[i]-x)*t))})`};
const v2=`<div class="top"><b>Dieselbe Rolle in vier Teams</b><span class="pa-muster">Musterdaten</span></div><table class="pa-heat"><tr><th></th><th>Bedarfs­ergründung</th><th>Kunden­potenziale</th><th>Abschluss­orientierung</th><th>Verbind­lichkeit</th></tr>${T.map(r=>`<tr><td class="l">${r[0]}</td>${r.slice(1).map(v=>`<td style="background:${col(v)};color:${v<6?'#fff':'#1D3149'}">${v.toFixed(1)}</td>`).join('')}</tr>`).join('')}</table>`;
const P=[['Coaching im Alltag',8.4,6.2,5.8],['Feedback geben',7.6,6.8,6.5],['Verbindlichkeit einfordern',7.1,5.4,5.0],['Mitarbeitergespräche führen',7.8,7.0,6.1]];
const v3=`<div class="top"><b>Teamleitung: Führung aus drei Blickwinkeln</b><span class="pa-muster">Musterdaten</span></div>${P.map(([n,e,f,o])=>`<div class="pa-tri"><div class="t">${n}</div><div class="ax"><div class="mk b" style="left:${pct(o)}"></div><div class="mk f" style="left:${pct(f)}"></div><div class="mk e" style="left:${pct(e)}"></div></div></div>`).join('')}<div class="pa-scale"><span>4</span><span>7</span><span>10</span></div><div class="pa-legend"><span><i style="background:#486EA3;border-radius:50%;width:10px;height:10px"></i>Eigensicht</span><span><i style="background:#fff;border:2px solid #1D3149;border-radius:50%;width:10px;height:10px"></i>Fremdsicht der Mitarbeitenden</span><span><i style="background:#1D3149;width:9px;height:9px;transform:rotate(45deg)"></i>Beobachtung im Führungsgespräch</span></div>`;
const TP=[['Bedarfsergründung',5.8,8.1],['Gesprächsführung',6.2,8.0],['Verbindlichkeit',5.5,7.7]];
const v4=`<div class="top"><b>Vergleichsgruppe und interne Referenz</b><span class="pa-muster">Musterdaten</span></div>${TP.map(([n,a,b])=>`<div class="pa-pair"><span>${n}</span><div><div class="pa-track"><div class="pa-fill f2" style="width:${a*10}%"></div></div><div class="pa-track"><div class="pa-fill" style="width:${b*10}%;background:#1D3149"></div></div></div></div>`).join('')}<div class="pa-legend"><span><i style="background:#A0C4DF"></i>Vergleichsgruppe</span><span><i style="background:#1D3149"></i>Referenz Ihrer erfolgreichsten Mitarbeitenden</span></div>`;
const v5=`<div class="top"><b>Handlungsfelder und Empfehlungen</b><span class="pa-muster">Musterdaten</span></div><table class="pa-plan"><tr><th>Handlungsfeld</th><th>Für wen</th><th>Empfehlung</th><th>Wann</th></tr>
<tr><td>Kundenpotenziale</td><td>alle Teams</td><td>Training Bedarfsergründung, Begleitung im Kundentermin</td><td class="w">Start</td></tr>
<tr><td>Verbindlichkeit</td><td>Teamleitungen</td><td>Coaching Führungsdialog</td><td class="w">ab Monat 2</td></tr>
<tr><td>Team D</td><td>Team D</td><td>On-the-Job-Begleitung</td><td class="w">ab Monat 2</td></tr>
<tr><td>Fachwissen</td><td>alle Teams</td><td>keine zusätzliche Massnahme, Anforderung erfüllt</td><td class="w">–</td></tr></table>`;
const cap=t=>`<div class="pa-cap">${t}</div>`;
const SL=[['Führung',v3+cap('Skala 1 bis 10 · Eigen- und Fremdsicht mit denselben Aussagen, Beobachtung in begleiteten Gesprächen nach definierten Kriterien · Vergleich der drei Blickwinkel'),'Wie Führung eingeschätzt und im Alltag erlebt wird.','Die Teamleitung schätzt ihr Coaching hoch ein. Ihr Team erlebt es seltener, und in begleiteten Mitarbeitergesprächen fehlen verbindliche Vereinbarungen. Daraus ergibt sich ein konkreter Ansatz für die Führungsentwicklung.','Führung','Eigensicht · Fremdsicht · Beobachtung'],
 ['Rollenprofil',v1+cap('Skala 1 bis 10 · Teamdurchschnitt aus Skill-Check, Eigen- und Fremdsicht · Vergleich mit dem Soll der Rolle, Zahl rechts = Abstand zum Soll'),'Wo steht das Team gegenüber der Rolle?','Kundenpotenziale und Verbindlichkeit liegen deutlich unter dem Soll. Beim Fachwissen liegt das Team darüber: Eine zusätzliche Fachschulung würde dort ansetzen, wo die Anforderung bereits erfüllt ist.','Rollenprofil','Abgleich mit dem Kompetenzprofil der Rolle'],
 ['Teams',v2+cap('Skala 1 bis 10 · Teamdurchschnitte derselben Rolle aus Skill-Check, Eigen- und Fremdsicht · Vergleich zwischen den Teams'),'Zwei Themen, nicht vier Teams.','Gemeinsame Entwicklungsschwerpunkte zeichnen sich ab: Kundenpotenziale und Verbindlichkeit sind in allen Teams die tiefsten Werte. Team D wird zusätzlich begleitet.','Teams','Team-Standortbestimmung'],
 ['Interne Referenz',v4+cap('Skala 1 bis 10 · Vergleichs- und Referenzgruppe in derselben Rolle · Erfolgskriterien vorab gemeinsam festgelegt'),'Was Ihre Besten anders machen.','Bei der Bedarfsergründung ist der Abstand zur internen Referenz am grössten. Hier setzt ein Training mit Praxisbeispielen der Referenzgruppe an.','Interne Referenz','Optional, bei ausreichender Gruppengrösse'],
 ['Massnahmen',v5+cap('Aus den Befunden abgeleitet und im Ergebnisgespräch gemeinsam priorisiert'),'Klare Handlungsfelder, konkrete Empfehlungen.','Je Handlungsfeld eine Massnahme mit Zielgruppe und Zeitpunkt. Wo die untersuchten Anforderungen erfüllt sind, empfehlen wir keine zusätzliche Massnahme. Auf Wunsch setzen Sie die Empfehlungen mit ROWAPA um.','Massnahmen','Ergebnisgespräch']];
const ON=+(process.env.SLIDE||1)-1;
// Webflow-Tabs (nativ) statt Slider: beschriftete Auswahl, keine automatische Weiterschaltung
const slider=`<div class="pa-tabs w-tabs" data-current="${SL[ON][0]}"><div class="pa-tabmenu w-tab-menu" role="tablist">${SL.map((s,i)=>`<a class="w-tab-link${i==ON?' w--current':''}" role="tab">${s[0]}${i==3?'<small>optional</small>':''}</a>`).join('')}</div>
<div class="w-tab-content">${SL.map(([l,v,h,t,a,r],i)=>`<div class="w-tab-pane${i==ON?' w--tab-active':''}" role="tabpanel"><div class="quote_featured"><div class="quote_image-wrapper is-plum-soft pa-vis">${v}</div><div class="quote_content"><h3 class="quote_headline">${h}</h3><p class="quote_text">${t}</p><div class="quote_author"><div class="person_name">${a}</div><div class="person_role">${r}</div></div></div></div></div>`).join('')}</div></div>
<div class="pa-cta"><p>Welche Auswertung wäre für Ihr Unternehmen aufschlussreich?</p><a href="mailto:boek@rowapa.ch" class="button">Strategiegespräch anfragen</a></div>`;
const ergebnis=sec('theme-soft',head2('Was Sie erreichen','Klare Handlungsfelder. Konkrete Empfehlungen.','Und auf Wunsch die Umsetzung aus einer Hand.')+
 `<div class="pa-win"><div><div class="n">01</div><h3 class="heading-style-h4">Klare Handlungsfelder</h3><p>Sie sehen, wo Entwicklung nötig ist und wo das Soll bereits erreicht ist, je Thema, Team, Person und Führungskraft.</p></div>
 <div><div class="n">02</div><h3 class="heading-style-h4">Konkrete Empfehlungen</h3><p>Zu jedem Handlungsfeld eine Massnahme mit Zielgruppe und Zeitpunkt. So setzen Sie Ihr Budget gezielt ein.</p></div>
 <div><div class="n">03</div><h3 class="heading-style-h4">Umsetzung mit ROWAPA</h3><p>Training, Coaching, Begleitung im Alltag und digitale Lösungen aus einer Hand. Eine Folgemessung zeigt, was sich verändert hat.</p></div></div>
 <div class="pa-sl-head"><div><h3 class="heading-style-h3">So sieht ein Ergebnis aus</h3><p>Fünf Auswertungen aus einem Musterbericht. Wählen Sie eine Ansicht.</p></div><span class="pa-muster">Alle Werte illustrativ</span></div>${slider}`,'ergebnis');

// 5 Die Methode: fünf Erhebungsmethoden als Visualisierung (wie Vorlage «Standortbestimmung»), ohne die vier Phasen
const MR=[['01','Skill-Check','Digital','Digitaler Fragebogen, zugeschnitten auf die Anforderungen der Rolle.',['Rollenprofil','→','Kompetenzprofil','→','Online-Skill-Check']],
 ['02','Eigensicht','Perspektive','Wie schätzen Mitarbeitende und Führungskräfte die eigenen Kompetenzen ein?',null],
 ['03','Fremdsicht','Perspektive','Wie erleben andere dasselbe Verhalten? Bei Führungskräften beurteilen auch ihre Mitarbeitenden.',null],
 ['04','Interviews','Gespräch','Was hilft im Alltag, was bremst? Die Gespräche helfen, Ergebnisse und Rahmenbedingungen einzuordnen.',null],
 ['05','On-the-Job-Begleitung','Fester Bestandteil','Wir begleiten Mitarbeitende und Führungskräfte in realen Situationen und beobachten nach definierten Kriterien.',['Kundengespräche','Führungsgespräche','Teamsitzungen']]];
const methode=sec('theme-hell',head2('Die Methode','Fünf Methoden. Ein differenzierter Blick auf den Ist-Zustand.','Wir untersuchen, wie Kompetenzen im Arbeitsalltag tatsächlich eingesetzt werden und welche Entwicklungsschritte daraus sinnvoll sind. Dafür verbinden wir digitale Erhebung, Gespräche und Beobachtung.')+
 `<div class="pa-meth"><div class="pa-ml">${MR.map(([n,t,g,p,c],k)=>`<div class="pa-mr${k==4?' otj':''}"><div class="t"><h3 class="heading-style-h4"><small>${n}</small>${t}</h3><span class="tag">${g}</span></div><p>${p}</p>${c?`<div class="pa-chips">${c.map(x=>x=='→'?'→':`<span>${x}</span>`).join('')}</div>`:''}</div>`).join('')}</div>
 <div class="pa-wires"><svg id="pa-wires" aria-hidden="true"></svg></div>
 <div class="pa-mp"><div class="text-style-kicker">Fachliche Auswertung durch ROWAPA</div><h3 class="heading-style-h3">Ein differenzierter Ist-Zustand</h3><p class="who">Unsere Fachpersonen bringen eigene Praxis aus Vertrieb und Führung in der Finanzbranche mit. Sie ordnen die Ergebnisse ein und leiten Empfehlungen ab.</p><ul><li>Kompetenzen je Person und Team</li><li>Eigen- und Fremdsicht im Vergleich</li><li class="f">Wie Führung eingeschätzt und erlebt wird</li><li>Beobachtetes Verhalten aus dem Alltag</li><li>Hinweise aus den Gesprächen</li></ul><img src="https://mock.local/lupe_kopf.png" alt=""></div></div>
 <div class="pa-voice"><div class="text-style-kicker">Kundenstimme</div><div class="card is-linie"><div class="card_content is-linie"><h3 class="quote_headline is-small">Nachhaltig durch Begleitung im Alltag.</h3><p class="quote_text is-plain">«Durch die Besuchsbegleitungen und den Einbezug der Führungskräfte wird die Nachhaltigkeit nochmals erheblich erhöht.»</p><div class="card_footer"><div class="quote_author"><div class="person_name">Eva-Maria Süess</div><div class="person_role">Mitglied der Bankleitung, Raiffeisenbank Berg-Erlen</div></div></div></div></div></div>
 <p class="pa-mnote">Die Methoden liefern unterschiedliche Arten von Erkenntnis. Wir werten sie nachvollziehbar aus und führen sie nicht einfach zu einer einzigen Zahl zusammen.</p>
 <div class="pa-eff"><div><div class="text-style-kicker">Dauer</div><p>Typischerweise vier bis sechs Wochen bis zum Ergebnis, davon drei bis vier Wochen Erhebung.</p></div><div><div class="text-style-kicker">Für Projektverantwortliche</div><p>Je ein halber Tag zum Start und für das Ergebnisgespräch, dazu die Abstimmung des Kompetenzprofils.</p></div><div><div class="text-style-kicker">Für Teilnehmende</div><p>Rund 25 Minuten Skill-Check. Führungskräfte brauchen für die Fremdsicht rund 20 bis 30 Minuten. Interviews und Begleitungen für ausgewählte Personen nach Absprache.</p></div></div>`,'methode');
// 6 «Gut zu wissen» der Startseite
let faq=fs.readFileSync(D+'/section_faq.html','utf8');
const Q=[['Ist die Performance-Analyse ein Online-Test?','Nein. Der Online-Skill-Check ist eine von fünf Methoden. Dazu kommen Eigen- und Fremdsicht, Interviews und Begleitungen im Arbeitsalltag. ROWAPA führt die Erkenntnisse fachlich zusammen.'],
 ['Wie messen Sie Führung?','Führungskräfte erhalten ein eigenes Kompetenzprofil. Sie schätzen sich selbst ein, ihre Mitarbeitenden beurteilen sie mit denselben Aussagen, und wir begleiten ausgewählte Führungs- und Mitarbeitergespräche.'],
 ['Womit werden die Ergebnisse verglichen?','Mit den Anforderungen der Rolle, zwischen Teams mit vergleichbaren Aufgaben und optional mit einem internen Referenzprofil Ihrer erfolgreichsten Mitarbeitenden. Welche Vergleiche sinnvoll sind, legen wir gemeinsam fest.'],
 ['Wie viel Aufwand entsteht für uns?','Für die Projektverantwortlichen je ein halber Tag zum Start und für das Ergebnisgespräch. Teilnehmende brauchen rund 25 Minuten für den Skill-Check, Führungskräfte für die Fremdsicht rund 20 bis 30 Minuten. Interviews und Begleitungen nach Absprache. Typische Dauer: vier bis sechs Wochen.'],
 ['Was kostet die Performance-Analyse?','Das hängt von Fragestellung, Rollen und Zahl der Teilnehmenden ab. Nach dem Strategiegespräch erhalten Sie einen konkreten Vorschlag zu Umfang und Investition.'],
 ['Wer sieht die Ergebnisse?','Das klären wir vor Projektbeginn: auf welcher Ebene ausgewertet wird und wer welche Ergebnisse erhält. Teilnehmende erhalten ihr eigenes Ergebnis.']];
faq=faq.replace(/<div class="faq_list">[\s\S]*<\/details><\/div>/,`<div class="faq_list">${Q.map(([q,a],n)=>`<details class="faq_item"${n==0?' open':''}><summary class="faq_question"><h3 class="faq_question-text">${q}</h3><div class="icon-box">+</div></summary><p class="faq_answer">${a}</p></details>`).join('')}</div>`);

// 7 Kontakt der Startseite
const kontakt=fs.readFileSync(D+'/kontakt.html','utf8').replace(/<p class="text-size-medium text-color-muted">[^<]*<\/p>/,'<p class="text-size-medium text-color-muted">Im Strategiegespräch klären wir Ihre Fragestellung, die relevanten Personen und Teams und einen sinnvollen Umfang. Sie sehen eine Musterauswertung und erhalten danach einen konkreten Vorschlag.</p>').replace(/(<a href="mailto:boek@rowapa.ch" class="button">)Erstgespräch vereinbaren(<\/a>)/,'$1Strategiegespräch anfragen$2');

const page=header+logos+ausgang+ergebnis+methode+faq+kontakt;
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
  await p.evaluate(()=>{const svg=document.getElementById('pa-wires');if(!svg)return;const wr=svg.getBoundingClientRect();if(!wr.width)return;
    const pr=document.querySelector('.pa-mp').getBoundingClientRect();const ty=pr.top+pr.height/2-wr.top;let h='';
    document.querySelectorAll('.pa-mr').forEach((r,k)=>{const b=r.getBoundingClientRect();const y=b.top+b.height/2-wr.top;h+=`<path class="${k==4?'o':''}" d="M0,${y} C${wr.width*.55},${y} ${wr.width*.45},${ty} ${wr.width-2},${ty}"/>`});
    h+=`<path class="ar" d="M${wr.width-10},${ty-6} L${wr.width-2},${ty} L${wr.width-10},${ty+6}"/>`;svg.innerHTML=h;});
  await p.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=600){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,100));}window.scrollTo(0,0);});
  await p.waitForTimeout(2000);
  if(MODE==='page'){
    const ov=await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth);
    await p.screenshot({path:`${OUT}/seite_performance-analyse_${tag}.png`,fullPage:true});
    console.log(tag,'overflowX',ov,'height',await p.evaluate(()=>document.body.scrollHeight));
  } else if(MODE==='slides'){
    await p.evaluate(()=>{document.querySelectorAll('body *').forEach(e=>{const c=getComputedStyle(e).position;if((c==='fixed'||c==='sticky')&&!e.closest('main'))e.style.visibility='hidden'})});
    for(let k=0;k<SL.length;k++){
      await p.evaluate(k=>{document.querySelectorAll('.pa-tabs .w-tab-pane').forEach((f,i)=>f.classList.toggle('w--tab-active',i===k));document.querySelectorAll('.pa-tabs .w-tab-link').forEach((d,i)=>d.classList.toggle('w--current',i===k));},k);
      const el=await p.$('.pa-tabs');await el.scrollIntoViewIfNeeded();await p.waitForTimeout(300);
      const bb=await el.boundingBox();await p.screenshot({path:`${OUT}/folie_${k+1}.png`,clip:{x:0,y:bb.y-24,width:1440,height:bb.height+48}});
    }
  } else if(MODE==='header'){
    const el=await p.$('.mk-b');await el.screenshot({path:`${OUT}/header_${process.argv[3]||'b'}.png`});
  }
  await p.close();}
await b.close();})();
