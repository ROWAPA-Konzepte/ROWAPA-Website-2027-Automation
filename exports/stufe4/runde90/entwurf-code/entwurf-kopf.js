/* ROWAPA Entwurf: Header gemeinsam einblenden 1.0.0 (Runde 90, Entscheid 404). Nur auf den beiden Entwurfsseiten, im Seitenkopf.
   Liest die Wahl «kopf» der Umschaltleiste (heute | 08 | 06 | 12; ohne Wahl 08) und setzt html[data-rg-kopf] mit der Einblendzeit.
   Bis zum ersten Bild des Wellenmeers (Grafik ab 1.30.0 setzt html.rg-kopf-an) ist der Inhalt des Headers unsichtbar, dann blenden
   Inhalt und Wellenmeer gleich lang ein. Notfall: nach 3,5 s erscheint der Header in jedem Fall. */
(function () {
  try {
    var H = document.documentElement, s = null;
    try { s = JSON.parse(localStorage.getItem('rgEntwurfMuster') || 'null'); } catch (e) {}
    var m = location.search.match(/[?&]v=([^&]*)/);
    if (m) { s = {}; decodeURIComponent(m[1]).split(',').forEach(function (p) { var a = p.split(':'); if (a[0] && a[1]) s[a[0]] = a[1]; }); }
    var d = { '06': 0.6, '08': 0.8, '12': 1.2 }[(s && s.kopf) || '08'];
    if (!d || (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches)) return;
    H.setAttribute('data-rg-kopf', String(d));
    var z = ':is(.section_hero .hero_wrap,.section_hero .hero_scroll,.section_logos.is-header,.section_header-unterseite .header-unterseite_wrap)';
    var b = ':is(.section_hero,.section_header-unterseite) .hero_grafik-image';
    var c = document.createElement('style');
    c.textContent = 'html[data-rg-kopf] ' + z + ',html[data-rg-kopf] ' + b + '{transition:opacity ' + d + 's ease}' +
      'html[data-rg-kopf]:not(.rg-kopf-an) ' + z + '{opacity:0}html[data-rg-kopf]:not(.rg-kopf-standbild) ' + b + '{opacity:0}';
    document.head.appendChild(c);
    setTimeout(function () {
      H.classList.add('rg-kopf-an');
      if (!document.querySelector('[data-rg-kopf-laeuft]')) H.classList.add('rg-kopf-standbild');
    }, 3500);
  } catch (e) {}
})();
