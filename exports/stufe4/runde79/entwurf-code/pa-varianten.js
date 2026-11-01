/* ROWAPA · Umschaltleiste für Entwürfe (Runde 79, Entscheid 393)
   Nur auf der Entwurfsseite «Performance-Analyse · Entwurf Bewegung» (/performance-analyse-entwurf).
   Jeder Punkt lässt sich zwischen «Heute» (= echte Seite) und dem Entwurf umschalten. Die Wahl bleibt im Browser
   gespeichert und lässt sich als Link teilen (?v=foto:text,titel:wechsel …).
   Das Skript steht im Kopf der Seite und läuft vor Webflow: Einstellungen, die Webflow-Interaktionen oder das
   Grafik-Skript betreffen (Einblendungen, Lupe), werden gesetzt, während die Seite aufgebaut wird.
   Nach dem Entscheid wird die gewählte Fassung nativ auf der echten Seite gebaut; dieses Skript wird dann gelöscht. */
(function () {
  'use strict';
  var D = document, H = D.documentElement, SPEICHER = 'rgVariantenPA';
  var LUPE_FEIN = 'https://cdn.prod.website-files.com/6addf1532819c0aacc74a496/6ae74057ca5be03971a74e5e_grafik-lupe-performance-analyse-fein.png';

  /* k = Schlüssel, n = Bezeichnung, o = Wahlmöglichkeiten [Wert, Text]; die erste ist immer «heute».
     neu = Wechsel lädt die Seite neu (betrifft Interaktionen oder Grafik beim Aufbau) */
  var GRUPPEN = [
    { t: 'Neu', z: [
      { k: 'foto', n: 'Foto nach «Fünf Perspektiven»', o: [['heute', 'ohne'], ['band', 'Bildband'], ['text', 'Foto mit Text']] },
      { k: 'titel', n: 'Titel', o: [['heute', 'alle links'], ['wechsel', 'links und rechts im Wechsel']] }
    ] },
    { t: 'Paket 1', z: [
      { k: 'einbl', n: 'Einblendungen', o: [['heute', 'heute'], ['schnell', 'schneller, Text sofort']], neu: true },
      { k: 'sprache', n: 'Sprachen EN · FR · IT', o: [['heute', 'sichtbar'], ['aus', 'ausgeblendet']] },
      { k: 'menue', n: 'Megamenü: aktuelle Seite', o: [['heute', 'heute'], ['markiert', 'markiert']] }
    ] },
    { t: 'Paket 3', z: [
      { k: 'button', n: 'Zweiter Button im Header', o: [['heute', '«So funktioniert …»'], ['beispiel', '«Beispielauswertung ansehen»']] },
      { k: 'eckdaten', n: 'Eckdaten im Header', o: [['heute', 'ohne'], ['mit', 'mit Eckdatenzeile']] },
      { k: 'hinweise', n: 'Hinweise in den Diagrammen', o: [['heute', 'ohne'], ['mit', 'mit Hinweisen']] },
      { k: 'rahmen', n: 'Rahmen um Auswertung und Zitat', o: [['heute', 'versetzt'], ['ruhig', 'ruhiger']] },
      { k: 'lupe', n: 'Lupe im Header', o: [['heute', 'heute'], ['fein', 'feinere Punkte']], neu: true }
    ] }
  ];
  var ZEILEN = [];
  GRUPPEN.forEach(function (g) { g.z.forEach(function (z) { ZEILEN.push(z); }); });

  /* ---------- Zustand ---------- */
  function lesen() {
    var s = {};
    try { s = JSON.parse(localStorage.getItem(SPEICHER) || '{}') || {}; } catch (e) { s = {}; }
    var m = location.search.match(/[?&]v=([^&]*)/);
    if (m) {
      s = {};
      decodeURIComponent(m[1]).split(',').forEach(function (p) { var a = p.split(':'); if (a[0] && a[1]) s[a[0]] = a[1]; });
      speichern(s);
    }
    ZEILEN.forEach(function (z) {
      var ok = z.o.some(function (o) { return o[0] === s[z.k]; });
      if (!ok) s[z.k] = 'heute';
    });
    return s;
  }
  function speichern(s) { try { localStorage.setItem(SPEICHER, JSON.stringify(s)); } catch (e) {} }
  var S = lesen();

  function klassen() {
    ZEILEN.forEach(function (z) {
      z.o.forEach(function (o) { H.classList.remove('v-' + z.k + '-' + o[0]); });
      if (S[z.k] !== 'heute') H.classList.add('v-' + z.k + '-' + S[z.k]);
    });
  }
  klassen();

  /* ---------- Darstellung der Varianten ---------- */
  var CSS = [
    'html:not(.v-foto-band) [data-variante="foto:band"],html:not(.v-foto-text) [data-variante="foto:text"]{display:none!important}',
    '@media (min-width:992px){',
    '.v-titel-wechsel .section_erreichen .section-head{margin-left:auto}',
    '.v-titel-wechsel .vorgehen_layout>.section-head{grid-column:2;grid-row:1}',
    '.v-titel-wechsel .vorgehen_layout>.vorgehen_media{grid-column:1;grid-row:1}',
    '}',
    '.v-sprache-aus .navbar_lang,.v-sprache-aus .navbar_lang-mobile{display:none!important}',
    '.v-menue-markiert .navbar_dropdown-link.w--current{border-left:2px solid #AA1351!important;font-weight:600}',
    '.v-rahmen-ruhig .auswertung_visual,.v-rahmen-ruhig .stimme_rahmen{box-shadow:none!important;border-top:1px solid rgba(29,49,73,.14)}',
    '.rg-eckdaten{display:none;flex-wrap:wrap;column-gap:.5rem;row-gap:.25rem;margin-top:-.25rem;margin-bottom:.5rem}',
    '.rg-eckdaten span+span:before{content:"·";margin-right:.5rem}',
    '.v-eckdaten-mit .rg-eckdaten{display:flex}',
    '@media (max-width:767px){.rg-eckdaten{flex-direction:column;align-items:flex-start;text-align:left;row-gap:.125rem}.rg-eckdaten span+span:before{content:none}}',
    '.rg-hinweis{display:none;grid-column:1/-1;font-size:.8125rem;line-height:1.3;color:#AA1351;font-weight:600;margin-top:.25rem}',
    '.v-hinweise-mit .rg-hinweis{display:block}',
    '.v-hinweise-mit .rg-hinweis-zeile .dia_label{font-weight:600}',
    '.v-hinweise-mit .rg-hinweis-zelle{outline:2px solid #AA1351;outline-offset:-2px}',
    '.v-hinweise-mit .dia .dia_zeile{transition:opacity .15s}',
    '.v-hinweise-mit .dia:hover .dia_zeile{opacity:.45}',
    '.v-hinweise-mit .dia .dia_zeile:hover{opacity:1}',
    '#beispielauswertung{scroll-margin-top:6rem}',
    /* Umschaltleiste */
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
    '.rg-vl-wahl{display:flex;flex-wrap:wrap;gap:4px}',
    '.rg-vl-wahl button{border:1px solid rgba(29,49,73,.3);background:#fff;color:#1D3149;padding:3px 8px;border-radius:3px}',
    '.rg-vl-wahl button[aria-pressed="true"]{background:#1D3149;border-color:#1D3149;color:#fff}',
    '.rg-vl-fuss{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px;padding-top:10px;border-top:1px solid #E8E9E9}',
    '.rg-vl-fuss button{border:1px solid rgba(29,49,73,.3);background:#E8E9E9;color:#1D3149;padding:4px 9px;border-radius:3px}',
    '.rg-vl-notiz{margin-top:8px;font-size:11px;color:rgba(29,49,73,.7)}',
    '@media print{.rg-vl{display:none}}'
  ].join('');
  var st = D.createElement('style');
  st.id = 'rg-varianten-css';
  st.textContent = CSS;
  (D.head || H).appendChild(st);

  /* ---------- Während des Seitenaufbaus (vor Webflow und Grafik-Skript) ---------- */
  function vorbereiten(wurzel) {
    if (!wurzel || wurzel.nodeType !== 1) return;
    var liste = [wurzel].concat([].slice.call(wurzel.querySelectorAll ? wurzel.querySelectorAll('*') : []));
    for (var i = 0; i < liste.length; i++) {
      var e = liste[i];
      if (e.tagName === 'H2' && e.classList.contains('heading-style-h2') && !e.hasAttribute('data-titel')) {
        e.setAttribute('data-titel', S.einbl === 'schnell' ? 'schnell' : 'heute');
      }
      if (S.einbl === 'schnell' && e.hasAttribute('data-einblenden') &&
          (e.classList.contains('section-head') || e.classList.contains('stimme_rahmen') || e.classList.contains('stat_item'))) {
        e.removeAttribute('data-einblenden');
      }
      if (S.lupe === 'fein' && e.tagName === 'IMG' && e.parentElement && e.parentElement.classList.contains('header-unterseite_figur') && !e.getAttribute('data-lupe')) {
        e.setAttribute('data-lupe', 'fein');
        e.removeAttribute('srcset'); e.removeAttribute('sizes');
        e.setAttribute('src', LUPE_FEIN);
      }
    }
  }
  var beobachter = null;
  if (window.MutationObserver) {
    beobachter = new MutationObserver(function (m) {
      for (var i = 0; i < m.length; i++) for (var j = 0; j < m[i].addedNodes.length; j++) vorbereiten(m[i].addedNodes[j]);
    });
    beobachter.observe(H, { childList: true, subtree: true });
  }

  /* ---------- Nach dem Aufbau ---------- */
  var knopfAlt = null;
  function button() {
    var b = D.querySelector('.section_header-unterseite a.button.is-secondary');
    if (!b) return;
    if (!knopfAlt) knopfAlt = { t: b.textContent, h: b.getAttribute('href') };
    var kopf = D.querySelector('.ergebnis_kopf');
    if (kopf && !kopf.id) kopf.id = 'beispielauswertung';
    if (S.button === 'beispiel') { b.textContent = 'Beispielauswertung ansehen'; b.setAttribute('href', kopf ? '#beispielauswertung' : '#ergebnis'); }
    else { b.textContent = knopfAlt.t; b.setAttribute('href', knopfAlt.h); }
  }
  function eckdaten() {
    if (D.querySelector('.rg-eckdaten')) return;
    var lead = D.querySelector('.header-unterseite_lead');
    if (!lead) return;
    var e = D.createElement('div');
    e.className = 'kicker rg-eckdaten';
    ['Ergebnisse in 4–6 Wochen', 'Fünf Perspektiven', '25 Minuten Skill-Check je Person'].forEach(function (t) {
      var s = D.createElement('span'); s.textContent = t; e.appendChild(s);
    });
    lead.parentNode.insertBefore(e, lead.nextSibling);
  }
  function zahl(e, a) { var v = parseFloat(e && e.getAttribute(a)); return isNaN(v) ? null : v; }
  function rein(t) { return (t || '').replace(/­/g, '').replace(/\s+/g, ' ').trim(); }
  function hinweise() {
    [].forEach.call(D.querySelectorAll('.auswertung_grafik'), function (g) {
      if (g.querySelector('.rg-hinweis')) return;
      var zeilen = [].slice.call(g.querySelectorAll('.dia_zeile'));
      if (zeilen.length) {
        var art = g.querySelector('.dia_punkt.is-fremd') ? 'fremd' : g.querySelector('.dia_soll') ? 'soll' : g.querySelector('.dia_balken.is-referenz') ? 'referenz' : '';
        if (!art) return;
        var beste = null, wert = -Infinity;
        zeilen.forEach(function (z) {
          var v = zahl(z.querySelector('.dia_wert'), 'data-wert');
          if (v === null) return;
          var s = art === 'soll' ? -v : Math.abs(v);
          if (s > wert) { wert = s; beste = z; }
        });
        if (!beste) return;
        var text = { fremd: 'Grösster Unterschied zwischen Eigen- und Fremdsicht', soll: 'Grösster Abstand zum Soll', referenz: 'Grösster Abstand zur internen Referenz' }[art];
        beste.classList.add('rg-hinweis-zeile');
        var h = D.createElement('div'); h.className = 'rg-hinweis'; h.textContent = '↑ ' + text;
        beste.appendChild(h);
        return;
      }
      var zellen = [].slice.call(g.querySelectorAll('.dia_zelle'));
      if (!zellen.length) return;
      var tief = null, tv = Infinity;
      zellen.forEach(function (c) { var v = zahl(c, 'data-wert'); if (v !== null && v < tv) { tv = v; tief = c; } });
      if (!tief) return;
      var raster = tief.parentElement, kinder = [].slice.call(raster.children), i = kinder.indexOf(tief);
      var spalten = (zahl(g, 'data-spalten') || 4) + 1;
      var team = rein(kinder[Math.floor(i / spalten) * spalten].textContent), kopf = rein(kinder[i % spalten].textContent);
      tief.classList.add('rg-hinweis-zelle');
      var h2 = D.createElement('div'); h2.className = 'rg-hinweis';
      h2.textContent = 'Tiefster Wert: ' + team + ' · ' + kopf + ' (' + rein(tief.textContent) + ')';
      raster.parentNode.insertBefore(h2, raster.nextSibling);
    });
  }
  function anwenden() { klassen(); button(); }

  /* ---------- Umschaltleiste ---------- */
  function linkFuer() {
    var teile = [];
    ZEILEN.forEach(function (z) { if (S[z.k] !== 'heute') teile.push(z.k + ':' + S[z.k]); });
    return location.origin + location.pathname + (teile.length ? '?v=' + teile.join(',') : '');
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
      var n = 0; ZEILEN.forEach(function (z) { if (S[z.k] !== 'heute') n++; });
      knopf.innerHTML = 'Varianten · <b>' + n + '</b> von ' + ZEILEN.length + ' im Entwurf';
    }
    function setzen(z, wert, gruppe) {
      if (S[z.k] === wert) return;
      S[z.k] = wert; speichern(S);
      if (z.neu) { location.href = linkFuer(); return; }
      [].forEach.call(gruppe.querySelectorAll('button'), function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-wert') === wert)); });
      anwenden(); zaehlen();
      if (history.replaceState) history.replaceState(null, '', linkFuer());
    }
    GRUPPEN.forEach(function (g) {
      var t = D.createElement('div'); t.className = 'rg-vl-gruppe'; t.textContent = g.t; panel.appendChild(t);
      g.z.forEach(function (z) {
        var zeile = D.createElement('div'); zeile.className = 'rg-vl-zeile';
        var name = D.createElement('span'); name.className = 'rg-vl-name'; name.textContent = z.n + (z.neu ? ' *' : ''); zeile.appendChild(name);
        var wahl = D.createElement('div'); wahl.className = 'rg-vl-wahl'; wahl.setAttribute('role', 'group'); wahl.setAttribute('aria-label', z.n);
        z.o.forEach(function (o) {
          var b = D.createElement('button'); b.type = 'button'; b.textContent = o[1] + (o[0] === 'heute' && o[1] !== 'heute' ? ' · heute' : ''); b.setAttribute('data-wert', o[0]);
          b.setAttribute('aria-pressed', String(S[z.k] === o[0]));
          b.addEventListener('click', function () { setzen(z, o[0], wahl); });
          wahl.appendChild(b);
        });
        zeile.appendChild(wahl); panel.appendChild(zeile);
      });
    });
    var fuss = D.createElement('div'); fuss.className = 'rg-vl-fuss';
    function alle(entwurf) {
      ZEILEN.forEach(function (z) { S[z.k] = entwurf ? z.o[z.o.length - 1][0] : 'heute'; });
      speichern(S); location.href = linkFuer();
    }
    [['Alles wie heute', false], ['Alles im Entwurf', true]].forEach(function (a) {
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
    notiz.textContent = '* Wechsel lädt die Seite neu. «heute» entspricht der echten Seite /performance-analyse. Die Wahl bleibt in diesem Browser gespeichert.';
    panel.appendChild(notiz);
    function oeffnen(an) { box.setAttribute('data-offen', an ? '1' : '0'); try { sessionStorage.setItem('rgVlOffen', an ? '1' : '0'); } catch (e) {} if (an) zu.focus(); else knopf.focus(); }
    knopf.addEventListener('click', function () { oeffnen(true); });
    zu.addEventListener('click', function () { oeffnen(false); });
    box.addEventListener('keydown', function (e) { if (e.key === 'Escape') oeffnen(false); });
    zaehlen();
    box.appendChild(knopf); box.appendChild(panel);
    D.body.appendChild(box);
  }

  function fertig() {
    if (beobachter) { vorbereiten(D.body); beobachter.disconnect(); }
    eckdaten(); hinweise(); anwenden(); leiste();
  }
  if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', fertig);
  else fertig();
})();
