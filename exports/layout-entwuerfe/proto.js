/* Lädt einen Layout-Entwurf (HTML-Datei aus diesem Ordner) in eine interne Testseite und schaltet Reiter und Slider.
   Nur für Entwurfsseiten. Die gewählte Variante wird danach nativ in Webflow gebaut. */
(function () {
  var ruhig = matchMedia('(prefers-reduced-motion: reduce)').matches;

  function reiter(box) {
    var knoepfe = [].slice.call(box.querySelectorAll('[data-reiter-knopf]'));
    var tafeln = [].slice.call(box.querySelectorAll('[data-reiter-tafel]'));
    var balken = box.querySelector('[data-reiter-balken]');
    var dauer = parseInt(box.getAttribute('data-auto') || '0', 10);
    var aktiv = 0, t0 = 0, halt = false;
    function zeige(k) {
      aktiv = k; t0 = performance.now();
      knoepfe.forEach(function (b, i) { b.classList.toggle('ist-an', i === k); b.setAttribute('aria-selected', i === k); });
      tafeln.forEach(function (t, i) { t.classList.toggle('ist-an', i === k); });
    }
    knoepfe.forEach(function (b, i) {
      b.addEventListener('click', function (e) { e.preventDefault(); zeige(i); });
      b.addEventListener('mouseenter', function () { if (box.hasAttribute('data-hover')) zeige(i); });
    });
    box.addEventListener('mouseenter', function () { halt = true; });
    box.addEventListener('mouseleave', function () { halt = false; t0 = performance.now(); });
    zeige(0);
    if (dauer && !ruhig) {
      (function takt(now) {
        var u = Math.min(1, (now - t0) / dauer);
        if (halt) t0 = now - u * dauer;
        if (balken) balken.style.transform = 'scaleX(' + u + ')';
        if (u >= 1) zeige((aktiv + 1) % knoepfe.length);
        requestAnimationFrame(takt);
      })(performance.now());
    }
  }

  function slider(box) {
    var folien = [].slice.call(box.querySelectorAll('[data-folie]'));
    var zaehler = box.querySelector('[data-zaehler]');
    var k = 0;
    function zeige(n) {
      k = (n + folien.length) % folien.length;
      folien.forEach(function (f, i) { f.classList.toggle('ist-an', i === k); });
      if (zaehler) zaehler.textContent = (k + 1) + ' / ' + folien.length;
    }
    box.querySelectorAll('[data-zurueck]').forEach(function (b) { b.addEventListener('click', function (e) { e.preventDefault(); zeige(k - 1); }); });
    box.querySelectorAll('[data-weiter]').forEach(function (b) { b.addEventListener('click', function (e) { e.preventDefault(); zeige(k + 1); }); });
    zeige(0);
  }

  function sichtbar(root) {
    if (ruhig || !('IntersectionObserver' in window)) { root.querySelectorAll('[data-ein]').forEach(function (e) { e.classList.add('ist-da'); }); return; }
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('ist-da'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -10% 0px' });
    root.querySelectorAll('[data-ein]').forEach(function (e) { io.observe(e); });
  }

  document.querySelectorAll('[data-proto]').forEach(function (ziel) {
    fetch(ziel.getAttribute('data-proto')).then(function (r) { return r.text(); }).then(function (html) {
      ziel.innerHTML = html;
      ziel.querySelectorAll('[data-reiter]').forEach(reiter);
      ziel.querySelectorAll('[data-slider]').forEach(slider);
      sichtbar(ziel);
    });
  });
})();
