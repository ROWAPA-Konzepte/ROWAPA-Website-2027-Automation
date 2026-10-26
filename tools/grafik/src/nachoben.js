/* Nach oben: Der Knopf erscheint, sobald man gut eine Bildschirmhöhe gescrollt hat (Klasse is-sichtbar,
   Gestaltung im Style-Panel: nach-oben › is-sichtbar). Klick führt sanft an den Seitenanfang. */
import { reduziert } from './util.js';

export function nachoben(el) {
  let geplant = false;
  const stand = () => {
    geplant = false;
    el.classList.toggle('is-sichtbar', scrollY > innerHeight * 0.8);
  };
  addEventListener('scroll', () => { if (!geplant) { geplant = true; requestAnimationFrame(stand); } }, { passive: true });
  stand();
  el.addEventListener('click', e => {
    e.preventDefault();
    scrollTo({ top: 0, behavior: reduziert() ? 'auto' : 'smooth' });
    /* Tastatur: Fokus zurück an den Anfang der Seite */
    const erstes = document.querySelector('a[href]:not([tabindex="-1"]), button');
    if (erstes && erstes !== el) erstes.focus({ preventScroll: true });
  });
}
