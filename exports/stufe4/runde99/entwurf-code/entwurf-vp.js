/* ROWAPA · Umschaltleiste Entwurf Vertriebsperformance 2.0.0 (Runde 99, Entscheid 412)
   Nur auf der Vorlage «Themenlinie» und nur, wenn die Adresse ?entwurf enthält (z. B. /themen/vertriebsperformance?entwurf).
   Ohne ?entwurf passiert nichts: Die Entwurfsteile bleiben über die Klasse «hide» verborgen (Hüllen mit data-entwurf).
   Punkte (je «heute» oder Entwurf):
     header        Header füllt jede Bildschirmgrösse (Zusatzklasse is-gefuellt an Abstand, Raster, Figur, Bild, Lead)
     ausgangslage  «Ihre Kunden kommen informiert. Gehen sie auch überzeugt?» mit vier Spannungsfeldern und Punktbild
     karten        Hebel-Karten: Kennung mit Leistungstitel, Nutzentitel, drei Zeilen, eigene Punktfigur
     beispiel      Praxisbeispiel «Vom Produkt zum Kunden» mit Kunden-Rad und Wirkungskette
     nutzen        «Ihr Nutzen»: grosse Kugel mit drei Wissensbereichen, «Wo anfangen?» und Werkzeug als Schlusszeile
     einstieg      Einstiegssatz im Header und Hinweis «direkt mit dem passenden Hebel»
     foto          Text neben dem Foto
     insights      Insights als redaktionelle Leseliste
   Nur für den Entwurf, bis im Designer ergänzt: Der vierte Reiter der Spannungsfelder heisst nach dem Verschieben wie der
   dritte («Tab 3»); die Leiste benennt ihn in «Tab 4» um. Die Markierung des aktiven Reiters (Plum) setzt hier die Leiste,
   im festen Bau der Zustand «Current» im Designer.
   Die Wahl bleibt im Browser gespeichert; «Link zu dieser Auswahl» kopiert einen Link mit genau dieser Kombination.
   Nach dem Entscheid wird das Gewählte fest gebaut und dieses Skript gelöscht. */
(function () {
  'use strict';
  var D = document, L = location, W = window;
  if (!/[?&]entwurf(=|&|$)/.test(L.search)) return;
  var K = 'rgEntwurfVP2';
  var PUNKTE = [
    { k: 'header', n: 'Header', o: [['heute', 'wie heute'], ['neu', 'füllt jede Bildschirmgrösse']] },
    { k: 'ausgangslage', n: 'Spannungsfelder unter dem Header', o: [['aus', 'aus'], ['an', 'an']] },
    { k: 'karten', n: 'Hebel-Karten', o: [['heute', 'wie heute'], ['neu', 'neu: Titel, Nutzen, 3 Zeilen, Figur']] },
    { k: 'beispiel', n: 'Praxisbeispiel Produkt → Kunde', o: [['aus', 'aus'], ['an', 'an']] },
    { k: 'nutzen', n: 'Ihr Nutzen', o: [['heute', 'wie heute'], ['neu', 'Kugel gross, Schlusszeile']] },
    { k: 'einstieg', n: 'Einstieg: Analyse und Hebel', o: [['heute', 'wie heute'], ['neu', 'neu']] },
    { k: 'foto', n: 'Text neben dem Foto', o: [['heute', 'wie heute'], ['neu', 'neu']] },
    { k: 'insights', n: 'Insights', o: [['heute', 'wie heute'], ['neu', 'Leseliste']] }
  ];
  var FOTO_NEU = 'Wir stehen selbst seit bald 30 Jahren im Finanzvertrieb. Darum trainieren wir an Ihren Produkten, Ihren Gesprächssituationen und mit Ihren Zahlen.';
  var HEADER_KLASSEN = ['.header-unterseite_inner', '.header-unterseite_grid', '.header-unterseite_figur', '.header-unterseite_bild', '.header-unterseite_lead'];

  function lesen() {
    var s = null, m = L.search.match(/[?&]entwurf=([^&]+)/);
    try { s = JSON.parse(localStorage.getItem(K) || 'null'); } catch (e) {}
    if (m) { s = {}; decodeURIComponent(m[1]).split(',').forEach(function (p) { var a = p.split(':'); if (a[1]) s[a[0]] = a[1]; }); }
    s = s || {};
    PUNKTE.forEach(function (p) { if (!p.o.some(function (o) { return o[0] === s[p.k]; })) s[p.k] = p.o[1][0]; });
    return s;
  }
  var S = lesen();
  function speichern() { try { localStorage.setItem(K, JSON.stringify(S)); } catch (e) {} }

  function zeigen(el, an) {
    el.setAttribute('data-rg-war-hide', '');
    el.classList.toggle('hide', !an);
  }

  /* Vierter Reiter: eindeutiger Name, bevor Webflow die Reiter einliest */
  function reiterNamen() {
    D.querySelectorAll('.spannung_tabs').forEach(function (tabs) {
      var links = tabs.querySelectorAll('.w-tab-link'), panes = tabs.querySelectorAll('.w-tab-pane');
      var seen = {};
      links.forEach(function (a, i) {
        var n = a.getAttribute('data-w-tab');
        if (seen[n]) { var neu = 'Tab ' + (i + 1); a.setAttribute('data-w-tab', neu); if (panes[i]) panes[i].setAttribute('data-w-tab', neu); }
        seen[a.getAttribute('data-w-tab')] = 1;
      });
    });
  }

  var fotoText = null, fotoAlt = null, kickerEl = null, kickerAlt = null, start = null, startHeim = null;

  function anwenden() {
    PUNKTE.forEach(function (p) {
      var neu = S[p.k] !== p.o[0][0];
      D.querySelectorAll('[data-entwurf="' + p.k + '"]').forEach(function (el) { zeigen(el, neu); });
      D.querySelectorAll('[data-entwurf-heute="' + p.k + '"]').forEach(function (el) { el.style.display = neu ? 'none' : ''; });
    });
    /* Header */
    HEADER_KLASSEN.forEach(function (sel) {
      D.querySelectorAll('.section_header-unterseite ' + sel).forEach(function (el) { el.classList.toggle('is-gefuellt', S.header === 'neu'); });
    });
    /* Foto-Text */
    if (!fotoText) { fotoText = D.querySelector('.section_bildtext p'); if (fotoText) fotoAlt = fotoText.textContent; }
    if (fotoText) fotoText.textContent = S.foto === 'neu' ? FOTO_NEU : fotoAlt;
    /* Ihr Nutzen: Kicker und Schlusszeile */
    var sec = D.querySelector('.section_thema-vorteil');
    if (sec) {
      if (!kickerEl) { kickerEl = sec.querySelector('.text-style-kicker'); if (kickerEl) kickerAlt = kickerEl.textContent; }
      if (kickerEl) kickerEl.textContent = S.nutzen === 'neu' ? 'Ihr Nutzen' : kickerAlt;
      if (!start) { start = sec.querySelector('.thema_start'); if (start) startHeim = { p: start.parentNode, n: start.nextSibling }; }
      var slot = sec.querySelector('[data-nutzen-schluss]');
      if (start && slot) {
        if (S.nutzen === 'neu') { slot.appendChild(start); start.classList.add('is-zeile'); }
        else { startHeim.p.insertBefore(start, startHeim.n); start.classList.remove('is-zeile'); }
      }
    }
    setTimeout(function () { W.dispatchEvent(new Event('resize')); if (W.ScrollTrigger && W.ScrollTrigger.refresh) W.ScrollTrigger.refresh(); }, 60);
  }

  var css = D.createElement('style');
  css.textContent = [
    '.spannung_reiter.w--current{color:var(--_theme---akzent,#AA1351);background-color:transparent}',
    '.spannung_reiter.w--current .spannung_pfeil{color:var(--_theme---akzent,#AA1351)}',
    '.spannung_reiter:hover{color:var(--_theme---akzent,#AA1351)}',
    '.rg-leiste{position:fixed;left:16px;bottom:16px;z-index:9999;width:min(22rem,calc(100vw - 32px));max-height:calc(100vh - 32px);overflow:auto;background:#fff;color:#1D3149;border:1px solid rgba(29,49,73,.14);box-shadow:0 16px 40px -16px rgba(17,29,44,.45);font:14px/1.35 system-ui,sans-serif}',
    '.rg-leiste summary{cursor:pointer;padding:10px 14px;font-weight:700;list-style:none;border-left:3px solid #AA1351}',
    '.rg-leiste summary::-webkit-details-marker{display:none}',
    '.rg-leiste .rg-in{padding:4px 14px 14px}',
    '.rg-leiste fieldset{border:0;margin:10px 0 0;padding:0}',
    '.rg-leiste legend{font-weight:600;margin-bottom:4px}',
    '.rg-leiste label{display:flex;gap:6px;align-items:center;margin:2px 0;cursor:pointer}',
    '.rg-leiste button{margin-top:12px;padding:6px 10px;border:1px solid #1D3149;background:#fff;color:#1D3149;cursor:pointer;font:inherit}'
  ].join('');
  (D.head || D.documentElement).appendChild(css);

  function leiste() {
    var d = D.createElement('details');
    d.className = 'rg-leiste';
    d.open = W.innerWidth > 767;
    var h = '<summary>Entwurf · Vertriebsperformance</summary><div class="rg-in">';
    PUNKTE.forEach(function (p) {
      h += '<fieldset><legend>' + p.n + '</legend>';
      p.o.forEach(function (o) {
        h += '<label><input type="radio" name="rg-' + p.k + '" value="' + o[0] + '"' + (S[p.k] === o[0] ? ' checked' : '') + '> ' + o[1] + '</label>';
      });
      h += '</fieldset>';
    });
    h += '<button type="button" data-rg-link>Link zu dieser Auswahl</button></div>';
    d.innerHTML = h;
    d.addEventListener('change', function (e) {
      var t = e.target; if (!t.name) return;
      S[t.name.slice(3)] = t.value; speichern(); anwenden();
    });
    d.querySelector('[data-rg-link]').addEventListener('click', function (e) {
      var v = PUNKTE.map(function (p) { return p.k + ':' + S[p.k]; }).join(',');
      var u = L.origin + L.pathname + '?entwurf=' + encodeURIComponent(v);
      try { navigator.clipboard.writeText(u); e.target.textContent = 'Link kopiert'; } catch (x) { prompt('Link', u); }
    });
    D.body.appendChild(d);
  }

  /* Die Leiste steht in der Fusszeile: Der Inhalt ist schon da, Webflow liest die Reiter aber erst danach ein.
     Darum die Namen sofort setzen (nicht nachträglich neu einlesen, das blockiert andere Reiter). */
  reiterNamen();
  function los() { leiste(); anwenden(); speichern(); }
  if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', los); else los();
})();
