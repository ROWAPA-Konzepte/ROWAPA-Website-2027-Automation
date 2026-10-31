# ROWAPA Website 2027 · Start hier (Wiederherstellung)

**Laufend gepflegt** · zuletzt aktualisiert 28.10.2026 · **Enthält keine Zugangsdaten, Tokens oder Passwörter.** Dieses Dokument zeigt nur, *wo* etwas liegt und *wie* man die Arbeit wieder aufnimmt.

Es ersetzt zusammen mit `00_entscheide.md` und `07_benutzerhandbuch.md` die früheren Backup-Runden (Entscheid ROWAPA vom 25.10.2026). Die Dateien werden mit jedem Stufen-Commit nachgeführt. Frühere Stände liegen in der Git-Historie.

---

## 1. Wo liegt was?

| Was | Ort |
|---|---|
| Website (Quelle der Wahrheit) | Webflow, Workspace ROWAPA, Projekt **«ROWAPA Website 2027 Automation»**, Site-ID `6addf1532819c0aacc74a496` |
| Staging | `https://rowapa-website-2027-automation.webflow.io/` |
| Doku, Entscheide, Bilder | GitHub `ROWAPA-Konzepte/ROWAPA-Website-2027-Automation` (öffentlich), Branch `claude/friendly-einstein-92okuy`, [Pull Request #2](https://github.com/ROWAPA-Konzepte/ROWAPA-Website-2027-Automation/pull/2) |
| Projektregeln für Claude | `CLAUDE.md` (Rolle, CI, Arbeitsweise, Inhaltsregeln), `.claude/settings.json` (Tool-Freigaben) |
| Baseline (nur Referenz) | `https://rowapa-2027.webflow.io/` (Webflow-Site «ROWAPA 2027», `6ad52d817d06d44129cd8bc9`) und Repository `ROWAPA-Konzepte/rowapa-website` (Medien, Videos, Code der Baseline) |
| CI-Vorgaben | `Style Guide ROWAPA_2026-komprimiert.pdf`, `ROWAPA_Visual Guidelines_compressed.pdf` (im Repository) |
| Offizielle Logos | `exports/ci-logos/offiziell/` und Webflow-Assets › «01 Marke (CI)» |
| Webflow-IDs | `exports/00_webflow-ids.md` |
| Vorschau-Werkzeuge | `tools/vorschau/` (lokaler Chromium-Render aus Webflow-Daten) |
| PDF im CI (nur auf Wunsch) | `tools/backup-pdf/` |

## 2. Dokumente in Lesereihenfolge

1. `CLAUDE.md`
2. `exports/00_start_hier.md`: dieses Dokument
3. `exports/00_entscheide.md`: alle Entscheide, fortlaufend, mit offenen Punkten
4. `exports/01_cms_architektur.md`: Architektur, Collections, Templates
5. `exports/02_redirect_mapping.xlsx`: 166 Alt-URLs
6. `exports/03_stufe1_designsystem.md`: Design-System
7. `exports/04_redaktionsleitfaden.md`: verbindliche Inhaltsregeln
8. `exports/05_home_texttabelle.md`: Texte der Startseite
9. `exports/06_stufe2_startseite.md`: Startseite, Komponenten, Animationskonzept
10. `exports/07_benutzerhandbuch.md`: Pflege in Webflow für das ROWAPA-Team
11. `exports/08_startseite_desktop_handy.md`: Startseite je Section Desktop → Handy (Vorschlag, Entscheid ROWAPA offen)

## 3. Stand und nächste Schritte

| Stufe | Inhalt | Status |
|---|---|---|
| Phase 1+2 | Analyse, CMS-Architektur, URL-Plan | erledigt |
| Stufe 1 | Design-System | freigegeben |
| Stufe 2 | Startseite `/` (Seite «Home», seit Runde 45; früher `/home-v3-entwurf`, `/home-v2`, `/home-v3`) | finaler Entwurf Kombi G2 nativ gebaut (Runde 13), in acht Formaten geprüft; Runde 14: «Unsere Erfolge» als ein Block je Bildschirm; Runde 15: Header-Zeilen einzeilig, rote Linien 1 px, Schriftmuster geprüft; Runde 16: Megamenü repariert und in vier Breiten geprüft; Runde 17: Designer-Ansicht (Slider, Header) korrigiert, alle Menüs mit Vorschau, H2 Handy kleiner, Format-Vorschau mit Umschaltern (private Seite https://claude.ai/artifact/WpvkhkkFWftgsXgK9fVoDw, Werkzeug `tools/format-vorschau/`); Runde 18: Format-Vorschlag, gestraffte Texte und Korrekturen nativ auf `/home-v2` umgesetzt, live in 8 Formaten gemessen (1920–768 px: 12 von 12 Sections in einem Bildschirm, Handy 10 von 12); Runde 19: `/home-v3` gebaut (neue Reihenfolge, «Warum ROWAPA» im Antrieb), v2 «Im Blickpunkt» auf dem Handy niedriger; Runde 20: Themenlinien als Vollbild-Szene wie die Referenz Tresmares neu gebaut (Scroll-gekoppelt, Einrasten, Plum-Form; `/home-v3`, Vergleich diagonal mit `?uebergang=diagonal`); Runde 21: Plum-Form nur im Wechsel (zerfällt in Ruhe), Erklärtexte gross in zwei Spalten, Einrasten schneller, Teamfotos auf v3 und Insights-Links unter den Karten repariert; Runde 22: Einrasten in Scrollrichtung (kein Rücklauf mehr), Figur tritt in Ruhe zurück, Texte eingezogen und rechts erweitert, Entwurf C diagonal; Runde 23: Variante diagonal live (`?anordnung=diagonal`), Bilder «Meine Entwicklung» grösser, Vorschläge zu Farbfolge und Titel als Entwurf; Runde 24: Farbfolge auf v3 umgesetzt (Antrieb weiss, Erfolge hellblau, Lösungen grau), Titel «Lösungen für Unternehmen» über der Themenliste, Textanordnung A entschieden; Runde 25: Logo-Band dunkel mit weissen Logos, Insights-Links dezent, Titel «Digitale Lösungen für Ihren Alltag» (alles v3), Entwurf für ein ruhigeres ROWAPA Digital; Runde 26: ROWAPA Digital ruhiger auf v3 umgesetzt (ein Button und Textlink, ohne Kasten «Das Fundament», Karten nur mit Pfeil; Satz «Jede Lösung ist einzeln buchbar.» für die Übersichtsseite in Stufe 3 vorgemerkt); Runde 27: Übergang von unten entschieden, Themen-Texte vorläufig übernommen, Tendenz v3; Entwürfe für Header (ohne Kicker, Bewegung ruhiger), Fotorahmen, Abstände und drei Megamenü-Varianten (`stufe2-screens/runde27/`); Runde 28: auf v3 Header ohne Kicker mit einmaliger Unterstreichung und Plum-Linie, Logo-Band 60 s, Fotorahmen als Plum-Linie, Megamenü «Bühne» (Komponente «Navbar · Bühne») mit neuem Menü «Unsere Kunden»; Section-Abstände +10 % Desktop und 64 px Handy für alle Seiten (`stufe2-screens/runde28/`); Runde 29: Mauszeiger und Hover-Videos auf Laptops mit Touchscreen repariert (Grafik 1.10.1), Vorschlag für ruhigeres Einrasten mit dem Trackpad; Runde 30: Wisch-Einrasten zum Vergleichen (`?einrasten=wisch`) und Diagnose-Anzeige (`?diagnose`, Grafik 1.11.0), Einschätzung zu einem persönlichen Element in «Was uns antreibt»; Runde 31: Ursache für fehlenden Zeiger und Videos gefunden (Browser meldet keine Maus) und mit Grafik 1.11.1 behoben, Entwürfe A1/A2 «Persönliches Wort»; Runde 32: Porträt in Webflow, drei Entwürfe B/C/D für «Was uns antreibt» und «Warum ROWAPA» (`stufe2-screens/runde32/`); Runde 33: Wisch-Einrasten Standard (Grafik 1.12.0), Farbkonzept als Variante `/home-v3-farben` (`stufe2-screens/runde33/`); Runde 34: «Im Blickpunkt» auf der Variante fest in Snowbank wie die Insights, ohne Einblenden (`stufe2-screens/runde34/`); Runde 35: auf der Variante Linie unter «Im Blickpunkt» und Textlinks Manganese Black (neue Sammlung «Textlinks»), Einschätzung Plum-Form: weglassen empfohlen, nichts gebaut (`stufe2-screens/runde35/`); Runde 36: Farbkonzept mit Manganese-Textlinks als Standard (v3, Footer und Links aller Seiten), Schalter für die Plum-Form (Grafik 1.13.0, `?plumform=aus`), drei Varianten für «Was uns antreibt» nach dem Muster Tresmares (`/home-v3-antrieb-a`, `-b`, `-c`, `stufe2-screens/runde36/`); Runde 37: Variante A auf v3 (ohne Titel «Warum ROWAPA», Kacheln niedriger), Plum-Form aus, Treppe doppelt so schnell, Vergleichsseiten als Entwurf «ZU LÖSCHEN» (in Webflow endgültig löschen), veröffentlicht (`stufe2-screens/runde37/`); Runde 38: Vorgehen Handy entschieden (je Seite mitbauen, am Schluss Gerätedurchgang), Tabelle «Desktop → Handy» für die Startseite (`08_startseite_desktop_handy.md`, `stufe2-screens/runde38/`), vier Vergleichsseiten von ROWAPA gelöscht und ihre Klassen entfernt, Team-Buttons auf dem Handy repariert, mit der Kennzahl-Änderung von ROWAPA veröffentlicht; Runde 39: Netz im Punktemeer (Grafik 1.14.0, Schalter `data-netz`, Standard aus) und Entwurfsseite `/home-v3-entwurf` mit «Lösungen für Unternehmen» direkt unter dem Header, Farbfolge geprüft (`stufe2-screens/runde39/`); Runde 40: Netz Standard im Header aller Seiten (Grafik 1.15.0), Reihenfolge als Variante «Home v3 · Variante Lösungen oben» neben v3, Leistentitel selbst ausblendbar; Runde 41: Netz kräftiger (Grafik 1.16.0), «Was uns antreibt» auf der Variante gespiegelt, v2 entfällt (`stufe2-screens/runde41/`); Runde 42: Spiegelung bleibt, Variante ist Arbeitsstand, Figuren der Themen auf niedrigen Laptop-Fenstern kleiner, ab 1920 px unverändert (`stufe2-screens/runde42/`); Runde 43: die Variante ist die definitive Startseite («Startseite (definitiv)», `/home-v3-entwurf`), neuer Satz im Header auf zwei ausgeglichenen Zeilen (`stufe2-screens/runde43/`); Runde 44: Megamenü «Was wir tun» und Google-Beschreibung an den neuen Header-Satz angeglichen (`stufe2-screens/runde44/`); Runde 45: Startseite ist Home (`/`), 13 Entwurfsseiten geleert und offline, 128 ungenutzte Klassen und 3 Interaktionen entfernt, Handy-Fassung als Vorher-nachher-Entscheidungsseite (https://claude.ai/artifact/94Kw6Fk1UmcaodtJvJ3xTC, `stufe2-screens/runde45/`); Runde 46: Hüllen von ROWAPA gelöscht, alte Navbar, altes Hover-Video-Skript und 7 Bilder entfernt, Handy-Wahl eingegangen; Runde 47: Handy-Fassung gebaut (Button «Erstgespräch», Antrieb als Zeilen, Themen bildschirmfüllend mit Aufdecken von unten, Vorgehen-Karten grau mit Positionslinie, Digital-Texte in allen Grössen, Blickpunkt gekürzt, Insights kompakt mit Komponente «Card Insight», Kontakt als Zeilen, Footer-Newsletter mit Senden-Pfeil in allen Grössen, Grafik 1.17.0; `stufe2-screens/runde47/`); Runde 48: Buttons je Gruppe gleich gross, Digital-Kacheln gleich hoch, Plum-Nummer im Vorgehen läuft beim Wischen mit (Grafik 1.18.0); **freigegeben** (28.10.2026) |
| Stufe 3 | CMS-Collections, Draft-Einträge (Logos, Partner, Team, Referenzen, Blog) | läuft: Plan Premium, Sprache de-CH; 19 Collections, alle 37 Seiten-Einträge, 80 FAQ, Logos, Stimmen, Werkzeuge (Entscheide 320–337). Muster Themenlinien befüllt (`09_cms_texttabelle_themenlinien.md`); 9 Personen und 4 Blogbeiträge aus dem früheren Webflow-Projekt (341–344); 58 Blogbeiträge aus WordPress als Entwurf, total 62 (345, Prüfliste `10_cms_blogimport.md`); Vorlage «Themenlinie» im Designer gebaut und ans CMS gebunden (346–349). Entwürfe ganzer Unterseiten als Bild: Runde 49 (Header B/C, Kontakt), Runde 50 (Vertriebsperformance), Runde 51 bis 61 (Landingpage Performance-Analyse; **abgenommen** in der Fassung Runde 61 = Runde 58 mit Fremdsicht 15–30 Min. je Person, Effekte als Video Runde 60, aus den Bausteinen der Startseite; dazu vier Ideen für besondere Effekte anderer Seitenfamilien, Reiter «Ideen»; Ansicht https://claude.ai/artifact/6HsZc1zhigNCnBFpgeMxCk, Konzept `11_konzept_performance-analyse.md`, Entscheide 357–371; Vorlagen in `quellen/`). **Als Nächstes: Filter der Vorlage von Hand (Handbuch 2.46), Abnahme der Header-Typen und Entwurfsseiten (67, 85, 92, 94, 95, 101, 102); nächste Entwurfsseite: Themenlinie Vertriebsperformance mit Idee 1, übrige Seiten-Einträge aus v11, Team (57, 63), CSV-Export** |
| Stufe 4 | Templates und Unikat-Seiten | danach |
| Go-live | Domain, Weiterleitungen, Favicon, SEO | zum Schluss, nur mit Freigabe |

## 4. Wiederaufnahme in einer neuen Claude-Sitzung

1. **Sitzung mit dem Repository** `ROWAPA-Konzepte/ROWAPA-Website-2027-Automation` starten. Nur dieses eine Repository, damit `.claude/settings.json` gelesen wird.
2. **Webflow-Connector** in claude.ai verbinden (Settings › Connectors › Webflow). Tool-Berechtigungen auf «Immer erlauben»; nur das Veröffentlichen bleibt auf «Genehmigung erforderlich».
3. **Netzwerk der Cloud-Umgebung:** Webflow-Adressen sind freigegeben (seit 25.10.2026), damit Claude die Staging-Seite live prüfen kann.
4. Für Arbeiten am Canvas den **Webflow Designer** öffnen und die Webflow-MCP-Bridge-App starten (Designer › Apps).
5. **Startauftrag an Claude:** «Lies CLAUDE.md und exports/00_start_hier.md, prüfe den Stand in Webflow und berichte, bevor du weitermachst.»
6. Claude prüft den Ist-Stand in Webflow (Seiten, Komponenten, Styles) gegen `00_webflow-ids.md` und die Doku.
7. Weiterarbeiten nach Kap. 3. Vor jedem Stufenwechsel holt Claude die Freigabe ein.

## 5. Szenarien

| Situation | Vorgehen |
|---|---|
| Änderung in Webflow ging schief | Webflow › Site settings › **Backups** › früheren Stand wiederherstellen (Webflow sichert automatisch) |
| CMS-Inhalte verloren (ab Stufe 3) | CSV-Export der Collections im Repository (`exports/cms/`, je Stufenende) und in Webflow wieder importieren |
| Doku-Datei versehentlich geändert | im Repository über die Git-Historie bzw. den Pull Request zurückholen |
| Claude-Sitzung beendet | neue Sitzung nach Kap. 4. Notizen ausserhalb des Repositorys gehen verloren; alles Wichtige ist hier abgelegt |
| Designer-Verbindung fehlt | Designer öffnen, MCP-Bridge-App starten; Datenänderungen gehen auch ohne Designer |
| Medien fehlen | Quelle: Repository `rowapa-website` (Ordner `assets/`, `vorschau/bilder`) und Webflow-Assets der Baseline |
| Logo-Frage | `exports/ci-logos/LIESMICH.md` |

## 6. Technische Merkposten

- **Nur ein Custom Code:** das Skript «ROWAPAGrafik» (site-weit, Footer, Version 1.16.0, bündelt die Bibliothek Lenis 1.3.26 für weiches Scrollen), Quelle `tools/grafik`, geladen von jsDelivr mit fester Commit-Kennung und SRI-Prüfsumme, registriert über die Webflow-Schnittstelle. Enthält Punktemeer, Punktfiguren, Zähler, Treppe, Kugel mit Kacheln (Orbit, mit Klick auf die Karte), Insights-Reihe (ohne Scrollbalken), Knopf «Nach oben», Mauszeiger, Menü-Vorschau, Variantenumschalter, Hover-Videos und seit 1.6.0 die Themenlinien-Bühne (1.6.1: Leiste auf Tablet und Handy markiert am Section-Anfang Thema 1) (Modul `themen`). Frühere Fassungen (1.0.0, 1.1.0) bleiben registriert; das alte «ROWAPAHoverVideo» ist nicht mehr eingebunden.
- **Neue Skript-Fassung:** `npm run build` in `tools/grafik`, committen, pushen, neue Commit-Kennung und `dist/sri.txt` als neue Version registrieren und anwenden, Staging veröffentlichen.
- **Kombiklassen nie über HTML-Import anlegen:** Ein Selektor wie `.var_wahl.is-aktiv` im HTML-Import wurde als globale Klasse `.is-aktiv` veröffentlicht. Kombiklassen nur über das Style-Panel bzw. die Style-Schnittstelle mit Elternklasse anlegen.
- **Startseite nativ (Runde 13):** `/home-v2` enthält den finalen Entwurf Kombi G2 ohne Entwurfs-Skripte: Komponenten-Varianten (Card Feature «Zeile · Lösungen», «Weiss · Symbol (Digital)»; Card Teaser «Zeile · …»; Ribbon «Unten links»), drei Interactions (Titel-Strich, Team-Kacheln, CAS-Farbfläche), Knopf «Nach oben» in der Footer-Komponente.
- **Master-Entwurf Kombi G2:** `/kombi-g2`; Kopie von `/home-v2` mit Aufsatz `exports/layout-entwuerfe/kombi2.css` und `kombi2.js` (jsDelivr, fester Commit). Nach der Freigabe löschen (mit Freigabe).
- **Kombi-Entwürfe G/H:** `/kombi-g`, `/kombi-h`; Kopien von `/home-v2` mit Aufsatz `exports/layout-entwuerfe/kombi.css` und `kombi.js` (jsDelivr, fester Commit). Nur intern, nach dem Entscheid löschen (mit Freigabe).
- **Layout-Entwürfe D/E/F:** `/layout-d`, `/layout-e`, `/layout-f`; Seitencode blendet den Hauptbereich aus und lädt den Entwurf aus `exports/layout-entwuerfe/` (jsDelivr, fester Commit). Nur intern, nach dem Entscheid löschen (mit Freigabe).
- **Entwurfsseiten Look B und C:** `/home-look-b`, `/home-look-c`; Gestaltung nur über Test-CSS im Seitenkopf (Kopie in `exports/look-entwuerfe/`). Nicht für den Live-Betrieb gedacht.
- **Entwurfsseite Look & Feel:** `/home-look` (Kopie von `/home-v2`), Kombiklassen `is-display`, `is-band`, `is-raster`, Klasse `ribbon_band`. Nach dem Entscheid übernehmen und Seite löschen (mit Freigabe).
- **Variantenseite:** `/varianten` (Seite «Varianten Runde 4 (intern)»), Klassen mit Vorsatz `var_`. Nach dem Entscheid löschen (mit Freigabe).
- **Interaction «Hero-Titelzeilen»:** IX3, Komponente Section Hero Home (Variante A), 15-s-Schleife; bei «Bewegung reduzieren» Ruhezustand (Zeile 3 unterstrichen). Seit Runde 28 für v3 «Hero-Titelzeilen einmal» (nur Variante «A · Signatur ruhig», einmal beim Laden, Ende mit Plum-Linie).
- **Zwei Navbars (seit Runde 28):** «Navbar · Bühne» nur auf `/home-v3`, alle übrigen Seiten die bisherige «Navbar». Logo-Band ebenso mit zwei Interaktionen (Scope nach Seiten). Beim Aufräumen zusammenführen (offene Punkte 17 und 32).
- **Variablen-Modi und `clamp()`:** Die Webflow-Schnittstelle nimmt in Grössen-Variablen keine `clamp()`-Werte an (Runde 28). Abstände mit `clamp()` darum direkt in den Klassen setzen.
- **Grenzen der Schnittstelle:** Lightbox-Medien und Slider-Einstellungen (Animation, Auto-play) lassen sich nur im Designer setzen; das Attribut `crossorigin` ist in Webflow nicht erlaubt.
- **Darstellung je Format (Runde 18):** Grössen an die Fensterhöhe gekoppelt (`svh` in `clamp`), Breakpoints 992 (Basis), 1280, 1440, 1920, 991, 767, 479. Übersicht der neuen Zusatzklassen und der ausgeblendeten Blöcke: Benutzerhandbuch 2.32, IDs: `00_webflow-ids.md` (RUNDE18). Prüfen mit `tools/format-vorschau/gen.js` (`Z=heute-heute` misst die Staging-Seite, wie sie ist).
- **Themenlinien (Runde 20, `/home-v3`):** native Section `section_themen` (Klassen `themen_*`), Szene nach den Messwerten der Referenz. Das Skript (Modul `themen`) setzt ab 992 px die Bühne (sticky, je Thema eine Fensterhöhe), Vorhang, Abdunklung, Verschiebung, Titel-Deckkraft, die Plum-Form (SVG, `data-form`; seit 1.8.0 nur im Wechsel, zerfällt in Ruhe), die Deckkraft der Figur (seit 1.9.0, `data-figur-ruhe`) und `is-aktiv`; Einrasten seit 1.9.0 in Scrollrichtung; weiches Scrollen und Einrasten mit Lenis nur auf Seiten mit dieser Section; Navigation und «Nach oben» sind währenddessen ausgeblendet. Attribute `data-uebergang` (`unten`|`diagonal`, Adresse `?uebergang=` hat Vorrang), `data-schritt`. Pflege: Benutzerhandbuch 2.33. Figuren gross neu erzeugen: `tools/grafik/figuren/LIESMICH.md`.
- **Treppe (Unser Vorgehen):** Das Bild nicht per Flexbox ausrichten (das Skript setzt die Leinwand sonst neben das Bild); rechtsbündig mit Rand links «auto».
- **Startbildschirm:** Hülle `startscreen_wrapper` um Hero und Logo-Band; Mindesthöhe = Fenster minus Navigation, damit das Logo-Band immer mit der Fensterunterkante abschliesst.
- **Grafik-Vorlagen neu erzeugen:** `tools/grafik/figuren/` (Themenfiguren `render.js`, Treppe `treppe.js`, Kugel `kugel.mjs`, Symbole `icons/`), Anleitung in `figuren/LIESMICH.md`.
- **Interaction «Logo-Laufband»:** IX3, Endlosschleife, Pause bei Mausberührung, ruht bei «Bewegung reduzieren». Live geprüft am 25.10.2026. Seit Runde 28 alle Seiten ausser v3 (45 s); v3 hat «Logo-Laufband ruhig (v3)» (60 s).
- **Theme-System:** Sammlung «Theme» mit Modi Hell (Basis), Soft, Sea, Kontrast, Tiefsee; gesetzt über die Klassen `theme-*`. Andere Klassen dürfen keinen Theme-Modus setzen (Fehler bei `padding-global` am 25.10. behoben).
- **Uploads lokaler Dateien:** über die Asset-Schnittstelle (Datei-Eintrag anlegen, danach Upload per signiertem Formular). Bilder mit öffentlicher Adresse auch per «Upload by URL».
- **Grosse Breakpoints** 1280 / 1440 / 1920 sind im Designer aktiv. Die Startseite nutzt heute 1440 und 1920; der Bereich 992–1439 px ist die Basis (Desktop) und wurde in Runde 13 eigens geprüft (1024, 1280, 1366 px).
- **Seiten:** Die Startseite ist die Seite «Home» unter `/` (seit Runde 45). `Styleguide (intern)` bleibt Entwurf. Die 13 Seiten «ZU LÖSCHEN · …» sind leer und offline; ROWAPA löscht sie von Hand.
- **Schriften in der Cloud-Vorschau:** Die Schriftdateien liegen auf `webflow-files-prod.global.ssl.fastly.net`. Ist dieser Host in der Umgebung gesperrt, zeigen lokale Screenshots eine Ersatzschrift; die Werkzeuge in `tools/vorschau/` laden die TASA-Dateien dann lokal.

## 7. Bewusst nicht enthalten

- Zugangsdaten zu Webflow, GitHub oder claude.ai.
- Sitzungs-Kennungen der Webflow-Schnittstelle.
- Das Webflow-Projekt selbst. Es liegt bei Webflow und wird dort automatisch gesichert.
