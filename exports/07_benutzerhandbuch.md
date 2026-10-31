# ROWAPA Website 2027 · Benutzerhandbuch

**Für:** das ROWAPA-Team, das die Website in Webflow selbst pflegt
**Laufend gepflegt** · zuletzt 27.10.2026 · Stufe 2 (Startseite) · Webflow-Projekt «ROWAPA Website 2027 Automation»
**Wächst mit jeder Stufe:** Mit Stufe 3 kommt die CMS-Pflege dazu.

---

## 1. Überblick: Was liegt wo?

| Bereich | Wo in Webflow | Wofür |
|---|---|---|
| Seiten | Designer › links **Pages** | `Home v2 (Prototyp)` (`/home-v2`) und `Home v3` (`/home-v3`, neue Reihenfolge mit Themenlinien) sind die Entwürfe der neuen Startseite; `Styleguide (intern)` zeigt alle Bausteine |
| Komponenten | Designer › links **Components** | wiederverwendbare Bausteine: Navbar (auf `/home-v3`: «Navbar · Bühne»), Footer, Karten, Hero, Section Digital |
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
- **Logo-Laufband:** Interactions › «Logo-Laufband». Dauer 45 s pro Durchlauf, hält beim Darüberfahren an. Bei «Bewegung reduzieren» steht es still. Gilt für alle Seiten ausser `/home-v3`.
- **Logo-Laufband ruhig (v3, seit Runde 28):** Interactions › «Logo-Laufband ruhig (v3)». Gleich wie oben, aber 60 s pro Durchlauf; gilt nur für `/home-v3`. Tempo ändern: Dauer der Bewegung im Interactions-Panel. Neue Seite mit ruhigem Band: unter «Scope» ergänzen und dieselbe Seite bei «Logo-Laufband» entfernen (sonst laufen beide).
- **Hero-Titelzeilen:** Interactions › «Hero-Titelzeilen» (in der Komponente Section Hero Home, Variante A). Die drei Zeilen werden im Wechsel hell und rot unterstrichen, je 5 s. Tempo im Interactions-Panel änderbar (Positionen 0 / 5 / 10 s). Gilt für `/home-v2`.
- **Hero-Titelzeilen einmal (v3, seit Runde 28):** Interactions › «Hero-Titelzeilen einmal» (Komponente Section Hero Home, nur Variante «A · Signatur ruhig»). Beim Laden wird jede Zeile einmal unterstrichen (Positionen 0,3 / 1,7 / 3,1 s), danach sind alle drei Zeilen weiss und die kurze Plum-Linie `hero_strich` zeichnet sich unter dem Titel (4,4 s). Bei «Bewegung reduzieren» steht sofort der Endzustand da. Andere Seite gleich ruhig: Hero-Instanz auswählen › Variante «A · Signatur ruhig».
- **Titel-Strich zeichnen:** Interactions › «Titel-Strich zeichnen». Unter jedem H2 zeichnet sich der kurze Plum-Strich von links, sobald der Titel ins Bild kommt (Zusatzklasse `is-gezeichnet`). Länge, Farbe, Tempo: Klasse `heading-style-h2`, Zustand «::after».
- **Team-Kacheln nacheinander:** Interactions › «Team-Kacheln nacheinander». Die Kacheln steigen nacheinander leicht auf und blenden ein (je 0,1 s versetzt, Dauer 0,7 s). Auslöser ist die Klasse `team_grid` (seit Runde 21), damit gilt sie auf `/home-v2` und `/home-v3`; eine weitere Seite unter «Scope» ergänzen.
- **CAS Farbfläche einblenden:** Interactions › «CAS Farbfläche einblenden». Die einzige Einblendung der Startseite: Die dunkle Fläche hinter dem Text im Blickpunkt blendet in 1,4 s ein, Titel und Text folgen. Bei «Bewegung reduzieren» steht alles sofort da. Auslöser ist die Klasse `section_cas`; die Ziele sind je Seite eingetragen (v2 und v3). Auf einer neuen Seite die drei Ziele im Interactions-Panel ergänzen.
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
- **Fotorahmen Plum-Linie (v3, seit Runde 28):** Auf `/home-v3` trägt jedes Foto (`quote_image-wrapper`) die Zusatzklasse `is-plum-linie`: eine feine Plum-Linie (1 px), 24 px nach links oben versetzt (Handy 16 px). Gemacht mit zwei Schatten (Effekte › Box shadow): der erste in der Farbe des Section-Hintergrunds (#D9E7F2), der zweite Plum. Neue Folie: Zusatzklasse mitkopieren. Ändert sich der Hintergrund der Section, den ersten Schatten mitziehen. `/home-v2` hat noch den dunkelblauen Rahmen.
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
- **Tempo (seit Runde 37):** `vorgehen_media` › Custom attributes › `data-tempo` = `2` (Aufbau rund 2 Sekunden; `1` = früher, gut 4 Sekunden; höher = schneller).
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
- **Webinare und ROWAPA TV:** stehen unter den Karten (seit Runde 21; ab 992 px rechte Spalte, Zeile 2, Klasse `link-teaser-list is-seitenspalte`). Die linke Spalte gehört dem Titel, der beim Scrollen stehen bleibt.
- **Webinare und ROWAPA TV (seit Runde 25, v3):** dezent als Zeilen mit feiner Linie oben und Plum-Pfeil (`link-teaser is-dezent`, Pfeil `icon-box is-dezent`). Auf v2 noch als weisse Kästen.
- Ab Stufe 3 wird die Reihe eine CMS-Liste; der Aufbau bleibt gleich.

### 2.21 Startbildschirm (Header bis Logo-Band)
- Hero und Logo-Band liegen zusammen in der Hülle `startscreen_wrapper`. Sie ist genau so hoch wie das Fenster minus Navigation; der Hero füllt den Platz, das Logo-Band schliesst mit der Fensterunterkante ab. Das gilt auf jedem Format.
- **Titelzeilen immer einzeilig:** Jede der drei Header-Zeilen steht auf allen Formaten auf einer Zeile. Dafür ist der Textblock (`hero_content`) bis 62 rem breit, und auf dem Handy rechnet sich die Schriftgrösse aus der Fensterbreite (`heading-style-h1`, Breakpoint «Mobile portrait»). Längere Zeilen vorher auf dem Handy prüfen.
- **Kicker und Plum-Linie (v3, seit Runde 28):** Hero-Instanz auswählen › rechts Schalter «Kicker anzeigen» (auf `/home-v3` aus, auf `/home-v2` an). Die Variante «A · Signatur ruhig» zeigt unter dem Titel die kurze Plum-Linie (`hero_strich`, 4 rem × 3 px) und lässt die Unterstreichung nur einmal laufen (2.11).
- **Satz unter den Titelzeilen (Lead, seit Runde 43 neu):** Hero-Instanz auswählen › rechts unter Properties das Feld «Lead» ändern (gilt nur für diese Seite). Der Satz hat die Klassen `text-size-large max-width-medium is-hero`: bis 44 rem breit, Zeilen werden gleich lang umbrochen (`text-wrap: balance`), damit kein Wort allein auf der letzten Zeile steht, und ein weicher Lichthof in Manganese Black hält den Text über dem Punktemeer lesbar. Ab 768 px steht der heutige Satz auf zwei Zeilen, so bleibt der Header gleich hoch und das Logo-Band schliesst mit dem Fensterrand ab. Ein deutlich längerer Satz braucht eine dritte Zeile: dann auf 1280 × 670 prüfen, ob das Logo-Band noch ganz im Fenster steht.
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
- **Ruhige Fassung (seit Runde 26, auf `/home-v3`):** In den Properties der Instanz stehen Schalter. «Hinweis anzeigen» blendet den Kasten «Das Fundament» ein oder aus. «Button 2 anzeigen» und «Textlink anzeigen» wählen, ob Button 2 als Umriss-Button oder als schlichter Textlink mit Pfeil neben Button 1 erscheint; Text und Ziel kommen in beiden Fällen aus «Button 2 Text» und «Button 2 Link». Immer nur einen der beiden einschalten. «Karten-Linktext anzeigen» blendet «Mehr zu …» in den fünf Karten ein oder aus; ohne Text bleibt nur der Pfeil, die ganze Karte bleibt verlinkt. Variante «Karten · ruhig» gibt etwas mehr Luft über den Karten. Auf v3 sind Hinweis, Button 2 und Karten-Linktext aus, der Textlink ist an, die Variante ist «Karten · ruhig». `/home-v2` zeigt die bisherige Fassung.
- **Titel mit Zeilenumbruch:** Im Feld «Titel» mit Enter umbrechen (v3: «Digitale Lösungen» / «für Ihren Alltag»). Der Umbruch gilt auf allen Bildschirmen.
- **Textlink gestalten:** Klasse `digital_link` (weiss, fett, unterstrichen, beim Darüberfahren Linie Sea Cliff), Pfeil `digital_link-icon`. Im Navigator heisst das Element «Textlink (Button 2)».

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
- Geräte mit Touchscreen (seit Skript 1.10.1, verbessert in 1.11.1): Punkt und Ring erscheinen, sobald man Maus oder Trackpad bewegt, auch wenn der Browser das Gerät als reines Touch-Gerät meldet; tippt man mit dem Finger, verschwinden sie. Dasselbe gilt für die Hover-Videos der Karten.

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
- Auf `/home-v3` ist das Ribbon im Antrieb ausgeschaltet (Properties › «Ribbon anzeigen» aus), weil es sonst den ersten Punkt von «Warum ROWAPA» kreuzt.

### 2.31 Meine Entwicklung (drei Zeilen)
- Drei Card-Teaser-Karten in den Tönen Sea Cliff Tint, Snowbank und Plum Tint. Variante je Karte rechts unter Properties wählen.
- **Darstellung (seit Runde 18):** ab 992 px drei Karten nebeneinander, Bild oben (Höhe an die Fensterhöhe gekoppelt, seit Runde 23 grösser: `card_image-wrapper` in den drei Varianten, Height `clamp(9rem, 42svh - 7.5rem, 22rem)`, 13 Zoll rund 216 px, 14 Zoll rund 292 px); Tablet: Bild links, Text rechts, untereinander; Handy: Wischkarten. Eingestellt in den drei Varianten (Klassen `card`, `card_image-wrapper`, `card_content`) und in `layout-grid is-zeilen`.
- Bildausschnitt: Foto und Video sitzen auf 19 % von oben, damit die Augen sichtbar bleiben; Female Empowerment auf 45 % (Gesicht höher, oben angeschnitten). Ändern: Karte auswählen › Variante › `card_image` › Object position. Neues Bild: Gesicht im oberen Drittel wählen.

### 2.32 Darstellung je Format (seit Runde 18)
- **Grundsatz:** Jedes Format bekommt die Darstellung, die dort am besten wirkt. Auf Desktop und Tablet passt jede Section vom Titel bis zum Button in einen Bildschirm, auf dem Handy werden lange Reihen zu Wischreihen.
- **Fensterhöhe:** Viele Grössen hängen an der sichtbaren Fensterhöhe, z. B. `clamp(3rem, 10svh, 8rem)`. Das bedeutet: 10 % der Fensterhöhe, mindestens 3 rem, höchstens 8 rem. Werte nur im Style-Panel ändern, die Schreibweise beibehalten.
- **Breakpoints:** Basis 992–1279 px, darüber 1280, 1440 und 1920 (Werte gelten nach oben weiter), darunter Tablet (bis 991), Handy quer (bis 767) und Handy (bis 479).
- **Section-Abstand (seit Runde 28, alle Seiten):** `padding-section-large` oben und unten `clamp(3rem, 10svh, 8rem)` (bei 1440 × 900: 90 px), Handy (bis 767) 4 rem = 64 px; Anschluss-Sections (`is-anschluss`) oben `clamp(2rem, 5svh, 4rem)`; Kopf bis Inhalt (`section-head`, `section-head_row`) `clamp(2rem, 5svh, 4rem)`. Zwei weisse Sections nacheinander mit vollem Abstand und feiner Linie dazwischen: Zusatzklasse `is-linie` (1 px oben in der Linienfarbe; heute auf `/home-v3` bei «Meine Entwicklung»).
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

### 2.33 Lösungen für Unternehmen: Themenlinien (`/home-v3`, seit Runde 19, neu aufgebaut in Runde 20, Texte und Form in Runde 21, Einrasten und Figur in Runde 22)
- **Was es ist:** Szene mit fünf Themen nach dem Vorbild der Referenz Tresmares Capital. Auf Desktop (ab 992 px) steht eine Vollbild-Bühne, je Thema scrollt man eine Fensterhöhe. Beim Weiterscrollen deckt das nächste Thema das alte von unten auf, das alte dunkelt ab, die Plum-Form setzt sich aus kleinen Quadraten zusammen, verwandelt sich über vier kleine Quadrate und zerfällt wieder, sobald der neue Titel steht. In Ruhe sieht man nur Titel, Figur und Texte; die Figur tritt dann zurück (40 %), damit Titel und Texte gut lesbar sind. Die Seite rastet in Scrollrichtung ein: ein Stück weiterscrollen führt zum nächsten Thema, zurückscrollen zum vorherigen (150 ms nach dem letzten Mausrad-Schritt, Fahrt 1,3 s). Wo es läuft: ab 992 px Breite (Laptop, Desktop, Tablet quer, auch mit Wischen). Navigation und «Nach oben» sind ausgeblendet, solange die Bühne steht. Tablet und Handy: Blöcke untereinander mit stehender Leiste.
- **Aufbau (Navigator):** `section_themen` › Einleitung (`padding-global` › … › `themen_kopf`: Kicker, Titel, Text, Button) › `themen_huelle` › `themen_buehne` › `themen_liste` (fünf `themen_link`, je mit `themen_link-nummer`, `themen_link-lang`, `themen_link-kurz`) und `themen_panels` (fünf `themen_panel`). Jedes Panel: `themen_titel` (zwei Zeilen `themen_titel-zeile`, die zweite mit `is-versetzt`), `themen_figur` (Bild), `themen_unten` (zwei Spalten: links `themen_text` mit Kicker und Kernbotschaft `themen_aussage`; rechts `themen_aktion` mit dem Satz `themen_beschreibung` und dem Link `themen_mehr`).
- **Texte ändern:** direkt auf der Seite doppelklicken. Grösse der Kernbotschaft: Klasse `themen_aussage`; Grösse des Satzes: `themen_beschreibung` (beide passen sich der Fensterhöhe an, ab 1920 px eigene Werte). Riesiger Titel: die beiden Zeilen in `themen_titel` (der Titel ist für Bildschirmleser ausgeblendet, `aria-hidden`; der Name steht im Kicker). Link unten rechts: Text doppelklicken, Ziel unter Settings › Link.
- **Titel über der Liste (seit Runde 24):** Kicker «Lösungen für Unternehmen» als erstes Element in `themen_liste` (Klassen `text-style-kicker is-liste`). Steht auf Desktop über den fünf Themen und bleibt sichtbar, solange die Bühne steht; auf Tablet und Handy ausgeblendet (`is-liste`, Tablet: Display none). Text doppelklicken zum Ändern.
- **Kurznamen der Leiste (Tablet, Handy):** Text in `themen_link-kurz`; auf Desktop steht der lange Name (`themen_link-lang`).
- **Grösse der Figur (seit Runde 42):** Klasse `themen_figur` › Height. Desktop: `clamp(17.5rem, calc(90svh - 21rem), min(64svh, 46rem))`, das heisst: auf niedrigen Laptop-Fenstern kleiner (mindestens 280 px), damit sie nicht in die Texte unten läuft, auf hohen Fenstern wie bisher. Ab 1920 px eigener Wert `min(64svh, 46rem)` (Entscheid 288). Tablet und Handy: `clamp(14rem, 55vw, 24rem)`. Gilt für alle fünf Figuren zugleich. Nach einer Änderung bei 1280 × 670, 1440 × 790 und 1512 × 870 prüfen, dass Figur und Text unten rechts sich nicht berühren.
- **Figur tauschen:** Bild in `themen_figur` › Bildfeld. PNG mit transparentem Hintergrund, rund 1400 px hoch (`grafik-thema-…-gross.png`), Punkte in den CI-Farben für hellen Grund. Alt-Text unter Settings.
- **Plum-Form wählen:** Panel auswählen › Settings › Custom attributes › `data-form` = `band` (ein Band), `doppel` (zwei Bänder), `winkel`, `trichter` oder `raster` (vier Quadrate). Die Form zeichnet das Skript und zeigt sie nur im Wechsel (auf Tablet und Handy, solange der Block hereinkommt); ohne Skript und bei «Bewegung reduzieren» ist sie nicht da.
- **Plum-Form ein oder aus (seit Runde 36, Grafik 1.13.0; auf v3 seit Runde 37 aus):** `section_themen` › Custom attributes › `data-plumform` = `aus` blendet die Form überall aus (ohne Attribut oder mit `an` ist sie da). Zum Vergleichen ohne Änderung: Adresse mit `?plumform=aus`. Figuren, Vorhang, Titel und Einrasten bleiben gleich.
- **Figur in Ruhe:** `section_themen` › Custom attributes › `data-figur-ruhe` = Deckkraft der Figur, sobald ein Thema ganz offen ist (0.1 bis 1, Standard 0.4; 1 = immer kräftig).
- **Lage von Titel und Texten:** Titel `themen_titel` (oben 43 %, Desktop); Texte `themen_unten` (Abstand links/rechts und unten). Nach einer Änderung bei 1366×657 und 992×620 prüfen, dass der Titel die Texte nicht berührt.
- **Anordnung der Texte (seit Runde 23):** Standard A (Kernbotschaft links, Satz und Link rechts, beide unten). Variante diagonal (Kernbotschaft unten links, Satz und Link oben rechts): `section_themen` › Custom attributes › `data-anordnung` = `diagonal`; vergleichen ohne Änderung mit `?anordnung=diagonal` in der Adresse. Die Stile stehen in den Zusatzklassen `is-diagonal` (an `themen_titel`, `themen_unten`, `themen_text`, `themen_aktion`); das Skript setzt sie. Wird diagonal definitiv, setzen wir die Klassen fest in Webflow.
- **Übergang:** `section_themen` › Custom attributes › `data-uebergang` = `unten` (Standard, wie die Referenz) oder `diagonal` (45°). Vergleichen ohne Änderung: Adresse mit `?uebergang=diagonal` bzw. `?uebergang=unten`.
- **Scrollweg je Thema:** Attribut `data-schritt` an `section_themen` (Anteil der Fensterhöhe, Standard 1).
- **Einrasten (seit Runde 33 Wisch-Einrasten als Standard):** Jeder Wisch auf dem Trackpad oder Rad-Stoss bringt sofort genau ein Thema weiter; der Nachlauf des Trackpads wird übergangen. Das frühere Einrasten (150 ms nach dem letzten Rad-Schritt) zum Vergleichen mit `?einrasten=rad` in der Adresse oder Custom attribute `data-einrasten` = `rad` an `section_themen`.
- **Thema hinzufügen oder entfernen:** Panel duplizieren bzw. löschen, dem neuen Panel eine eigene ID geben (Settings › ID, z. B. `thema-neu`), in der Liste einen `themen_link` duplizieren und seinen Link auf «Section» › dieses Panel stellen. Das Skript zählt die Themen selbst.
- **Aktives Thema:** Zusatzklasse `is-aktiv` auf `themen_link` (Desktop Manganese, Tablet/Handy Plum mit Linie). Im Designer steht sie auf dem ersten Link; auf der Website setzt sie das Skript.
- **Ohne Skript und bei «Bewegung reduzieren»** stehen die Themen als Vollbild-Blöcke untereinander; alle Inhalte bleiben lesbar und erreichbar.
- **Nicht ändern:** Klassennamen `themen_*` und `section_themen` (das Skript sucht sie). Weiches Scrollen gibt es nur auf Seiten mit dieser Section.

### 2.35 Farbfolge der Startseite `/home-v3` (seit Runde 24)
- **Seit Runde 36 gilt das Farbkonzept (2.37).** Die Angaben unten beschreiben die frühere Folge.
- Von oben nach unten: Header und Logo-Band dunkel (Logo-Band im Ton der Header-Unterkante, seit Runde 25) · «Was uns antreibt» weiss (`theme-hell`) · «Unsere Erfolge» hellblau (`theme-sea`) · «Lösungen für Unternehmen» mit Bühne grau (`theme-soft`) · «Unser Vorgehen» weiss · «ROWAPA Digital» Manganese (`theme-kontrast`) · «Über uns» und «Meine Entwicklung» weiss (mit Linie verbunden) · «Im Blickpunkt» dunkel · «Neueste Insights» grau · «Gut zu wissen» weiss · «Kontakt» hellblau · Footer dunkel.
- Grundsatz: Dunkel nur für die Anker (Header, Digital, CAS, Footer), Hellblau für Kundenstimmen und Kontakt, Grau für Themen und Insights, Weiss dazwischen. Nie zwei gleiche Flächen nacheinander ausser bewusst verbundene Sections.
- Ändern: Section auswählen › Klasse `theme-…` tauschen (siehe 2.3). `/home-v2` hat noch die frühere Folge.
- **Logo-Band (seit Runde 25, v3):** `section_logos is-header` im Ton der Header-Unterkante (Variable «Header Unterkante», Sammlung Farben). Die Logos werden weiss über die Zusatzklasse `logos_track is-hell` (Effekte: Filter invert und brightness, Mischmodus screen); die Randverläufe `logos_fade … is-header` haben denselben Ton. Neues Logo: wie gewohnt ins Laufband legen (beide Listen), es wird automatisch weiss. Ändert sich der Header-Verlauf, die Variable mitziehen.

### 2.34 Warum ROWAPA (in «Was uns antreibt», `/home-v3`)
- Seit Runde 37 stehen die vier Gründe als Kacheln in der rechten, versetzten Spalte von «Was uns antreibt» (siehe 2.38), ohne eigenen Titel. Je Grund: `warum_item is-kachel` mit `warum_nummer`, `warum_titel is-kachel` (H3) und `warum_text` (auf dem Handy ausgeblendet).
- Grund ändern: Text doppelklicken. Grund hinzufügen: eine Kachel duplizieren.

### 2.36 Megamenü «Bühne» (`/home-v3`, seit Runde 28)
- **Komponente:** «Navbar · Bühne» (Components › 01 Global) ist seit Runde 46 die einzige Navigation (die alte «Navbar» ist gelöscht). Neue Seite: «Navbar · Bühne» zuoberst in `page-wrapper` ziehen.
- **Aufbau jedes Menüs (gleich für alle fünf):** links die dunkle Einleitung `navbar_intro` (Kicker `text-style-kicker is-intro`, Satz `navbar_intro-satz`, Link `navbar_intro-link` «Zur Übersicht →»), in der Mitte die Linkspalten `navbar_dropdown-column is-buehne` (bei wenigen Links zweispaltig: `is-raster`), rechts die Vorschau `navbar_vorschau is-buehne`. Die Vorschau erscheint ab 1280 px; von 992 bis 1279 px ist sie ausgeblendet, damit die Links Platz haben.
- **Satz oder Kicker ändern:** im Komponenten-Modus doppelklicken. «Zur Übersicht →» nur dort zeigen, wo es eine Übersichtsseite gibt (heute «So arbeiten wir», «Unsere Kunden», «Partner werden»); Ziel über Zahnrad › Link.
- **Links:** Klasse `navbar_dropdown-link is-buehne` (beim Darüberfahren eine feine Plum-Linie links). Kurzbeschrieb unter dem Link: Textelement `navbar_link-beschrieb` im Link. Neuer Link: bestehenden duplizieren, Text, Ziel und Attribut `data-vorschau` anpassen (2.26).
- **«Unsere Kunden»:** eigenes Menü mit «Branchen», «Case-Stories», «Kundenstimmen». Ziele `/referenzen#branchen`, `#cases`, `#stimmen`; die Seite `/referenzen` gibt es noch nicht (offener Punkt 31). Wenn sie steht, die Abschnitte mit diesen IDs versehen (Zahnrad › ID). Vorschaukarten wie in 2.26 (`data-vorschau` am Link, `data-vorschau-karte` an der Karte; Namen `branchen`, `cases`, `stimmen`).
- **Handy:** Das Handy-Menü (`navbar_mobile-dropdown`) ist unverändert; «Unsere Kunden» ist dort ein einzelner Link.

### 2.37 Farbkonzept (Standard seit Runde 36, zuerst als Variante `/home-v3-farben` in Runde 33)
- **Rollen der Farben:** Manganese Black trägt (Header, Hero, Texte, Digital, Footer); Great Serpent für Grafiken und Icons; Sea Cliff für Kontakt und Hervorhebungen; Plum Perfect für Hauptbuttons, Zahlen, aktive Zustände und Figuren; Pastel Snowbank zum Gliedern; Weiss als Hauptfläche.
- **Folge auf `/home-v3`:** Header und Logo-Band dunkel · «Was uns antreibt» weiss · «Unsere Erfolge» Snowbank (`section_erfolge theme-soft`, Fotorahmen `quote_image-wrapper is-plum-soft`) · Themen Snowbank mit feiner Linie oben (`section_themen theme-soft is-linie`, Figuren `grafik-thema-…-plum-gross.png`, `data-figur-ruhe` = `0.7`) · Vorgehen weiss · Digital Manganese · Über uns weiss · Meine Entwicklung weiss mit Snowbank-Karten (Varianten «Zeile · Snowbank (aus Sea Cliff)», «Zeile · Snowbank · Bild rechts», «Zeile · Snowbank (aus Plum)») · Im Blickpunkt Snowbank mit Linie unten (`section_cas theme-soft`, dunkle Fläche aus: `cas_farbe is-aus`) · Insights Snowbank · FAQ weiss · Kontakt helles Sea Cliff · Footer Manganese Black.
- **Eine Section umfärben:** Section auswählen › Theme-Klasse tauschen (`theme-hell` Weiss, `theme-soft` Snowbank, `theme-sea` helles Sea Cliff, `theme-kontrast` Manganese Black). Texte und Buttons folgen automatisch.
- **Textlinks (alle Seiten):** Farbe der Textlinks (`text-style-link`) auf hellem Grund kommt aus Variables › Sammlung «Textlinks» › «Textlink hell», Grundwert Manganese Black (seit Runde 36; vorher Great Serpent). Auf dunklem Grund (Kontrast, Tiefsee, Plum) bleiben Sea Cliff bzw. Weiss.
- **Footer (alle Seiten):** Komponente «Footer» › Wurzel `footer_component theme-kontrast` (Manganese Black; vorher `theme-tiefsee`, Manganese Deep).
- **Figuren in Plum neu erzeugen:** `tools/grafik/figuren/` › `PLUM=1 node render.js` und `HELL=1 PLUM=1 node render.js vertrieb` (siehe LIESMICH).
- `/home-v3-farben` ist seit Runde 36 gleich wie v3 und wird beim Aufräumen gelöscht (nur mit Freigabe).

### 2.38 «Was uns antreibt» (v3, Variante A nach dem Muster Tresmares, seit Runde 37)
- **Aufbau:** `section_antrieb theme-hell is-stehend` › … › `antrieb_split` (links 1 Teil, rechts 1,25 Teile) mit `antrieb_stehend` (Kicker, Titel, Einleitung) und `antrieb_kacheln` (zwei Spalten `antrieb_spalte`; die rechte mit `is-versetzt` beginnt tiefer).
- **Stehender Text:** Ab 992 px bleibt der linke Block stehen, solange die Kacheln vorbeiziehen (CSS sticky, Abstand oben `clamp(6rem, 22svh, 12rem)`). Dafür hat die Section die Zusatzklasse `is-stehend` (kein «overflow hidden»). Unter 992 px steht nichts; auf dem Tablet zwei Kachelspalten, auf dem Handy alle Kacheln untereinander.
- **Kacheln:** Kennzahl = `stat_item is-kachel` (Zahl `stat_number`, zählt hoch, Bezeichnung `stat_label`); Grund = `warum_item is-kachel` (siehe 2.34). Höhe: `min-height` an `is-kachel` (Desktop `clamp(11rem, 26svh, 15rem)`, Tablet 11rem). Versatz der rechten Spalte: `antrieb_spalte is-versetzt` › Padding oben `clamp(4rem, 10svh, 6rem)`. Kürzere Kacheln oder weniger Versatz = kürzerer Scrollweg.
- **Kachel hinzufügen:** eine bestehende in derselben Spalte duplizieren und Text ändern. Die rechte Spalte sollte nicht viel länger als die linke werden, sonst wird der Scrollweg lang.
- **Gespiegelt (seit Runde 41, auf der Variante «Lösungen oben», bestätigt in Runde 42):** Kacheln links, Titel und Text rechts, nur ab 992 px. Gesteuert über die Zusatzklasse `is-gespiegelt` an `antrieb_split`, `antrieb_stehend` und `antrieb_kacheln`. Zurück zur normalen Anordnung: bei allen drei Elementen die Zusatzklasse `is-gespiegelt` entfernen.

### 2.39 Handy-Fassung je Section (seit Runde 38)
- **Grundsatz (Entscheid 268):** Das Handy bekommt eine eigene Fassung, die Desktop-Fassung bleibt unverändert. Je Section gibt es vier Möglichkeiten: gleich, vereinfacht, andere Darstellung oder weglassen (nur ausgeblendet). Die Übersicht für die Startseite steht in `exports/08_startseite_desktop_handy.md`.
- **Etwas nur auf dem Handy ausblenden:** Im Designer oben den Breakpoint Handy (bis 479 px) wählen, das Element anklicken und im Style-Panel unter Layout «Display: None» setzen. Das nur tun, wenn das Element eine eigene Klasse oder Zusatzklasse hat, sonst verschwinden alle Elemente mit derselben Klasse. Im Zweifel eine Zusatzklasse anlegen, z. B. `is-handy-aus`. Für ganze Blöcke gibt es die Hilfsklassen `hide-mobile-portrait` (bis 479 px), `hide-mobile-landscape` (bis 767 px) und `hide-tablet` (bis 991 px), am besten als einzige Klasse auf einem eigenen Div-Block.
- **Nichts löschen:** Ausgeblendetes bleibt im Navigator (mit durchgestrichenem Auge) und im CMS, auf dem Desktop sichtbar und für Suchmaschinen lesbar.
- **Wirkung nach unten:** Eine Änderung im Breakpoint Tablet gilt auch auf beiden Handy-Breakpoints, eine Änderung im Breakpoint Handy nur dort.
- **Tippflächen:** Buttons, Pfeile, Telefon und E-Mail mind. 44 px hoch, Eingabefelder 48 px. Mehr Innenabstand ist besser als grössere Schrift.
- **Prüfen:** mit dem Werkzeug `tools/format-vorschau/` und am Schluss auf echten Geräten.

### 2.40 Netz im Punktemeer des Headers (seit Runde 39, Grafik 1.14.0)
- **Was es ist:** Über dem Punktemeer liegen wenige Plum-Knoten, die mit der Welle schwingen. Feine Linien verbinden sie und blenden langsam ein und aus, ab und zu läuft ein Impuls. Es zeigt ruhig, dass zu ROWAPA auch digitale Lösungen gehören.
- **Standard (seit Runde 40, kräftiger seit Runde 41, Grafik 1.16.0):** an, auf jeder Seite mit Punktemeer im Header, auch auf künftigen Unterseiten. Der Footer bleibt ohne Netz.
- **Stufen:** `an` (Standard, kräftig), `mehr` (etwas ruhiger), `ruhig` (wie der erste Entwurf), `aus`. Zum Vergleichen an die Adresse `?netz=mehr`, `?netz=ruhig` oder `?netz=aus` anhängen.
- **Je Seite ändern:** Element `main-wrapper` der Seite anklicken › Zahnrad (Settings) › Custom attributes › `data-netz` mit dem Wert `aus` (ohne Netz), `ruhig` oder `mehr` (ruhigere Stufen). Ohne Attribut gilt der Standard. Der Header ist eine Komponente, darum steht das Attribut an der Seite und nicht im Header.
- **Vergleichen ohne Änderung:** an die Adresse `?netz=an`, `?netz=mehr` oder `?netz=aus` anhängen, z. B. `/home-v3?netz=an`.
- **Farbe:** Mit Netz bleiben die Wellenkämme weiss, Plum gehört dann nur den Knoten. Bei «Bewegung reduzieren» steht wie bisher das Standbild ohne Netz.
- **Reihenfolge der Sections ändern:** im Navigator die Section an die neue Stelle ziehen. Danach prüfen, ob zwei Sections mit gleicher Farbe aufeinandertreffen. Dann braucht die zweite die Zusatzklasse `is-linie` (siehe 2.32), oder man wählt eine andere Farbe.

### 2.41 Leistentitel über der Themenliste ein- und ausblenden (seit Runde 40)
- **Was:** die kleine Zeile «Lösungen für Unternehmen» über der Themenliste in «Lösungen für Unternehmen». Sie erscheint nur auf dem Desktop, auf Tablet und Handy ist sie schon aus.
- **Ausblenden:** im Navigator das Element «Leistentitel · ausblendbar (Zahnrad › Visibility)» wählen (in der Section «Lösungen für Unternehmen»), dann Zahnrad (Settings) › Visibility › «Hidden». Wieder einblenden: «Visible». Danach veröffentlichen.
- Auf v3 und auf der Variante «Lösungen oben» je einzeln, weil es zwei Seiten sind. Die Themen-Bühne funktioniert mit und ohne Zeile.
- **Button «Zum Unternehmensbereich» im Kopf:** auf der Variante ausgeblendet (Navigator: «Button Zum Unternehmensbereich · ausgeblendet»), auf v3 sichtbar. Wieder einblenden gleich wie oben: Zahnrad › Visibility › «Visible».

---

### 2.42 Startseite, Google-Beschreibung und Teilen (seit Runde 43/44)
- **Welche Seite ist die Startseite?** Die Seite «Home» (seit Runde 45, vorher «Startseite (definitiv)»), erreichbar unter `/`. Eine andere Seite zur Startseite machen: Pages › Seite › Zahnrad › Abschnitt «Homepage» › «Make … Your Homepage», Save, Publish.
- **Aufräumen (Runde 45):** Ungenutzte Klassen nie mit «Clean up» im Style Manager entfernen: einige Klassen setzt nur das Skript (`is-aktiv`, `is-sichtbar`, `is-oben`, `is-verbunden`, `is-angetippt`, `hat-zeiger`), die würden sonst mitgelöscht.
- **Google-Titel und -Beschreibung:** Pages › Seite › Zahnrad › SEO Settings. Die Beschreibung höchstens rund 155 Zeichen lang halten (heute 152), sonst kürzt Google sie ab.
- **Teilen auf LinkedIn und Co. (Open Graph):** In denselben Einstellungen ist «Same as SEO» für Titel und Beschreibung eingeschaltet. Ein eigenes Vorschaubild für das Teilen fehlt noch; bei Bedarf unter Open Graph Settings ein Bild (1200 × 630 px) hochladen.
- **Satz im Megamenü «Was wir tun»:** Komponente «Navbar · Bühne» öffnen, im Menü «Was wir tun» den Satz (`navbar_intro-satz`) doppelklicken (2.36). Gilt auf allen Seiten mit diesem Menü.

### 2.43 Handy-Fassung der Startseite (seit Runde 47)
Alle Handy-Anpassungen liegen im Breakpoint «Mobile landscape» (bis 767 px) und gelten automatisch auch für «Mobile portrait». Im Designer oben auf das Handy-Symbol wechseln, um sie zu sehen oder zu ändern.
- **Button «Erstgespräch» oben:** Komponente «Navbar · Bühne», Link mit `is-handy-cta` neben dem Menü-Button. Ziel ändern: Link anklicken › Einstellungen › E-Mail oder URL. Am Desktop ist er ausgeblendet; dort gilt der Button «Kontakt».
- **Was uns antreibt:** Kennzahlen und Gründe sind auf dem Handy Zeilen. Texte wie bisher direkt doppelklicken; die Zahlen zählen weiter hoch (Skript).
- **Lösungen für Unternehmen:** Jedes Thema bleibt stehen, bis das nächste es von unten zudeckt. Ein weiteres Thema ist ein weiterer Block `themen_panel` in der Liste; die Höhe stellt sich selbst ein.
- **Unser Vorgehen:** Die Linie unter den Karten (`reihe_fortschritt is-vorgehen`) zeigt beim Wischen die Position. Sie erscheint nur auf dem Handy und braucht kein Pflegen. Das Attribut `data-grafik="reihe"` an `steps_list` nicht entfernen.
- **Im Blickpunkt:** Auf dem Handy ausgeblendet sind zwei Chips (Klasse `is-ohne-handy`) und der zweite Satz (Textteil mit Klasse `text-ohne-handy`). Den Satz ändern: im Absatz doppelklicken; er bleibt am Desktop sichtbar. Soll ein weiterer Chip auf dem Handy fehlen, ihm ebenfalls `is-ohne-handy` geben.
- **Neueste Insights:** Die Karten sind die Komponente «Card Insight» (Variante «Insights Reihe»). Neue Karte: eine bestehende Karte samt `reihe_item` duplizieren und die Felder rechts ausfüllen. Auf dem Handy zeigt sie ein niedrigeres Bild und keinen Auszug. «Card Teaser» bleibt für «Persönlich weiterkommen».
- **ROWAPA Digital:** Die Beschreibung jeder Kachel ist in allen Grössen sichtbar (`is-immer`). Kurz halten, rund 12 Wörter, sonst wird die Kachel auf 1024 px hoch.
- **Kontakt:** Mobil, Büro und E-Mail stehen auf dem Handy als Zeilen; Inhalte wie bisher bearbeiten.
- **Newsletter im Footer:** Feld und quadratischer Pfeil auf einer Linie, in allen Grössen. Der Button-Text ist «→»; für Screenreader heisst er «Abonnieren» (Attribut `aria-label`). **Platzhalter von Hand setzen:** Footer öffnen, das Feld anklicken › Einstellungen (Zahnrad) › Placeholder «Ihre E-Mail-Adresse». Die Schnittstelle kann ihn nicht setzen.
- **Buttons gleich gross:** Buttons in einer `button-group` werden automatisch gleich breit und gleich hoch. Einfach Buttons in die Gruppe legen; mehr ist nicht nötig. Sollen sie auch am Desktop untereinander stehen, der Gruppe zusätzlich `is-gestapelt` geben.
- **Digital-Kacheln gleich hoch:** erledigt `tools_grid is-gleich-hoch` (Komponente «Section Digital»), nichts pflegen.

### 2.44 Variablen-Modi von Hand löschen (Runde 48)
Die Schnittstelle kann Modi nicht löschen. So geht es im Designer:
1. Links das Symbol **Variables** öffnen.
2. Sammlung **Textlinks** wählen. In der Tabelle gibt es die Spalten «Base mode» und «Manganese».
3. Mit der Maus über die Spaltenüberschrift **«Manganese»** fahren und auf den kleinen Pfeil oder die drei Punkte daneben klicken (alternativ Rechtsklick auf die Überschrift) › **Delete mode**. Die Variable «Textlink hell» und die Sammlung bleiben, sie werden gebraucht.
4. Dasselbe in der Sammlung **Spacing** mit dem Modus **«Luft (v3)»**.
5. Publish ist nicht nötig, die Modi sind nirgends angewendet.

### 2.45 CMS pflegen (seit Stufe 3)

**Wo:** Webflow › CMS (Datenbank-Symbol links). Jede Collection hat ihre Felder in Gruppen: bei Seiten «Karte & Status · Hero · Inhalte · Beziehungen · Abschluss-CTA · SEO», bei Personen «Profil · Bilder & Video · Rollen · Kontakt · Verwaltung · SEO».

**Neue Einträge** sind immer zuerst **Entwurf** (Draft). Erst wenn alles stimmt: oben rechts «Set as ready to publish» und dann die Site veröffentlichen.

**Checkliste vor dem Veröffentlichen eines Eintrags** (die Felder sind absichtlich nicht als Pflicht gesetzt, damit Entwürfe möglich sind):
1. Name, Teaser bzw. Kurzbeschreibung und Hero-Titel gefüllt.
2. Bild mit Alt-Text (was ist zu sehen?).
3. Keine Markierung «[ROWAPA bestätigen]» mehr im Text, Schalter «Platzhalter» aus.
4. Beziehungen gesetzt (z. B. FAQ, Stimmen, Werkzeuge, Kategorie).
5. Anrede: Sie für Unternehmen, Du nur bei Angeboten für Einzelpersonen.
6. Bei Stimmen: Schalter «Freigegeben» nur an, wenn die Person zugestimmt hat.

**Logo-Band:** In «Unternehmen & Partner» den Schalter «Im Logo-Band» an. Die Reihenfolge steuert das Feld «Reihenfolge» (kleinere Zahl vorne, in Zehnerschritten, damit man später dazwischen einfügen kann). Wirkt ein Logo zu klein, bei «Logo-Grösse in Prozent» z. B. 120 eintragen.

**Team:** In «Personen» unter «Bilder & Video» Porträt, Sofa-Bild, persönlichen Gegenstand und Video eintragen. Unter «Rollen» per Schalter festlegen, wo die Person erscheint (Geschäftsleitung, Team, Dozent:in, Autor:in …).

**Blog:** Importierte Beiträge sind Entwürfe. Vor dem Veröffentlichen die Prüfliste `10_cms_blogimport.md` beachten (Umfragereste, SEO-Titel, CTA-Links).

**Grenze des Plans:** Meldet Webflow beim Anlegen «You've created all the items … allowed on your current plan», ist das Kontingent des Site-Plans voll. Dann hilft nur ein grösserer Plan (Site settings › Plans).

### 2.46 Vorlage «Themenlinie» (CMS-Seite)

**Wo:** Pages › CMS Collection Pages › «Themenlinien Template». Oben in der Leiste den Eintrag wählen (z. B. «Vertriebsperformance»), dann zeigt die Vorlage dessen Inhalte. Texte ändern Sie im CMS, nicht in der Vorlage: Die Felder sind verknüpft (lila Rahmen im Designer).

**Aufbau:** Hero (Kicker, Hero-Titel, Hero-Lead, Hero-Bild) · Hebel (Abschnittstitel, Intro, Karten aus der Collection «Hebel») · Diagnostik & Tools (Titel, Text, Werkzeuge) · Vorteil (Titel, Text) · Abschluss (CTA-Titel, CTA-Text, zwei Buttons mit Text und Link).

**Einmalig von Hand einstellen** (die Schnittstelle kann das nicht, rund 2 Minuten):
1. Hebel-Liste anklicken (Navigator: Section Hebel › Collection List Wrapper) › Zahnrad › **Filter** › «Add filter» › Feld «Themenlinie» › «Current Themenlinie». **Sort Order** › «Reihenfolge» › «Ascending».
2. Werkzeug-Liste anklicken (Section Diagnostik & Tools › Collection List Wrapper) › Zahnrad › **Source** von «Werkzeuge» auf «Werkzeuge (Themenlinien)» umstellen, das ist der Bezug des aktuellen Eintrags. Danach Sortierung «Reihenfolge» › «Ascending».
3. Optional: Sections ohne Inhalt ausblenden. Section anklicken › Zahnrad › **Conditional Visibility** › z. B. «Diagnostik und Tools Titel is set».

**Neue Themenlinie:** CMS › Themenlinien › «New Themenlinie», Felder in den Gruppen ausfüllen, Hebel in der Collection «Hebel» mit der Themenlinie verknüpfen und «Reihenfolge» in Zehnerschritten setzen.

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
- **Bewegung, Zeiger oder Videos fehlen auf einem Gerät:** die Seite mit `?diagnose` am Ende der Adresse öffnen (z. B. `…/home-v3?diagnose`). Unten links erscheint eine kleine Anzeige mit dem, was der Browser meldet; ein Bildschirmfoto davon an Claude schicken. Erscheint keine Anzeige, lädt das Skript auf diesem Gerät nicht.
- **Custom Code:** Es gibt nur ein Skript: «ROWAPA Grafik» (Punkte-Grafiken, Zähler, Treppe, Kugel mit Kacheln, Insights-Pfeile, Hover-Videos), über die Webflow-Schnittstelle site-weit eingebunden. Site settings › Custom code bleibt leer. Bitte nicht ändern; neue Fassungen registriert Claude.

### 2.47 Seite «Performance-Analyse» (`/performance-analyse`, seit Runde 63)
- **Aufbau:** Navbar · Bühne › Header (Kopfzeile mit Plum-Linie, Titel, Satz, zwei Buttons, Lupe, Punktemeer) › Logo-Band › Die Ausgangslage › Was Sie erreichen (drei Kacheln, fünf Auswertungen als Reiter) › Die Methode (fünf Methoden, Auswertungs-Panel, Kundenstimme, Hinweis, Aufwand) › Gut zu wissen › Kontakt › Footer.
- **Texte ändern:** im Designer doppelklicken. Header-Titel und -Satz stehen direkt auf der Seite (`section_header-unterseite`).
- **Kontakt (Komponente «Section Kontakt», gilt auf allen Seiten):** Satz und Button je Seite über die Eigenschaften rechts (Instanz anklicken › Eigenschaften «Satz», «Button Text», «Button Link»). Titel, Ansprechperson und Telefonnummern nur in der Komponente ändern, dann gilt es überall.
- **Logo-Band (Komponente «Logo-Band»):** neues Logo in der Komponente einfügen, gilt auf Startseite und Unterseiten.
- **Auswertungen (Reiter):** Jeder Reiter hat Titel, Hinweis «Musterdaten», Grafik, Bildunterschrift und Text als normale Elemente. Die Grafiken sind Bilder (Desktop- und Handy-Fassung, Klassen `auswertung_bild is-desktop` / `is-handy`); neue Grafik: Bild anklicken › Einstellungen › Bild ersetzen, beide Fassungen. Werkzeug für neue Grafiken: `tools/entwuerfe/runde63_charts.js`.
- **Noch von Hand im Designer (einmalig):** (1) Reiter-Element «Auswertungen (Reiter)» auswählen › Einstellungen › zweimal «Add Tab»; dann den Inhalt aus «ZWISCHENABLAGE Reiter 4+5» in die neuen Reiter ziehen (Interne Referenz, Massnahmen), Beschriftung setzen («Interne Referenz» mit Zusatz «optional», «Massnahmen»), Zwischenablage löschen. (2) Reiter-Link auswählen › Zustand «Current» › Hintergrund transparent, Rand unten 3 px Plum, Schrift Manganese. (3) Section «Die Methode» › Einstellungen › ID `methode` (für den Button «So funktioniert unsere Methode»).
- **Gut zu wissen:** Fragen sind feste Elemente wie auf der Startseite (aufklappbar). Neue Frage: bestehende Frage duplizieren.
- **Megamenü:** «Was wir tun › Für Unternehmen › Performance-Analyse» mit Vorschaukarte (`data-vorschau="analyse"`), im Handy-Menü unter «Für Unternehmen».

