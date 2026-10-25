/* Umschalter für Varianten (Testseite): Knöpfe [data-wahl="gruppe:wert"] (aktiv: Klasse var_wahl-an) zeigen Elemente [data-variante="gruppe:wert"]
   und blenden die anderen der Gruppe aus. Die Gruppe «zeiger» stellt den Mauszeiger um. */
export function varianten(el) {
  const knoepfe = [...el.querySelectorAll('[data-wahl]')];
  const gruppen = {};
  knoepfe.forEach(k => { const [g] = k.getAttribute('data-wahl').split(':'); (gruppen[g] = gruppen[g] || []).push(k); });
  const waehle = (g, wert) => {
    gruppen[g].forEach(k => {
      const an = k.getAttribute('data-wahl') === `${g}:${wert}`;
      k.classList.toggle('var_wahl-an', an);
      k.setAttribute('aria-pressed', String(an));
    });
    document.querySelectorAll(`[data-variante^="${g}:"]`).forEach(v => { v.style.display = v.getAttribute('data-variante') === `${g}:${wert}` ? '' : 'none'; });
    if (g === 'zeiger') document.querySelectorAll('[data-grafik="zeiger"]').forEach(z => z.setAttribute('data-zeiger', wert));
  };
  knoepfe.forEach(k => k.addEventListener('click', e => { e.preventDefault(); const [g, w] = k.getAttribute('data-wahl').split(':'); waehle(g, w); }));
  Object.keys(gruppen).forEach(g => waehle(g, gruppen[g][0].getAttribute('data-wahl').split(':')[1]));
}
