# ROWAPA Website 2027 · Benutzerhandbuch

**Für:** das ROWAPA-Team, das die Website in Webflow selbst pflegt
**Laufend gepflegt** · zuletzt 25.10.2026 · Stufe 2 (Startseite) · Webflow-Projekt «ROWAPA Website 2027 Automation»
**Wächst mit jeder Stufe:** Mit Stufe 3 kommt die CMS-Pflege dazu.

---

## 1. Überblick: Was liegt wo?

| Bereich | Wo in Webflow | Wofür |
|---|---|---|
| Seiten | Designer › links **Pages** | `Home v2 (Prototyp)` (`/home-v2`) ist die neue Startseite; `Styleguide (intern)` zeigt alle Bausteine |
| Komponenten | Designer › links **Components** | wiederverwendbare Bausteine: Navbar, Footer, Karten, Hero, Section Digital |
| Variablen | Designer › links **Variables** | Farben, Abstände, Schriften, Theme-Farben |
| Klassen | Designer › rechts **Style** bzw. Style Manager | Gestaltung nach Finsweet Client-First |
| Bilder, Logos, Videos | Designer › links **Assets** | in 10 Ordnern sortiert (siehe Kap. 4) |
| Animationen | Designer › rechts **Interactions** | z. B. «Logo-Laufband» |
| Inhalte (ab Stufe 3) | **CMS** | Blog, Team, Referenzen, Logos usw. |

**Grundbegriffe in einem Satz:**
- **Komponente:** ein Baustein, den man einmal ändert und der sich überall ändert.
- **Eigenschaft (Property):** ein Feld einer Komponente, das pro Einsatz anders sein darf, z. B. Titel oder Bild einer Karte.
- **Variante:** eine Gestaltungsart derselben Komponente, z. B. «Karten» oder «Liste».
- **Theme:** Farbstimmung einer Section. Es gibt fünf:
  - `theme-hell` (weiss)
  - `theme-soft` (Snowbank)
  - `theme-sea` (Sea Cliff hell)
  - `theme-kontrast` (Manganese)
  - `theme-tiefsee` (sehr dunkel)

---

## 2. Häufige Aufgaben Schritt für Schritt

### 2.1 Text ändern
1. Text auf der Seite doppelklicken und direkt schreiben.
2. Steht der Text in einer Komponente (Karte, Hero), Komponente anklicken und rechts unter **Properties** das Feld ändern.
3. Den Haupttitel (H1) im Hero direkt auf der Seite ändern. Er ist bewusst keine Eigenschaft.

### 2.2 Bild tauschen
1. Bild anklicken › rechts Zahnrad (Settings) › **Replace Image**.
2. Das Bild aus dem passenden Asset-Ordner wählen und den **Alt-Text** setzen: kurz beschreiben, was zu sehen ist.
3. Bei Karten das Bild in den Properties der Karte wählen.

### 2.3 Neue Section mit kleinem Übertitel
1. Eine bestehende Section kopieren (Navigator › Rechtsklick › Duplicate).
2. Der kleine Übertitel steht in `kicker`. Darin liegt der rote Strich (`kicker_line`) und der Text (`text-style-kicker`). Nur den Text ändern: 1–3 Wörter, nie den Titel wiederholen.
3. Für die Farbe die Theme-Klasse der Section tauschen, z. B. `theme-soft`. Nie zwei gleiche Themes direkt nacheinander.

### 2.4 Karten
| Komponente | Einsatz | Wichtige Eigenschaften |
|---|---|---|
| **Card Featured** | grosse Karte mit Grafik (Leitthema) | Kicker, Titel, Text, Grafik, Grafik-Alt, Button-Text, Link |
| **Card Feature** | Themen- und Werkzeugkarten | Kicker, Titel, Text, Link-Text, Link, **Grafik anzeigen** und **Grafik** (Punktfigur unten rechts, auf dem Handy ausgeblendet). Varianten «Hell», «Dunkel», «Hell · kompakt» (auf dem Handy ohne Text) |
| **Card Teaser** | Bildkarten (Wege, Blog) | Bild, Tag, Meta, Titel, Auszug, Link, **Video URL (Hover)** |

### 2.5 Hover-Video einer Karte setzen
1. Die MP4-Datei (kurze Schleife, ohne Ton, möglichst unter 1 MB) im Ordner «04 Videos» hochladen.
2. Den Link der Datei kopieren (Asset anklicken › Link kopieren).
3. Card Teaser anklicken › Properties › **Video URL (Hover)** › Link einfügen.

Leer lassen bedeutet: kein Video. Das Video spielt nur, wenn die Maus über der Karte ist, auf Handys nie. Sichtbar ist es erst auf der veröffentlichten Seite (gesteuert vom Skript «ROWAPA Grafik»).

### 2.6 Kundenlogo ergänzen (Laufband)
1. Logo (PNG oder SVG, transparent) in «06 Kundenlogos» hochladen.
2. In der Section Kundenlogos unter `logos_track` liegen zwei Listen `logos_list`. Ein bestehendes Logo **in beiden Listen** duplizieren und das Bild tauschen. Die zweite Liste sorgt für die nahtlose Schleife.
3. Den Alt-Text nur in der ersten Liste setzen (Firmenname). In der zweiten Liste bleibt er leer.

Der Titel über dem Laufband («Unter anderem vertrauen uns …») ist nur für Screenreader da (Klasse `logos_label`) und auf der Seite unsichtbar.

Ab Stufe 3 kommen die Logos aus dem CMS; dann genügt ein Eintrag.

### 2.7 Partnerlogo ergänzen
Ein Logo im Raster «Partner und Zertifizierungen» duplizieren und das Bild tauschen. Die Linien entstehen automatisch über die Klasse `is-cell`.

### 2.8 Varianten umschalten
- **ROWAPA Digital:** Section anklicken › Properties › Variante «Karten» (aktuell, entschieden) oder «Liste».
- **Hero:** Variante «A · Signatur» (entschieden) oder «B · Editorial» (Reserve für Unterseiten).

### 2.9 Navigation und Footer ändern
Die Komponente doppelklicken, Links und Texte bearbeiten und mit Esc verlassen. Die Änderung gilt auf allen Seiten.

### 2.10 Footer-Wortmarke heller oder dunkler
Variables › «Footer-Wortmarke Deckkraft» (aktuell 12 %).

### 2.11 Animationen
- **Logo-Laufband:** Interactions › «Logo-Laufband». Dauer 45 s pro Durchlauf, hält beim Darüberfahren an. Bei «Bewegung reduzieren» steht es still.
- **Hero-Titelzeilen:** Interactions › «Hero-Titelzeilen» (in der Komponente Section Hero Home, Variante A). Die drei Zeilen werden im Wechsel hell und rot unterstrichen, je 5 s. Tempo im Interactions-Panel änderbar (Positionen 0 / 5 / 10 s).
- **Punkte-Grafiken und kleine Bewegungen:** Punktemeer (Header, Footer), Punktfiguren (Lösungen), Zähler (Was uns antreibt), Treppe (Unser Vorgehen), Kugel und Kacheln (ROWAPA Digital) bewegt das Skript «ROWAPA Grafik». Im Designer sieht man die Standbilder; die Bewegung gibt es nur auf der veröffentlichten Seite. Einstellungen über Custom Attributes, siehe 2.13. Bei «Bewegung reduzieren» bleibt alles ruhig stehen.

### 2.12 Favicon und Webclip
Site settings › General › Favicon (`rowapa-favicon-32.png`) und Webclip (`rowapa-webclip-256.png`) hochladen. Die Dateien liegen in Assets › «01 Marke (CI)» und im Repository unter `exports/ci-logos/offiziell/`.

### 2.13 Punkte-Grafiken einstellen und Figuren tauschen
- **Figur tauschen:** Neues PNG mit transparentem Hintergrund in «02 Grafiken» hochladen, Karte auswählen › Properties › **Grafik** › Bild wählen. Die Animation entsteht von selbst aus dem Bild. JPG-Bilder bleiben ohne Animation stehen.
- **Figur ausblenden:** Properties › **Grafik anzeigen** auf «Nein».
- **Feineinstellung:** Element mit dem Attribut `data-grafik` auswählen (z. B. `hero_grafik`, `card_grafik`, `stat_number`, `vorgehen_media`, `digital_visual`) › Zahnrad › Custom attributes:
  - `data-tempo` (0.5 halb so schnell, 2 doppelt; gilt für alle Grafiken), `data-dichte` (weniger/mehr Punkte), `data-hoehe` (Wellenhöhe), `data-kraeuseln` = `aus`, `data-verzoegerung` (Sekunden), `data-spalten` (Treppe, siehe 2.18).
- **Farben:** Das Punktemeer nimmt die Variablen Great Serpent, White und Plum Perfect. Der Verlauf hinter der Treppe bei Vertriebsperformance ist die Klasse `card_featured_grafik`.
- Technische Details: `tools/grafik/LIESMICH.md` im Repository.

### 2.14 Kundenstimmen-Slider (Unsere Erfolge)
- **Stimme ändern:** Im Navigator den Slider öffnen › Slide auswählen › Texte und Bild direkt ändern.
- **Stimme ergänzen:** Slider auswählen › Zahnrad › «Add slide», danach den Inhalt einer bestehenden Slide (Block `quote_featured`) kopieren und einfügen.
- **Automatischer Wechsel (optional):** Slider auswählen › Zahnrad › Animation «Cross Fade», Auto-play ein, Delay 8 s. Heute wechselt man von Hand mit Pfeilen und Punkten.
- Ab Stufe 3 kommen die Kundenstimmen aus dem CMS; der Slider bleibt für die Startseite.

### 2.15 Video «Wer wir sind»
Knopf «Wer wir sind · Video» (Section Team) auswählen › Zahnrad › **Lightbox Settings** › Media › «+» › Vimeo-Link einfügen (heute: `https://vimeo.com/738627796`). Der Film öffnet sich in einer Ebene über der Seite und lädt erst beim Klick.

### 2.16 Veröffentlichen
- **Staging (Test):** `rowapa-website-2027-automation.webflow.io`. Hier wird getestet.
- **Domain (live):** erst nach Freigabe aller Stufen und Einrichtung der Weiterleitungen (`exports/02_redirect_mapping.xlsx`).
- Vor jedem Veröffentlichen: Vorschau (Auge-Symbol) prüfen, auch auf Tablet und Handy.

### 2.17 Kennzahlen (Was uns antreibt)
- **Zahl ändern:** Zahl im Text direkt überschreiben, z. B. «150» oder «100 %». Der Zähler übernimmt den neuen Wert von selbst; Zusätze wie «%» oder «CHF» bleiben stehen.
- **Zähler ausschalten:** Zahl auswählen › Zahnrad › Custom attributes › `data-grafik` löschen.

### 2.18 Unser Vorgehen (Treppe und Phasen)
- **Texte der Phasen:** direkt in der Liste ändern. Die Nummern (01–04) sind normaler Text.
- **Hervorhebung:** Die aktive Phase trägt die Zusatzklasse `is-aktiv` (auf `step_item` und `step_number`). Im Designer ist Phase 01 hervorgehoben; auf der Seite wandert die Hervorhebung mit der Treppe.
- **Bild der Treppe:** `grafik-vorgehen-treppe.png` (Stufen im Ruhezustand, transparenter Hintergrund). Die Plum-Hervorhebung erzeugt das Skript aus diesem Bild. Wird ein anderes Bild mit anderer Aufteilung eingesetzt, am Bildrahmen (`vorgehen_media`) das Attribut `data-spalten` mit den drei Spaltengrenzen setzen (Anteile der Bildbreite, z. B. `0.26,0.5,0.75`).

### 2.19 ROWAPA Digital (Kugel und Kacheln)
- **Kachel ändern:** Im Navigator `digital_visual` › `orbit_kacheln` › Kachel öffnen. Name direkt ändern, Symbol im Bildfeld tauschen (SVG in «02 Grafiken», z. B. `icon-anker.svg`), Link im Zahnrad.
- **Reihenfolge:** Die Kacheln gehören der Reihe nach zu den Karten darunter (1. Kachel = 1. Karte usw.). Wer eine Karte verschiebt, verschiebt die Kachel mit.
- **Lage:** Die Bahn ist das Element `orbit_bahn` (gepunktete Ellipse). Grösse und Lage im Style-Panel ändern; die Kacheln folgen auf der Seite der Bahn. Die Startplätze im Designer setzen die Zusatzklassen `is-anker`, `is-kompass`, `is-lotse`, `is-segel`, `is-logbuch`.
- **Kugel:** Bild `grafik-wissensplattform-kugel.png` mit der Klasse `orbit_kugel` (Grösse über die Höhe in Prozent). Die drehende Kugel zeichnet das Skript genau an dieser Stelle.
- **Beschriftung «Wissensplattform»:** Element `orbit_label`, Text direkt ändern.

### 2.20 Insights-Reihe
- **Beitrag ergänzen:** Einen Block `reihe_item` (mit Karte darin) duplizieren und die Karte über die Properties befüllen (Bild, Tag, Datum, Titel, Auszug, Link). Neueste Beiträge zuerst.
- **Sichtbar:** Desktop 3 Karten, Tablet 2, Handy 1 mit Anschnitt. Pfeile und Fortschrittslinie passen sich der Anzahl an; bei 3 oder weniger Karten verschwinden sie.
- Ab Stufe 3 wird die Reihe eine CMS-Liste; der Aufbau bleibt gleich.

### 2.21 Startbildschirm (Header bis Logo-Band)
- Hero und Logo-Band liegen zusammen in der Hülle `startscreen_wrapper`. Sie ist genau so hoch wie das Fenster minus Navigation; der Hero füllt den Platz, das Logo-Band schliesst mit der Fensterunterkante ab. Das gilt auf jedem Format.
- Mehr Luft im Hero: Klasse `padding-section-large` mit Zusatz `is-hero` (Abstände oben und unten). Höhe der Navigation geändert? Dann in `startscreen_wrapper` den Wert der Mindesthöhe anpassen (heute 4,5 rem, Tablet und Handy 4 rem).

### 2.22 Schriftgrössen
- Fliesstext 17 px (`text-size-regular`), gross 19–21 px, mittel 19 px, klein 15 px, sehr klein 13 px. Kicker 13–15 px, Buttons 14 px (klein 13 px), Navigation 15 px, Tags und Badges 12 px.
- Grössen immer an der Klasse ändern (Style-Panel), nie am einzelnen Element. Kleiner als 12 px nur für reine Zierde.

### 2.23 ROWAPA Digital: Texte und Buttons
- Instanz der Komponente «Section Digital» auswählen › rechts **Properties**: Kicker, Titel, Einleitung, Hinweis Titel, Hinweis Text, Button 1 (Text, Link), Button 2 (Text, Link), Beschriftung Kugel. Alles ohne die Komponente zu öffnen.
- Die fünf Karten sind eigene Karten-Komponenten (Properties wie jede Karte). Kachel und Karte gehören der Reihe nach zusammen; Darüberfahren über eine Kachel hebt die Karte hervor (Klasse `is-verbunden`) und umgekehrt.
- Namen der oberen Kacheln (Anker, Segel, Logbuch) stehen über der Kachel: Zusatzklasse `is-oben` an `orbit_tile-name`. Auf der Seite setzt das Skript sie je nach Lage selbst.

### 2.24 Team-Reihe
- Mitglied ergänzen: eine Personenkarte in `team_grid` duplizieren und befüllen. Die Schlusskarte «Weitere Teammitglieder» bleibt immer die letzte.
- Sichtbar: Desktop gut 4 Karten, Tablet 2,4, Handy 1,5; der Anschnitt zeigt, dass es weitergeht. Pfeile und Linie passen sich an.

### 2.25 Variantenseite (intern)
- `/varianten` zeigt die Vorschläge der Runde 4 nebeneinander; oben die Leiste zum Umschalten (A, B, C je Thema). Sie ist nicht verlinkt und wird nach dem Entscheid gelöscht.

---

## 3. Regeln für Inhalte (Kurzfassung)

Ausführlich in `exports/04_redaktionsleitfaden.md`.

- **Werte:** klar · souverän · inspirierend.
- **Jede Section beantwortet vier Fragen:** Was ist es? Für wen? Welcher Nutzen? Welcher nächste Schritt?
- **Anrede:**
  - **Sie** für Unternehmen und gemeinsame Seiten.
  - **Du** nur im Bereich «Meine Entwicklung» und bei Angeboten für Einzelpersonen.
  - Nie gemischt in einer Section.
- **Begriffe:** «Unternehmen» statt «Organisationen». Produktnamen (Anker, Kompass, Lotse, Segel, Logbuch) immer mit Klartext.
- **Schreibweise:** Schweizer Rechtschreibung («ss»), kurze Sätze, keine Superlative, Zahlen nur mit Beleg.
- **Barrierefreiheit:**
  - Alt-Text für jedes inhaltliche Bild.
  - Sprechende Linktexte, nie «Mehr» allein.
  - Überschriften in Reihenfolge (eine H1 pro Seite).

## 4. Assets: Ordner

| Ordner | Inhalt |
|---|---|
| 01 Marke (CI) | offizielle Logos, Signete, Favicon, Webclip |
| 02 Grafiken | Standbilder der Punkte-Grafiken, Platzhalter |
| 03 Fotos | Seminar- und Themenfotos |
| 04 Videos | Hover-Schleifen der Wege-Karten |
| 05 Team | Porträts |
| 06 Kundenlogos | Kundenlogos (Laufband) |
| 07 Partnerlogos | Partner und Zertifizierungen |
| 08 Blog und Insights | Beitragsbilder, Webinar, ROWAPA TV |
| 09 Erfolge | Referenzbilder |
| 10 CAS | CAS-Bilder |

## 5. Gestaltung: Do und Don't

| Do | Don't |
|---|---|
| Abstände über die Spacing-Variablen (8er-Raster) | Pixelwerte frei eintippen |
| Farben über Variablen bzw. Theme-Klassen | Hex-Farben direkt setzen |
| Bestehende Klassen wiederverwenden | Neue Klassen für Einzelfälle anlegen |
| Logo mit Schutzraum, auf dunklem Grund die Variante «dunkler Hintergrund» | Logo verzerren, drehen, einfärben |
| Bilder vor dem Upload verkleinern (max. ca. 2000 px Breite) | grosse Originalfotos hochladen |

## 6. Hilfe

- **Etwas sieht falsch aus:** zuerst prüfen, ob die richtige Theme-Klasse auf der Section liegt.
- **Etwas kaputt gemacht:** Site settings › **Backups** › einen früheren Stand wiederherstellen.
- **Custom Code:** Es gibt nur ein Skript: «ROWAPA Grafik» (Punkte-Grafiken, Zähler, Treppe, Kugel mit Kacheln, Insights-Pfeile, Hover-Videos), über die Webflow-Schnittstelle site-weit eingebunden. Site settings › Custom code bleibt leer. Bitte nicht ändern; neue Fassungen registriert Claude.
