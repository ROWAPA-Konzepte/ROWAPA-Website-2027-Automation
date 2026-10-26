/* ROWAPA Grafik: Punkte-Grafiken und kleine Bewegungen der ROWAPA-Website.
   Gesteuert über Attribute in Webflow (Settings › Custom attributes), siehe LIESMICH.md.
   Ohne dieses Skript bleiben überall die Standbilder stehen. */
import { reduziert } from './util.js';
import { punktemeer } from './punktemeer.js';
import { figur } from './figur.js';
import { zaehler } from './zaehler.js';
import { treppe } from './treppe.js';
import { orbit } from './orbit.js';
import { reihe } from './reihe.js';
import { zeiger } from './zeiger.js';
import { vorschau } from './vorschau.js';
import { varianten } from './varianten.js';
import { hoverVideos } from './hovervideo.js';
import { nachoben } from './nachoben.js';

const VERSION = '__VERSION__';

/* Bedienung (immer) und Bewegung (nur ohne «Bewegung reduzieren») */
const BEDIENUNG = { varianten, reihe, zeiger, vorschau, nachoben };
const BEWEGUNG = { punktemeer, punktfigur: figur, zaehler, treppe, orbit };

function start() {
  hoverVideos();
  const ruhig = reduziert();
  document.querySelectorAll('[data-grafik]').forEach(el => {
    const art = (el.getAttribute('data-grafik') || '').trim().toLowerCase();
    const name = art.split('-')[0];
    const f = BEDIENUNG[name] || (!ruhig && BEWEGUNG[name]);
    try {
      if (f) f(el, art);
    } catch (e) {
      /* Fehler in einer Grafik lässt deren Standbild stehen */
    }
  });
}

window.ROWAPAGrafik = { version: VERSION };
/* erst nach dem Laden der Seite, damit der erste Bildaufbau nicht verzögert wird */
if (document.readyState === 'complete') setTimeout(start, 0);
else addEventListener('load', () => setTimeout(start, 0), { once: true });
