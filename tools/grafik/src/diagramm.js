/* Diagramm: Musterauswertungen aus normalen Webflow-Elementen, die sich beim ersten Erscheinen und bei jedem Öffnen ihres
   Reiters aufbauen (ab 1.21.0, Entscheid 384). Texte, Farben und Grössen kommen aus Webflow (Klassen dia_…), die Werte aus
   Attributen (Element anklicken › Einstellungen › Attribute). Das Skript setzt nur Lage, Breite, Farbe und Zahl und bewegt sie.

   Behälter: data-grafik="diagramm"
     data-min, data-max   Skala (Standard 0 und 10)
     data-dauer           Dauer je Bewegung in Sekunden (Standard 0.9)
     data-farbe-von/-bis  Werte, bei denen Zellen ganz Plum bzw. ganz Sea Cliff sind (Standard 5 und 8)
     data-spalten         Zellen je Zeile in einer Wärmetabelle (für die diagonale Welle, Standard 4)
   Elemente darin:
     data-art="breite" data-wert="7.4"               Balken wächst von links bis zum Wert
     data-art="lage"   data-wert="6.2"               Marke gleitet von links an ihre Stelle
     data-art="spanne" data-von="6.2" data-bis="8.4" Fläche zwischen zwei Werten zeichnet sich (z. B. Abstand)
     data-art="farbe"  data-wert="5.3"               Zelle färbt sich nach dem Wert (tief Plum, hoch Sea Cliff)
     data-art="zahl"   data-wert="2.2"               Zahl zählt hoch; data-stellen (Standard 1), data-vorzeichen="ja"
     data-art="folge"                                Element blendet ein (z. B. Schritte im Musterbericht)
     data-art="fuellen"                              Kreis füllt sich Plum, Schrift wird weiss
     data-takt="0|1|2"   Reihenfolge innerhalb einer Zeile (Standard 0). Zeilen (Klasse dia_zeile oder data-zeile) folgen
                         einander mit kurzem Abstand.
   Bei «Bewegung reduzieren» stehen alle Werte sofort am Ziel. */
import { clamp, zahl, sobaldNahe, ciFarbe, reduziert } from './util.js';

const EASE = 'cubic-bezier(.2,.7,.2,1)';

export function diagramm(el) {
  const min = zahl(el, 'data-min', 0), max = zahl(el, 'data-max', 10);
  const dauer = clamp(zahl(el, 'data-dauer', 0.9), 0.2, 3);
  const fVon = zahl(el, 'data-farbe-von', 5), fBis = zahl(el, 'data-farbe-bis', 8);
  const spalten = Math.max(1, Math.round(zahl(el, 'data-spalten', 4)));
  const pct = v => clamp((v - min) / (max - min || 1), 0, 1) * 100;
  const plum = ciFarbe('plum-perfect', '#AA1351'), sea = ciFarbe('sea-cliff', '#A0C4DF');
  const snow = ciFarbe('pastel-snowbank', '#E8E9E9'), dunkel = ciFarbe('manganese-black', '#1D3149');
  const css = a => `rgb(${a.map(Math.round).join(',')})`;
  const mix = t => plum.map((x, i) => x + (sea[i] - x) * t);

  const teile = [...el.querySelectorAll('[data-art]')];
  const zeilen = [...el.querySelectorAll('.dia_zeile, [data-zeile]')];
  const farbZellen = teile.filter(t => t.getAttribute('data-art') === 'farbe');
  const folgen = teile.filter(t => t.getAttribute('data-art') === 'folge');

  const verzoegerung = t => {
    const art = t.getAttribute('data-art');
    const takt = zahl(t, 'data-takt', 0);
    if (art === 'farbe') { const i = farbZellen.indexOf(t); return ((i / spalten | 0) + (i % spalten)) * 0.07 + takt * 0.35; }
    if (art === 'folge') return folgen.indexOf(t) * 0.18 + takt * 0.35;
    const z = t.closest('.dia_zeile, [data-zeile]');
    const zi = z ? Math.max(0, zeilen.indexOf(z)) : 0;
    return zi * 0.09 + takt * 0.35;
  };

  /* Zielzustand je Teil */
  const ziel = t => {
    const art = t.getAttribute('data-art'), w = zahl(t, 'data-wert', 0);
    if (art === 'breite') return { width: pct(w) + '%' };
    if (art === 'lage') return { left: pct(w) + '%', opacity: '1' };
    if (art === 'spanne') {
      const a = pct(zahl(t, 'data-von', 0)), b = pct(zahl(t, 'data-bis', 0));
      return { left: Math.min(a, b) + '%', width: Math.abs(b - a) + '%' };
    }
    if (art === 'farbe') {
      const tt = clamp((w - fVon) / (fBis - fVon || 1), 0, 1);
      return { backgroundColor: css(mix(tt)), color: tt < 0.34 ? '#fff' : css(dunkel) };
    }
    if (art === 'folge') return { opacity: '1', transform: 'none' };
    if (art === 'fuellen') return { backgroundColor: css(plum), borderColor: css(plum), color: '#fff' };
    return {};
  };
  /* Anfangszustand je Teil */
  const anfang = t => {
    const art = t.getAttribute('data-art');
    if (art === 'breite') return { width: '0%' };
    if (art === 'lage') return { left: '0%', opacity: '0' };
    if (art === 'spanne') { const a = pct(Math.min(zahl(t, 'data-von', 0), zahl(t, 'data-bis', 0))); return { left: a + '%', width: '0%' }; }
    if (art === 'farbe') return { backgroundColor: css(snow), color: 'transparent' };
    if (art === 'folge') return { opacity: '0', transform: 'translateY(8px)' };
    if (art === 'fuellen') return { backgroundColor: 'transparent', color: '' };
    return {};
  };
  const setze = (t, s) => Object.assign(t.style, s);
  const text = (t, v) => {
    const st = Math.max(0, Math.round(zahl(t, 'data-stellen', 1)));
    const klein = Math.abs(v) < 0.5 * Math.pow(10, -st);
    const vz = (t.getAttribute('data-vorzeichen') || '').toLowerCase() === 'ja' && v > 0 && !klein ? '+' : '';
    t.textContent = vz + (klein ? 0 : v).toFixed(st).replace('-', '\u2212');
  };

  const zaehler = new Map();
  let timer;

  function fertig() {
    teile.forEach(t => {
      t.style.transition = 'none';
      setze(t, ziel(t));
      if (t.getAttribute('data-art') === 'zahl') text(t, zahl(t, 'data-wert', 0));
    });
  }

  function vorbereiten() {
    teile.forEach(t => {
      t.style.transition = 'none';
      setze(t, anfang(t));
      if (t.getAttribute('data-art') === 'zahl') text(t, 0);
    });
  }

  function los() {
    clearTimeout(timer);
    zaehler.forEach(id => cancelAnimationFrame(id));
    zaehler.clear();
    if (reduziert()) { fertig(); return; }
    vorbereiten();
    void el.offsetWidth;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      teile.forEach(t => {
        const art = t.getAttribute('data-art'), d = verzoegerung(t);
        if (art === 'zahl') {
          const w = zahl(t, 'data-wert', 0), start = performance.now() + d * 1000, dur = dauer * 1000;
          const tick = now => {
            const p = clamp((now - start) / dur, 0, 1), e = 1 - Math.pow(1 - p, 3);
            text(t, w * e);
            if (p < 1) zaehler.set(t, requestAnimationFrame(tick)); else zaehler.delete(t);
          };
          zaehler.set(t, requestAnimationFrame(tick));
          return;
        }
        const z = ziel(t);
        t.style.transition = Object.keys(z).map(k => `${k.replace(/[A-Z]/g, m => '-' + m.toLowerCase())} ${dauer}s ${EASE} ${d.toFixed(2)}s`).join(',');
        setze(t, z);
      });
    }));
    /* Sicherheit: steht nach Ablauf in jedem Fall am Ziel */
    const laengste = Math.max(0, ...teile.map(verzoegerung));
    timer = setTimeout(fertig, (laengste + dauer + 0.8) * 1000);
  }

  const reiter = el.closest('.w-tab-pane');
  if (!reiter || reiter.classList.contains('w--tab-active')) {
    sobaldNahe(el, vorbereiten, '30% 0px');
    sobaldNahe(el, los, '0px 0px -15% 0px');
  } else {
    fertig();
  }
  if (reiter) {
    let aktiv = reiter.classList.contains('w--tab-active');
    new MutationObserver(() => {
      const jetzt = reiter.classList.contains('w--tab-active');
      if (jetzt && !aktiv) los();
      aktiv = jetzt;
    }).observe(reiter, { attributes: true, attributeFilter: ['class'] });
  }
}
