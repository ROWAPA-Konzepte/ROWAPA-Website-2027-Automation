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
| 46 | Feedback-Runde 3 zur Staging-Seite | Einschätzung von Claude vor dem Bau | Entscheide 47–52 |
| 47 | Kennzahl Trainerteam | **150 Jahre** (bestätigt) | unverändert |
| 48 | Logo-Titel, Erfolge-Slider (5 Stimmen im grossen Zitat, Karten bleiben), Video in Lightbox, Linktext Recruiting, Themen-URLs in Stufe 4 anpassen, Staging veröffentlichen | wie von Claude vorgeschlagen | nach Freigabe der Technik |
| 49 | Punktfiguren auch in den vier Themenkarten | **ja**, zusammen mit Vertriebsperformance | Figuren in der Bildsprache der ersten Fassung |
| 50 | ROWAPA Digital: Animation | lieber **eigenständig laufend, ohne Scroll-Abhängigkeit**; ob «Fluss in die Karten» dazukommt, schlägt Claude vor (Massstab: ruhiges, editoriales Gesamtbild) | Vorschlag von Claude ausstehend |
| 51 | Insights und alles Weitere | passend zum editorialen Auftritt, nichts Verspieltes; Claude entscheidet im Zweifel zugunsten von Ruhe | – |
| 52 | Technik | präzise, über Webflow beeinflussbar, gute Qualität, keine längeren Ladezeiten | Technikvorschlag von Claude vor dem Bau |
| 53 | Vorschlag Digital (Kugel und Orbit ohne Fluss, stille Verbindung beim Darüberfahren), Ruhe-Leitlinie, Technik, Muster zuerst | **freigegeben** | Muster gebaut, siehe `06_stufe2_startseite.md` Kap. 11 |
| 54 | Kräuseln unter der Maus im Punktemeer | **bleibt** (Header und Footer) | umgesetzt |
| 55 | Muster | Header-Punktemeer, Titelzeilen, Lösungen mit fünf Punktfiguren, Logo-Titel weg, Erfolge-Slider, Video-Knopf, Footer-Punktemeer | auf Staging veröffentlicht (Webflow-Subdomain) |
| 56 | Figuren als PNG | Claude: alle Punktfiguren als transparente PNG, Animation aus Bildausschnitten (kein zweiter Download); Treppe Vertriebsperformance neu gerendert, Verlauf als Gestaltung | umgesetzt, Skript 1.1.0 |
| 57 | Scroll-Hinweis im Header | Claude: ausgeblendet, über dem bewegten Punktemeer nicht lesbar | bleibt im Designer, jederzeit wieder einblendbar |

## 8. Rest der Feedback-Runde 3

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 58 | Muster auf Staging | **«passt alles so»** | Rest im gleichen Stil gebaut (Entscheide 63–66) |
| 59 | Namen «Simon J.» und «Antonio M.» | **freigegeben** | bleiben so |
| 60 | Ungenutzte Assets | **Löschen freigegeben** | 5 Assets gelöscht: nachgebaute Logos `6ade12d2c8e942edb5039875`, `6ade12d28e540fa263969738`, `6ade12d2c1ea8d82f92a0b3d`; alte Vertriebsperformance-Grafiken `6ade2961405d5ecd5757d4d5`, `6ade63eb6561c3d017194ca8` |
| 61 | Startbildschirm: Unterkante des Logo-Bands = Unterkante des Fensters, auf jedem Format | **ja**, der Header darf dafür höher werden | Hülle `startscreen_wrapper` (Höhe Fenster minus Navigation), Hero füllt den Rest. Geprüft auf 9 Formaten von 375×667 bis 2560×1440: Abstand 0 |
| 62 | Video «Wer wir sind» | Link `https://vimeo.com/738627796` | ROWAPA setzt ihn von Hand in der Lightbox (Benutzerhandbuch 2.15) |
| 63 | Zähler «Was uns antreibt» | Claude: zählt einmal beim ersten Sichtbarwerden in 1,6 s bis zum Wert aus Webflow | Skript 1.2.0 |
| 64 | Treppe «Unser Vorgehen» | Claude: Stufen bauen sich nacheinander auf, die Phase in der Liste leuchtet dazu in Plum; danach steht Phase 01. Darüberfahren oder Klick auf eine Phase (oder eine Stufe) hebt deren Stufe hervor. Phasennummern neu mit Rahmen, nur die aktive Phase in Plum | Skript 1.2.0, Bild als transparentes PNG neu gerendert |
| 65 | ROWAPA Digital | Claude: Kugel dreht sich langsam (eine Umdrehung in 70 s), die fünf Kacheln ziehen ruhig auf der Bahn (150 s) und halten beim Darüberfahren. Karte und Kachel sind verbunden (Kachel in Plum, feine Linie zur Kugel). Auf dem Handy stehen die Kacheln. Kacheln, Bahn und «Wissensplattform» sind native Webflow-Elemente; Symbole und Schrift grösser | Skript 1.2.0 |
| 66 | Insights | Claude: editoriale Reihe mit 6 Beiträgen, 3 sichtbar (Tablet 2, Handy 1 mit Anschnitt), Pfeile und feine Fortschrittslinie; wischen und scrollen gehen auch ohne Skript. 3 Beiträge aus der ersten Fassung ergänzt (Erfahrungsbericht CAS, Selbstführung als Lösung, Generationsmanagement); Auszüge aus dem Titel abgeleitet | Aufbau entspricht der späteren CMS-Liste (Stufe 3). Auszüge [ROWAPA bestätigen] |
| 67 | Ladezeit nach dem Rest | Messung (Chromium, Mittel aus 3 Läufen) | Desktop 916 KB (vorher 955 KB), LCP 620 ms; Handy 441 KB, LCP 604 ms. Kugel rund 30 Bilder pro Sekunde, keine langen Aufgaben |

---

## Offene Punkte

1. Feedback zum Rest auf Staging (Zähler, Treppe, ROWAPA Digital, Insights-Reihe); danach Freigabe Stufe 2.
2. Video-Link `https://vimeo.com/738627796` in der Lightbox einsetzen (von Hand, 30 Sekunden; Benutzerhandbuch 2.15). Die Schnittstelle kann die Lightbox-Medien nicht setzen.
3. Slider optional auf «Cross Fade» und automatischen Wechsel (8 s) stellen (von Hand; Benutzerhandbuch 2.14).
4. Auszüge der drei neuen Insights-Karten bestätigen (aus dem Titel abgeleitet, die Originalbeiträge waren aus der Cloud-Umgebung nicht erreichbar). In Stufe 3 kommen die Auszüge aus dem CMS. [ROWAPA bestätigen]
5. Favicon und Webclip in Webflow hochladen (von Hand).
6. Stehendes Logo als SVG (falls vorhanden).
7. Weitere Kennzahlen, die gezeigt werden dürfen.
8. Hilfs-Collection «Organisationen» in Stufe 3 nach der Begriffsregel benennen. Vorschlag: «Unternehmen & Partner».
9. Option Mobile: Wische-Reihen auch für Wege und Werkzeuge (Insights ist umgesetzt).
10. Themen-URLs in Stufe 4 an die neuen Titel anpassen (mit Weiterleitung); ebenso `/fuer-organisationen`.
11. Nächste Stufe nach Freigabe: Stufe 3 (CMS).
