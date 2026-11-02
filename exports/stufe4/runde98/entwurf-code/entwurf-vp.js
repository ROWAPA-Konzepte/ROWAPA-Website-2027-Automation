/* ROWAPA · Umschaltleiste Entwurf Vertriebsperformance 1.0.0 (Runde 98, Entscheid 411)
   Nur auf der Vorlage «Themenlinie» und nur, wenn die Adresse ?entwurf enthält (z. B. /themen/vertriebsperformance?entwurf).
   Ohne ?entwurf passiert nichts: Die Entwurfsteile bleiben über die Klasse «hide» verborgen (Hüllen mit data-entwurf).
   Punkte (je «heute» oder Entwurf):
     karten        Hebel-Karten: Nutzentitel, Ausgangslage, Leistung, Wirkung, eigene Punktfigur (CMS-Felder des Hebels)
     sprung        Sprungmarken über dem Kartenstapel (Name des Hebels, Anker = Slug)
     ausgangslage  Abschnitt «Die Ausgangslage» vor den Hebeln
     beispiel      Praxisbeispiel Sales-Story mit drei Reitern nach den Hebeln
     wissen        Wissensplattform: Kugel kleiner, drei Wissensbereiche
     einstieg      Einstiegssatz im Header und Hinweis «direkt mit dem passenden Hebel»
     foto          Text neben dem Foto (Unternehmen 20 Jahre, Personen bald 30 Jahre klar getrennt)
   Die Wahl bleibt im Browser gespeichert; «Link zu dieser Auswahl» kopiert einen Link mit genau dieser Kombination.
   Nach dem Entscheid wird das Gewählte fest gebaut und dieses Skript gelöscht. */
(function () {
  'use strict';
  var D = document, L = location;
  if (!/[?&]entwurf(=|&|$)/.test(L.search)) return;
  var K = 'rgEntwurfVP';
  var PUNKTE = [
    { k: 'karten', n: 'Hebel-Karten', o: [['heute', 'wie heute'], ['neu', 'neu: Nutzen, 3 Zeilen, eigene Figur']] },
    { k: 'sprung', n: 'Sprungmarken über den Karten', o: [['aus', 'aus'], ['an', 'an']] },
    { k: 'ausgangslage', n: 'Ausgangslage vor den Hebeln', o: [['aus', 'aus'], ['an', 'an']] },
    { k: 'beispiel', n: 'Praxisbeispiel Sales-Story', o: [['aus', 'aus'], ['an', 'an']] },
    { k: 'wissen', n: 'Wissensplattform', o: [['heute', 'wie heute'], ['neu', 'kleiner, drei Bereiche']] },
    { k: 'einstieg', n: 'Einstieg: Analyse und Hebel', o: [['heute', 'wie heute'], ['neu', 'neu']] },
    { k: 'foto', n: 'Text neben dem Foto', o: [['heute', 'wie heute'], ['neu', 'neu']] }
  ];
  var FOTO_NEU = 'Wir stehen selbst seit bald 30 Jahren im Finanzvertrieb. Darum trainieren wir an Ihren Produkten, Ihren Gesprächssituationen und mit Ihren Zahlen.';

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
    if (el.classList.contains('hide') || el.hasAttribute('data-rg-war-hide')) {
      el.setAttribute('data-rg-war-hide', '');
      el.classList.toggle('hide', !an);
    } else if (an) el.removeAttribute('hidden'); else el.setAttribute('hidden', '');
  }
  var fotoText = null, fotoAlt = null, sprungNav = null;

  function anwenden() {
    PUNKTE.forEach(function (p) {
      var neu = S[p.k] !== p.o[0][0];
      D.querySelectorAll('[data-entwurf="' + p.k + '"]').forEach(function (el) { zeigen(el, neu); });
      D.querySelectorAll('[data-entwurf-heute="' + p.k + '"]').forEach(function (el) { el.style.display = neu ? 'none' : ''; });
    });
    D.querySelectorAll('.thema_kugel-wrap').forEach(function (el) { el.classList.toggle('is-klein', S.wissen === 'neu'); });
    if (!fotoText) { fotoText = D.querySelector('.section_bildtext p'); if (fotoText) fotoAlt = fotoText.textContent; }
    if (fotoText) fotoText.textContent = S.foto === 'neu' ? FOTO_NEU : fotoAlt;
    sprung(S.sprung === 'an');
    setTimeout(function () { window.dispatchEvent(new Event('resize')); if (window.ScrollTrigger && window.ScrollTrigger.refresh) window.ScrollTrigger.refresh(); }, 60);
  }

  function sprung(an) {
    var liste = D.querySelector('.thema_hebel-liste');
    if (!liste) return;
    if (!sprungNav) {
      sprungNav = D.createElement('nav');
      sprungNav.className = 'rg-sprung';
      sprungNav.setAttribute('aria-label', 'Zu den Hebeln');
      liste.querySelectorAll('.hebel_item').forEach(function (it, i) {
        if (!it.id) return;
        var a = D.createElement('a');
        a.href = '#' + it.id;
        a.textContent = String(i + 1).padStart(2, '0') + '  ' + (it.getAttribute('data-kurzname') || it.id);
        sprungNav.appendChild(a);
      });
      liste.parentNode.insertBefore(sprungNav, liste);
    }
    sprungNav.style.display = an ? '' : 'none';
  }

  var css = D.createElement('style');
  css.textContent = [
    '.rg-sprung{display:flex;flex-wrap:wrap;gap:.5rem;margin:0 0 2rem}',
    '.rg-sprung a{padding:.5rem .875rem;border:1px solid var(--_theme---linie,rgba(29,49,73,.14));border-radius:2px;font-size:.9375rem;font-weight:600;color:var(--_theme---ueberschrift,#1D3149);text-decoration:none;white-space:pre;background:var(--_theme---karte-hintergrund,#fff)}',
    '.rg-sprung a:hover{border-color:var(--_farben---plum-perfect,#AA1351);color:var(--_farben---plum-perfect,#AA1351)}',
    '.hebel_item{scroll-margin-top:6.5rem}',
    '.rg-leiste{position:fixed;left:16px;bottom:16px;z-index:9999;width:min(22rem,calc(100vw - 32px));max-height:calc(100vh - 32px);overflow:auto;background:#fff;color:#1D3149;border:1px solid rgba(29,49,73,.14);box-shadow:0 16px 40px -16px rgba(17,29,44,.45);font:14px/1.35 system-ui,sans-serif}',
    '.rg-leiste summary{cursor:pointer;padding:10px 14px;font-weight:700;list-style:none;border-left:3px solid #AA1351}',
    '.rg-leiste summary::-webkit-details-marker{display:none}',
    '.rg-leiste .rg-in{padding:4px 14px 14px}',
    '.rg-leiste fieldset{border:0;margin:10px 0 0;padding:0}',
    '.rg-leiste legend{font-weight:600;margin-bottom:4px}',
    '.rg-leiste label{display:flex;gap:6px;align-items:center;margin:2px 0;cursor:pointer}',
    '.rg-leiste button{margin-top:12px;padding:6px 10px;border:1px solid #1D3149;background:#fff;color:#1D3149;cursor:pointer;font:inherit}'
  ].join('');
  D.head.appendChild(css);

  function leiste() {
    var d = D.createElement('details');
    d.className = 'rg-leiste';
    d.open = window.innerWidth > 767;
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

  function start() { leiste(); anwenden(); speichern(); }
  if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', start); else start();
})();
