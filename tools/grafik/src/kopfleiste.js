/* Kopfleiste: Die Navigation blendet beim Runterscrollen aus und beim Hochscrollen wieder ein (ab 1.22.0, Entwurf Runde 75,
   nach dem Muster von Tresmares: 0,6 s, ein nach 200 px Hochscrollen oder am Seitenanfang).
   Webflow-Interaktionen kennen über die Schnittstelle keinen Auslöser «Scrollrichtung», darum dieses kleine Modul.

   Einschalten: ein Element in der Navigation mit data-grafik="kopfleiste" (z. B. navbar_container). Bewegt wird die ganze
   Navigation (.navbar_component).
     data-kopfleiste-ab="200"       erst ab dieser Scrolltiefe in px blendet sie aus (Standard 200)
     data-kopfleiste-zurueck="200"  so viele px Hochscrollen holen sie zurück (Standard 200; 0 = sofort)
   Elemente mit data-kopfleiste-folgt (z. B. eine klebende Kapitel-Leiste unter der Navigation) rücken mit nach oben.
   Bleibt sichtbar: am Seitenanfang (unter 10 px), solange ein Menü offen ist oder ein Element der Navigation den Fokus hat.
   Bei «Bewegung reduzieren» ohne Gleiten. */
import { reduziert, zahl } from './util.js';

const KURVE = 'cubic-bezier(.33,1,.68,1)'; /* power2.out */

export function kopfleiste(el) {
  const nav = el.closest('.navbar_component') || el.closest('nav');
  if (!nav || nav.dataset.kopfleisteAktiv) return;
  nav.dataset.kopfleisteAktiv = 'ja';
  const ab = zahl(el, 'data-kopfleiste-ab', 200);
  const zurueck = Math.max(0, zahl(el, 'data-kopfleiste-zurueck', 200));
  const folger = () => [...document.querySelectorAll('[data-kopfleiste-folgt]')];

  let versteckt = false, letzte = scrollY, wende = scrollY, richtung = 0, wartet = false, timer;

  const offen = () => !!nav.querySelector('.w--open') || nav.matches(':focus-within');

  function zeigen(an) {
    if (an === !versteckt) return;
    versteckt = !an;
    const dauer = reduziert() ? 0 : 0.6;
    const hoehe = nav.offsetHeight;
    const setzen = (e, t) => {
      e.style.transition = dauer ? `transform ${dauer}s ${KURVE}` : 'none';
      e.style.transform = t;
    };
    clearTimeout(timer);
    if (an) {
      setzen(nav, 'translateY(0)');
      folger().forEach(f => setzen(f, 'translateY(0)'));
      /* danach ganz ohne Transform: sonst beziehen sich fixierte Elemente im Megamenü (Abdunkeln) auf die Leiste */
      timer = setTimeout(() => {
        if (versteckt) return;
        nav.style.transform = '';
        folger().forEach(f => { f.style.transform = ''; });
      }, dauer * 1000 + 50);
    } else {
      setzen(nav, 'translateY(-100%)');
      folger().forEach(f => setzen(f, `translateY(${-hoehe}px)`));
    }
  }

  function pruefen() {
    wartet = false;
    const y = scrollY;
    const r = Math.sign(y - letzte);
    if (r && r !== richtung) { richtung = r; wende = letzte; }
    letzte = y;
    if (y < 10 || offen()) { zeigen(true); return; }
    if (richtung > 0 && y > ab) zeigen(false);
    else if (richtung < 0 && wende - y >= zurueck) zeigen(true);
  }

  addEventListener('scroll', () => {
    if (!wartet) { wartet = true; requestAnimationFrame(pruefen); }
  }, { passive: true });
  nav.addEventListener('focusin', () => zeigen(true));
  /* für Prüfungen von Hand: ROWAPAGrafik.kopfleiste.zeigen(true|false) */
  if (window.ROWAPAGrafik) window.ROWAPAGrafik.kopfleiste = { zeigen };
}
