# ROWAPA Website 2027 · Benutzerhandbuch

**Für:** das ROWAPA-Team, das die Website in Webflow selbst pflegt
**Laufend gepflegt** · zuletzt 26.10.2026 · Stufe 2 (Startseite) · Webflow-Projekt «ROWAPA Website 2027 Automation»
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
  - Modus «Plum» (gedämpftes Plum, weisse Schrift) gibt es nur als Hervorhebung, z. B. für die Digital-Karten beim Darüberfahren

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
| **Card Feature** | Themen- und Werkzeugkarten | Kicker, Titel, Text, Link-Text, Link, **Grafik anzeigen** und **Grafik** (Punktfigur bzw. Symbol). Varianten: «Hell», «Dunkel», **«Zeile · Lösungen (Handy ohne Text)»** (Startseite «Was wir tun»: weisse Zeile, grau beim Darüberfahren, Pfeil hinter dem Titel, ganze Zeile ist der Link) und **«Weiss · Symbol (Digital)»** (ROWAPA Digital: weisse Karte, Symbol oben) |
| **Card Teaser** | Bildkarten (Wege, Blog) | Bild, Tag, Meta, Titel, Auszug, Link, **Video URL (Hover)**. Der Tag (z. B. «Sales») steht in Plum-Versalien vor dem Datum, nicht im Foto. Varianten: «Base» (Insights), «Zeile · Sea Cliff», «Zeile · Snowbank · Bild rechts», «Zeile · Plum» (Meine Entwicklung) |

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
- **Titel-Strich zeichnen:** Interactions › «Titel-Strich zeichnen». Unter jedem H2 zeichnet sich der kurze Plum-Strich von links, sobald der Titel ins Bild kommt (Zusatzklasse `is-gezeichnet`). Länge, Farbe, Tempo: Klasse `heading-style-h2`, Zustand «::after».
- **Team-Kacheln nacheinander:** Interactions › «Team-Kacheln nacheinander». Die Kacheln steigen nacheinander leicht auf und blenden ein (je 0,1 s versetzt, Dauer 0,7 s).
- **CAS Farbfläche einblenden:** Interactions › «CAS Farbfläche einblenden». Die einzige Einblendung der Startseite: Die dunkle Fläche hinter dem Text im Blickpunkt blendet in 1,4 s ein, Titel und Text folgen. Bei «Bewegung reduzieren» steht alles sofort da.
- **Punkte-Grafiken und kleine Bewegungen:** Punktemeer (Header, Footer), Punktfiguren (Lösungen), Zähler (Was uns antreibt), Treppe (Unser Vorgehen), Kugel und Kacheln (ROWAPA Digital), Klick auf ein Symbol, Knopf «Nach oben» bewegt das Skript «ROWAPA Grafik». Im Designer sieht man die Standbilder; die Bewegung gibt es nur auf der veröffentlichten Seite. Einstellungen über Custom Attributes, siehe 2.13. Bei «Bewegung reduzieren» bleibt alles ruhig stehen.

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
- **Wechsel:** heute «Cross Fade», automatisch alle 4 s, dazu Pfeile und Punkte. Ändern: Slider auswählen › Zahnrad (Animation, Auto-play, Delay).
- **Acht Stimmen (seit Runde 18):** Die drei Zitate, die früher unter dem Slider standen, sind jetzt die Folien 6–8. Das alte Zitate-Raster (`layout-grid is-3-col is-erfolge`) ist ausgeblendet (Klasse `is-erfolge`: Display none), nicht gelöscht.
- **Ein Block pro Bildschirm (seit Runde 14):** Titel, Foto, Zitat, Name und Steuerung passen auf jedem Format zusammen in ein Fenster. Dafür ist das Foto (`quote_image-wrapper`) höchstens «Fensterhöhe minus 22 rem» hoch (1440–1919 minus 24 rem, ab 1920 minus 23 rem, Tablet minus 18 rem, Handy im Format 16:10). Der Text steht oben, das Zitat in der Mitte, der Name unten auf Höhe der Fotounterkante; Punkte und Pfeile stehen rechts daneben (Handy: nur Punkte, gewischt wird mit dem Finger).
- **Gleich hohe Folien:** Die Maske des Sliders trägt die Klasse `erfolge_maske` (Flexbox, nebeneinander, gleich hoch), jede Folie die Klasse `erfolge_folie` (schrumpft nicht, Höhe automatisch). So sind alle Folien gleich hoch und der Name steht immer auf derselben Linie. Beide Klassen nicht entfernen. Neue Folie: eine bestehende Folie duplizieren, dann trägt sie die Klasse schon. Kein Raster (Grid) auf die Maske legen: Das zeichnet der Webflow-Designer falsch (alle Folien gequetscht nebeneinander), auch wenn die Website richtig aussieht (Runde 17).
- **Bildauswahl:** Gesichter in die Bildmitte; auf kleinen Laptops und dem Handy wird das Foto breiter als hoch angeschnitten.
- Ab Stufe 3 kommen die Kundenstimmen aus dem CMS; der Slider bleibt für die Startseite.

### 2.15 Video «Wer wir sind»
Knopf «Wer wir sind · Video» (Section Team) auswählen › Zahnrad › **Lightbox Settings** › Media › «+» › Vimeo-Link einfügen (heute: `https://vimeo.com/738627796`). Der Film öffnet sich in einer Ebene über der Seite und lädt erst beim Klick.

### 2.16 Veröffentlichen
- **Staging (Test):** `rowapa-website-2027-automation.webflow.io`. Hier wird getestet.
- **Domain (live):** erst nach Freigabe aller Stufen und Einrichtung der Weiterleitungen (`exports/02_redirect_mapping.xlsx`).
- Vor jedem Veröffentlichen: Vorschau (Auge-Symbol) prüfen, auch auf Tablet und Handy.

### 2.17 Kennzahlen (Was uns antreibt)
- **Grösse:** Klasse `stat_number`. Die Zahlen bleiben immer einzeilig und wachsen mit der Fensterbreite (Desktop bis 96 px, Tablet 48–64 px, Handy 36–48 px).
- **Zahl ändern:** Zahl im Text direkt überschreiben, z. B. «150» oder «100 %». Der Zähler übernimmt den neuen Wert von selbst; Zusätze wie «%» oder «CHF» bleiben stehen.
- **Zähler ausschalten:** Zahl auswählen › Zahnrad › Custom attributes › `data-grafik` löschen.

### 2.18 Unser Vorgehen (Treppe und Phasen)
- **Texte der Phasen:** direkt in der Liste ändern. Die Nummern (01–04) sind normaler Text.
- **Aufbau (seit Runde 18):** Titel und Einleitung stehen links, die Treppe rechts daneben (Style `vorgehen_media`, Raster `vorgehen_layout` Spalte 2, Zeile 1). Die vier Phasen stehen darunter in einer Reihe (`steps_list`), auf dem Tablet 2 × 2, auf dem Handy als Wischkarten; die Treppe ist auf dem Handy ausgeblendet. Die Höhe der Treppe ist an die Fensterhöhe gekoppelt (`vorgehen_image`: höchstens Fensterhöhe minus 28,5 rem). Das Bild ist mit Rand links «auto» rechtsbündig gesetzt, nicht mit Flexbox: Mit Flexbox zeichnet das Skript die Treppe neben das Bild.
- **Unterzeilen:** Die fetten Unterzeilen (`step_lead`) sind ausgeblendet (Klasse `step_lead`: Display none), nicht gelöscht. Wieder einblenden: Display auf Block stellen.
- **Ablauf:** Sie baut sich auf, sobald sie in der Bildmitte ist; die Stufen leuchten nacheinander Plum, die Phase links leuchtet mit, danach steht Phase 01. Attribut `data-modus="folge"` an `vorgehen_media` (`ruhig` = ohne Farbdurchlauf).
- **Hervorhebung:** Die aktive Phase trägt die Zusatzklasse `is-aktiv` (auf `step_item` und `step_number`). Im Designer ist Phase 01 hervorgehoben; auf der Seite wandert die Hervorhebung mit der Treppe.
- **Bild der Treppe:** `grafik-vorgehen-treppe.png` (Stufen im Ruhezustand, transparenter Hintergrund). Die Plum-Hervorhebung erzeugt das Skript aus diesem Bild. Wird ein anderes Bild mit anderer Aufteilung eingesetzt, am Bildrahmen (`vorgehen_media`) das Attribut `data-spalten` mit den drei Spaltengrenzen setzen (Anteile der Bildbreite, z. B. `0.26,0.5,0.75`).

### 2.19 ROWAPA Digital (Kugel und Kacheln)
- **Kachel ändern:** Im Navigator `digital_visual` › `orbit_kacheln` › Kachel öffnen. Name direkt ändern, Symbol im Bildfeld tauschen (SVG in «02 Grafiken», z. B. `icon-anker.svg`), Link im Zahnrad.
- **Reihenfolge:** Die Kacheln gehören der Reihe nach zu den Karten darunter (1. Kachel = 1. Karte usw.). Wer eine Karte verschiebt, verschiebt die Kachel mit.
- **Abstände:** Die Kacheln stehen in gleichen Abständen entlang der Bahn; die letzte Kachel (Logbuch) startet oben.
- **Drehung:** Kugel eine Umdrehung in 24 s, Kacheln eine Runde in 45 s. Angehalten wird nur, solange die Maus über den Karten darunter ist. Tempo ändern: Attribut `data-tempo` an `digital_visual` (z. B. `0.7` langsamer).
- **Lage:** Die Bahn ist das Element `orbit_bahn` (gepunktete Ellipse). Grösse und Lage im Style-Panel ändern; die Kacheln folgen auf der Seite der Bahn. Die Startplätze im Designer setzen die Zusatzklassen `is-anker`, `is-kompass`, `is-lotse`, `is-segel`, `is-logbuch`.
- **Kugel:** Bild `grafik-wissensplattform-kugel.png` mit der Klasse `orbit_kugel` (Grösse über die Höhe in Prozent). Die drehende Kugel zeichnet das Skript genau an dieser Stelle.
- **Beschriftung «Wissensplattform»:** Element `orbit_label`, Text direkt ändern.
- **Grösse (seit Runde 18):** Kacheln, Symbole, Namen und Beschriftung wachsen mit der Fensterhöhe (`orbit_tile` `clamp(2.75rem, 5.6svh, 5rem)`, `orbit_tile-icon` `clamp(1.375rem, 2.6svh, 2.375rem)`, `orbit_tile-name` `clamp(0.8125rem, 1.45svh, 1.125rem)`). Der Orbit erscheint ab 1280 px; darunter steht die Einleitung über die ganze Breite. Die Kartentexte erscheinen ab 1920 px und auf dem Tablet, auf Tablet und Handy sind die Karten eine Wischreihe.
- **Klick auf ein Symbol:** Die passende Karte hebt sich kurz an und wird ins Bild geholt. Aussehen: Klasse `card` › Zusatzklasse `is-angetippt` (heute Plum-Rand, Schatten, 12 px nach oben). Den Link zur Unterseite trägt die Karte.
- **Bühne:** Die Section ist oben dunkel und unten auf 15 rem weiss (Hintergrundverlauf an `section_digital`); die Karten sitzen auf der Kante. Wird der Text länger, den Wert im Verlauf anpassen.

### 2.20 Insights-Reihe
- **Beitrag ergänzen:** Einen Block `reihe_item` (mit Karte darin) duplizieren und die Karte über die Properties befüllen (Bild, Tag, Datum, Titel, Auszug, Link). Neueste Beiträge zuerst.
- **Sichtbar:** Desktop 3 Karten neben der Titelspalte, Tablet 2, Handy 1 mit Anschnitt. Geblättert wird mit den Pfeilen, per Wischen oder Trackpad; einen Scrollbalken gibt es nicht (Style `insights_reihe`: «scrollbar-width: none»). Die Fortschrittslinie (`reihe_fortschritt`) ist ausgeblendet. Bei 3 oder weniger Karten verschwinden die Pfeile.
- **Tag und Datum:** Tag (z. B. «Leadership») und Datum stehen in einer Zeile über dem Titel (`card_meta`), nicht im Foto.
- **Variante «Insights Reihe» (seit Runde 18):** Bildhöhe an die Fensterhöhe gekoppelt, Auszug 992–1919 px ausgeblendet. Neue Karten in der Reihe bekommen diese Variante.
- **Webinare und ROWAPA TV:** Ab 992 px stehen die zwei Hinweise links unter «Alle Inhalte» (Klasse `link-teaser-list is-seitenspalte`, Spalte 1, Zeile 2), auf Tablet und Handy unter den Karten.
- Ab Stufe 3 wird die Reihe eine CMS-Liste; der Aufbau bleibt gleich.

### 2.21 Startbildschirm (Header bis Logo-Band)
- Hero und Logo-Band liegen zusammen in der Hülle `startscreen_wrapper`. Sie ist genau so hoch wie das Fenster minus Navigation; der Hero füllt den Platz, das Logo-Band schliesst mit der Fensterunterkante ab. Das gilt auf jedem Format.
- **Titelzeilen immer einzeilig:** Jede der drei Header-Zeilen steht auf allen Formaten auf einer Zeile. Dafür ist der Textblock (`hero_content`) bis 62 rem breit, und auf dem Handy rechnet sich die Schriftgrösse aus der Fensterbreite (`heading-style-h1`, Breakpoint «Mobile portrait»). Längere Zeilen vorher auf dem Handy prüfen.
- Mehr Luft im Hero: Klasse `padding-section-large` mit Zusatz `is-hero` (Abstände oben und unten). Höhe der Navigation geändert? Dann in `startscreen_wrapper` den Wert der Mindesthöhe anpassen (heute 4,5 rem, Tablet und Handy 4 rem).

### 2.22 Schriftgrössen
- H2 auf dem Handy (seit Runde 17): bis 767 px `clamp(1.75rem, 1rem + 2.6vw, 2.25rem)`, bis 479 px `clamp(1.25rem, 0.5rem + 4.4vw, 1.75rem)`. Damit bleibt H2 überall deutlich kleiner als H1 (390 px: H2 25 px, H1 35 px).
- Header-Titel H1 (`heading-style-h1`): wächst mit der Fensterbreite, Handy 28–38 px (so, dass jede Zeile einzeilig bleibt), 768 px 53 px, 1024 px 65 px, 1440 px 84 px, ab 1920 px 96 px.
- Section-Titel H2 (`heading-style-h2`): Handy 32 px, 1024 px 50 px, 1440 px 62 px, ab 1920 px 68 px. Darunter der Plum-Strich (siehe 2.11).
- Titel der grossen Felder bei «Meine Entwicklung» (Card Teaser, Varianten «Zeile · …»): Handy 28 px, 1024 px 39 px, 1440 px 47 px, ab 1536 px 48 px.
- Kartentitel H3 24 px (1440 px), kleine Titel (Phasen, Fragen) 18–20 px.
- Fliesstext 17 px (`text-size-regular`) überall, auch in den Digital-Karten und bei «Meine Entwicklung»; gross 19–21 px, mittel 19 px, klein 15 px, sehr klein 13 px. Kicker 13–15 px, Buttons 14 px (klein 13 px), Navigation 14 px (992–1439 px) bzw. 15 px (ab 1440 px), Tags und Badges 12 px.
- Grössen immer an der Klasse ändern (Style-Panel), nie am einzelnen Element. Kleiner als 12 px nur für reine Zierde.

### 2.23 ROWAPA Digital: Texte und Buttons
- Instanz der Komponente «Section Digital» auswählen › rechts **Properties**: Kicker, Titel, Einleitung, Hinweis Titel, Hinweis Text, Button 1 (Text, Link), Button 2 (Text, Link), Beschriftung Kugel. Alles ohne die Komponente zu öffnen.
- Die fünf Karten sind eigene Karten-Komponenten (Properties wie jede Karte). Kachel und Karte gehören der Reihe nach zusammen; Darüberfahren über eine Kachel färbt die Karte gedämpftes Plum mit weisser Schrift (Klasse `card` › `is-verbunden`, Farbmodus «Plum») und umgekehrt. Das Darüberfahren über die Karte selbst sieht gleich aus (Variante «Weiss · Symbol (Digital)», Zustand Hover). Farbe ändern: Variable «Plum Gedaempft».
- Namen der oberen Kacheln (Anker, Segel, Logbuch) stehen über der Kachel: Zusatzklasse `is-oben` an `orbit_tile-name`. Auf der Seite setzt das Skript sie je nach Lage selbst.

### 2.24 Team-Mosaik
- Aufbau in `team_grid`: Personenkarten (`team_card`), hohe Karten mit Zusatzklasse `is-hoch` (heute Wolfgang Wachter, Thomas Rothkögel), die Zahlenkachel `team_info` («150 Jahre Wissen und Erfahrung im Trainerteam») und als letzte Kachel `team_mehr` («Weitere Trainerinnen, Trainer und Partner», Link zum Team).
- Mitglied ergänzen: eine Personenkarte duplizieren und befüllen; `team_mehr` bleibt die letzte Kachel.
- Die Kacheln erscheinen beim Hereinscrollen nacheinander (siehe 2.11).
- **Format (seit Runde 18):** Desktop: zwei Reihen, Höhe an die Fensterhöhe gekoppelt (`team_grid`). Tablet und Handy: Wischreihe, die Zahlenkachel ist dort ausgeblendet.
- **Partnerlogos:** Der Block `partner_block` unter dem Team ist auf der Startseite ausgeblendet (Einstellungen › Sichtbarkeit). Wieder einblenden: Block im Navigator wählen › Zahnrad › Sichtbarkeit ein.

### 2.25 Variantenseite (intern)
- `/varianten` zeigt die Vorschläge der Runde 4 nebeneinander; oben die Leiste zum Umschalten (A, B, C je Thema). Sie ist nicht verlinkt und wird nach dem Entscheid gelöscht.

### 2.26 Megamenü mit Vorschau
- Alle vier Menüs (Was wir tun, So arbeiten wir, Über uns, Partner werden) haben dieselbe Darstellung: Panel über die ganze Inhaltsbreite (`navbar_dropdown-list` + `is-mega`), links die Linkspalten, rechts die Vorschau. Die Vorschau steht immer in Spalte 4 des Rasters (`navbar_vorschau`: Spalte 4, Zeile 1), auch wenn ein Menü nur eine oder zwei Linkspalten hat. Neue Linkspalte: eine `navbar_dropdown-column` duplizieren (höchstens drei Spalten).
- Komponente «Navbar» › Dropdown › `navbar_vorschau`: Vorschaukarten (Bild, Titel, Satz), direkt im Designer änderbar. «Was wir tun» 9 Karten, «So arbeiten wir» 2, «Über uns» 4, «Partner werden» 5. Das Panel trägt `data-grafik="vorschau"`; ohne dieses Attribut wechselt die Karte nicht.
- Verbindung: Der Link trägt `data-vorschau="name"`, die Karte `data-vorschau-karte="name"` (Zahnrad › Custom attributes). Mehrere Links dürfen dieselbe Karte zeigen (z. B. alle Links unter «Meine Entwicklung»). Neuer Link: Attribut setzen; neue Karte: eine Karte duplizieren und Name anpassen.
- Sichtbar ist zuerst die Karte mit der Zusatzklasse `is-aktiv` (heute Vertriebsperformance).
- Öffnen und Schliessen: Das Menü öffnet beim Darüberfahren und schliesst 300 ms nach dem Verlassen (Dropdown › Einstellungen › «Close delay» bzw. Attribut `data-delay`). Über dem Panel liegt eine unsichtbare Brücke von 24 px (Klasse `navbar_dropdown-list`, Abstand oben −1.5 rem und Innenabstand oben 1.5 rem, Hintergrund transparent). Sie verhindert, dass das Menü auf schrägem Weg zum Link schliesst. Nicht entfernen.
- Logo, Sprachwahl und Kontakt-Button liegen auf Ebene (z-index) 902, damit die Brücke sie nie verdeckt. Wert nicht unter 902 setzen.

### 2.27 Mauszeiger
- Eingeschaltet über das Attribut `data-grafik="zeiger"` an der Navigation (Komponente «Navbar», oberstes Element). Attribut löschen = normaler Mauszeiger auf der ganzen Website.
- Der Ring richtet sich nach dem Grund (dunkel auf hell, hell auf dunkel und auf Fotos). Auf Handy und Tablet und in Formularfeldern gibt es ihn nicht.

### 2.28 Im Blickpunkt (CAS)
- Aufbau: Foto vom linken Fensterrand bis zur Mitte (`spotlight_media`), rechts Kicker, Titel, Text, Eckdaten (`chip`) und Buttons (`spotlight_content`). Hinter dem Text liegt die dunkle Farbfläche `cas_farbe`, die beim Hereinscrollen einblendet (siehe 2.11).
- Foto tauschen: Bild in `spotlight_media` auswählen › Bildfeld. Gesichter nicht an den Bildrand legen.

### 2.28a Rote Linien
- Alle roten Trennlinien sind 1 px dick: Phasen bei «Unser Vorgehen», Zeilen bei «Was wir tun» (Klasse `card` › `is-accent`), Oberkante der Digital-Karten, Linie beim Darüberfahren. Neue Linien ebenfalls mit 1 px anlegen.
- Eigene Akzente sind der kurze Strich unter jedem Section-Titel (3 px × 64 px) und die Unterstreichung der Header-Zeilen.
- Die Header-Unterstreichung sind drei leere Elemente `hero_bar` (eines je Zeile, die Animation «Hero-Titelzeilen» bewegt sie). Ihre Höhe ist begrenzt (`max-height` 0.07em, Überlauf versteckt). Ohne diese Begrenzung zeichnet der Designer die aktive Linie als dicken Plum-Block über der dritten Zeile; im Designer ist die Linie deshalb unsichtbar, auf der Website ist sie da. Begrenzung nicht entfernen.

### 2.29 Knopf «Nach oben»
- Liegt in der Komponente «Footer» (Link mit Klasse `nach-oben`, Attribut `data-grafik="nachoben"`) und ist damit auf jeder Seite. Er erscheint, sobald man gut eine Bildschirmhöhe gescrollt hat (Zusatzklasse `is-sichtbar`), und führt an den Seitenanfang.
- Aussehen: Klasse `nach-oben` (Plum, 48 × 48 px, unten rechts). Entfernen: Link in der Footer-Komponente löschen.

### 2.30 Diagonal-Ribbon
- Komponente «Ribbon» (Plum, 45°), Varianten «Oben rechts» und «Unten links». Heute sichtbar in Lösungen, Antrieb (unten links) und Kontakt; im Team liegt es ausgeblendet bereit (Properties › «Ribbon anzeigen»). «Unten links» entfällt auf Tablet und Handy; dort sind die Ribbons klein (10 rem, Klasse `ribbon` im Breakpoint Tablet). Vor dem Einschalten prüfen, dass es keinen Text oder Button kreuzt.
- Die Section braucht «position: relative» und «overflow: hidden». Alle Ribbons aus: Variable «Ribbon Deckkraft» auf 0.

### 2.31 Meine Entwicklung (drei Zeilen)
- Drei Card-Teaser-Karten in den Tönen Sea Cliff Tint, Snowbank und Plum Tint. Variante je Karte rechts unter Properties wählen.
- **Darstellung (seit Runde 18):** ab 992 px drei Karten nebeneinander, Bild oben (Höhe an die Fensterhöhe gekoppelt); Tablet: Bild links, Text rechts, untereinander; Handy: Wischkarten. Eingestellt in den drei Varianten (Klassen `card`, `card_image-wrapper`, `card_content`) und in `layout-grid is-zeilen`.
- Bildausschnitt: Foto und Video sitzen auf 19 % von oben, damit die Augen sichtbar bleiben; Female Empowerment auf 45 % (Gesicht höher, oben angeschnitten). Ändern: Karte auswählen › Variante › `card_image` › Object position. Neues Bild: Gesicht im oberen Drittel wählen.

### 2.32 Darstellung je Format (seit Runde 18)
- **Grundsatz:** Jedes Format bekommt die Darstellung, die dort am besten wirkt. Auf Desktop und Tablet passt jede Section vom Titel bis zum Button in einen Bildschirm, auf dem Handy werden lange Reihen zu Wischreihen.
- **Fensterhöhe:** Viele Grössen hängen an der sichtbaren Fensterhöhe, z. B. `clamp(3rem, 9svh, 7rem)`. Das bedeutet: 9 % der Fensterhöhe, mindestens 3 rem, höchstens 7 rem. Werte nur im Style-Panel ändern, die Schreibweise beibehalten.
- **Breakpoints:** Basis 992–1279 px, darüber 1280, 1440 und 1920 (Werte gelten nach oben weiter), darunter Tablet (bis 991), Handy quer (bis 767) und Handy (bis 479).
- **Section-Abstand:** `padding-section-large` oben und unten `clamp(3rem, 9svh, 7rem)`, Anschluss-Sections (`is-anschluss`) oben `clamp(2rem, 5svh, 4rem)`; Kopf bis Inhalt (`section-head`, `section-head_row`) `clamp(1.5rem, 4svh, 3rem)`.
- **Neue Zusatzklassen:**

| Klasse | Wo | Wirkung |
|---|---|---|
| `section-head_row is-breit` | Lösungen, Team | Titel und Button auf Desktop in einer Zeile, ab Tablet umbrechend |
| `section-head is-flush is-breit` | Lösungen, Team | Kopf darf breiter als 48 rem werden |
| `button-group is-fest` | Team | Buttons werden nicht gestaucht |
| `section-head is-flush is-kompakt` | Digital | kleinere Abstände im Kopf |
| `note-box is-kompakt is-digital` | Digital | Hinweis «Wissensplattform» auf dem Handy ausgeblendet |
| `button-group is-digital`, `button is-digital`, `button is-secondary is-digital` | Digital | kleinere Buttons auf dem Handy |

- **Kartenvarianten:** Lösungen-Zeilen, Digital-Karten, Wege und Insights haben ihre Darstellung je Format in der jeweiligen Komponenten-Variante. Die Insights-Karten nutzen die Variante «Insights Reihe» (Bildhöhe an die Fensterhöhe gekoppelt, Auszug 992–1919 ausgeblendet). Neue Insights-Karte: Variante «Insights Reihe» wählen.
- **Ausgeblendet, nicht gelöscht (Runde 18):** Zitate-Raster unter dem Slider (`is-erfolge`), fette Unterzeilen im Vorgehen (`step_lead`), Partnerlogos (Block `partner_block`, Einstellungen › Sichtbarkeit aus). Wieder einblenden: Klasse auf Display Block bzw. Grid stellen oder die Sichtbarkeit einschalten.
- **Prüfen:** Werkzeug `tools/format-vorschau/` misst die Staging-Seite in 8 Formaten (LIESMICH dort).

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
