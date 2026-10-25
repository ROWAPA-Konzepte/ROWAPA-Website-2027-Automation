# 01 · CMS-Architektur & Komponenten-Konzept

**Projekt:** ROWAPA Website Transformation (68 Seiten)
**Webflow-Zielprojekt:** „ROWAPA Website 2027 Automation“ (Site-ID `6addf1532819c0aacc74a496`, aktuell leer: 1 Seite „Home“, 0 Collections)
**Phase:** 1 (Analyse) + 2 (Architektur) · Stand 25.10.2026, Rev. 3 (Live-Sichtung der Baseline + Redirect-Mapping) · Status: **Entwurf zur Freigabe**
**Wichtig:** Es wurden **keine** schreibenden Webflow-API-Aufrufe ausgeführt. Alle Aussagen über die Baseline beruhen auf reinen Lesezugriffen.

---

## 0. Quellen & Analyse-Basis

| Quelle | Was daraus übernommen wurde |
|---|---|
| `ROWAPA_Sitemap_v4_CMS.docx` | 8 CMS-Seitentypen (37 Detailseiten), 7 offene Collections, 29 Unikat-Seiten = 68 Seiten |
| `ROWAPA-Website-v11.html` | 69 `div.page`-Container (68 Seiten + interne Seiten-Übersicht), Section-Inventar je Seite, Inhaltsfelder, Navigation (Mega-Menü, DE/EN/FR/IT), Footer |
| `Style Guide ROWAPA_2026-komprimiert.pdf` | Farbpalette, Typo-Hierarchie (in % der Canvas-Höhe), Zeilenhöhe 120–140 %, 12-Spalten-Raster, Logo-Regeln, Grafikelemente |
| `ROWAPA_Visual Guidelines_compressed.pdf` | Bildsprache, Diagonal-System (max. 2 Elemente pro Bild, nie zentriert, 60–80 % Deckkraft), **Kategorie-Farblogik** (Leadership = Great Serpent, Sales = Plum Perfect, HR/Performance = Sea Cliff, Corporate = Manganese Black), Unterschied Blog- vs. Produktseiten |
| Baseline `rowapa-2027.webflow.io` | **Live gesichtet am 25.10.2026** (Kapitel 0.2): HTML, berechnete Styles und Screenshots Desktop 1440 × 900 und Mobile 390 × 844. Zusätzlich hat die Webflow-API der Site „ROWAPA 2027“ (`6ad52d817d06d44129cd8bc9`) **nur lesend** Seiten, Collections, Variablen und Fonts geliefert. |
| Repo `ROWAPA-Konzepte/rowapa-website` (Commit `8b8e5eb`, der live eingebunden ist) | Quelle des Custom Codes der Baseline (`dist/rowapa.css`, `dist/rowapa.js`, Schriften, Fotos, Partner-Logos). Nur gelesen |

### 0.1 Erkenntnisse aus der Baseline (Webflow-API, nur lesend)

- **Inhalt:** 1 statische Seite (Home) + 10 Collections (Kunden, Partner, Werkzeuge, Kundenstimmen, FAQ, Wissen, Aktuelles, Team, Insights, Blickpunkt).
- **Farb-Variablen** entsprechen der CI. Dazu kommt **„Tiefsee“ `#111D2C`**. Laut Repo-README ist das kein eigener CI-Ton, sondern *Manganese Black 60 % gemischt mit Schwarz*, verwendet für die dunklen Flächen (ROWAPA Digital, Kontakt, Footer). → Im Neubau wird daraus der abgeleitete Token `manganese-deep`, keine neue Markenfarbe.
- **Abstände** in der Baseline: 48 / 70 / 30 / 44 px, also **nicht** im 8px-Raster. Im Clean Slate werden sie normalisiert (48 / 64 / 32 / 48).
- **Max. Seitenbreite:** Baseline 1360 px, Prototyp 1160 px. → Vorschlag: `container-large` = 1280 px (8 × 160), `container-medium` = 1024 px, `container-small` = 768 px.
- **Gute Praxis, die wir übernehmen:** Hilfetexte an jedem Feld, ein Zahlenfeld „Reihenfolge“, ein Schalter „Platzhalter“ für nicht freigegebene Inhalte (entspricht den `*`-Markierungen im Prototyp), ein Feld „Logo-Skalierung“ für optisch gleich grosse Logos.
- **Anti-Pattern, das wir vermeiden:** In der Collection „Wissen“ stehen Inhaltstyp und Icon-Name als Freitext (z. B. „book-open“), in „Insights“ Datum und Kategorie als Freitext. Im Neubau gibt es dafür DateTime-, Option- und Referenzfelder sowie getrennte Collections pro Format.

### 0.2 Visuelle Baseline-Analyse (Live-Sichtung 25.10.2026)

**Vorgehen:** Die Seite wurde im Headless-Chromium gerendert. Einige Assets liegen auf CDNs, die in dieser Umgebung gesperrt sind (`cdn.jsdelivr.net`, `cdnjs.cloudflare.com`, `d3e54v103j8qbb.cloudfront.net`). Diese wurden 1:1 aus denselben Quellen lokal eingespielt: Repo-Commit `8b8e5eb` sowie three.js r128, jQuery 3.5.1 und Lenis 1.1.13 aus npm. Nicht geladen wurden nur das Webflow-Badge und Cloudflare Turnstile (Spam-Schutz des Formulars); beides spielt für die Gestaltung keine Rolle.
**Screenshots (Kontaktbögen):** `exports/baseline/home-desktop-0…2.jpg`, `exports/baseline/home-mobile-0…2.jpg`

**a) Aufbau der Startseite (Header, 14 Inhaltsblöcke, Footer · Reihenfolge wie live)**

| # | Kapitel (live) | Gestaltung | Neubau: Komponente |
|---|---|---|---|
| 1 | Header | Logo links, Mega-Menü (5 Bereiche), Button „KONTAKT“ in Plum, Sprachumschalter DE/EN/FR/IT. Mobile: Burger-Menü | `Global / Navbar` |
| 2 | Hero | Dunkelblauer Grund mit animiertem **Punktemeer** (WebGL), dreizeilige H1 mit wechselnder Hervorhebung, Plum-Unterstreichung, kurzer Lead | `Section / Hero` · Variante „Claim dunkel“ + Grafik-Modul (siehe d) |
| 3 | Lösungen für Unternehmen | **Bento-Raster**: grosse dunkle Featured-Karte (Vertriebsperformance mit 3D-Punktfigur) in der Mitte, 4 helle Karten mit Pfeil-Button. Kapitel-Akzent: kurzer Plum-Strich über der H2 | **neu:** `Section / Bento Grid` + `Card / Feature` (Variante „Featured dunkel“) |
| 4 | Kundenlogos | Laufband (u. a. AXA, CSS, ERGO, Visana, die Mobiliar, Raiffeisen) | **neu:** `Section / Logo Marquee` (IX2-Loop, nativ) |
| 5 | Was uns antreibt | Leitsatz baut sich Wort für Wort mit dem Scroll auf, Zähler „20 Jahre“ in Plum | **neu:** `Section / Statement` + `Card / Stat` |
| 6 | Unser Vorgehen | Sticky-Kapitel, **4 Phasen** (Analysieren · Verstehen · Handeln · Messen), nummerierte Plum-Badges | `Global / So arbeiten wir` (jetzt 4 Phasen, siehe Korrektur in 5.2) |
| 7 | ROWAPA Digital | Tiefsee-Grund, Punktkugel „Wissensplattform“ mit 5 Werkzeugen im Orbit, 5 Karten (Anker, Kompass, Lotse, Segel, Logbuch), Box „Das Fundament“ | `Card Grid` (Collection List Lösungswelten) + `Note Box` + Grafik-Modul |
| 8 | Unsere Erfolge | Stimmen-Slider (1/8): Foto 4:3 links, grosse Kernaussage, Zitat, Name, Funktion | **neu:** `Section / Quote Slider` (CMS Stimmen) |
| 9 | Die Menschen hinter ROWAPA | Team-Leiste mit 5 Porträts (4:5, dunkler Hintergrund), Links „Wer wir sind · Video“ und „Team kennenlernen“ | `Section / Team Grid` (Variante „Leiste“) |
| 10 | Partner und Zertifizierungen | Logo-Raster 7 × 2 auf Sea-Cliff-Fläche | `Section / Logo Row` (Variante „Raster“) |
| 11 | Deine persönliche Entwicklung | 3 Wege-Karten mit Foto, Tag (Privatpersonen · Broker Excellence · Female Empowerment) und Pfeil-Link | `Card Grid` + `Card / Teaser` (Variante „Bild oben + Tag“) |
| 12 | Im Blickpunkt | CAS-Teaser auf Great-Serpent-Fläche mit Gruppenfoto, Eckdaten-Chips, Plum-Button und Zweitlink (Zoom-Infosession) | `Global / Spotlight CAS` |
| 13 | Neueste Insights | Blog-Karten (Datum · Typ, Titel, Kategorie), Links „Live-Webinare“ und „ROWAPA TV“, darunter Newsletter-Box | `Section / Content Feed` + `Section / Newsletter` |
| 14 | Häufige Fragen | Accordion mit Nummern 01–06 und quadratischen Plus-Buttons | `Section / FAQ` |
| 15 | Kontakt + Footer | Ansprechpartnerin im runden Porträt mit umlaufendem Wertering („Souverän · Inspirierend · Klar“), Telefon und E-Mail; Footer auf Tiefsee mit 3 Linkspalten, Newsletter und grossem „ROWAPA“-Schriftzug | **neu:** `Section / Contact Person` · `Global / Footer` |

**b) Gemessene Design-Werte vs. CI**

| Merkmal | Baseline (gemessen) | CI / Styleguide | Konsequenz für den Neubau |
|---|---|---|---|
| Schrift Headlines/Body | **TASA Orbiter Display** 400/500/600/700, selbst gehostet (OFL-Lizenz, Dateien im Repo) | TASA Bold / Semibold / Regular | Woff2-Dateien aus dem Repo als **native Webflow Custom Fonts** hochladen. Kein Code, OFL erlaubt das |
| Schrift Akzente | **TASA Explorer 800** (Google Fonts), Versalien, Laufweite +0,14 em, 13,8 px | TASA Explorer Extrabold, Versalien, mehr Laufweite | übernehmen (native Google-Fonts-Integration) |
| H1 | 74,9 px, Zeilenhöhe 1.04 | 5,5–6 % Canvas-Höhe (≈ 50–54 px bei 900 px), Zeilenhöhe 120–140 % | Die Baseline liegt deutlich über der CI. **Entscheidung E11** |
| H2 | 63,4 px, Laufweite −0,02 em | 3,5–4 % (≈ 32–36 px) | ebenfalls E11 |
| H3 Karten | 22,3 px (gross 34,6 px) | 2,5–3 % (≈ 22–27 px) | im Rahmen |
| Body | 17 px, Zeilenhöhe 1.55, Farbe `#22354D` | 1,6–2 % (≈ 14–18 px) | auf **16 / 18 px** normalisieren (8px-System). Textfarbe = Manganese |
| Seitengrund | `#F6F7F8` (zwischen Weiss und Snowbank) | White / Pastel Snowbank | Flächen nur aus CI-Tönen: White, Snowbank, Sea-Cliff-Tint, Manganese, Manganese-Deep |
| Kapitel-Farben | Farbfluss: Kapitel wechseln weich zwischen White, Snow, Sea Cliff, Serpent, Manganese, Tiefsee | – | als **Theme-Varianten** der Sections (Variable Modes) umsetzen, ohne Scroll-Überblendung |
| Kapitel-Akzent | kurzer Plum-Strich über jeder H2 | Plum für Akzente | `Section Head` bekommt den Akzentstrich (nativ) |
| Buttons | Primär Plum mit Pfeil, Sekundär Outline; quadratische Pfeil-Icons (Manganese/Plum) vor Textlinks | Plum für CTAs | übernehmen: `Element / Button` + Variante „Icon-Link“ |
| Diagonal-Ribbon | **nicht sichtbar**, ersetzt durch Punkt-Grafiken und Plum-Unterstreichung | Diagonal Ribbon als wiederkehrendes Element (CLAUDE.md) | **Entscheidung E12** |

**c) Technische Umsetzung der Baseline**

- **Custom Code ≈ 200 KB:** `rowapa.css` 108 KB und `rowapa.js` 95 KB, eingebunden über jsDelivr aus dem Repo. Dazu kommen **three.js** (WebGL, 6 Canvas-Flächen), **Lenis** (Smooth Scroll) und jQuery.
- Die JS-Module laut Repo: Punktemeer im Header, Zoom in die Themenlinien, 3D-Punktfiguren, Farbfluss zwischen den Kapiteln, Orbit „ROWAPA Digital“, Wort-für-Wort-Leitsatz, Sticky-Halte-Strecken, Logo-Laufband, Zitat-Wechsel, Wertering, Footer-Schriftzug und Icon-Sprite (Lucide).
- Das Menü verlinkt bisher nur Anker auf der Startseite (`#themen`, `#pfade` …). Die Baseline ist eine **Einseiten-Vorschau**; die übrigen 67 Seiten existieren noch nicht.
- **Gefunden: alte URL-Struktur von rowapa.ch.** Blog-Artikel liegen unter `rowapa.ch/blog/{slug}/` (z. B. `/blog/zeitmanagement-im-vertrieb/`), die Blog-Übersicht unter `/blog-news/`, das CAS unter `/cas-professional-leadership-for-finance/`. → Behalten wir den Collection-Slug `blog`, bleiben **alle Blog-URLs 1:1 erhalten** (siehe E4).

**d) Bewertung gegen CLAUDE.md**

Die Baseline erfüllt die Vorgabe „Custom Code streng limitiert“ **nicht**: Auch Layout, Farben und Abstände hängen teilweise am externen CSS, und die Pflege setzt Klassen voraus, die nicht umbenannt werden dürfen. Der Neubau übernimmt deshalb **Look & Feel, nicht die Technik**:

| Effekt | Neubau |
|---|---|
| Layout, Farben, Typo, Abstände, Kapitel-Themes, Buttons, Karten | **100 % nativ** (Variablen, Client-First-Klassen, Komponenten) |
| Sticky-Kapitel, Einblendungen, Logo-Laufband, Accordion, Wertering-Rotation | **nativ** mit IX2 (Wertering als SVG-Bild, das sich dreht) |
| Wort-für-Wort-Leitsatz, Zahlen-Zähler | vereinfachen (zeilenweise IX2-Einblendung, Zahl statisch) oder ins Grafik-Modul |
| Farbfluss zwischen Kapiteln, Smooth Scroll (Lenis) | **streichen** (feste Kapitel-Themes; natives Scrollen ist barrierefreier) |
| Punktemeer, 3D-Punktfiguren, Orbit | **erlaubte Ausnahme** („komplexe Grafiken, die Webflow nativ nicht bietet“): ein gekapseltes Grafik-Modul, das sich an eine Komponente mit Fallback-Bild hängt. Fällt es aus oder ist „reduzierte Bewegung“ aktiv, erscheint das Bild → **Entscheidung E10** |

---

## 1. Architektur-Überblick

```
                      ┌────────────── Taxonomie & Bausteine (Hilfs-Collections) ──────────────┐
                      │  Kategorien · FAQ · Stimmen · Organisationen · Werkzeuge              │
                      └──────▲─────────▲──────────▲──────────────▲──────────────▲─────────────┘
                             │ Ref     │ Multi-Ref│              │              │
 ┌───────── B2B ─────────┐   │         │          │   ┌──────── B2C ─────────┐  │
 │ Themenlinien (5)      │◄──┼── Hebel/Lösungen (9)   │ Kategorie-Hubs (3)   │◄─┼─ Programme (6)
 │                       │   │                        │                      │◄─┼─ Mentorings (3)
 │ Lösungswelten (5)     │   │                        │ Selbstchecks (3)     │  │
 └───────────────────────┘   │                        └──────────────────────┘  │
 Partnerrollen (3)           │
 ┌───────── Content (offen, wachsend) ──────────────────────────────────────────┴───────┐
 │ Blog-Artikel · Downloads · Webinare · Videos (ROWAPA TV) · Kurse & Termine ·         │
 │ Personen/Dozent:innen · Referenzen/Case-Stories                                      │
 └──────────────────────────────────────────────────────────────────────────────────────┘
```

**Grundsätze für die No-Code-Wartbarkeit**

1. **Eine Information hat genau einen Ort.** Personen, FAQs, Stimmen und Logos werden einmal gepflegt und überall per Referenz eingebunden.
2. **Feste Felder statt Freitext-HTML.** Wiederkehrende Karten-Gruppen (z. B. „Für wen“, 3 Schritte) bekommen nummerierte Felder. Leere Felder blenden sich über bedingte Sichtbarkeit aus. Rich Text gibt es nur für Fliesstext.
3. **Auswahl statt Tippen.** Status, Format, Funnel-Typ und Branche sind Option-Felder. Sichtbare Labels, die übersetzt werden müssen (DE/EN/FR/IT), kommen aus der Referenz-Collection „Kategorien“, weil Option-Labels sich nicht sauber lokalisieren lassen.
4. **Hilfetext an jedem Feld** (Bildformat, Zeichenlimit, Beispiel). Im Report stehen die Hilfetexte in der Spalte „Hinweis“.
5. **Pflicht nur, wenn es wirklich nötig ist.** Pflichtfelder können das Anlegen von Draft-Items blockieren (Vorgabe: alle unvollständigen Items als Draft). Deshalb sind **Bilder, Dateien und Links nie Pflicht**. Ihre Vollständigkeit wird stattdessen über eine Publish-Checkliste und den Schalter „Platzhalter“ gesichert.
6. **Feldgruppen** (native Webflow Field Groups) gliedern jede Collection im Editor: *Basis · Hero · Inhalte · Beziehungen · Abschluss-CTA · SEO*.

---

## 2. Collections laut Sitemap

### 2.1 Übersicht

| # | Collection (Sitemap) | Art | Einträge | Template-URL (Vorschlag) | Speist |
|---|---|---|---|---|---|
| 1 | **Themenlinien** | Seitentyp | 5 | `/themen/{slug}` | Für Organisationen, Home |
| 2 | **Hebel / Lösungen** | Seitentyp | 9 | `/loesungen/{slug}` | Themenlinien-Hubs |
| 3 | **Lösungswelten** (Digitale Lösungen) | Seitentyp | 5 | `/digital/{slug}` | Digitale Lösungen, Home |
| 4 | **Kategorie-Hubs (B2C)** | Seitentyp | 3 | `/entwicklung/{slug}` | Meine persönliche Entwicklung |
| 5 | **Programme / Angebote** | Seitentyp | 6 | `/programm/{slug}` | Kategorie-Hubs |
| 6 | **Mentorings** | Seitentyp | 3 | `/mentoring/{slug}` | Kategorie-Hubs |
| 7 | **Selbstchecks** | Seitentyp | 3 | `/check/{slug}` | Selbstchecks-Übersicht, Kategorie-Hubs |
| 8 | **Partnerrollen** | Seitentyp | 3 | `/partnerschaft/{slug}` | Partner werden |
| 9 | **Blog-Artikel** | offen | ~58 + neue | `/blog/{slug}` | Wissen & Impulse, Blog-Übersicht, Home |
| 10 | **Downloads** | offen | ~16 | `/downloads/{slug}` | Downloads-Übersicht |
| 11 | **Webinare** | offen | laufend | `/webinar/{slug}` (Übersicht bleibt `/webinare`) | Webinare-Übersicht |
| 12 | **Videos (ROWAPA TV)** | offen | laufend | `/tv/{slug}` | TV-Übersicht |
| 13 | **Kurse & Termine** | offen | laufend | `/kurse/{slug}` | Broker Excellence · Kurse |
| 14 | **Personen / Dozent:innen** | offen | Team + Dozent:innen | `/experten/{slug}` (wie heute auf rowapa.ch) | Team, Dozenten, Dozentinnen, Autor:innen |
| 15 | **Referenzen / Case-Stories** | offen | 2–3 zum Start | `/cases/{slug}` | Unsere Kunden, Themenlinien, Lösungswelten |

> **Slug-Regel:** Die Collection-Slugs unterscheiden sich bewusst von den Slugs der Unikat-Übersichtsseiten (z. B. Übersicht `/selbstchecks`, Detail `/check/salesstep`). Sonst gibt es Pfad-Konflikte zwischen statischer Seite und Collection. Webflow erzeugt CMS-URLs nur einstufig (`/collection/item`). Die Hierarchie zeigen wir deshalb über Breadcrumbs aus Referenzfeldern, nicht über die URL.

### 2.2 Empfohlene Hilfs-Collections (nicht in der Sitemap, für No-Code nötig)

| # | Collection | Zweck | Warum nicht als Freitext |
|---|---|---|---|
| 16 | **Kategorien** | Themen-Taxonomie (Sales, Leadership, Persönlichkeit, Recruiting, ROWAPA …) mit Farbwelt | steuert Filter, Farbcodierung (Visual Guidelines 5.5) und Kategorie-Seiten |
| 17 | **FAQ** | Fragen & Antworten | ca. 27 FAQ-Blöcke im Prototyp, viele Fragen kommen mehrfach vor |
| 18 | **Stimmen** (Testimonials) | Zitate und Video-Testimonials | Sektion „Stimmen aus der Praxis“ auf ca. 19 Seiten |
| 19 | **Organisationen** | Kunden-Logos, Partner, Verbände, Lizenzgeber | Logo-Bänder, „Partner & Kooperationen“, „Anerkannt: Cicero / SAQ / gutberaten.de“, ETH juniors, Trihow |
| 20 | **Werkzeuge** | Diagnostik-Tools & Methoden (SalesStep, Reiss-Profil, Bluquist …) | „Diagnostik & Tools“ auf Themenlinien und Hebeln, „Tool × Einsatzbereich“ auf Tools & Methoden |

> ⚠️ **Plan-Limit:** 15 + 5 = **20 Collections**. Das ist genau die Obergrenze des Webflow **CMS**-Site-Plans; der **Business**-Plan erlaubt 40. Ohne Reserve sind spätere Erweiterungen (z. B. Termine, E-Learnings, Stellen) blockiert. Empfehlung: **Business-Plan** (auch wegen Datei-Uploads in Formularen und Formular-Kontingent) **oder** Programme und Mentorings zusammenlegen (siehe Abschnitt 7, Entscheidung E1). *Plan-Limits vor dem Build gegen die aktuelle Webflow-Preisseite prüfen.*

### 2.3 URL-Plan & Weiterleitungen (Basis: ROWAPA Alt-URL-Liste, 166 URLs)

**Grundsatz: Bestehende URLs schlagen neue „schönere“ URLs.** Wo es auf rowapa.ch eine inhaltlich gleiche Seite gibt, übernimmt der Neubau ihren Slug. Das sichert den SEO-Wert und spart Redirects.

**Slugs der 29 Unikat-Seiten** (flach, ohne Ordner: Webflow-Ordner haben keine eigene Startseite, ein Hub wie `/broker-excellence` könnte also nicht gleichzeitig Ordner sein. Die Hierarchie zeigt die Breadcrumb):

| Seite | Slug | | Seite | Slug |
|---|---|---|---|---|
| Home | `/` | | So arbeiten wir | `/so-arbeiten-wir` |
| Für Organisationen | `/fuer-organisationen` | | Tools & Methoden | `/tools-methoden` |
| Meine persönliche Entwicklung | `/persoenliche-entwicklung` | | Unsere Kunden | `/referenzen` ★ |
| Broker Excellence (Hub) | `/broker-excellence` | | Über uns | `/ueber-uns` |
| Für Brokerfirmen | `/broker-excellence-brokerfirmen` | | Team | `/team` ★ |
| Für einzelne Broker | `/broker-excellence-broker` | | Kontakt | `/kontakt` ★ |
| Kurse-Übersicht | `/broker-excellence-kurse` | | Wissen & Impulse | `/wissen` |
| Dozenten-Übersicht | `/broker-excellence-dozenten` | | Blog-Übersicht | `/blog-news` ★ |
| Female Empowerment (Hub) | `/female-empowerment` | | Downloads-Übersicht | `/wissen-downloads` |
| SOUVERÄN ICH | `/souveraen-ich` | | Webinare-Übersicht | `/webinare` ★ |
| Keynotes | `/keynotes` | | ROWAPA TV-Übersicht | `/rowapa-tv` ★ |
| Dozentinnen-Übersicht | `/female-empowerment-dozentinnen` | | Partner werden | `/partner-werden` |
| CAS Leadership | `/cas-professional-leadership-for-finance` ★ | | Partner & Kooperationen | `/partner-kooperationen` |
| Selbstchecks | `/selbstchecks` | | E-Learnings | `/e-learnings` |
| Persönliche Beratung | `/persoenliche-beratung` | | | |

★ = identisch mit der heutigen URL auf rowapa.ch.

**Collection-Slugs, die alte URLs 1:1 erhalten:** `blog` (58 Artikel), `downloads` (16 Downloads), `experten` (14 Personenprofile). Deshalb heissen die Webinar-Detailseiten `/webinar/{slug}` (die Übersicht behält `/webinare`) und die Personen-Collection `/experten/{slug}`.

**Mapping-Ergebnis** (Datei `exports/02_redirect_mapping.xlsx`: die gelieferte Liste, ausgefüllt in den Spalten „Neue URL“ und „Redirect“, dazu „Status“ und „Begründung“):

| Ergebnis | Anzahl | Beispiele |
|---|---|---|
| **none · 1:1 identisch** | 82 | alle 58 Blog-Artikel, 16 Downloads, `/team`, `/kontakt`, `/webinare`, `/rowapa-tv`, `/blog-news`, `/referenzen`, CAS Leadership |
| **none · 1:1, aber prüfen** | 14 | `/experten/…`: bleibt nur bestehen, wenn die Person weiter ein Profil hat, sonst 301 → `/team` |
| **none · entfällt (404)** | 4 | 3 interne Feedback-Seiten, Shop-Kategorie „Rechnung“ |
| **301 · sicher** | 51 | Shop- und Seiten-Doppel auf *eine* neue Seite (z. B. 3 × Berater-Zertifizierung, 2 × je Mentoring), Tests → Selbstchecks, Begleitungen → Training on the Job |
| **301 · Vorschlag – prüfen** | 15 | Angebote ohne Entsprechung in Sitemap v4 (siehe E14) |
| **Summe** | **166** | Redirect-Einträge in Webflow: ca. 63 (die 4 `/category/…`-URLs deckt eine einzige Platzhalter-Regel ab) |

**Umsetzung in Webflow:** Site Settings → Publishing → 301 Redirects, nach dem Muster `/alter-pfad` → `/neuer-pfad`. Für die Kategorie-Archive genügt eine Regel mit Platzhalter (`/category/(.*)` → `/kategorie/%1`). Beim Go-Live-Test prüfen, wie die alten URLs mit Schrägstrich am Ende (`/kontakt/`) aufgelöst werden.

---

## 3. Feld-Schemas

**Legende:** Typen = native Webflow-Feldtypen (`PlainText`, `RichText`, `Image`, `MultiImage`, `VideoLink`, `Link`, `Email`, `Phone`, `Number`, `DateTime`, `Switch`, `Color`, `Option`, `File`, `Reference`, `MultiReference`). **Pflicht** = Ja/Nein. `Name` und `Slug` sind Systemfelder und immer Pflicht.

### 3.0 Wiederverwendbare Feldblöcke

Damit alle Seitentyp-Collections gleich funktionieren, verwenden sie dieselben Blöcke. Redakteur:innen finden dadurch überall die gleiche Struktur vor.

**Block B · Basis & Steuerung (6 Felder)**

| Feld | Slug | Typ | Pflicht | Hinweis |
|---|---|---|---|---|
| Name | `name` | PlainText | Ja | Interner Name und Breadcrumb-Label, z. B. „Vertriebsperformance“ |
| Slug | `slug` | PlainText | Ja | Nur Kleinbuchstaben und Bindestriche. Nach dem Livegang nicht mehr ändern (bricht Links) |
| Teaser-Text | `teaser` | PlainText | Ja | Max. 180 Zeichen, erscheint auf Karten in Übersichten |
| Karten-Kennung | `kennung` | PlainText | Nein | Kleines Label über Kartentiteln, z. B. „1.1“, „Hebel 2“ |
| Reihenfolge | `reihenfolge` | Number | Nein | Kleinere Zahl steht weiter vorne |
| Platzhalter | `platzhalter` | Switch | Nein | An = Inhalt noch nicht freigegeben, Seite zeigt den Hinweis „*Platzhalter“ |

**Block H · Hero (4 Felder)**

| Feld | Slug | Typ | Pflicht | Hinweis |
|---|---|---|---|---|
| Kicker | `hero-kicker` | PlainText | Ja | Label über der H1 (TASA Explorer, Versalien), z. B. „Für Organisationen · Vertriebsperformance“ |
| Hero-Titel (H1) | `hero-titel` | PlainText | Ja | Max. 70 Zeichen, ein klarer Nutzen-Satz |
| Lead | `hero-lead` | PlainText | Ja | 1–2 Sätze, max. 220 Zeichen |
| Hero-Bild | `hero-bild` | Image | Nein | Querformat 4:3, min. 1600 px, Bildsprache laut Visual Guidelines. Alt-Text im Bildfeld pflegen |

**Block C · Abschluss-CTA (6 Felder)**

| Feld | Slug | Typ | Pflicht | Hinweis |
|---|---|---|---|---|
| CTA-Titel | `cta-titel` | PlainText | Ja | z. B. „Sprechen wir über Ihre Ausgangslage.“ |
| CTA-Text | `cta-text` | PlainText | Nein | 1 Satz |
| CTA-Button 1 · Text | `cta-1-text` | PlainText | Ja | Primär (Plum), z. B. „Erstgespräch vereinbaren“ |
| CTA-Button 1 · Link | `cta-1-link` | Link | Nein | Leer = Standard-Kontaktseite |
| CTA-Button 2 · Text | `cta-2-text` | PlainText | Nein | Sekundär (Outline). Leer = Button ausgeblendet |
| CTA-Button 2 · Link | `cta-2-link` | Link | Nein | |

**Block S · SEO (3 Felder)**

| Feld | Slug | Typ | Pflicht | Hinweis |
|---|---|---|---|---|
| SEO-Titel | `seo-titel` | PlainText | Nein | Max. 60 Zeichen. Leer = Name + „ · ROWAPA“ |
| Meta-Beschreibung | `seo-beschreibung` | PlainText | Ja | 140–160 Zeichen |
| Social-Bild | `seo-bild` | Image | Nein | 1200 × 630 px. Leer = Hero-Bild |

**Block K · 3 Karten (7 Felder)**: `{x}-titel` (PlainText) + je Karte `{x}-1-titel`, `{x}-1-text` … bis `{x}-3-…` (PlainText). Leere Karten blenden sich aus.
**Block V · 3 Schritte (8 Felder)**: `{x}-titel`, je Schritt `{x}-1-titel`, `{x}-1-text` … bis 3, dazu `{x}-hinweis` (PlainText, für die Hinweis-Box unter den Schritten).

> Die Blöcke K und V sind Felder **in der jeweiligen Collection**, keine eigenen Collections. Webflow hat keine Repeater-Felder; feste Slots mit bedingter Sichtbarkeit sind die robusteste No-Code-Lösung. Die Zahl 3 folgt dem Prototyp (alle Karten- und Schrittgruppen haben dort 3 Einträge) und der CI-Vorgabe „Struktur statt Dekoration“.

---

### 3.1 Themenlinien (5) · `/themen/{slug}`

Einträge: Vertriebsperformance · Mensch & Potenzial · Leadership & Team · Recruiting & Retention · Digitale Lösungen

| Feld | Slug | Typ | Pflicht | Hinweis |
|---|---|---|---|---|
| *Block B* (6) | | | | |
| *Block H* (4) | | | | |
| Farbwelt | `farbwelt` | Option | Ja | Great Serpent · Plum Perfect · Sea Cliff · Manganese Black. Steuert Akzentlinie und Karten-Akzent |
| Hebel · Abschnittstitel | `hebel-titel` | PlainText | Ja | z. B. „Vier Hebel für messbare Vertriebsleistung“. Die Karten kommen automatisch aus „Hebel“ |
| Hebel · Intro | `hebel-intro` | PlainText | Nein | |
| Diagnostik & Tools · Titel | `tools-titel` | PlainText | Nein | Leer = Sektion ausgeblendet |
| Diagnostik & Tools · Text | `tools-text` | RichText | Nein | |
| Werkzeuge | `werkzeuge` | MultiReference → Werkzeuge | Nein | Tool-Badges in der Sektion |
| Vorteil · Titel | `vorteil-titel` | PlainText | Ja | „Ihr Vorteil: …“ |
| Vorteil · Text | `vorteil-text` | RichText | Ja | |
| Arbeitsweise anzeigen | `arbeitsweise-anzeigen` | Switch | Nein | Blendet die globale Komponente „So arbeiten wir“ ein |
| FAQ | `faq` | MultiReference → FAQ | Nein | |
| *Block C* (6) · *Block S* (3) | | | | |

**≈ 30 Felder.** Case-Stories werden automatisch über `Referenzen.themenlinien` (enthält aktuellen Eintrag) gefiltert.

---

### 3.2 Hebel / Lösungen (9) · `/loesungen/{slug}`

Einträge: 4 × Vertriebsperformance (Verkaufstrainings, Sales-Story, Verkaufsprozesse, Digitales & hybrides Verkaufen) + Diagnostik & Potenzialanalyse · Executive Coaching & Sparring · Recruiting & Candidate Experience · Onboarding & Integration · Mitarbeiterbindung

| Feld | Slug | Typ | Pflicht | Hinweis |
|---|---|---|---|---|
| *Block B* (6) · *Block H* (4) | | | | Kennung = „Hebel 1“ usw. |
| Themenlinie | `themenlinie` | Reference → Themenlinien | Ja | Bestimmt Breadcrumb, Rücklink „Zur Themenlinie“ und Zuordnung im Hub |
| Ausgangslage | `ausgangslage` | RichText | Nein | Leer = Sektion ausgeblendet |
| Unser Ansatz | `ansatz` | RichText | Nein | |
| Womit wir arbeiten · Intro | `womit-intro` | RichText | Nein | |
| *Block K „womit“* (7) | | | | 3 Karten „Womit wir arbeiten“ |
| Zusatzabschnitt · Titel | `zusatz-titel` | PlainText | Nein | z. B. „Story trifft Erlebnis“, „Vom Profil zum Entwicklungsweg“ |
| Zusatzabschnitt · Text | `zusatz-text` | RichText | Nein | |
| Digital-Hinweis · Text | `digital-hinweis` | PlainText | Nein | Hinweis-Box „Digitale Unterstützung …“ |
| Digital-Hinweis · Lösungswelt | `digital-loesungswelt` | Reference → Lösungswelten | Nein | Verlinkt z. B. auf Lotse |
| *Block V „vorgehen“* (8) | | | | „So läuft ein Mandat / So gehen wir vor“ |
| Werkzeuge | `werkzeuge` | MultiReference → Werkzeuge | Nein | |
| FAQ | `faq` | MultiReference → FAQ | Nein | |
| *Block C* (6) · *Block S* (3) | | | | |

**≈ 44 Felder** (unter dem Webflow-Limit von 60 pro Collection). Beide Prototyp-Varianten (VP-Hebel und neue Hebel) lassen sich mit dieser Vorlage abbilden, weil optionale Sektionen leer bleiben dürfen.

---

### 3.3 Lösungswelten (5) · `/digital/{slug}`

Einträge: Segel · Kompass · Anker · Lotse · Logbuch

| Feld | Slug | Typ | Pflicht | Hinweis |
|---|---|---|---|---|
| *Block B* (6) · *Block H* (4) | | | | |
| Kurz-Claim | `claim` | PlainText | Ja | z. B. „Die interaktive Beratung“ (für Karten und „Im Zusammenspiel“) |
| Phase | `phase` | Option | Ja | Aufbruch · Orientierung · Halt (Leitmotiv der Übersichtsseite) |
| Status | `status` | Option | Ja | Live im Einsatz · In Entwicklung. Steuert Tag und CTA-Variante |
| Signatur-Zeile | `signatur` | PlainText | Nein | z. B. „fühlen · sehen · hören“ |
| Technologie-Partner | `tech-partner` | Reference → Organisationen | Nein | z. B. Trihow |
| Icon / Bildmarke | `icon` | Image | Nein | SVG, quadratisch |
| *Block K „leistung“* (7) | | | | „Was Segel in Ihrer Beratung verändert“ |
| *Block V „einfuehrung“* (8) | | | | Optional: „So kommt Segel in Ihr Haus“ |
| Zusammenspiel · Text | `zusammenspiel-text` | PlainText | Nein | Die anderen 4 Welten erscheinen automatisch |
| FAQ | `faq` | MultiReference → FAQ | Nein | |
| *Block C* (6) · *Block S* (3) | | | | |

**≈ 42 Felder.** „Wirkung aus der Praxis“ = Referenzen mit `loesungswelten` enthält aktuellen Eintrag.

---

### 3.4 Kategorie-Hubs B2C (3) · `/entwicklung/{slug}`

Einträge: Fit for Sales · Fit for Leadership · Standortbestimmung & Wachstum

| Feld | Slug | Typ | Pflicht | Hinweis |
|---|---|---|---|---|
| *Block B* (6) · *Block H* (4) | | | | |
| Farbwelt | `farbwelt` | Option | Ja | wie Themenlinien |
| Trust-Zeile | `trust` | MultiReference → Organisationen | Nein | „Anerkannt: Cicero · gutberaten.de · SAQ“ als Logo- oder Textzeile |
| Einstiegsfrage · Titel | `check-titel` | PlainText | Nein | z. B. „Wo stehst Du im Verkauf? Finde es in 3 Minuten heraus.“ |
| Einstiegsfrage · Meta | `check-meta` | PlainText | Nein | „5 Fragen · sofortiges Ergebnis“ |
| Einstiegsfrage · Button-Text | `check-button` | PlainText | Nein | |
| Einstiegsfrage · Link | `check-link` | Link | Nein | Mini-Check (siehe Custom-Code-Register) |
| Angebote · Titel | `angebote-titel` | PlainText | Ja | „Vier Wege zu mehr Verkaufsstärke“. Karten kommen automatisch aus Programme und Mentorings |
| Cross-Link Selbstcheck | `cross-check` | Reference → Selbstchecks | Nein | Karte „Sales-Diagnostik mit SalesStep“ |
| *Block K „level“* (7) | | | | „Wo stehst Du?“ (Einsteiger:in, Erfahrene:r, Senior) |
| Selbstcheck-Teaser · Titel | `teaser-check-titel` | PlainText | Nein | „Tiefer geht's mit Selbstchecks“ |
| Selbstcheck-Teaser · Text | `teaser-check-text` | PlainText | Nein | |
| CAS-Spotlight anzeigen | `cas-spotlight` | Switch | Nein | Globale Komponente „Spotlight CAS“ |
| Stimmen | `stimmen` | MultiReference → Stimmen | Nein | |
| FAQ | `faq` | MultiReference → FAQ | Nein | |
| *Block C* (6) · *Block S* (3) | | | | |

**≈ 40 Felder.** Auf diesem Template sind zwei Collection Lists nötig (Programme + Mentorings), aber **kein** verschachteltes Nesting.

---

### 3.5 Programme / Angebote (6) · `/programm/{slug}`

Einträge: Berater-Zertifizierung · Sales-Methoden · Training on the Job · Leadership-Trainings · Coaching · Entwicklungsprogramm

| Feld | Slug | Typ | Pflicht | Hinweis |
|---|---|---|---|---|
| *Block B* (6) · *Block H* (4) | | | | Kennung = „2.1.1“ |
| Kategorie-Hub | `kategorie-hub` | Reference → Kategorie-Hubs | Ja | Breadcrumb und Zuordnung |
| Funnel-Typ | `funnel` | Option | Ja | Anmeldung · Anfrage · Erstgespräch · Bewerbung · Kauf. Steuert Badge-Farbe und Formular-Variante |
| Format & Dauer | `format` | PlainText | Nein | z. B. „Hybrid · 6 Monate“ |
| Preis-Hinweis | `preis` | PlainText | Nein | z. B. „ab CHF 2'400“. Leer = „Preis auf Anfrage“ |
| *Block K „zielgruppe“* (7) | | | | „Für wen ist das gedacht?“ |
| *Block V „aufbau“* (8) | | | | „So ist die Ausbildung aufgebaut“ + Hinweis |
| Abschluss-Box · Titel | `box-titel` | PlainText | Ja | „Anmeldung & Zulassung“ / „Erstgespräch vereinbaren“ |
| Abschluss-Box · Text | `box-text` | RichText | Nein | |
| Eckdaten | `eckdaten` | RichText | Nein | Aufzählung: Dauer, Ort, Abschluss, Credits |
| Abschluss-Box · Button-Text | `box-button` | PlainText | Ja | |
| Abschluss-Box · Link | `box-link` | Link | Nein | Leer = Formular auf der Seite (Funnel-Typ) |
| Kurse | `kurse` | MultiReference → Kurse & Termine | Nein | Optional: konkrete Termine |
| Stimmen | `stimmen` | MultiReference → Stimmen | Nein | |
| FAQ | `faq` | MultiReference → FAQ | Nein | |
| *Block C* (6) · *Block S* (3) | | | | |

**≈ 47 Felder.**

### 3.6 Mentorings (3) · `/mentoring/{slug}`

Einträge: Sales-Mentoring 1:1 · Leadership-Mentoring 1:1 · Persönliches Mentoring 1:1

**Gleiches Schema wie 3.5** (die Prototyp-Seiten sind strukturell identisch). Unterschiede: `funnel` hat standardmässig „Erstgespräch“, `box-titel` lautet „Erstgespräch vereinbaren“, und es gibt ein zusätzliches Feld:

| Feld | Slug | Typ | Pflicht | Hinweis |
|---|---|---|---|---|
| Buchungslink | `buchung` | Link | Nein | Kalender-Link (z. B. Calendly/Bookings) für das Erstgespräch |

> 💡 Weil die Schemas identisch sind, empfehle ich, 3.5 und 3.6 zu **einer Collection „Angebote“** mit dem Option-Feld „Angebotsart“ (Programm · Mentoring) zusammenzulegen. Das spart ein Template und einen Collection-Slot. Die Seitenzahl (68) bleibt gleich → **Entscheidung E1**.

---

### 3.7 Selbstchecks (3) · `/check/{slug}`

Einträge: SalesStep · Reiss-Profil · Bluquist

| Feld | Slug | Typ | Pflicht | Hinweis |
|---|---|---|---|---|
| *Block B* (6) · *Block H* (4) | | | | |
| Werkzeug | `werkzeug` | Reference → Werkzeuge | Nein | Verknüpft Check und Tool-Bibliothek |
| Dauer | `dauer` | PlainText | Nein | „ca. 30 Minuten“ |
| Ab-Preis (Karte) | `ab-preis` | PlainText | Nein | „ab CHF 99“ für die Übersicht |
| *Block K „misst“* (7) | | | | „Was der Check misst“ |
| *Block V „ablauf“* (8) | | | | „So läuft es ab“ |
| Variante A · Name | `var-a-name` | PlainText | Ja | „SalesStep pur“ |
| Variante A · Preis | `var-a-preis` | PlainText | Nein | „CHF 99“ |
| Variante A · Preiszusatz | `var-a-zusatz` | PlainText | Nein | „einmalig, inkl. Report“ |
| Variante A · Leistungen | `var-a-leistungen` | RichText | Nein | Aufzählungsliste |
| Variante A · Kauf-Link | `var-a-link` | Link | Nein | Stripe/Payrexx-Payment-Link (kein Custom Code) |
| Variante B · Name … Kauf-Link | `var-b-…` | 5 Felder wie A | Nein | Leer = nur eine Variante |
| Empfohlene Variante | `empfohlen` | Option | Nein | A · B (hervorgehobene Preis-Karte) |
| FAQ | `faq` | MultiReference → FAQ | Nein | |
| *Block C* (6) · *Block S* (3) | | | | |

**≈ 49 Felder.**

---

### 3.8 Partnerrollen (3) · `/partnerschaft/{slug}`

Einträge: Managing Partner · Education Partner · Trainer Academy

| Feld | Slug | Typ | Pflicht | Hinweis |
|---|---|---|---|---|
| *Block B* (6) · *Block H* (4) | | | | |
| *Block K „erwartung“* (7) | | | | „Was Dich erwartet“ |
| *Block V „weg“* (8) | | | | „Der Weg zur Partnerschaft“ |
| Bewerbungs-Link | `bewerbung` | Link | Nein | Leer = Formular auf der Seite |
| FAQ | `faq` | MultiReference → FAQ | Nein | |
| *Block C* (6) · *Block S* (3) | | | | |

**≈ 36 Felder.**

---

### 3.9 Blog-Artikel · `/blog/{slug}`

| Feld | Slug | Typ | Pflicht | Hinweis |
|---|---|---|---|---|
| Titel (H1) | `name` | PlainText | Ja | |
| Slug | `slug` | PlainText | Ja | Bei Migration den alten Slug übernehmen (SEO-Wert) |
| Kategorie | `kategorie` | Reference → Kategorien | Ja | Steuert Label-Farbe und „Weitere Beiträge“ |
| Autor:in | `autor` | Reference → Personen | Nein | Autoren-Box am Artikelende |
| Veröffentlicht am | `datum` | DateTime | Ja | Sortierung |
| Lesezeit (Min.) | `lesezeit` | Number | Nein | Ganzzahl |
| Teaser | `teaser` | PlainText | Ja | Max. 180 Zeichen |
| Titelbild | `bild` | Image | Nein | 16:9. Redaktioneller Bildlook (Visual Guidelines 5.5) |
| Einstieg · Titel | `trigger-titel` | PlainText | Nein | „Kennen Sie das?“ (SEO-Funnel: Problem-Einstieg) |
| Einstieg · Text | `trigger-text` | PlainText | Nein | |
| Inhalt | `inhalt` | RichText | Ja | H2/H3, Listen, Bilder, Zitate |
| Lösungs-CTA · Titel | `cta-titel` | PlainText | Nein | „Sie möchten Ihr Vertriebsteam systematisch stärken?“ |
| Lösungs-CTA · Text | `cta-text` | PlainText | Nein | |
| Lösungs-CTA · Button-Text | `cta-button` | PlainText | Nein | |
| Lösungs-CTA · Link | `cta-link` | Link | Nein | Ziel: passende Hebel- oder Programmseite |
| Hervorheben | `featured` | Switch | Nein | Erscheint auf Home und Wissen & Impulse |
| Alte URL | `alte-url` | PlainText | Nein | Nur für die Migration: Grundlage der 301-Redirect-Liste |
| Platzhalter | `platzhalter` | Switch | Nein | |
| *Block S* (3) | | | | |

### 3.10 Downloads · `/downloads/{slug}`

| Feld | Slug | Typ | Pflicht | Hinweis |
|---|---|---|---|---|
| Titel | `name` | PlainText | Ja | |
| Slug | `slug` | PlainText | Ja | |
| Format | `format` | Option | Ja | Checkliste · Whitepaper · Leitfaden · Vorlage |
| Kategorie | `kategorie` | Reference → Kategorien | Ja | |
| Teaser | `teaser` | PlainText | Ja | |
| Beschreibung | `beschreibung` | RichText | Nein | Was man erhält (Lead-Seite) |
| Cover | `cover` | Image | Nein | Hochformat 3:4 |
| Datei | `datei` | File | Nein | PDF. Pflicht vor dem Publizieren (Checkliste) |
| E-Mail-Gate | `gate` | Switch | Nein | An = Formular vor dem Download (Link erscheint in der Erfolgsmeldung) |
| Datum | `datum` | DateTime | Nein | |
| Reihenfolge · Platzhalter | | Number · Switch | Nein | |
| *Block S* (3) | | | | |

> Lead-Capture **ohne Custom Code**: natives Webflow-Formular auf dem Template. Die Erfolgsmeldung enthält den an das Feld `datei` gebundenen Download-Link. (Die Datei-URL ist technisch öffentlich. Ein echter Zugriffsschutz bräuchte Memberships oder ein externes Tool.)

### 3.11 Webinare · `/webinar/{slug}`

| Feld | Slug | Typ | Pflicht | Hinweis |
|---|---|---|---|---|
| Titel | `name` | PlainText | Ja | |
| Slug | `slug` | PlainText | Ja | |
| Beginn | `beginn` | DateTime | Ja | Native Filter „in der Zukunft“ = Kommend, „in der Vergangenheit“ = Archiv |
| Dauer (Min.) | `dauer` | Number | Nein | |
| Kategorie | `kategorie` | Reference → Kategorien | Ja | |
| Referent:innen | `referenten` | MultiReference → Personen | Nein | |
| Teaser | `teaser` | PlainText | Ja | |
| Beschreibung | `beschreibung` | RichText | Nein | |
| Bild | `bild` | Image | Nein | |
| Plattform | `plattform` | Option | Nein | Zoom · MS Teams · Vor Ort |
| Anmelde-Link | `anmeldung` | Link | Nein | Externe Registrierung (Zoom/Teams) |
| Aufzeichnung | `aufzeichnung` | VideoLink | Nein | Gefüllt = Karte „Aufzeichnung · Ansehen“ |
| *Block S* (3) · Platzhalter | | | | |

### 3.12 Videos (ROWAPA TV) · `/tv/{slug}`

| Feld | Slug | Typ | Pflicht | Hinweis |
|---|---|---|---|---|
| Titel | `name` | PlainText | Ja | |
| Slug | `slug` | PlainText | Ja | |
| Format | `format` | Option | Ja | Expertentipps · Kundenstimmen · Behind the Scenes |
| Kategorie | `kategorie` | Reference → Kategorien | Nein | |
| Video | `video` | VideoLink | Ja | YouTube-URL |
| Vorschaubild | `vorschau` | Image | Nein | Eigenes Thumbnail: YouTube lädt erst nach Klick (Datenschutz) |
| Dauer | `dauer` | PlainText | Nein | „2:40“ |
| Teaser | `teaser` | PlainText | Ja | |
| Beschreibung | `beschreibung` | RichText | Nein | |
| Personen | `personen` | MultiReference → Personen | Nein | |
| Datum | `datum` | DateTime | Nein | |
| Hervorheben | `featured` | Switch | Nein | |
| *Block S* (3) | | | | |

### 3.13 Kurse & Termine · `/kurse/{slug}`

| Feld | Slug | Typ | Pflicht | Hinweis |
|---|---|---|---|---|
| Kurstitel | `name` | PlainText | Ja | |
| Slug | `slug` | PlainText | Ja | |
| Bereich | `bereich` | Option | Ja | Broker Excellence · Female Empowerment · Allgemein |
| Themenfeld | `themenfeld` | Option | Ja | Fachwissen · Vertrieb · Führung |
| Format | `format` | Option | Ja | Präsenz · Online · Hybrid |
| Teaser | `teaser` | PlainText | Ja | |
| Beschreibung | `beschreibung` | RichText | Nein | Inhalte, Lernziele |
| Dauer | `dauer` | PlainText | Nein | „2 Tage“ |
| Ort | `ort` | PlainText | Nein | |
| Termin 1 / 2 / 3 | `termin-1` … `termin-3` | DateTime | Nein | Nächster Termin = Termin 1. Leere Termine ausgeblendet |
| Preis (CHF) | `preis` | Number | Nein | |
| Preis-Hinweis | `preis-hinweis` | PlainText | Nein | „zzgl. MwSt.“, „Frühbucher …“ |
| Cicero-Credits | `credits` | Number | Nein | |
| Dozent:innen | `dozenten` | MultiReference → Personen | Nein | |
| Anmelde-Link | `anmeldung` | Link | Nein | Leer = natives Anmeldeformular auf der Seite |
| Ausgebucht | `ausgebucht` | Switch | Nein | Badge + Warteliste-CTA |
| Bild | `bild` | Image | Nein | |
| *Block S* (3) · Platzhalter | | | | |

### 3.14 Personen / Dozent:innen · `/experten/{slug}`

| Feld | Slug | Typ | Pflicht | Hinweis |
|---|---|---|---|---|
| Name | `name` | PlainText | Ja | |
| Slug | `slug` | PlainText | Ja | |
| Foto | `foto` | Image | Nein | Hochformat 4:5, Kopf im oberen Drittel |
| Funktion | `funktion` | PlainText | Ja | „Managing Partner · Zentralschweiz“ |
| Region | `region` | PlainText | Nein | |
| Kurzprofil | `kurzprofil` | PlainText | Nein | Max. 200 Zeichen (Karten) |
| Biografie | `bio` | RichText | Nein | |
| Zitat | `zitat` | PlainText | Nein | |
| Fokusthemen | `fokus` | MultiReference → Themenlinien | Nein | |
| Geschäftsleitung | `rolle-gl` | Switch | Nein | Rollen als Schalter → native Filter, eine Person kann mehrere Rollen haben |
| Managing Partner | `rolle-mp` | Switch | Nein | |
| Dozent:in Broker Excellence | `rolle-broker` | Switch | Nein | |
| Dozentin Female Empowerment | `rolle-female` | Switch | Nein | |
| Autor:in Blog | `rolle-autor` | Switch | Nein | |
| LinkedIn | `linkedin` | Link | Nein | |
| E-Mail | `email` | Email | Nein | |
| Telefon | `telefon` | Phone | Nein | |
| Termin-Link | `termin` | Link | Nein | |
| Reihenfolge · Platzhalter | | Number · Switch | Nein | |
| *Block S* (3) | | | | |

### 3.15 Referenzen / Case-Stories · `/cases/{slug}`

| Feld | Slug | Typ | Pflicht | Hinweis |
|---|---|---|---|---|
| Kurztitel (H1) | `name` | PlainText | Ja | „Vom Anlagegespräch zum Abschluss.“ |
| Slug | `slug` | PlainText | Ja | |
| Zielgruppe | `zielgruppe` | Option | Ja | Organisation · Privatperson |
| Branche | `branche` | Option | Ja | Bank · Versicherung · Krankenkasse · Vertrieb · Broker · Andere |
| Kunde | `kunde` | Reference → Organisationen | Nein | Leer oder anonymisiert = kein Logo |
| Anonymisiert | `anonym` | Switch | Nein | |
| Lead | `lead` | PlainText | Ja | Ausgangslage + Ergebnis in einem Satz |
| Bild | `bild` | Image | Nein | |
| Ausgangslage | `ausgangslage` | RichText | Ja | |
| Vorgehen | `vorgehen` | RichText | Ja | |
| Wirkung | `wirkung` | RichText | Ja | |
| Kennzahl 1–3 · Wert | `kpi-1-wert` … | PlainText | Nein | „+23 %“ |
| Kennzahl 1–3 · Label | `kpi-1-label` … | PlainText | Nein | |
| Kennzahlen freigegeben | `kpi-freigabe` | Switch | Nein | Aus = Kennzahlen ausgeblendet (Prototyp: „erst nach Freigabe“) |
| Themenlinien | `themenlinien` | MultiReference → Themenlinien | Nein | |
| Hebel | `hebel` | MultiReference → Hebel | Nein | „Eingesetzte Hebel und Werkzeuge“ |
| Lösungswelten | `loesungswelten` | MultiReference → Lösungswelten | Nein | |
| Stimme | `stimme` | Reference → Stimmen | Nein | Video-Testimonial der Entscheider:in |
| *Block S* (3) · Platzhalter | | | | |

---

### 3.16 Hilfs-Collections

**Kategorien** · `/kategorie/{slug}` (optional als Archivseite, siehe E5)

| Feld | Slug | Typ | Pflicht | Hinweis |
|---|---|---|---|---|
| Name | `name` | PlainText | Ja | Sales · Leadership · Persönlichkeit · Recruiting · ROWAPA |
| Slug | `slug` | PlainText | Ja | |
| Farbwelt | `farbwelt` | Option | Ja | laut Visual Guidelines 5.5 |
| Beschreibung | `beschreibung` | PlainText | Nein | Intro auf der Kategorie-Seite (SEO) |
| Reihenfolge | `reihenfolge` | Number | Nein | Reihenfolge der Filter-Chips |

**FAQ** · kein öffentliches Template (siehe 4.3)

| Feld | Slug | Typ | Pflicht | Hinweis |
|---|---|---|---|---|
| Frage | `name` | PlainText | Ja | |
| Slug | `slug` | PlainText | Ja | |
| Antwort | `antwort` | RichText | Ja | |
| FAQ-Gruppe | `gruppe` | Option | Ja | Allgemein · Organisationen · Fit for Sales · Fit for Leadership · Standortbestimmung · Selbstchecks · Broker · Female · Partner · CAS. Für Unikat-Seiten (Filter-Prop der Komponente) |
| Reihenfolge | `reihenfolge` | Number | Nein | Bestimmt die Nummer 01, 02 … |

**Stimmen**

| Feld | Slug | Typ | Pflicht | Hinweis |
|---|---|---|---|---|
| Name | `name` | PlainText | Ja | |
| Slug | `slug` | PlainText | Ja | |
| Zitat | `zitat` | PlainText | Ja | Ohne Anführungszeichen, die Seite setzt sie |
| Kernaussage | `kernaussage` | PlainText | Nein | Grosszeile über dem Zitat |
| Funktion · Organisation | `funktion` | PlainText | Nein | |
| Foto | `foto` | Image | Nein | |
| Video | `video` | VideoLink | Nein | |
| Kontext | `kontext` | Option | Ja | Organisationen · Privatpersonen · Broker · Female · CAS · Partner |
| Freigegeben | `freigegeben` | Switch | Nein | Aus = nur als Draft verwenden |
| Reihenfolge | `reihenfolge` | Number | Nein | |

**Organisationen**

| Feld | Slug | Typ | Pflicht | Hinweis |
|---|---|---|---|---|
| Name | `name` | PlainText | Ja | |
| Slug | `slug` | PlainText | Ja | |
| Typ | `typ` | Option | Ja | Kunde · Akademischer Partner · Zertifizierung/Verband · Tool-Lizenz · Technologie-Partner |
| Branche | `branche` | Option | Nein | wie Referenzen |
| Logo | `logo` | Image | Nein | SVG oder PNG transparent, einfarbig in Manganese Black oder Weiss |
| Logo-Skalierung | `skalierung` | Number | Nein | Leer oder 1 = normal; wirkt ein Logo zu klein, z. B. 1.2 (aus der Baseline übernommen, wird per Inline-Style auf die Logo-Höhe gebunden) |
| Kurzbeschreibung | `beschreibung` | PlainText | Nein | |
| Website | `website` | Link | Nein | |
| Im Vertrauensband | `vertrauensband` | Switch | Nein | Logo erscheint in „Verankert in der Branche“ |
| Reihenfolge | `reihenfolge` | Number | Nein | |

**Werkzeuge**

| Feld | Slug | Typ | Pflicht | Hinweis |
|---|---|---|---|---|
| Name | `name` | PlainText | Ja | |
| Slug | `slug` | PlainText | Ja | |
| Familie | `familie` | Option | Ja | Diagnostik · Methode (die „zwei Familien“ auf Tools & Methoden) |
| Kurzbeschreibung | `beschreibung` | PlainText | Ja | |
| Einsatzbereiche | `einsatz` | MultiReference → Themenlinien | Nein | Matrix „Tool × Einsatzbereich“ |
| Lizenzgeber | `lizenz` | Reference → Organisationen | Nein | |
| Logo / Icon | `icon` | Image | Nein | |
| Detailseite | `detail-link` | Link | Nein | z. B. auf einen Selbstcheck |
| Reihenfolge | `reihenfolge` | Number | Nein | |

### 3.17 Beziehungsmatrix (Referenzfelder)

| Von → Nach | Themenl. | Hebel | Lösungsw. | Kat.-Hub | Selbstch. | Kurse | Personen | Kategorien | FAQ | Stimmen | Organis. | Werkz. |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Themenlinien | | (rückwärts) | | | | | | | M | | | M |
| Hebel | **R** | | R | | | | | | M | | | M |
| Lösungswelten | | | | | | | | | M | | R | |
| Kategorie-Hubs | | | | | R | | | | M | M | M | |
| Programme / Mentorings | | | | **R** | | M | | | M | M | | |
| Selbstchecks | | | | | | | | | M | | | R |
| Partnerrollen | | | | | | | | | M | | | |
| Blog | | | | | | | R | **R** | | | | |
| Downloads · Webinare · Videos | | | | | | | (M) | R | | | | |
| Kurse | | | | | | | M | | | | | |
| Personen | M | | | | | | | | | | | |
| Referenzen | M | M | M | | | | | | | R | R | |
| Werkzeuge | M | | | | | | | | | | R | |

R = Reference, M = MultiReference. Keine Collection hat mehr als 4 MultiReference-Felder (sicher unter den Webflow-Grenzen; konkrete Limits vor dem Build prüfen).

---

## 4. CMS-Master-Templates

Alle Templates werden **ausschliesslich aus den Section-Komponenten (Kapitel 5)** zusammengesetzt. Deren Props werden an CMS-Felder gebunden. Ein Template ist damit nur eine „Stapel-Anleitung“ und enthält keine eigenen Layouts.

### 4.1 Template-Stacks der 8 Seitentypen

| Template | Section-Stack (von oben nach unten) |
|---|---|
| **T1 Themenlinie** | Breadcrumb · Hero (Bild rechts) · Card Grid „Hebel“ (Collection List: Hebel, Themenlinie = aktuell, sortiert nach Reihenfolge) · Text + Tool-Badges „Diagnostik & Tools“ · Text-Band „Ihr Vorteil“ · *Global:* So arbeiten wir · Case-Grid (Referenzen, Themenlinien enthält aktuell, Kontrast) · FAQ · Conversion |
| **T2 Hebel** | Breadcrumb (Themenlinie › Hebel) · Hero · Text „Ausgangslage“ · Text „Ansatz“ · Text + Card Grid „Womit wir arbeiten“ · Text „Zusatz“ · Note-Box „Digital“ · Steps (Kontrast) · FAQ · Conversion (Button 2 → Themenlinie) |
| **T3 Lösungswelt** | Breadcrumb · Hero (+ Status-Tag, Signatur) · Card Grid „Leistung“ · Steps „Einführung“ · Case-Grid „Wirkung aus der Praxis“ · Zusammenspiel (Collection List: Lösungswelten ≠ aktuell) · FAQ · Conversion (Variante nach Status) |
| **T4 Kategorie-Hub** | Breadcrumb · Hero (+ Trust-Zeile) · Check-Teaser · Angebots-Grid (2 Lists: Programme + Mentorings mit Kategorie-Hub = aktuell) + „Unsicher?“-Karte + Cross-Link-Karte · Card Grid „Wo stehst Du?“ · *Global:* Spotlight CAS (Switch) · Selbstcheck-Teaser · Testimonials · FAQ · Conversion |
| **T5 Programm** / **T6 Mentoring** | Breadcrumb (Hub › Angebot) · Hero · Card Grid „Für wen“ · Steps „Aufbau“ + Note-Box · Abschluss-Box (Kontrast, Formular-Variante nach Funnel-Typ, Eckdaten) · Testimonials · FAQ · Conversion |
| **T7 Selbstcheck** | Breadcrumb · Hero · Card Grid „Misst“ · Steps „Ablauf“ · Pricing (2 Varianten, Kontrast) · FAQ · Conversion |
| **T8 Partnerrolle** | Breadcrumb · Hero · Card Grid „Erwartung“ · Steps „Weg“ · FAQ · Conversion |

### 4.2 Templates der offenen Collections

| Template | Section-Stack |
|---|---|
| **T9 Blog-Artikel** | Breadcrumb · Artikel-Header (Kategorie-Label in Farbwelt, Lesezeit, Autor, Datum) · Trigger-Box · Rich Text (Artikel-Typografie, max. 720 px) · Lösungs-CTA-Box · Autoren-Box · Card Grid „Weitere Beiträge“ (gleiche Kategorie) · Newsletter-Conversion |
| **T10 Download** | Breadcrumb · Hero (Cover statt Foto) · Beschreibung · Lead-Formular (Erfolgsmeldung mit Datei-Link) · Weitere Downloads |
| **T11 Webinar** | Breadcrumb · Hero (Datum, Uhrzeit, Referent:innen) · Beschreibung · Anmeldung *oder* Aufzeichnung (bedingte Sichtbarkeit) · Referenten-Karten · Newsletter-Conversion |
| **T12 Video** | Breadcrumb · Video-Player (Thumbnail-first) · Beschreibung · Weitere Videos (gleiches Format) |
| **T13 Kurs** | Breadcrumb · Hero (Format, Dauer, Credits) · Beschreibung · Termin-Liste (Termin 1–3) · Preis-Box · Dozent:innen-Karten · Anmeldeformular · Conversion |
| **T14 Person** | Breadcrumb · Profil-Header (Foto 4:5, Funktion, Region, Kontakt-Links) · Biografie · Zitat · Kurse (als Dozent:in) · Blogbeiträge (als Autor:in) · Conversion |
| **T15 Case-Story** | Breadcrumb · Hero („Real Case · Branche“) · 3-Spalten Ausgangslage / Vorgehen / Wirkung · KPI-Band (Switch) · Hebel & Werkzeuge · Testimonial · Conversion (Kontrast) |

### 4.3 Templates der Hilfs-Collections

- **Kategorien** → *optional* öffentliche Archivseite `/kategorie/sales` (alle Inhalte einer Kategorie). Das ist eine native Alternative zu JS-Filtern und bringt SEO-Wert (E5).
- **FAQ · Stimmen · Organisationen · Werkzeuge** → Webflow legt die Templates zwingend an. Sie werden auf **noindex** gesetzt, aus der Sitemap ausgeschlossen und per 301 auf die passende Übersichtsseite umgeleitet.

**Summe:** 15 Master-Templates (laut Sitemap) + 1 optionales Kategorie-Archiv. Mit E1 (Zusammenlegung) sind es 14 + 1.

---

## 5. Komponenten-Konzept für die Unikat-Seiten

### 5.1 Prinzip: „Seiten sind Stapel aus Section-Komponenten“

```
Variablen (Tokens)  →  Elemente  →  Bausteine (Cards)  →  Sections  →  Seite = Stapel aus Sections
 Farben, Spacing,      Button,       Feature-Card,         Hero, Card Grid,    Home, Über uns …
 Typo, Radius          Kicker, Tag,  Angebots-Card,        Steps, FAQ,
                       Ribbon        Person-Card …         Conversion …
```

- **Jede Section ist eine native Webflow-Komponente** mit der Client-First-Struktur `section_[name] > padding-global > container-large > padding-section-[size]`.
- **Props statt Overrides:** Texte (`textContent`/`richText`), Bilder (`image` + `altText`), Links (`link`), Videos (`video`), Sichtbarkeit (`boolean`/`visibility`). Alles ist im Editor ohne Klassen-Wissen pflegbar.
- **Varianten für Gestaltung:** Hintergrund (`Hell` · `Soft` · `Kontrast`), Bildposition (`rechts` · `links`), Spalten (`2` · `3` · `4`). Die Hintergrund-Themes laufen über **Variable Modes**: eine Variablen-Collection „Theme“ mit den Modi Hell/Soft/Kontrast, die Farben für Text, Hintergrund, Rahmen und Akzent schalten. Eine neue Farbwelt bedeutet damit einen neuen Mode, keine neue Klasse.
- **Slots für Inhalte, die Redakteur:innen frei bestücken:** Card Grid, Spalten-Layouts und Abschluss-Box haben Slots. Dort werden Karten-Komponenten per Drag-and-Drop eingesetzt, umsortiert oder entfernt.
- **CMS in Komponenten:** Listen-Sections (Blog-Teaser, FAQ, Testimonials, Logos, Personen) enthalten eine Collection List. Webflow erlaubt dafür **Filter-, Sortier- und Auswahl-Props** (`filter`, `sort`, `selectedItems`). Redakteur:innen stellen auf der Seite z. B. „FAQ-Gruppe = Fit for Sales“ oder „Rolle = Dozent:in Broker“ ein, ohne die Komponente aufzubrechen.
- **Drag-and-Drop in der Praxis:** Neue Sections fügt man im Designer über das Components-Panel hinzu. Für Kund:innen ist dafür eine eingeschränkte Designer-Rolle vorgesehen, in der nur Komponenten platziert und Props gepflegt werden können (Webflow-Rollen bzw. „Page building“ je nach Workspace-Plan, vor Übergabe prüfen). Reine Text- und Bildpflege funktioniert zusätzlich im Editor.
- **Komponenten werden nie „unlinked“.** In der Übergabe-Doku steht: Wer eine neue Gestaltung braucht, legt eine neue Variante an.

### 5.2 Komponenten-Bibliothek

Ordnerstruktur im Webflow-Components-Panel: `01 Global` · `02 Sections` · `03 Cards` · `04 Elemente`

**01 Global**

| Komponente | Props / Varianten | Einsatz |
|---|---|---|
| `Global / Navbar` | Mega-Menü (6 Bereiche laut Prototyp), Sprachumschalter (native Localization), CTA „Kontakt“ | alle Seiten |
| `Global / Footer` | Spaltenlinks, Newsletter-Formular (nativ), Adresse, Legal-Links | alle Seiten |
| `Global / Breadcrumb` | bis 4 Ebenen: Text- und Link-Props je Ebene, leere Ebenen ausgeblendet | Unikat-Seiten (statisch), Templates (CMS-gebunden) |
| `Global / So arbeiten wir` | Variante Hell/Kontrast. Inhalt zentral gepflegt. **4 Phasen wie in der Baseline:** Analysieren · Verstehen · Handeln · Messen (der Prototyp v11 hatte noch 3) | Home, Themenlinien, So arbeiten wir, Für Organisationen |
| `Global / Spotlight CAS` | Variante Bild links/rechts, Eckdaten-Chips, Zweitlink (z. B. Infosession) | Home, Für Organisationen, Persönliche Entwicklung, Fit for Leadership |
| `Global / Vertrauensband` | Collection List Organisationen (Vertrauensband = an), Kontrast | Home, Für Organisationen, Broker Excellence |
| `Global / Ansprechperson` | Person (Referenz-Auswahl), runder Porträt-Rahmen mit Wertering (SVG, IX2-Rotation), Telefon, E-Mail, Button | Home, Kontakt, Abschluss wichtiger Seiten |

**02 Sections**

| Komponente | Props | Varianten | Prototyp-Vorkommen |
|---|---|---|---|
| `Section / Hero` | Kicker, H1, Lead, Bild, Bild-Alt, CTA 1/2, Trust-Zeile, Ribbon an/aus | Bild rechts · Zentriert (Claim, „Center-Weighted“) · Artikel | 67 × |
| `Section / Section Head` | Titel (H2), Untertitel | links · zentriert | in fast jeder Section |
| `Section / Card Grid` | Titel, Untertitel, **Slot „Karten“**, Fussnote | 2 · 3 · 4 Spalten × Hell/Soft/Kontrast | 104 × |
| `Section / Text Band` | Titel, Rich Text, optional Bild | Hell/Soft · schmal/breit | „Ausgangslage“, „Ihr Vorteil“ |
| `Section / Two Column` | **Slot links**, **Slot rechts** | 50/50 · 60/40 | „Zwei Wege“, Kontakt |
| `Section / Steps` | Titel, 3–4 Schritte (Nr. automatisch), Hinweis | Hell/Kontrast · horizontal/vertikal | 33 × |
| `Section / Timeline` | Titel, Slot „Einträge“ (`Element / Timeline Item`) | – | Über uns, CAS |
| `Section / FAQ` | Titel, Filter-Prop „FAQ-Gruppe“, max. Anzahl | Hell/Soft | 27 × |
| `Section / Testimonials` | Titel, Filter-Prop „Kontext“, Video an/aus | Hell/Soft | 19 × |
| `Section / Logo Row` | Titel, Filter-Prop „Typ“ | Hell/Kontrast | 10 × |
| `Section / Team Grid` | Titel, Filter-Prop „Rolle“ | 2 · 3 Spalten | Team, Dozenten, Dozentinnen |
| `Section / Content Feed` | Titel, Quelle (Blog/Downloads/Webinare/Videos als Varianten), Anzahl, Kategorie-Filter, „Alle anzeigen“-Link | Grid · Featured + Grid | Wissen, Home, Übersichten |
| `Section / Pricing` | Titel, Slot „Preis-Karten“ | 2 · 3 Karten | E-Learnings, Persönliche Beratung |
| `Section / Spotlight` | Kicker, Titel, Text, Bild, CTA | Bild links/rechts | Female, Partner (Trihow) |
| `Section / Note Box` | Titel, Text, Link | Info · Akzent (Plum-Tint) | 23 × |
| `Section / Form Block` | Titel, Text, native Webflow-Form | Kontakt · Anfrage · Anmeldung · Bewerbung | Kontakt, Programme, Partner |
| `Section / Booking Embed` | Titel, Kalender-URL (Drittanbieter-Embed) | – | Persönliche Beratung |
| `Section / Check Teaser` | Titel, Meta, Beispielfrage, Button | – | Fit for Sales, Standortbestimmung |
| `Section / Conversion` | Titel, Text, CTA 1/2 | Hell · Kontrast | 67 × (Abschluss jeder Seite) |
| `Section / Bento Grid` *(Baseline)* | Titel, Untertitel, **Slot „Featured“** (1 grosse Karte), **Slot „Karten“** (bis 4) | Featured mittig · Featured links | Home „Lösungen für Unternehmen“, Für Organisationen |
| `Section / Logo Marquee` *(Baseline)* | Filter-Prop „Typ“, Tempo | Hell · Kontrast | Home, Unsere Kunden |
| `Section / Statement` *(Baseline)* | Kicker, Leitsatz (H2-Grösse), Slot „Kennzahlen“ (`Card / Stat`) | Hell · Soft | Home „Was uns antreibt“, Über uns |
| `Section / Quote Slider` *(Baseline)* | Titel, Filter-Prop „Kontext“, Anzahl | Hell · Soft | Home „Unsere Erfolge“, Unsere Kunden |
| `Section / Newsletter` *(Baseline)* | Titel, Text, natives Formular | Box · Band | Home, Wissen-Übersichten, Footer |
| `Section / Contact Person` *(Baseline)* | siehe `Global / Ansprechperson` | Tiefsee | Home, Kontakt |

**03 Cards** (für die Slots von Card Grid, Two Column, Pricing)

| Komponente | Props | Varianten |
|---|---|---|
| `Card / Feature` | Kennung, Titel, Text, Link | Standard · Akzent (Plum-Linie) · Farbwelt |
| `Card / Teaser` | Kicker, Titel, Text, Link-Text, Link, Bild | mit/ohne Bild |
| `Card / Angebot` | Kennung, Funnel-Badge, Titel, Text, Preis-Hinweis, Link | Badge: Anmeldung · Anfrage · Erstgespräch · Kauf · Bewerbung |
| `Card / Preis` | Name, Betrag, Zusatz, Leistungen (Rich Text), Button | Standard · Empfohlen |
| `Card / Person` | Foto, Name, Funktion, Text | kompakt · ausführlich |
| `Card / Case` | Branche, Titel, Lead, Link | – |
| `Card / Stat` | Zahl, Label | – |
| `Card / Quote` | Zitat, Name, Funktion, Video | – |

**04 Elemente**

`Element / Button` (Primär Plum · Sekundär Outline · Text-Link „→“) · `Element / Kicker` (TASA Explorer Extrabold, Versalien, Laufweite +0,12 em) · `Element / Tag` (Funnel- und Status-Badges) · `Element / Ribbon` (Diagonal-Ribbon 45°, Plum Perfect, 60–80 % Deckkraft, Position Ecke oben rechts/unten links; nie zentriert, max. 2 pro Bild; **rein native Transform-Styles, kein Code**) · `Element / Timeline Item` · `Element / Asterisk Note` (Platzhalter-Hinweis)

### 5.3 Bau-Rezepte der 29 Unikat-Seiten

| Bereich | Seite | Section-Stack |
|---|---|---|
| Home | **Home** *(Reihenfolge der Live-Baseline, nicht v11)* | Hero (Claim dunkel + Grafik-Modul) · Bento Grid „Lösungen für Unternehmen“ (Themenlinien) · Logo Marquee (Kunden) · Statement „Was uns antreibt“ · *Global:* So arbeiten wir (4 Phasen) · Card Grid „ROWAPA Digital“ (Lösungswelten, Tiefsee) + Note Box „Das Fundament“ · Quote Slider „Unsere Erfolge“ · Team Grid „Die Menschen hinter ROWAPA“ (Leiste) · Logo Row „Partner und Zertifizierungen“ (Raster) · Card Grid „Deine persönliche Entwicklung“ (3 Wege) · Spotlight CAS „Im Blickpunkt“ · Content Feed „Neueste Insights“ + Newsletter · FAQ · Ansprechperson |
| Was wir tun | **Für Organisationen** | Hero · Card Grid „Fünf Themenlinien“ · Spotlight CAS · Vertrauensband · Testimonials · Conversion |
| | **Meine persönliche Entwicklung** | Hero · Card Grid „Welcher Weg passt“ · Spotlight CAS · Two Column „Bibliotheken“ · Card Grid 4 „Warum ROWAPA“ (Kontrast) · Testimonials · Conversion |
| Fokusprogramme | **Broker Excellence (Hub)** | Hero · Two Column „Zwei Wege“ · Card Grid „Drei Programme“ (Angebots-Cards) · Logo Row „Anerkannt“ (Kontrast) · Conversion |
| | **Für Brokerfirmen** | Hero · Card Grid „Ihre Vorteile“ · Steps · Conversion |
| | **Für einzelne Broker** | Hero · Card Grid „Was Dich erwartet“ · Conversion |
| | **Kurse-Übersicht** | Hero · Kategorie-Chips · Content Feed (Kurse, Bereich = Broker) · Conversion |
| | **Dozenten-Übersicht** | Hero · Team Grid (Rolle = Dozent:in Broker) · Conversion |
| | **Female Empowerment (Hub)** | Hero · Spotlight „SOUVERÄN ICH“ · Card Grid „Community-Formate“ · Two Column „Für Unternehmen“ · Testimonials (Female) · Conversion |
| | **SOUVERÄN ICH** | Hero · Card Grid „Woran Du arbeitest“ · Two Column „So läuft das Programm“ · Conversion |
| | **Keynotes** | Hero · Text Band „Ausgangslage“ · Card Grid „Buchbare Themen“ · Conversion |
| | **Dozentinnen-Übersicht** | Hero · Team Grid (Rolle = Dozentin Female) · Conversion |
| Persönliche Entwicklung | **CAS Leadership (Flagship)** | Hero · Card Grid „Für Dich, wenn …“ · Timeline „Aufbau“ + Note Box · Team Grid „Wer Dich begleitet“ (Kontrast) · Two Column „Bewerbung & Fakten“ · Testimonials (CAS) · FAQ (CAS) · Conversion |
| | **Selbstchecks (Übersicht)** | Hero · Content Feed (Selbstchecks, Angebots-Cards mit Ab-Preis) · Steps „Wie funktioniert ein Selbstcheck“ · Two Column „Pur oder mit Feedback“ · Conversion |
| | **E-Learnings** | Hero · Card Grid (Angebots-Cards mit Preis) · Pricing „Bundles“ · Conversion |
| | **Persönliche Beratung** | Hero · Pricing „Drei Gesprächs-Typen“ · Booking Embed · Steps · Conversion |
| So arbeiten wir | **So arbeiten wir** | Hero · Two Column „Zwei Wege“ mit Steps · Text Band „Tools & Methoden“ · Card Grid „Wirkung messen“ · Conversion |
| | **Tools & Methoden** | Hero · Card Grid „Tool × Einsatzbereich“ (Collection List Werkzeuge) · Two Column „Werkzeuge im Detail“ · Two Column „Zwei Familien“ · Logo Row „Kooperationspartner“ (Kontrast) · Conversion |
| Unsere Kunden | **Unsere Kunden** | Hero · Section Head · Logo Row (Kunden) · Card Grid 4 „Branchen“ · Logo Row „Anerkennung“ · Case-Grid „Real Cases“ (Referenzen, Organisation) · Testimonials (Privatpersonen) · Testimonials (Video) · Conversion |
| Über uns | **Über uns** | Hero · Steps „Wofür wir stehen“ · Team Grid (Auswahl) · Timeline „Unsere Geschichte“ · Two Column „Kontakt“ · Conversion |
| | **Team (Übersicht)** | Hero · Team Grid (Geschäftsleitung, 2 Spalten) · Team Grid (Managing Partner, 3 Spalten) · Conversion |
| | **Kontakt** | Hero · Two Column (Form Block Kontakt + Adresse/Karte) · Conversion |
| | **Wissen & Impulse** | Hero · Card Grid „Fünf Formate“ · Content Feed (Blog, neueste 3) · Conversion (Kontrast, Newsletter) |
| | **Blog-Übersicht** | Hero · Kategorie-Chips · Content Feed (Blog, paginiert) · Conversion (Newsletter) |
| | **Downloads-Übersicht** | Hero · Content Feed (Downloads) · Conversion |
| | **Webinare-Übersicht** | Hero · Content Feed (Webinare, Beginn in der Zukunft, 1 Featured) · Content Feed (Webinare, Aufzeichnung vorhanden) · Conversion |
| | **ROWAPA TV-Übersicht** | Hero · Format-Chips · Content Feed (Videos) · Conversion |
| Partner werden | **Partner werden (Übersicht)** | Hero · Text Band „Ausgangslage“ · Text Band „Warum ROWAPA“ · Card Grid 2 „Zwei Wege“ (Collection List Partnerrollen) · Steps „Kennenlernprozess“ (Kontrast) · Conversion |
| | **Partner & Kooperationen** | Hero · Spotlight „Akademischer Partner“ · Logo Row „Zertifizierung & Verband“ · Card Grid „Tool-Lizenzen“ · Spotlight „Trihow“ · Conversion |

**Nicht in den 68 Seiten enthalten, aber nötig (Utility):** 404, Impressum, Datenschutz, Newsletter-Bestätigung, Formular-Danke-Seite, Passwort-Seite.

### 5.4 Client-First-Klassenkonvention (Auszug)

| Ebene | Beispiel |
|---|---|
| Struktur | `page-wrapper`, `main-wrapper`, `section_hero`, `padding-global`, `container-large`, `padding-section-large` |
| Komponenten-intern | `hero_component`, `hero_content`, `hero_image-wrapper`, `card-feature_component`, `card-feature_title` |
| Typografie | `heading-style-h1` … `h4`, `text-size-large/medium/regular/small`, `text-style-kicker`, `text-weight-semibold` |
| Utilities | `margin-bottom margin-small`, `spacer-medium`, `max-width-medium`, `text-align-center`, `hide-tablet` |
| Combo/Modifier | `button is-secondary`, `button is-text`, `card-feature is-accent`, `tag is-anmeldung` |

### 5.5 Token-Vorschau (Grundlage für Phase 3)

| Token-Gruppe | Werte |
|---|---|
| **Farben** | `manganese` #1D3149 · `serpent` #486EA3 · `seacliff` #A0C4DF · `plum` #AA1351 · `snowbank` #E8E9E9 · `white` #FFFFFF. Abgeleitet: `manganese-deep` #111D2C (Baseline „Tiefsee“ = Manganese 60 % + Schwarz, für dunkle Kapitel und Footer) · `seacliff-tint` #EAF2F9 · `plum-tint` #FBEEF3 (aus dem Prototyp, Freigabe nötig) |
| **Spacing (8px-Raster)** | `space-1` 8 · `space-2` 16 · `space-3` 24 · `space-4` 32 · `space-6` 48 · `space-8` 64. Section-Padding: small 48 / medium 64 / large 64 + 64 (zwei Units gestapelt, nie Zwischenwerte) |
| **Typografie** | Schriften: TASA Orbiter Display (Custom Font Upload aus dem Repo, 400/500/600/700) · TASA Explorer 800 (Google Fonts). Grössen **Variante CI** (aus % Canvas-Höhe, Referenz 900 px): H1 ≈ 56 px (Bold) · H2 ≈ 32–36 px (Semibold) · H3 ≈ 24 px (Semibold) · Body 16–18 px (Regular) · Caption/Kicker 12–14 px (TASA Explorer Extrabold, Versalien, +0,14 em). **Variante Baseline:** H1 72 px · H2 64 px · Zeilenhöhe 1.05 (siehe E11). Responsiv mit `clamp()` in den Typo-Variablen |
| **Raster** | 12 Spalten, Container 1280 / 1024 / 768 px |
| **Effekte** | keine starken Schatten (CI: „flat, modern, orderly“), Radius 8 px, Rahmen = Manganese 14 % |

---

## 6. Custom-Code-Register (streng limitiert)

| Bedarf (Prototyp) | Native Lösung | Rest-Code | Empfehlung |
|---|---|---|---|
| Diagonal-Ribbon | Div + Transform rotate(45°) + Plum, Komponente `Element / Ribbon` | – | **nativ** |
| Sticky-/Scroll-Effekte der Baseline | IX2 Scroll-Interactions | – | **nativ** |
| Punktemeer, 3D-Punktfiguren, Orbit (Baseline, WebGL/three.js) | Fallback-Bild in der Komponente | gekapseltes Grafik-Modul (eine Datei, versioniert), lädt nur auf Seiten mit `data-grafik` | E10 |
| Farbfluss zwischen Kapiteln, Smooth Scroll (Lenis) | feste Kapitel-Themes, natives Scrollen | – | **streichen** |
| Logo-Laufband | IX2-Loop (Move X, endlos) | – | **nativ** |
| Stimmen-Slider aus dem CMS | Collection List als horizontale Leiste mit Overflow-Scroll; der native Slider kann kein CMS | alternativ Finsweet „CMS Slider“ | nativ, Finsweet nur bei Bedarf |
| Wertering um das Porträt | SVG-Bild mit Text auf Kreisbahn, IX2-Rotation | – | **nativ** |
| Accordion (FAQ) | IX2-Interaction am FAQ-Item | – | **nativ** |
| Mehrstufiges Bewerbungsformular mit Upload | Natives Formular + Tabs-Element als Schritte, Datei-Upload-Feld | – | **nativ** (Upload abhängig vom Site-Plan) |
| Filter-Chips (Blog, TV, Kurse) | Kategorie-Archivseiten als Links (E5) | Alternativ Finsweet Attributes (List Filter) | E5 |
| Webinar-Countdown | Datum statisch anzeigen | ca. 20 Zeilen JS | **weglassen** oder Mini-Skript |
| Mini-Sales-Check (5 Fragen, Ergebnis) | Tabs-Element für die Fragen | Auswertungslogik in JS **oder** externes Tool (z. B. Typeform/Tally-Embed) | E6 |
| YouTube datenschutzfreundlich | Thumbnail-Bild + Link (VideoLink nur nach Klick) | `youtube-nocookie`-Embed bräuchte Code | Thumbnail-first + Consent-Lösung |
| Terminbuchung | Drittanbieter-Embed (Calendly/Bookings) | Embed-Snippet | Embed (zulässig: Funktion, die Webflow nicht bietet) |
| Bezahlung Selbstchecks | Stripe/Payrexx **Payment Links** als normale Links | – | **nativ** |

---

## 7. Offene Entscheidungen (bitte vor Phase 3 beantworten)

| # | Frage | Empfehlung |
|---|---|---|
| **E1** | Programme (6) und Mentorings (3) zu einer Collection „Angebote“ zusammenlegen? | **Ja**: identisches Schema, 1 Template weniger, Reserve bei den Collections |
| **E2** | Site-Plan: CMS (20 Collections) oder Business (40)? | **Business**: Reserve, Formular-Uploads, mehr Submissions |
| **E3** | Die 5 Hilfs-Collections (Kategorien, FAQ, Stimmen, Organisationen, Werkzeuge) freigeben? | **Ja**: Voraussetzung für „eine Information, ein Ort“ |
| **E4** | URL-Schema und Umgang mit den alten URLs von rowapa.ch? | **Mapping liegt vor** (Kapitel 2.3, `exports/02_redirect_mapping.xlsx`): 166 Alt-URLs, davon 82 bleiben 1:1, ca. 63 Redirect-Einträge. Bitte die 29 Zeilen mit Status „Vorschlag – prüfen“ bestätigen oder korrigieren |
| **E5** | Filter auf Übersichten: native Kategorie-Archivseiten oder Finsweet-Filter-Skript? | **Native Archivseiten** (No-Code, SEO). Finsweet nur bei Bedarf an Mehrfachfiltern (Kurse) |
| **E6** | Mini-Sales-Check: externes Tool oder eigenes Mini-Skript? | **Externes Formular-Tool** (vom Kunden selbst pflegbar) |
| **E7** | Mehrsprachigkeit DE/EN/FR/IT (Prototyp-Navigation): zum Start oder später? | Architektur ist lokalisierungsfähig (Labels über Referenzen). **Start DE**, weitere Sprachen als eigene Phase mit Webflow Localization |
| **E8** | Farbe „Tiefsee“ `#111D2C` aus der Baseline offiziell aufnehmen? | **Ja, als abgeleiteter Token** `manganese-deep` (laut Repo = Manganese 60 % + Schwarz) für dunkle Kapitel und Footer, nicht als neue Markenfarbe |
| **E9** | ~~Baseline visuell sichten~~ | **Erledigt** am 25.10.2026 (Kapitel 0.2) |
| **E10** | Punktemeer, 3D-Punktfiguren und Orbit der Baseline (WebGL) übernehmen? | **Ja, aber reduziert:** als *ein* gekapseltes Grafik-Modul nur für Hero, Themenlinien-Featured-Karte und ROWAPA Digital, mit Fallback-Bild und Rücksicht auf „reduzierte Bewegung“. Alles andere aus dem Baseline-Code entfällt oder wird nativ nachgebaut (Kapitel 0.2 d) |
| **E11** | Headline-Grössen: Baseline (H1 ≈ 75 px, H2 ≈ 63 px, Zeilenhöhe 1.04) oder Styleguide (H1 ≈ 54 px, H2 ≈ 32–36 px, Zeilenhöhe 1.2–1.4)? | **Mittelweg:** H1 64 px · H2 48 px · H3 24 px · Zeilenhöhe 1.1 (Headlines) und 1.5 (Body), alles im 8px-Raster. Die editoriale Wirkung der Baseline bleibt, Lesbarkeit auf Unterseiten steigt |
| **E12** | Diagonal-Ribbon (CLAUDE.md, Visual Guidelines) fehlt in der Baseline; dort übernehmen Punkt-Grafiken und Plum-Unterstreichung diese Rolle. Wie soll es weitergehen? | **Beides, klar getrennt:** Punkt-Grafik nur auf Startseite und Hubs; Ribbon als dezentes Element auf Unterseiten und in Bildern (Ecke, 60–80 %, max. 2 pro Bild) |
| **E13** | Alte Slugs übernehmen, wo der Inhalt gleich bleibt? Konkret: Collection `experten` statt `team`, Webinar-Details unter `/webinar/…`, Übersichten `/blog-news`, `/webinare`, `/rowapa-tv`, `/referenzen` | **Ja**: 82 URLs bleiben ohne Redirect erhalten. Die Menü-Bezeichnungen (z. B. „Unsere Kunden“) sind davon unabhängig |
| **E14** | Diese Alt-Angebote fehlen in Sitemap v4: **CAS Professional Sales for Finance**, HRV-Messung, Outsourcing, Booster, Lead Generator, Speaker, 4 Online-Kurse („Wie wirst du …“). Laufen sie weiter? | Bei jedem Angebot, das weiterläuft, eine Zielseite festlegen (bei CAS Sales eher eine eigene Unikat-Seite, analog CAS Leadership). Bis dahin zeigen die Redirects auf die naheliegende Übersicht (siehe Excel) |

### 7.1 Entscheide ROWAPA (25.10.2026) · verbindlich für Phase 3

| # | Entscheid | Umsetzung |
|---|---|---|
| E1 | **Zusammenlegen** | Eine Collection „Angebote“ mit Option „Angebotsart“ (Programm · Mentoring). Damit 19 Collections, 14 Master-Templates |
| E2 | **Business-Plan** | 40 Collections, Formular-Uploads möglich |
| E3 | **Ja** | 5 Hilfs-Collections werden angelegt |
| E4 | **Alt-URLs:** Nr. 3, 6, 10, 15, 27, 33, 34, 105, 112–115, 117, 118, 156 entfallen (Seminare/Themen gibt es nicht mehr). Nr. 120–133 (Experten) → 301 auf `/team` | in `02_redirect_mapping.xlsx` eingetragen. Offen nur noch Nr. 155 (siehe Rückfrage) |
| E5 | **Native Kategorie-Archivseiten** | Collection „Kategorien“ mit öffentlichem Template |
| E6 | **Typeform** | Mini-Sales-Check als Typeform-Embed bzw. Link |
| E7 | **Start DE**, Mehrsprachigkeit wichtig | Alle sichtbaren Labels über Referenzen/Komponenten-Props, keine fest eingebauten Texte in Klassen oder Option-Feldern |
| E8 | **Ja** | Token `manganese-deep` #111D2C |
| E10 | **Zum Start wie empfohlen:** ein gekapseltes Grafik-Modul nur für Hero, Themenlinien-Featured-Karte und ROWAPA Digital. Weitere Baseline-Effekte müssen später machbar bleiben | Jede Komponente mit Grafik bekommt einen Grafik-Bereich (`data-grafik`-Attribut + Fallback-Bild). Das Modul hängt sich dort ein; weitere Effekte lassen sich später ohne Umbau ergänzen. In Stufe 1/2 zuerst mit Fallback-Bildern, das Modul folgt nach der Design-Abnahme |
| E11 | **Ja** | H1 64 · H2 48 · H3 24 px, Zeilenhöhe 1.1 / 1.5 |
| E12 | **Ribbon als Vorschlag, jederzeit komplett entfernbar** | `Element / Ribbon` als eigene Komponente mit Boolean-Prop „Ribbon anzeigen“ in Hero und Bild-Komponenten. Global abschaltbar über die Variable `ribbon-opacity` (0 = aus) |
| E13 | **Ja** | Alte Slugs bleiben. Weil Experten jetzt auf `/team` umgeleitet werden, wird der Slug der Personen-Collection in Stufe 3 neu festgelegt, damit er nicht mit den Redirects kollidiert |
| E14 | **Laufen alle nicht weiter**, später kommen evtl. neue dazu | Redirects entfallen (siehe E4). Neue Angebote später über die Collection „Angebote“ |

### 7.2 Responsivitäts-Regeln (verbindlich ab Stufe 1)

1. **Ultra-Wide:** Breakpoints 1280, 1440 und 1920 px sind aktiv. Container und Grids wachsen mit: mehr Spalten, breitere Container, grössere Abstände. Der Inhalt bleibt nicht starr in der Mitte stehen.
2. **Mobile als eigene Ansicht:** Tablet, Mobile Landscape und Mobile Portrait werden gezielt gestaltet. Komplexe Sektionen erhalten mobile Alternativen; zu viel Inhalt wird mit nativer Sichtbarkeit (`display: none`) gekürzt.
3. **Fluidität:** Innerhalb eines Breakpoints skalieren Typo und Abstände fliessend (`clamp()`, `%`, `vw`). Keine festen Pixelbreiten für Layout-Container.

---

## 8. Vorschau Phase 3 (Go erteilt am 25.10.2026, Ausführung in 4 Stufen)

> **Stand 25.10.2026:** Stufe 1 (Variablen, Klassen, Navbar, Footer, Ribbon, Karten, Styleguide-Seite) ist in Webflow umgesetzt und wartet auf visuelles Feedback. Details: `exports/03_stufe1_designsystem.md`.

1. Schriften einbinden (TASA Orbiter Display als Custom Font aus dem Repo, TASA Explorer über Google Fonts). Variablen-Collections anlegen: Farben, Spacing, Typo, Theme-Modi (Hell/Soft/Kontrast/Tiefsee).
2. Client-First-Basisklassen und Typo-Styles.
3. Elemente und Cards, dann Section-Komponenten mit Props, Varianten und Slots.
4. Collections in Abhängigkeitsreihenfolge anlegen (zuerst Hilfs-Collections, dann Seitentypen, dann offene Collections), inklusive Feldgruppen und Hilfetexten.
5. Seed-Items der 37 festen Detailseiten **als Draft** aus den Prototyp-Texten. Platzhalter-Schalter überall dort an, wo der Prototyp `*` markiert.
6. Templates T1–T15, danach die 29 Unikat-Seiten nach den Rezepten in 5.3.

*Vor jedem dieser Schritte gilt: Stopp und Freigabe laut CLAUDE.md.*
