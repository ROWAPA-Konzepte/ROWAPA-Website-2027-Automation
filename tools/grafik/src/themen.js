/* Themenlinien («Lösungen für Unternehmen»): Szene nach dem Vorbild der Referenz Tresmares Capital, eigener Code.
   Ab 992 px und ohne «Bewegung reduzieren»:
   - Die Bühne (themen_buehne) steht beim Scrollen, je Thema eine Fensterhöhe Scrollweg (data-schritt).
   - Alles hängt am Scroll-Fortschritt zwischen zwei Themen: Vorhang von unten (data-uebergang="unten", Standard) oder
     diagonal 45° («diagonal», zum Vergleichen auch ?uebergang=diagonal in der Adresse). Das alte Thema dunkelt ab,
     Figur und Text rücken nach oben (−20 % / −30 % der Fensterhöhe), das neue kommt von unten nach. Der alte Titel blendet
     im ersten Viertel aus, der neue im letzten Viertel ein. Die Plum-Form schrumpft zu vier kleinen Quadraten und wächst
     zur nächsten Form (data-form am Panel).
   - Weiches Scrollen (Lenis) und Einrasten: Wer vor der Hälfte loslässt, läuft zurück, sonst weiter zum nächsten Thema.
     Klick auf ein Thema der Liste scrollt in einer Sekunde dorthin. Die Navigation ist ausgeblendet, solange die Bühne steht.
   Darunter (Tablet, Handy): Blöcke untereinander mit stehender Leiste; der Titel im Blick ist voll, die anderen blass,
   der ausscheidende Block dunkelt ab. Bei «Bewegung reduzieren» nur die Markierung. Ohne Skript: Blöcke untereinander.
   Texte, Links und Bilder sind native Webflow-Elemente; das Skript setzt Lage, Ausschnitt, Deckkraft und die Klasse is-aktiv. */
import Lenis from 'lenis';
import { clamp, lerp, easeInOut, zahl, reduziert } from './util.js';

const BREIT = '(min-width: 992px)';
const DUNKEL = 0.85;         // Abdunklung des ausscheidenden Themas (Manganese), bei halbem Wechsel rund 42 % wie die Referenz
const DUNKEL_HANDY = 0.2;    // Abdunklung des ausscheidenden Blocks auf Tablet und Handy (Referenz: leicht)
const BLASS = 0.35;          // Deckkraft der Titel ausserhalb des Blicks (Handy)
const PLUM = '#AA1351';

/* Formen aus 45°-Bändern wie das Ribbon, je vier Vierecke in einem Feld von −1 bis 1 (y nach unten) */
function band(ax, ay, bx, by, d, stuecke, luecke = 0.035) {
  const lx = bx - ax, ly = by - ay, l = Math.hypot(lx, ly), ux = lx / l, uy = ly / l, nx = -uy * d / 2, ny = ux * d / 2;
  const out = [];
  for (let s = 0; s < stuecke; s++) {
    const t0 = s / stuecke + (s ? luecke / 2 : 0), t1 = (s + 1) / stuecke - (s < stuecke - 1 ? luecke / 2 : 0);
    const p0x = ax + lx * t0, p0y = ay + ly * t0, p1x = ax + lx * t1, p1y = ay + ly * t1;
    out.push([[p0x + nx, p0y + ny], [p1x + nx, p1y + ny], [p1x - nx, p1y - ny], [p0x - nx, p0y - ny]]);
  }
  return out;
}
function quadrat(cx, cy, s) {
  return [[cx - s, cy - s], [cx + s, cy - s], [cx + s, cy + s], [cx - s, cy + s]];
}
const FORMEN = {
  band: () => band(-0.9, 0.9, 0.9, -0.9, 0.42, 4),
  doppel: () => [...band(-0.95, 0.45, 0.45, -0.95, 0.32, 2), ...band(-0.45, 0.95, 0.95, -0.45, 0.32, 2)],
  winkel: () => [...band(-0.9, 0.55, 0, -0.35, 0.34, 2), ...band(0, -0.35, 0.9, 0.55, 0.34, 2)],
  trichter: () => [...band(-0.9, -0.55, 0, 0.35, 0.34, 2), ...band(0, 0.35, 0.9, -0.55, 0.34, 2)],
  raster: () => [quadrat(-0.4, -0.4, 0.34), quadrat(0.4, -0.4, 0.34), quadrat(-0.4, 0.4, 0.34), quadrat(0.4, 0.4, 0.34)]
};
const REIHE = ['band', 'doppel', 'winkel', 'trichter', 'raster'];
const KLEIN = [quadrat(-0.16, -0.16, 0.13), quadrat(0.16, -0.16, 0.13), quadrat(-0.16, 0.16, 0.13), quadrat(0.16, 0.16, 0.13)];

/* Ecken im Uhrzeigersinn, beginnend oben links, damit beim Verwandeln nichts verdreht */
function ordne(q) {
  const cx = q.reduce((s, p) => s + p[0], 0) / 4, cy = q.reduce((s, p) => s + p[1], 0) / 4;
  const r = q.slice().sort((a, b) => Math.atan2(a[1] - cy, a[0] - cx) - Math.atan2(b[1] - cy, b[0] - cx));
  let k = 0;
  r.forEach((p, i) => { if (p[0] + p[1] < r[k][0] + r[k][1]) k = i; });
  return r.slice(k).concat(r.slice(0, k));
}
/* jedes Viereck dem nächstgelegenen kleinen Quadrat zuordnen (beste von 24 Reihenfolgen) */
function zuordnen(form) {
  const m = q => [q.reduce((s, p) => s + p[0], 0) / 4, q.reduce((s, p) => s + p[1], 0) / 4];
  const mk = KLEIN.map(m), mf = form.map(m);
  let best = null, bestD = 1e9;
  const perm = (a, l = []) => {
    if (!a.length) {
      const d = l.reduce((s, k, i) => s + Math.hypot(mf[i][0] - mk[k][0], mf[i][1] - mk[k][1]), 0);
      if (d < bestD) { bestD = d; best = l; }
      return;
    }
    a.forEach((x, i) => perm(a.slice(0, i).concat(a.slice(i + 1)), l.concat(x)));
  };
  perm([0, 1, 2, 3]);
  const out = [];
  best.forEach((k, i) => { out[k] = ordne(form[i]); });
  return out;
}
const KLEIN_O = KLEIN.map(ordne);
function zwischen(A, B, t) {
  return A.map((q, i) => q.map((p, j) => [lerp(p[0], B[i][j][0], t), lerp(p[1], B[i][j][1], t)]));
}

function navHoehe(nav) {
  if (!nav) return 0;
  const pos = getComputedStyle(nav).position;
  return pos === 'sticky' || pos === 'fixed' ? nav.getBoundingClientRect().height : 0;
}

function uebergang(sec) {
  let art = '';
  try { art = new URLSearchParams(location.search).get('uebergang') || ''; } catch (e) { /* alte Browser */ }
  art = (art || sec.getAttribute('data-uebergang') || '').trim().toLowerCase();
  return art === 'diagonal' ? 'diagonal' : 'unten';
}

export function themen(sec) {
  const huelle = sec.querySelector('.themen_huelle');
  const buehne = sec.querySelector('.themen_buehne');
  const liste = sec.querySelector('.themen_liste');
  const box = sec.querySelector('.themen_panels');
  const panels = [...sec.querySelectorAll('.themen_panel')];
  const links = [...sec.querySelectorAll('.themen_link')];
  const n = panels.length;
  if (!huelle || !buehne || !box || !n) return;
  const nav = document.querySelector('.navbar_component');
  const hoch = document.querySelector('.nach-oben');

  const zu = links.map((a, i) => {
    const id = (a.getAttribute('href') || '').split('#')[1];
    const k = id ? panels.findIndex(p => p.id === id) : -1;
    return k >= 0 ? k : Math.min(i, n - 1);
  });

  /* Ebenen je Panel: Abdunklung und Plum-Form (vom Skript angelegt, nicht in Webflow) */
  const svgNS = 'http://www.w3.org/2000/svg';
  const teile = panels.map((p, k) => {
    const dunkel = document.createElement('div');
    dunkel.setAttribute('aria-hidden', 'true');
    dunkel.style.cssText = 'position:absolute;inset:0;z-index:1;pointer-events:none;opacity:0;background:var(--_farben---manganese-black,#1D3149)';
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('viewBox', '-1 -1 2 2');
    svg.style.cssText = 'position:absolute;z-index:2;pointer-events:none;overflow:visible;left:50%;top:50%;transform:translate(-50%,-50%)';
    const polys = [0, 1, 2, 3].map(() => {
      const pl = document.createElementNS(svgNS, 'polygon');
      pl.setAttribute('fill', `var(--_farben---plum-perfect, ${PLUM})`);
      svg.appendChild(pl);
      return pl;
    });
    p.prepend(svg);
    p.prepend(dunkel);
    const name = (p.getAttribute('data-form') || '').trim().toLowerCase();
    const form = zuordnen((FORMEN[name] || FORMEN[REIHE[k % REIHE.length]])());
    return { p, dunkel, svg, polys, form, titel: p.querySelector('.themen_titel'), figur: p.querySelector('.themen_figur'), unten: p.querySelector('.themen_unten') };
  });
  const male = (t, F) => t.polys.forEach((pl, i) => pl.setAttribute('points', F[i].map(q => q[0].toFixed(4) + ',' + q[1].toFixed(4)).join(' ')));

  function markiere(i) {
    links.forEach((a, k) => {
      const an = zu[k] === i;
      a.classList.toggle('is-aktiv', an);
      if (an) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
    const a = links[zu.indexOf(i)];
    if (a && liste && liste.scrollWidth > liste.clientWidth + 2) {
      liste.scrollTo({ left: a.offsetLeft - (liste.clientWidth - a.offsetWidth) / 2, behavior: reduziert() ? 'auto' : 'smooth' });
    }
  }

  const mq = matchMedia(BREIT);
  let modus = null;
  function wechsle() {
    const soll = mq.matches && !reduziert() ? 'buehne' : 'liste';
    if (modus && modus.art === soll) return;
    if (modus) modus.weg();
    modus = soll === 'buehne' ? neueBuehne() : neueListe();
  }
  if (mq.addEventListener) mq.addEventListener('change', wechsle);
  else mq.addListener(wechsle);

  links.forEach((a, i) => a.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    if (modus) modus.geheZu(zu[i]);
  }));

  /* ---------- Bühne (Desktop) ---------- */
  function neueBuehne() {
    const art = uebergang(sec);
    const anteil = clamp(zahl(sec, 'data-schritt', 1), 0.4, 2);
    const gemerkt = [];
    const setze = (el, stile) => {
      if (!el) return;
      for (const k in stile) { gemerkt.push([el, k]); el.style[k] = stile[k]; }
    };
    let vh = innerHeight, w = innerWidth, schritt = vh, oben = 0, aktiv = -1, aus = false, navWeg = false;

    setze(buehne, { position: 'sticky', top: '0px', overflow: 'hidden' });
    setze(box, { position: 'absolute', left: '0px', top: '0px', width: '100%', height: '100%' });
    teile.forEach(t => {
      setze(t.p, { position: 'absolute', left: '0px', top: '0px', width: '100%', height: '100%', minHeight: '0px', willChange: 'clip-path' });
      setze(t.figur, { willChange: 'transform' });
      setze(t.unten, { willChange: 'transform' });
    });
    if (nav) setze(nav, { transition: 'transform .45s cubic-bezier(.2,.7,.1,1)' });
    if (hoch) setze(hoch, { transition: 'opacity .3s ease' });

    function messen() {
      vh = innerHeight; w = buehne.clientWidth || innerWidth;
      schritt = Math.round(vh * anteil);
      buehne.style.height = vh + 'px';
      huelle.style.height = vh + (n - 1) * schritt + 'px';
      oben = huelle.getBoundingClientRect().top + scrollY;
      const s = Math.round(Math.min(w * 0.24, vh * 0.33) * 2);
      teile.forEach(t => { t.svg.style.width = s + 'px'; t.svg.style.height = s + 'px'; t.svg.style.left = '50%'; t.svg.style.top = '50%'; });
    }
    gemerkt.push([buehne, 'height'], [huelle, 'height']);
    teile.forEach(t => gemerkt.push([t.p, 'clipPath'], [t.p, 'visibility'], [t.p, 'zIndex'], [t.dunkel, 'opacity'], [t.titel, 'opacity'],
      [t.figur, 'transform'], [t.figur, 'filter'], [t.unten, 'transform'], [t.unten, 'opacity']));
    if (nav) gemerkt.push([nav, 'transform']);
    if (hoch) gemerkt.push([hoch, 'opacity'], [hoch, 'pointerEvents']);

    function klappe(p) {
      if (p >= 1) return 'none';
      if (art === 'diagonal') {
        /* Kante unter 45° wie das Ribbon (/), wandert von rechts unten nach links oben */
        const h = vh, c = (1 - p) * (w + h);
        return `polygon(${c.toFixed(1)}px 0, ${w + h}px 0, ${w + h}px ${h}px, ${(c - h).toFixed(1)}px ${h}px)`;
      }
      return `inset(${((1 - p) * 100).toFixed(3)}% 0 0 0)`;
    }

    function zeichne() {
      if (aus) return;
      const r = huelle.getBoundingClientRect();
      const q = clamp(-r.top / schritt, 0, n - 1);
      const i = Math.min(Math.floor(q), n - 1), p = i === n - 1 ? 0 : q - i, j = Math.min(i + 1, n - 1);
      teile.forEach((t, k) => {
        if (k === i) {
          t.p.style.visibility = ''; t.p.style.zIndex = '1'; t.p.style.clipPath = 'none';
          t.dunkel.style.opacity = (DUNKEL * p).toFixed(3);
          t.figur.style.transform = `translate(-50%, calc(-50% - ${(20 * p).toFixed(3)}vh))`;
          t.figur.style.filter = p > 0 ? `brightness(${(1 - 0.45 * p).toFixed(3)})` : '';
          t.unten.style.transform = `translateY(${(-30 * p).toFixed(3)}vh)`;
          t.unten.style.opacity = '';
          t.titel.style.opacity = (1 - clamp(p / 0.25, 0, 1)).toFixed(3);
        } else if (k === j && p > 0) {
          t.p.style.visibility = ''; t.p.style.zIndex = '2'; t.p.style.clipPath = klappe(p);
          t.dunkel.style.opacity = '0';
          t.figur.style.transform = `translate(-50%, calc(-50% + ${(20 * (1 - p)).toFixed(3)}vh))`;
          t.figur.style.filter = '';
          t.unten.style.transform = `translateY(${(30 * (1 - p)).toFixed(3)}vh)`;
          t.titel.style.opacity = clamp((p - 0.75) / 0.25, 0, 1).toFixed(3);
        } else {
          t.p.style.visibility = 'hidden';
        }
      });
      /* Form: bis zur Hälfte zu vier kleinen Quadraten, danach zur neuen Form */
      const F = p < 0.5 ? zwischen(teile[i].form, KLEIN_O, easeInOut(p / 0.5)) : zwischen(KLEIN_O, teile[j].form, easeInOut((p - 0.5) / 0.5));
      male(teile[i], F);
      if (j !== i) male(teile[j], F);
      const k = Math.round(q);
      if (k !== aktiv) { aktiv = k; markiere(k); }
      /* Navigation und «Nach oben» ausblenden, solange die Bühne steht */
      const steht = r.top <= vh * 0.05 && r.bottom >= vh * 0.6;
      if (steht !== navWeg) {
        navWeg = steht;
        if (nav) nav.style.transform = steht ? 'translateY(-101%)' : '';
        if (hoch) { hoch.style.opacity = steht ? '0' : ''; hoch.style.pointerEvents = steht ? 'none' : ''; }
      }
    }

    /* weiches Scrollen und Einrasten bei der Hälfte */
    const lenis = new Lenis({ autoRaf: true, lerp: 0.1, smoothWheel: true, syncTouch: false, anchors: false, allowNestedScroll: true });
    document.documentElement.style.scrollBehavior = 'auto';
    let ruhe = null, versuche = 0;
    const einrasten = () => {
      if (aus) return;
      if (lenis.isScrolling && versuche++ < 30) { ruhe = setTimeout(einrasten, 80); return; }
      versuche = 0;
      const s = scrollY - oben, max = (n - 1) * schritt;
      if (s <= 1 || s >= max - 1) return;
      const ziel = Math.round(s / schritt) * schritt;
      if (Math.abs(ziel - s) < 2) return;
      lenis.scrollTo(oben + ziel, { duration: 1.3, easing: t => 1 - Math.pow(1 - t, 3) });
    };
    const beimScrollen = () => {
      zeichne();
      clearTimeout(ruhe);
      ruhe = setTimeout(einrasten, 140);
    };
    lenis.on('scroll', beimScrollen);
    let geplant = false;
    const nativ = () => { if (!geplant) { geplant = true; requestAnimationFrame(() => { geplant = false; zeichne(); }); } };
    addEventListener('scroll', nativ, { passive: true });
    const beiGroesse = () => requestAnimationFrame(() => { if (!aus) { messen(); zeichne(); } });
    addEventListener('resize', beiGroesse);

    /* Tastatur: Fokus in einem verdeckten Thema holt dieses Thema auf die Bühne */
    const fokus = e => {
      const k = panels.findIndex(p => p.contains(e.target));
      if (k >= 0 && k !== aktiv) lenis.scrollTo(oben + k * schritt, { immediate: true });
    };
    sec.addEventListener('focusin', fokus);

    messen();
    zeichne();

    return {
      art: 'buehne',
      geheZu(k) { lenis.scrollTo(oben + k * schritt, { duration: 1, easing: t => 1 - Math.pow(1 - t, 3) }); },
      weg() {
        aus = true;
        clearTimeout(ruhe);
        lenis.destroy();
        document.documentElement.style.scrollBehavior = '';
        removeEventListener('scroll', nativ);
        removeEventListener('resize', beiGroesse);
        sec.removeEventListener('focusin', fokus);
        gemerkt.forEach(([el, k]) => { if (el) el.style[k] = ''; });
      }
    };
  }

  /* ---------- Blöcke untereinander (Tablet, Handy, «Bewegung reduzieren») ---------- */
  function neueListe() {
    const ruhig = reduziert();
    let aktiv = -1, geplant = false, aus = false;
    teile.forEach(t => { if (t.titel && !ruhig) t.titel.style.transition = 'opacity .35s ease'; });

    /* Form ruht hinter der Figur */
    function messen() {
      teile.forEach(t => {
        male(t, t.form);
        const f = t.figur, pr = t.p.getBoundingClientRect();
        if (!f) return;
        const fr = f.getBoundingClientRect(), s = Math.round(Math.min(fr.height * 0.95, pr.width * 0.7));
        Object.assign(t.svg.style, { width: s + 'px', height: s + 'px', left: fr.left - pr.left + fr.width / 2 + 'px', top: fr.top - pr.top + fr.height / 2 + 'px' });
      });
    }

    function lage() {
      geplant = false;
      if (aus) return;
      const linie = innerHeight * 0.4;
      let k = 0;
      const tops = panels.map(p => p.getBoundingClientRect().top);
      tops.forEach((top, i) => { if (top <= linie) k = i; });
      if (k !== aktiv) {
        aktiv = k;
        markiere(k);
        if (!ruhig) teile.forEach((t, i) => { if (t.titel) t.titel.style.opacity = i === k ? '' : String(BLASS); });
      }
      /* der ausscheidende Block dunkelt ab, während der nächste hochkommt */
      if (!ruhig) teile.forEach((t, i) => {
        const naechster = tops[i + 1];
        t.dunkel.style.opacity = naechster === undefined ? '0' : (DUNKEL_HANDY * clamp(1 - naechster / innerHeight, 0, 1)).toFixed(3);
      });
    }
    const beimScrollen = () => { if (!geplant) { geplant = true; requestAnimationFrame(lage); } };
    const beiGroesse = () => requestAnimationFrame(() => { messen(); lage(); });
    addEventListener('scroll', beimScrollen, { passive: true });
    addEventListener('resize', beiGroesse);
    messen();
    lage();

    return {
      art: 'liste',
      geheZu(k) {
        const leiste = liste && getComputedStyle(liste).position === 'sticky' ? liste.getBoundingClientRect().height : 0;
        const y = panels[k].getBoundingClientRect().top + scrollY - navHoehe(nav) - leiste;
        scrollTo({ top: y, behavior: ruhig ? 'auto' : 'smooth' });
      },
      weg() {
        aus = true;
        removeEventListener('scroll', beimScrollen);
        removeEventListener('resize', beiGroesse);
        teile.forEach(t => { if (t.titel) { t.titel.style.opacity = ''; t.titel.style.transition = ''; } t.dunkel.style.opacity = '0'; });
      }
    };
  }

  wechsle();
}
