// Format-Vorschau: je Format und Zustand ein Bildschirm je Section (Section beginnt unter der Navigation)
const { chromium } = require('playwright');
const fs = require('fs');
const FD = (process.env.FONTS || __dirname + '/../../fonts') + '/';
const CSS = fs.readFileSync(__dirname + '/vorschlag.css', 'utf8');
const ALLE_FORMATE = [[1920, 1080], [1536, 864], [1440, 900], [1366, 768], [1280, 800], [1024, 768], [768, 1024], [390, 844]];
const FORMATE = process.env.F ? ALLE_FORMATE.filter(f => process.env.F.split(',').includes(String(f[0]))) : ALLE_FORMATE;
const ALLE_Z = ['heute-heute', 'vorschlag-heute', 'heute-gestrafft', 'vorschlag-gestrafft', 'kopfA'];
const ZUST = process.env.Z ? process.env.Z.split(',') : ALLE_Z;
const OUT = process.env.OUT || __dirname + '/out';
fs.mkdirSync(OUT, { recursive: true });

const GESTRAFFT = () => {
  const setT = (sel, arr) => document.querySelectorAll(sel).forEach((e, i) => { if (arr[i]) e.textContent = arr[i]; });
  setT('.section_loesungen .bento_grid > .card p', ['Potenziale sichtbar machen und gezielt entwickeln.', 'Führung wirksam gestalten.', 'Talente gewinnen, gut integrieren und langfristig binden.', 'E-Learning, hybride Lernformate und KI-gestützte Lösungen.']);
  document.querySelectorAll('.section_vorgehen .step_lead').forEach(e => e.remove());
  setT('.section_vorgehen .step_content p', ['Mit Diagnostik, Daten und Gesprächen erfassen wir, wo Ihr Unternehmen steht, und legen messbare Ziele fest.', 'Wir machen sichtbar, was wirkt und wo Leistung verloren geht.', 'Programme, Begleitung und digitale Lösungen setzen genau dort an.', 'Mit denselben Instrumenten wie zu Beginn messen wir, was sich verändert hat.']);
  const eg = document.querySelector('.section_erfolge .layout-grid.is-erfolge'); if (eg) eg.remove();
  const es = document.querySelector('.erfolge_slider'); if (es) es.style.marginBottom = '0';
  const nav = document.querySelector('.erfolge_slider-nav'); if (nav) for (let i = 0; i < 3; i++) { const d = nav.querySelector('.w-slider-dot:not(.w-active)').cloneNode(true); nav.appendChild(d); }
  setT('.section_digital .digital_content > .section-head p', ['Was wir beraten, bauen wir auch: fünf digitale Lösungen mit künstlicher Intelligenz, entwickelt mit ETH juniors (ETH Zürich). Jede Lösung ist einzeln buchbar.']);
  setT('.section_digital .tools_grid .card p', ['Begleitet vom ersten Interesse bis zur Anstellung und senkt die Fluktuation.', 'Führt Schritt für Schritt von der Ausgangslage zur passenden Lösung.', 'Begleitet Entwicklung über den Trainingstag hinaus.', 'Macht Themen im Kundengespräch sichtbar und greifbar.', 'Gibt im Alltag konkrete Impulse für das nächste Kundengespräch.']);
  document.querySelectorAll('.partner_block, .section_partnerband').forEach(e => e.remove());
  const lt = document.querySelector('.section_insights .link-teaser-list'); if (lt) lt.remove();
};
const PARTNERBAND = () => {
  const pb = document.querySelector('.section_team .partner_block'); if (!pb) return;
  const s = document.createElement('section'); s.className = 'section_partnerband theme-hell';
  s.innerHTML = '<div class="padding-global"><div class="container-large"><div class="padding-section-large"></div></div></div>';
  pb.style.borderTop = '0'; pb.style.paddingTop = '0';
  s.querySelector('.padding-section-large').appendChild(pb);
  document.querySelector('.section_team').after(s);
};
const KOPF_A = () => {
  const hc = document.querySelector('.hero_content'); const k = hc.querySelector('.kicker'); if (k) k.remove();
  const icons = [...document.querySelectorAll('.orbit_tile')].map(t => [t.querySelector('img').src, t.querySelector('.orbit_tile-name').textContent.trim(), t.getAttribute('href')]);
  const a = document.createElement('a'); a.href = '#digital'; a.className = 'hero_digital';
  a.innerHTML = '<span class="hero_digital-label">ROWAPA Digital <span class="hero_digital-pfeil">→</span></span><span class="hero_digital-reihe">' +
    icons.map(([src, n]) => `<span class="hero_digital-item"><span class="hero_digital-kachel"><img src="${src}" alt=""></span><span class="hero_digital-name">${n}</span></span>`).join('') + '</span>';
  hc.appendChild(a);
  const st = document.createElement('style'); st.textContent = `
    .hero_digital{display:flex;flex-wrap:wrap;align-items:center;gap:.75rem 1.75rem;margin-top:clamp(.5rem,2svh,1.5rem);padding-top:clamp(.75rem,2svh,1.25rem);border-top:1px solid rgba(255,255,255,.22);color:#fff;text-decoration:none}
    .hero_digital-label{font-size:1rem;font-weight:600;color:#A0C4DF;letter-spacing:.01em}
    .hero_digital-pfeil{color:#A0C4DF;margin-left:.25rem}
    .hero_digital-reihe{display:flex;flex-wrap:wrap;gap:.75rem 1.5rem}
    .hero_digital-item{display:inline-flex;align-items:center;gap:.5rem;font-size:.9375rem;font-weight:600}
    .hero_digital-kachel{width:2.25rem;height:2.25rem;border-radius:6px;background:#486EA3;border:1px solid rgba(160,196,223,.55);display:inline-flex;align-items:center;justify-content:center}
    .hero_digital-kachel img{width:1.25rem;height:1.25rem}
    @media (min-width:992px){.padding-section-large.is-hero{padding-top:clamp(1.5rem,4svh,6rem) !important}.hero_content{row-gap:clamp(1rem,2.5svh,2rem) !important}}
    @media (max-width:479px){.hero_digital-name{display:none}.hero_digital-reihe{gap:.625rem}}`;
  document.head.appendChild(st);
};
const RUHE = `.nachoben, [class*="nachoben"], .zeiger, [data-zeiger-ring]{display:none !important} *{caret-color:transparent}`;

(async () => {
  const b = await chromium.launch();
  const index = fs.existsSync(OUT + '/index.json') ? JSON.parse(fs.readFileSync(OUT + '/index.json')) : {};
  for (const [w, h] of FORMATE) {
    for (const z of ZUST) {
      const [d, i] = z === 'kopfA' ? ['heute', 'heute'] : z === 'kopfAv' ? ['vorschlag', 'heute'] : z.split('-');
      const p = await b.newPage({ viewport: { width: w, height: h } });
      await p.route(/fastly\.net\/.*\.woff2/, r => { const m = r.request().url().match(/(TASA[A-Za-z]+-[A-Za-z]+)\.woff2/); m ? r.fulfill({ path: FD + m[1] + '.woff2', contentType: 'font/woff2' }) : r.continue(); });
      await p.goto('https://rowapa-website-2027-automation.webflow.io/home-v2?x=' + Date.now(), { waitUntil: 'load', timeout: 90000 });
      await p.waitForTimeout(1500);
      await p.addStyleTag({ content: RUHE });
      if (d === 'vorschlag') { await p.addStyleTag({ content: CSS }); await p.evaluate(PARTNERBAND); }
      if (i === 'gestrafft') await p.evaluate(GESTRAFFT);
      if (z === 'kopfA' || z === 'kopfAv') await p.evaluate(KOPF_A);
      await p.evaluate(() => document.fonts.ready);
      // einmal durchscrollen (Einblendungen, Lazy-Bilder)
      await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 500) { scrollTo(0, y); await new Promise(r => setTimeout(r, 90)); } scrollTo(0, 0); });
      await p.waitForTimeout(800);
      const navH = await p.evaluate(() => Math.round(document.querySelector('.navbar_component').getBoundingClientRect().height));
      const sektionen = await p.evaluate(() => {
        const liste = [{ key: 'start', el: document.querySelector('.startscreen_wrapper') }];
        document.querySelectorAll('section[class*="section_"]').forEach(s => { if (s.closest('.startscreen_wrapper')) return; const k = [...s.classList].find(c => c.startsWith('section_')).replace('section_', ''); if (k !== 'hero') liste.push({ key: k, el: s }); });
        return liste.filter(x => x.el && !x.el.closest('footer')).map(x => x.key);
      });
      const nurKopf = z === 'kopfA' || z === 'kopfAv';
      const res = [];
      for (const key of (nurKopf ? ['start'] : sektionen)) {
        const info = await p.evaluate(([key, navH]) => {
          const el = key === 'start' ? document.querySelector('.startscreen_wrapper') : document.querySelector('.section_' + key);
          const top = el.getBoundingClientRect().top + scrollY;
          const ziel = key === 'start' ? 0 : top - navH;
          scrollTo(0, ziel);
          const r = el.getBoundingClientRect();
          const pad = el.querySelector('.padding-section-large');
          const pb = pad ? parseFloat(getComputedStyle(pad).paddingBottom) : 0;
          const hoehe = key === 'start' ? Math.round(r.bottom) : Math.round(r.height - pb);
          return { ziel, hoehe, ganz: Math.round(r.height) };
        }, [key, navH]);
        await p.waitForTimeout(key === 'team' || key === 'cas' ? 1600 : 900);
        const sicht = key === 'start' ? h : h - navH;
        const datei = `${w}x${h}_${z}_${key}.png`;
        await p.screenshot({ path: OUT + '/' + datei });
        res.push({ key, datei, benoetigt: info.hoehe, sicht, passt: info.hoehe <= sicht });
      }
      const seite = await p.evaluate(() => document.documentElement.scrollHeight);
      index[`${w}x${h}|${z}`] = { w, h, z, navH, seite, sektionen: res };
      console.log(`${w}x${h} ${z.padEnd(20)} ` + res.map(r => `${r.key}:${r.passt ? 'ok' : '+' + (r.benoetigt - r.sicht)}`).join(' ') + `  Seite ${(seite / h).toFixed(1)} Bildschirme`);
      fs.writeFileSync(OUT + '/index.json', JSON.stringify(index, null, 1));
      await p.close();
    }
  }
  await b.close();
})();
