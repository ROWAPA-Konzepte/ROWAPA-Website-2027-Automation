/* ROWAPA · Umschaltleiste für Entwürfe 2.1.0 (Runde 89, Entscheide 393, 402 und 403)
   Nur auf den Entwurfsseiten /performance-analyse-entwurf und /startseite-entwurf (beide nicht verlinkt).
   Jeder Punkt lässt sich zwischen «heute» (= echte Seite) und den Mustern umschalten:
     auswertung  Beispielauswertungen der Performance-Analyse: heute Reiter; Muster 2 (Mischung aus heute und
                 Muster 1: Fragenspalte farbig, Plum-Versatzrahmen wie heute, Befund mit Farbakzent, übrige Werte
                 lesbar) mit Spalte Sea Cliff hell oder Manganese; Muster 1 (Fenster, Runde 88). Alle Muster bauen
                 sich Schritt für Schritt auf (Diagramm → Abweichung → Einordnung → Massnahme).
     insights    Neueste Insights der Startseite: heute Reihe mit Fotos; Magazin mit Foto nur im grossen Beitrag
                 oder Fotos in allen Beiträgen (ohne Filter, Link «Alle Inhalte» bleibt).
   Die Wahl gilt für beide Entwurfsseiten, bleibt im Browser gespeichert und lässt sich als Link teilen
   (?v=auswertung:mischung-hell,insights:foto-gross). Texte der Massnahmen stehen als Webflow-Elemente auf der Seite
   (Klasse auswertung_massnahme, im Designer pflegbar). Nach dem Entscheid wird die gewählte Fassung nativ
   gebaut; dieses Skript wird danach gelöscht. */
(function () {
  'use strict';
  var D = document, H = D.documentElement, SPEICHER = 'rgEntwurfMuster';

  var PUNKTE = [
    { k: 'auswertung', n: 'Beispielauswertungen (Performance-Analyse)', seite: '/performance-analyse-entwurf', ziel: '[data-muster="auswertung"]',
      o: [['heute', 'Reiter wie heute'], ['mischung-hell', 'Muster 2, Spalte Sea Cliff'], ['mischung-dunkel', 'Muster 2, Spalte Manganese'], ['muster', 'Muster 1: Fenster']] },
    { k: 'insights', n: 'Neueste Insights (Startseite)', seite: '/startseite-entwurf', ziel: '.section_insights',
      o: [['heute', 'Reihe wie heute'], ['foto-gross', 'Magazin, Foto nur im grossen Beitrag'], ['foto-alle', 'Magazin, Fotos in allen Beiträgen']] }
  ];
  /* Einordnung im Muster ohne den Satz, den jetzt die Massnahme übernimmt (Skizze Runde 87; Reiter 2 und 5 unverändert) */
  var EINORDNUNG = {
    0: 'Die Teamleitung schätzt ihr Coaching hoch ein. Ihr Team erlebt es seltener, und in begleiteten Mitarbeitergesprächen fehlen verbindliche Vereinbarungen.',
    2: 'Gemeinsame Entwicklungsschwerpunkte zeichnen sich ab: Kundenpotenziale und Verbindlichkeit sind in allen Teams die tiefsten Werte.',
    3: 'Bei der Bedarfsergründung ist der Abstand zur internen Referenz am grössten.'
  };
  var SCHRITTE = ['1 Diagramm', '2 Abweichung', '3 Einordnung', '4 Massnahme'];
  var TAKT = [1400, 2000, 2600]; /* Schritt 2, 3, 4 in ms nach dem Start (Diagramm braucht rund 1,3 s) */

  /* ---------- Zustand ---------- */
  function speichern(s) { try { localStorage.setItem(SPEICHER, JSON.stringify(s)); } catch (e) {} }
  function lesen() {
    var s = null;
    try { s = JSON.parse(localStorage.getItem(SPEICHER) || 'null'); } catch (e) { s = null; }
    var m = location.search.match(/[?&]v=([^&]*)/);
    if (m) {
      s = {};
      decodeURIComponent(m[1]).split(',').forEach(function (p) { var a = p.split(':'); if (a[0] && a[1]) s[a[0]] = a[1]; });
    }
    if (!s) s = {};
    PUNKTE.forEach(function (p) {
      if (!p.o.some(function (o) { return o[0] === s[p.k]; })) s[p.k] = p.o[1][0]; /* ohne Wahl: Muster zeigen */
    });
    speichern(s);
    return s;
  }
  var S = lesen();
  var ruhig = function () { return window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches; };

  /* ---------- Gestaltung (nur Entwurf; nach dem Entscheid nativ in Webflow) ---------- */
  var L = 'var(--_farben---manganese-linie,rgba(29,49,73,.14))', SOFT = 'var(--_farben---manganese-soft-text,#4A5A70)',
      MB = 'var(--_farben---manganese-black,#1D3149)', AKZ = 'var(--_typografie---schrift-akzent,inherit)';
  var A = '.v-auswertung-muster [data-muster="auswertung"]';
  var M = '.v-aw-m2 [data-muster="auswertung"]';
  var I = '.v-ins-magazin .section_insights';
  var J = ':is([data-schritt="2"],[data-schritt="3"],[data-schritt="4"])';
  var CSS = [
    /* Auswertung: Fenster */
    '.rg-fl{display:none}',
    A + '{display:grid;grid-template-columns:minmax(13rem,17.5rem) minmax(0,1fr);background:#fff;border:1px solid ' + L + ';box-shadow:0 30px 60px -40px rgba(17,29,44,.45)}',
    '.v-auswertung-muster .rg-fl{display:flex;grid-column:1/-1;align-items:center;gap:8px;padding:10px 16px;border-bottom:1px solid ' + L + ';font-size:12.5px;line-height:1.3;color:' + SOFT + '}',
    '.rg-fl i{width:9px;height:9px;border-radius:50%;background:#E8E9E9;flex:none}',
    '.rg-fl-titel{margin-left:4px}',
    '.rg-schritte{margin-left:auto;display:flex;flex-wrap:wrap;gap:6px}',
    '.rg-schritt{font-size:12px;padding:3px 9px;border:1px solid ' + L + ';color:' + SOFT + ';transition:color .2s,border-color .2s}',
    '.rg-schritt.an{border-color:#AA1351;color:#AA1351}',
    A + ' .auswertung_menu{flex-direction:column;flex-wrap:nowrap;gap:4px;margin:0;padding:16px;border-bottom:0;border-right:1px solid ' + L + '}',
    A + ' .auswertung_reiter{margin:0;padding:12px 14px;border-bottom:0;border-left:2px solid transparent;line-height:1.3;text-align:left;white-space:normal}',
    A + ' .auswertung_reiter:hover{background:#E8E9E9}',
    A + ' .auswertung_reiter.w--current{border-left-color:#AA1351;background:#FBEEF3}',
    A + ' .w-tab-content{padding:2rem;min-width:0}',
    A + ' .quote_featured.is-auswertung{grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:1.5rem 2rem;align-items:start;padding:0}',
    A + ' .auswertung_visual{grid-column:1/-1;height:auto;padding:0;box-shadow:none;background:none}',
    A + ' .quote_content.is-auswertung{justify-content:flex-start;row-gap:.5rem;padding:12px 0 0;border-top:2px solid #E8E9E9}',
    A + ' .quote_content.is-auswertung::before{content:"Einordnung";display:block;font-family:' + AKZ + ';font-size:.6875rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:' + SOFT + '}',
    A + ' .quote_headline{font-size:1.0625rem;color:' + MB + '}',
    A + ' .quote_text.is-auswertung{font-size:1rem;line-height:1.5;letter-spacing:0}',
    A + ' .auswertung_hinweis{margin-top:.25rem;font-size:.8125rem}',
    A + ' .quote_author.is-auswertung{display:none}',
    A + ' .auswertung_massnahme{display:block}',
    /* Auswertung: Schritte */
    A + ' .dia-hinweis{transition:opacity .4s}',
    A + ' [data-schritt="1"] .dia-hinweis{opacity:0}',
    A + ' [data-schritt="1"] .dia-hinweis-zelle{outline-color:transparent}',
    A + ' .dia_zeile,' + A + ' .dia_zelle,' + A + ' .bericht_schritt{transition:opacity .4s}',
    A + ' :is([data-schritt="2"],[data-schritt="3"],[data-schritt="4"]) .dia_zeile:not(.dia-hinweis-zeile){opacity:.35}',
    A + ' :is([data-schritt="2"],[data-schritt="3"],[data-schritt="4"]) .dia_zelle:not(.dia-hinweis-zelle){opacity:.55}',
    A + ' :is([data-schritt="2"],[data-schritt="3"],[data-schritt="4"]) .bericht_schritt:not(:last-child){opacity:.55}',
    A + ' .quote_content.is-auswertung,' + A + ' .auswertung_massnahme{transition:opacity .45s,transform .45s}',
    A + ' :is([data-schritt="1"],[data-schritt="2"]) .quote_content.is-auswertung{opacity:0;transform:translateY(8px)}',
    A + ' :is([data-schritt="1"],[data-schritt="2"],[data-schritt="3"]) .auswertung_massnahme{opacity:0;transform:translateY(8px)}',
    '@media (max-width:991px){' +
      A + '{grid-template-columns:minmax(0,1fr)}' +
      A + ' .auswertung_menu{flex-direction:row;overflow-x:auto;scrollbar-width:none;padding:8px;border-right:0;border-bottom:1px solid ' + L + '}' +
      A + ' .auswertung_reiter{white-space:nowrap;padding:10px 12px;border-left:0;border-bottom:2px solid transparent}' +
      A + ' .auswertung_reiter.w--current{border-bottom-color:#AA1351}' +
      A + ' .w-tab-content{padding:1.25rem}}',
    '@media (max-width:767px){' + A + ' .quote_featured.is-auswertung{grid-template-columns:minmax(0,1fr)}.rg-fl-titel{display:none}}',
    /* Auswertung Muster 2: Mischung aus heute und Muster 1 (Runde 89) */
    '.v-auswertung-mischung-hell{--rg-spalte:#D9E7F2;--rg-spalte-text:#4A5A70;--rg-spalte-hover:rgba(255,255,255,.5);--rg-spalte-aktiv:#fff;--rg-spalte-aktiv-text:#1D3149}',
    '.v-auswertung-mischung-dunkel{--rg-spalte:#1D3149;--rg-spalte-text:rgba(255,255,255,.76);--rg-spalte-hover:rgba(255,255,255,.06);--rg-spalte-aktiv:rgba(255,255,255,.1);--rg-spalte-aktiv-text:#fff}',
    M + '{display:grid;grid-template-columns:minmax(13rem,17rem) minmax(0,1fr);grid-template-rows:auto 1fr;margin:1.5rem 0 0 1.5rem;background:#fff;box-shadow:-1.5rem -1.5rem 0 -1px #E8E9E9,-1.5rem -1.5rem 0 0 #AA1351}',
    M + ' .auswertung_menu{grid-column:1;grid-row:1 / span 2;flex-direction:column;flex-wrap:nowrap;gap:2px;margin:0;padding:1.5rem 0;border:0;background:var(--rg-spalte)}',
    M + ' .auswertung_reiter{margin:0;padding:.875rem 1.5rem;border:0;border-left:3px solid transparent;line-height:1.3;text-align:left;white-space:normal;color:var(--rg-spalte-text);transition:background-color .2s,color .2s}',
    M + ' .auswertung_reiter:hover{background:var(--rg-spalte-hover)}',
    M + ' .auswertung_reiter.w--current{border-left-color:#AA1351;background:var(--rg-spalte-aktiv);color:var(--rg-spalte-aktiv-text)}',
    '.v-aw-m2 .rg-fl{display:flex;grid-column:2;grid-row:1;align-items:center;gap:1.25rem;padding:1.25rem 2rem 0;border:0;font-size:12px;line-height:1.3;color:' + SOFT + '}',
    '.v-aw-m2 .rg-fl i,.v-aw-m2 .rg-fl-titel{display:none}',
    '.v-aw-m2 .rg-schritte{margin-left:0;gap:1.25rem}',
    '.v-aw-m2 .rg-schritt{display:inline-flex;align-items:center;gap:6px;padding:0;border:0}',
    '.v-aw-m2 .rg-schritt::before{content:"";width:6px;height:6px;border-radius:50%;background:rgba(29,49,73,.22);transition:background-color .2s}',
    '.v-aw-m2 .rg-schritt.an{color:#AA1351}',
    '.v-aw-m2 .rg-schritt.an::before{background:#AA1351}',
    M + ' .w-tab-content{grid-column:2;grid-row:2;padding:1rem 2rem 2rem;min-width:0}',
    M + ' .quote_featured.is-auswertung{grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:1.5rem 2.5rem;align-items:start;padding:0}',
    M + ' .auswertung_visual{grid-column:1/-1;height:auto;padding:0;box-shadow:none;background:none}',
    M + ' .quote_content.is-auswertung{justify-content:flex-start;row-gap:.5rem;padding:.75rem 0 0;border-top:1px solid ' + L + '}',
    M + ' .quote_content.is-auswertung::before{content:"Einordnung";display:block;font-family:' + AKZ + ';font-size:.6875rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:' + SOFT + '}',
    M + ' .quote_headline{font-size:1.25rem}',
    M + ' .quote_text.is-auswertung{font-size:1.0625rem;line-height:1.5}',
    M + ' .auswertung_hinweis{margin-top:.25rem;font-size:.875rem}',
    M + ' .quote_author.is-auswertung{display:none}',
    M + ' .auswertung_massnahme{display:block}',
    M + ' .dia_zeile,' + M + ' .bericht_schritt:last-child{margin-left:-.75rem;margin-right:-.75rem;padding-left:.75rem;padding-right:.75rem}',
    M + ' .dia_zeile,' + M + ' .dia_zelle,' + M + ' .bericht_schritt,' + M + ' .dia-hinweis{transition:opacity .4s,background-color .4s,box-shadow .4s}',
    M + ' [data-schritt="1"] .dia-hinweis{opacity:0}',
    M + ' [data-schritt="1"] .dia-hinweis-zelle{outline-color:transparent}',
    M + ' ' + J + ' .dia_zeile:not(.dia-hinweis-zeile){opacity:.72}',
    M + ' ' + J + ' .dia-hinweis-zeile{background-color:#FBEEF3;box-shadow:inset 3px 0 0 #AA1351}',
    M + ' ' + J + ' .dia_zelle:not(.dia-hinweis-zelle){opacity:.8}',
    M + ' ' + J + ' .bericht_schritt:not(:last-child){opacity:.72}',
    M + ' ' + J + ' .bericht_schritt:last-child{background-color:#FBEEF3;box-shadow:inset 3px 0 0 #AA1351}',
    M + ' .quote_content.is-auswertung,' + M + ' .auswertung_massnahme{transition:opacity .45s,transform .45s}',
    M + ' :is([data-schritt="1"],[data-schritt="2"]) .quote_content.is-auswertung{opacity:0;transform:translateY(8px)}',
    M + ' :is([data-schritt="1"],[data-schritt="2"],[data-schritt="3"]) .auswertung_massnahme{opacity:0;transform:translateY(8px)}',
    '@media (max-width:991px){' +
      M + '{grid-template-columns:minmax(0,1fr);grid-template-rows:auto auto auto;margin:1rem 0 0 1rem;box-shadow:-1rem -1rem 0 -1px #E8E9E9,-1rem -1rem 0 0 #AA1351}' +
      M + ' .auswertung_menu{grid-column:1;grid-row:1;flex-direction:row;overflow-x:auto;scrollbar-width:none;padding:.5rem}' +
      M + ' .auswertung_reiter{white-space:nowrap;padding:.75rem 1rem;border-left:0;border-bottom:3px solid transparent}' +
      M + ' .auswertung_reiter.w--current{border-bottom-color:#AA1351}' +
      '.v-aw-m2 .rg-fl{grid-column:1;grid-row:2;padding:1rem 1.25rem 0}' +
      '.v-aw-m2 .rg-schritte{gap:.5rem 1rem}' +
      M + ' .w-tab-content{grid-column:1;grid-row:3;padding:.75rem 1.25rem 1.5rem}}',
    '@media (max-width:767px){' + M + ' .quote_featured.is-auswertung{grid-template-columns:minmax(0,1fr)}}',
    '@media (max-width:479px){.v-aw-m2 .rg-schritte{display:grid;grid-template-columns:repeat(2,max-content);gap:.375rem 1.25rem}}',
    /* Insights: Magazin */
    I + ' .padding-section-large.is-seitenspalte{display:block}',
    I + ' .section-head_row.is-seitenspalte{flex-direction:row;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;position:static;margin-bottom:clamp(2rem,5svh,3rem)}',
    I + ' .reihe_pfeil{display:none}',
    I + ' .reihe_steuerung{display:flex;flex-wrap:wrap;align-items:center;gap:8px}',
    I + ' .reihe_maske{overflow:visible}',
    I + ' .insights_reihe{grid-auto-flow:row;grid-auto-columns:auto;grid-template-columns:repeat(3,minmax(0,1fr));gap:1rem;overflow:visible;scroll-snap-type:none;margin-bottom:0;padding-bottom:0}',
    '.v-insights-foto-gross .section_insights .reihe_item:not(.rg-gross) .card_image-wrapper{display:none}',
    I + ' .reihe_item.rg-gross .card_image-wrapper{position:relative;flex:1 1 auto;height:auto;min-height:clamp(14rem,34svh,22rem)}',
    I + ' .reihe_item.rg-gross .card_image-wrapper img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}',
    I + ' .reihe_item.rg-gross{grid-column:span 2;grid-row:span 2}',
    I + ' .reihe_item.rg-gross .card{background-color:' + MB + ';border-color:transparent;min-height:20rem}',
    I + ' .reihe_item.rg-gross .card_content{flex:0 0 auto;justify-content:flex-end;padding:clamp(1.5rem,1rem + 1.5vw,2.5rem)}',
    I + ' .reihe_item.rg-gross .heading-style-h3{font-size:clamp(1.75rem,1.2rem + 1.4vw,2.5rem);line-height:1.1;color:#fff}',
    I + ' .reihe_item.rg-gross .text-size-regular{display:block;max-width:32rem;color:rgba(255,255,255,.76)}',
    I + ' .reihe_item.rg-gross .card_tag{color:var(--_farben---sea-cliff,#A0C4DF)}',
    I + ' .reihe_item.rg-gross .text-color-muted{color:rgba(255,255,255,.6)}',
    I + ' .reihe_item.rg-gross .text-style-link{color:#fff}',
    I + ' .reihe_item.rg-gross .card_footer{margin-top:1rem}',
    I + ' .link-teaser-list{margin-top:2rem}',
    '@media (max-width:991px){' + I + ' .insights_reihe{grid-template-columns:repeat(2,minmax(0,1fr))}}',
    '@media (min-width:768px) and (max-width:991px){' + I + ' .reihe_item.rg-tablet-aus{display:none!important}}', /* Tablet: grosser Beitrag + vier, keine einzelne Karte */
    '@media (max-width:767px){' + I + ' .reihe_item.rg-mehr{display:none!important}' + I + ' .insights_reihe{grid-template-columns:minmax(0,1fr)}' + I + ' .reihe_item.rg-gross{grid-column:auto;grid-row:auto}' + I + ' .reihe_item.rg-gross .card{min-height:0}}',
    /* Leiste */
    '.rg-vl{position:fixed;left:16px;bottom:16px;z-index:2147483000;font:13px/1.35 system-ui,-apple-system,"Segoe UI",sans-serif;color:#1D3149}',
    '.rg-vl button{font:inherit;cursor:pointer}',
    '.rg-vl-knopf{background:#1D3149;color:#fff;border:0;border-radius:999px;padding:8px 14px;box-shadow:0 4px 14px rgba(0,0,0,.18)}',
    '.rg-vl-knopf b{color:#A0C4DF}',
    '.rg-vl-panel{display:none;width:min(380px,calc(100vw - 32px));max-height:min(78vh,640px);overflow:auto;background:#fff;border:1px solid rgba(29,49,73,.18);box-shadow:0 10px 30px rgba(0,0,0,.18);padding:12px 14px 14px}',
    '.rg-vl[data-offen="1"] .rg-vl-panel{display:block}',
    '.rg-vl[data-offen="1"] .rg-vl-knopf{display:none}',
    '.rg-vl-kopf{display:flex;justify-content:space-between;align-items:center;font-weight:700;margin-bottom:4px}',
    '.rg-vl-zu{border:0;background:none;font-size:20px!important;line-height:1;padding:0 4px;color:#1D3149}',
    '.rg-vl-gruppe{margin:12px 0 4px;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#AA1351}',
    '.rg-vl-zeile{padding:6px 0;border-top:1px solid #E8E9E9}',
    '.rg-vl-name{display:block;margin-bottom:4px}',
    '.rg-vl-name small{display:block;color:rgba(29,49,73,.6);font-size:11px}',
    '.rg-vl-wahl{display:flex;flex-wrap:wrap;gap:4px}',
    '.rg-vl-wahl button{border:1px solid rgba(29,49,73,.3);background:#fff;color:#1D3149;padding:3px 8px;border-radius:3px}',
    '.rg-vl-wahl button[aria-pressed="true"]{background:#1D3149;border-color:#1D3149;color:#fff}',
    '.rg-vl-wege{display:flex;flex-wrap:wrap;gap:6px}',
    '.rg-vl-wege a{color:#1D3149;border:1px solid rgba(29,49,73,.3);padding:3px 8px;border-radius:3px;text-decoration:none}',
    '.rg-vl-wege a[aria-current="page"]{background:#E8E9E9}',
    '.rg-vl-fuss{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px;padding-top:10px;border-top:1px solid #E8E9E9}',
    '.rg-vl-fuss button{border:1px solid rgba(29,49,73,.3);background:#E8E9E9;color:#1D3149;padding:4px 9px;border-radius:3px}',
    '.rg-vl-notiz{margin-top:8px;font-size:11px;color:rgba(29,49,73,.7)}',
    '@media print{.rg-vl{display:none}}'
  ].join('');
  var st = D.createElement('style');
  st.id = 'rg-entwurf-muster-css';
  st.textContent = CSS;
  (D.head || H).appendChild(st);

  /* ---------- Muster Auswertung ---------- */
  var AW = { tabs: null, leiste: null, timer: [], io: null, mo: [], gestartet: false };
  function panes() { return AW.tabs ? [].slice.call(AW.tabs.querySelectorAll('.w-tab-pane')) : []; }
  function schritt(p, n) {
    p.setAttribute('data-schritt', String(n));
    if (AW.leiste && p.classList.contains('w--tab-active')) {
      [].forEach.call(AW.leiste.querySelectorAll('.rg-schritt'), function (c, i) { c.classList.toggle('an', i < n); });
    }
  }
  function lauf(p) {
    AW.timer.forEach(clearTimeout); AW.timer = [];
    if (ruhig()) { schritt(p, 4); return; }
    schritt(p, 1);
    TAKT.forEach(function (ms, i) { AW.timer.push(setTimeout(function () { schritt(p, i + 2); }, ms)); });
  }
  function auswertungAn() {
    var tabs = D.querySelector('[data-muster="auswertung"]');
    if (!tabs) return;
    AW.tabs = tabs;
    if (!AW.leiste) {
      var l = D.createElement('div');
      l.className = 'rg-fl';
      l.setAttribute('aria-hidden', 'true');
      l.innerHTML = '<i></i><i></i><i></i><span class="rg-fl-titel">ROWAPA Performance-Analyse · Beispielauswertung</span><span class="rg-schritte">' +
        SCHRITTE.map(function (s) { return '<span class="rg-schritt">' + s + '</span>'; }).join('') + '</span>';
      tabs.insertBefore(l, tabs.firstChild);
      AW.leiste = l;
    }
    panes().forEach(function (p, i) {
      var t = p.querySelector('.quote_text.is-auswertung');
      if (t && EINORDNUNG[i]) {
        if (!t.hasAttribute('data-rg-alt')) t.setAttribute('data-rg-alt', t.textContent);
        t.textContent = EINORDNUNG[i];
      }
      schritt(p, ruhig() ? 4 : 1);
      var aktiv = p.classList.contains('w--tab-active');
      var mo = new MutationObserver(function () {
        var jetzt = p.classList.contains('w--tab-active');
        if (jetzt && !aktiv && AW.gestartet) lauf(p);
        aktiv = jetzt;
      });
      mo.observe(p, { attributes: true, attributeFilter: ['class'] });
      AW.mo.push(mo);
    });
    AW.gestartet = false;
    AW.io = new IntersectionObserver(function (e) {
      if (!e[0].isIntersecting || AW.gestartet) return;
      AW.gestartet = true;
      var p = AW.tabs.querySelector('.w-tab-pane.w--tab-active');
      if (p) lauf(p);
    }, { rootMargin: '0px 0px -15% 0px' });
    AW.io.observe(tabs);
  }
  function auswertungAus() {
    AW.timer.forEach(clearTimeout); AW.timer = [];
    AW.mo.forEach(function (m) { m.disconnect(); }); AW.mo = [];
    if (AW.io) { AW.io.disconnect(); AW.io = null; }
    panes().forEach(function (p) {
      p.removeAttribute('data-schritt');
      var t = p.querySelector('.quote_text.is-auswertung');
      if (t && t.hasAttribute('data-rg-alt')) { t.textContent = t.getAttribute('data-rg-alt'); t.removeAttribute('data-rg-alt'); }
    });
  }

  /* ---------- Muster Insights ---------- */
  function karten() {
    var r = D.querySelector('.section_insights .insights_reihe');
    return r ? [].slice.call(r.querySelectorAll('.reihe_item')) : [];
  }
  function insightsAn() {
    karten().forEach(function (it, i) {
      it.classList.toggle('rg-gross', i === 0);
      it.classList.toggle('rg-mehr', i >= 3); /* Handy: nur drei Beiträge, wie heute gekürzt */
      it.classList.toggle('rg-tablet-aus', i >= 5);
    });
  }
  function insightsAus() {
    karten().forEach(function (it) { it.classList.remove('rg-gross', 'rg-mehr', 'rg-tablet-aus'); });
  }

  /* ---------- Anwenden ---------- */
  var aktivNun = {};
  function anwenden() {
    PUNKTE.forEach(function (p) {
      p.o.forEach(function (o) { H.classList.remove('v-' + p.k + '-' + o[0]); });
      if (S[p.k] !== 'heute') H.classList.add('v-' + p.k + '-' + S[p.k]);
    });
    var aw = S.auswertung !== 'heute', ins = S.insights !== 'heute';
    H.classList.toggle('v-aw-m2', /^mischung/.test(S.auswertung));
    H.classList.toggle('v-ins-magazin', ins);
    if (aw !== !!aktivNun.aw) { if (aw) auswertungAn(); else auswertungAus(); aktivNun.aw = aw; }
    else if (aw && aktivNun.awWert && aktivNun.awWert !== S.auswertung && AW.gestartet) {
      var p = AW.tabs && AW.tabs.querySelector('.w-tab-pane.w--tab-active');
      if (p) lauf(p); /* anderes Muster: Aufbau neu zeigen */
    }
    aktivNun.awWert = S.auswertung;
    if (ins !== !!aktivNun.ins) { if (ins) insightsAn(); else insightsAus(); aktivNun.ins = ins; }
  }

  /* ---------- Umschaltleiste ---------- */
  function linkFuer() {
    var teile = [];
    PUNKTE.forEach(function (p) { teile.push(p.k + ':' + S[p.k]); });
    return location.origin + location.pathname + '?v=' + teile.join(',');
  }
  function leiste() {
    var box = D.createElement('div');
    box.className = 'rg-vl';
    var offen = '0';
    try { offen = sessionStorage.getItem('rgVlOffen') || '0'; } catch (e) {}
    box.setAttribute('data-offen', offen);
    var knopf = D.createElement('button'); knopf.className = 'rg-vl-knopf'; knopf.type = 'button';
    var panel = D.createElement('div'); panel.className = 'rg-vl-panel'; panel.setAttribute('role', 'dialog'); panel.setAttribute('aria-label', 'Entwurf umschalten');
    var kopf = D.createElement('div'); kopf.className = 'rg-vl-kopf'; kopf.innerHTML = '<span>Entwurf umschalten</span>';
    var zu = D.createElement('button'); zu.className = 'rg-vl-zu'; zu.type = 'button'; zu.setAttribute('aria-label', 'Schliessen'); zu.textContent = '×';
    kopf.appendChild(zu); panel.appendChild(kopf);
    function zaehlen() {
      var n = 0; PUNKTE.forEach(function (p) { if (S[p.k] !== 'heute') n++; });
      knopf.innerHTML = 'Entwurf · <b>' + n + '</b> von ' + PUNKTE.length + ' im Muster';
    }
    function setzen(p, wert, gruppe) {
      if (S[p.k] === wert) return;
      S[p.k] = wert; speichern(S);
      [].forEach.call(gruppe.querySelectorAll('button'), function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-wert') === wert)); });
      anwenden(); zaehlen();
      if (history.replaceState) history.replaceState(history.state, '', linkFuer());
    }
    var g = D.createElement('div'); g.className = 'rg-vl-gruppe'; g.textContent = 'Muster (Runde 89)'; panel.appendChild(g);
    PUNKTE.forEach(function (p) {
      var zeile = D.createElement('div'); zeile.className = 'rg-vl-zeile';
      var hier = !!D.querySelector(p.ziel);
      var name = D.createElement('span'); name.className = 'rg-vl-name';
      name.innerHTML = p.n + (hier ? '' : '<small>auf der anderen Entwurfsseite</small>');
      zeile.appendChild(name);
      var wahl = D.createElement('div'); wahl.className = 'rg-vl-wahl'; wahl.setAttribute('role', 'group'); wahl.setAttribute('aria-label', p.n);
      p.o.forEach(function (o) {
        var b = D.createElement('button'); b.type = 'button'; b.textContent = o[1] + (o[0] === 'heute' ? ' · heute' : ''); b.setAttribute('data-wert', o[0]);
        b.setAttribute('aria-pressed', String(S[p.k] === o[0]));
        b.addEventListener('click', function () { setzen(p, o[0], wahl); });
        wahl.appendChild(b);
      });
      zeile.appendChild(wahl); panel.appendChild(zeile);
    });
    var g2 = D.createElement('div'); g2.className = 'rg-vl-gruppe'; g2.textContent = 'Seitenwechsel testen'; panel.appendChild(g2);
    var wege = D.createElement('div'); wege.className = 'rg-vl-zeile';
    var wl = D.createElement('div'); wl.className = 'rg-vl-wege';
    [['/startseite-entwurf', 'Startseite (Entwurf)'], ['/performance-analyse-entwurf', 'Performance-Analyse (Entwurf)']].forEach(function (w) {
      var a = D.createElement('a'); a.href = w[0]; a.textContent = w[1];
      if (location.pathname === w[0]) a.setAttribute('aria-current', 'page');
      wl.appendChild(a);
    });
    wege.appendChild(wl);
    var wn = D.createElement('div'); wn.className = 'rg-vl-notiz';
    wn.textContent = 'Auch über das Logo (zur Startseite) und das Megamenü «Was wir tun» › «Performance-Analyse». Danach die Zurück-Taste testen.';
    wege.appendChild(wn); panel.appendChild(wege);
    var fuss = D.createElement('div'); fuss.className = 'rg-vl-fuss';
    function alle(muster) {
      PUNKTE.forEach(function (p) { S[p.k] = muster ? p.o[1][0] : 'heute'; });
      speichern(S); location.href = linkFuer();
    }
    [['Alles wie heute', false], ['Alles im Muster', true]].forEach(function (a) {
      var b = D.createElement('button'); b.type = 'button'; b.textContent = a[0];
      b.addEventListener('click', function () { alle(a[1]); }); fuss.appendChild(b);
    });
    var teilen = D.createElement('button'); teilen.type = 'button'; teilen.textContent = 'Link zu dieser Auswahl';
    teilen.addEventListener('click', function () {
      var l = linkFuer();
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(l).then(function () { teilen.textContent = 'Link kopiert'; }, function () { window.prompt('Link kopieren:', l); });
      else window.prompt('Link kopieren:', l);
    });
    fuss.appendChild(teilen); panel.appendChild(fuss);
    var notiz = D.createElement('div'); notiz.className = 'rg-vl-notiz';
    notiz.innerHTML = '«heute» entspricht den echten Seiten (<a href="/">Startseite</a>, <a href="/performance-analyse">Performance-Analyse</a>). Die Wahl gilt für beide Entwurfsseiten und bleibt in diesem Browser gespeichert.';
    panel.appendChild(notiz);
    function oeffnen(an) { box.setAttribute('data-offen', an ? '1' : '0'); try { sessionStorage.setItem('rgVlOffen', an ? '1' : '0'); } catch (e) {} if (an) zu.focus(); else knopf.focus(); }
    knopf.addEventListener('click', function () { oeffnen(true); });
    zu.addEventListener('click', function () { oeffnen(false); });
    box.addEventListener('keydown', function (e) { if (e.key === 'Escape') oeffnen(false); });
    zaehlen();
    box.appendChild(knopf); box.appendChild(panel);
    D.body.appendChild(box);
  }

  function fertig() { anwenden(); leiste(); }
  if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', fertig);
  else fertig();
})();
