/* ROWAPA Grafik: Punkte-Grafiken und kleine Bewegungen der ROWAPA-Website.
   Gesteuert über Attribute in Webflow (Settings › Custom attributes), siehe LIESMICH.md.
   Ohne dieses Skript bleiben überall die Standbilder stehen. */
import { reduziert } from './util.js';
import { punktemeer } from './punktemeer.js';
import { figur } from './figur.js';
import { hoverVideos } from './hovervideo.js';

const VERSION = '__VERSION__';

function start() {
  hoverVideos();
  if (reduziert()) return;
  document.querySelectorAll('[data-grafik]').forEach(el => {
    const art = (el.getAttribute('data-grafik') || '').trim().toLowerCase();
    try {
      if (art.startsWith('punktemeer')) punktemeer(el, art);
      else if (art.startsWith('punktfigur')) figur(el);
    } catch (e) {
      /* Fehler in einer Grafik lässt deren Standbild stehen */
    }
  });
}

window.ROWAPAGrafik = { version: VERSION };
/* erst nach dem Laden der Seite, damit der erste Bildaufbau nicht verzögert wird */
if (document.readyState === 'complete') setTimeout(start, 0);
else addEventListener('load', () => setTimeout(start, 0), { once: true });
