# ROWAPA Website 2027 · Entscheide

**Laufend gepflegt** · Beginn 25.10.2026 · Arbeitssitzungen mit Claude (Claude Code, Cloud-Sitzung)
**Teilnehmende:** ROWAPA (Auftraggeber), Claude (Umsetzung in Webflow und Dokumentation)
**Lesart:** chronologisch; je Eintrag Anliegen → Entscheid → Ergebnis. Neue Einträge kommen unten dazu, die Nummern laufen weiter. Commits verweisen auf das Repository `ROWAPA-Konzepte/ROWAPA-Website-2027-Automation`.

---

## 1. Phase 1 und 2: Analyse und Architektur

| # | Anliegen | Entscheid / Ergebnis | Nachweis |
|---|---|---|---|
| 1 | CMS-Architektur, Master-Templates und Komponenten-Konzept für 68 Seiten | Konzept erstellt (Collections, Feld-Schemas, Templates, Bau-Rezepte) | `01_cms_architektur.md`, Commit 140c5be |
| 2 | Baseline rowapa-2027.webflow.io sichten | Live-Sichtung mit Screenshots, Erkenntnisse übernommen (nur lesend) | Commit 6f14a45 |
| 3 | URL-Plan für 166 Alt-URLs | Redirect-Mapping erstellt | `02_redirect_mapping.xlsx`, Commit bb1e46b |

## 2. Stufe 1: Design-System

| # | Anliegen | Entscheid / Ergebnis | Nachweis |
|---|---|---|---|
| 4 | Design-System in Webflow | Variablen, 5 Themes, Klassen, Komponenten, Styleguide-Seite | `03_stufe1_designsystem.md`, Commit 46bc128 |
| 5 | Nr. 155 der Alt-URLs | **155 entfällt** (gemeint war 155, nicht 156) | Commit 81da083 |
| 6 | Ständige Freigaben | Claude führt Tool-Aufrufe ohne Rückfrage aus; Halt nur am Stufenende, vor dem Veröffentlichen und vor dem Löschen | `CLAUDE.md`, `.claude/settings.json` |
| 7 | Feedback Stufe 1 | «Grundsätzlich passt das so» | – |
| 8 | Farbpalette erweiterbar? | Ja, über Variablen; die CI-Palette bleibt die Basis | – |
| 9 | Footer-Wortmarke | **Variante B**, randlos über die ganze Breite, **12 %** Deckkraft (als Variable) | Commit 7144173 |

## 3. Stufe 2: Startseite, erste Fassung

| # | Anliegen | Entscheid / Ergebnis |
|---|---|---|
| 10 | Wo bauen, wie Varianten vergleichen? | Direkt in Webflow; Varianten als umschaltbare Komponenten-Varianten |
| 11 | Verständlichkeit der Inhalte | Jede Section wird geprüft: Was, für wen, Nutzen, nächster Schritt. Werte **klar · souverän · inspirierend** |
| 12 | Texte und Anrede | verbesserte Texte direkt einbauen plus Texttabelle; **Sie** für Unternehmen, **Du** nur bei «Meine Entwicklung»; Redaktionsleitfaden verbindlich |
| 13 | ROWAPA Digital: Fakten | Alle Finanzunternehmen nutzen die Werkzeuge, eingeführt durch Vertrieb oder HR, nutzbar bis zur einzelnen Person (Logbuch auf Stufe Berater); einzeln buchbar; mit KI; alle 5 bis Ende Jahr verfügbar (heute schon als verfügbar nennen); Demo zu allen |
| 14 | Animationen | einige behalten (Punktemeer, Punkte-Grafiken), aber nicht verspielt und nicht ablenkend |
| 15 | Ergebnis | `/home-v2` mit 13 Sections, Hero-Varianten A/B, Texttabelle, Animationskonzept (Commit 5e45c0c) |

## 4. Feedback-Runde 2

| # | Feedback | Entscheid | Umsetzung |
|---|---|---|---|
| 16 | Freigabe-Meldungen der Webflow-Tools | Ursache sind die Tool-Berechtigungen des claude.ai-Connectors | ROWAPA stellt unter claude.ai › Connectors › Webflow auf «Immer erlauben» |
| 17 | Hero ohne Call to Action | einverstanden | Buttons entfernt, Scroll-Hinweis |
| 18 | «Organisationen» | ersetzen durch «Unternehmen» | überall ersetzt, Regel im Leitfaden |
| 19 | Kleiner Titel und Text im Hero | Kompromiss: drei Begriffe + Originaltext | umgesetzt |
| 20 | Logos als Laufband | ja | native Interaction, Pause bei Mausberührung |
| 21 | Übertitel, Titel, Beschreibung | Übertitel bleiben, mit **rotem Strich**; Beschreibung nur wo nötig | umgesetzt |
| 22 | Logo bei ROWAPA Digital schlecht sichtbar | Signet für dunklen Grund | Snowbank-Signet |
| 23 | Partnerlogos im feinen Kasten | ja | Linienraster |
| 24 | Video-Vorschau der Wege-Karten | ja, nur beim Darüberfahren | Hover-Video mit kleinem Skript |
| 25 | Punktemeer wiederholen | im Footer | hinter der Wortmarke |
| 26 | Farbübergänge zwischen Sections | sauberer Schnitt | – |
| 27 | Hero-Variante | **A** klar besser | A gesetzt, B als Reserve |
| 28 | Weglassen-Liste der Animationen | einverstanden | – |
| 29 | Werkzeugkarten | als Variante bauen | Section Digital mit «Karten» und «Liste» |
| 30 | Breakpoints | von ROWAPA hinzugefügt | aktiv; Fehler `padding-global` (Theme ab 1920 px) gefunden und behoben |
| 31 | Erfolge vor ROWAPA Digital | ja (Dramaturgie) | umgestellt |
| 32 | Kennzahl 100 % und «die Mobiliar Ausserrhoden» | beide bestätigt | unverändert |

Commit b2000a2.

## 5. Medien, Logos und Repository

| # | Anliegen | Entscheid / Ergebnis |
|---|---|---|
| 33 | Pull Request: Was tun? | Claude erstellt und aktualisiert PRs selbst: [PR #2](https://github.com/ROWAPA-Konzepte/ROWAPA-Website-2027-Automation/pull/2). Merge nur mit Freigabe |
| 34 | CI-Daten, Filme und Bilder aus `rowapa-website` | 34 Medien übernommen, Assets in 10 Ordnern sortiert |
| 35 | Offizielle Logo-Dateien von ROWAPA | eingesetzt (Navigation, Footer), Favicon und Webclip vorbereitet (Commit be651c9) |

## 6. Entscheide vom Abend

| # | Frage | Entscheid | Umsetzung |
|---|---|---|---|
| 36 | ROWAPA Digital | **Karten** | Variante «Karten» aktiv |
| 37 | Staging veröffentlichen | **ja** | veröffentlicht auf `rowapa-website-2027-automation.webflow.io` (nur Webflow-Subdomain) |
| 38 | Mobile kürzen | **ja** | Bento-Karten ohne Text, Insights 2 Karten (rund 900 px kürzer) |
| 39 | Pull Request beobachten | **ja** | Claude reagiert auf Kommentare im PR |
| 40 | Backup | **jetzt** | 4-Datei-Backup vom 25.10.2026 (in der Git-Historie, Commit 64d2f0c) |

## 7. Dokumentation und Feedback-Runde 3

| # | Frage | Entscheid | Umsetzung |
|---|---|---|---|
| 41 | Braucht es Backup-Runden? | **Nein.** Webflow sichert die Website, Git die Doku | laufend gepflegte Dokumente: `00_start_hier.md`, `00_entscheide.md` (dieses Dokument), `07_benutzerhandbuch.md`, `00_webflow-ids.md`. Regel in `CLAUDE.md` |
| 42 | Backup-Ordner 2026-10-25 | **überführen** | Inhalte in die laufenden Dokumente verschoben; PDFs und Konzeptpapier entfernt (bleiben in der Git-Historie) |
| 43 | Kurzfassung für Dritte | **nein** | – |
| 44 | Netzwerk der Cloud-Umgebung | Webflow freigegeben | Staging live geprüft: Laufband mit Pause beim Darüberfahren und Hover-Video funktionieren |
| 45 | Textänderungen direkt in Webflow | von ROWAPA vorgenommen, beim nächsten Veröffentlichen übernehmen | Hero-Kicker «Beratung · Training · Digitale Lösungen»; Kartentitel «Mitarbeiterperformance & Potenzial», «Führung & Teams», «Recruiting & Mitarbeiterbindung» |
| 46 | Feedback-Runde 3 zur Staging-Seite | Einschätzung von Claude vor dem Bau | Entscheide von ROWAPA ausstehend (Offene Punkte 1 und 2) |

---

## Offene Punkte

1. Entscheide zur Feedback-Runde 3 (Animationen, Slider bei Erfolgen und Insights, Video, Logo-Titel).
2. Kennzahl Trainerteam: 150 Jahre (Vorlage) oder 133 Jahre (Baseline)? [ROWAPA bestätigen]
3. Favicon und Webclip in Webflow hochladen (von Hand).
4. Stehendes Logo als SVG (falls vorhanden).
5. Ungenutzte, nachgebaute Logo-Assets in Webflow löschen (nur mit OK).
6. Weitere Kennzahlen, die gezeigt werden dürfen.
7. Hilfs-Collection «Organisationen» in Stufe 3 nach der Begriffsregel benennen. Vorschlag: «Unternehmen & Partner».
8. Option Mobile: Wische-Reihen für Wege, Insights und Werkzeuge (nochmals rund 3 000 px kürzer).
9. Nächste Stufe nach Freigabe: Stufe 3 (CMS).
