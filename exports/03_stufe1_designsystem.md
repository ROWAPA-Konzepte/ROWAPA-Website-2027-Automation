# ROWAPA Website 2027 · Stufe 1: Design-System-Fundament & Komponenten

**Projekt:** ROWAPA Website 2027 Automation (Webflow Site-ID `6addf1532819c0aacc74a496`)
**Stand:** 25.10.2026 · Phase 3, Stufe 1 von 4 · **wartet auf visuelles Feedback**
**Baseline (nur visuelle Referenz):** https://rowapa-2027.webflow.io/

---

## 1. Wo anschauen

| Was | Wo |
|---|---|
| Styleguide-Seite (Entwurf, nicht veröffentlicht) | Webflow Designer › Seiten › **Styleguide** (`/styleguide`) |
| Variablen | Designer › Variablen-Panel (Sammlungen: Farben, Theme, Spacing, Typografie, Layout) |
| Klassen | Designer › Style Manager |
| Komponenten | Designer › Komponenten-Panel (Gruppen **01 Global**, **02 Elemente**, **03 Cards**) |

Die Styleguide-Seite zeigt von oben nach unten: Navbar · Intro · Farben · Typografie · Buttons & Icons (auf Hell und Tiefsee) · die fünf Section-Themes · Diagonal-Ribbon · Karten (alle Varianten) · Footer.

Zum Prüfen der Breakpoints im Designer oben die Geräte-Leiste nutzen (1920 · 1440 · 1280 · Desktop · Tablet · Mobile quer · Mobile hoch).

---

## 2. Design-Tokens (Webflow-Variablen)

### 2.1 Farben (Sammlung «Farben»)

| Variable | Wert | Einsatz |
|---|---|---|
| Manganese Black | `#1D3149` | Primary, Text, Kontrast-Flächen |
| Manganese Deep | `#111D2C` | «Tiefsee»: Hero, Footer, digitale Themen (E8) |
| Great Serpent | `#486EA3` | Links, Kicker |
| Sea Cliff | `#A0C4DF` | Akzentflächen, Links auf Dunkel |
| Plum Perfect | `#AA1351` | CTA-Buttons, Akzentlinie, Ribbon |
| Plum Perfect Hover | `#8E0F44` | Hover der CTA |
| Pastel Snowbank | `#E8E9E9` | Neutral, Soft-Sections |
| White | `#FFFFFF` | Basis |
| Sea Cliff Tint | `#D9E7F2` | Sea-Sections, Bild-Platzhalter |
| Plum Tint | `#FBEEF3` | dezente Hervorhebung |
| Manganese Soft (Text) | `#4A5A70` | gedämpfter Text auf Hell |
| Manganese Linie / White Linie | 14 % / 16 % Deckkraft | Rahmen und Trennlinien |
| White Soft (Text) | 76 % Weiss | gedämpfter Text auf Dunkel |
| **Ribbon Deckkraft (0 = aus)** | `0.7` | **globaler Schalter für alle Ribbons (E12)** |
| **Footer-Wortmarke Deckkraft (0 = aus)** | `0.12` | Helligkeit des grossen «ROWAPA» im Footer (Entscheid 25.10.2026: 12 %) |

### 2.2 Theme (Sammlung «Theme», 5 Modi)

Semantische Farben, die sich je nach Section-Theme automatisch umstellen. Die Werte sind in allen Modi vollständig gepflegt.

| Variable | Hell (Basis) | Soft | Sea Cliff | Kontrast | Tiefsee |
|---|---|---|---|---|---|
| Hintergrund | White | Snowbank | Sea Cliff Tint | Manganese | Manganese Deep |
| Text / Überschrift | Manganese | Manganese | Manganese | White | White |
| Text gedämpft | Manganese Soft | Manganese Soft | Manganese Soft | White Soft | White Soft |
| Linie, Karte Linie | Manganese Linie | ← | ← | White Linie | White Linie |
| Akzent | Plum | Plum | Plum | Plum | Plum |
| Karte Hintergrund | White | White | White | Weiss 6 % | Weiss 6 % |
| Link | Great Serpent | ← | ← | Sea Cliff | Sea Cliff |
| Icon Hintergrund / Vordergrund | Manganese / White | ← | ← | Weiss 12 % / White | Weiss 12 % / White |

### 2.3 Spacing (8px-Raster), Typografie, Layout

| Sammlung | Variablen |
|---|---|
| Spacing | space-1 = 8 · space-2 = 16 · space-3 = 24 · space-4 = 32 · space-6 = 48 · space-8 = 64 · space-12 = 96 · space-16 = 128 px · Radius S 4 px · Radius M 8 px |
| Typografie | Schrift Haupt = TASA Orbiter Display (400/500/600/700, selbst gehostet) · Schrift Akzent = TASA Explorer 800 · Zeilenhöhe Headlines 1.1 · Body 1.5 |
| Layout | Container large 80 rem (1280) · xl 90 rem (1440) · xxl 108 rem (1728) · medium 64 rem · small 48 rem |

Fliessende Grössen (`clamp()`) stehen direkt in den Klassen, weil Webflow-Grössenvariablen keine `clamp()`-Werte zulassen.

---

## 3. Responsivität (Regeln aus Report 7.2)

| Breakpoint | Breite | Verhalten |
|---|---|---|
| xxl | ab 1920 | Container 108 rem, H1 80 px, Section-Abstände bis 160 px, seitlicher Rand 64 px, Grid-Abstände 48 px |
| xl | ab 1440 | Container 90 rem, H1 72 px, Navigation mit grösseren Abständen |
| large | ab 1280 | Desktop-Layout mit vollem Fluss |
| main (Desktop) | 992–1279 | Basis; Typo und Abstände skalieren fliessend |
| medium (Tablet) | 768–991 | Desktop-Menü aus → Burger-Menü; Grids 3→2 und 4→2 Spalten; Footer 4→3 Spalten |
| small (Mobile quer) | 480–767 | 2er- und 3er-Grids 1-spaltig, 4er-Grids 2-spaltig; Navbar-CTA ausgeblendet; Footer 2 Spalten; Ribbon kleiner |
| tiny (Mobile hoch) | bis 479 | alle Grids 1 Spalte, reduzierte Inhalte über Sichtbarkeits-Klassen |

**Mehr Spalten auf grossen Screens:** Das automatische `layout-grid` (ohne `is-…-col`) füllt die Breite selbst auf: Bei 1920 px passen mehr Karten nebeneinander als bei 1280 px. Die festen Varianten `is-2/3/4-col` bleiben bewusst bei ihrer Spaltenzahl, damit redaktionell gesetzte Reihen (z. B. 3 Angebote) nicht mit Lücken enden.

**Reduktion auf Mobile** über native Klassen (setzen `display: none`):
`hide` · `hide-tablet` · `hide-mobile-landscape` · `hide-mobile-portrait` · `show-tablet-only` · `show-mobile-only`

---

## 4. Klassen-System (Finsweet Client-First)

| Gruppe | Klassen |
|---|---|
| Seitengerüst | `page-wrapper` › `main-wrapper` › `section_[name]` › `padding-global` › `container-large/medium/small` › `padding-section-small/medium/large` |
| Section-Themes | `theme-hell` · `theme-soft` · `theme-sea` · `theme-kontrast` · `theme-tiefsee` |
| Typografie | `heading-style-h1` … `h5` · `text-style-kicker` · `text-size-large/medium/regular/small/tiny` · `text-weight-medium/semibold/bold` · `text-color-muted/accent` · `text-align-center` · `text-style-link` |
| Abstände | `margin-bottom` + `margin-xxsmall … margin-xlarge` (aus den Spacing-Variablen) · `max-width-small/medium/large` |
| Layout | `layout-grid` (automatisch) + `is-2-col` · `is-3-col` · `is-4-col` |
| Buttons | `button` (Plum) + `is-secondary` · `is-small` · `is-icon-link` · `button-group` |
| Markenelemente | `icon-box` (+ `is-accent`) · `accent-bar` · `ribbon` (+ `is-bottom-left`) · `badge` (+ `is-anfrage` · `is-erstgespraech` · `is-kauf`) |
| Hilfsklassen | `position-relative` · `overflow-hidden` · Sichtbarkeit (siehe 3) |
| Komponenten-Klassen | `navbar_*` · `footer_*` · `card_*` · `form_*` · `newsletter_form` |
| Nur Styleguide | `section_styleguide` · `sg-swatch` · `sg-theme-panel` · `sg-stack` |

**Theme wechseln:** auf der Section die Theme-Klasse austauschen (z. B. `theme-soft` entfernen, `theme-tiefsee` hinzufügen). Texte, Linien, Karten, Icons und Links passen sich automatisch an.

---

## 5. Komponenten

### 5.1 Navbar (01 Global)

- Logo (SVG, nachgebaut aus den Baseline-Pfaden) · Mega-Dropdown **«Was wir tun»** (3 Spalten: Für Organisationen · Meine Entwicklung · Fokusprogramme) · Dropdowns «So arbeiten wir», «Über uns» (inkl. Wissen & Impulse), «Partner werden» · Link «Unsere Kunden» · Sprachwahl DE/EN/FR/IT · CTA
- Dropdowns öffnen bei Hover (natives Webflow-Dropdown)
- Tablet und Mobile: eigenes, reduziertes Burger-Menü (natives Dropdown) mit CTA und Sprachen
- **Props:** CTA Text · CTA Link
- Theme: Kontrast (Manganese)

### 5.2 Footer (01 Global)

- Logo und Adresse · 3 Linkspalten · Newsletter-Formular (natives Webflow-Formular, Button «Abonnieren», Erfolgs- und Fehlermeldung auf Deutsch) · Rechtliches · grosse ROWAPA-Wortmarke **randlos über die volle Bildschirmbreite** (Schriftgrösse 24vw, unten angeschnitten; im Browser bei 390/1440/1920 px geprüft). Helligkeit über die Variable «Footer-Wortmarke Deckkraft»
- Theme: Tiefsee · Inhalte werden direkt in der Komponente gepflegt (gilt automatisch für alle Seiten)

### 5.3 Ribbon (02 Elemente)

| Prop / Variante | Funktion |
|---|---|
| Ribbon anzeigen (Ja/Nein) | an dieser Stelle ein- oder ausblenden |
| Variante «Oben rechts» / «Unten links» | Position in der Ecke |
| global | Variable **Ribbon Deckkraft = 0** schaltet alle Ribbons der Website ab |

Einsetzen: in eine Section oder Bildfläche ziehen, die `position-relative` und `overflow-hidden` hat.

### 5.4 Karten (03 Cards)

| Komponente | Props | Varianten |
|---|---|---|
| **Card Feature** | Kicker · Kicker anzeigen · Titel · Text · Link Text · Link | Hell · Dunkel |
| **Card Teaser** | Bild · Bild Alt-Text · Bild anzeigen · Tag · Tag anzeigen · Meta (Datum/Dauer/Format) · Titel · Auszug · Link Text · Link | – |
| **Card Angebot** | Badge · Titel · Text · Preis · Preis anzeigen · Button Text · Button Link | Auf Anfrage · Erstgespräch · Kauf |

Die ganze Karte ist klickbar (Feature, Teaser). Alle Props lassen sich in Stufe 3 direkt mit CMS-Feldern verbinden (Collection Lists). Die Variante wird im Properties-Panel der Instanz gewählt, nicht über Klassen.

---

## 6. Pflege-Kurzanleitung (No-Code)

1. **Neue Section:** Section mit `section_[name]` + Theme-Klasse › `padding-global` › `container-large` › `padding-section-medium`.
2. **Theme ändern:** Theme-Klasse auf der Section austauschen.
3. **Karte einsetzen:** aus dem Komponenten-Panel in ein `layout-grid` ziehen, Texte rechts im Properties-Panel ausfüllen, Variante wählen.
4. **Ribbon abschalten:** einzeln über «Ribbon anzeigen = Nein» oder global über Variable «Ribbon Deckkraft» = 0.
5. **Farben anpassen:** nur im Variablen-Panel. Nie direkt in Klassen.
6. **Navigation ändern:** Navbar-Komponente öffnen (Doppelklick) und Links bearbeiten; die Änderung gilt überall.

---

## 7. Bekannte Einschränkungen und To-dos im Designer

| # | Punkt | Was zu tun ist |
|---|---|---|
| 1 | Visuelle Prüfung am 25.10.2026 über die Designer-Verbindung (Screenshots in `exports/stufe1-screens/`). Dabei behoben: ungleiche Abstände im Menü (Webflow-Standard-Rand der Dropdowns), `theme-hell` setzt den Hell-Modus jetzt ausdrücklich (helle Fläche in dunkler/Soft-Section), Footer-Logo mit fester Breite. Die Screenshot-Funktion des Designers stellt Wortabstände kleiner Schriften, den Formular-Button und das Footer-Logo fehlerhaft dar; im echten Browser (Chromium-Test mit denselben Schriftdateien) ist alles korrekt | – |
| 2 | **Breakpoints 1280/1440/1920 sind im Designer noch nicht aktiviert** (geprüft: aktiv sind nur Desktop, Tablet, Mobile quer, Mobile hoch) | Die Werte für die grossen Screens sind gespeichert, wirken aber erst nach dem Aktivieren: im Designer in der Geräte-Leiste oben die grösseren Breakpoints über «+» hinzufügen (lässt sich per API nicht auslösen) |
| 3 | Platzhaltertext im Newsletter-Feld | Lässt sich per API nicht setzen: im Designer beim E-Mail-Feld «Ihre E-Mail-Adresse» eintragen |
| 4 | Mobile-Menü als natives Dropdown | Modals/Popovers sind auf der Site nicht aktiviert. Bei Bedarf aktivieren, dann kann das Menü auf ein Vollbild-Modal umgestellt werden (Klassen `mobile-menu_*` sind vorbereitet) |
| 5 | Kombinierte Theme-Klassen | Webflow legt bei gestapelten Klassen (z. B. `section_styleguide` + `theme-soft`) automatisch eine leere Kombi-Klasse an. Die Wirkung kommt von der globalen Theme-Klasse; die leeren Kombis sind unkritisch |
| 6 | Logos | Als SVG aus der Baseline nachgebaut. Bitte durch die offiziellen Vektordaten ersetzen, sobald verfügbar |
| 7 | Bild-Platzhalter | `rowapa-platzhalter-16x10.svg` ist in Teaser-Karten hinterlegt; echte Bilder folgen mit dem CMS (Stufe 3) |
| 8 | Grafik-Modul (E10) | Noch nicht eingebaut; folgt nach der Design-Abnahme (Fallback-Bilder zuerst) |

---

## 8. Nächster Schritt

**Stufe 2:** Startseiten-Prototyp `/home-v2` mit echten Platzhaltertexten aus dem HTML-Template, aufgebaut ausschliesslich aus den Bausteinen dieser Stufe. Start erst nach Freigabe von Stufe 1.
