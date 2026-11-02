/* ROWAPA · Header gemeinsam einblenden 1.1.0 (Runde 92, Entscheide 404–406). Site-weit im Seitenkopf (Skript «ROWAPAKopf»).
   Nachfolger des Entwurfs-Skripts «ROWAPAEntwurfKopf» 1.0.1, jetzt fest mit 1,2 s und ohne Umschaltleiste.
   Setzt html[data-rg-kopf] mit der Einblendzeit. Bis zum ersten Bild des Wellenmeers (Grafik ab 1.30.0 setzt html.rg-kopf-an)
   ist der Inhalt des Headers unsichtbar, dann blenden Inhalt und Wellenmeer gemeinsam ein. Beim Logo-Band der Startseite blendet
   nur der Inhalt ein, die dunkle Fläche bleibt stehen. Ohne Wellenmeer, ohne WebGL oder bei «Bewegung reduzieren» steht der
   Header sofort da (Standbild). Notfall: nach 3,5 s erscheint der Header in jedem Fall. Einblendzeit ändern: Wert D. */
(function () {
  try {
    var D = 1.2, H = document.documentElement;
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    H.setAttribute('data-rg-kopf', String(D));
    var z = ':is(.section_hero .hero_wrap,.section_hero .hero_scroll,.section_logos.is-header>.padding-global,.section_header-unterseite .header-unterseite_wrap)';
    var b = ':is(.section_hero,.section_header-unterseite) .hero_grafik-image';
    var c = document.createElement('style');
    c.textContent = 'html[data-rg-kopf] ' + z + ',html[data-rg-kopf] ' + b + '{transition:opacity ' + D + 's ease}' +
      'html[data-rg-kopf]:not(.rg-kopf-an) ' + z + '{opacity:0}html[data-rg-kopf]:not(.rg-kopf-standbild) ' + b + '{opacity:0}';
    document.head.appendChild(c);
    setTimeout(function () {
      H.classList.add('rg-kopf-an');
      if (!document.querySelector('[data-rg-kopf-laeuft]')) H.classList.add('rg-kopf-standbild');
    }, 3500);
  } catch (e) {}
})();
