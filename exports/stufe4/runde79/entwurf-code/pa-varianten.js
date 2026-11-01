/* ROWAPA · Umschaltleiste für Entwürfe (ab Runde 79, Entscheid 393; Fassung 1.1.0 Runde 80, Entscheid 394)
   Nur auf der Entwurfsseite «Performance-Analyse · Entwurf Bewegung» (/performance-analyse-entwurf).
   Jeder Punkt lässt sich zwischen «heute» (= echte Seite) und dem Entwurf umschalten. Die Wahl bleibt im Browser
   gespeichert und lässt sich als Link teilen (?v=untertitel:zwei,entscheidung:fragen …).
   Was ROWAPA in Runde 79 gewählt hat, ist seit Runde 80 auf beiden Seiten nativ gebaut und hier nicht mehr umschaltbar.
   Nach dem Entscheid wird die gewählte Fassung nativ gebaut; dieses Skript wird danach gelöscht. */
(function () {
  'use strict';
  var D = document, H = D.documentElement, SPEICHER = 'rgVariantenPA2';

  var GRUPPEN = [
    { t: 'Neu (Runde 80)', z: [
      { k: 'untertitel', n: 'Untertitel im Header', o: [['heute', 'ein Absatz'], ['zwei', 'zwei Absätze mit Abstand']] },
      { k: 'entscheidung', n: 'Beispielauswertungen', o: [['heute', 'heutige Titel'], ['fragen', 'Fragen als Reiter, Aussage beim Chart']] },
      { k: 'methoden', n: '«Fünf Perspektiven»', o: [['heute', 'Aufklappen per Klick'], ['hover', 'auch beim Darüberfahren']] }
    ] }
  ];
  var ZEILEN = [];
  GRUPPEN.forEach(function (g) { g.z.forEach(function (z) { ZEILEN.push(z); }); });

  /* Texte der Fassung «Fragen» (Texttabelle Runde 80) */
  var FRAGEN = {
    titel: 'Wo bleibt Leistung hinter den Möglichkeiten zurück?',
    text: 'Erkennen Sie, wo Führung nicht ankommt, welche Kompetenzen fehlen und wo Ihre Teams Unterstützung brauchen. Fünf Beispielauswertungen zeigen, welche Entwicklungsmassnahmen Sie daraus ableiten können.',
    etikett: 'Beispielauswertungen mit illustrativen Daten',
    reiter: ['Kommt Führung an?', 'Was fehlt für die Rolle?', 'Wo brauchen Teams Unterstützung?', 'Was machen die Besten anders?', 'Was hat jetzt Priorität?'],
    aussage: [
      'Wo Führungskräfte ihre Führung anders sehen als ihre Teams.',
      'Wo Kompetenzen hinter den Anforderungen zurückbleiben.',
      'Welche Schwächen mehrere Teams bremsen – und wo gezielte Begleitung nötig ist.',
      'Welche Unterschiede zu Ihren leistungsstarken Mitarbeitenden Ansatzpunkte für Entwicklung liefern.',
      'Wo Sie mit Training und Coaching gezielt ansetzen sollten.'
    ]
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
    ZEILEN.forEach(function (z) {
      if (!z.o.some(function (o) { return o[0] === s[z.k]; })) s[z.k] = 'heute';
    });
    return s;
  }
  var S = lesen();

  var CSS = [
    '.rg-satz{display:block}.rg-satz+.rg-satz{margin-top:.5rem}',
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
  var alt = null;
  function merken() {
    if (alt) return;
    var kopf = D.querySelector('.ergebnis_kopf');
    var lead = D.querySelector('.header-unterseite_lead');
    alt = {
      lead: lead ? lead.textContent : '',
      titel: kopf && kopf.querySelector('h3') ? kopf.querySelector('h3').textContent : '',
      text: kopf && kopf.querySelector('p') ? kopf.querySelector('p').textContent : '',
      etikett: kopf && kopf.querySelector('.auswertung_muster') ? kopf.querySelector('.auswertung_muster').textContent : '',
      reiter: [].map.call(D.querySelectorAll('.w-tab-link'), function (r) { return reiterText(r).textContent; }),
      aussage: [].map.call(D.querySelectorAll('.w-tab-pane'), function (p) { var q = p.querySelector('.quote_headline'); return q ? q.textContent : ''; })
    };
  }
  function reiterText(r) { return r.querySelector('div') || r; }
  function setze(e, t) { if (e && typeof t === 'string') e.textContent = t; }

  function untertitel() {
    var lead = D.querySelector('.header-unterseite_lead');
    if (!lead) return;
    if (S.untertitel === 'zwei') {
      var m = alt.lead.match(/^(.+?[.!?])\s+(.+)$/);
      if (!m) return;
      lead.innerHTML = '';
      [m[1], m[2]].forEach(function (t) { var s = D.createElement('span'); s.className = 'rg-satz'; s.textContent = t; lead.appendChild(s); });
    } else lead.textContent = alt.lead;
  }
  function entscheidung() {
    var f = S.entscheidung === 'fragen';
    var kopf = D.querySelector('.ergebnis_kopf');
    if (kopf) {
      setze(kopf.querySelector('h3'), f ? FRAGEN.titel : alt.titel);
      setze(kopf.querySelector('p'), f ? FRAGEN.text : alt.text);
      setze(kopf.querySelector('.auswertung_muster'), f ? FRAGEN.etikett : alt.etikett);
    }
    [].forEach.call(D.querySelectorAll('.w-tab-link'), function (r, i) { setze(reiterText(r), f ? FRAGEN.reiter[i] : alt.reiter[i]); });
    [].forEach.call(D.querySelectorAll('.w-tab-pane'), function (p, i) { setze(p.querySelector('.quote_headline'), f ? FRAGEN.aussage[i] : alt.aussage[i]); });
  }
  function methoden() {
    var m = D.querySelector('.methode_layout');
    if (!m) return;
    if (S.methoden === 'hover') m.setAttribute('data-oeffnen', 'hover'); else m.removeAttribute('data-oeffnen');
  }
  function anwenden() {
    merken(); untertitel(); entscheidung(); methoden();
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
