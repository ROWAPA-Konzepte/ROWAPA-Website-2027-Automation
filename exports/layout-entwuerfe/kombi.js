/* Kombi-Entwürfe G und H: legt sich auf eine Kopie der echten Startseite (Punktemeer, Figuren, Treppe, Orbit bleiben).
   Nur für die internen Entwurfsseiten. Die gewählte Variante wird danach nativ in Webflow gebaut. */
(function () {
  var skript = document.currentScript;
  var v = (skript && skript.getAttribute('data-variante')) || 'g';
  var wurzel = document.documentElement;
  wurzel.classList.add('kombi', 'kombi-' + v);
  var ruhig = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var B = 'https://cdn.prod.website-files.com/6addf1532819c0aacc74a496/';

  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html) e.innerHTML = html; return e; }

  /* 1 Hero: Fotos zu den drei Zeilen, Punktemeer bleibt darunter sichtbar */
  var hero = document.querySelector('.section_hero');
  if (hero) {
    var fotos = ['6ade290fff14354501526916_hero-trainer-seminar.jpg', '6ade41ab2e556a5d1f73ca21_foto-leadership.jpg', '6ade41acd618ef3b9679b49e_foto-recruiting.jpg'];
    var fenster = el('div', 'kombi-fotos'); fenster.setAttribute('aria-hidden', 'true');
    var innen = el('div', 'kombi-fotos-innen');
    fotos.forEach(function (f, i) { var im = new Image(); im.src = B + f; im.alt = ''; if (i === 0) im.className = 'ist-an'; innen.appendChild(im); });
    fenster.appendChild(innen);
    var grafik = hero.querySelector('.hero_grafik');
    hero.insertBefore(fenster, grafik ? grafik.nextSibling : hero.firstChild);
    var kante = el('div', 'kombi-kante'); kante.setAttribute('aria-hidden', 'true');
    hero.insertBefore(kante, fenster.nextSibling);
    function hoehe() { hero.style.setProperty('--kombi-h', hero.offsetHeight + 'px'); }
    hoehe(); addEventListener('resize', hoehe);
    requestAnimationFrame(function () { setTimeout(function () { hero.classList.add('kombi-los'); }, 150); });
    // Foto folgt der hervorgehobenen Zeile (die Zeilen wechseln heute schon per Webflow-Interaction)
    var balken = [].slice.call(hero.querySelectorAll('.hero_bar'));
    var vorher = balken.map(function () { return 0; }), aktiv = 0;
    function zeige(i) {
      aktiv = i;
      [].forEach.call(innen.children, function (im, k) { im.classList.toggle('ist-an', k === i); });
    }
    setInterval(function () {
      balken.forEach(function (b, i) {
        var t = getComputedStyle(b).transform, sx = 0;
        try { sx = t === 'none' ? 1 : new DOMMatrix(t).a; } catch (e) { sx = 0; }
        if (sx > vorher[i] + 0.02 && i !== aktiv) zeige(i);
        vorher[i] = sx;
      });
    }, 150);
  }

  /* 2 Farbfluss: farbige Sections laufen beim Hereinscrollen von links nach rechts ein */
  var sections = [].slice.call(document.querySelectorAll('.main-wrapper section')).filter(function (s) { return s !== hero; });
  sections.forEach(function (s) {
    if (/theme-(soft|sea|kontrast|tiefsee)/.test(s.className)) s.classList.add('kombi-fluss');
    if (/theme-(kontrast|tiefsee)/.test(s.className)) s.classList.add('kombi-dunkel');
  });

  /* 3 Diagonal-Ribbons (45°) */
  var ribbons = v === 'g'
    ? [['.section_loesungen', 'oben-rechts'], ['.section_antrieb', 'unten-links'], ['.section_team', 'oben-rechts'], ['.section_wege', 'unten-rechts'], ['.section_kontakt', 'oben-links']]
    : [['.section_loesungen', 'quer-a'], ['.section_antrieb', 'quer-b'], ['.section_vorgehen', 'quer-a'], ['.section_team', 'quer-b'], ['.section_kontakt', 'quer-b']];
  ribbons.forEach(function (r) {
    var s = document.querySelector(r[0]); if (!s) return;
    s.classList.add('kombi-mit-ribbon');
    var i = el('i', 'kombi-ribbon is-' + r[1]); i.setAttribute('aria-hidden', 'true');
    s.appendChild(i);
  });

  /* 4 Team als Mosaik mit Kennzahl-Kachel */
  var team = document.querySelector('.team_grid');
  if (team) {
    var info = el('div', 'kombi-team-info', '<b>150</b><span>Jahre Wissen und Erfahrung im Trainerteam</span>');
    var karten = team.querySelectorAll('.team_card');
    if (karten[2]) karten[2].after(info);
  }

  /* 5 Lösungen H: Akkordeon, wechselt selbst und beim Darüberfahren */
  if (v === 'h') {
    var raster = document.querySelector('.bento_grid');
    if (raster) {
      var teile = [].slice.call(raster.children);
      var an = 0, halt = false;
      function setze(k) { an = k; teile.forEach(function (t, i) { t.classList.toggle('kombi-offen', i === k); }); }
      teile.forEach(function (t, i) { t.addEventListener('mouseenter', function () { setze(i); }); t.addEventListener('focusin', function () { setze(i); }); });
      raster.addEventListener('mouseenter', function () { halt = true; });
      raster.addEventListener('mouseleave', function () { halt = false; });
      setze(0);
      if (!ruhig) setInterval(function () { if (!halt && raster.classList.contains('kombi-sichtbar')) setze((an + 1) % teile.length); }, 5000);
      new IntersectionObserver(function (es) { es.forEach(function (e) { raster.classList.toggle('kombi-sichtbar', e.isIntersecting); }); }).observe(raster);
    }
  }

  /* 6 Sichtbarkeit: Section bekommt «kombi-da», sobald sie ins Bild kommt (Farbfluss, Strich, Ribbon, Zahlen) */
  if (ruhig || !('IntersectionObserver' in window)) {
    sections.forEach(function (s) { s.classList.add('kombi-da'); });
  } else {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('kombi-da'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -12% 0px' });
    sections.forEach(function (s) { io.observe(s); });
  }

  /* 7 H: Ribbons laufen mit dem Scrollen entlang ihrer Achse */
  if (v === 'h' && !ruhig) {
    var mit = [].slice.call(document.querySelectorAll('.kombi-mit-ribbon'));
    var tick = false;
    function lauf() {
      tick = false;
      var vh = innerHeight;
      mit.forEach(function (s) {
        var r = s.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        var p = (vh - r.top) / (vh + r.height);
        s.style.setProperty('--kombi-p', Math.max(0, Math.min(1, p)).toFixed(3));
      });
    }
    addEventListener('scroll', function () { if (!tick) { tick = true; requestAnimationFrame(lauf); } }, { passive: true });
    lauf();
  }
})();
