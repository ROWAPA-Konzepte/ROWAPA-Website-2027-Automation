/* ROWAPA · Umschaltleiste für Entwürfe (ab Runde 79, Entscheid 393; Fassung 1.4.0 Runde 83, Entscheid 397)
   Nur auf der Entwurfsseite «Performance-Analyse · Entwurf Bewegung» (/performance-analyse-entwurf).
   Jeder Punkt lässt sich zwischen «heute» (= echte Seite) und dem Entwurf umschalten. Die Wahl bleibt im Browser
   gespeichert und lässt sich als Link teilen (?v=hintergrund:linie,cta:48,titel:a,wechsel:neu …).
   Was ROWAPA gewählt hat, wird jeweils auf beiden Seiten nativ gebaut und ist hier nicht mehr umschaltbar.
   Nach dem Entscheid wird die gewählte Fassung nativ gebaut; dieses Skript wird danach gelöscht. */
(function () {
  'use strict';
  var D = document, H = D.documentElement, SPEICHER = 'rgVariantenPA2';

  var GRUPPEN = [
    { t: 'Neu (Runde 83)', z: [
      { k: 'hintergrund', n: 'Foto mit Text: Hintergrund', o: [['heute', 'grau'], ['linie', 'grau, feine Linie unten'], ['weiss', 'weiss']] },
      { k: 'cta', n: 'Header: Abstand Untertitel zu den Buttons', o: [['heute', '32 px'], ['48', '48 px'], ['64', '64 px']] },
      { k: 'titel', n: 'Titel über den Beispielauswertungen', o: [['heute', '«Wo bleibt …»'], ['a', 'Vorschlag A'], ['b', 'Vorschlag B'], ['c', 'Vorschlag C']] },
      { k: 'wechsel', n: 'Seitenwechsel (alle Seiten, wirkt ab dem nächsten Klick)', o: [['heute', '1,0 s'], ['neu', '0,7 s, vorgeladen'], ['kurz', '0,5 s, vorgeladen']] }
    ] }
  ];
  var ZEILEN = [];
  GRUPPEN.forEach(function (g) { g.z.forEach(function (z) { ZEILEN.push(z); }); });

  /* Titel über den Beispielauswertungen (Texttabelle Runde 83): ersetzt das zweite «Wo bleibt …» */
  var TITEL = {
    a: 'Warum bleibt Leistung hinter den Möglichkeiten zurück?',
    b: 'Was steckt hinter Ihren Ergebnissen?',
    c: 'Welche Antworten liefert die Auswertung?'
  };

  /* ---------- Zustand ---------- */
  function speichern(s) { try { localStorage.setItem(SPEICHER, JSON.stringify(s)); } catch (e) {} }
  function lesen() {
    var s = {};
    try { s = JSON.parse(localStorage.getItem(SPEICHER) || '{}') || {}; } catch (e) { s = {}; }
    var m = location.search.match(/[?&]v=([^&]*)/);
    if (m) {
      s = {};
      decodeURIComponent(m[1]).split(',').forEach(function (p) { var a = p.split(':'); if (a[0] && a[1]) s[a[0]] = a[1]; });
      speichern(s);
    }
    try { if (m && s.wechsel) localStorage.setItem('rgWechsel', s.wechsel); s.wechsel = localStorage.getItem('rgWechsel') || 'heute'; } catch (e) {}
    ZEILEN.forEach(function (z) {
      if (!z.o.some(function (o) { return o[0] === s[z.k]; })) s[z.k] = 'heute';
    });
    return s;
  }
  var S = lesen();

  var CSS = [
    '.v-hintergrund-linie .section_bildtext{border-bottom:1px solid rgba(29,49,73,.14)}',
    '.v-hintergrund-weiss .section_bildtext .theme-soft{background-color:#fff}',
    '.v-cta-48 .header-unterseite_lead{margin-bottom:3rem}',
    '.v-cta-64 .header-unterseite_lead{margin-bottom:4rem}',
    '@media (max-width:767px){.v-cta-48 .header-unterseite_lead{margin-bottom:2.5rem}.v-cta-64 .header-unterseite_lead{margin-bottom:3rem}}',
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

  /* ---------- Varianten ---------- */
  var titelEl = null, titelAlt = '';
  function titel() {
    if (!titelEl) {
      titelEl = [].filter.call(D.querySelectorAll('h2, h3'), function (h) { return /^Wo bleibt Leistung/.test(h.textContent.trim()); })[0] || null;
      if (titelEl) titelAlt = titelEl.textContent;
    }
    if (titelEl) titelEl.textContent = TITEL[S.titel] || titelAlt;
  }
  function anwenden() {
    titel();
    try { localStorage.setItem('rgWechsel', S.wechsel); } catch (e) {}
    ZEILEN.forEach(function (z) {
      z.o.forEach(function (o) { H.classList.remove('v-' + z.k + '-' + o[0]); });
      if (S[z.k] !== 'heute') H.classList.add('v-' + z.k + '-' + S[z.k]);
    });
  }

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
      [].forEach.call(gruppe.querySelectorAll('button'), function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-wert') === wert)); });
      anwenden(); zaehlen();
      if (history.replaceState) history.replaceState(null, '', linkFuer());
    }
    GRUPPEN.forEach(function (g) {
      var t = D.createElement('div'); t.className = 'rg-vl-gruppe'; t.textContent = g.t; panel.appendChild(t);
      g.z.forEach(function (z) {
        var zeile = D.createElement('div'); zeile.className = 'rg-vl-zeile';
        var name = D.createElement('span'); name.className = 'rg-vl-name'; name.textContent = z.n; zeile.appendChild(name);
        var wahl = D.createElement('div'); wahl.className = 'rg-vl-wahl'; wahl.setAttribute('role', 'group'); wahl.setAttribute('aria-label', z.n);
        z.o.forEach(function (o) {
          var b = D.createElement('button'); b.type = 'button'; b.textContent = o[1] + (o[0] === 'heute' ? ' · heute' : ''); b.setAttribute('data-wert', o[0]);
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
    notiz.textContent = '«heute» entspricht der echten Seite /performance-analyse. Die Wahl bleibt in diesem Browser gespeichert.';
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
