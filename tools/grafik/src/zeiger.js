/* Mauszeiger als Punkt mit feinem Kreis (nur Geräte mit Maus). Element mit data-grafik="zeiger" schaltet ihn ein;
   data-zeiger="a" Punkt und Kreis · "b" Kreis reagiert auf Links und Karten · "c" Kreis passt sich dem Grund an.
   In Formularfeldern bleibt der normale Cursor. Bei «Bewegung reduzieren» folgt der Kreis ohne Verzögerung. */
import { reduziert, ciFarbe } from './util.js';

let laeuft = false;

export function zeiger(el) {
  if (laeuft || !matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  laeuft = true;
  const plum = `rgb(${ciFarbe('plum-perfect', '#AA1351').join(',')})`;
  const dunkelblau = `rgb(${ciFarbe('manganese-black', '#1D3149').join(',')})`;
  const stil = document.createElement('style');
  stil.textContent = 'html.hat-zeiger, html.hat-zeiger *{cursor:none!important}html.hat-zeiger input, html.hat-zeiger textarea, html.hat-zeiger select{cursor:auto!important}';
  document.head.appendChild(stil);
  const mk = css => { const d = document.createElement('div'); d.setAttribute('aria-hidden', 'true'); d.style.cssText = 'position:fixed;left:0;top:0;pointer-events:none;z-index:2147483000;opacity:0;transition:opacity .2s ease;' + css; document.body.appendChild(d); return d; };
  const punkt = mk(`width:8px;height:8px;margin:-4px 0 0 -4px;border-radius:50%;background:${plum}`);
  const kreis = mk(`width:36px;height:36px;margin:-18px 0 0 -18px;border-radius:50%;border:1px solid ${dunkelblau};display:flex;align-items:center;justify-content:center;font:800 10px/1 var(--_typografie---schrift-akzent, sans-serif);letter-spacing:.12em;text-transform:uppercase;transition:opacity .2s ease, width .25s ease, height .25s ease, margin .25s ease, background-color .25s ease, border-color .25s ease, color .25s ease`);
  const text = document.createElement('span'); kreis.appendChild(text);
  document.documentElement.classList.add('hat-zeiger');

  let mx = -100, my = -100, kx = -100, ky = -100, sichtbar = false, groesse = 36;
  const variante = () => (el.getAttribute('data-zeiger') || 'a').toLowerCase();

  /* dunkler Grund unter dem Zeiger? (Theme-Klassen der Sections) */
  const dunkel = t => !!(t && t.closest && t.closest('.theme-kontrast, .theme-tiefsee, .navbar_component, .footer_component'));

  function zustand(t) {
    const v = variante();
    let g = 36, fuell = 'transparent', label = '', ring = dunkelblau, farbePunkt = plum, schrift = '#fff';
    const feld = t && t.closest && t.closest('input, textarea, select');
    const dunkelGrund = dunkel(t);
    if (dunkelGrund && v !== 'a') { ring = 'rgba(255,255,255,.85)'; }
    if (dunkelGrund && v === 'a') { ring = 'rgba(160,196,223,.9)'; }
    if (v === 'b') {
      const ziel = t && t.closest && t.closest('a, button, [role="button"], .card, label');
      if (ziel) { g = 72; fuell = plum; ring = plum; label = ziel.getAttribute('data-zeiger-text') || (ziel.matches('.card, a') ? 'Öffnen' : ''); farbePunkt = 'transparent'; }
      else if (t && t.closest && t.closest('p, h1, h2, h3, h4, li')) g = 22;
    }
    if (v === 'c') {
      const ziel = t && t.closest && t.closest('a, button, [role="button"], .card');
      if (ziel) { g = 52; fuell = dunkelGrund ? 'rgba(255,255,255,.12)' : 'rgba(170,19,81,.1)'; }
      farbePunkt = dunkelGrund ? 'rgb(160,196,223)' : plum;
    }
    groesse = g;
    kreis.style.width = kreis.style.height = g + 'px';
    kreis.style.margin = `${-g / 2}px 0 0 ${-g / 2}px`;
    kreis.style.backgroundColor = fuell;
    kreis.style.borderColor = ring;
    kreis.style.color = schrift;
    text.textContent = label;
    punkt.style.background = farbePunkt;
    const an = sichtbar && !feld;
    punkt.style.opacity = an ? '1' : '0';
    kreis.style.opacity = an ? '1' : '0';
  }

  addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    if (!sichtbar) { sichtbar = true; kx = mx; ky = my; }
    zustand(e.target);
  }, { passive: true });
  document.addEventListener('mouseleave', () => { sichtbar = false; zustand(null); });
  addEventListener('mousedown', () => { kreis.style.transform = 'scale(.85)'; });
  addEventListener('mouseup', () => { kreis.style.transform = ''; });

  const folgen = () => {
    const f = reduziert() ? 1 : 0.2;
    kx += (mx - kx) * f; ky += (my - ky) * f;
    punkt.style.translate = `${mx}px ${my}px`;
    kreis.style.translate = `${kx}px ${ky}px`;
    requestAnimationFrame(folgen);
  };
  requestAnimationFrame(folgen);
}
