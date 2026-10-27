/* Themenlinien («Lösungen für Unternehmen»): fünf Themen auf einer Bühne.
   Ab 992 px und ohne «Bewegung reduzieren» bleibt die Section beim Scrollen stehen, je Thema rund zwei Drittel
   Bildschirmhöhe (data-schritt). Ab der Hälfte wechselt das Thema mit einem kurzen Übergang: Vorhang diagonal 45°
   (Richtung des Ribbons) oder von unten (data-uebergang="diagonal" | "unten", zum Vergleichen auch ?uebergang=unten
   in der Adresse). Die Punkte der Figur ziehen sich zusammen und bilden die nächste Figur. Kein Einrasten, die Seite
   scrollt normal weiter. Klick auf ein Thema der Liste scrollt sanft dorthin.
   Darunter (Tablet, Handy) und bei «Bewegung reduzieren»: Karten untereinander; die Liste (auf Tablet und Handy die
   stehende Leiste) zeigt das Thema, das im Bild ist. Ohne Skript: Karten untereinander.
   Texte, Links und Bilder sind native Webflow-Elemente; das Skript setzt nur Lage, Ausschnitt und die Klasse is-aktiv. */
import { clamp, lerp, easeInOut, easeOut, zahl, reduziert, takt, sobaldNahe } from './util.js';

const BREIT = '(min-width: 992px)';

export function themen(sec) {
  const layout = sec.querySelector('.themen_layout');
  const liste = sec.querySelector('.themen_liste');
  const box = sec.querySelector('.themen_panels');
  const panels = [...sec.querySelectorAll('.themen_panel')];
  const links = [...sec.querySelectorAll('.themen_link')];
  const n = panels.length;
  if (!layout || !box || n < 2) return;

  /* Link → Panel über die Sprungmarke, sonst nach Reihenfolge */
  const zu = links.map((a, i) => {
    const id = (a.getAttribute('href') || '').split('#')[1];
    const k = id ? panels.findIndex(p => p.id === id) : -1;
    return k >= 0 ? k : Math.min(i, n - 1);
  });
  const mq = matchMedia(BREIT);
  let buehne = null, io = null;

  function markiere(i) {
    links.forEach((a, k) => {
      const an = zu[k] === i;
      a.classList.toggle('is-aktiv', an);
      if (an) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
    /* stehende Leiste (Tablet, Handy): aktives Thema waagrecht ins Bild holen, ohne die Seite zu bewegen */
    const a = links[zu.indexOf(i)];
    if (a && liste && liste.scrollWidth > liste.clientWidth + 2) {
      liste.scrollTo({ left: a.offsetLeft - (liste.clientWidth - a.offsetWidth) / 2, behavior: reduziert() ? 'auto' : 'smooth' });
    }
  }

  /* Karten untereinander: aktiv ist die letzte Karte, deren Oberkante die 40-%-Linie erreicht hat, davor die erste */
  let zuletzt = -1, geplant = false;
  function lageListe() {
    geplant = false;
    const linie = innerHeight * 0.4;
    let k = 0;
    panels.forEach((p, i) => { if (p.getBoundingClientRect().top <= linie) k = i; });
    if (k !== zuletzt) { zuletzt = k; markiere(k); }
  }
  const beimScrollen = () => { if (!geplant) { geplant = true; requestAnimationFrame(lageListe); } };
  function beobachter(an) {
    if (an && !io) {
      /* nur rechnen, solange die Section nahe am Bild ist */
      io = new IntersectionObserver(es => {
        if (es[0].isIntersecting) { addEventListener('scroll', beimScrollen, { passive: true }); zuletzt = -1; lageListe(); }
        else removeEventListener('scroll', beimScrollen);
      }, { rootMargin: '50% 0px' });
      io.observe(sec);
    } else if (!an && io) { io.disconnect(); io = null; removeEventListener('scroll', beimScrollen); zuletzt = -1; }
  }

  links.forEach((a, i) => a.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    const k = zu[i];
    if (buehne) return buehne.geheZu(k);
    const leiste = liste && getComputedStyle(liste).position === 'sticky' ? liste.getBoundingClientRect().height : 0;
    const y = panels[k].getBoundingClientRect().top + scrollY - navHoehe() - leiste - 16;
    scrollTo({ top: y, behavior: reduziert() ? 'auto' : 'smooth' });
    markiere(k);
  }));

  /* Passt der Inhalt nicht in die Fensterhöhe (sehr niedrige Fenster), bleiben die Karten untereinander */
  let zuNiedrig = 0;
  function zuKlein() {
    if (buehne) { buehne.weg(); buehne = null; }
    zuNiedrig = innerHeight;
    beobachter(true);
  }
  function modus() {
    const soll = mq.matches && !reduziert() && innerHeight > zuNiedrig;
    if (soll && !buehne) {
      buehne = neueBuehne(sec, layout, box, panels, markiere, zuKlein);
      if (!buehne.einpassen()) return zuKlein();
    } else if (!soll && buehne) { buehne.weg(); buehne = null; }
    beobachter(!buehne);
  }
  if (mq.addEventListener) mq.addEventListener('change', modus);
  else mq.addListener(modus);
  addEventListener('resize', () => { if (!buehne && zuNiedrig && innerHeight > zuNiedrig) { zuNiedrig = 0; modus(); } });
  modus();
}

function navHoehe() {
  const nav = document.querySelector('.navbar_component');
  if (!nav) return 0;
  const pos = getComputedStyle(nav).position;
  return pos === 'sticky' || pos === 'fixed' ? nav.getBoundingClientRect().height : 0;
}

/* Übergang aus der Adresse (?uebergang=unten) vor dem Attribut der Section */
function uebergang(sec) {
  let art = '';
  try { art = new URLSearchParams(location.search).get('uebergang') || ''; } catch (e) { /* alte Browser */ }
  art = (art || sec.getAttribute('data-uebergang') || '').trim().toLowerCase();
  return art === 'unten' ? 'unten' : 'diagonal';
}

function neueBuehne(sec, layout, box, panels, markiere, zuKlein) {
  const n = panels.length;
  const huelle = layout.parentElement;
  const art = uebergang(sec);
  const tempo = clamp(zahl(sec, 'data-tempo', 1), 0.3, 3);
  const anteil = clamp(zahl(sec, 'data-schritt', 0.65), 0.3, 1.5);
  const texte = panels.map(p => p.querySelector('.themen_text'));
  const bilder = panels.map(p => p.querySelector('.themen_figur img') || p.querySelector('img'));

  /* alle gesetzten Inline-Stile merken, damit beim Wechsel unter 992 px alles wieder nativ ist */
  const gemerkt = new Set();
  const setze = (el, stile) => {
    if (!el) return;
    for (const k in stile) { gemerkt.add([el, k]); el.style[k] = stile[k]; }
  };

  let aktiv = 0, wunsch = 0, vorhang = false, aus = false;
  let navH = 0, schritt = 1, w = 0, h = 0;

  setze(huelle, { paddingTop: '0px', paddingBottom: '0px' });
  setze(layout, { position: 'sticky', boxSizing: 'border-box' });
  setze(box, { alignSelf: 'stretch', height: '100%' });
  panels.forEach(p => setze(p, { position: 'absolute', left: '0', top: '0', width: '100%', height: '100%', minHeight: '0' }));
  texte.forEach(t => setze(t, { willChange: 'transform, opacity' }));
  bilder.forEach(img => setze(img, { transition: 'opacity .25s ease' }));

  const figuren = neueFiguren(box, bilder, tempo);

  function klappe(o) {
    if (o >= 1) return 'none';
    if (art === 'unten') return `inset(${((1 - o) * 100).toFixed(2)}% 0 0 0)`;
    /* Kante unter 45° wie das Ribbon (/), wandert von rechts unten nach links oben */
    const c = (1 - o) * (w + h);
    return `polygon(${c.toFixed(1)}px 0, ${w + h}px 0, ${w + h}px ${h}px, ${(c - h).toFixed(1)}px ${h}px)`;
  }

  function ruhe(i) {
    aktiv = i;
    panels.forEach((p, k) => {
      p.style.zIndex = k === i ? '2' : '1';
      p.style.clipPath = k === i ? 'none' : klappe(0);
      if (texte[k]) { texte[k].style.transform = ''; texte[k].style.opacity = ''; }
    });
    figuren.zeige(i);
    markiere(i);
  }

  /* eng: knapper Rand für niedrige Fenster, bevor die Karten wieder untereinander stehen */
  function messen(eng) {
    navH = navHoehe();
    const vh = innerHeight, hoehe = vh - navH;
    const rand = eng ? 16 : clamp(Math.round(vh * 0.06), 24, 72);
    layout.style.top = navH + 'px';
    layout.style.height = hoehe + 'px';
    layout.style.paddingTop = layout.style.paddingBottom = rand + 'px';
    schritt = Math.max(1, Math.round(vh * anteil));
    huelle.style.height = hoehe + (n - 1) * schritt + 'px';
    w = box.clientWidth; h = box.clientHeight;
    figuren.messen();
    panels.forEach((p, k) => { if (k !== aktiv && !vorhang) p.style.clipPath = klappe(0); });
  }
  gemerkt.add([layout, 'top']); gemerkt.add([layout, 'height']); gemerkt.add([layout, 'paddingTop']);
  gemerkt.add([layout, 'paddingBottom']); gemerkt.add([huelle, 'height']);
  panels.forEach((p, k) => { gemerkt.add([p, 'zIndex']); gemerkt.add([p, 'clipPath']); gemerkt.add([texte[k], 'transform']); gemerkt.add([texte[k], 'opacity']); });

  /* alles im Bild? Kopf und Liste links, Text jedes Themas rechts */
  function passt() {
    const r = layout.getBoundingClientRect();
    const teile = [layout.querySelector('.themen_kopf'), layout.querySelector('.themen_liste'), ...texte];
    return teile.every(t => {
      if (!t) return true;
      const q = t.getBoundingClientRect();
      return q.bottom <= r.bottom - 8 && q.top >= r.top + 8;
    });
  }

  function einpassen() {
    messen(false);
    if (passt()) return true;
    messen(true);
    return passt();
  }

  function lage() {
    const r = huelle.getBoundingClientRect();
    wunsch = clamp(Math.floor((navH - r.top) / schritt + 0.5), 0, n - 1);
    /* Bühne nicht im Bild (z. B. Sprung von weit her): ohne Übergang setzen */
    if (!vorhang && (r.bottom < 0 || r.top > innerHeight)) { if (wunsch !== aktiv) ruhe(wunsch); return; }
    weiter();
  }

  function weiter() {
    if (!vorhang && !aus && wunsch !== aktiv) wechsel(aktiv, wunsch);
  }

  function wechsel(a, b) {
    const vor = b > a, oben = panels[vor ? b : a], unten = panels[vor ? a : b];
    const tOben = texte[vor ? b : a], tUnten = texte[vor ? a : b];
    panels.forEach(p => { if (p !== oben && p !== unten) { p.style.zIndex = '1'; p.style.clipPath = klappe(0); } });
    unten.style.zIndex = '2'; unten.style.clipPath = 'none';
    oben.style.zIndex = '3';
    vorhang = true;
    markiere(b);
    figuren.morph(a, b);
    const t0 = performance.now(), dauer = 0.6 / tempo;
    takt(now => {
      if (aus) return false;
      const u = clamp((now - t0) / 1000 / dauer, 0, 1), o = vor ? easeInOut(u) : 1 - easeInOut(u);
      oben.style.clipPath = klappe(o);
      /* das Thema darunter tritt zurück und rückt nach oben, das neue kommt leicht von unten */
      if (tUnten) { tUnten.style.transform = `translate3d(0,${(-o * 48).toFixed(1)}px,0)`; tUnten.style.opacity = (1 - o * 0.8).toFixed(3); }
      if (tOben) { tOben.style.transform = `translate3d(0,${((1 - o) * 32).toFixed(1)}px,0)`; tOben.style.opacity = ''; }
      if (u < 1) return true;
      vorhang = false;
      ruhe(b);
      weiter();
      return false;
    });
  }

  function geheZu(k, verhalten = 'smooth') {
    const y0 = huelle.getBoundingClientRect().top + scrollY - navH;
    scrollTo({ top: Math.round(y0 + k * schritt), behavior: verhalten });
  }

  /* Tastatur: Fokus in einem verdeckten Thema holt dieses Thema auf die Bühne */
  const fokus = e => {
    const k = panels.findIndex(p => p.contains(e.target));
    if (k >= 0 && k !== wunsch) geheZu(k, 'auto');
  };

  let geplant = false;
  const beimScrollen = () => {
    if (geplant) return;
    geplant = true;
    requestAnimationFrame(() => { geplant = false; if (!aus) lage(); });
  };
  const beiGroesse = () => requestAnimationFrame(() => {
    if (aus) return;
    if (!einpassen()) return zuKlein();
    lage();
  });

  messen(false);
  ruhe(clamp(Math.floor((navH - huelle.getBoundingClientRect().top) / schritt + 0.5), 0, n - 1));
  wunsch = aktiv;
  addEventListener('scroll', beimScrollen, { passive: true });
  addEventListener('resize', beiGroesse);
  sec.addEventListener('focusin', fokus);

  return {
    geheZu, einpassen,
    weg() {
      aus = true;
      removeEventListener('scroll', beimScrollen);
      removeEventListener('resize', beiGroesse);
      sec.removeEventListener('focusin', fokus);
      figuren.weg();
      gemerkt.forEach(([el, k]) => { if (el) el.style[k] = ''; });
    }
  };
}

/* Punkte-Morph der Figuren: eine Zeichenfläche über dem Bildbereich. Die Punkte werden aus den Standbildern
   (PNG mit transparentem Hintergrund) gelesen, ziehen sich zu einem kleinen Haufen zusammen und bilden die
   nächste Figur; am Ende steht wieder das Original. Kann ein Bild nicht gelesen werden: Überblenden. */
function neueFiguren(box, bilder, tempo) {
  const cv = document.createElement('canvas');
  cv.setAttribute('aria-hidden', 'true');
  cv.style.cssText = 'position:absolute;z-index:5;pointer-events:none;opacity:0;transition:opacity .2s ease';
  box.appendChild(cv);
  const ctx = cv.getContext('2d');
  const quellen = [], punkte = [];
  let R = { x: 0, y: 0, w: 0, h: 0 }, dpr = 1, lauf = null, jetzt = null, laeuft = false, aus = false;

  sobaldNahe(box, () => bilder.forEach((img, k) => {
    if (!img) return;
    const q = new Image();
    q.crossOrigin = 'anonymous';
    q.onload = () => { quellen[k] = q; };
    q.src = img.currentSrc || img.src;
  }), '150% 0px');

  function messen() {
    const fig = bilder[0] && bilder[0].parentElement;
    if (!fig) return;
    const b = box.getBoundingClientRect(), f = fig.getBoundingClientRect();
    R = { x: f.left - b.left, y: f.top - b.top, w: f.width, h: f.height };
    dpr = Math.min(devicePixelRatio || 1, 2);
    cv.width = Math.max(1, Math.round(R.w * dpr));
    cv.height = Math.max(1, Math.round(R.h * dpr));
    Object.assign(cv.style, { left: R.x + 'px', top: R.y + 'px', width: R.w + 'px', height: R.h + 'px' });
    punkte.length = 0;
  }

  /* Punkte eines Bildes in der Grösse des Bildbereichs (object-fit: contain, mittig) */
  function abtasten(k) {
    if (punkte[k] !== undefined) return punkte[k];
    const q = quellen[k];
    if (!q || !q.naturalWidth || R.w < 10 || R.h < 10) return null;
    const s = Math.min(R.w / q.naturalWidth, R.h / q.naturalHeight);
    const iw = q.naturalWidth * s, ih = q.naturalHeight * s;
    const c = document.createElement('canvas');
    c.width = Math.ceil(R.w); c.height = Math.ceil(R.h);
    const g = c.getContext('2d');
    g.drawImage(q, (R.w - iw) / 2, (R.h - ih) / 2, iw, ih);
    let d;
    try { d = g.getImageData(0, 0, c.width, c.height).data; } catch (e) { return (punkte[k] = null); }
    const alle = [];
    for (let y = 0; y < c.height; y += 2) for (let x = 0; x < c.width; x += 2) {
      const i = (y * c.width + x) * 4;
      if (d[i + 3] > 150) alle.push({ x, y, f: `rgb(${d[i] & 0xf8},${d[i + 1] & 0xf8},${d[i + 2] & 0xf8})` });
    }
    /* gemischt und begrenzt: gleich viele Punkte je Figur, dichte Stellen bleiben dicht */
    for (let i = alle.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; const t = alle[i]; alle[i] = alle[j]; alle[j] = t; }
    return (punkte[k] = alle.slice(0, 1600));
  }

  function zeige(i) {
    if (lauf) return;
    bilder.forEach((img, k) => { if (img) img.style.opacity = k === i ? '' : '0'; });
  }

  function ueberblenden(b) {
    bilder.forEach((img, k) => { if (img) img.style.opacity = k === b ? '' : '0'; });
  }

  function morph(a, b) {
    const A = lauf && lauf.gezeichnet ? jetzt : abtasten(a), B = abtasten(b);
    if (!A || !B || !A.length || !B.length) { lauf = null; cv.style.opacity = '0'; return ueberblenden(b); }
    const m = Math.max(A.length, B.length);
    const kx = R.w / 2, ky = R.h * 0.55, rad = Math.min(R.w, R.h) * 0.06;
    const wege = new Array(m);
    for (let i = 0; i < m; i++) {
      const p = A[i % A.length], q = B[i % B.length];
      const wnk = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * rad;
      wege[i] = { ax: p.x, ay: p.y, af: p.f, bx: q.x, by: q.y, bf: q.f, kx: kx + Math.cos(wnk) * r, ky: ky + Math.sin(wnk) * r, v: Math.random() * 0.08 };
    }
    lauf = { b, wege, t0: performance.now() };
    jetzt = new Array(m);
    bilder.forEach(img => { if (img) img.style.opacity = '0'; });
    cv.style.opacity = '1';
    if (!laeuft) { laeuft = true; takt(zeichne); }
  }

  const gruppen = new Map();
  function zeichne(now) {
    if (aus || !lauf) { laeuft = false; return false; }
    const u = clamp((now - lauf.t0) / 1000 / (0.95 / tempo), 0, 1);
    const r0 = 1.5;
    gruppen.forEach(l => { l.length = 0; });
    const wege = lauf.wege;
    for (let i = 0; i < wege.length; i++) {
      const p = wege[i], t = clamp((u - p.v) / 0.92, 0, 1);
      let x, y, f, r;
      if (t < 0.45) { const e = easeInOut(t / 0.45); x = lerp(p.ax, p.kx, e); y = lerp(p.ay, p.ky, e); f = p.af; r = lerp(r0, r0 * 0.7, e); }
      else if (t < 0.55) { x = p.kx; y = p.ky; f = t < 0.5 ? p.af : p.bf; r = r0 * 0.7; }
      else { const e = easeOut((t - 0.55) / 0.45); x = lerp(p.kx, p.bx, e); y = lerp(p.ky, p.by, e); f = p.bf; r = lerp(r0 * 0.7, r0, e); }
      jetzt[i] = { x, y, f };
      let l = gruppen.get(f);
      if (!l) gruppen.set(f, (l = []));
      l.push(x, y, r);
    }
    lauf.gezeichnet = true;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, R.w, R.h);
    gruppen.forEach((l, f) => {
      if (!l.length) return;
      ctx.fillStyle = f;
      ctx.beginPath();
      for (let i = 0; i < l.length; i += 3) { ctx.moveTo(l[i] + l[i + 2], l[i + 1]); ctx.arc(l[i], l[i + 1], l[i + 2], 0, 6.2832); }
      ctx.fill();
    });
    if (u < 1) return true;
    /* Ende: Original zeigen, Zeichenfläche ausblenden */
    const b = lauf.b;
    lauf = null; jetzt = null; laeuft = false;
    ueberblenden(b);
    cv.style.opacity = '0';
    return false;
  }

  return {
    messen, morph, zeige,
    weg() {
      aus = true;
      cv.remove();
      bilder.forEach(img => { if (img) img.style.opacity = ''; });
    }
  };
}
