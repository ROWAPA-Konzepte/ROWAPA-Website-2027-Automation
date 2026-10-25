# ROWAPA Website 2027 · Wiederherstellung (Pointer-Variante)

**Stand:** 25.10.2026 · **Enthält keine Zugangsdaten, Tokens oder Passwörter.** Dieses Dokument zeigt nur, *wo* etwas liegt und *wie* man die Arbeit wieder aufnimmt.

---

## 1. Wo liegt was?

| Was | Ort |
|---|---|
| Website (Quelle der Wahrheit) | Webflow, Workspace ROWAPA, Projekt **«ROWAPA Website 2027 Automation»**, Site-ID `6addf1532819c0aacc74a496` |
| Staging | `https://rowapa-website-2027-automation.webflow.io/home-v2` |
| Doku, Entscheide, Bilder | GitHub `ROWAPA-Konzepte/ROWAPA-Website-2027-Automation`, Branch `claude/friendly-einstein-92okuy`, [Pull Request #2](https://github.com/ROWAPA-Konzepte/ROWAPA-Website-2027-Automation/pull/2) |
| Projektregeln für Claude | `CLAUDE.md` (Rolle, CI, Arbeitsweise, Inhaltsregeln), `.claude/settings.json` (Tool-Freigaben) |
| Baseline (nur Referenz) | `https://rowapa-2027.webflow.io/` (Webflow-Site «ROWAPA 2027», `6ad52d817d06d44129cd8bc9`) und Repository `ROWAPA-Konzepte/rowapa-website` (Medien, Videos, Code der Baseline) |
| CI-Vorgaben | `Style Guide ROWAPA_2026-komprimiert.pdf`, `ROWAPA_Visual Guidelines_compressed.pdf` (im Repository) |
| Offizielle Logos | `exports/ci-logos/offiziell/` und Webflow-Assets › «01 Marke (CI)» |
| Webflow-IDs | `exports/backup/2026-10-25/webflow-ids.md` |
| Vorschau-Werkzeuge | `tools/vorschau/` (lokaler Chromium-Render aus Webflow-Daten) |

## 2. Dokumente in Lesereihenfolge

1. `CLAUDE.md`
2. `exports/01_cms_architektur.md`: Architektur, Collections, Templates, Entscheide
3. `exports/02_redirect_mapping.xlsx`: 166 Alt-URLs
4. `exports/03_stufe1_designsystem.md`: Design-System
5. `exports/04_redaktionsleitfaden.md`: verbindliche Inhaltsregeln
6. `exports/05_home_texttabelle.md`: Texte der Startseite
7. `exports/06_stufe2_startseite.md`: Startseite, Komponenten, Animationskonzept
8. `exports/backup/2026-10-25/`: dieses Backup (Handbuch, Konzept, Protokoll, Wiederherstellung)

## 3. Wiederaufnahme in einer neuen Claude-Sitzung

1. **Sitzung mit dem Repository** `ROWAPA-Konzepte/ROWAPA-Website-2027-Automation` starten. Nur dieses eine Repository, damit `.claude/settings.json` gelesen wird.
2. **Webflow-Connector** in claude.ai verbinden (Settings › Connectors › Webflow). Tool-Berechtigungen auf «Immer erlauben»; nur das Veröffentlichen bleibt auf «Genehmigung erforderlich».
3. Für Arbeiten am Canvas den **Webflow Designer** öffnen und die Webflow-MCP-Bridge-App starten (Designer › Apps).
4. **Startauftrag an Claude:** «Lies CLAUDE.md und exports/backup/2026-10-25/04_Wiederherstellung.md, prüfe den Stand in Webflow und berichte, bevor du weitermachst.»
5. Claude prüft den Ist-Stand in Webflow (Seiten, Komponenten, Styles) gegen `webflow-ids.md` und die Doku.
6. Weiterarbeiten nach der Roadmap (Konzeptpapier Kap. 10). Vor jedem Stufenwechsel holt Claude die Freigabe ein.

## 4. Szenarien

| Situation | Vorgehen |
|---|---|
| Änderung in Webflow ging schief | Webflow › Site settings › **Backups** › früheren Stand wiederherstellen (Webflow sichert automatisch) |
| Doku-Datei versehentlich geändert | im Repository über die Git-Historie bzw. den Pull Request zurückholen |
| Claude-Sitzung beendet | neue Sitzung nach Kap. 3. Notizen ausserhalb des Repositorys gehen verloren; alles Wichtige ist hier abgelegt |
| Designer-Verbindung fehlt | Designer öffnen, MCP-Bridge-App starten; Datenänderungen gehen auch ohne Designer |
| Medien fehlen | Quelle: Repository `rowapa-website` (Ordner `assets/`, `vorschau/bilder`) und Webflow-Assets der Baseline |
| Logo-Frage | `exports/ci-logos/LIESMICH.md` |

## 5. Technische Merkposten

- **Nur ein Custom Code:** das Skript «ROWAPAHoverVideo» (site-weit, Footer, Version 1.0.0), registriert über die Webflow-Schnittstelle.
- **Interaction «Logo-Laufband»:** IX3, Endlosschleife, Pause bei Mausberührung, ruht bei «Bewegung reduzieren».
- **Theme-System:** Sammlung «Theme» mit Modi Hell (Basis), Soft, Sea, Kontrast, Tiefsee; gesetzt über die Klassen `theme-*`. Andere Klassen dürfen keinen Theme-Modus setzen (Fehler bei `padding-global` am 25.10. behoben).
- **Uploads lokaler Dateien:** über die Asset-Schnittstelle (Datei-Eintrag anlegen, danach Upload per signiertem Formular). Bilder mit öffentlicher Adresse auch per «Upload by URL».
- **Grosse Breakpoints** 1280 / 1440 / 1920 sind im Designer aktiv.
- **Seiten:** `Home v2 (Prototyp)` ist veröffentlicht (Staging). `Styleguide (intern)` bleibt Entwurf. Die leere Seite `Home` wird beim Go-live durch die neue Startseite ersetzt.

## 6. Bewusst nicht im Backup

- Zugangsdaten zu Webflow, GitHub oder claude.ai.
- Sitzungs-Kennungen der Webflow-Schnittstelle.
- Das Webflow-Projekt selbst. Es liegt bei Webflow und wird dort automatisch gesichert.
