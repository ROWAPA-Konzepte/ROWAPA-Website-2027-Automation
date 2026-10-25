# ROWAPA Website 2027 · Konzeptpapier

**Stand:** 25.10.2026 · Phase 3, Stufe 2 (Startseite, Rev. 2)
**Kurz:** Neuaufbau der ROWAPA-Website (68 Seiten) in einem neuen, leeren Webflow-Projekt. Das Projekt soll vollständig ohne Code pflegbar sein und klar, souverän und inspirierend auftreten.

---

## 1. Auftrag und Rahmen

| Punkt | Festlegung |
|---|---|
| Umfang | 68 Seiten: 8 CMS-Seitentypen (37 Detailseiten), 7 offene Collections, 29 Unikat-Seiten (Sitemap v4) |
| Plattform | Webflow, neues Projekt «ROWAPA Website 2027 Automation», Clean Slate |
| Pflege | durch ROWAPA selbst im Designer und Editor: Komponenten, CMS, native Interactions |
| Klassen | Finsweet Client-First |
| Custom Code | nur, wo Webflow nativ nichts bietet (Punkte-Grafiken, Hover-Video) |
| Referenz | Baseline `rowapa-2027.webflow.io` nur als visuelle Referenz, nicht als Code-Basis |

## 2. Werte, Ton und Sprache

- **Werte:** klar · souverän · inspirierend. Sie gelten für jede Section.
- **Vier Prüffragen:** Was ist es? Für wen? Welcher Nutzen? Welcher nächste Schritt?
- **Anrede:**
  - Sie für Unternehmen und gemeinsame Seiten.
  - Du nur im Bereich «Meine Entwicklung» und bei Angeboten für Einzelpersonen.
- **Begriff:** «Unternehmen» statt «Organisationen».
- **Fakten:** keine erfundenen Angaben; Fehlendes wird als «[ROWAPA bestätigen]» markiert.
- **Texttabelle:** Zu jeder gebauten Seite gibt es eine (Original → Vorschlag → Begründung).

## 3. Corporate Identity

| Element | Festlegung |
|---|---|
| Farben | Manganese Black `#1D3149` (Primär), Great Serpent `#486EA3`, Sea Cliff `#A0C4DF`, Plum Perfect `#AA1351` (Akzent), White, Pastel Snowbank `#E8E9E9`; abgeleitet Tiefsee `#111D2C` |
| Schrift | TASA Orbiter Display (Bold H1, Semibold H2/H3, Regular Text), TASA Explorer Extrabold für Labels (Versalien, gesperrt) |
| Raster | 8px-Basis (8, 16, 24, 32, 48, 64 …), 12 Spalten |
| Logo | offizielle Dateien von ROWAPA; auf dunklem Grund Signet und Name in Pastel Snowbank |
| Grafik | Diagonal Ribbon 45° (Plum Perfect), dezent; Punkte-Grafiken als Markenbild |
| Kicker | kleiner Übertitel mit rotem Strich (24 × 2 px, Plum) |

## 4. Informationsarchitektur und CMS

Ausführlich in `exports/01_cms_architektur.md`:
- 20 Collections mit Feld-Schemas: 15 laut Sitemap und 5 Hilfs-Collections.
- Master-Templates und Komponenten-Bibliothek.
- Bau-Rezepte der Unikat-Seiten.
- URL-Plan.

Die 166 Alt-URLs sind entschieden (`exports/02_redirect_mapping.xlsx`): 65 × 301-Weiterleitung, 101 ohne (82 identisch, 19 entfallen).

## 5. Design-System (Stufe 1, freigegeben)

- **Variablen:**
  - Farben
  - Theme mit fünf Modi: Hell, Soft, Sea, Kontrast, Tiefsee
  - Spacing, Typografie, Layout
- **Breakpoints:** Desktop, 1280, 1440, 1920, Tablet, Mobile quer, Mobile hoch.
- **Komponenten:**
  - Navbar, Footer, Ribbon
  - Card Feature, Card Teaser, Card Angebot, Card Featured
  - Section Hero Home, Section Digital
- **Styleguide-Seite:** `/styleguide` (intern).

## 6. Startseite (Stufe 2)

### 6.1 Dramaturgie
Hero → Vertrauen (Kundenlogos) → **Was** (Lösungen) → **Warum** (Antrieb) → **Wie** (Vorgehen) → **Beweis** (Erfolge) → **Neu** (ROWAPA Digital) → **Wer** (Team und Partner) → Persönlich weiterkommen → CAS → Insights → Fragen → Kontakt.

### 6.2 Entscheide
| Thema | Entscheid |
|---|---|
| Hero | Variante A «Signatur» (Punktemeer); kein Call to Action, dezenter Scroll-Hinweis; Kicker «Beratung · Training · Digitale Werkzeuge»; Lead «Wir entwickeln Finanzunternehmen: datenbasiert, praxiserprobt, nachhaltig.» |
| Kundenlogos | Laufband, langsam, hält beim Darüberfahren an |
| Partnerlogos | feines Linienraster |
| ROWAPA Digital | Variante «Karten» |
| Wege-Karten | Video-Vorschau beim Darüberfahren |
| Footer | Wortmarke randlos (12 % Deckkraft), dahinter das Punktemeer |
| Section-Übergänge | sauberer Schnitt, kein Farbverlauf |
| Beschreibungen | nur, wo sich der Titel nicht selbst erklärt |

## 7. Bewegung und Grafik

- **Grundsatz:** Bewegung erklärt oder lenkt, nie Selbstzweck.
  - Höchstens eine bewegte Grafik pro Ansicht.
  - Langsam und leise.
  - Bei «Bewegung reduzieren» erscheint ein Standbild.
- **Bleiben:** Punktemeer (Hero, Footer), Punkte-Figur (Vertriebsperformance), Treppe (Vorgehen), Orbit (Digital).
- **Gestrichen:** Wort-für-Wort-Aufbau, Farbfluss beim Scrollen, Smooth Scrolling, Scroll-Jacking, rotierender Wertering.
- **Umsetzung:**
  - Laufband nativ (Webflow Interactions).
  - Hover-Video mit kleinem Skript.
  - Grafik-Modul für die Punkte-Grafiken nach der Design-Freigabe (vorbereitet über `data-grafik`).

## 8. Mobile

- Alle Raster einspaltig, die Lesereihenfolge bleibt.
- **Gekürzt:**
  - Erfolge-Karten ausgeblendet (grosses Zitat bleibt).
  - Bento-Karten ohne Beschreibung.
  - Insights mit 2 statt 3 Karten.
  - Partnerraster kompakt, Beschreibungen gestrafft.
- **Stand:** rund 17 800 px inkl. Footer (vorher rund 18 900 px ohne Footer).
- **Option:** Wische-Reihen für Wege, Insights und Werkzeuge (nochmals rund 3 000 px kürzer).

## 9. Qualität

- **Barrierefreiheit:**
  - eine H1 pro Seite, Überschriften in Reihenfolge
  - Alt-Texte, sprechende Links
  - `aria-hidden` für Duplikate und Deko
  - Reduced Motion
- **Prüfung:** lokaler Chromium-Render bei 1920 / 1440 / 1024 / 820 / 390 px, ohne seitliches Scrollen.
- **Pflege:** Assets in 10 Ordnern, sprechende Klassen- und Komponentennamen, Tooltips an Eigenschaften.

## 10. Roadmap

| Stufe | Inhalt | Status |
|---|---|---|
| Phase 1+2 | Analyse, CMS-Architektur, URL-Plan | erledigt |
| Stufe 1 | Design-System | freigegeben |
| Stufe 2 | Startseite `/home-v2` | Rev. 2 umgesetzt, auf Staging, wartet auf Feedback |
| Stufe 3 | CMS-Collections, Draft-Einträge (Logos, Partner, Team, Referenzen, Blog) | nach Freigabe Stufe 2 |
| Stufe 4 | Templates und Unikat-Seiten | danach |
| Grafik-Modul | Punkte-Grafiken als Animation | nach Design-Freigabe |
| Go-live | Domain, Weiterleitungen, Favicon, SEO | zum Schluss, nur mit Freigabe |

## 11. Offene Punkte

1. Feedback zur Staging-Version (Laufband, Hover-Video, Mobile).
2. Weitere Kennzahlen, die gezeigt werden dürfen.
3. Stehendes Logo (Signet über Name) als SVG, falls vorhanden.
4. Favicon und Webclip in den Site settings hochladen (von Hand).
5. Ungenutzte, nachgebaute Logo-Assets in Webflow löschen (nur mit OK).
6. Die Hilfs-Collection «Organisationen» (Logos von Kunden, Partnern, Verbänden) wird in Stufe 3 nach der neuen Begriffsregel benannt. Vorschlag: «Unternehmen & Partner».
