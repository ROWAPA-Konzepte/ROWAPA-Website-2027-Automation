/* Hover-Video der Karten (früher eigenes Skript «ROWAPAHoverVideo» 1.0.0):
   <video data-hover-video src="…mp4"> spielt nur, solange die Maus über der Karte ist.
   Bei Berührung mit dem Finger und bei «Bewegung reduzieren» nie. */
import { reduziert, hatMaus } from './util.js';

export function hoverVideos() {
  if (!hatMaus() || reduziert()) return;
  document.querySelectorAll('video[data-hover-video]').forEach(v => {
    if (!v.getAttribute('src')) return;
    const karte = v.closest('a, .card') || v.parentElement;
    v.muted = true;
    karte.addEventListener('pointerenter', e => {
      if (e.pointerType === 'touch') return;
      v.preload = 'auto';
      const p = v.play();
      if (p) p.then(() => { v.style.opacity = 1; }).catch(() => {});
    });
    karte.addEventListener('pointerleave', () => { v.style.opacity = 0; v.pause(); });
  });
}
