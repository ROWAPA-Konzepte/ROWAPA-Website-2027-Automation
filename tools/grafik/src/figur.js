/* Punktfigur: baut sich einmal aus dem Standbild auf und ruht dann.
   Das Standbild ist die Vorlage: Punkte und Farben werden daraus gelesen, am Ende
   wird ins Original überblendet. So entspricht der Schluss exakt dem Bild im Designer.
   - PNG mit Transparenz: Bild wird während des Aufbaus ausgeblendet
   - JPG mit Hintergrund: Hintergrund wird zeilenweise nachgebildet und deckt das Bild ab */
import { clamp, easeOut, zahl, sobaldNahe, takt, istHandy } from './util.js';

const gruppen = new WeakMap();

/* passende Bildgrösse aus srcset wählen (wie der Browser), damit der Cache greift */
function quelle(img, breite) {
  const ss = img.getAttribute('srcset');
  if (!ss) return img.currentSrc || img.src;
  const k = ss.split(',').map(s => s.trim().split(/\s+/)).map(([u, w]) => ({ u, w: parseInt(w, 10) || 0 })).sort((a, b) => a.w - b.w);
  const ziel = breite * Math.min(devicePixelRatio || 1, 2);
  return (k.find(c => c.w >= ziel) || k[k.length - 1]).u;
}

/* Lage des sichtbaren Bildes im Element (object-fit / object-position) */
function bildRahmen(img, nw, nh) {
  const bw = img.clientWidth, bh = img.clientHeight, cs = getComputedStyle(img);
  let w = bw, h = bh;
  if (cs.objectFit === 'cover' || cs.objectFit === 'contain') {
    const s = cs.objectFit === 'cover' ? Math.max(bw / nw, bh / nh) : Math.min(bw / nw, bh / nh);
    w = nw * s; h = nh * s;
  }
  const pos = cs.objectPosition.split(' ').map(p => (p.endsWith('%') ? parseFloat(p) / 100 : 0.5));
  return { x: (bw - w) * pos[0], y: (bh - h) * (pos[1] ?? 0.5), w, h, bw, bh };
}

const median = a => { a.sort((x, y) => x - y); return a[a.length >> 1]; };

export function figur(box) {
  const img = box.querySelector('img');
  if (!img) return;
  const sec = box.closest('section') || document.body;
  const liste = gruppen.get(sec) || [];
  liste.push(box); gruppen.set(sec, liste);
  const index = liste.length - 1;

  /* bereits im Bild beim Laden: Standbild lassen */
  const r0 = box.getBoundingClientRect();
  if (r0.top < innerHeight && r0.bottom > 0) return;

  const tempo = clamp(zahl(box, 'data-tempo', 1), 0.2, 3);
  const verz = zahl(box, 'data-verzoegerung', index * 0.22);
  const gross = img.clientWidth * img.clientHeight > 120000;
  const ziel = Math.round((gross ? 2600 : 900) * clamp(zahl(box, 'data-dichte', 1), 0.3, 2) * (istHandy() ? 0.6 : 1));

  let cv, ctx, teile, hgBild, modus, fertig = false;

  /* Vorbereiten, sobald die Figur näher als 1,5 Bildschirmhöhen ist */
  sobaldNahe(box, () => {
    const vorlage = new Image();
    vorlage.crossOrigin = 'anonymous';
    vorlage.decoding = 'async';
    vorlage.src = quelle(img, img.clientWidth || box.clientWidth);
    modus = /\.png(\?|$)/i.test(vorlage.src) ? 'alpha' : 'hg';
    if (modus === 'alpha') img.style.opacity = '0';
    const notfall = setTimeout(zeigeOriginal, 6000);
    vorlage.decode().then(() => {
      clearTimeout(notfall);
      if (!vorbereiten(vorlage)) return zeigeOriginal();
      sobaldNahe(box, () => setTimeout(starten, verz * 1000), '0px 0px -12% 0px');
    }).catch(() => { clearTimeout(notfall); zeigeOriginal(); });
  }, '150% 0px');

  function zeigeOriginal() {
    img.style.opacity = '';
    if (cv) cv.remove();
    fertig = true;
  }

  function vorbereiten(v) {
    const R = bildRahmen(img, v.naturalWidth, v.naturalHeight);
    if (!R.bw || !R.bh) return false;
    /* Abtastung in CSS-Pixeln, nur der sichtbare Ausschnitt */
    const W = Math.round(R.bw), H = Math.round(R.bh);
    const oc = document.createElement('canvas');
    oc.width = W; oc.height = H;
    const ox = oc.getContext('2d', { willReadFrequently: true });
    ox.drawImage(v, R.x, R.y, R.w, R.h);
    let d;
    try { d = ox.getImageData(0, 0, W, H).data; } catch (e) { return false; }

    /* Hintergrund je Zeile (Median), nur bei JPG */
    const hg = new Uint8ClampedArray(H * 3);
    if (modus === 'hg') {
      for (let y = 0; y < H; y++) {
        const rr = [], gg = [], bb = [];
        for (let x = 0; x < W; x += 3) { const i = (y * W + x) * 4; rr.push(d[i]); gg.push(d[i + 1]); bb.push(d[i + 2]); }
        hg[y * 3] = median(rr); hg[y * 3 + 1] = median(gg); hg[y * 3 + 2] = median(bb);
      }
      const hc = document.createElement('canvas');
      hc.width = 1; hc.height = H;
      const hx = hc.getContext('2d'), id = hx.createImageData(1, H);
      for (let y = 0; y < H; y++) { id.data.set([hg[y * 3], hg[y * 3 + 1], hg[y * 3 + 2], 255], y * 4); }
      hx.putImageData(id, 0, 0);
      hgBild = hc;
    }
    const staerke = (x, y) => {
      const i = (y * W + x) * 4;
      if (modus === 'alpha') return d[i + 3];
      return Math.max(Math.abs(d[i] - hg[y * 3]), Math.abs(d[i + 1] - hg[y * 3 + 1]), Math.abs(d[i + 2] - hg[y * 3 + 2]));
    };
    const schwelle = modus === 'alpha' ? 60 : 30;
    /* Rasterweite so wählen, dass etwa «ziel» Punkte entstehen */
    let kand = 0;
    for (let y = 0; y < H; y += 2) for (let x = 0; x < W; x += 2) if (staerke(x, y) > schwelle) kand++;
    kand *= 4;
    if (kand < 20) return false;
    const st = Math.max(2, Math.round(Math.sqrt(kand / ziel)));
    teile = [];
    for (let y = 0; y < H; y += st) for (let x = 0; x < W; x += st) {
      const s = staerke(x, y);
      if (s <= schwelle) continue;
      const i = (y * W + x) * 4, r = d[i], g = d[i + 1], b = d[i + 2];
      const akzent = r > 110 && r > g * 1.6 && r > b * 1.05;
      const a = modus === 'alpha' ? d[i + 3] / 255 : clamp(s / 90, 0.35, 1);
      /* Aufbau von unten nach oben, leicht von links; Akzent (Pfeil) zuletzt, von links nach rechts */
      const k = akzent ? 0.78 + (x / W) * 0.22 : (1 - y / H) * 0.78 + (x / W) * 0.18 + Math.random() * 0.06;
      const sx = x + (Math.random() - 0.5) * W * 0.25, sy = H + 4 + Math.random() * 10;
      teile.push({
        x, y, sx, sy,
        cx: (sx + x) / 2 + (Math.random() - 0.5) * W * 0.18,
        cy: Math.min(sy, y) - Math.random() * H * 0.12,
        k, f: `rgba(${r & 0xf8},${g & 0xf8},${b & 0xf8},${(Math.round(a * 8) / 8).toFixed(3)})`
      });
    }
    /* nach Farbe bündeln: ein Pfad je Farbe und Bild */
    teile.sort((p, q) => (p.f < q.f ? -1 : 1));

    cv = document.createElement('canvas');
    cv.setAttribute('aria-hidden', 'true');
    const dpr = Math.min(devicePixelRatio || 1, 2);
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    cv.style.cssText = `position:absolute;left:${img.offsetLeft}px;top:${img.offsetTop}px;width:${W}px;height:${H}px;pointer-events:none;transition:opacity .6s ease;z-index:${modus === 'hg' ? 1 : 'auto'}`;
    if (getComputedStyle(box).position === 'static') box.style.position = 'relative';
    img.insertAdjacentElement('afterend', cv);
    ctx = cv.getContext('2d');
    ctx.scale(dpr, dpr);
    teile.radius = Math.max(0.9, st * 0.42);
    teile.W = W; teile.H = H;
    zeichne(0);
    return true;
  }

  function zeichne(t) {
    const W = teile.W, H = teile.H, rad = teile.radius;
    ctx.clearRect(0, 0, W, H);
    if (hgBild) ctx.drawImage(hgBild, 0, 0, W, H);
    const spread = (gross ? 0.95 : 0.65) / tempo, dauer = (gross ? 1.15 : 0.9) / tempo;
    let farbeAktiv = '', offen = false;
    for (let i = 0; i < teile.length; i++) {
      const p = teile[i];
      const u = clamp((t - p.k * spread) / dauer, 0, 1);
      if (u <= 0) continue;
      if (p.f !== farbeAktiv) { if (offen) ctx.fill(); ctx.fillStyle = farbeAktiv = p.f; ctx.beginPath(); offen = true; }
      const e = easeOut(u), m = 1 - e;
      const x = m * m * p.sx + 2 * m * e * p.cx + e * e * p.x;
      const y = m * m * p.sy + 2 * m * e * p.cy + e * e * p.y;
      const rr = rad * (u < 0.3 ? u / 0.3 : 1);
      ctx.moveTo(x + rr, y);
      ctx.arc(x, y, rr, 0, 6.2832);
    }
    if (offen) ctx.fill();
    return spread + dauer;
  }

  function starten() {
    if (fertig) return;
    const t0 = performance.now();
    takt(now => {
      const t = (now - t0) / 1000;
      const ende = zeichne(t);
      if (t < ende) return true;
      /* Überblenden ins Original */
      img.style.transition = 'opacity .6s ease';
      img.style.opacity = '';
      cv.style.opacity = '0';
      setTimeout(() => { cv.remove(); fertig = true; hover(); }, 700);
      return false;
    });
  }

  /* beim Darüberfahren zieht sich die Figur leicht zusammen */
  function hover() {
    const karte = box.closest('a, [class*="card"]');
    if (!karte || !matchMedia('(hover: hover)').matches) return;
    img.style.transition = 'transform .7s cubic-bezier(.2,.7,.1,1), opacity .6s ease';
    img.style.transformOrigin = '50% 70%';
    karte.addEventListener('mouseenter', () => { img.style.transform = 'scale(.97)'; });
    karte.addEventListener('mouseleave', () => { img.style.transform = ''; });
  }
}
