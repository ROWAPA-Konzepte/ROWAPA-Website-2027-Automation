/* Kombi G2 (Runde 10): Master Kombi G mit den Entscheiden ROWAPA, dazu Gegenvorschläge zum Umschalten.
   Legt sich auf eine Kopie der echten Startseite (Punktemeer, Figuren, Treppe, Orbit bleiben).
   Nur für die interne Entwurfsseite. Die gewählte Fassung wird danach nativ in Webflow gebaut. */
(function () {
  var wurzel = document.documentElement;
  wurzel.classList.add('k2');
  var ruhig = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var B = 'https://cdn.prod.website-files.com/6addf1532819c0aacc74a496/';

  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html) e.innerHTML = html; return e; }

  /* Varianten: [Schlüssel, Name, Section, [[Wert, Beschriftung, Zusatz]]]; der erste Wert ist der Entscheid ROWAPA */
  var GRUPPEN = [
    ['hero', 'Hero', '.section_hero', [['g', 'Kombi G', 'Entscheid'], ['sauber', 'G sauber', 'ein Foto, ohne Punkte darüber'], ['heute', 'Heute', 'nur Punktemeer']]],
    ['logos', 'Referenzen', '.section_logos', [['band', 'Laufband', 'Entscheid'], ['raster', 'Raster', 'aus Layout E']]],
    ['loesungen', 'Was wir tun', '.section_loesungen', [['zeilen', 'Zeilen', 'Entscheid (G, hell)'], ['akkordeon', 'Akkordeon', 'aus Kombi H'], ['heute', 'Kacheln', 'wie heute, hell']]],
    ['antrieb', 'Was uns antreibt', '.section_antrieb', [['b', 'Look B', 'Entscheid'], ['d', 'Layout D', 'Zahlen senkrecht']]],
    ['erfolge', 'Unsere Erfolge', '.section_erfolge', [['e', 'Fotorahmen', 'Entscheid (E, Slider)'], ['heute', 'Heute', '']]],
    ['team', 'Über uns', '.section_team', [['mosaik', 'Mosaik', 'Entscheid (G/F)'], ['reihe', 'Reihe', 'wie heute']]],
    ['wege', 'Meine Entwicklung', '.section_wege', [['a', 'A', 'Text im Bild (D)'], ['b', 'B', 'Text unter dem Bild (D)'], ['c', 'C', 'Zeilen (F)']]],
    ['cas', 'Im Blickpunkt', '.section_cas', [['wisch', 'Farbe wischt ein', ''], ['blende', 'Farbe blendet ein', '']]],
    ['kontakt', 'Kontakt', '.section_kontakt', [['dunkel', 'Dunkel', 'Entscheid (Look B)'], ['hell', 'Hell', 'wie heute']]]
  ];
  var wahl = {};
  try { wahl = JSON.parse(localStorage.getItem('k2-wahl') || '{}') || {}; } catch (e) { wahl = {}; }
  // Link mit ?wahl=wege:b,hero:heute setzt eine bestimmte Kombination
  var q = (location.search.match(/[?&]wahl=([^&]+)/) || [])[1];
  if (q) decodeURIComponent(q).split(',').forEach(function (p) { var t = p.split(':'); if (t[1]) wahl[t[0]] = t[1]; });

  function setze(gruppe, wert) {
    var g = GRUPPEN.filter(function (x) { return x[0] === gruppe; })[0]; if (!g) return;
    if (!g[3].some(function (o) { return o[0] === wert; })) wert = g[3][0][0];
    g[3].forEach(function (o) { wurzel.classList.toggle('k2-' + gruppe + '-' + o[0], o[0] === wert); });
    wahl[gruppe] = wert;
    try { localStorage.setItem('k2-wahl', JSON.stringify(wahl)); } catch (e) {}
    var knoepfe = document.querySelectorAll('[data-k2="' + gruppe + '"] button');
    [].forEach.call(knoepfe, function (b) { b.classList.toggle('ist-an', b.getAttribute('data-wert') === wert); });
  }
  GRUPPEN.forEach(function (g) { setze(g[0], wahl[g[0]] || g[3][0][0]); });

  /* 1 Hero: Fotofenster mit 45°-Kante, Foto folgt der hervorgehobenen Zeile */
  var hero = document.querySelector('.section_hero');
  if (hero) {
    var fotos = ['6ade290fff14354501526916_hero-trainer-seminar.jpg', '6ade41ab2e556a5d1f73ca21_foto-leadership.jpg', '6ade41acd618ef3b9679b49e_foto-recruiting.jpg'];
    var fenster = el('div', 'k2-fotos'); fenster.setAttribute('aria-hidden', 'true');
    var innen = el('div', 'k2-fotos-innen');
    fotos.forEach(function (f, i) { var im = new Image(); im.src = B + f; im.alt = ''; if (i === 0) im.className = 'ist-an'; innen.appendChild(im); });
    fenster.appendChild(innen);
    var grafik = hero.querySelector('.hero_grafik');
    hero.insertBefore(fenster, grafik ? grafik.nextSibling : hero.firstChild);
    var kante = el('div', 'k2-kante'); kante.setAttribute('aria-hidden', 'true');
    hero.insertBefore(kante, fenster.nextSibling);
    var hoehe = function () { hero.style.setProperty('--k2-h', hero.offsetHeight + 'px'); };
    hoehe(); addEventListener('resize', hoehe);
    requestAnimationFrame(function () { setTimeout(function () { hero.classList.add('k2-los'); }, 150); });
    var balken = [].slice.call(hero.querySelectorAll('.hero_bar'));
    var vorher = balken.map(function () { return 0; }), aktiv = 0;
    setInterval(function () {
      balken.forEach(function (b, i) {
        var t = getComputedStyle(b).transform, sx = 0;
        try { sx = t === 'none' ? 1 : new DOMMatrix(t).a; } catch (e) { sx = 0; }
        if (sx > vorher[i] + 0.02 && i !== aktiv) {
          aktiv = i;
          [].forEach.call(innen.children, function (im, k) { im.classList.toggle('ist-an', k === i); });
        }
        vorher[i] = sx;
      });
    }, 150);
  }

  /* 2 Ribbons, fest */
  [['.section_loesungen', 'oben-rechts'], ['.section_antrieb', 'unten-links'], ['.section_team', 'oben-rechts'], ['.section_wege', 'unten-rechts'], ['.section_kontakt', 'oben-links']].forEach(function (r) {
    var s = document.querySelector(r[0]); if (!s) return;
    s.classList.add('k2-mit-ribbon');
    var i = el('i', 'k2-ribbon is-' + r[1]); i.setAttribute('aria-hidden', 'true');
    s.appendChild(i);
  });

  /* 3 Team: Kennzahl-Kachel und Hinweis, dass das Team grösser ist */
  var team = document.querySelector('.team_grid');
  if (team) {
    var karten = team.querySelectorAll('.team_card');
    if (karten[2]) karten[2].after(el('div', 'k2-team-info', '<b>150</b><span>Jahre Wissen und Erfahrung im Trainerteam</span>'));
    var titel = team.querySelector('.team_mehr-titel'), text = team.querySelector('.team_mehr-text');
    if (titel) titel.textContent = 'Weitere Trainerinnen, Trainer und Partner';
    if (text) text.textContent = 'Lernen Sie unser ganzes Team kennen';
  }

  /* 4 Lösungen als Akkordeon (nur wenn gewählt) */
  var raster = document.querySelector('.bento_grid');
  if (raster) {
    var teile = [].slice.call(raster.children), an = 0, halt = false, sichtbar = false;
    var oeffne = function (k) { an = k; teile.forEach(function (t, i) { t.classList.toggle('k2-offen', i === k); }); };
    teile.forEach(function (t, i) { t.addEventListener('mouseenter', function () { oeffne(i); }); t.addEventListener('focusin', function () { oeffne(i); }); });
    raster.addEventListener('mouseenter', function () { halt = true; });
    raster.addEventListener('mouseleave', function () { halt = false; });
    oeffne(0);
    new IntersectionObserver(function (es) { sichtbar = es[0].isIntersecting; }).observe(raster);
    if (!ruhig) setInterval(function () { if (!halt && sichtbar && wurzel.classList.contains('k2-loesungen-akkordeon')) oeffne((an + 1) % teile.length); }, 5000);
  }

  /* 5 Sichtbarkeit: «k2-da» für Titelstrich, Team-Kacheln, Logo-Raster und die Farbfläche im CAS-Block */
  var sections = [].slice.call(document.querySelectorAll('.main-wrapper section')).filter(function (s) { return s !== hero; });
  var io = null;
  if (ruhig || !('IntersectionObserver' in window)) sections.forEach(function (s) { s.classList.add('k2-da'); });
  else {
    io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('k2-da'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -12% 0px' });
    sections.forEach(function (s) { io.observe(s); });
  }

  /* 6 Umschaltleiste */
  var leiste = el('div', 'k2-leiste');
  var tafel = el('div', 'k2-leiste-tafel');
  tafel.appendChild(el('p', 'k2-leiste-kopf', 'Entwurf Kombi G2. Der erste Knopf jeder Zeile ist Ihr Entscheid, die weiteren sind Gegenvorschläge. Klick auf den Namen springt zur Section.'));
  GRUPPEN.forEach(function (g) {
    var box = el('div', 'k2-gruppe'); box.setAttribute('data-k2', g[0]);
    var name = el('button', 'k2-gruppe-name', g[1]);
    name.addEventListener('click', function () { var s = document.querySelector(g[2]); if (s) s.scrollIntoView({ behavior: ruhig ? 'auto' : 'smooth', block: 'start' }); });
    box.appendChild(name);
    var reihe = el('div', 'k2-wahl');
    g[3].forEach(function (o) {
      var b = el('button', o[0] === wahl[g[0]] ? 'ist-an' : '', o[1] + (o[2] ? '<small>' + o[2] + '</small>' : ''));
      b.setAttribute('data-wert', o[0]); b.type = 'button';
      b.addEventListener('click', function () {
        setze(g[0], o[0]);
        if (g[0] === 'cas') { var s = document.querySelector('.section_cas'); if (s) { s.classList.remove('k2-da'); void s.offsetWidth; setTimeout(function () { s.classList.add('k2-da'); }, 60); } }
      });
      reihe.appendChild(b);
    });
    box.appendChild(reihe);
    tafel.appendChild(box);
  });
  var knopf = el('button', 'k2-leiste-knopf', 'Varianten vergleichen');
  knopf.type = 'button';
  knopf.addEventListener('click', function () { leiste.classList.toggle('ist-offen'); });
  leiste.appendChild(tafel); leiste.appendChild(knopf);
  document.body.appendChild(leiste);
})();
