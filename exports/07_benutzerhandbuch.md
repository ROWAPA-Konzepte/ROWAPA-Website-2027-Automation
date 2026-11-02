# ROWAPA Website 2027 · Benutzerhandbuch

**Für:** das ROWAPA-Team, das die Website in Webflow selbst pflegt
**Laufend gepflegt** · zuletzt 02.11.2026 · Stufe 2 (Startseite) · Webflow-Projekt «ROWAPA Website 2027 Automation»
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
- **Logo-Laufband:** Interactions › «Logo-Laufband». 60 s pro Durchlauf, hält beim Darüberfahren an. Bei «Bewegung reduzieren» steht es still. Gilt seit Runde 63 für die ganze Website: Das Band läuft auf jeder Seite, auf der die Komponente «Logo-Band» steht, ohne weitere Einstellung. Tempo ändern: Dauer der Bewegung im Interactions-Panel.
- **Einblenden beim Scrollen (seit Runde 64, ohne Code):** Element auswählen › Zahnrad (Settings) › Custom attributes › `data-einblenden` mit Wert `0` (gleitet herein, sobald es bei 85 % der Fensterhöhe ist), `1`, `2` oder `3` (0,12 / 0,24 / 0,36 s später, für Karten nebeneinander). Wirkt auf jeder Seite (Interactions «Einblenden 0» bis «Einblenden 3»). Nicht auf Elementen verwenden, die das Grafik-Skript selbst bewegt (z. B. einzelne Methoden-Zeilen).
- **Kundenstimme · Plum-Linie zeichnen:** Interaction auf `stimme_layout`; die Linie ist das Element `stimme_linie` oben in der Karte.
- **Header Unterseite · Strich zeichnen:** beim Laden zeichnet sich der Plum-Strich unter dem Titel (`header-unterseite_strich`).
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
- Technische Details: `LIESMICH.md` im Repository `ROWAPA-Konzepte/rowapa-website-grafik` (seit 1.24.0; der alte Ordner `tools/grafik` ist seit Runde 83 gelöscht).

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
- Seit Grafik 1.20.0 (Entscheid 383) läuft der Ring 1:1 mit der Maus, ohne Nachziehen. Wieder mit Nachlauf: am selben Element Attribut `data-zeiger-nachlauf` setzen, z. B. `0.8` (0 = direkt, bis 0.95 = stark verzögert).
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
- **Figuren in Plum neu erzeugen:** Repository `rowapa-website-grafik`, Ordner `figuren/` (seit Runde 83, vorher `tools/grafik/figuren/`) › `PLUM=1 node render.js` und `HELL=1 PLUM=1 node render.js vertrieb` (siehe LIESMICH).
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

### 2.46 Vorlage «Themenlinie» (CMS-Seite, neu gebaut in Runde 96)

**Wo:** Pages › CMS Collection Pages › «Themenlinien Template». Oben in der Leiste den Eintrag wählen (z. B. «Vertriebsperformance»), dann zeigt die Vorlage dessen Inhalte. Texte ändern Sie im **CMS** (Editor oder Designer › CMS), nicht in der Vorlage: Die Felder sind verknüpft (lila Rahmen im Designer). Seite ansehen: `/themen/<slug>`, z. B. `/themen/vertriebsperformance`.

**Aufbau und Felder (Themenlinie):**

| Abschnitt | Felder |
|---|---|
| Header | Name (Kopfzeile «Für Unternehmen › Name»), Hero-Titel, Hero-Lead, CTA-Button 1 Text (erster Button, öffnet E-Mail), Hero-Button 2 Text (springt zu den Hebeln), Themenfigur (PNG, helle Fassung, baut sich aus Punkten auf) |
| Die Hebel | Hebel Abschnittstitel, Hebel Intro, Feld **Hebel** (welche Hebel als Karten erscheinen) |
| Ihr Vorteil | Vorteil Titel (ohne «Ihr Vorteil:», das steht schon darüber), Vorteil Text, Werkzeuge (das erste erscheint als Karte); die Karte «Wo anfangen? Performance-Analyse» und die drehende Kugel «ROWAPA Wissensplattform» sind fest |
| Foto mit Text | **Foto** (Querformat, Alt-Text im Asset), **Foto-Titel**, **Foto-Text** (seit Runde 97) |
| Aus der Praxis | Feld **Kundenstimmen** (die erste gewählte Stimme erscheint gross) |
| So arbeiten wir | Komponente «Section Vorgehen» (Punkte-Treppe wie Performance-Analyse). In der Vorlage die Instanz wählen: Schalter «Zeitstrahl anzeigen» und «Zeitlicher Ablauf anzeigen» aus, «Link anzeigen» an, Feld «Satz». Schritte und Texte ändern Sie in der Komponente; das wirkt auf Performance-Analyse und alle Themenlinien. |
| Gut zu wissen | Feld FAQ (gewählte Fragen) |
| Passend zum Thema | Feld **Insights** (Blog-Beiträge; neueste zuerst, höchstens 6). Bild = Titelbild, Etikett = Kategorie des Beitrags, Text = Teaser |
| Kontakt | CTA-Text (Satz), CTA-Button 1 Text (Standard «Erstgespräch anfragen», öffnet eine E-Mail) |
| Browser-Titel und Google | **SEO-Titel** (z. B. «Vertriebsperformance für Banken und Versicherungen · ROWAPA», bis 60 Zeichen), **SEO-Beschreibung** (bis 155 Zeichen); die Vorlage übernimmt beide automatisch (seit Runde 98) |

**Hebel-Karten (Collection «Hebel»):** Karten-Nummer («01»), Karten-Kennung («Hebel 1»), Kartentitel, Teaser-Text, Figur (PNG; vorerst die Figur der Themenlinie). Reihenfolge = Feld «Reihenfolge» (kleinere Zahl zuerst). Eine Karte erscheint, wenn der Hebel im Feld «Hebel» der Themenlinie gewählt **und** veröffentlicht ist. Die Karten stapeln sich beim Scrollen; jede zweite ist dunkel; die überdeckte Karte wird leicht kleiner und dunkler (Interaktion «Hebel-Karte tritt zurück», Runde 97). Das macht die Vorlage selbst, auch bei mehr oder weniger als vier Hebeln.

**Neue Themenlinie oder Inhalte prüfen:** CMS › Themenlinien › Eintrag öffnen, Felder in den Gruppen ausfüllen, Hebel, FAQ, Kundenstimmen und Werkzeuge auswählen, dann veröffentlichen. Bezogene Einträge (Hebel, Fragen, Stimme, Werkzeug, Blog-Beiträge und deren Kategorie) müssen ebenfalls veröffentlicht sein, sonst fehlen sie auf der Seite. Ohne Insights oder Foto bleiben diese Abschnitte leer: vor dem Veröffentlichen befüllen.

**Bauweise (für Claude und Webflow-Profis):** Karten `hebel_item` mit `position: sticky` (Theme-Modus «Kontrast» bei `nth-child(even)`), Listen an die Referenzfelder der Themenlinie gebunden, Leer-Hinweise mit Klasse `hide` ausgeblendet. Früherer Klickweg «Filter von Hand» entfällt (Runde 96). Interaktion «Hebel-Karte tritt zurück»: Auslöser Liste `thema_hebel-liste` (Scroll, top 104px bis bottom 70 %, scrub), Aktionen auf `.hebel_item:not(:last-child)` (Skalierung 1 → 0,96) und `… .hebel_schatten` (Deckkraft 0 → 25 %, seit Runde 98), gestaffelt je 1. Kugel: `thema_kugel` mit `data-grafik="orbit"` ohne Kacheln, `data-tempo="0.6"`. Datum der Insights-Karten nur im Designer einstellbar (offener Punkt 144).

**Entwurf Runde 98 (nur mit `?entwurf` sichtbar):** Die Vorlage enthält verborgene Entwurfsteile (Hüllen mit Klasse `hide` und Attribut `data-entwurf`, z. B. Ausgangslage, Praxisbeispiel, neue Kartentexte, Wissensbereiche). Bitte nicht löschen, solange der Entwurf läuft (offener Punkt 148). Ansehen: `/themen/vertriebsperformance?entwurf`, unten links die Leiste. Neue Hebel-Felder für die Karten im Entwurf: **Karte Nutzentitel**, **Karte Ausgangslage**, **Karte Leistung** («Was ROWAPA liefert»), **Karte Wirkung**, **Motiv für helle Karten**, **Motiv für dunkle Karten** (Punktfigur in zwei Farbsätzen; welche erscheint, wählt die Karte selbst).

**Titelgrössen (site-weit, seit Runde 98):** Die Grössen stehen in den Klassen `heading-style-h1` … `h3` und passen sich Fensterbreite und -höhe an. Bitte keine Schriftgrösse direkt an einem Titel setzen, sonst stimmt die Reihenfolge H1 > H2 > H3 nicht mehr.

**FAQ-Symbol:** Das Plus dreht sich beim Öffnen zum × (Interaktion «FAQ-Symbol dreht beim Öffnen», gilt für alle Fragen-Listen mit `faq_question`).

**Entwurf Runde 99 (nur mit `?entwurf`):** Weitere verborgene Entwurfsteile in der Vorlage: Abschnitt «Ihre Kunden kommen informiert» (vier Reiter, Hülle `data-entwurf="ausgangslage"`), Praxisbeispiel «Vom Produkt zum Kunden» (`beispiel`), Bühne «Ihr Nutzen» (`nutzen`), Leseliste der Insights (`insights`), Kennzeile der Karten mit Kartentitel (`karten`). Texte der Spannungsfelder und des Praxisbeispiels ändern Sie direkt in der Vorlage (sie sind vorerst nicht im CMS). Punktbilder: Element mit `data-grafik="punktbild"` und `data-form` (ordnen, verbinden, buendeln, kreislauf, produkt, kunde); Knopf mit `data-punktbild-ausloeser` löst die Verwandlung aus. Bitte nicht löschen, solange der Entwurf läuft (offener Punkt 155).

### 2.47 Seite «Performance-Analyse» (`/performance-analyse`, seit Runde 63)
- **Stand seit Runde 72 (01.11.2026):** Die Seite «Performance-Analyse» ist die übernommene Vorschau (neuer Header, Fragen, Entscheidungsgrundlage, Diagramme, Kundenstimmen mit Logo-Leiste). Die Hinweise unten zur Vorschau gelten jetzt für diese Seite. Daneben gibt es vorübergehend «Performance-Analyse · Vorschau» (`/performance-analyse-vorschau`, nicht verlinkt) und die alte Fassung «Performance-Analyse (alt, Stand Runde 64)» als Entwurf (`/performance-analyse-alt`, nicht veröffentlicht). Beide werden nach Freigabe gelöscht. Änderungen nur noch auf der Seite «Performance-Analyse» machen.
- **Aufbau:** Navbar · Bühne › Header (Kopfzeile mit Plum-Linie, Titel, Satz, zwei Buttons, Lupe, Punktemeer) › Logo-Band › Die Ausgangslage › Was Sie erreichen (drei Kacheln, fünf Auswertungen als Reiter) › Die Methode (fünf Methoden, Auswertungs-Panel, Kundenstimme, Hinweis, Aufwand) › Gut zu wissen › Kontakt › Footer.
- **Texte ändern:** im Designer doppelklicken. Header-Titel und -Satz stehen direkt auf der Seite (`section_header-unterseite`).
- **Kontakt (Komponente «Section Kontakt», gilt auf allen Seiten):** Satz und Button je Seite über die Eigenschaften rechts (Instanz anklicken › Eigenschaften «Satz», «Button Text», «Button Link»). Titel, Ansprechperson und Telefonnummern nur in der Komponente ändern, dann gilt es überall.
- **Logo-Band (Komponente «Logo-Band»):** neues Logo in der Komponente einfügen, gilt auf Startseite und Unterseiten.
- **Auswertungen (Reiter):** Jeder Reiter hat Titel, Hinweis «Musterdaten», Grafik, Bildunterschrift und Text als normale Elemente. Die Grafiken sind Bilder (Desktop- und Handy-Fassung, Klassen `auswertung_bild is-desktop` / `is-handy`); neue Grafik: Bild anklicken › Einstellungen › Bild ersetzen, beide Fassungen. Werkzeug für neue Grafiken: `tools/entwuerfe/runde63_charts.js`.
- **Noch von Hand im Designer (einmalig):** **Zustand «Current»** (Plum-Linie unter dem aktiven Reiter): im Navigator einen Reiter-Link anklicken (Klasse `auswertung_reiter`), rechts im Style-Panel neben dem Klassennamen das Menü «States» öffnen › «Current»; dann im Zustand drei Werte setzen: Typography › Color Variable «Manganese Black»; Backgrounds › Color Deckkraft 0 % bzw. `transparent` (Webflow setzt sonst Grau); Borders › untere Kante › Color Variable «Plum Perfect» (Stil und 3 px stehen schon in der Grundklasse). Die gesetzten Werte erscheinen im Panel farbig; der aktive Reiter zeigt im Canvas sofort die Plum-Linie. Zurück auf «None», veröffentlichen. Gilt für alle Reiter. Hinweis: Ein Zustand ohne diese Werte (z. B. nur «Mischmodus: normal») ändert nichts Sichtbares; so war es am 31.10. (Runde 66). Faustregel im Style-Panel: **orange** Beschriftung = Wert geerbt (nicht in diesem Zustand gesetzt), **blau** = in diesem Zustand gesetzt. Auch wenn ein Feld schon den richtigen Wert zeigt (z. B. «transparent»), muss er im Zustand neu eingegeben werden, bis die Beschriftung blau ist. Bebilderte Anleitung: `exports/stufe4/runde67/reiter_current_anleitung.png`. Reiter 4 und 5 sind seit Runde 64 fertig. Die Sprungmarke `methode` für den Button «So funktioniert unsere Methode» ist ein leeres Element zuoberst in «Die Methode» (nicht löschen).
- **Gut zu wissen:** Fragen sind feste Elemente wie auf der Startseite (aufklappbar). Neue Frage: bestehende Frage duplizieren.
- **Megamenü:** «Was wir tun › Für Unternehmen › Performance-Analyse», erster Eintrag der Spalte (Einstieg, Entscheid 374), mit Vorschaukarte (`data-vorschau="analyse"`); im Handy-Menü direkt nach «Für Unternehmen». Reihenfolge ändern: in der Komponente «Navbar · Bühne» den Link im Navigator verschieben.
- **Header-Höhe (seit Runde 64):** Der Header füllt am Desktop das erste Bild, das Logo-Band schliesst mit der Fensterunterkante ab. Einstellungen: `section_header-unterseite` Mindesthöhe `calc(100svh - 169px)` (Navigation 73 px + Logo-Band 96 px; ändert sich eines davon, Wert anpassen), Titel `heading-style-h1.is-unterseite` 6 % der Fensterhöhe (CI), höchstens 60 px.
- **Effekte (seit Runde 64):** Lupe setzt sich aus Punkten zusammen (`header-unterseite_figur`: `data-grafik="punktfigur"`, `data-start="sofort"`, `data-tempo="0.7"`). Grafiken der Reiter bauen sich auf (`auswertung_grafik`: `data-grafik="aufbau"`, `data-richtung` = `links`, `mitte` oder `oben`). «Fünf Methoden» (`methode_layout`: `data-grafik="methoden"`; je Zeile `data-punkte`, welche Punkte im Ergebnis aufleuchten, z. B. `2,3`; neue Methode: Zeile duplizieren und `data-punkte` anpassen). Seitenkopf: Skript «ROWAPAGrafikVorbereitung» (Seiteneinstellungen, verhindert Aufblitzen von Lupe und Strich; auf weiteren Unterseiten mit diesem Header ebenfalls anwenden).
- **Vorschau (Runde 65):** Seite «Performance-Analyse · Vorschau» (`/performance-analyse-vorschau`, nicht verlinkt) zeigt die überarbeitete Fassung. Leistungsfelder: Karten `feld_karte` (Kantenfarbe Great Serpent; Zusatzklasse `is-mitarbeiter` = Sea Cliff), Stichworte als Liste `feld_punkt` mit Farbmarke `feld_marke`; neues Stichwort: Listenpunkt duplizieren. Führungsband `feld_fuehrung` mit Marken `feld_chip`. Kundenstimme eigene Section `section_stimme`. «So arbeiten wir» nutzt die Klassen der Startseite (Treppe, Phasen); Aufwand als grosse Zahlen (`stat_item`, `stat_number is-klein`). Ergebnis-Reiter: Grafikfläche immer 32 rem hoch, Bild wird eingepasst; Texte rechts mit Zusatzklasse `is-auswertung`.
- **Logo-Band:** läuft automatisch (Interaction «Logo-Laufband» gilt für die ganze Website, Abschnitt 2.11).
- **Vorschau, Stand Runde 68:** Header-Titel zweizeilig: erste Zeile normaler Text, zweite Zeile ein Span mit Klasse `heading-wendung` (beginnt immer auf neuer Zeile). Neuen zweiteiligen Titel anlegen: im Titel den zweiten Satz markieren › «Span» › Klasse `heading-wendung`. Die Farbe der zweiten Zeile wird, falls gewünscht, nur an dieser Klasse eingestellt (offener Punkt 115). Titel der Unterseiten brechen ausgeglichen um (`text-wrap: balance` an `heading-style-h1 is-unterseite`).
- **Leistungsfelder (Vorschau):** je Karte Titel, ein Nutzensatz (`feld_nutzen`) und vier Fragen (Liste `feld_liste`, Punkte `feld_punkt` mit Marke `feld_marke`, bei Mitarbeiterperformance `feld_marke is-mitarbeiter`). Frage ändern: doppelklicken; neue Frage: Listenpunkt duplizieren. Figuren stehen in gleich hohen Feldern (`feld_figur` 7 rem, Handy 4,5 rem).
- **Reiter «Massnahmen» (Vorschau):** Musterbericht aus normalen Elementen statt Bild: `bericht` › `bericht_ziel` (Etikett «Hauptziel» + Text) › drei `bericht_schritt` (Kopf mit `bericht_nummer` und `bericht_etikett`, darunter `bericht_text` bzw. Liste `bericht_liste`). Texte im Designer ändern; die Fläche ist am Desktop 32 rem hoch, darum Texte kurz halten (höchstens zwei Zeilen je Schritt). Reiter «Führung»: Satz mit Klasse `auswertung_hinweis`.
- **Reiter-Zustand «Current»:** gesetzt und veröffentlicht (Plum-Linie, Schrift Manganese Black, Hintergrund transparent).
- **Logo-Leiste (Komponente «Logo-Leiste», seit Runde 69):** ruhige Leiste ohne Bewegung für Unterseiten, direkt nach der Kundenstimme. Logo austauschen oder ergänzen: Komponente öffnen › im Raster (`logos_grid is-leiste`) ein Logo duplizieren › Bild ersetzen, Alt-Text setzen. Die Logos sind grau (Klasse `logos_image`, gleiche Darstellung wie im Laufband). Raster: 6 Spalten Desktop, 4 Tablet, 3 Handy. Das bewegte **Logo-Band** gibt es nur noch auf der Startseite unter dem Header (Entscheid 383).
- **Titel:** zweiteilige Titel bleiben einfarbig (Entscheid 383); die zweite Zeile beginnt nur auf einer neuen Zeile.
- **Diagramme in den Reitern (seit Runde 70, Grafik 1.21.0):** Die vier Musterauswertungen sind Webflow-Elemente, keine Bilder. **Wert ändern:** Element anklicken (Marke `dia_punkt`, Balken `dia_balken`, Soll `dia_soll`, Zelle `dia_zelle`, Zahl `dia_wert`) › Einstellungen › Attribute › `data-wert` ändern; bei Abständen (`dia_spanne`) `data-von` und `data-bis`. Die Zahl rechts ist Text und wird mit `data-wert` gleich gesetzt. **Zeile ergänzen:** eine `dia_zeile` duplizieren, Bezeichnung und Werte anpassen. **Farbe:** über die Kombi-Klassen (z. B. `dia_balken is-tief` = Plum für Werte unter dem Soll, `dia_wert is-gross` = Plum-Zahl). Skala am Behälter `auswertung_grafik`: `data-min`, `data-max`. Im Designer stehen Balken und Marken in der Mitte; erst auf der veröffentlichten Seite setzt das Skript die Werte und baut sie auf (beim Erscheinen und bei jedem Reiterwechsel; bei «Bewegung reduzieren» sofort). Musterbericht: `data-art="folge"` an Ziel und Schritten, `data-art="fuellen"` an den Nummern.
- **Kundenstimmen (Vorschau):** Bezeichnung «Kundenstimmen», Titel «Aus der Praxis»; Kopf über die ganze Breite (`section-head is-flush is-ganz`), Zitatkarte rechts (`stimme_rahmen`), darunter die Logo-Leiste im selben Grau. Fragen auf grauer Fläche (`section_faq theme-soft`), damit sich hell und grau abwechseln.
- **Header Unterseite:** füllt das erste Bild (Mindesthöhe Fenster minus Navigation, alle Breiten), das Wellenmeer reicht bis unten. Die Lupe (Figur rechts) ist am Desktop 28 % der Fensterbreite gross (`header-unterseite_bild`, 16–32 rem) und sitzt tiefer (`header-unterseite_figur`, Abstand oben 2–9 rem), damit ihr Griff ans Wellenmeer reicht; auf Tablet und Handy steht sie unter dem Text.
- **Kundenstimme, Kartentitel:** «Nachhaltig durch Begleitung im Alltag.» bleibt (Entscheid 387). Ändern: im Designer doppelklicken (Klasse `quote_headline`).
- **Navigation beim Scrollen (seit Runde 76, alle Seiten):** Beim Runterscrollen blendet die Navigation aus, beim Hochscrollen (200 px) oder am Seitenanfang kommt sie zurück; bei offenem Menü bleibt sie stehen. Gesteuert über das Attribut `data-grafik="kopfleiste"` am Element `navbar_container` in der Komponente «Navbar · Bühne» (Element anklicken › Einstellungen › Attribute). Einstellen: `data-kopfleiste-zurueck` (px Hochscrollen bis zum Einblenden, Standard 200), `data-kopfleiste-ab` (erst ab dieser Tiefe ausblenden, Standard 200). Abschalten: Attribut löschen und veröffentlichen.
- **Seitenwechsel (seit Runde 77, alle Seiten; seit Runde 87 kurze Überblendung):** Beim Wechsel innerhalb der Website blendet die neue Seite in 0,35 s über (Handy 0,3 s); die Navigation bleibt dabei stehen. Offene Menüs schliessen beim Klick. Fährt die Maus über einen Link, lädt Chrome die Zielseite vor (ab 992 px Fensterbreite), dann beginnt der Wechsel sofort. Die neue Seite kommt vollständig herein; die Lupe im Header baut sich nur beim direkten Aufruf aus Punkten auf. Das macht das Kopf-Skript «ROWAPASeitenwechsel» 1.3.0 (über die Webflow-Schnittstelle registriert, nicht im Feld «Custom code» sichtbar; Quelle `exports/stufe4/runde87/code/`). Keine Pflege nötig. Abschalten oder ändern: über die Schnittstelle (Claude) oder in Webflow unter den registrierten Skripten der Website. Links auf Seiten, die es noch nicht gibt, zeigen bis zur eigenen 404-Seite die Fehlerseite der Plattform ohne Wechsel.
- **Bilder im ersten Bildschirm sofort laden (seit Runde 87):** Webflow lädt Bilder erst, wenn sie gebraucht werden. Bilder, die gleich beim Öffnen einer Seite sichtbar sind (Header, Logo-Band, Lupe), sollen sofort laden, sonst erscheinen sie nach einem Seitenwechsel verspätet. So eingestellt: Bild anklicken › Einstellungen (Zahnrad) › «Custom attributes» › Name `loading`, Wert `eager`. Gleichwertig ist die Bild-Einstellung «Load» › «Eager», wo der Designer sie anbietet; beides zusammen schadet nicht. Gilt heute für 25 Bilder auf Startseite, Performance-Analyse und Entwurfsseite. Bei neuen Seiten für die Bilder im ersten Bildschirm ebenso einstellen, für alle anderen «Lazy» lassen.
- **Seitenwechsel umschalten:** in Runde 83 zum Vergleichen eingebaut, seit Runde 84 entschieden (0,5 s für alle); der Schalter `?wechsel=` wirkt nicht mehr.
- **Methoden aufklappbar (seit Runde 77):** «Fünf Perspektiven» auf `/performance-analyse` sind aufklappbar (`methode_layout` mit `data-grafik="methoden-klapp"`). Im Designer bleibt alles offen und wird wie gewohnt bearbeitet. Welche Punkte im Ergebnis zu einer Methode leuchten, steht im Attribut `data-punkte` der Zeile (z. B. `2,3`). Neue Methode: Zeile duplizieren, Texte und `data-punkte` anpassen. **Seit Runde 89:** Zu Beginn sind alle Methoden zugeklappt, gesteuert über das Attribut `data-start` = `zu` am Element `methode_layout` (anklicken › Einstellungen › Attribute). Soll wieder die erste offen sein: Attribut löschen und veröffentlichen. Ein Klick irgendwo in das Feld öffnet eine Methode; Klicks in den Text der offenen Methode schliessen sie nicht.
- **Titel wortweise (seit Runde 77):** Section-Titel (`heading-style-h2`) der Performance-Analyse erscheinen beim Scrollen Wort für Wort (Interaktion «Titel wortweise (H2) · Performance-Analyse»). Für weitere Seiten in der Interaktion unter «Bereich» die Seite ergänzen.
- **Entwürfe Runde 88 (zum Ausprobieren, nicht verlinkt):** `/performance-analyse-entwurf` (Muster Beispielauswertungen) und `/startseite-entwurf` (Kopie der Startseite, Muster Insights). Unten links die Umschaltleiste «Entwurf · … im Muster»: je Punkt «heute» (= echte Seite) oder Muster, Links zwischen den beiden Entwurfsseiten, «Link zu dieser Auswahl» zum Teilen. Beide Entwurfsseiten nutzen die Komponente «Navbar · Bühne (Entwurf Bewegung)»: Logo → Startseite (Entwurf), Megamenü «Performance-Analyse» → Performance-Analyse (Entwurf). So lässt sich der Seitenwechsel in beide Richtungen testen. **Massnahmen-Texte** pflegen: im Navigator «Massnahme (Muster) · Reiter 1» bis «· 5» (Klasse `auswertung_massnahme`, im Designer ausgeblendet, sichtbar nur im Muster) aufklappen und den Absatz bearbeiten. Fenster, Schritte und Magazin macht im Entwurf das Skript «ROWAPAEntwurfUmschaltleiste» 2.0.0 (Quelle `exports/stufe4/runde88/entwurf-code/`); nach dem Entscheid wird das Gewählte nativ gebaut und das Skript gelöscht.
- **Entwürfe Runde 89:** Die Umschaltleiste (Fassung 2.1.2, Quelle `exports/stufe4/runde89/entwurf-code/`) zeigt je Punkt alle Möglichkeiten nebeneinander. Beispielauswertungen: «Reiter wie heute», «Muster 2, Spalte Sea Cliff», «Muster 2, Spalte Manganese», «Muster 1: Fenster». Insights: «Reihe wie heute», «Magazin, Foto nur im grossen Beitrag», «Magazin, Fotos in allen Beiträgen». Die Fotos sind die Beitragsbilder aus dem CMS (Feld Bild des Beitrags); die Kurztexte der Karten ohne Foto stammen ebenfalls aus dem CMS. Beides wird im CMS gepflegt, nicht auf der Seite. Wer zwischen den Mustern wechselt, sieht den Aufbau Schritt für Schritt neu. Nach dem Entscheid wird das Gewählte nativ gebaut und das Skript gelöscht.
- **Entwürfe Runde 90:** Umschaltleiste 2.2.0 mit fünf Punkten (neu: «Unsere Erfolge», «Was uns antreibt», «Header einblenden»; nach der Wahl beim Header lädt die Seite neu). **Unsere Erfolge (Kacheln):** Abschnitt `section_belege` auf `/startseite-entwurf`, im Navigator nach dem heutigen Abschnitt `section_erfolge`. Texte direkt im Designer ändern; Kundenstimmen: Block `belege_stimme` duplizieren oder löschen, die Anzeige «1 / 8» rechnet das Skript selbst; Foto: Bild `belege_foto` anklicken › Einstellungen › Bild ersetzen, Ausschnitt über «Object position» der Klasse `belege_foto`; Zahlen: Text im Element `belege_zahl` ändern (z. B. «98 %»), das Attribut `data-grafik` = `zaehler` lässt sie hochzählen; Kacheln über die Kombi-Klassen `is-titel`, `is-stimme`, `is-foto`, `is-zahl`, `is-wirkung`, `is-logos` (Spaltenbreite je Breakpoint unter «Grid child»). Im Designer stehen alle acht Stimmen untereinander, auf der Seite zeigt die Leiste eine nach der anderen. **Empfehlungen:** Bezeichnung in den Elementen «Massnahme (Muster) · Reiter 1» bis «· 5» (Klasse `auswertung_massnahme-label`). **Header gemeinsam einblenden:** Kopf-Skript «ROWAPAEntwurfKopf» (nur Entwurfsseiten, Quelle `exports/stufe4/runde90/entwurf-code/entwurf-kopf.js`); ohne dieses Skript verhält sich der Header wie heute.
- **Runde 91 (Entwürfe):** Die Leiste (2.2.1) zeigt die gewählte Fassung als Standard; «Unsere Erfolge» und «Was uns antreibt» sind daraus entfernt (bleiben wie heute; der Kacheln-Abschnitt `section_belege` ist ausgeblendet). **Nach oben auf den Themenlinien:** Element `section_themen` anklicken › Einstellungen › Attribute › `data-nachoben` = `mitlaufen` lässt den Knopf «Nach oben» auf der Bühne stehen; Attribut löschen = wie bisher ausgeblendet (Grafik ab 1.31.0). **Header 1,2 s:** Standard im Kopf-Skript 1.0.1; beim Logo-Band der Startseite blendet nur der Inhalt ein, die dunkle Fläche bleibt stehen.
- **Entwurf (zum Ausprobieren, nicht verlinkt):** Seite «Performance-Analyse · Entwurf Bewegung» (`/performance-analyse-entwurf`) mit Komponente «Navbar · Bühne (Entwurf Bewegung)» (Ordner «99 Entwurf»). Dort zusätzlich ein Bildband mit Teamfoto nach «Fünf Perspektiven» (`section_bildband`, Bild `bildband_bild`; Bild tauschen: Bild anklicken › Einstellungen › Bild ersetzen, Alt-Text setzen). Bitte auf dieser Seite nichts pflegen; sie wird nach der Freigabe gelöscht.
- **Bildflächen und Ausschnitt (seit Runde 78):** Die Höhe eines Bildbandes richtet sich nach einem Seitenverhältnis je Format, nicht nach der Fensterhöhe: `section_bildband` hat «Aspect ratio» 2,2:1 am Desktop (höchstens 88 % der Fensterhöhe), 16:10 auf dem Tablet und 4:3 auf dem Handy (Style-Panel › Size › Ratio, je Breakpoint). Der Ausschnitt steht in der Bildklasse unter «Object position» (Bildband `50% 6%` = oben verankert). Neues Foto: nach dem Tausch in allen Breakpoints prüfen, ob Köpfe und Augen ganz im Bild sind (Entscheid 122); sonst «Object position» anpassen (zweiter Wert kleiner = Ausschnitt weiter oben). Die Bewegung beim Scrollen vergrössert von der Oberkante aus (`transform-origin: 50% 0%`), damit oben nichts wegfällt.
- **Fotos · Entwurf (seit Runde 78, nicht verlinkt):** Seite `/fotos-entwurf` zeigt, wo die neuen Teamfotos passen (Kontakt, So arbeiten wir, Über uns, Meine persönliche Entwicklung). Rahmen `fotoentwurf_rahmen` legt das Format fest (Grundklasse 4:5, Kombi `is-quer` 5:4, Kombi `is-klein` kleine Teamkarte), Bild `fotoentwurf_bild` mit Kombi je Foto (`is-foto4` … `is-foto8`) für den Ausschnitt je Breakpoint. Nur Entwurf: Beim Bau der echten Seiten werden Rahmen und Ausschnitte übernommen, die Seite wird nach Freigabe gelöscht.
- **Entwurf umschalten (seit Runde 79):** Auf der Entwurfsseite `/performance-analyse-entwurf` steht unten links die Leiste «Varianten». Je Punkt lässt sich zwischen «heute» (= echte Seite) und dem Entwurf wechseln; die Wahl bleibt im Browser gespeichert, «Link zu dieser Auswahl» kopiert einen Link mit genau dieser Kombination. Die Leiste ist ein Entwurfs-Skript («ROWAPAEntwurfUmschaltleiste», nur auf dieser Seite, Quelle `exports/stufe4/runde79/entwurf-code/pa-varianten.js`) und wird nach dem Entscheid gelöscht. Die gewählte Fassung wird dann auf `/performance-analyse` nativ gebaut. Seit Runde 80 (Fassung 1.1.0) enthält die Leiste nur noch offene Punkte (Untertitel, Beispielauswertungen als Fragen, Methoden beim Darüberfahren); das nicht gewählte Bildband ist auf der Entwurfsseite ausgeblendet.
- **Foto mit Text (Entwurf, Runde 79):** `section_bildtext` › `theme-kontrast` (dunkle Fläche über Variablen) › `bildtext_layout` (Raster 7:5, Tablet 1:1, Handy untereinander) mit `bildtext_bild-wrap` (Seitenverhältnis 16:10, Tablet 1:1, Handy 4:3) und `bildtext_inhalt` (Titel H2, Satz). Bild tauschen: Bild anklicken › Einstellungen › Bild ersetzen; Ausschnitt über «Object position» der Klasse `bildtext_bild` (Bildmitte bei 40 %, Tablet `40% 35%`, Handy `50% 35%`).
- **Titel-Interaktion:** «Titel wortweise (H2) · Performance-Analyse» gilt seit Runde 80 für die echte Seite und die Entwurfsseite (0,5 s); die beiden Entwurfs-Interaktionen aus Runde 79 sind gelöscht.
- **Seit Runde 80 auf der echten Seite (`/performance-analyse`):**
  - **Foto mit Text** nach «Fünf Perspektiven» (`section_bildtext`, Aufbau wie unten beim Entwurf beschrieben). Bildfläche 16:10 (Tablet 1:1, Handy 4:3), Bildmitte bei 40 % (`bildtext_bild` › Object position); ist der Text höher, füllt das Bild die ganze Höhe.
  - **Hinweise in den Diagrammen:** Attribut `data-hinweis="ja"` am Behälter `auswertung_grafik`. Abschalten: Attribut löschen. Eigener Text: `data-hinweis-text`. Die Stelle sucht das Grafik-Skript selbst.
  - **Button im Header** «Beispielauswertung ansehen» springt zur Sprungmarke `beispielauswertung` (ID am Element `ergebnis_kopf`, nicht löschen).
  - **Einblendungen:** Titel erscheinen wortweise in 0,5 s; Titelblöcke, Kundenzitat und Aufwandzahlen ohne Einblendung. Einblendung wieder einschalten: am Element Attribut `data-einblenden` mit `0` bis `3` setzen.
  - **Lupe:** Bild `grafik-lupe-performance-analyse-fein.png`.
  - **Megamenü «aktuelle Seite» (von Hand, einmalig):** im Designer den Link im Megamenü anklicken (`navbar_dropdown-link` + `is-buehne`) › States › «Current» › Borders links 2 px, Farbe «Plum Perfect» › Typography Weight 600 › zurück auf «None» › veröffentlichen. Die Schnittstelle kann diesen Zustand nicht setzen.
  - **Auswertungen auf dem Tablet:** Karte und Text stehen bis 991 px untereinander, die Karte hat dort keine feste Höhe.
- **Methoden beim Darüberfahren (Grafik 1.24.0, von ROWAPA nicht gewählt, Entscheid 395):** Attribut `data-oeffnen="hover"` am Element `methode_layout`. Dann öffnet sich eine Methode auch beim Darüberfahren mit der Maus; Klick funktioniert weiter. Abschalten: Attribut löschen.
- **Seit Runde 81 auf der echten Seite:** Beispielauswertungen mit Fragen als Reiter und einer Aussage beim Diagramm (`quote_headline` im Reiter); Reiter-Text per Doppelklick auf den Text im Reiter ändern.
- **Seit Runde 82 auf der echten Seite:** Header-Untertitel wieder in einem Absatz (Text per Doppelklick ändern). Ergebnis-Kasten «Fünf Perspektiven»: Attribut `data-ergebnis="marke"` am Element `methode_layout` (Grafik 1.25.0) lässt alle Punkte im Kasten rechts sichtbar; nur die Marke der Punkte der offenen Methode wird Plum, die übrigen Sea Cliff. Ohne Attribut treten die Punkte der übrigen Methoden zurück.
- **Laufende Linien (seit Runde 83 auf der echten Seite):** Attribut `data-linien="laufen"` am Element `methode_layout`. Die Linien von den Methoden zum Kasten bestehen aus wandernden Punkten; die Linie der offenen Methode ist Plum. Abschalten: Attribut löschen. Bei «Bewegung reduzieren» stehen die Methoden offen untereinander, ohne Linien.
- **Foto mit Text (seit Runde 83):** innere Fläche mit Klasse `theme-soft` (Snowbank wie die Kundenstimmen; zurück zu dunkel: `theme-kontrast`). Bildfläche `bildtext_bild-wrap` auf dem Desktop 2,2:1 (Tablet 1:1, Handy 4:3), Bildmitte `bildtext_bild` 50 % 25 %. Text H2 und Satz per Doppelklick ändern. Der Abstand der Kundenstimmen darunter ist seit Runde 85 der normale Section-Abstand, wie unter «Im Blickpunkt» auf der Startseite (die Kombi-Klasse `is-nach-bild` wird nicht mehr verwendet). Seit Runde 84 mit feiner Linie unten: Klasse `section_bildtext`, Rahmen unten 1 px mit derselben Farb-Variable wie die Linie unter «Im Blickpunkt» auf der Startseite; Farbe ändern nur über die Variable, dann ändern sich beide Linien gleich.
- **Seit Runde 84:** Titel über den Beispielauswertungen «Welche Antworten liefert die Auswertung?» (per Doppelklick änderbar). Abstand Untertitel zu den Buttons im Header aller Unterseiten 48 px (Handy 40 px), Klasse `header-unterseite_lead` › Margin unten.
- **Seit Runde 85:** «Ihre Entscheidungsgrundlage»: Das weisse Feld mit den drei Aussagen (`erreichen_kacheln`) blendet als Ganzes ein (`data-einblenden="0"` am Feld). Gestaffelt wäre `data-einblenden` 0, 1, 2 an den einzelnen Kacheln.
- **Grafik-Skript:** wird seit 1.24.0 im Repository `ROWAPA-Konzepte/rowapa-website-grafik` gepflegt (README dort beschreibt neue Fassungen). Der alte Ordner `tools/grafik` im Projekt-Repository ist seit Runde 83 gelöscht (Freigabe ROWAPA); die Werkzeuge für die Standbilder liegen im Grafik-Repository unter `figuren/`.
- **Seit Runde 92 (Entscheid 406): Beispielauswertungen final** (die Hinweise oben zu den Entwürfen der Runden 88–91 sind erledigt; die Entwurfsseiten sind offline):
  - **Aufbau:** Reiter-Element mit Klasse `auswertung_tabs` (Raster: links die Fragenspalte `auswertung_menu` in Manganese, rechts die Reiter-Fläche `auswertung_inhalt`, Rahmen mit Plum-Linie). Je Reiter: Kopf, Diagramm, Legende (`auswertung_visual`), darunter links «Einordnung» (`quote_content is-auswertung`: Bezeichnung `auswertung_label`, Aussage `quote_headline is-auswertung`, Text `quote_text is-auswertung`, ggf. Hinweis `auswertung_hinweis`), rechts «Empfehlungen» (`auswertung_massnahme`: Bezeichnung `auswertung_label`, Text `auswertung_massnahme-text`, Quelle `auswertung_massnahme-quelle`).
  - **Texte ändern:** im Designer doppelklicken. Fragen in der Spalte: Text im Reiter-Link (Klasse `auswertung_reiter-text`).
  - **Neuer Reiter:** Reiter-Link und Reiter duplizieren (Webflow Tabs), Texte anpassen.
  - **Schritt für Schritt:** Grafik-Skript (Modul `auswertung`), Attribut `data-grafik` = `auswertung` am Reiter-Element. Beschriftung der Schrittleiste im Attribut `data-schritte` (mit «|» getrennt, heute «1 Diagramm|2 Abweichung|3 Einordnung|4 Empfehlungen»), Zeitpunkte von Schritt 2, 3, 4 optional in `data-takt` (Millisekunden, Standard `1400,2000,2600`). Ohne das Attribut steht alles sofort da.
  - **Hinweis «Musterdaten»:** steht in jedem Reiter oben rechts (Klasse `auswertung_muster`); der frühere Hinweis über den Auswertungen ist seit Runde 93 entfernt (Entscheid 407).
  - **Aktiver Reiter (bleibt so, Entscheid 407):** Plum-Unterstreichung aus dem Zustand «Current» der Klasse `auswertung_reiter`. Die Beschriftung ist bewusst in der Klasse `auswertung_reiter-text` weiss gesetzt, damit sie auf Manganese immer lesbar bleibt. **Linie links statt Unterstreichung (optional, offener Punkt 133):** Reiter-Link anklicken › States › «Current»: Borders › untere Kante Farbe «transparent», linke Kante 3 px, Stil durchgezogen, Farbe «Plum Perfect»; Backgrounds › Farbe «White Linie»; zurück auf «None». Dann in der Grundklasse `auswertung_reiter` am Desktop die Aussenabstände links/rechts auf 0, die Innenabstände links/rechts auf 24 px und «Align self» auf «Stretch» stellen (Linie und Fläche über die ganze Spaltenbreite). Ab Tablet (991 px) im Zustand «Current» wieder untere Kante Plum, linke Kante 0. Veröffentlichen und prüfen.
- **Seit Runde 92: Header gemeinsam einblenden auf allen Seiten.** Kopf-Skript «ROWAPAKopf» 1.1.0 (site-weit, über die Schnittstelle registriert, Quelle `exports/stufe4/runde92/code/kopf.js`): Inhalt des Headers und Wellenmeer blenden gemeinsam in 1,2 s ein; beim Logo-Band der Startseite nur die Logos, die dunkle Fläche steht. Ohne Wellenmeer oder bei «Bewegung reduzieren» steht der Header sofort da; spätestens nach 3,5 s erscheint er in jedem Fall. Keine Pflege nötig.

### 2.48 Startseite: Insights als Magazin und «Nach oben» auf den Themenlinien (seit Runde 92)

- **Insights als Magazin:** Abschnitt `section_insights`. Raster `insights_reihe is-magazin` (Desktop drei Spalten, Tablet zwei, Handy eine). Jeder Beitrag ist ein `reihe_item` mit einer Instanz der Komponente «Card Insight».
  - **Grosser Beitrag (erster):** Klasse `reihe_item is-gross` (zwei Spalten, zwei Zeilen) und an der Karte die Variante «Insights Magazin · gross» (Foto, dunkle Karte).
  - **Übrige Beiträge:** Variante «Insights Magazin · klein» (ohne Foto, mit Kurztext; auf dem Handy ohne Kurztext).
  - **Anzahl je Gerät:** Beiträge 4 und 5 haben `reihe_item is-ohne-handy` (auf dem Handy aus), Beitrag 6 `reihe_item is-ohne-tablet` (auf Tablet und Handy aus). So bleiben Handy drei und Tablet fünf Beiträge, ohne einzelne Karte am Ende.
  - **Beitrag tauschen:** Karte anklicken › Eigenschaften rechts (Titel, Auszug, Tag, Meta, Bild, Link). Anderen Beitrag gross zeigen: Variante und Kombi-Klasse zwischen zwei Beiträgen tauschen.
  - Button «Alle Inhalte» oben rechts, Links zu Live-Webinaren und ROWAPA TV darunter (`link-teaser-list is-magazin`).
- **«Nach oben» auf den Themenlinien:** Element `section_themen` › Einstellungen › Attribute › `data-nachoben` = `mitlaufen`. Der Knopf bleibt auf der Bühne unten rechts stehen; Attribut löschen = auf der Bühne ausgeblendet wie früher.

### 2.49 Was heisst «online»? (Runde 93)

- **Testadresse:** Alles, was Claude veröffentlicht, erscheint zuerst nur unter `rowapa-website-2027-automation.webflow.io`. Die Seiten dort sind die echten Seiten der neuen Website (keine Entwürfe), aber nicht öffentlich beworben.
- **Mit der Domain:** Wird die Domain in Webflow verbunden (Site settings › Publishing › Custom domains) und veröffentlicht, geht die **ganze** Site genau so online, wie sie auf der Testadresse steht. Einzelne Seiten lassen sich nicht separat online stellen.
- **Vorher nötig:** fehlende Seiten (Kontakt, Impressum, Datenschutz u. a.), eigene 404-Seite, Weiterleitungen der alten Adressen, CMS-Einträge freigeben, Hilfsseiten offline. Stand und Checkliste: `exports/stufe4/runde93/LIESMICH.md`. Veröffentlichen auf der Domain nur mit Freigabe von ROWAPA.

### 2.50 Aufräumen: unbenutzte Klassen entfernen («Clean up», seit Runde 94)

1. Designer öffnen (beliebige Seite).
2. Links in der Werkzeugleiste «Style selectors» öffnen (drei Tropfen; Tastenkürzel **G**; in älteren Fassungen «Style Manager»).
3. Oben rechts im Panel auf das **Besen-Symbol** («Clean up») klicken. Webflow listet alle Klassen, die an keinem Element hängen, und entfernt sie nach «Delete» auf einmal. **Vorher die Liste prüfen:** Stehen dort `nach-oben is-sichtbar`, `card is-verbunden`, `card is-angetippt`, `orbit_tile is-aktiv`, `step_item is-aktiv` oder Utility-Klassen wie `hide-tablet`, «Cancel» klicken und Claude melden (dann fehlt etwas in der Ablage).
4. Erscheinen danach noch unbenutzte Klassen, den Besen ein zweites Mal klicken.
5. Danach Claude Bescheid geben bzw. selbst prüfen: Knopf «Nach oben», aktive Phase im Vorgehen und Themenlinien sehen aus wie vorher; dann veröffentlichen.

**Wichtig:** Einige Klassen setzt das Grafik-Skript erst auf der veröffentlichten Seite (z. B. `nach-oben is-sichtbar`). Damit «Clean up» sie nicht löscht, liegen sie in der unsichtbaren «Ablage Skript-Zustände (nicht löschen)» auf der Seite «Styleguide (intern)». Diese Seite und die Ablage nie löschen. Wer eine neue Skript-Klasse anlegt, ergänzt dort ein Element mit Grund- und Kombi-Klasse. Sicherung der Werte: `exports/stufe4/runde94/skript-klassen-sicherung.json`.

### 2.51 Abschnitts-Linien (seit Runde 94)

Die Linie zwischen zwei grauen Abschnitten (Performance-Analyse unter «Zahlen brauchen Erfahrung.», Startseite unter «Im Blickpunkt») ist 1 px mit der Farbvariable «Manganese Linie Abschnitt» (Manganese 28 %). Kräftiger oder feiner: nur die Variable ändern (Variables › Farben), dann ändern sich beide Linien gleich. Feine Linien in Karten und Listen nutzen weiterhin «Manganese Linie».
