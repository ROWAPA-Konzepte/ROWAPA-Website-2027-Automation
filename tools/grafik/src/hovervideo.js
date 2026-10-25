/* Hover-Video der Karten (früher eigenes Skript «ROWAPAHoverVideo» 1.0.0):
   <video data-hover-video src="…mp4"> spielt nur, solange die Maus über der Karte ist.
   Auf Touch-Geräten und bei «Bewegung reduzieren» nie. */
import { reduziert } from './util.js';

export function hoverVideos() {
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches || reduziert()) return;
  document.querySelectorAll('video[data-hover-video]').forEach(v => {
    if (!v.getAttribute('src')) return;
    const karte = v.closest('a, .card') || v.parentElement;
    v.muted = true;
    karte.addEventListener('mouseenter', () => {
      v.preload = 'auto';
      const p = v.play();
      if (p) p.then(() => { v.style.opacity = 1; }).catch(() => {});
    });
    karte.addEventListener('mouseleave', () => { v.style.opacity = 0; v.pause(); });
  });
}
