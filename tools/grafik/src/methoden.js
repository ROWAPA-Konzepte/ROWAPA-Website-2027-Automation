/* Methoden: Scroll-Geschichte «Fünf Methoden» der Seite Performance-Analyse (ab 1.19.0).
   Am Element mit den drei Spalten (Liste · Linien · Ergebnis, Klasse methode_layout) steht data-grafik="methoden".
   Ab 992 px bleibt die Grafik beim Scrollen stehen; Methode für Methode leuchtet auf, ihre Linie zeichnet sich mit
   einem Punkt zum Ergebnis, die zugehörigen Punkte im Ergebnis füllen sich (Attribut data-punkte an der Zeile,
   z. B. "2,3" = zweiter und dritter Punkt). Am Ende «Fünf Quellen, ein Bild». Darüberfahren färbt die Linie Plum.
   Unter 992 px und bei «Bewegung reduzieren» bleibt alles stehen, wie im Designer.
   Einstellungen: data-schritt (Scrollweg je Methode in px, Standard 190), data-text-schritt («Methode {n} von {N}»),
   data-text-fertig («Fünf Quellen, ein Bild»). Texte und Inhalte bleiben normale Webflow-Elemente. */
import { clamp, zahl, takt } from './util.js';

const CSS = `
[data-grafik^="methoden"].rg-m .methode_zeile{transition:opacity .28s,box-shadow .28s,transform .28s,border-color .28s}
[data-grafik^="methoden"].rg-m .methode_zeile:not(.rg-an){opacity:.38}
[data-grafik^="methoden"].rg-m .methode_zeile.rg-jetzt{box-shadow:0 12px 32px rgba(29,49,73,.16);transform:translateX(8px);border-left-color:#AA1351}
[data-grafik^="methoden"].rg-m .methode_panel-punkt{transition:opacity .3s,transform .3s}
[data-grafik^="methoden"].rg-m .methode_panel-punkt:not(.rg-an){opacity:.22;transform:translateX(10px)}
[data-grafik^="methoden"].rg-m .methode_panel{transition:box-shadow 1s}
[data-grafik^="methoden"].rg-m.rg-fertig .methode_panel{box-shadow:0 0 0 3px rgba(170,19,81,.55),0 18px 48px rgba(29,49,73,.25)}
[data-grafik^="methoden"].rg-m .methode_panel-bild{transition:opacity .7s}
[data-grafik^="methoden"].rg-m.rg-fertig .methode_panel-bild{opacity:.6}
.rg-m-linien{position:absolute;inset:0;width:100%;height:100%;overflow:visible;pointer-events:none}
.rg-m-linien path{fill:none;stroke:#A0C4DF;stroke-width:2;transition:stroke .2s,stroke-width .2s}
.rg-m-linien path.rg-otj{stroke:#AA1351}
.rg-m-linien path.rg-hl{stroke:#AA1351;stroke-width:3}
.rg-m-linien path.rg-pfeil{stroke:#486EA3;stroke-width:2}
.rg-m-linien circle{fill:#AA1351;transition:opacity .2s}
.rg-m-schritt{position:absolute;right:0;top:-2.25rem;font-family:var(--_typo---font-accent,inherit);font-weight:800;font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;color:#AA1351}
`;

let cssDa = false;
function css() {
  if (cssDa) return;
  cssDa = true;
  const s = document.createElement('style');
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function methoden(el) {
  if (innerWidth < 992) return;
  const zeilen = [...el.querySelectorAll('.methode_zeile')];
  const punkte = [...el.querySelectorAll('.methode_panel-punkt')];
  const linien = el.querySelector('.methode_linien');
  const panel = el.querySelector('.methode_panel');
  if (!zeilen.length || !linien || !panel) return;
  css();

  const N = zeilen.length;
  const STEP = clamp(zahl(el, 'data-schritt', 190), 80, 600);
  const textSchritt = el.getAttribute('data-text-schritt') || 'Methode {n} von {N}';
  const textFertig = el.getAttribute('data-text-fertig') || 'Fünf Quellen, ein Bild';
  const karte = zeilen.map(z => (z.getAttribute('data-punkte') || '').split(',').map(s => parseInt(s, 10) - 1).filter(i => i >= 0 && i < punkte.length));

  /* Stehenbleiben: Hülle mit zusätzlichem Scrollweg, innen klebt die Grafik */
  const huelle = document.createElement('div');
  const innen = document.createElement('div');
  huelle.style.position = 'relative';
  innen.style.position = 'sticky';
  el.parentNode.insertBefore(huelle, el);
  innen.appendChild(el);
  huelle.appendChild(innen);
  el.classList.add('rg-m');

  const schritt = document.createElement('div');
  schritt.className = 'rg-m-schritt';
  schritt.setAttribute('aria-hidden', 'true');
  if (getComputedStyle(el).position === 'static') el.style.position = 'relative';
  el.appendChild(schritt);

  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('class', 'rg-m-linien');
  svg.setAttribute('aria-hidden', 'true');
  linien.appendChild(svg);
  let pfade = [], laengen = [], dots = [];

  function zeichneLinien() {
    const wr = linien.getBoundingClientRect();
    if (!wr.width) return;
    const pr = panel.getBoundingClientRect();
    const ty = pr.top + pr.height / 2 - wr.top, w = wr.width;
    svg.setAttribute('viewBox', `0 0 ${w} ${wr.height}`);
    let h = '';
    zeilen.forEach((z, k) => {
      const b = z.getBoundingClientRect(), y = b.top + b.height / 2 - wr.top;
      const otj = z.classList.contains('is-otj') ? ' rg-otj' : '';
      h += `<path class="rg-w${otj}" d="M0,${y} C${w * 0.55},${y} ${w * 0.45},${ty} ${w - 2},${ty}"/>`;
    });
    h += `<path class="rg-pfeil" d="M${w - 10},${ty - 6} L${w - 2},${ty} L${w - 10},${ty + 6}"/>`;
    zeilen.forEach(() => { h += '<circle r="4.5" cx="-30" cy="-30" style="opacity:0"/>'; });
    svg.innerHTML = h;
    pfade = [...svg.querySelectorAll('path.rg-w')];
    dots = [...svg.querySelectorAll('circle')];
    laengen = pfade.map(p => p.getTotalLength());
    pfade.forEach((p, k) => { p.style.strokeDasharray = laengen[k]; p.style.strokeDashoffset = laengen[k]; });
  }

  function layout() {
    const h = innen.offsetHeight;
    innen.style.top = `max(96px, calc(50vh - ${h / 2}px + 36px))`;
    huelle.style.height = h + STEP * (N + 1) + 'px';
    zeichneLinien();
    update();
  }

  function update() {
    const top = huelle.getBoundingClientRect().top;
    const start = parseFloat(getComputedStyle(innen).top) || 0;
    const prog = Math.max(0, start - top) / STEP;
    let jetzt = -1;
    const an = new Set();
    zeilen.forEach((z, k) => {
      const lp = clamp(prog - k, 0, 1);
      z.classList.toggle('rg-an', lp > 0.02);
      z.classList.toggle('rg-jetzt', lp > 0.02 && lp < 1);
      if (lp > 0.02 && lp < 1) jetzt = k;
      const p = pfade[k], d = dots[k];
      if (p) {
        p.style.strokeDashoffset = laengen[k] * (1 - lp);
        if (lp > 0.02 && lp < 0.98) {
          const pt = p.getPointAtLength(laengen[k] * lp);
          d.setAttribute('cx', pt.x); d.setAttribute('cy', pt.y); d.style.opacity = 1;
        } else d.style.opacity = 0;
      }
      if (lp >= 0.95) karte[k].forEach(i => an.add(i));
    });
    const fertig = prog >= N;
    punkte.forEach((l, i) => l.classList.toggle('rg-an', fertig || an.has(i)));
    el.classList.toggle('rg-fertig', fertig);
    schritt.textContent = fertig ? textFertig : jetzt >= 0 ? textSchritt.replace('{n}', jetzt + 1).replace('{N}', N) : '';
  }

  zeilen.forEach((z, k) => {
    z.addEventListener('mouseenter', () => pfade[k] && pfade[k].classList.add('rg-hl'));
    z.addEventListener('mouseleave', () => pfade[k] && pfade[k].classList.remove('rg-hl'));
  });

  /* Scrollen: höchstens einmal pro Bild rechnen */
  let offen = false;
  addEventListener('scroll', () => {
    if (offen) return;
    offen = true;
    takt(() => { offen = false; update(); return false; });
  }, { passive: true });
  addEventListener('resize', layout);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(layout);
  layout();
}
