# ROWAPA Website 2027 · Start hier (Wiederherstellung)

**Laufend gepflegt** · zuletzt aktualisiert 25.10.2026 · **Enthält keine Zugangsdaten, Tokens oder Passwörter.** Dieses Dokument zeigt nur, *wo* etwas liegt und *wie* man die Arbeit wieder aufnimmt.

Es ersetzt zusammen mit `00_entscheide.md` und `07_benutzerhandbuch.md` die früheren Backup-Runden (Entscheid ROWAPA vom 25.10.2026). Die Dateien werden mit jedem Stufen-Commit nachgeführt. Frühere Stände liegen in der Git-Historie.

---

## 1. Wo liegt was?

| Was | Ort |
|---|---|
| Website (Quelle der Wahrheit) | Webflow, Workspace ROWAPA, Projekt **«ROWAPA Website 2027 Automation»**, Site-ID `6addf1532819c0aacc74a496` |
| Staging | `https://rowapa-website-2027-automation.webflow.io/home-v2` |
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

## 3. Stand und nächste Schritte

| Stufe | Inhalt | Status |
|---|---|---|
| Phase 1+2 | Analyse, CMS-Architektur, URL-Plan | erledigt |
| Stufe 1 | Design-System | freigegeben |
| Stufe 2 | Startseite `/home-v2` | Feedback-Runde 6 auf Staging; Look-&-Feel-Varianten A/B/C unter `/home-look`, `/home-look-b`, `/home-look-c` warten auf Auswahl, danach Freigabe |
| Stufe 3 | CMS-Collections, Draft-Einträge (Logos, Partner, Team, Referenzen, Blog) | nach Freigabe Stufe 2 |
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

- **Nur ein Custom Code:** das Skript «ROWAPAGrafik» (site-weit, Footer, Version 1.4.1), Quelle `tools/grafik`, geladen von jsDelivr mit fester Commit-Kennung und SRI-Prüfsumme, registriert über die Webflow-Schnittstelle. Enthält Punktemeer, Punktfiguren, Zähler, Treppe, Kugel mit Kacheln (Orbit), Reihen (Insights, Team), Mauszeiger, Menü-Vorschau, Variantenumschalter und Hover-Videos. Frühere Fassungen (1.0.0, 1.1.0) bleiben registriert; das alte «ROWAPAHoverVideo» ist nicht mehr eingebunden.
- **Neue Skript-Fassung:** `npm run build` in `tools/grafik`, committen, pushen, neue Commit-Kennung und `dist/sri.txt` als neue Version registrieren und anwenden, Staging veröffentlichen.
- **Kombiklassen nie über HTML-Import anlegen:** Ein Selektor wie `.var_wahl.is-aktiv` im HTML-Import wurde als globale Klasse `.is-aktiv` veröffentlicht. Kombiklassen nur über das Style-Panel bzw. die Style-Schnittstelle mit Elternklasse anlegen.
- **Entwurfsseiten Look B und C:** `/home-look-b`, `/home-look-c`; Gestaltung nur über Test-CSS im Seitenkopf (Kopie in `exports/look-entwuerfe/`). Nicht für den Live-Betrieb gedacht.
- **Entwurfsseite Look & Feel:** `/home-look` (Kopie von `/home-v2`), Kombiklassen `is-display`, `is-band`, `is-raster`, Klasse `ribbon_band`. Nach dem Entscheid übernehmen und Seite löschen (mit Freigabe).
- **Variantenseite:** `/varianten` (Seite «Varianten Runde 4 (intern)»), Klassen mit Vorsatz `var_`. Nach dem Entscheid löschen (mit Freigabe).
- **Interaction «Hero-Titelzeilen»:** IX3, Komponente Section Hero Home (Variante A), 15-s-Schleife; bei «Bewegung reduzieren» Ruhezustand (Zeile 3 unterstrichen).
- **Grenzen der Schnittstelle:** Lightbox-Medien und Slider-Einstellungen (Animation, Auto-play) lassen sich nur im Designer setzen; das Attribut `crossorigin` ist in Webflow nicht erlaubt.
- **Startbildschirm:** Hülle `startscreen_wrapper` um Hero und Logo-Band; Mindesthöhe = Fenster minus Navigation, damit das Logo-Band immer mit der Fensterunterkante abschliesst.
- **Grafik-Vorlagen neu erzeugen:** `tools/grafik/figuren/` (Themenfiguren `render.js`, Treppe `treppe.js`, Kugel `kugel.mjs`, Symbole `icons/`), Anleitung in `figuren/LIESMICH.md`.
- **Interaction «Logo-Laufband»:** IX3, Endlosschleife, Pause bei Mausberührung, ruht bei «Bewegung reduzieren». Live geprüft am 25.10.2026.
- **Theme-System:** Sammlung «Theme» mit Modi Hell (Basis), Soft, Sea, Kontrast, Tiefsee; gesetzt über die Klassen `theme-*`. Andere Klassen dürfen keinen Theme-Modus setzen (Fehler bei `padding-global` am 25.10. behoben).
- **Uploads lokaler Dateien:** über die Asset-Schnittstelle (Datei-Eintrag anlegen, danach Upload per signiertem Formular). Bilder mit öffentlicher Adresse auch per «Upload by URL».
- **Grosse Breakpoints** 1280 / 1440 / 1920 sind im Designer aktiv.
- **Seiten:** `Home v2 (Prototyp)` ist veröffentlicht (Staging). `Styleguide (intern)` bleibt Entwurf. Die leere Seite `Home` wird beim Go-live durch die neue Startseite ersetzt.
- **Schriften in der Cloud-Vorschau:** Die Schriftdateien liegen auf `webflow-files-prod.global.ssl.fastly.net`. Ist dieser Host in der Umgebung gesperrt, zeigen lokale Screenshots eine Ersatzschrift; die Werkzeuge in `tools/vorschau/` laden die TASA-Dateien dann lokal.

## 7. Bewusst nicht enthalten

- Zugangsdaten zu Webflow, GitHub oder claude.ai.
- Sitzungs-Kennungen der Webflow-Schnittstelle.
- Das Webflow-Projekt selbst. Es liegt bei Webflow und wird dort automatisch gesichert.
