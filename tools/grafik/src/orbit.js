/* ROWAPA Digital: Die Wissensplattform dreht sich langsam, die fünf Werkzeuge ziehen ruhig auf ihrer Bahn.
   Fährt man über eine Karte oder eine Kachel, leuchtet die Kachel auf und eine feine Linie verbindet sie mit der Kugel.
   Kugel = Bild mit Klasse orbit_kugel, Bahn = orbit_bahn, Kacheln = orbit_tile (gleiche Reihenfolge wie die Karten). */
import { clamp, zahl, sichtbar, takt, ciFarbe, istHandy } from './util.js';
import { kugelDaten, kugelFarben, zeichneKugel } from './kugel.js';

const TAU = Math.PI * 2;

export function orbit(box) {
  const bild = box.querySelector('.orbit_kugel');
  if (!bild) return;
  const bahn = box.querySelector('.orbit_bahn');
  const kacheln = [...box.querySelectorAll('.orbit_tile')];
  const sec = box.closest('section') || document.body;
  const raster = sec.querySelector('.tools_grid');
  const karten = raster ? [...raster.children] : [];
  const tempo = clamp(zahl(box, 'data-tempo', 1), 0.2, 3);
  const handy = istHandy();
  const D = kugelDaten();
  const F = kugelFarben({ sea: ciFarbe('sea-cliff', '#A0C4DF'), serpent: ciFarbe('great-serpent', '#486EA3'), manganese: ciFarbe('manganese-black', '#1D3149'), plum: ciFarbe('plum-perfect', '#AA1351') });

  const start = kacheln.map((_, k) => (-18 + (360 / kacheln.length) * k) * Math.PI / 180);
  let G = null, cv, ctx, dpr = 1, weiter = 0, dreh = 0, pause = false, aktiv = -1, zuletzt = -1, linie = 0, im = false, laeuft = false, gezeigt = false;
  let tLetzt = 0, tBild = 0;
  const pos = kacheln.map(() => [0, 0]);

  /* Masse aus Webflow: Bahn und Kugel bestimmen Ellipse und Radius */
  function messen() {
    const b = box.getBoundingClientRect(), k = bild.getBoundingClientRect();
    const r = bahn ? bahn.getBoundingClientRect() : { left: b.left + b.width * 0.1, top: b.top + b.height * 0.12, width: b.width * 0.8, height: b.height * 0.72 };
    G = { w: b.width, h: b.height, cx: r.left - b.left + r.width / 2, cy: r.top - b.top + r.height / 2, rx: r.width / 2, ry: r.height / 2,
      kx: k.left - b.left + k.width / 2, ky: k.top - b.top + k.height / 2, R: k.width * 0.46 };
    if (cv) {
      dpr = Math.min(devicePixelRatio || 1, 2);
      cv.width = Math.round(G.w * dpr); cv.height = Math.round(G.h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
  }

  /* Kacheln auf die Bahn legen; hinten etwas kleiner */
  function legen() {
    kacheln.forEach((el, k) => {
      const a = start[k] + weiter, x = G.cx + G.rx * Math.cos(a), y = G.cy + G.ry * Math.sin(a), tiefe = Math.sin(a);
      pos[k][0] = x; pos[k][1] = y;
      el.style.transform = `translate(${x.toFixed(1)}px,${y.toFixed(1)}px) translate(-50%,-50%) scale(${(0.93 + 0.035 * (tiefe + 1)).toFixed(3)})`;
      el.style.zIndex = tiefe > 0 ? '3' : '2';
      /* Namen immer aussen an der Bahn: obere Hälfte über der Kachel, untere darunter */
      const name = el.querySelector('.orbit_tile-name');
      if (name) name.classList.toggle('is-oben', tiefe < 0);
    });
  }

  kacheln.forEach(el => { el.style.left = '0px'; el.style.top = '0px'; el.style.willChange = 'transform'; });
  messen(); legen();
  new ResizeObserver(() => { messen(); legen(); if (gezeigt) zeichne(performance.now()); }).observe(box);

  /* Verbindung Karte ↔ Kachel */
  function setAktiv(k) {
    aktiv = k;
    kacheln.forEach((el, i) => el.classList.toggle('is-aktiv', i === k));
    karten.forEach((el, i) => el.classList.toggle('is-verbunden', i === k));
    los();
  }
  const paare = [kacheln, karten];
  paare.forEach(liste => liste.slice(0, kacheln.length).forEach((el, k) => {
    el.addEventListener('mouseenter', () => setAktiv(k));
    el.addEventListener('mouseleave', () => setAktiv(-1));
    el.addEventListener('focusin', () => setAktiv(k));
    el.addEventListener('focusout', () => setAktiv(-1));
  }));
  [box, raster].forEach(el => {
    if (!el) return;
    el.addEventListener('mouseenter', () => { pause = true; });
    el.addEventListener('mouseleave', () => { pause = false; });
  });

  /* Leinwand über dem Standbild; übernimmt mit einer kurzen Überblendung */
  function einrichten() {
    cv = document.createElement('canvas');
    cv.setAttribute('aria-hidden', 'true');
    cv.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;opacity:0;transition:opacity .8s ease';
    bild.insertAdjacentElement('afterend', cv);
    ctx = cv.getContext('2d');
    messen();
  }

  function zeichne(now) {
    ctx.clearRect(0, 0, G.w, G.h);
    zeichneKugel(ctx, D, F, G.kx, G.ky, G.R, dreh, handy ? 2 : 1);
    const k = aktiv >= 0 ? aktiv : zuletzt;
    if (linie > 0 && k >= 0) {
      const [tx, ty] = pos[k];
      const dx = tx - G.kx, dy = ty - G.ky, L = Math.hypot(dx, dy) || 1, ux = dx / L, uy = dy / L;
      const halb = (kacheln[k].offsetWidth || 64) * 0.62;
      const a0 = G.R * 1.04, a1 = L - halb;
      if (a1 > a0) {
        const r = Math.max(0.9, G.R * 0.013), schritt = Math.max(5, G.R * 0.06);
        for (let s = a0; s <= a1; s += schritt) {
          ctx.globalAlpha = 0.8 * linie;
          ctx.drawImage(F.hell, G.kx + ux * s - r, G.ky + uy * s - r, 2 * r, 2 * r);
        }
        const u = (now / 1600) % 1, s = a0 + (a1 - a0) * u, rp = r * 2.2;
        ctx.globalAlpha = linie * Math.sin(Math.PI * u);
        ctx.drawImage(F.plum, G.kx + ux * s - rp, G.ky + uy * s - rp, 2 * rp, 2 * rp);
        ctx.globalAlpha = 1;
      }
    }
  }

  function los() {
    if (laeuft || !im || !cv) return;
    laeuft = true; tLetzt = performance.now();
    takt(now => {
      if (!im) { laeuft = false; return false; }
      const dt = Math.min(0.05, (now - tLetzt) / 1000); tLetzt = now;
      dreh += dt * (TAU / 40) * tempo;
      if (!pause && !handy) weiter += dt * (TAU / 90) * tempo;
      if (aktiv >= 0) zuletzt = aktiv;
      linie = clamp(linie + (aktiv >= 0 ? dt / 0.3 : -dt / 0.4), 0, 1);
      /* rund 30 Bilder pro Sekunde reichen für diese ruhige Bewegung */
      if (now - tBild < 31) return true;
      tBild = now;
      if (!handy) legen();
      zeichne(now);
      if (!gezeigt) {
        gezeigt = true;
        cv.style.opacity = '1';
        bild.style.transition = 'opacity .8s ease';
        bild.style.opacity = '0';
      }
      return true;
    });
  }

  /* rechnet nur, solange die Grafik im Bild ist */
  sichtbar(box, v => {
    im = v;
    if (v && !cv) einrichten();
    if (v) los();
  }, '10% 0px');
}
