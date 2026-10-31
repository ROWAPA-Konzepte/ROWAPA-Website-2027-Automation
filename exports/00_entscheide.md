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

## 9. Feedback-Runde 4 (25.10.2026, Nacht)

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 68 | Vorgehen bei Varianten | **Variantenseite ja** | interne Seite `/varianten` (Entwurf im Navigator, auf Staging veröffentlicht, nicht verlinkt) mit Umschaltleiste je Thema |
| 69 | «Digitale Werkzeuge» | **heisst «Digitale Lösungen», auch im Fliesstext** | Titel, Einleitung, Hinweis, Vorgehen Phase 03, FAQ angepasst |
| 70 | Team: «es gibt noch weitere» | **«weitere» statt Zahl** | Team als Reihe mit Anschnitt (4,4 Karten sichtbar), Pfeile, Fortschrittslinie, Schlusskarte «Weitere Teammitglieder · Ganzes Team kennenlernen» → /team |
| 71 | CAS-Daten | **25. Februar bis 6. Dezember 2027** | Chip im Blickpunkt und Varianten |
| 72 | Schriftgrössen | **ja, anheben** | Fliesstext 17 px (vorher 16), klein 15, sehr klein 13, Kicker 13–15, Buttons 14, Navigation 15, Labels nicht unter 12 px. Liste im Benutzerhandbuch 2.22 |
| 73 | Section Digital in Webflow pflegen | Claude: alle Texte und Buttons als Properties der Komponente | Kicker, Titel, Einleitung, Hinweis (Titel, Text), Buttons 1 und 2 (Text, Link), Beschriftung Kugel |
| 74 | Kugel schneller | Claude: Umdrehung 40 s (vorher 70), Kacheln 90 s (vorher 150) | Skript 1.3.0 |
| 75 | Symbole auf dunklem Grund | Claude: Kacheln Great Serpent mit Rand Sea Cliff, weisse Symbole (38 px), Schatten | Varianten B und C auf der Testseite |
| 76 | Bahn und Namen berühren die Kugel nie | Claude: Bahn flacher und tiefer, Kugel kleiner; Namen der oberen Kacheln stehen über der Kachel | Klasse `orbit_tile-name is-oben`; das Skript setzt sie während der Bewegung selbst |
| 77 | Kachel ↔ Karte in beide Richtungen | Claude: Darüberfahren über eine Kachel hebt die Karte hervor (Rand Plum) | Klasse `card is-verbunden`, Skript 1.3.0 |
| 78 | Ruhigere Treppe | Claude: zwei Modi als Varianten (A «ruhig»: steht fest, baut einmal auf; B «Tabs»: Phasen als Reiter) | Startseite bleibt bis zum Entscheid beim heutigen Ablauf |
| 79 | Figuren in «Lösungen für Unternehmen» schneller | Claude: Aufbau rund 40 % kürzer, kleinere Staffelung | Skript 1.3.0 |
| 80 | Mauszeiger | Claude: Punkt Plum mit feinem Ring, drei Varianten (A schlicht, B Ring wächst mit «Öffnen», C passt sich dem Grund an) | nur auf der Testseite eingeschaltet; nur bei Maus, nie in Formularfeldern |
| 81 | Megamenü | Claude: drei Varianten (A erste Fassung mit Vorschau, B editorial mit grosser Vorschau, C Wegweiser mit Figuren) | Testseite; das echte Menü wird nach dem Entscheid umgebaut |
| 82 | Im Blickpunkt prominenter | Claude: drei Varianten (A Bildband mit Ribbon, B Eckdaten, C schmales Band weiter oben) | Testseite |
| 83 | Fehler Variantenumschalter | Claude: Die Kombiklasse `is-aktiv` wurde beim Veröffentlichen global ausgegeben und färbte aktive Elemente vollflächig Plum. Umschalter nutzt jetzt die eigene Klasse `var_wahl-an` | Skript 1.3.1; geprüft: keine globale Regel `.is-aktiv` mehr |

## 10. Feedback-Runde 5 (25./26.10.2026, Nacht)

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 84 | Unser Vorgehen | **Variante A (ruhig)**, Grafik baut sich in der Mitte auf und läuft mit dem Scroll mit, Startposition mittig zwischen oberer und unterer Linie | Überschrift über das Raster gehoben, Hinweis darunter; Grafik `align-self: center`, klebt mittig im Fenster (`top: calc(50vh - 12.5rem)`); Aufbau startet, wenn die Grafik in der Bildmitte steht; `data-modus="ruhig"`. Gemessen: Mitte Grafik = Mitte Phasenliste (0 px) |
| 85 | Kacheln Digital | **Variante A**, gleiche Abstände zwischen den Symbolen | Kacheln stehen nach gleicher Weglänge auf der Bahn statt nach gleichem Winkel, auch während der Drehung; Startplätze im Designer angepasst. Abstände vorher 34–47 (±17 %), jetzt 252–290 px (±7 %, Rest durch die Tiefenwirkung) |
| 86 | Megamenü | **Variante A** | in die echte Navigation übernommen: vierte Spalte mit Vorschau (Bild, Titel, Satz), wechselt beim Darüberfahren; neun Vorschaukarten als native Elemente |
| 87 | Mauszeiger | Ring passt sich dem Grund an (dunkel auf hell, hell auf dunkel), Punkt immer Plum | Skript 1.4.0 liest die Hintergrundfarbe unter dem Zeiger; auf Fotos heller Ring mit feiner Kontur. Site-weit eingeschaltet über das Attribut an der Navigation; nur mit Maus |
| 88 | Im Blickpunkt | heutigen Aufbau behalten, Titel auf einer Linie, Foto nur im mittleren Bereich, «gerne noch ein paar Varianten» | Varianten D (Fotoband in der Mitte), E (heutiger Aufbau, Foto füllt die rechte Hälfte), F (breites Mittelband mit Eckdaten) auf `/varianten` |

## 11. Feedback-Runde 6 (26.10.2026, Nacht)

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 89 | Im Blickpunkt | **Variante D** | auf `/home-v2`: Kicker und Titel einzeilig über einem Fotoband, Text, Daten und Buttons auf dem Band (Verlauf von links). Handy: Titel zweizeilig, Verlauf von oben |
| 90 | Megamenü | **über die ganze Seitenspalte** | so breit wie der Inhaltsbereich (gemessen: bündig mit Logo und Kontakt-Button), Vorschau grösser |
| 91 | Unser Vorgehen | **fest, optisch mittig, mit Farbaufbau** (Empfehlung Claude) | Grafik läuft nicht mehr mit; mittig zur Phasenliste, 5 % höher als rechnerisch (Schwerpunkt der Grafik liegt 9 % unter der Mitte). Aufbau in der Bildmitte, Stufen leuchten nacheinander Plum, Phase links leuchtet mit, danach Phase 01 |
| 92 | Digitale Lösungen | Kacheln schneller, Halt nur über den Textboxen | Kugel 24 s, Kacheln 45 s je Runde; Halt nur über den Karten darunter, Kachel-Hover hebt die Karte hervor, dreht aber weiter (Skript 1.4.1) |
| 93 | Look & Feel | Struktur und Dramaturgie bleiben, keine Zusammenlegung, Bewegung im Rahmen; Diagonal-Ribbon probieren | Entwurf `/home-look` (Kopie der Startseite): grössere Display-Titel, Diagonal-Ribbon an drei Section-Ecken, feine Swiss-Rasterlinien in drei hellen Sections. `/home-v2` unverändert |

| 94 | Look-&-Feel-Varianten | «gerne verschiedene Varianten zeigen, auch Benchmark recherchieren» | drei Richtungen auf Kopien der Startseite: A Editorial Swiss `/home-look`, B Kontrast & Statement `/home-look-b`, C Hell & präzise `/home-look-c`. Umgesetzt mit Test-CSS nur auf diesen Seiten (`exports/look-entwuerfe/`); die gewählte Richtung wird danach nativ in Webflow-Klassen gebaut, ohne Custom Code |

## 12. Feedback-Runde 8 (26.10.2026): Layout-Varianten

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 95 | Layout | «alle gleich aufgebaut (links Text und Titel)», 2–3 Varianten mit anderer Anordnung; Simon-Kucher und Unterseiten als Referenz, nicht 1:1 | drei Layout-Entwürfe mit unveränderter Dramaturgie und Texten: D «Bühne & Reiter» `/layout-d`, E «Editorial versetzt» `/layout-e`, F «Mosaik & Flächen» `/layout-f`. Benchmark: Simon-Kucher (Startseite, Financial Services, Banking, Versicherungen, Sales, Insights, Karriere, Kontakt), Bain, BCG, Oliver Wyman, Roland Berger, Korn Ferry, Pictet, Vontobel; nicht erreichbar: McKinsey, Julius Bär, zeb (Schutz gegen automatische Zugriffe bzw. Proxy) |
| 96 | Umsetzung der Entwürfe | Claude: Entwürfe als HTML/CSS im Repository (`exports/layout-entwuerfe/`), per Lader nur auf den drei internen Seiten eingeblendet | die gewählte Variante (oder Mischung) wird danach nativ mit Webflow-Elementen und Client-First-Klassen gebaut; kein Custom Code im Endprodukt ausser den bestehenden Grafik-Modulen |

## 13. Feedback-Runde 9 (26.10.2026): Kombi-Varianten auf der heutigen Startseite

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 97 | Kombination statt Neuaufbau | heutige Startseite behalten, Punktemeer nicht aufgeben, aber mit Fotos wie D; Logos aus E, «Was uns antreibt» aus D, Team aus F, Titel wie D (gross, Plum-Strich); mehr unterschiedliche Bewegung: Farbfluss der Sections von links nach rechts, animierte Diagonal-Elemente, neue Darstellung der Lösungen | zwei Varianten auf Kopien von `/home-v2`: **G** `/kombi-g` und **H** `/kombi-h`. Echte Seite mit allen Grafiken (Punktemeer, Figuren, Treppe, Orbit, Zeiger), darüber ein Aufsatz aus `exports/layout-entwuerfe/kombi.css` und `kombi.js` |
| 98 | Hero | Punktemeer bleibt | G: Fotofenster rechts mit 45°-Kante und Plum-Ribbon, das Foto löst sich unten ins Punktemeer auf. H: Foto über die ganze Breite, Text und Wellen bleiben frei, Ribbon läuft oben rechts ein, Hero in voller Fensterhöhe. In beiden wechselt das Foto mit der hervorgehobenen Zeile (Vertriebsleistung / Führung / Fluktuation) |
| 99 | Bewegung | Leitlinie «kein Farbfluss» (LIESMICH Grafik) wird auf Wunsch ROWAPA geöffnet [bei Wahl bestätigen] | G: Farbflächen wischen gerade von links nach rechts ein, Ribbons zeichnen sich einmal in die Section-Ecken. H: Farbflächen laufen mit schräger Kante ein, Ribbons gleiten mit dem Scrollen durch die Ecken |
| 100 | Lösungen für Unternehmen | neue Anordnung, gleiche Inhalte und Figuren | G: Vertriebsperformance gross links, die vier anderen Themen als Zeilen rechts (Plum-Kante beim Darüberfahren). H: Akkordeon aus fünf Spalten, eine ist offen, wechselt alle 5 s und beim Darüberfahren; Handy: Karten untereinander |

## 14. Feedback-Runde 10 (26.10.2026): Master Kombi G2

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 101 | Master | **Kombi G** ist die Grundlage: Schriftgrössen und Titel (gross, Plum-Strich) gelten für die ganze Seite | Entwurf `/kombi-g2` (Kopie von `/home-v2`, Aufsatz `exports/layout-entwuerfe/kombi2.css` und `kombi2.js`) mit Umschaltleiste «Varianten vergleichen»: erster Knopf je Section = Entscheid, weitere = Gegenvorschläge |
| 102 | Hero / Referenzen | Hero bleibt wie in Kombi G (Fotofenster mit 45°-Kante über dem Punktemeer); Referenzen wieder als **Laufband** | Gegenvorschläge in der Leiste: Hero «G sauber» (ein Foto, keine Punkte darüber) und «Heute»; Referenzen «Raster (E)» |
| 103 | Was wir tun | Anordnung G, **heller Hintergrund**, Grau erst beim Darüberfahren | Section weiss, Themenzeilen werden beim Darüberfahren Pastel Snowbank mit Plum-Kante; Gegenvorschläge: Akkordeon (H), Kacheln wie heute |
| 104 | Was uns antreibt | **Look B** (grosse Kennzahlen), Titel in der Grösse von G, ohne Plum-Balken über der Section | umgesetzt; Gegenvorschlag Layout D |
| 105 | So arbeiten wir | wie G | Phasen werden beim Darüberfahren grau (gleiches Prinzip wie «Was wir tun») |
| 106 | Unsere Erfolge | **Layout E** mit versetztem Fotorahmen, als Slider | bestehender Webflow-Slider (5 Geschichten) im Fotorahmen-Layout, Zitat gross; die drei kurzen Zitate darunter ohne Kartenrahmen; Gegenvorschlag «Heute» |
| 107 | Über uns | Mosaik aus G, mit Hinweis, dass das Team grösser ist | fünfspaltiges Mosaik mit Kachel «150 Jahre Wissen und Erfahrung im Trainerteam» und Kachel «Weitere Trainerinnen, Trainer und Partner · Lernen Sie unser ganzes Team kennen» (führt auf `/team`); Gegenvorschlag Reihe wie heute |
| 108 | Meine Entwicklung | 2–3 Varianten nach D und F, Text muss sicher lesbar sein | A Text im Bild mit kräftigem Verlauf (D), B Text unter dem Bild (D), C wechselnde Zeilen Foto/Text (F); zum Umschalten |
| 109 | Im Blickpunkt (CAS) | Foto links bis zur Mitte, Text rechts; Farbfläche als **einzige Einblendung** der Seite | Foto randabfallend links, Text rechts; Farbfläche wischt von der Bildkante nach rechts ein (Gegenvorschlag: blendet ein), Text erscheint danach |
| 110 | Bewegung | Farbfluss nur noch im CAS-Block; bleiben: Strich unter den Titeln, Team-Kacheln nacheinander, Unterstreichung im Header; Ribbons stehen fest | umgesetzt; Punktemeer, Treppe, Orbit, Zähler unverändert. Ersetzt die Farbfluss-Notiz aus #99 |
| 111 | Gut zu wissen, Kontakt | **Look B**: Gut zu wissen hell, Kontakt dunkel | Kontakt Manganese Deep, Kicker Sea Cliff; Gegenvorschlag «Hell wie heute» |
| 112 | Vorgehen | zuerst Entwurf G2 auf Staging, nach Freigabe native Umsetzung auf `/home-v2` | Entwurf live; native Umsetzung folgt nach Freigabe |

## 15. Feedback-Runde 11 (26.10.2026): Kombi G2 nachgeführt

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 113 | Punktfiguren «Was wir tun» | Aufbau der Figuren wieder sichtbar machen | Ursache: in der Zeilen-Anordnung waren die Figuren nur 112 × 96 px gross, der Aufbau lief, war aber kaum zu sehen. Jetzt 192 × 144 px; Handy wie heute ohne Figur |
| 114 | Hero / Referenzen / Was wir tun / Antrieb / Erfolge / Über uns | Hero **wie heute** (nur Punktemeer), Laufband, Zeilen, Look B, Fotorahmen, Mosaik | als Standard gesetzt; Kombi G bleibt als Alternative in der Leiste |
| 115 | Meine Entwicklung | **C** (Zeilen), Frage nach drei dezenten Farbtönen | C als Standard, Zeilen etwas niedriger (22 rem); Alternative «C mit drei Farbtönen»: Section weiss, Textflächen in den CI-Tönungen Sea Cliff Tint, Pastel Snowbank, Plum Tint |
| 116 | Im Blickpunkt | Farbfläche **blendet ein** | Standard |
| 117 | Insights | Fortschrittsbalken nicht nötig | ausgeblendet, Pfeile bleiben; Alternative «mit Balken» |
| 118 | Kontakt | **hell** | Standard (wie heute), dunkel als Alternative |
| 119 | Digitale Lösungen | wirkt zu schwer, Wissensplattform-Kasten; 2–3 leichtere Darstellungen | «Liste neben der Kugel» (Vorschlag: Lösungen als aufklappbare Zeilen, mit den Orbit-Kacheln verbunden, Wissensplattform als schmale Notiz unter der Kugel), «Kugel in der Mitte» (zentriert, Lösungen als schlanke Reihe ohne Beschreibung), «Kompakt» (Aufbau wie heute, Wissensplattform einzeilig, Karten ohne Beschreibung), «Heute». Texte unverändert, nur ein- oder ausgeblendet |
| 120 | Titel immer links | zu statisch? Simon-Kucher recherchieren | Befund: Simon-Kucher setzt Titel fast immer links, aber nie zentriert; sie springen im Raster (linker Rand, um ein Viertel eingerückt, schmale Seitenspalte). Vorschlag «Im Raster versetzt»: Vorgehen um ¼ eingerückt, Meine Entwicklung ab 5/12, Insights mit Titel in der Seitenspalte; CAS rechts und Gut zu wissen mit Seitenspalte waren schon so. Alternative «Einheitlich links» |

## 16. Feedback-Runde 12 (26.10.2026): finaler Entwurf Kombi G2

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 121 | Digitale Lösungen | Aufbau wie heute; Wissensplattform so knapp wie in «Kompakt»; die fünf Karten besser lesbar und heller, damit der Block nicht so dunkel wirkt; dazu 2–3 neue Varianten | A «Heute, Karten hell» (Wunsch ROWAPA): Wissensplattform einzeilig, Karten Sea Cliff Tint mit dunkler Schrift. Neu: B Karten Great Serpent mit weisser Schrift und Symbolen; C dunkle Bühne oben, weisse Karten mit Symbolen im hellen Teil darunter; D ganze Section hell (Sea Cliff Tint), Kugel auf dunkler Fläche, weisse Karten mit Symbolen. Wahl offen |
| 122 | Meine Entwicklung | **C mit drei Farbtönen**; Köpfe nicht abschneiden, mindestens die Augen immer sichtbar, auch in den Videos | Bildausschnitt für Foto und Video auf 19 % von oben gesetzt (Augen liegen in allen Fotos und Video-Bildern bei 20–40 % der Höhe); geprüft am Desktop und Handy |
| 123 | Was wir tun | Linktext «Mehr zu …» wiederholt den Titel | Linktext entfällt, die ganze Zeile ist der Link, Pfeil (Plum) direkt hinter dem Titel, der beim Darüberfahren nach rechts rückt. Der Button «Zur Vertriebsperformance» in der grossen Karte bleibt |
| 124 | Titel-Anordnung | Titel nicht versetzen, alles wie bisher, **ausser Insights**: Titel in der Seitenspalte, ohne Fortschrittsbalken | umgesetzt |
| 125 | Entwurf | finaler Entwurf | Umschaltleiste zeigt nur noch «Digitale Lösungen»; alle anderen Sections sind fest |

## 17. Feedback-Runde 13 (26.10.2026): nativer Bau Kombi G2 auf /home-v2

Der finale Entwurf ist jetzt mit Webflow-Klassen, Komponenten-Varianten und Interactions auf `/home-v2` gebaut. Die Entwurfs-Skripte (kombi2.js/.css) laufen dort nicht mehr.

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 126 | Digitale Lösungen | **C «Dunkle Bühne, helle Karten»** | Section oben dunkel (Kugel, Text, Buttons), unten 15 rem weiss; fünf weisse Karten mit Symbol (Card Feature, Variante «Weiss · Symbol (Digital)»); Wissensplattform einzeilig (`note-box.is-kompakt`) |
| 127 | Klick auf Orbit-Symbol | passende Karte soll sich bewegen | Karte hebt sich 1,4 s an (Plum-Rand, Schatten; Klasse `card.is-angetippt`), wird ins Bild geholt, falls sie ausserhalb liegt. Den Link zur Unterseite trägt die Karte. Skript 1.5.0 |
| 128 | Insights | Slider bleibt, **ohne Scrollbalken** | Balken ausgeblendet (Style `scrollbar-width: none` an `insights_reihe`, für ältere Browser zusätzlich im Skript). Blättern per Wischen, Trackpad und Pfeilen |
| 129 | Insights-Hinweise (Sales, Leadership) | nicht im Foto; weglassen oder neben das Datum? | **Neben dem Datum** (Empfehlung umgesetzt): Die Themenzuordnung hilft beim Überfliegen und wird mit dem CMS (Stufe 3) zum Filter; im Foto war sie schwer lesbar und verdeckte das Bild. Zeile `card_meta`: Tag in Plum-Versalien, dann Datum · Format |
| 130 | Nach oben | auf jeder Seite, sobald man unten ist | Knopf unten rechts (Plum, 48 px), erscheint nach gut einer Bildschirmhöhe, Klick scrollt sanft an den Anfang. Liegt in der Footer-Komponente, also auf jeder Seite. Skript 1.5.0, 1.5.1 springt direkt, falls sanftes Scrollen bei hoher Last nicht anläuft |
| 131 | Schriftgrösse Header | noch passend zu den grösseren H2? | H1 vergrössert: `clamp(2.5rem, 1.1rem + 4.6vw, 6rem)`, 1440 px Fenster: 84 px statt 72 px (H2 62 px), 1920: 96/68, 1366: 80/60, 1024: 65/50. Auf dem Handy kann die H1 nicht wachsen («Vertriebsleistung.» muss in eine Zeile passen); dort H2 etwas kleiner (32 statt 36 px, H1 40 px). Der Startbildschirm passt weiter: Logos schliessen mit der Fensterunterkante ab |
| 132 | Abstände | Ober- und Unterkante in allen Formaten sauber | alle Sections mit demselben Innenabstand (`padding-section-large`), Desktop 125 px oben und unten; geprüft auf der veröffentlichten Seite bei 1920, 1440, 1366, 1280, 1024, 992, 768, 390 px. Korrigiert: Navigation bei 992–1439 px kompakter (KONTAKT war bei 1024 px abgeschnitten), Kennzahlen bleiben einzeilig («100 %» brach bei 1024 px um), Digital-Karten ab 992 px fünf nebeneinander (vorher 4 + 1), Lösungen-Zeilen bei 992–1439 px mit Kicker über dem Titel (Text war bei 1024 px nur 90 px breit). Wo zwei weisse Flächen aufeinandertreffen (Digital → Über uns → Meine Entwicklung), entstand doppelter Weissraum (rund 250 px): Die zweite Section hat jetzt den halben Abstand oben und eine feine Linie (`is-anschluss`) |
| 133 | Ribbons | statisch, dezent | Lösungen oben rechts, Antrieb unten links, Kontakt oben rechts (unten links kreuzte die Telefonnummer). Team: ausgeblendet (Eigenschaft «Ribbon anzeigen» aus), weil es nach dem Abstandsausgleich den Button «Team kennenlernen» kreuzte; jederzeit wieder einschaltbar. Auf Tablet und Handy entfällt «unten links» (lag über den Kennzahlen), die übrigen sind dort klein (10 rem), weil das Kontakt-Ribbon bei 768 px sonst den Titel kreuzte |
| 134 | Animationen | alle sollen laufen | geprüft auf der veröffentlichten Seite: Punktemeer Header und Footer, Hero-Zeilen mit Unterstreichung, Logo-Laufband, Titel-Strich (11 von 11), Punktfiguren, Zähler (20 · 100 % · 150), Treppe, Kugel und Kacheln, Team-Kacheln nacheinander, Farbfläche CAS (einzige Einblendung), Hover-Videos, Kachel-Klick, Nach oben. Keine Skriptfehler, kein seitliches Überlaufen |

## 18. Feedback-Runde 14 (26.10.2026): Header-Satz ruhig, Erfolge als ein Block

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 135 | Header (zurückgenommen, Nr. 138) | Satz unter dem Titel lag auf dem Wellenkamm des Punktemeers; dunkler, nicht ruhiger | weicher dunkler Verlauf hinter dem Satz (Element `hero_abdunkler` in der Hero-Komponente). Die Punkte werden dort gedämpft, die Bewegung bleibt, rechts ist das Punktemeer voll sichtbar. Wandert mit dem Text auf allen Formaten mit; Variante «B · Editorial» ohne |
| 137 | ROWAPA Digital | Beim Darüberfahren über ein Symbol soll die ganze Karte farbig werden, in einem abgeschwächten Plum; der Rahmen war kaum sichtbar | Karte wird **gedämpftes Plum** (#B93E70, Variable «Plum Gedaempft») mit weisser Schrift, hebt sich leicht an. Gilt für Darüberfahren über das Symbol und über die Karte selbst. Technisch: neuer Theme-Modus «Plum» (Texte, Kicker, Link weiss; Kontrast weisse Schrift 5:1). Verglichen mit einer zarten Variante (helles Plum, dunkle Schrift), die gedämpfte ist deutlich besser sichtbar |
| 136 | Unsere Erfolge | Titel bis Name des Zitatgebers sollen auf jedem Format in einem Bildschirm stehen | Foto an die Fensterhöhe gekoppelt (`max-height: 100svh − 20 rem`, Tablet − 18 rem, Handy 16:10), Text oben, Zitat in der Mitte, Name auf Höhe der Fotounterkante, Punkte und Pfeile rechts daneben (Handy nur Punkte). Tablet neu zweispaltig wie Desktop. Folien gleich hoch (`erfolge_maske`). Handy: «Alle Referenzen» neben dem Titel. Gemessen Titel bis Name: 1920 px 925 von 1007 px, 1440 750/827, 1366 639/695, 1280 668/727, 1024 570/695, 768 528/959, 390 684/779 (Fensterhöhe ohne Navigation) |

## 19. Feedback-Runde 15 (26.10.2026): nur Besprochenes, Linien, Header-Zeilen, Titelgrössen

Hinweis ROWAPA: Es wird nur gebaut, was besprochen ist. Eigene Ideen kommen als Vorschlag.

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 138 | Header-Verlauf (Nr. 135) | nicht gut, wieder entfernen | entfernt, Header wie vorher |
| 139 | Header-Zeilen | jede Zeile wie früher auf einer Zeile | Textblock bis 62 rem breit, Handy-Schrift aus der Fensterbreite gerechnet; geprüft in 15 Breiten von 1920 bis 320 px: alle drei Zeilen einzeilig, Grösse sonst unverändert |
| 140 | Rote Linien | überall gleich dick wie bei «Unser Vorgehen» | alle roten Trennlinien 1 px (Zeilen «Was wir tun», Digital-Karten, Linie beim Darüberfahren, Rahmen beim Klick); vorher 3–4 px |
| 141 | Meine Entwicklung | Haupttitel in den Feldern prominenter | 1440 px 47 statt 41 px, ab 1536 px 48 px; vorher fielen sie ab 1920 px auf 28 px zurück (Fehler behoben) |
| 142 | Schriftgrössen | Muster prüfen | Inventar aller Sections in fünf Breiten erstellt. Abweichung vom vereinbarten Fliesstext 17 px behoben (Digital-Karten 16, Meine Entwicklung 18 → 17). Übrige Stufen einheitlich: H2 62 px (1440), Kicker 14 px, Untertitel 19 px, Kartentitel 24 px |
| 143 | Section-Höhen | jede Section je Bildschirm sauber | vermessen in sieben Formaten; Ergebnis und Vorschlag siehe Bericht Runde 15 (Lösungen, Vorgehen, Digital, Team, Meine Entwicklung sind auf keinem Format eine Bildschirmhöhe) |

## 20. Feedback-Runde 16 (26.10.2026): Megamenü reparieren

Auftrag ROWAPA: «Erstens Mega-Menü reparieren.» Die weiteren Punkte (gleiche Darstellung für die anderen Menüs, Grösse je Format, Inhalte straffen) zuerst nur als Rückmeldung, nicht bauen.

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 144 | Megamenü nicht anklickbar | reparieren | Drei Ursachen behoben: (1) zwischen Menüpunkt und Panel lag eine Lücke von 15 px, die Menüpunkte füllen jetzt die ganze Leistenhöhe; (2) die drei kleinen Menüs standen in der Bildschirmmitte statt unter ihrem Menüpunkt (Zusatzklasse `is-schmal`); (3) Webflow öffnet ein Menü nur über dem Menüpunkt selbst. Wer schräg nach links oder rechts unten zum Link fährt, streift kurz die Leiste neben dem Menüpunkt, dann schliesst das Menü. Lösung: unsichtbare Brücke von 24 px über dem Panel (`navbar_dropdown-list`: Abstand oben −1.5 rem, Innenabstand oben 1.5 rem, Hintergrund transparent), Schliessverzögerung 300 ms |
| 145 | Logo, Sprachwahl, Kontakt-Button | müssen bei offenem Menü voll klickbar bleiben | auf Ebene 902 gelegt, über dem offenen Menü (Webflow setzt 900/901) |
| 146 | Prüfung | — | live geprüft: alle 31 Links der vier Menüs in 1920, 1440, 1280 und 1024 px, jeweils schräg langsam und schnell angefahren (248 von 248 Klicks ok); Wechsel zum Nachbarmenü ok; Logo, Sprachwahl und Button bei offenem Menü klickbar; Handy-Menü in 390 und 768 px unverändert |

## 21. Feedback-Runde 17 (26.10.2026): Designer-Ansicht, Menüs, H2 Handy, Format-Vorschau

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 147 | Designer zeigt Header und «Unsere Erfolge» verzogen | reparieren, ohne dass sich die Website ändert | **Slider:** Die Folienschiene war seit Runde 14 ein Raster (Grid), damit alle Folien gleich hoch sind. Die Website zeigt das richtig, der Designer nicht (alle Folien gequetscht nebeneinander). Auch ein ausgeschriebenes Raster half nicht. Neu: Flexbox auf `erfolge_maske`, Klasse `erfolge_folie` auf jeder Folie (schrumpft nicht, Höhe automatisch). Designer korrekt, Folien weiter gleich hoch (gemessen in 7 Formaten von 1920 bis 390 px). **Header:** Die leeren Unterstrich-Elemente `hero_bar` zeichnete der Designer als dicken Plum-Block über «Weniger Fluktuation.». Höhe begrenzt (`max-height` 0.07em, Überlauf versteckt): im Designer kein Block mehr, auf der Website unverändert (Linie 2 bis 6 px je nach Breite) |
| 148 | Menüs | gleiche Darstellung wie «Was wir tun», mit Vorschau rechts | So arbeiten wir, Über uns, Partner werden: Panel über die ganze Breite, Links links, Vorschau rechts (fest in Spalte 4). 11 neue Karten mit vorhandenen Bildern; 6 Texte aus der Startseite, 5 Entwürfe [ROWAPA bestätigen] (Texttabelle Rev. 7). Kombi `is-schmal` entfernt. Live geprüft in 1920, 1440, 1280 und 1024 px: alle 31 Links klickbar, jede Karte wechselt beim Darüberfahren |
| 149 | H2 auf dem Handy | verkleinern | bis 767 px `clamp(1.75rem, 1rem + 2.6vw, 2.25rem)`, bis 479 px `clamp(1.25rem, 0.5rem + 4.4vw, 1.75rem)`: 390 px H2 25 statt 32 px (H1 35), 320 px H2 22 (H1 28), 600 px H2 32 (H1 45) |
| 150 | Titelstriche und Header-Unterstreichung | bleiben | unverändert |
| 151 | Kartentitel Logbuch | «Ihr digitaler Begleiter im Verkauf» bestätigt | erledigt |
| 152 | Grösse je Format | je Ansicht programmieren; das Design muss nicht in allen Formaten gleich sein, jedes Format bekommt die Darstellung, die dort am besten wirkt; gilt auch für alle weiteren Seiten | Vorschau mit 8 Formaten (1920×1080 bis 390×844) als private Seite https://claude.ai/artifact/WpvkhkkFWftgsXgK9fVoDw, Umschalter «Darstellung: Heute / Vorschlag je Format». Ergebnis: heute passen 3–6 von 12 Sections in einen Bildschirm (Seite 13,7–20,4 Bildschirme), mit Vorschlag und Straffung 11–12 von 12 (10,6–12,5 Bildschirme). Werkzeug: `tools/format-vorschau/`. Vorschlag nur im Testbrowser nachgestellt, mit Mitteln, die Webflow nativ kann (Breakpoints nach Breite, an die Fensterhöhe gekoppelte Grössen). Umsetzung in Webflow nach Entscheid je Section |
| 153 | Inhalte straffen | nach Benchmark, als Variante zum Umschalten | in der Vorschau «Inhalt: Gestrafft» (Texte Original → Vorschlag auf der Vorschauseite) |
| 154 | Digital im Header | Variante A als Vorschau, ohne Obertitel | in der Vorschau «Header: Variante A»: ohne Obertitel, Leiste «ROWAPA Digital» mit fünf Symbolen unter dem Lead-Text |
| 155 | Lead-Text im Header | von ROWAPA im Designer geändert | heute im Designer: «Gemeinsam bewegen wir Menschen und Unternehmungen, datenbasiert, praxiserprobt, nachhaltig.» Hinweis: Die Begriffsregel sagt «Unternehmen» (nicht «Unternehmung»). [ROWAPA bestätigen] |

## 22. Feedback-Runde 18 (26.10.2026): Format-Vorschlag und Straffung nativ auf /home-v2

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 156 | Vorgehen umsetzen | v2 mit den Anpassungen aktualisieren; für die Themenlinien-Szene später eine v3 anlegen; aufräumen erst nach dem Entscheid für die definitive Variante | `/home-v2` nativ umgebaut (Klassen, Breakpoints, Kombi-Klassen, Komponenten-Varianten), kein Custom Code. Sections nicht gelöscht, nur ausgeblendet, wo gestrafft |
| 157 | Abstände | an die Fensterhöhe koppeln | Section-Abstand `clamp(3rem, 9svh, 7rem)` oben und unten (ab 1920 nicht mehr fix 10rem), Anschluss-Sections oben `clamp(2rem, 5svh, 4rem)`, Kopf bis Inhalt `clamp(1.5rem, 4svh, 3rem)`. Header auf kleinen Laptops (992–1439) mit weniger Luft über dem Titel |
| 158 | Unser Vorgehen: Grafik | «Die Grafik soll sich im rechten Teil aufbauen, von der Mitte nach rechts, da nach oben mehr Platz ist; so kann sie grösser werden» | Treppe rechts neben Titel und Einleitung, die vier Phasen darunter in einer Reihe. Höhe höchstens `100svh - 28.5rem`. Tablet: Treppe zentriert über den Phasen (2 × 2), Handy: Phasen als Wischkarten, Treppe ausgeblendet. Fette Unterzeilen ausgeblendet, je Phase ein Satz |
| 159 | Digital: Symbole um die Kugel | «müssen kleiner werden, damit es sauber aussieht» | Kacheln, Symbole, Namen und Kugel-Beschriftung wachsen mit der Fensterhöhe (bei 1440×900 Kachel 50 statt 80 px). Orbit ab 1280 px; darunter Einleitung über die ganze Breite. Einleitung und Kartentexte gestrafft, Kartentexte nur ab 1920 und auf dem Tablet sichtbar, Tablet und Handy als Wischreihe |
| 160 | Female Empowerment | «Gesicht weiter nach oben, lieber oben anschneiden als unten» | Bildausschnitt von 50 % 19 % auf 50 % 45 %: Gesicht höher, oben angeschnitten |
| 161 | Insights | «Hier haben ROWAPA TV und Webinare noch Platz» | Die beiden Hinweise stehen ab 992 px links unter «Alle Inhalte», darunter wie bisher. Bildhöhe an die Fensterhöhe gekoppelt, Auszug 992–1919 ausgeblendet (eigene Kartenvariante «Insights Reihe») |
| 162 | Format | Feedback galt für 1440×900 | sinngemäss auf alle 8 Formate übertragen |
| 163 | Header | so lassen wie bisher (Variante A entfällt) | unverändert, mit Obertitel |
| 164 | Kartentexte Menü | in Ordnung | bestätigt (Texttabelle Rev. 7) |
| 165 | Lead-Text | «Unternehmen» ist gesetzt | «Gemeinsam bewegen wir Menschen und Unternehmen, datenbasiert, praxiserprobt, nachhaltig.» |
| 166 | Unsere Erfolge | gestrafft | Die drei Zitate unter dem Slider sind jetzt Folien 6–8 mit bisher ungenutzten Bildern (erfolg-7, erfolg-5, erfolg-3). Das alte Zitate-Raster ist ausgeblendet, nicht gelöscht |
| 167 | Partnerlogos | gestrafft | auf der Startseite ausgeblendet (Einstellungen › Sichtbarkeit), nicht gelöscht |
| 168 | Meine Entwicklung | drei Wege nebeneinander | ab 992 px drei Spalten (Bild oben), Tablet Bild links neben dem Text, Handy Wischkarten |
| 169 | Lösungen | kompakte Zeilen | grosse Karte und vier Zeilen an die Fensterhöhe gekoppelt, Zeilentexte nur ab 1920; Tablet 2 × 2, Handy Wischreihe. Zeilentexte gestrafft |
| 170 | Prüfung live | in allen 8 Formaten nachgemessen | 1920 bis 768 px: 12 von 12 Sections passen in einen Bildschirm (Seite 10,3–11,7 Bildschirme, vorher 13,7–17,4). Handy 390×844: 10 von 12 (12,8 statt 20,4 Bildschirme). Länger als ein Bildschirm bleiben auf dem Handy «Im Blickpunkt» (+128 px, Bild über dem Text, war in der Vorschau falsch gemessen) und «Neueste Insights» (+221 px, weil Webinare und ROWAPA TV bleiben) |
| 171 | Referenz Tresmares Capital | Seite live ansehen | aus der Cloud-Umgebung nicht erreichbar (Verbindung wird abgewiesen, auch nach Freigabe). Optionen: Sitzung auf dem eigenen Computer (Claude Desktop App) oder Screenshots. Themenlinien-Szene (v3) folgt danach |

## 23. Feedback-Runde 19 (27.10.2026): Themenlinien-Szene auf /home-v3

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 172 | Im Blickpunkt (v2, Handy) | «Bild niedriger machen» | Bildhöhe auf dem Handy 40 % der Bildschirmbreite (`spotlight_media`), Farbfläche und Textabstand darauf abgestimmt (`cas_farbe`, `padding-section-large is-cas`). Gilt für alle Seiten mit dieser Section |
| 173 | Referenz Tresmares Capital | Analyse in der Desktop-App, Ergebnis als private Seite (https://claude.ai/artifact/LwdWCvJZ13WPBPLMSFPcDe) | Muster übernommen: stehende Bühne, kleine Liste links mit aktivem Thema, Wechsel mit Vorhang, Figur verwandelt sich. Nicht übernommen: Einrasten mit geglättetem Scrollen, ganze Fläche als Link |
| 174 | Tempo | «ohne einrasten» | je Thema rund zwei Drittel Bildschirmhöhe Scrollweg; ab der Hälfte wechselt das Thema mit einem kurzen Übergang (0,6 s). Die Seite scrollt normal weiter, die Navigation bleibt sichtbar |
| 175 | Übergang | «beide varianten bauen» | Vorhang diagonal 45° (Richtung des Ribbons, Standard) und Vorhang von unten. Umschalten in Webflow mit dem Attribut `data-uebergang` an der Section, zum Vergleichen ohne Änderung: `/home-v3?uebergang=unten` bzw. `?uebergang=diagonal` |
| 176 | Tablet und Handy | «auch eine stehende leiste mit namen zum später anpassen» | Karten untereinander, darüber eine stehende Leiste mit Kurznamen «Vertrieb · Potenzial · Führung · Recruiting · Digital», das Thema im Bild ist markiert. Kurznamen sind eigene Textelemente (`themen_link-kurz`) und frei änderbar [ROWAPA bestätigen] |
| 177 | Umsetzung | «loslegen wie von dir vorgeschlagen» | `/home-v3` (Kopie von v2) mit der neuen Reihenfolge: Header, Was uns antreibt mit «Warum ROWAPA», Unsere Erfolge, Lösungen für Unternehmen (Themenlinien), Unser Vorgehen, Digitale Lösungen, Über uns, Meine Entwicklung, Im Blickpunkt, Wissen & Impulse, Häufige Fragen, Kontakt, Footer. Die alte Lösungen-Section ist auf v3 ausgeblendet, nicht gelöscht; v2 bleibt unverändert |
| 178 | Warum ROWAPA | in «Was uns antreibt» integriert | vier Punkte (Nur Finanzbranche, Wirkung gemessen, Aus der Praxis, Aus einer Hand) mit Nummer, Titel und einem Satz; Texte neu formuliert [ROWAPA bestätigen]. Auf dem Handy nur Nummer und Titel. Das Ribbon unten links im Antrieb ist auf v3 ausgeschaltet, weil es den ersten Punkt kreuzen würde |
| 179 | Themenlinien: Inhalt | wie vorgeschlagen | links Kicker, Titel, Einleitung, Liste der fünf Themen, Button «Zum Unternehmensbereich»; rechts je Thema Kernbotschaft, höchstens zwei Sätze, Button zur Themenseite, nur die Punktfigur, keine Kennzahlen. Alles native Webflow-Elemente |
| 180 | Themenlinien: Figur | Punkte ziehen sich zusammen und bilden die nächste Figur | Das Skript liest die Punkte aus den Standbildern; neue Figur = neues PNG im Bildfeld. Die Vertriebs-Figur gibt es neu in einer Fassung für hellen Grund (`grafik-vertriebsperformance-hell.png`) |
| 181 | Technik | so wenig Code wie möglich | Grafik-Skript 1.6.1, Modul `themen` (nur Lage, Ausschnitt, Morph und Klasse `is-aktiv`). Ohne Skript, bei «Bewegung reduzieren» und bei sehr niedrigen Fenstern stehen die Karten untereinander. Geprüft ab 992×620 bis 1920×1080 |
| 182 | Prüfung live | Staging, 8 Formate, Skript 1.6.1 | v3: 1920 bis 1024 px 12 von 12 Sections in einem Bildschirm (die Themenlinien als stehende Bühne), Seite 13,1–14,6 Bildschirme (davon 2,6 Scrollweg der Themen). Bühne geprüft von 992×620 bis 1920×1080 (bei knapper Höhe mit schmalem Rand). Tablet 768: 11 von 12, Handy 390: 10 von 12; länger sind die Themenkarten untereinander (Tablet +1317 px, Handy +2159 px, Seite 15,6 Bildschirme) und auf dem Handy «Neueste Insights» (+221 px). v2 Handy: «Im Blickpunkt» passt jetzt (vorher +128 px). Beide Übergänge, Klick in der Liste, Zurückscrollen, «Bewegung reduzieren» und v2 ohne Fehler |

## 24. Feedback-Runde 20 (27.10.2026): Themenlinien wie die Referenz

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 183 | Rückmeldung zu Runde 19 | «Ich sehe keine Unterschiede zwischen Variante 1 und 2» und «nicht annähernd wie die Referenz»; Ziel: den Effekt 1:1 herstellen | Ursachen: Auf Tablet und Handy gab es keine Bühne; auf dem Desktop deckte ein weisses Panel ein weisses auf (Kante unsichtbar), der Wechsel war ein fester Übergang statt am Scrollen gekoppelt. Neubau nach den Messwerten der Analyse (https://claude.ai/artifact/LwdWCvJZ13WPBPLMSFPcDe), eigener Code und eigene Gestaltung |
| 184 | Einrasten | «Wie Tresmares» (ersetzt Entscheid 174) | Weiches Scrollen auf der Seite (Bibliothek Lenis, nur auf Seiten mit den Themenlinien, ab 992 px, nicht bei «Bewegung reduzieren»). In der Section rastet es bei der Hälfte auf das nächste Thema ein (1,3 s); Klick in der Liste 1 s |
| 185 | Navigation | «Ausblenden» | Navigation und Knopf «Nach oben» sind ausgeblendet, solange die Bühne steht, und kommen danach zurück |
| 186 | Bildsprache | «Punktfigur + Plum-Form» | Die fünf Punktfiguren neu in 1400 px Höhe gerendert (scharf auf grossen Bildschirmen). Hinter jeder Figur eine Plum-Form aus 45°-Bändern wie das Ribbon (Band, Doppelband, Winkel, Trichter, Raster), Attribut `data-form` am Panel |
| 187 | Vorhang | «Von unten, diagonal als Schalter» (ersetzt Entscheid 175) | Standard von unten wie die Referenz (`data-uebergang="unten"`), diagonal zum Vergleich mit `/home-v3?uebergang=diagonal` |
| 188 | Aufbau | wie die Referenz | Vollbild-Panels auf Snowbank. Riesiger Titel in der Mitte, zweite Zeile versetzt; Titel aus den Themennamen abgeleitet: «Vertriebs- / performance», «Performance / & Potenzial», «Führung / & Teams», «Recruiting / & Bindung», «Digitale / Lösungen» [ROWAPA bestätigen]. Kleine Liste links oben (aktiv Manganese, andere hellgrau), Text links unten, Link rechts unten (statt Kennzahlen, es gibt keine bestätigten Zahlen je Thema). Einleitung («Was wir tun», Titel, Text, Button) bleibt über der Bühne |
| 189 | Ablauf eines Wechsels | Messwerte der Referenz | je Thema eine Fensterhöhe Scrollweg; alles hängt am Scroll-Fortschritt: Vorhang deckt von unten auf, das alte Thema dunkelt ab (Manganese, bei halbem Weg rund 42 %), Figur −20 % und Text −30 % der Fensterhöhe nach oben, das neue kommt von unten nach; alter Titel im ersten Viertel aus, neuer im letzten Viertel ein; die Form schrumpft zu vier kleinen Quadraten und wächst zur neuen Form; Markierung wechselt bei der Hälfte |
| 190 | Tablet und Handy | wie die Referenz auf dem Handy | Blöcke untereinander mit stehender Leiste; Titel ausserhalb des Blicks bei 35 %, der ausscheidende Block dunkelt leicht ab; die Form ruht hinter der Figur (verwandelt sich nicht) |
| 191 | Prüfung | an denselben Stellen wie die Analyse | Bilder eingerastet und bei halbem Wechsel neben den Referenzbildern verglichen; Video der Szene (Mausrad, Einrasten, Klick); Bühne ohne Überlappung von 992×620 bis 2560×1440; Einrasten zurück (30 %) und vor (60 %), Klick, Navigation, «Bewegung reduzieren» und Handy ohne Fehler. Grafik-Skript 1.7.0 |

## 25. Feedback-Runde 21 (27.10.2026): Form löst sich auf, Texte gross, Team und Insights

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 192 | Rückmeldung zu Runde 20 | «Jetzt kommen wir der Lösung viel näher.» Beide Vorhänge sind gut («diagonal oder auch von unten») | Standard bleibt «von unten», diagonal weiter mit `/home-v3?uebergang=diagonal` (offener Punkt 24) |
| 193 | Plum-Form deckt die Schrift | «auflösen, wenn ich das fertige Wort habe, damit ich nur noch die Schrift sehe» | Die Form zeigt sich nur noch im Wechsel: Sie setzt sich aus kleinen Quadraten zusammen, schrumpft zu vier kleinen Quadraten, wächst zur nächsten Form und zerfällt wieder in kleine Quadrate, während der neue Titel erscheint (Drift nach rechts oben, 45° wie das Ribbon). In Ruhe: nur Titel, Figur und Texte. Tablet und Handy: Die Form liegt auf der Figur, solange der Block hereinkommt, und zerfällt, bis die Figur in der Fenstermitte steht (löst offenen Punkt 22). «Bewegung reduzieren»: keine Form |
| 194 | Erklärtexte zu wenig prominent | «links und rechts davon lesen, um was es geht, aber viel grösser und viel prominenter» | Variante A gebaut: zwei Spalten unter dem Titel. Links Kicker und Kernbotschaft (H3, auf dem Laptop 33–44 px statt 20–30 px, ab 1920 px 60 px), rechts der Satz in Manganese statt Grau (18–21 px statt 14 px, ab 1920 px 24 px), darunter der Link (fett, grösser). Der Satz ist dafür in die rechte Spalte gewandert (neue Klasse `themen_beschreibung`). Die Figur ist etwas kleiner und steht etwas höher (64 % statt 74 % der Fensterhöhe), damit die Texte frei stehen |
| 195 | «in einer anderen Darstellung zeigen» | Vergleich A und B | Variante B nur als Bildentwurf (nicht in Webflow): Kernbotschaft links und Satz rechts auf Höhe des Titels. Dafür muss der Titel rund ein Drittel kleiner werden, die Texte werden kleiner als in A und stehen auf Laptops knapp am Titel. Empfehlung: A. Entscheid offen (offener Punkt 25) |
| 196 | Einrasten zu träge | eigene Prüfung im Video | Nach dem Mausrad blieb die Szene gut eine Sekunde mitten im Wechsel stehen (jeder Schritt des weichen Nachlaufs startete die Wartezeit neu). Jetzt rastet sie 150 ms nach dem letzten Mausrad-Schritt ein: fertig nach rund 1,2 s statt 2,2 s, volle Form im Stillstand rund 0,2 s statt 1 s |
| 197 | Über uns: Fotos auf v3 nicht sichtbar | reparieren | Ursache: Die Einblend-Interaktion «Team-Kacheln nacheinander» reagierte nur auf das Team-Raster der Seite v2. Auslöser jetzt die Klasse `team_grid` (gilt auf v2 und v3). Ebenso «CAS Farbfläche einblenden» (Auslöser Klasse `section_cas`, Ziele auf beiden Seiten) |
| 198 | Insights: Titel läuft in Webinare und ROWAPA TV | «diese zwei Bezeichnungen wieder unter die Kasten legen» | Die zwei Links stehen wieder unter den Karten (rechte Spalte); der stehende Titel hat die linke Spalte für sich. Gilt auf v2 und v3 (gemeinsame Klasse) |
| 199 | Prüfung | Formate, Handy, Bewegung reduzieren, Video | Ruhe ohne Überlappung von 992×620 bis 2560×1440; Ablauf in Einzelbildern; Tablet und Handy; «Bewegung reduzieren» ohne Form; Einrasten (Mausrad, Rückweg, Trackpad, Tastatur, Klick); v2 ohne Fehler. Grafik-Skript 1.8.1 |

## 26. Feedback-Runde 22 (27.10.2026): Animation flüssig, Figur im Hintergrund, Texte eingezogen und länger

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 200 | «Es stoppt dazwischen … wie ein kleiner Sprung, wo es wieder zurückläuft beim Runterscrollen» | Einrasten in Scrollrichtung wie die Referenz | Nachgestellt: Mit Pausen von 250–400 ms zwischen den Mausrad-Rasten zog das Einrasten jedes Mal zurück; nach einer ganzen Bildschirmhöhe stand die Szene wieder am Anfang. Jetzt: Wer vom stehenden Thema aus mehr als 4 % weiterscrollt, kommt zum nächsten Thema, zurück zum vorherigen; nur kleinere Bewegungen laufen zurück. Die Fahrt (1,3 s) beginnt mit dem Tempo des Scrollens und ist gegen weitere Rad-Schritte gesperrt, damit jeder Wechsel ganz abläuft. Von oben und von unten hereingescrollt gilt dasselbe. Gemessen: kein Rücklauf mehr bei Pausen von 120 bis 700 ms, Bildrate bei vierfach gedrosselter CPU 60 Bilder/s im Median |
| 201 | Grafik zu kräftig, Titel und Text verschwinden | «ein bisschen in den Hintergrund, wenn das Fenster ganz aufgescrollt ist» | Die Punktfigur ist im Wechsel kräftig und blendet auf 40 % zurück, sobald das Thema ganz offen ist (einstellbar mit `data-figur-ruhe` an der Section). Beim Hereinscrollen in die Bühne ebenso |
| 202 | Texte in den Ecken | «von den Ecken ein bisschen einziehen, diagonal mehr ins Bild» | Abstand zum Rand links/rechts rund 5 % der Breite (1440 px: 80 statt 48 px), unten 9 % der Höhe (900 px: 81 statt 45 px). Der Titel steht leicht über der Mitte (43 % der Höhe), damit die längeren Texte darunter Platz haben |
| 203 | Text rechts erweitern | «damit man sich ein besseres Bild machen kann, was wir unter den einzelnen Themen verstehen» | Je Thema ein zweiter Satz aus ROWAPAs eigener Struktur: Vertrieb mit den vier Hebeln, Potenzial mit Potenzialanalysen und Assessments, Führung mit Leadership-Trainings, Mentoring, Executive Coaching und Sparring, Recruiting mit Candidate Experience, Onboarding und Mitarbeiterbindung, Digital mit den fünf Lösungen (Texttabelle Rev. 12) [ROWAPA bestätigen] |
| 204 | «Wie machst du das auf Mobile, wo funktioniert das überhaupt?» | Erklärung und Geräteübersicht | Bühne ab 992 px Breite: Laptops, Desktops und Tablets quer (1024 und 1366 px, Wischen führt zum nächsten bzw. vorherigen Thema). Darunter (Tablet hoch, Handy): Blöcke untereinander mit stehender Leiste, die Form zerfällt beim Hereinkommen, die Figur bleibt kräftig (sie steht dort nicht hinter dem Titel) |
| 205 | «mach bitte auch noch den diagonalen Entwurf» | Entwurf C (Bild und Video, nicht in Webflow) | Vorhang diagonal 45°, Kernbotschaft unten links, Erklärung und Link oben rechts, Titel dazwischen. Auf kurzen Laptops (1366×657) wird es zwischen Titel und Erklärung eng; dort bräuchte C einen etwas kleineren Titel. Entscheid offen (offener Punkt 25) |
| 206 | Feinschliff | eigene Prüfung | Am Ende einer Fahrt blieb wegen halber Pixel ein Rest stehen, das nächste Thema schaute unten minimal hervor (dünne Textzeile am Rand); jetzt gerundet. Die Plum-Form sitzt mittig auf dem Titel. Grafik-Skript 1.9.0 |

## 27. Feedback-Runde 23 (27.10.2026): Variante diagonal, Bilder Meine Entwicklung, Fragen Farbfolge und Titel

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 207 | «Kannst du mir als Variante noch diagonal anbieten?» | live umschaltbar | Entwurf C ist jetzt in Webflow gebaut (Zusatzklassen `is-diagonal` an `themen_titel`, `themen_unten`, `themen_text`, `themen_aktion`) und mit `/home-v3?anordnung=diagonal` einschaltbar, zusammen mit dem diagonalen Vorhang `/home-v3?anordnung=diagonal&uebergang=diagonal`. Standard bleibt A. Auf 992–1279 px steht der Titel tiefer und etwas kleiner, damit die Erklärung oben rechts frei bleibt. Ohne Überlappung von 992×620 bis 2560×1440. Grafik-Skript 1.10.0 |
| 208 | Meine Entwicklung: Bilder grösser, auch auf 13 und 14 Zoll | umgesetzt (v2 und v3, gemeinsame Karten-Varianten) | Bildhöhe in den drei Varianten neu `clamp(9rem, 42svh - 7.5rem, 22rem)` statt `clamp(7rem, 30svh - 5rem, 17rem)`: 13 Zoll (1280×800) 216 statt 160 px, 13-Zoll-Air (1470×956) 282 statt 207 px, 14 Zoll (1512×982) 292 statt 215 px, 1920×1080 334 statt 244 px. Die Karten passen samt Link weiterhin in einen Bildschirm |
| 209 | Frage: Passt die Farbfolge von oben nach unten? | Empfehlung, nur Entwurf | Heute wechselt der Grund in den ersten drei Bildschirmen fünfmal (dunkel, weiss, hellblau, grau, weiss, grau). Vorschlag mit drei Änderungen: «Was uns antreibt» auf Weiss (Logos und Antrieb bilden ein ruhiges weisses Kapitel), «Unsere Erfolge» auf Hellblau, Einleitung «Lösungen für Unternehmen» auf Grau wie die Bühne. Logos auf Hellblau wären auch möglich, brauchen aber Logo-Dateien mit transparentem Hintergrund (Raiffeisen, Visa zeigen heute einen weissen Kasten). Entscheid offen (offener Punkt 27) |
| 210 | Frage: Titel «Lösungen für Unternehmen» frei stehend lassen oder mitnehmen? | Empfehlung, nur Entwurf | Empfehlung: Einleitung bleibt als Kapitelanfang (auf Grau, siehe 209) und der Titel steht zusätzlich als Kicker über der Themenliste oben links, so bleibt er während aller fünf Themen sichtbar. Oben rechts ist möglich, steht aber von der Liste getrennt und kollidiert mit Variante C (dort steht oben rechts die Erklärung). Entscheid offen (offener Punkt 28) |

## 28. Feedback-Runde 24 (27.10.2026): Farbfolge, Titel über der Themenliste, Variante A

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 211 | Farbfolge (Vorschlag Runde 23) | «so umsetzen, aber noch nicht auf V2» | Auf `/home-v3`: «Was uns antreibt» weiss (`theme-hell`), «Unsere Erfolge» hellblau (`theme-sea`), Einleitung «Lösungen für Unternehmen» grau wie die Bühne (`theme-soft`). Folge jetzt: dunkel · weiss (Logos, Antrieb) · hellblau · grau (Lösungen) · weiss · dunkel · weiss · dunkel · grau · weiss · hellblau · dunkel. `/home-v2` unverändert |
| 212 | Titel «Lösungen für Unternehmen» | Empfehlung umsetzen | Zusätzlich als Kicker über der Themenliste oben links (Klasse `text-style-kicker is-liste`), bleibt während aller fünf Themen sichtbar; auf Tablet und Handy ausgeblendet (dort steht die Leiste waagrecht). Die Einleitung bleibt. Für Bildschirmleser ausgeblendet, weil der Titel direkt darüber schon als H2 steht. Von 992×620 bis 1920×1080 ohne Berührung mit dem Titel |
| 213 | Textanordnung | «so wie vorher, also nicht diagonal … sozusagen die Variante A» | A bleibt (ersetzt offenen Punkt 25). Der Schalter `?anordnung=diagonal` und die Klassen `is-diagonal` bleiben vorerst stehen und gehen beim Aufräumen weg (offener Punkt 17) |

## 29. Feedback-Runde 25 (27.10.2026): Logo-Band dunkel, ROWAPA Digital entlasten, Insights luftiger

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 214 | Logos auf dunklem Grund, weiss, an den Header angeglichen | umgesetzt (nur v3) | Logo-Band im Ton der Header-Unterkante (neue Farbvariable «Header Unterkante» #344F76, Ende des Header-Verlaufs), Logos weiss über einen Filter am Laufband (`logos_track is-hell`: invert + brightness, Mischmodus «screen»). So erscheinen auch Logos mit weissem Bildhintergrund (Raiffeisen, Visana) ohne Kasten. Randverläufe im selben Ton. Laufband unverändert. Folge jetzt: Header und Logos dunkel · Antrieb weiss · … |
| 215 | ROWAPA Digital: Titel | «nur schreiben: Digitale Lösungen für Ihren Alltag» | Titel auf v3 als Überschreibung der Komponente gesetzt; v2 behält den alten Titel |
| 216 | ROWAPA Digital zu überfüllt, Fundament und zwei Buttons gedrängt | Vorschlag, nur Entwurf | Ein Button «Demo vereinbaren», daneben schlichter Textlink «Alle digitalen Lösungen →»; Kasten «Das Fundament» entfällt, die Aussage steht im Einleitungssatz («… auf einer gemeinsamen Wissensplattform …»), die Kugel ist schon mit «Wissensplattform» beschriftet; Titel in zwei Zeilen; Karten nur mit Pfeil statt «Mehr zu …». Der Satz «Jede Lösung ist einzeln buchbar.» würde auf die Übersichtsseite wandern. Section 3–5 % kürzer. Entscheid offen (offener Punkt 29) |
| 217 | Insights: Live-Webinare und ROWAPA TV dezenter | umgesetzt (nur v3) | Statt weisser Kästen schlichte Zeilen mit feiner Linie oben und Plum-Pfeil (`link-teaser is-dezent`, `icon-box is-dezent`); die Section wirkt leichter |

## 30. Feedback-Runde 26 (27.10.2026): ROWAPA Digital ruhiger umgesetzt

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 218 | ROWAPA Digital ruhiger (Entwurf 216) | «Digitalen Entwurf so umsetzen» | Nativ umgesetzt, nur v3: ein Button «Demo vereinbaren», daneben Textlink «Alle digitalen Lösungen →»; Kasten «Das Fundament» ausgeblendet; Einleitung neu (Wissensplattform im Satz); Titel zweizeilig mit festem Umbruch; Karten nur mit Pfeil, die ganze Karte bleibt verlinkt; etwas mehr Luft über den Karten. Section live 3–11 % kürzer als auf v2 (1920×1080: 990 statt 1016 px; 1440×900: 818 statt 868 px; 1280×800: 699 statt 776 px; Handy 390: 703 statt 749 px), v2 unverändert |
| 219 | Wie gebaut | über Schalter und eine Variante, keine Kopie der Komponente | Neue Schalter in «Section Digital»: «Hinweis anzeigen», «Button 2 anzeigen», «Textlink anzeigen», «Karten-Linktext anzeigen»; in «Card Feature»: «Linktext anzeigen». Neue Variante «Karten · ruhig» (nur Abstand über den Karten). Der Titel nimmt jetzt Zeilenumbrüche an (Enter). Die Voreinstellungen entsprechen dem bisherigen Stand, darum ändern sich v2 und die übrigen Seiten nicht |
| 220 | Satz «Jede Lösung ist einzeln buchbar.» | «Satz auf die Übersichtsseite» | Auf v3 aus der Einleitung entfernt. Die Übersichtsseite `/themen/digitale-loesungen` gibt es in Webflow noch nicht (sie entsteht in Stufe 3 als Themenlinie «Digitale Lösungen»). Der Satz ist dort als Pflichtinhalt vorgemerkt (`01_cms_architektur.md`, 3.1). v2 behält ihn |

## 31. Feedback-Runde 27 (27.10.2026): Entscheide, Header, Fotorahmen, Abstände, Megamenü

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 221 | v2 oder v3 | Entscheid folgt später, Tendenz v3 | offener Punkt 14 bleibt offen (Tendenz v3) |
| 222 | Übergang zwischen den Themen | «von unten ist soweit in Ordnung» | entschieden: Vorhang von unten. Der Schalter diagonal (`?uebergang=diagonal`) und die Zusatzklassen `is-diagonal` kommen beim Aufräumen weg (offener Punkt 17) |
| 223 | Texte der Themen (Kernbotschaften, erweiterte Erklärtexte) | «im Moment so übernehmen, können jederzeit geändert werden» | vorläufig übernommen (Texttabelle Rev. 9 und 12); offene Punkte 20, 23 und 26 geschlossen |
| 224 | Header: Kicker «Beratung · Training · Digitale Lösungen» | entfernen (Wunsch ROWAPA), Bau nach Freigabe der Runde | Entwurf: Titel rückt rund 25 px höher, der Header wirkt ruhiger (`stufe2-screens/runde27/header-heute-ohne-kicker-ruhig.png`) |
| 225 | Header: Bewegung (Punktemeer, wechselnde Unterstreichung, Logo-Band) zu viel? | Vorschlag, nur Entwurf | Drei Bewegungen laufen gleichzeitig und ohne Ende; am stärksten zieht die wechselnde Unterstreichung, die zwei von drei Zeilen grau macht. Vorschlag: Unterstreichung läuft nur einmal durch (unter 5 s), danach alle drei Zeilen weiss mit kurzer Plum-Linie wie bei den Section-Titeln; Logo-Band bleibt, etwas langsamer, hält beim Darüberfahren an; Punktemeer bleibt. So erfüllt der Header auch die Regel WCAG 2.2.2 (bewegte Inhalte über 5 s brauchen eine Möglichkeit zum Anhalten) besser |
| 226 | Unsere Erfolge: Fotorahmen dunkelblau, frischer? | Vorschlag, nur Entwurf | sechs Farben verglichen (`erfolge-fotorahmen-farben.png`): Manganese (heute), Weiss, Great Serpent, Sea Cliff, Plum, Plum als Linie. Empfehlung Weiss (am frischesten auf dem hellblauen Grund), Alternative Plum als feine Linie |
| 227 | Weissraum zwischen den Sections | geprüft und gemessen, Vorschlag | Abstand zwischen den Inhalten zweier Sections bei 1440 × 900 (Median): BCG 110 px, Roland Berger 113, Vontobel 130, Korn Ferry 137, **ROWAPA v3 162**, Simon-Kucher 221, Oliver Wyman 331. Handy 390 px: BCG 66, Bain 72, Simon-Kucher 83, Vontobel 108, Roland Berger 114, Oliver Wyman 176, **ROWAPA 152**. Nicht messbar: Bain Desktop, Pictet (gesperrt), Tresmares (Szenen-Aufbau). Ergebnis: Desktop im Mittelfeld, Handy grosszügig. Enger sind drei Übergänge (Header → Antrieb 113 px, Über uns → Meine Entwicklung 127 px, um «Im Blickpunkt» 82–104 px) und der Abstand Titel → Inhalt (36 px). Vorschlag: Desktop +10 % (`clamp(3rem, 10svh, 8rem)`, 1440 × 900: 180 statt 162 px), Titel → Inhalt `clamp(2rem, 5svh, 4rem)`, die drei Übergänge angleichen, Handy 64 statt 76 px je Seite. Folge: bei 1440 × 900 sind Erfolge, Digital und Meine Entwicklung leicht höher als ein Bildschirm (Erfolge und Meine Entwicklung schon heute); Seite 1,4 % länger |
| 228 | Megamenü: kleine Menüs wirken leer, «Unsere Kunden» bekommt Unterpunkte | drei Vorschläge, nur Entwurf | A «Angepasst» (kleine Menüs als schmales Panel unter dem Punkt, mit Kurzbeschrieb und kleinem Bild; «Was wir tun» bleibt), B «Bühne» (alle Menüs gleich: links dunkle Einleitung mit Satz und «Zur Übersicht», Mitte Links mit Kurzbeschrieb, rechts Bild), C «Editorial» (ohne Bilder, nummerierte Spalten, grosse Schrift, Höhe passt sich an). Texte aus den bestehenden Menükarten; für «Unsere Kunden» Unterpunkte aus der Seitenplanung (Branchen, Case-Stories, Kundenstimmen) und ein neuer Satz [ROWAPA bestätigen]. Empfehlung B. Bilder `megamenue-a-angepasst.png`, `megamenue-b-buehne.png`, `megamenue-c-editorial.png` |

## 32. Feedback-Runde 28 (27.10.2026): Header ruhig, Fotorahmen Plum, Abstände, Megamenü «Bühne»

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 229 | Header: Kicker (Entwurf 224) | «Du darfst den Kicker herausnehmen» | umgesetzt, nur v3: neuer Schalter «Kicker anzeigen» in «Section Hero Home» (Voreinstellung an, darum v2 und die übrigen Seiten unverändert) |
| 230 | Header: Unterstreichung (Entwurf 225) | «die Unterstreichung auf einen umstellen» | umgesetzt, nur v3: neue Variante «A · Signatur ruhig» mit eigener Interaktion «Hero-Titelzeilen einmal». Die drei Zeilen werden nacheinander einmal unterstrichen (fertig nach rund 4,5 s), danach stehen alle drei weiss, darunter eine kurze Plum-Linie wie bei den Section-Titeln. Wer «weniger Bewegung» eingestellt hat, sieht sofort den Endzustand. v2 behält die wechselnde Unterstreichung |
| 231 | Header: Logo-Band | «vielleicht etwas langsamer» | umgesetzt, nur v3: ein Durchlauf 60 statt 45 s (ein Drittel langsamer), hält beim Darüberfahren weiter an, bei «weniger Bewegung» steht es still. Dafür gibt es zwei Interaktionen: «Logo-Laufband ruhig (v3)» und die bisherige für alle übrigen Seiten (beim Aufräumen wieder zusammenführen, offener Punkt 17) |
| 232 | Header: Punktemeer | «auf jeden Fall behalten» | unverändert |
| 233 | Unsere Erfolge: Fotorahmen (Entwurf 226) | «Plum mit Linie» | umgesetzt, nur v3: Zusatzklasse `is-plum-linie` auf allen acht Folien. Der Rahmen ist eine feine Plum-Linie, 24 px nach links oben versetzt (Handy 16 px), innen in der Farbe des Hintergrunds. Linie 1 px statt 2 px wie im Entwurf, gemäss Entscheid 140 (rote Linien 1 px) |
| 234 | Weissraum (Entwurf 227) | «so umsetzen» | umgesetzt: Abstand oben und unten je Section Desktop `clamp(3rem, 10svh, 8rem)` (vorher `clamp(3rem, 9svh, 7rem)`), Handy 64 statt 76 px, Titel → Inhalt `clamp(2rem, 5svh, 4rem)` (vorher `clamp(1.5rem, 4svh, 3rem)`). **Gilt für alle Seiten, auch v2.** Ein eigener Abstandsmodus nur für v3 war geplant, die Webflow-Schnittstelle nimmt in Variablen-Modi aber keine `clamp()`-Werte an. Live gemessen (Median zwischen den Inhalten zweier Sections): 1440 × 900 jetzt 180 px (vorher 162), Handy 390 jetzt 128 px (vorher 152), auf v2 und v3 gleich. Damit liegt ROWAPA auf dem Desktop zwischen Korn Ferry (137) und Simon-Kucher (221), auf dem Handy zwischen Roland Berger (114) und Oliver Wyman (176) |
| 235 | Die drei engeren Übergänge | angleichen (Teil von 234) | Nur «Über uns → Meine Entwicklung» angepasst (neue Zusatzklasse `padding-section-large is-linie`: voller Abstand mit 1-px-Linie statt der verkürzten Anbindung), nur v3. Header → Antrieb und die Übergänge um «Im Blickpunkt» bleiben: dort trennt ein Farbwechsel bzw. ein vollbreites Bild, der gemessene Abstand täuscht. Ein Bildschirm: bei 1440 × 900 passen alle Sections ausser Themen (Scroll-Szene) und Meine Entwicklung (929 px, 29 px zu hoch; bei 1280 × 800 22 px). Erfolge (886 px) und Digital (836 px) passen, anders als im Entwurf befürchtet. **Korrigiert in 239:** gemessen war die ganze Section mit Weissraum, der Inhalt passt |
| 236 | Megamenü (Entwurf 228) | «B und Texte passen» | Variante B «Bühne» umgesetzt, nur v3: neue Komponente «Navbar · Bühne» (Kopie der Navbar), alle fünf Menüs gleich aufgebaut: links dunkle Einleitung (Kicker, Satz, «Zur Übersicht →», wo es eine Übersichtsseite gibt), in der Mitte die Links mit Kurzbeschrieb (wo vorhanden), rechts Bild mit Text (ab 1280 px; von 992 bis 1279 px ausgeblendet, damit die Links Platz haben). Geprüft bei 1024, 1280, 1440 und 1920 px: kein Text läuft über. Das Handy-Menü ist unverändert. v2 und die übrigen Seiten behalten die bisherige Navbar; die alte Navbar wurde nur auf v3 entfernt |
| 237 | «Unsere Kunden» mit Unterpunkten | Texte bestätigt («Texte passen, mit ROWAPA») | umgesetzt, nur v3: «Unsere Kunden» ist ein Menü mit «Branchen», «Case-Stories» und «Kundenstimmen», je mit Kurzbeschrieb und Vorschaubild; Satz «Banken, Versicherungen und Krankenkassen, die mit ROWAPA arbeiten, und was sie erreicht haben.» Die Links führen auf `/referenzen#branchen`, `#cases`, `#stimmen`. Die Seite `/referenzen` mit diesen Abschnitten entsteht später (offener Punkt 31). Offene Frage 16 und Rev. 16 geschlossen (Texttabelle Rev. 17) |
| 238 | Nebenwirkung Aufräumen | – | Im Variablen-Satz «Spacing» ist vom Versuch (234) ein leerer Modus «Luft (v3)» übrig. Die Schnittstelle kann Modi nicht löschen: im Designer unter Variables → Spacing → Modus «Luft (v3)» → Delete entfernen (30 Sekunden, ohne Folgen) |

## 33. Feedback-Runde 29 (27.10.2026): 13-Zoll-Laptop, Mauszeiger, Hover-Videos, Themen-Szene mit Trackpad

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 239 | «Meine Entwicklung» höher als ein Bildschirm? (235) | keine Anpassung («auf meinem 13-Zoll-Laptop alles im Bild») | Messung korrigiert: Die 929 px galten für die ganze Section mit Weissraum oben und unten (je 90 px) in einem Fenster von 1440 × 900 ohne Browserleisten. Der Inhalt vom Titel bis zu den Karten ist rund 750 px hoch und passt; die Grössen wachsen und schrumpfen mit der Fensterhöhe |
| 240 | Mauszeiger «wie ein normaler Cursor, ohne Animation» und Hover-Videos in «Meine Entwicklung» laufen nicht (Chrome, v3, am Strom) | Fehler, behoben | Ursache: Chrome meldet Laptops mit Touchscreen als Touch-Gerät. Das Skript startete Zeiger und Hover-Videos nur, wenn das Hauptzeigegerät eine Maus ist; die Themen-Szene prüft das nicht und lief darum. **ROWAPA Grafik 1.10.1:** Zeiger, Hover-Videos und die Hover-Effekte von Figuren und Treppe starten, sobald irgendein Zeigegerät mit Maus oder Trackpad vorhanden ist; Berührungen mit dem Finger werden je Ereignis übergangen (Zeiger ausgeblendet, kein Video). Gilt auf allen Seiten (v2 und v3). Live geprüft: normaler Laptop und nachgestellter Touchscreen-Laptop je mit Zeiger und drei Videos, Handy ohne Zeiger und ohne Videos, keine Fehlermeldungen |
| 241 | Themen-Szene beim zweiten Durchgang weniger rund? | geprüft, Vorschlag | Mit Mausrad: erster und zweiter Durchgang (hinunter und hinauf) gleich, jedes Thema rastet genau ein, 60 Bilder pro Sekunde, die Seite verschiebt sich nicht. Mit Trackpad-Wisch (Nachlauf rund 1 s): Die Szene gleitet zuerst frei bis etwa zur Hälfte, stockt, bis der Nachlauf endet, und fährt erst dann ins nächste Thema; ein kräftiger Wisch überspringt ein Thema (2 → 4). Je nach Wisch fühlt sich derselbe Durchgang darum anders an. Vorschlag «Wisch-Einrasten»: Die Fahrt beginnt sofort mit dem Wisch, ein Wisch = ein Thema, der Nachlauf wird geschluckt; Mausrad wie heute. Bau nach Freigabe (offener Punkt 34) |

## 34. Feedback-Runde 30 (27.10.2026): Wisch-Einrasten zum Vergleichen, Diagnose, Persönliches in «Was uns antreibt»

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 242 | Wisch-Einrasten (Vorschlag 241) | «bau das Wisch-Einrasten mit Umschalter» | gebaut, **ROWAPA Grafik 1.11.0**: Mit `?einrasten=wisch` in der Adresse fährt ein Wisch auf dem Trackpad oder ein Rad-Stoss sofort genau ein Thema weiter; der Nachlauf und weitere Rad-Schritte derselben Bewegung werden übergangen; von oben hält die Szene am ersten Thema an, am letzten Thema führt der nächste Wisch hinaus. Ohne Umschalter bleibt alles wie bisher. Live gemessen mit Trackpad-Wischen (sanft, kräftig, hinauf) und Rad-Stössen (1, 4, 8): jedes Mal genau ein Thema, kein Stocken, nichts übersprungen. Unterschied zu heute auch mit dem Mausrad: Die Fahrt beginnt sofort, viele Rad-Schritte am Stück bringen ein Thema weiter statt zwei. Entscheid nach dem Vergleich (offener Punkt 34) |
| 243 | «sehe immer noch keine Videos und keine animierte Maus» | weiter untersucht | In allen Tests laufen Zeiger und Videos (Chrome, v2 und v3, normaler und nachgestellter Touchscreen-Laptop); die Seite lädt in rund 2 s. Die Ursache auf dem Gerät von ROWAPA ist offen. Neu: Diagnose-Anzeige mit `?diagnose` in der Adresse (unten links: Skript-Fassung, Start, Maus/Touch laut Browser, «Bewegung reduzieren», Zeiger, Hover-Videos, Themen-Szene). Erscheint sie nicht, lädt das Skript auf diesem Gerät gar nicht (z. B. Netzwerk- oder Werbefilter). Zusätzlich startet das Skript jetzt spätestens 5 s nach dem Aufbau der Seite, auch wenn eine Datei hängt (offener Punkt 35) |
| 244 | Bild von uns oder etwas Persönliches in «Was uns antreibt»? | Einschätzung, nichts gebaut («erst Feedback») | Empfehlung ja: Die Section spricht heute nur mit Aussagen und Zahlen; links unter dem Titel ist freier Platz. Drei Wege: A «Persönliches Wort» (kleines Porträt, ein bis zwei Sätze der Geschäftsleitung, Name und Funktion; Text von ROWAPA), B echtes Foto aus einem Training oder Workshop mit feiner Plum-Linie wie bei «Unsere Erfolge», C Video «Wer wir sind» als Bild mit Play-Knopf. Empfehlung A; B als Alternative; C nicht, weil das Video schon bei «Über uns» steht. Team-Porträts nicht wiederholen (Team-Mosaik folgt bei «Über uns») (offener Punkt 36) |

## 35. Feedback-Runde 31 (27.10.2026): Ursache Zeiger und Videos gefunden, Entwurf «Persönliches Wort»

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 245 | Diagnose-Anzeige auf dem Gerät von ROWAPA | Ursache gefunden, behoben | Die Anzeige zeigte: Chrome 156, Fenster 3440 × 1271, 10 Touchpunkte, der Browser meldet **kein** Gerät mit Maus (auch nicht «irgendein Gerät»), obwohl mit der Maus bedient wird (letzte Eingabe: mouse). **ROWAPA Grafik 1.11.1:** Meldet der Browser keine Maus, schalten sich Zeiger, Hover-Videos und die Hover-Effekte von Figuren und Treppe bei der ersten echten Mausbewegung ein. Live geprüft in der Nachstellung (Gerät meldet nur Touch, Bedienung mit Maus): Zeiger an, drei Videos laufen; normaler Laptop und Laptop mit Touchscreen weiterhin in Ordnung; Handy ohne Zeiger und Videos. Bestätigung durch ROWAPA auf dem eigenen Gerät offen (offener Punkt 35) |
| 246 | Webflow MCP Bridge App wieder verbunden – braucht Claude sie? | Hinweis | Für die laufende Arbeit nicht nötig: Skripte, Veröffentlichen, Stile, Elemente und Interaktionen gehen seit Webflow MCP 2.0 über die Schnittstelle ohne Designer. Offen lassen schadet nicht; braucht eine Änderung den Designer, meldet Claude das |
| 247 | Entwurf A «Persönliches Wort» in «Was uns antreibt» | «Entwurf A», Porträt von ROWAPA geliefert | Zwei Entwürfe als Bild (nichts gebaut), Block links unter dem Titel: **A1 kompakt** (Porträt 5,5 × 7 rem neben Satz, Name und Funktion; Section bei 1440 × 900 +32 px, 824 statt 792 px) und **A2 markant** (Porträt 9 × 12 rem mit feiner Plum-Linie wie bei «Unsere Erfolge»; +128 px, bei 1280 × 800 rutscht «Warum ROWAPA» teilweise unter den Bildrand). Handy: Block zwischen Titel und Einleitung. Satz als Vorschlag, Name und Funktion fehlen (Texttabelle Rev. 18). Die Bilder mit dem Porträt liegen wegen des öffentlichen Repositorys nicht im Repository, sie gingen im Chat an ROWAPA. Das Porträt ist noch nicht in Webflow (offener Punkt 36) |

## 36. Feedback-Runde 32 (27.10.2026): Porträt hochgeladen, weitere Entwürfe für «Was uns antreibt» und «Warum ROWAPA»

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 248 | Entwurf A: A1/A2, Name und Funktion, Satz | «brauchen wir nicht» | Das «Persönliche Wort» mit Name und Satz wird nicht weiterverfolgt (Verständnis Claude, bestätigen). Das Porträt darf verwendet werden: hochgeladen nach Webflow, Ordner «05 Team», Asset `6ae1051d7b134954def851d2` (`portrait-persoenliches-wort.webp`, noch auf keiner Seite). Die Entwurfsbilder der Runde 31 liegen jetzt mit Zustimmung im Repository (`stufe2-screens/runde31/`) |
| 249 | Weitere Gestaltungsmöglichkeiten für «Was uns antreibt» und «Warum ROWAPA» | drei Entwürfe als Bild, nichts gebaut | Befund heute: «20 Jahre Finanzbranche» steht dreimal (Einleitung, Zahl, Punkt 01), Zahlen und Gründe stehen getrennt. **B «Belege»**: jeder Grund bekommt seinen Beleg als grosse Zahl (20 Jahre · 2× gemessen · 150 Jahre Erfahrung · 3 in einer Hand), die Zahlenreihe entfällt, Einleitung ohne den ersten Satz; Section 724 statt 792 px (1440 × 900), Handy 1029 px. **C «Manifest-Zeilen»**: Titel über die ganze Breite, Zahlen als Liste mit feinen Linien, Gründe als ruhige Tabelle (Nummer, Titel, Text); 873 px, Handy 1131 px. **D «Bild und Haltung»**: echtes Foto aus einem Training (`erfolg-2`) mit Plum-Linie wie bei «Unsere Erfolge», daneben Titel, Einleitung und Zahlen, Gründe als helle Karten (Pastel Snowbank); 913 px, Handy 1375 px. Empfehlung B (kürzer, keine Wiederholung, jede Aussage belegt, passt zu «Messbare Entwicklung»); D, wenn ein Bild gewünscht ist (statt des Trainingsfotos geht auch das Porträt). Bilder `stufe2-screens/runde32/`, Texte Texttabelle Rev. 19 |

## 37. Feedback-Runde 33 (27.10.2026): Wisch-Einrasten Standard, Farbkonzept als Variante

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 250 | Wisch-Einrasten (242) | «Wischeffekt bleibt» | **ROWAPA Grafik 1.12.0:** Wisch-Einrasten ist Standard (ein Wisch oder Rad-Stoss = sofort ein Thema, Nachlauf übergangen). Das frühere Einrasten bleibt zum Vergleichen über `?einrasten=rad` erreichbar und kommt beim Aufräumen weg. Live geprüft auf v3 ohne Zusatz in der Adresse. Offener Punkt 34 geschlossen |
| 251 | Farbkonzept mit klarer Rollenverteilung (Vorlage ROWAPA: Manganese Black tragend, Great Serpent für Grafiken und Icons, Sea Cliff für Kontakt und Hervorhebungen, Plum für Aufmerksamkeit, Pastel Snowbank zur Gliederung, Weiss als Hauptfläche) | «als Variante gebaut» | Neue Seite **`/home-v3-farben`** («Home v3 · Farbkonzept», Kopie von v3); v3 bleibt unverändert (geprüft). Abgleich: Header, Logos, «Was uns antreibt», Vorgehen, Digital, Über uns, Insights, FAQ und Kontakt entsprachen dem Konzept schon. Geändert nur auf der Variante: **Unsere Erfolge** Pastel Snowbank statt Hellblau (Fotorahmen mit Plum-Linie angepasst); **Themenlinien** Punktfiguren neu gerendert mit Plum als Hauptfarbe, Sea Cliff und Mischblau untergeordnet, Figur in Ruhe 70 % statt 40 % sichtbar, feine Linie zwischen Erfolge und Themen (beide Snowbank); **Meine Entwicklung** alle drei Karten Snowbank statt Hellblau, Grau und Hell-Plum; **Im Blickpunkt** weiss ohne dunkle Fläche, Schrift dunkelblau; **Footer** Manganese Black statt Manganese Deep (#111D2C, nicht in der Palette des Style Guides). Bilder `stufe2-screens/runde33/` (je «heute» und «Farbkonzept») |
| 252 | Lesbarkeit | geprüft | Alle Texte der Variante gegen ihren Hintergrund gemessen: keine neuen Mängel; «Im Blickpunkt» jetzt dunkel auf weiss. Bestehend auf v3 und der Variante: Textlinks in Great Serpent erreichen auf Snowbank 4,3:1 und auf dem hellen Sea Cliff 4,1:1, knapp unter dem Mindestwert 4,5:1 für kleine Schrift. Vorschlag passend zum Konzept (Great Serpent für Grafiken und Icons): Textlinks in Manganese Black. Nicht gebaut (offener Punkt 37) |

---

## 38. Feedback-Runde 34 (27.10.2026): «Im Blickpunkt» in Snowbank

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 253 | «Im Blickpunkt» (CAS) mit dem gleichen Grau wie die folgende Section, ohne Einblenden | umgesetzt (nur Variante `/home-v3-farben`) | `section_cas theme-soft`: Pastel Snowbank wie «Neueste Insights», fest hinterlegt; die dunkle Fläche bleibt aus (`cas_farbe is-aus`), es wird nichts eingeblendet. Lesbarkeit gemessen (Desktop und Handy): Titel 10,9:1, Einleitung 5,8:1, Kicker Plum 5,9:1, Button weiss auf Plum 7,2:1. Der Wechsel weiss → Snowbank liegt jetzt zwischen «Meine Entwicklung» und «Im Blickpunkt»; «Im Blickpunkt» und Insights gehen ohne Linie ineinander über. v3 unverändert (`theme-tiefsee`). Bilder `stufe2-screens/runde34/` |

---

## 39. Feedback-Runde 35 (27.10.2026): Linie unter «Im Blickpunkt», Textlinks Manganese, Einschätzung Plum-Form

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 254 | Grauer Strich an der Unterkante von «Im Blickpunkt» (Unterkante Foto) als Abgrenzung zu den Insights | umgesetzt (nur Variante) | `section_cas theme-soft` mit Linie unten, 1 px, Variable «Manganese Linie» (gleich wie zwischen Erfolge und Themen). Desktop: Linie genau an der Unterkante des Fotos über die ganze Breite; Handy: unter den Buttons. Bilder `stufe2-screens/runde35/cas-linie-*` |
| 255 | Textlinks in Manganese Black statt Great Serpent (Vorschlag 252) | umgesetzt (nur Variante) | Neue Variablen-Sammlung **«Textlinks»** mit «Textlink hell» (Grundwert Great Serpent, Modus «Manganese» = Manganese Black). Theme › Link zeigt in den hellen Modi (Base, Soft, Sea Cliff) auf «Textlink hell»; die dunklen Modi bleiben (Sea Cliff bzw. Weiss). Auf `/home-v3-farben` schaltet die Zusatzklasse `main-wrapper is-farbkonzept` den Modus «Manganese» ein. Gemessen: 14 Textlinks der Variante 10,5–13,2:1 (vorher 4,1–5,2:1); v2 und v3 unverändert in Great Serpent (geprüft). Bei Übernahme genügt ein Klick: Grundwert von «Textlink hell» auf Manganese Black, dann gilt es auf allen Seiten |
| 256 | Plum-Form in den Themenlinien (Quadrate und Vierecke im Wechsel): wertvoll oder weglassen? | Einschätzung, nichts gebaut | **Empfehlung: weglassen, alles andere bleibt** (Punktfiguren, Vorhang, Titel, Texte, Einrasten). Gründe: Die Form liegt im Wechsel über Titel und neuer Figur und verdeckt sie; mit dem Wisch-Einrasten dauert ein Wechsel 1,1 s, die Form durchläuft darin vier Phasen (zusammensetzen 0,26 s, schrumpfen 0,17 s, wachsen 0,16 s, zerfallen 0,3 s, berechnet aus der Einrast-Kurve) und wirkt eher unruhig als lesbar; sie trägt keinen Inhalt (die Figuren zeigen das Thema); im Farbkonzept sind die Figuren schon Plum, die Form verdoppelt die Akzentfarbe auf grosser Fläche; sie entsteht im Skript und lässt sich in Webflow nicht pflegen. Was wegfällt: die bewegte Anspielung auf das 45°-Ribbon in dieser Section. Umsetzung bei Zustimmung: Schalter im Skript (Attribut an der Section), zuerst auf der Variante. Bilder `stufe2-screens/runde35/vergleich-plumform.png` (offener Punkt 38) |

---

## 40. Feedback-Runde 36 (27.10.2026): Farbkonzept Standard, Schalter Plum-Form, «Was uns antreibt» nach Tresmares

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 257 | Plum-Form in den Themenlinien | «weglassen mit Umschalter, zuerst zeigen» | **ROWAPA Grafik 1.13.0** (alle Seiten): `?plumform=aus` in der Adresse oder `data-plumform="aus"` an `section_themen` blendet die Plum-Form aus; Figuren, Vorhang, Titel und Einrasten bleiben gleich. Standard vorerst «an», damit beide Fassungen nebeneinander zu sehen sind: `/home-v3` (mit) und `/home-v3?plumform=aus` (ohne). Live geprüft (5 Formen sichtbar bzw. 0). Nach dem Ansehen: `data-plumform="aus"` an der Section setzen (offener Punkt 38) |
| 258 | Farbkonzept mit Textlinks | «übernehmen wir als Standard für alle Seiten» | **v3** wie `/home-v3-farben`: Erfolge Snowbank mit Plum-Rahmen, Themen Snowbank mit Plum-Figuren, Figur in Ruhe 70 % und Linie, Meine Entwicklung Snowbank-Karten, Im Blickpunkt Snowbank mit Linie unten, dunkle Fläche aus. **Alle Seiten:** Textlinks Manganese Black (Grundwert von «Textlink hell»), Footer Manganese Black (`footer_component theme-kontrast` statt `theme-tiefsee`). Gemessen: v3 und Variante in allen 14 Sections, Links, Figuren und Rahmen gleich; v2 hat Footer und Links neu, die Section-Farben von v2 bleiben (v2 wird voraussichtlich nicht weitergeführt, offener Punkt 14). `/home-v3-farben` ist damit überholt (Löschen nur mit Freigabe, offener Punkt 17) |
| 259 | Referenz Tresmares: Scroll-Effekt und Aufteilung ab dem Header und der weissen Fläche | analysiert | Die Seite ist aus der Cloud-Umgebung weiterhin nicht erreichbar (Verbindung wird beim Verbindungsaufbau abgebrochen, wie Entscheid 171). Muster aus den drei Bildern von ROWAPA und der Analyse von Runde 20: links ein kurzer Text, der beim Scrollen stehen bleibt; rechts hohe Kacheln in zwei Spalten mit feinen Linien, die zweite Spalte um rund 40 % einer Kachel nach unten versetzt, oben gross die Zahl in Rot, unten die Bezeichnung; danach ein zentrierter Satz, der sich beim Scrollen Buchstabe für Buchstabe von blass zu voll einfärbt |
| 260 | Zwei, drei Varianten für «Was uns antreibt» | drei Varianten gebaut (Kopien von v3, nur diese Section anders) | **A «Kacheln»** `/home-v3-antrieb-a`: links stehend Kicker, Titel, Einleitung; rechts Kennzahlen (20, 100 %, 150) und, versetzt, «Warum ROWAPA» 01–04 als Kacheln. **B «Aufdecken»** `/home-v3-antrieb-b`: Einleitung als grosser zentrierter Titel, färbt sich beim Scrollen ein; Kennzahlen und «Warum ROWAPA» wie heute darunter. **C «Kombination»** `/home-v3-antrieb-c`: erst der Satz wie B, dann links stehend «Warum ROWAPA» mit «Messbare Entwicklung statt Versprechen.», rechts die Kacheln wie A. Alles nativ: Stehen mit CSS sticky, Kacheln im Raster, Einfärben als Webflow-Interaktion (Text in Buchstaben geteilt, an den Scroll gekoppelt); kein eigener Code. Bewegung reduzieren: Satz sofort voll. Unter 992 px steht nichts, die Kacheln stehen auf dem Tablet in zwei Spalten, auf dem Handy untereinander. Geprüft 390, 1024, 1440, 1920 px, keine Überbreite. Höhe der Section bei 1440 × 900: heute 814 px, A 1689, B 972, C 1984 (Handy: 825 / 1469 / 828 / 1539). Texte: A unverändert; B und C mit der Einleitung als Titel (Texttabelle Rev. 20, [ROWAPA bestätigen]). Bilder `stufe2-screens/runde36/` |
| 261 | Mauszeiger und Vorschau-Videos | «video und maus läuft» | Bestätigt auf dem Gerät von ROWAPA (Grafik 1.11.1 und neuer). Offener Punkt 35 erledigt |

---

## 41. Feedback-Runde 37 (27.10.2026): Variante A auf v3, Plum-Form weg, Aufräumen, Treppe schneller

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 262 | Plum-Form in den Themenlinien | «weglassen» | `data-plumform="aus"` an `section_themen` von v3; live geprüft (0 Formen). Der Programmteil bleibt im Skript, bis aufgeräumt wird (offener Punkt 17) |
| 263 | «Was uns antreibt» | «Variante A, aber ohne Titel Warum ROWAPA und die Felder kleiner in der Höhe» | Auf v3 umgesetzt: links stehend Kicker, Titel, Einleitung; rechts Kennzahlen und, versetzt, die Gründe 01–04 als Kacheln. Titel «Warum ROWAPA» entfernt, die vier Gründe-Titel sind jetzt H3 (saubere Gliederung unter dem H2). Kacheln niedriger (`clamp(11rem, 26svh, 15rem)` statt `clamp(15rem, 36svh, 21rem)`, bei 1440 × 900: 234 statt 324 px), Versatz kleiner (`clamp(4rem, 10svh, 6rem)`). Höhe der Section bei 1440 × 900: 1202 px (Variante A vorher 1689, alter Stand 814); 1024: 1085, 1920: 1268, Handy: 1357. Der Text steht beim Scrollen rund 300 bis 500 px lang still. Die leeren alten Hüllen und der Titel «Warum ROWAPA» sind gelöscht (Freigabe). Geprüft 390 bis 1920 px, keine Überbreite |
| 264 | «löschen was nicht mehr benötigt wird» | Freigabe | Gelöscht: Interaktion «Antrieb · Satz färbt sich beim Scrollen ein», Footer-Variante «Manganese». Bereinigt: Interaktion Team-Kacheln (v2, v3), Logo-Laufband ruhig (v3), CAS-Farbfläche nur noch v2 (auf v3 ist die dunkle Fläche aus, Titel und Text stehen sofort). **Seiten** `/home-v3-farben`, `/home-v3-antrieb-a/-b/-c`: die Schnittstelle kann keine Seiten löschen; sie sind als Entwurf aus der Veröffentlichung genommen (live 404) und heissen «ZU LÖSCHEN · …». Endgültig löschen in Webflow: Pages › Seite › Zahnrad › Delete. Danach lassen sich die Klassen entfernen, die nur dort hängen (Style Manager › Clean up) |
| 265 | Veröffentlichen | «dann veröffentlichen auf webflow» | Veröffentlicht auf `rowapa-website-2027-automation.webflow.io` (eine eigene Domain ist nicht verbunden) |
| 266 | Grafik «Unser Vorgehen» schneller | umgesetzt | Treppe `data-tempo` = `2` an `vorgehen_media` (v2 und v3): Aufbau rund 2,1 statt 4,25 Sekunden; Ablauf sonst gleich |
| 267 | Handy und kleine Formate individuell lösen: am Schluss oder beim Bau jeder Seite? | Einschätzung, nichts gebaut | Empfehlung: je Seite gleich mitbauen (Grundsatz «Handy ist eine eigene Fassung»), am Schluss ein gemeinsamer Durchgang auf echten Geräten. Vorgehen und Begründung im Bericht der Runde 37; Entscheid ROWAPA offen (offener Punkt 39) |

---

## 42. Feedback-Runde 38 (27.10.2026): Vorgehen Handy, Tabelle «Desktop → Handy», Aufräumen, Veröffentlichen

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 268 | Vorgehen Handy und kleine Formate (Entscheid 267) | «das gilt» | Jede Seite bekommt beim Bau gleich ihre Handy-Fassung. Je Section gibt es vier Möglichkeiten: gleich, vereinfacht, andere Darstellung, weglassen (nur ausgeblendet). Am Schluss folgt ein gemeinsamer Durchgang auf echten Geräten. Benutzerhandbuch 2.39 |
| 269 | Tabelle «Desktop → Handy» für die Startseite | «ja gerne» | `08_startseite_desktop_handy.md`: 15 Sections mit Messung (Handy heute 14 251 px = 16,9 Bildschirme), Vorschlag, Schätzung und Spalte «Entscheid». Dazu Regeln für alle Seiten (Tippflächen 44 px, Eingabefeld 48 px, kleinste Schrift 15 px) und drei Ideen. Empfehlungen ergeben rund 15 Bildschirme, mit Option C bei den Themen rund 12,6. Nichts gebaut, Entscheid ROWAPA offen (offener Punkt 41). Bilder `stufe2-screens/runde38/` |
| 270 | Vier Vergleichsseiten | von ROWAPA in Webflow gelöscht | Danach acht Klassen entfernt, die nur dort hingen (Liste RUNDE38 in `00_webflow-ids.md`). Offener Punkt 40 erledigt |
| 271 | «nochmal veröffentlichen, da ich textlich etwas kleines geändert habe» | veröffentlicht | Textvergleich vor und nach dem Veröffentlichen: Geändert sind nur die drei Kennzahlen in «Was uns antreibt» auf v3. Sie lauten jetzt wie auf v2: 100 % Branchenerfahrung, 98 % zufriedene Kunden, 100 % erneute Beauftragung. Die Zähler laufen richtig. Festgehalten in der Texttabelle Rev. 22 mit freiwilligen Vorschlägen zur Verständlichkeit |
| 272 | Team-Buttons auf dem Handy | Fehler, beim Messen gefunden und behoben | «Team kennenlernen» war bei 390 px rechts abgeschnitten. Jetzt darf `button-group is-fest` bis 767 px schmaler werden, die zwei Buttons stehen untereinander. Geprüft bei 360, 390, 430 und 768 px, veröffentlicht. Seit der Veröffentlichung davor keine weiteren Textunterschiede |

---

## 43. Feedback-Runde 39 (28.10.2026): Netz im Punktemeer, «Lösungen für Unternehmen» unter dem Header

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 273 | Punktemeer im Header «noch etwas digitaler, technischer», z. B. rote Punkte, die sich verbinden, insgesamt ruhig | Entwurf gebaut | ROWAPA Grafik 1.14.0: Auf Wunsch liegt über dem Punktemeer ein Netz. Wenige Plum-Knoten schwingen auf der Welle mit, feine Linien verbinden Nachbarn und blenden langsam ein und aus, alle paar Sekunden läuft ein Impuls von Knoten zu Knoten. Stufe «an» (14 Knoten, Handy 7) und «mehr» (22, Handy 11). Mit Netz bleiben die Wellenkämme weiss, Plum gehört dann nur den Knoten. Schalter `data-netz` (an der Entwurfsseite am `main-wrapper`), zum Vergleichen `?netz=an`, `?netz=mehr`, `?netz=aus`. Standard aus: v2 und v3 sind unverändert. Bei «Bewegung reduzieren» bleibt wie bisher das Standbild |
| 274 | «Lösungen für Unternehmen» direkt unter dem Header | Entwurf gebaut | Neue Seite `/home-v3-entwurf` (Kopie von v3) mit der Reihenfolge Header, Lösungen für Unternehmen, Was uns antreibt, Unsere Erfolge, Unser Vorgehen, danach wie v3. Die feine Linie oben an «Lösungen» ist dort weggelassen (sie trennte zwei graue Sections). Netz «an». Texte und Höhen gleich wie v3. Die Interaktionen (Logo-Laufband, Team) gelten auch für die neue Seite |
| 275 | Farbwelt und Farbverlauf prüfen | geprüft, keine Farbänderung nötig | Mit «Lösungen» oben verschwindet das einzige ungewollte «zweimal Grau» (heute Erfolge und Lösungen). Die Folge oben wechselt sauber: dunkel, grau, weiss, grau, weiss, dunkel (Digital). Der Übergang vom dunklen Header ins helle Grau ist ruhig. Gleich bleiben die zwei gewollten Paare mit Linie (Team und Wege, Im Blickpunkt und Insights). Farbband `stufe2-screens/runde39/farbfolge-heute-entwurf.png` |
| 276 | Hinweise zum Entwurf | Einschätzung | Die Navigation blendet sich wie auf v3 aus, solange die Themen-Bühne steht; sie verschwindet jetzt früher (nach rund einem Bildschirm). Die weisse Fläche nach dem Header (Muster Tresmares) folgt jetzt nach den Lösungen. Im Kopf von «Lösungen» steht «Lösungen für Unternehmen» zweimal kurz hintereinander (Titel und Leiste, Texttabelle Rev. 23) |

---

## 44. Feedback-Runde 40 (28.10.2026): Netz an auf allen Seiten, Reihenfolge als Variante, Leistentitel ausblendbar

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 277 | Netz im Punktemeer | «Netz an und auch auf den Unterseiten» | ROWAPA Grafik 1.15.0: Das Netz ist Standard im Header jeder Seite mit Punktemeer (heute v2, v3 und die Variante, später jede Unterseite mit diesem Header). Der Footer bleibt ohne. Ausschalten je Seite mit `data-netz="aus"` am `main-wrapper`, vergleichen mit `?netz=aus`. Live geprüft. Offener Punkt 43 erledigt |
| 278 | Reihenfolge | «so anpassen, aber als Variante, sodass wir v3 immer noch haben» | v3 bleibt unverändert. Die Seite mit «Lösungen für Unternehmen» unter dem Header heisst jetzt «Home v3 · Variante Lösungen oben» (Adresse bleibt `/home-v3-entwurf`), mit demselben SEO-Titel und derselben Beschreibung wie v3. Das Attribut `data-netz` dort ist entfernt, weil das Netz jetzt Standard ist. Texte identisch mit v3 (geprüft) |
| 279 | Zweite Zeile «Lösungen für Unternehmen» über der Themenliste | «so, dass ich es dann selber noch ausblenden kann» | Das Element heisst im Navigator auf v3 und auf der Variante «Leistentitel · ausblendbar (Zahnrad › Visibility)». Ausblenden: anklicken, Zahnrad, Visibility auf «Hidden». Die Zeile erscheint nur auf dem Desktop, auf Tablet und Handy ist sie schon aus. Geprüft: Ohne Zeile rückt die Themenliste nach oben, die Bühne bleibt sauber. Benutzerhandbuch 2.41 |
| 280 | Zwei Startseiten nebeneinander | Hinweis | Was in Klassen, Komponenten oder im Skript geändert wird, gilt auf beiden Seiten. Was nur auf einer Seite geändert wird (Texte direkt auf der Seite, Reihenfolge, Ausblenden), muss auf der anderen von Hand nachgezogen werden. Vorschlag: vor dem Bau der Handy-Fassung festlegen, welche Seite weitergeführt wird (offener Punkt 45) |
| 281 | «Wie kann ich mir die Variante ohne den Titel anschauen?» | umgesetzt | Leistentitel auf der Variante `/home-v3-entwurf` ausgeblendet (Visibility «Hidden»), auf v3 sichtbar. So lassen sich beide direkt vergleichen. Wieder einblenden im Designer: Element «Leistentitel · ausblendbar», Zahnrad, Visibility «Visible». Live geprüft. Ersetzt durch Entscheid 282 (Missverständnis) |
| 282 | «nur den Call to Action weg, die anderen Zeilen wieder einblenden» | umgesetzt | Auf der Variante: Button «Zum Unternehmensbereich» im Kopf von «Lösungen für Unternehmen» ausgeblendet (Visibility «Hidden», im Navigator «Button Zum Unternehmensbereich · ausgeblendet»). Kicker «Was wir tun», Titel und Einleitung bleiben, der Leistentitel über der Themenliste ist wieder sichtbar. v3 unverändert (mit Button). Kopf auf dem Desktop 57 px niedriger. Live geprüft bei 1440, 768 und 390 px |

---

## 45. Feedback-Runde 41 (28.10.2026): Netz kräftiger, «Was uns antreibt» gespiegelt, nur noch v3

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 283 | «Das Leuchten und die Bewegung im Header mit den Linien sollte intensiver sichtbar sein» | umgesetzt | ROWAPA Grafik 1.16.0: neue Stufe «stark» ist Standard. 24 Knoten (Handy 12), Linien kräftiger (1,5 px) und nie ganz weg, Licht addiert sich auf dem dunklen Grund, bis drei Impulse gleichzeitig (etwa jede Sekunde ein neuer), beim Ankommen leuchtet die Linie nach und ein Ring wächst aus dem Knoten. Zum Vergleichen `?netz=mehr` und `?netz=ruhig`. Gilt auf allen Seiten mit Punktemeer. Die Lichthöfe werden einmal vorgezeichnet, und das Netz zeichnet höchstens mit 1,5-facher Auflösung, damit auch schwächere Geräte flüssig bleiben. Video `stufe2-screens/runde41/` |
| 284 | «Was uns antreibt»: Titel und Text rechts, die scrollenden Zahlen links; «der Scrollbereich bleibt gleich» | als Ansicht gebaut | Auf der Variante `/home-v3-entwurf`: Zusatzklasse `is-gespiegelt` an `antrieb_split` (Spalten 1,25 : 1), `antrieb_stehend` (rechte Spalte) und `antrieb_kacheln` (linke Spalte), nur ab 992 px. Kennzahlen ganz links, die versetzte Spalte mit den Gründen neben dem Text. Der Text rechts bleibt linksbündig und steht beim Scrollen wie bisher (192 px unter dem Fensterrand bei 1440 × 900). Höhe unverändert (1202 px). Tablet und Handy unverändert: Titel zuerst, Kacheln darunter. Geprüft bei 1440, 1280, 1024, 768 und 390 px, keine Überbreite. v3 unverändert |
| 285 | «Aktuell brauchen wir nur auf v3 zu arbeiten. v2 kommt nicht mehr in Frage» | festgehalten | v2 wird nicht mehr gepflegt. Gearbeitet wird an der v3-Familie, die Wünsche dieser Runde auf der Variante «Lösungen oben» (dort folgt «Was uns antreibt» auf die Themen). v2 kommt auf die Liste der Seiten, die nach der Freigabe gelöscht werden (von Hand in Webflow, nur mit Freigabe) |

---

## 46. Feedback-Runde 42 (28.10.2026): Spiegelung bleibt, Figuren der Themen auf Laptops kleiner

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 286 | «Für mich passt es so, wie wir es jetzt gemacht haben» | festgehalten | «Was uns antreibt» bleibt gespiegelt (Titel und Text rechts, Kacheln links, Entscheid 284). Die Variante «Lösungen oben» (`/home-v3-entwurf`) ist der Arbeitsstand der Startseite. Offener Punkt 46 erledigt. Das Löschen von v3 mit der alten Reihenfolge und von v2 bleibt offen (offener Punkt 45, nur mit ausdrücklicher Freigabe, von Hand) |
| 287 | 13- und 14-Zoll-Laptop: Die Figur in «Lösungen für Unternehmen» läuft teilweise in den Text unten rechts | umgesetzt, nur auf niedrigen Laptop-Fenstern | Die Figur richtet sich jetzt nach der Fensterhöhe: Höhe = 90 % der Fensterhöhe minus 336 px, mindestens 280 px, höchstens wie bisher (64 % der Fensterhöhe, höchstens 736 px). Formel an der Klasse `themen_figur`: `clamp(17.5rem, calc(90svh - 21rem), min(64svh, 46rem))`. Auf hohen Fenstern greift die Obergrenze, die Figur bleibt dort gleich gross. Alle fünf Figuren teilen die Klasse und sind je Format gleich gross (Frage «werden nur zwei kleiner?»: nein, alle fünf einheitlich). Tablet und Handy unverändert. Live gemessen, Tabelle unten. Bilder `stufe2-screens/runde42/` |
| 288 | «Ab 1920 bleibt es so wie heute» | umgesetzt | Ab 1920 px Breite (Breakpoint 1920) gilt wieder der frühere Wert `min(64svh, 46rem)`. Hinweis: Bei einem Fenster von 1920 × 950 berührt der Ring der Figur den Satz rechts wie bisher leicht (906 Pixel, vorher gleich). Wenn das stört, lässt sich die neue Formel auch ab 1920 einsetzen (eine Angabe am Breakpoint 1920) |

**Messung live (Höhe des Figurenfelds; Bildpunkte der Figuren in den Textzeilen mit 3 px Rand, Summe der fünf Themen):**

| Gerät (Fenster) | Höhe Figur vorher → nachher | Figur im Text vorher → nachher |
|---|---|---|
| Windows 13", Full HD 150 % (1280 × 600) | 384 → 280 px | 6102 → 0 |
| Windows 14", 1920 × 1200 150 % (1280 × 670) | 429 → 280 px | 8931 → 0 |
| ältere Laptops 1366 × 768 (1366 × 657) | 421 → 280 px | 6564 → 0 |
| MacBook Air 13" (1440 × 790) | 505 → 375 px | 5807 → 0 |
| MacBook Air 13,6" (1470 × 845) | 541 → 424 px | 4259 → 0 |
| MacBook Pro 14" (1512 × 870) | 557 → 447 px | 3260 → 2 |
| Windows 15,6", 125 % (1536 × 730) | 467 → 321 px | 3782 → 0 |
| Monitor 22" (1680 × 950) | 608 → 519 px | 738 → 51 |
| Monitor 24" Full HD (1920 × 950) | 608 px, unverändert | 906 → 906 |
| Monitor 27" QHD (2560 × 1300) | 736 px, unverändert | 0 → 0 |

Die Werte 2 und 51 sind einzelne Randpunkte des Rings, der Text bleibt frei lesbar.

## 47. Feedback-Runde 43 (28.10.2026): Variante ist die definitive Startseite, neuer Satz im Header

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 289 | «Ja, die Variante wird die definitive Startseite» | entschieden | Die Seite `/home-v3-entwurf` heisst in Webflow jetzt «Startseite (definitiv)». Adresse, SEO-Titel und Beschreibung bleiben vorerst gleich. Damit können v3 (`/home-v3`, alte Reihenfolge) und v2 (`/home-v2`) weg: Löschen von Hand in Webflow (Pages › Seite › Zahnrad › Delete), nur durch ROWAPA. Offener Punkt 45 erledigt, neu offener Punkt 48 (als Home festlegen) |
| 290 | Header: Satz unter den Titelzeilen auswechseln | umgesetzt | Neu: «Wir verbinden menschliche Expertise mit künstlicher Intelligenz und eigenen digitalen Lösungen. Damit aus Potenzial messbare Leistung wird.» Bisher live: «Gemeinsam bewegen wir Menschen und Unternehmen, datenbasiert, praxiserprobt, nachhaltig.» Im Designer stand schon ein Zwischenstand von ROWAPA («… Für bessere Entscheidungen, leistungsstärkere Teams und eine erfolgreiche Zukunft der Finanzbranche.», nicht veröffentlicht); er ist durch den neuen Satz ersetzt. Gesetzt als Eigenschaft «Lead» der Hero-Instanz, nur auf der Startseite. Textvergleich vor und nach dem Veröffentlichen: sonst keine Änderung. Texttabelle Rev. 25 |
| 291 | Der neue Satz ist länger (3 statt 2 Zeilen, auf 1024 px stand «wird.» allein, auf dem 14-Zoll-Fenster rutschte das Logo-Band unter den Rand) | umgesetzt | Zusatzklasse `is-hero` am Satz (`text-size-large max-width-medium is-hero`, in der Komponente Section Hero Home): Breite bis 44 rem statt 36 rem und ausgeglichener Zeilenumbruch (`text-wrap: balance`). Ergebnis live in elf Formaten: ab 768 px zwei gleich lange Zeilen, Handy vier ausgeglichene Zeilen, Header so hoch wie bisher, Logo-Band an derselben Stelle (z. B. 1280 × 670: 591 px wie vorher), keine Überbreite. Ältere Browser brechen normal um |
| 292 | Lesbarkeit über dem Punktemeer (14-Zoll-Fenster) | umgesetzt | Die zweite Zeile berührt auf 1280 × 670 oben die Welle (wie vorher «nachhaltig.»). Ein weicher Lichthof in Manganese Black hinter dem Text (`text-shadow` an `is-hero`) dämpft die Punkte direkt hinter den Buchstaben; auf dem dunklen Grund sonst unsichtbar |
| 293 | Bisheriger Satz an anderen Stellen | Hinweis | «Gemeinsam bewegen wir Menschen und Unternehmen, datenbasiert, praxiserprobt, nachhaltig.» steht noch im Megamenü «Was wir tun» (Navbar · Bühne). Die SEO-Beschreibung endet mit «Datenbasiert, praxiserprobt, nachhaltig.» Beides passt weiterhin; Vorschläge in der Texttabelle Rev. 25 (offene Punkte 49 und 50) |

## 48. Feedback-Runde 44 (28.10.2026): Startseite als Home, Megamenü und Google-Beschreibung angeglichen

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 294 | «Startseite als Home festlegen» | entschieden, ein Handgriff in Webflow | Die Webflow-Schnittstelle kann die Startseite nicht festlegen (bei Webflow nachgefragt: kein Werkzeug dafür). Schritt im Designer: Pages › «Startseite (definitiv)» › Zahnrad › «Set as home page», danach veröffentlichen. Vorbereitet: Das Logo in der Navigation führt schon auf `/`, es braucht keine weitere Anpassung. Die Adresse `/home-v3-entwurf` entfällt danach. Offener Punkt 48 bleibt offen, bis der Schritt gemacht ist; danach prüfen wir `/` live |
| 295 | Megamenü «Was wir tun»: Satz angleichen | umgesetzt | Neu: «Mit menschlicher Expertise, künstlicher Intelligenz und eigenen digitalen Lösungen machen wir aus Potenzial messbare Leistung.» Bisher: «Gemeinsam bewegen wir Menschen und Unternehmen, datenbasiert, praxiserprobt, nachhaltig.» Gleiche Botschaft wie der Header, aber nicht wörtlich, damit beim geöffneten Menü nicht zweimal derselbe Satz steht. In der Komponente «Navbar · Bühne», gilt auf allen Seiten mit diesem Menü. Live geprüft bei 1440, 1280 und 1024 px: fünf bis sieben Zeilen, das Menü bleibt gleich hoch. Offener Punkt 49 erledigt |
| 296 | Google-Beschreibung angleichen | umgesetzt | Beschreibung der Startseite (152 Zeichen): «Expertise, künstliche Intelligenz und eigene digitale Lösungen für Banken, Versicherungen und Krankenkassen. Damit aus Potenzial messbare Leistung wird.» SEO-Titel unverändert. Zusätzlich übernehmen Titel und Beschreibung für LinkedIn und andere Netzwerke (Open Graph) jetzt die SEO-Angaben. Live geprüft. Offener Punkt 50 erledigt |

## 49. Feedback-Runde 45 (28.10.2026): Startseite ist Home, Aufräumen, Handy-Fassung als Bilder

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 297 | Startseite als Home | erledigt (ROWAPA, von Hand) | «Startseite (definitiv)» ist die Home-Seite und heisst in Webflow jetzt «Home». Live unter `/` geprüft (Texte, SEO-Beschreibung). Die frühere leere Seite heisst «ZU LÖSCHEN · Old Home» |
| 298 | «Alles löschen, was nicht mehr gebraucht wird» | umgesetzt, soweit die Schnittstelle es erlaubt | 13 überholte Seiten (v2, v3, Kombi G/G2/H, Layout D/E/F, Look A/B/C, Varianten, Old Home) geleert, auf Entwurf gesetzt und «ZU LÖSCHEN · …» benannt; live sind sie weg (404). Die leeren Hüllen löscht ROWAPA von Hand (Pages › Zahnrad › Delete), Seiten löschen kann die Schnittstelle nicht. 128 ungenutzte Klassen entfernt (alle `var_*`, alte Section-Farbkombinationen, `statement_*`, `warum_block`/`warum_liste`, `stats_grid`, `ribbon_band`, `mobile-menu_*`, `is-diagonal` der Themen u. a.). Bewusst behalten als Reserve des Design-Systems: Client-First-Hilfsklassen (`hide-*`, `show-*`, `margin-bottom` …), `badge`, `button.is-icon-link`, `card.is-dark`, `ribbon.is-bottom-left`. Interaktionen: «Logo-Laufband» (alt), «CAS Farbfläche einblenden» und «Hero-Titelzeilen» (Wechsel) gelöscht; «Logo-Laufband ruhig» heisst jetzt «Logo-Laufband». Komponenten: alle zehn noch verwendet. Live geprüft: Startseite unverändert, keine Fehler |
| 299 | Noch offen beim Aufräumen | Hinweis | (a) leerer Variablen-Modus «Luft (v3)» und der Modus «Manganese» der Sammlung «Textlinks»: von Hand (die Schnittstelle kann keine Modi löschen). (b) Skript: Die Vergleichsschalter (`?anordnung`, `?uebergang`, `?einrasten=rad`, Plum-Form, Variantenumschalter) sind ohne Wirkung, stecken aber noch im Code. Entfernen als eigene, geprüfte Skript-Version, weil sie mit der Themen-Szene verflochten sind. Bis dahin `data-plumform="aus"` an `section_themen` nicht entfernen |
| 300 | Handy: «anhand von Visualisierungen vorher, nachher entscheiden» | umgesetzt | Entscheidungsseite (privat): https://claude.ai/artifact/94Kw6Fk1UmcaodtJvJ3xTC. Je Abschnitt der echte Stand auf dem iPhone (390 px) und daneben der Vorschlag als Simulation auf der Live-Seite, mit Desktop zum Vergleich, gemessener Länge und Auswahl. Die Wahl wird gespeichert und von Claude ausgelesen. Gemessen: heute 14 195 px (16,8 Bildschirme), alle Empfehlungen 12 926 px (15,3), mit Themen B und Footer B 12 086 px (14,3). Bilder `stufe2-screens/runde45/` |

## 50. Feedback-Runde 46 (28.10.2026): Restliches Aufräumen, Handy-Wahl eingegangen

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 301 | «Prüfe, was noch zu löschen ist, und mach es wo möglich selber» | umgesetzt | ROWAPA hat die 13 Hüllen gelöscht; es bleiben «Home» und «Styleguide (intern)». Gelöscht: alte Komponente «Navbar» (im Styleguide durch «Navbar · Bühne» ersetzt) und ihre letzte Klasse, das alte Skript «ROWAPAHoverVideo» (Registrierung), 7 überholte Bilder (fünf alte Themenfiguren ohne Plum, zwei Vorgänger-Grafiken, das Footer-Ersatzbild). Behalten: Logos, Favicon, Webclip und Signets (Marke), Inhaltsfotos und Blogbilder (für Unterseiten und CMS in Stufe 3), die Symbole der fünf digitalen Werkzeuge, das Porträt aus dem Entwurf «Persönliches Wort». Ältere Fassungen von ROWAPAGrafik bleiben registriert (sie lassen sich nur alle zusammen löschen). Live geprüft: Startseite unverändert, keine Fehler |
| 302 | Handy-Wahl auf der Entscheidungsseite | eingegangen | Vorschlag: Navigation (Button «Erstgespräch»), Was uns antreibt, Im Blickpunkt, Insights, Kontakt. So lassen: Header, Erfolge, Team, Persönlich weiterkommen, Gut zu wissen. Mit Bemerkung: Lösungen (A, mit Scroll-Effekt wie auf dem Desktop, ganzer Bildschirm?), Vorgehen (Karten weiss auf weiss und Wischen schwer erkennbar), ROWAPA Digital (Texte in den Kacheln zeigen, alle Grössen prüfen), Footer (wie heute, Newsletter-Feld und Senden-Pfeil auf einer Linie). Rückmeldung und Bau folgen (offener Punkt 41) |

## 51. Feedback-Runde 47 (28.10.2026): Handy-Fassung gebaut

«Passt alles so wie von dir vorgeschlagen.» Gebaut wurde nur für das Handy (bis 767 px). Ausnahmen: der Footer (alle Grössen) und die Texte in den Digital-Kacheln (alle Grössen). Vorher/nachher als Bilder: `stufe2-screens/runde47/`.

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 303 | Navigation | Button «Erstgespräch» neben dem Menü | Neuer Link in «Navbar · Bühne» (`button is-small is-handy-cta`), nur auf dem Handy sichtbar, 44 px hoch, öffnet eine E-Mail an boek@rowapa.ch wie der Kontakt-Button. Ziel [ROWAPA bestätigen]: E-Mail oder später ein Buchungstool |
| 304 | Was uns antreibt | Kennzahlen als Zeilen, Gründe als schlanke Liste | Kennzahl links, Text rechts, Linien dazwischen; die vier Gründe als nummerierte Zeilen. Abschnitt rund 440 px kürzer |
| 305 | Lösungen für Unternehmen | Variante A, ganzer Bildschirm, Aufdecken von unten | Jedes Thema füllt den Bildschirm unter Navigation und Leiste und bleibt stehen, bis das nächste es von unten zudeckt (ohne Einrasten). Titel 40 px, Figur rund 150 px. Grafik 1.17.0 passt die Haltehöhe bei hohen Themen an |
| 306 | Unser Vorgehen | Karten besser erkennbar, Wischen sichtbar | Karten hellgrau (Pastel Snowbank) mit feinem Rand; die nächste Karte ist rechts angeschnitten; darunter zeigt eine Plum-Linie, wo man in der Reihe steht (Modul «reihe») |
| 307 | ROWAPA Digital | Texte in den Kacheln zeigen | Beschreibung jetzt in allen Grössen sichtbar (`is-immer`); geprüft bei 390, 768, 1024, 1280, 1440 und 1920 px |
| 308 | Im Blickpunkt | kürzen | Auf dem Handy ausgeblendet: «16 Präsenztage», «15 ECTS-Punkte» und der zweite Satz; die Zoom-Infosession ist dort ein Textlink. Am Desktop unverändert |
| 309 | Neueste Insights | kompakter | Bild 140 px, ohne Auszug, Pfeile 44 px. Dafür gibt es die eigene Komponente «Card Insight» (Kopie von «Card Teaser»), weil sich Varianten-Stile über die Schnittstelle nicht ändern lassen. Die sechs Karten sind übertragen, Inhalte unverändert |
| 310 | Kontakt | Zeilen statt Fliesstext | Mobil, Büro und E-Mail als Zeilen von 48 px mit Linien; Porträt 96 px |
| 311 | Footer | Feld und Senden-Pfeil auf einer Linie | In allen Grössen: Feld und quadratischer Pfeil-Button (48 px, Screenreader-Text «Abonnieren»). Auch unter 480 px auf einer Linie (vorher untereinander und das Feld zu flach) |
| 312 | Unveränderte Abschnitte | Header, Erfolge, Team, Wege, Gut zu wissen | Nur unsichtbare Tippflächen: Reihen-Pfeile auf dem Handy 44 statt 40 px |
| 313 | Grafik-Skript | Vergleichsschalter entfernen (Entscheid 299) | 1.17.0: Umschalter «varianten» entfernt, Themen auf dem Handy stehend und zudeckend. Die übrigen Schalter (`?plumform`, `?uebergang`, `?einrasten`, `?anordnung`) folgen in einer eigenen, getesteten Fassung |

Geprüft live auf der Subdomain bei 360, 375, 390, 768, 1024, 1280, 1440 und 1920 px: keine Skriptfehler, kein seitliches Scrollen. Der Desktop ist ausser Footer und Digital-Texten unverändert. Die Seite ist auf dem Handy rund 14 100 px hoch (vorher 14 195 px).

## 52. Feedback-Runde 48 (28.10.2026): Buttons gleich gross, Kacheln gleich hoch, Plum-Nummer läuft mit

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 314 | Buttons gleich gross, egal wie viel Text, untereinander und nebeneinander | umgesetzt für alle `button-group` | Alle Buttons einer Gruppe sind so breit wie der breiteste und gleich hoch (Raster statt Flexbox). Handy: untereinander über die volle Breite. «Im Blickpunkt» steht in allen Grössen untereinander (`is-gestapelt`), weil der Zoom-Button nebeneinander zweizeilig würde. Ausgenommen: ROWAPA Digital (Button und Textlink, `is-digital`) |
| 315 | ROWAPA Digital: Kacheln ungleich hoch | ungewollt, behoben | Auf Tablet und Handy waren Kacheln mit kürzerem Text niedriger. Jetzt sind alle Kacheln gleich hoch (`tools_grid is-gleich-hoch`), am Desktop war es schon so |
| 316 | Vorgehen: Plum-Nummer soll beim Wischen mitlaufen | umgesetzt | Grafik 1.18.0: Die vorne stehende Karte wird aktiv (Nummer in Plum, Stufe in der Treppe) |
| 317 | Platzhalter im Newsletter-Feld: Was ist gemeint? | erklärt | Nur der graue Hinweis «Ihre E-Mail-Adresse» im leeren Feld; er verschwindet beim Tippen und sendet nichts. Wohin die Anmeldungen gehen, ist eine eigene Frage (offener Punkt 54) |
| 318 | Erstgespräch | vorerst per E-Mail | Später wird ein Buchungstool hinterlegt (Link im Button «Erstgespräch» und «Erstgespräch vereinbaren» ersetzen) |
| 319 | Variablen-Modi löschen: Einträge nicht gefunden | Anleitung | Benutzerhandbuch 2.44 (Modus «Manganese» in «Textlinks», Modus «Luft (v3)» in «Spacing») |

Live geprüft bei 360 bis 1920 px: keine Skriptfehler, kein seitliches Scrollen. Bilder: `stufe2-screens/runde47/nachtrag-handy.jpg`.

## 53. Stufe 3 (28.10.2026): CMS-Collections angelegt, Plan-Limit erreicht

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 320 | Freigabe Stufe 2 | erteilt («Handy passt, wir können weitermachen») | Stufe 3 gestartet |
| 321 | Grundlage Stufe 3 | `ROWAPA_Sitemap_v4_CMS.docx` und `ROWAPA-Website-v11.html` (beide im Repository) sind verbindlich | Aufbau nach `01_cms_architektur.md` |
| 322 | Collections | 19 Collections angelegt: 8 Seitentypen (Programme und Mentorings als «Angebote» zusammengelegt, E1), 6 offene, 5 Hilfs-Collections | Alle Felder angelegt, alle Felder vorerst freiwillig, damit Entwürfe möglich sind; die Pflichtangaben prüft eine Checkliste vor dem Veröffentlichen (Benutzerhandbuch 2.45) |
| 323 | Slugs | `angebote` für die zusammengelegten Programme und Mentorings; Personen unter `/personen` | `/experten/…` wird nach `/team` umgeleitet (E13), deshalb ein neuer Slug |
| 324 | Hilfs-Collection «Organisationen» | heisst «Unternehmen & Partner» (Begriffsregel, offener Punkt 8) | erledigt |
| 325 | Logo-Grösse | ganze Zahl in Prozent (Webflow kennt hier keine Kommazahlen) | Feld «Logo-Grösse in Prozent», leer = 100 |
| 326 | Feldgruppen im Editor | Seitentypen: Karte & Status · Hero · Inhalte · Beziehungen · Abschluss-CTA · SEO; Personen: Profil · Bilder & Video · Rollen · Kontakt · Verwaltung · SEO | angelegt |
| 327 | Erste Einträge (alle Entwurf) | 5 Kategorien, 6 FAQ der Startseite, 14 Unternehmen & Partner mit Logo, 8 Stimmen der Startseite, 3 Werkzeuge, 5 Themenlinien, 5 Lösungswelten, 3 Kategorie-Hubs (nur Name und Slug) | 49 Einträge |
| 328 | Stimmen | Nur die 8 echten Stimmen der Startseite übernommen; die Stimmen im Prototyp v11 sind Platzhalter und bleiben weg. «Freigegeben» bleibt aus, bis ROWAPA die Zustimmung bestätigt | [ROWAPA bestätigen] |
| 329 | **Plan-Limit** | Beim 50. Eintrag meldet Webflow «You've created all the items in your CMS Database allowed on your current plan» | **Blocker:** Für die übrigen rund 300 Einträge (FAQ 74, Blog rund 58, Downloads 16, Personen, Hebel 9, Angebote 9, Selbstchecks 3, Partnerrollen 3) braucht die Site einen Site-Plan mit CMS, empfohlen **Business** (E2: Reserve bei den Collections; der Plan «CMS» reicht mit 20 Collections knapp für die heutigen 19). Zahlen vor dem Kauf auf der Webflow-Preisseite prüfen. Kaufen kann nur ROWAPA (Site settings › Plans) |
| 330 | Team | Neue Sofa-Fotos mit persönlichem Gegenstand, anders dargestellt; Videos mit Aussagen folgen | Felder «Sofa-Bild», «Persönlicher Gegenstand», «Video-Aussage» und «Video-Datei» in «Personen» angelegt. Die ersten 5 Fotos liegen in `team-fotos-neu/`; Namen und die übrigen Fotos schickt ROWAPA |
| 331 | Abgebrochener Aufruf | Ein vom Nutzer abgebrochener Aufruf war trotzdem ausgeführt | Kategorien und FAQ geprüft, ein doppelter Eintrag «Sales» gelöscht. Regel: nach jedem Abbruch den Stand in Webflow prüfen |

Noch nicht gemacht (wartet auf das Plan-Upgrade): Texte aus v11 in die Seitentyp-Einträge, FAQ zuweisen (`faq_map`), Import aus rowapa.ch (Blog, Team, Downloads), CSV-Export am Stufenende.

## 54. Stufe 3 (28.10.2026): Plan Premium, Sprache Deutsch (Schweiz), Einträge vollständig, Muster Themenlinien

| # | Anliegen | Entscheid | Ergebnis |
|---|---|---|---|
| 332 | Hauptsprache | «German (Switzerland)», `de-CH`, ohne Unterverzeichnis (ROWAPA, 28.10.2026) | geprüft: interne Sprach-ID unverändert, alle Einträge bleiben zugeordnet |
| 333 | Site-Plan | **Premium** (ROWAPA, 28.10.2026): 20 000 CMS-Einträge, 40 Collections, Planung und Einzel-Veröffentlichung von Einträgen | Plan-Limit aufgehoben (offener Punkt 55 erledigt) |
| 334 | Mehrsprachigkeit | in Premium nicht enthalten; Zusatz erst, wenn ROWAPA übersetzen will | offener Punkt 59 |
| 335 | Seiten-Einträge | alle 37 angelegt: 5 Themenlinien, 9 Hebel, 5 Lösungswelten, 3 Kategorie-Hubs, 9 Angebote, 3 Selbstchecks, 3 Partnerrollen | Entwurf |
| 336 | FAQ | 74 Fragen aus v11 importiert (zusammen mit der Startseite 80), Gruppe je Bereich | zwei Reste bereinigt («hier buchen .», Stern als [ROWAPA bestätigen]) |
| 337 | Muster Themenlinien | 5 Einträge mit allen Texten aus v11, angepasst an Begriffsregel und neue Titel; Hebel mit Themenlinie, Kennung und Reihenfolge verknüpft | Texttabelle `09_cms_texttabelle_themenlinien.md`; Rückmeldung ROWAPA, dann gleiches Vorgehen für die übrigen 32 Einträge |
| 338 | Inhalte und Import | v11 gilt als Inhaltsvorlage; Import nur als Entwurf, Auswahl durch ROWAPA; die heutige Website rowapa.ch bleibt unberührt (ROWAPA, 28.10.2026) | Team wird neu gestaltet (Sofa-Fotos), nicht 1:1 übernommen |
| 339 | Quelle des Imports | Die Live-Website rowapa.ch läuft auf **WordPress**, nicht in Webflow. Das Webflow-Projekt «rowapa.ch» (`69ba4dbcfcdc9b5d6232455f`, ohne eigene Domain, angelegt 18.03.2026) ist ein früherer Aufbau | offener Punkt 61 |
| 340 | Vorlage «Themenlinie» | als Muster vorziehen (Vorgriff Stufe 4), Vertriebsperformance auf der Testadresse zeigen | wartet auf den Designer mit MCP-App |
| 341 | Import aus dem Webflow-Projekt «rowapa.ch» | erledigt, alles als Entwurf | 9 Personen (Team und Trainer:innen zusammengeführt, Biografie aus «Antrieb», «Verkaufsprofil», «Laufbahn»), 4 Blogbeiträge von 2026 (mit «Das Wichtigste in Kürze» und «Häufige Fragen» im Text). Downloads: dort keine vorhanden |
| 342 | Korrekturen beim Import | Tippfehler und Begriffe bereinigt | «Thomas Rothgoegel» → «Rothkoegel», vertauschte Slugs im Team (z. B. «peti-federer» bei Janos Niederhauser) neu nach Namen, Leerzeichen-Fehler, «Organisation» → «Unternehmen», alte Themen-Namen → neue Titel, Anführungszeichen «» |
| 343 | Gramos Kerqeli, Janos Niederhauser | ohne Profiltext im früheren Projekt | Schalter «Platzhalter» an, Kurzprofil [ROWAPA bestätigen] |
| 344 | WordPress rowapa.ch (rund 58 Blogbeiträge) | aus der Cloud-Umgebung gesperrt (Netzwerk-Regel) | nach Freigabe von `www.rowapa.ch` durch ROWAPA erledigt (siehe 345) |
| 345 | WordPress-Import Blog | alle 58 Beiträge als Entwurf (4 Läufe parallel, je 14–15) | Blog total 62 Entwürfe (58 WordPress + 4 früheres Webflow-Projekt), keine Duplikate; Bilder auf den Webflow-CDN übernommen; Kategorie, Teaser, Lesezeit, alte URL, SEO und Lösungs-CTA übernommen; Mängel aus der Quelle unverändert, Liste in `10_cms_blogimport.md` |
| 346 | Vorlage «Themenlinie» | im Designer gebaut: Navbar · Bühne, Hero, Hebel-Karten, Diagnostik & Tools mit Werkzeugen, Vorteil, Abschluss-CTA, Footer | alle Texte, Bild und CTA-Buttons an CMS-Felder gebunden; neue Klassen `section_thema-hebel`, `-tools`, `-vorteil`, `-cta`, `thema_hebel-liste`, `thema_werkzeuge`, `thema_vorteil`, `thema_cta`, `text-rich-text` (Raster 8 px, Tablet und Handy einspaltig) |
| 347 | Filter «Hebel dieser Themenlinie», Werkzeuge der Themenlinie, Sortierung | Schnittstelle kann einen Filter «= aktuelle Themenlinie» und eine Liste aus einem Mehrfach-Bezug nicht setzen (von Webflow bestätigt); Sortierung schlug mit Serverfehler fehl | im Designer von Hand, zusammen rund 2 Minuten (Benutzerhandbuch 2.46); bis dahin zeigen die Listen alle 9 Hebel bzw. alle Werkzeuge |
| 348 | CTA-Links der Themenlinien | Button 1 «Erstgespräch vereinbaren» → `/kontakt`, Button 2 «Alle/Weitere Themenlinien» → `/` (bis Übersichtsseite steht); «Digitale Lösungen»: Button 2 → `/kontakt`, Showroom-Link fehlt | [ROWAPA bestätigen] |
| 349 | Veröffentlichen der Vorlage | nicht veröffentlicht: Einträge sind Entwurf (Entscheid 338); Ansicht im Designer über die Vorlage und Auswahl des Eintrags oben | Testadresse folgt, wenn ROWAPA den Eintrag «Vertriebsperformance» freigibt |
| 350 | Blog-Auswahl | ab 2023 bis heute übernehmen, ältere nicht mehr (ROWAPA, 29.10.2026) | 39 Beiträge vor 2023 **archiviert** (nicht gelöscht, jederzeit zurückholbar); aktiv bleiben 23 Entwürfe: 19 aus WordPress (2023–2025) und 4 aus dem früheren Webflow-Projekt (2026) |
| 351 | Anrede im Blog | Persönlichkeit mit Du; Sales und Leadership mit Sie (ROWAPA, 29.10.2026, Vorschlag aus 10_cms_blogimport.md) | erledigt: 17 Beiträge auf Sie umgestellt (Text, Teaser, CTA, SEO; drei Titel angepasst, z. B. «CAS Leadership: Ihre Fragen, unsere Antworten»); Zitate Dritter und das Interview Wachter/Rasiti bleiben in Du; die 4 Beiträge des früheren Webflow-Projekts waren schon in Sie; Slugs unverändert (z. B. `cas-leadership-deine-fragen-unsere-antworten`, Änderung nur mit Weiterleitung) |
| 352 | Autorin | Galina Shokhova ist im Team, «corinne» nicht mehr (ROWAPA, 29.10.2026) | Person «Galina Shokhova» als Entwurf angelegt (Team, Autorin; Funktion und Kurzprofil [ROWAPA bestätigen]), als Autorin bei allen 19 WordPress-Beiträgen ab 2023 gesetzt; die Beiträge von «corinne» sind alle vor 2023 und archiviert |
| 353 | Bereinigung der 23 aktiven Blog-Beiträge | SEO-Titel und Reste bereinigen (ROWAPA, 29.10.2026) | 9 SEO-Titel vollständig und max. 60 Zeichen; Umfragereste entfernt; Überschriften ohne kaputte Fettschrift; 2 Vergleichstabellen als Listen; lose Texte in Absätze; abgelaufenes LinkedIn-Bild, leere Links und ein nicht funktionsfähiger Rechner (Selbstführung) entfernt; 4 Tippfehler; Wortlaut sonst unverändert, alles weiterhin Entwurf (Details `10_cms_blogimport.md`) |
| 354 | Design der Unterseiten (Vorschlag, wartet auf ROWAPA) | drei Header-Typen (A Bühne nur Startseite, B Themen-Header dunkel mit stehendem Punktemeer und Themenfigur, C Inhalts-Header hell mit Foto und Ribbon); ein Kontaktweg (Haupt-Aufruf «Erstgespräch vereinbaren», Abschluss mit Ansprechperson je Thema, Kontaktseite mit Formular, optional Buchungskalender); fünf Seitenfamilien, je mit Musterseite; vorher Section-Komponenten aus der Vorlage bauen | offene Punkte 67–70 |
| 355 | Header, Bewegung, Kontakt (ROWAPA, 29.10.2026) | drei Header-Typen als Grundlage, **jeder Typ wird von ROWAPA einzeln abgenommen**; Bewegung vorerst aus (Header B mit stehendem Punktemeer); Buchungstool folgt, vermutlich Calendly; **Ansprechperson überall Jennifer Boek** | Entwürfe als Bild `stufe3-screens/runde49/` (Header B, C, Artikel, Kontakt-Abschluss Sie/Du) |
| 356 | Ganze Unterseite statt Einzelteile (ROWAPA, 29.10.2026) | Bewegung nur auf der Startseite bestätigt; Schreibweise «Boek» bestätigt; ROWAPA will die ganze Seite im Zusammenspiel sehen | Entwurf ganze Seite «Vertriebsperformance» `stufe3-screens/runde50/` (Desktop, Handy); wartet auf Abnahme |
| 357 | Neues Angebot Performance-Analyse / Standortbestimmung (ROWAPA, 30.10.2026, Pitch und Musterbericht) | Vorschlag: eigene Seite «Performance-Analyse» unter «Für Unternehmen» als Einstieg vor jedem Hebel, verlinkt von Startseite, Megamenü, Themenlinien, Hebel-Seiten, Tools & Methoden | Konzept `11_konzept_performance-analyse.md`; wartet auf ROWAPA (offene Punkte 71–76) |
| 358 | Performance-Analyse (ROWAPA, 30.10.2026) | Name **Performance-Analyse**; Investition **auf Anfrage**; eigenes Angebot, abgegrenzt von den übrigen Tools; Logos dürfen verwendet werden (so verstanden, zu bestätigen); Sales-Deck als Textquelle, Analyse-Cockpit nur intern | Vorschlag Landingpage, Demo-Seite (passwortgeschützt), Musterbericht-Regel und Einbettung in «So arbeiten wir» in `11_konzept_performance-analyse.md` Abschnitt 6 |
| 359 | Performance-Analyse, Klärungen (ROWAPA, 30.10.2026) | **5 Methoden** (Skill-Check als eigener Fragebogen, Eigensicht, Fremdsicht mit denselben Aussagen, Interviews, On-the-Job); **ca. 25 Min.** je Person; Folgemessung **individuell**, z. B. nach 6 Monaten; Ablauf mit den **6 Phasen aus dem Cockpit** (0 Auftrag aufsetzen · 1 Profil entwickeln · 2 Erheben · 3 Auswerten · 4 Ergebnis · 5 Wirkung messen, optional); Logos frei; Demo-Seite mit Passwort einverstanden, keine Cockpit-Bildschirmfotos; Musterbericht: Auszüge frei, PDF gegen E-Mail | Gewichtung bleibt intern (nicht veröffentlichen). Landingpage als ganze Seite: `stufe3-screens/runde51/`; «So arbeiten wir» bleibt Oberbegriff (Analysieren = Phasen 0–2, Verstehen = 3–4, Handeln = Massnahmen, Messen = 5) |
| 360 | Performance-Analyse, Rückmeldung (ROWAPA, 30.10.2026) | Aussagen aus Punkt 83 dürfen auf die Website; Musterbericht gegen E-Mail über **Pipedrive** (CRM); «Diagnostik & Potenzialanalyse» ist ein **eigenes Angebot**, nicht Teil der Performance-Analyse; Demo-Seite wartet; Vorlage «V4 Landingpage» (Dramaturgie) einbeziehen, Animationen erwünscht | Einschätzung V4 und Vorschlag Zusammenführung in `11_konzept_performance-analyse.md` Abschnitt 8; Abnahme Runde 51 wartet auf diese Einschätzung |
| 361 | Landingpage Performance-Analyse (ROWAPA, 30.10.2026) | Zusammenführung V4 + Runde 51 **ja**; Top-Performer **als Vorschlag für das Soll-Profil**, kein direkter Vergleich; Bewegung auf der Landingpage ja, **in Varianten zum Ein- und Ausschalten**, Klick-Animationen wie in «ROWAPA_Standortbestimmung.html» erwünscht; **volle Website-Navigation**; Musterbericht eher über **Mailchimp** statt Pipedrive (einfacher) | Testseite Runde 52 (private Seite) https://claude.ai/artifact/Rn76rHcMDZjUwMjuRe74sd mit 12 Umschaltern und drei Voreinstellungen (Ruhig, Empfehlung, Alles an); Quelle `tools/entwuerfe/runde52/` |
| 362 | Finales Änderungsbriefing Landingpage Performance-Analyse (ROWAPA, 30.10.2026) | CTA «Strategiegespräch anfragen» / «So funktioniert unsere Methode»; drei Ergebnisebenen mit Datenerklärung; Bezugspunkte Rollenanforderung, Gruppenvergleich, Top-Performer-Referenz (kein allgemeingültiges Soll); keine Gewichtungs-, Kausal- oder pauschalen Vergleichsaussagen; Konfigurator und Varianten-Schalter entfernt; Ablauf und Aufwand zusammengeführt (Projektverantwortliche/Teilnehmende); Logos als Unternehmensreferenzen; Hauptseite unverändert | Umgesetzt in Runde 53: `exports/landingpage-performance-analyse/` (HTML + `AENDERUNGEN.md`), Vorschau https://claude.ai/artifact/5ZLXZWorvsLP53Q2DFY6Ju. Ersetzt Teile von 359–361 (Massstab-Aussage «nie mit Kollegen», Gewichtung On-the-Job, Konfigurator). |
| 363 | Landingpage an die Startseite angleichen (ROWAPA, 30.10.2026) | Footer und Kontakt überall gleich (wie Entscheid 354); Seite für Entscheider statt für Anwender, weniger Details (z. B. wer was sieht); Header zu voll; Erkenntnis-Box unter der Figur weg; angleichen, weil mehrere Seiten dieser Art folgen | Runde 54: Seite aus den Bausteinen der Startseite (Navigation, Logo-Band, Unser Vorgehen, Gut zu wissen, Kontakt, Footer 1:1), Header B wie Runde 50, sieben statt zwölf Sections, Details ins FAQ; Bilder `stufe3-screens/runde54/`, Ansicht https://claude.ai/artifact/6HsZc1zhigNCnBFpgeMxCk. Runde 53 ist damit ersetzt. Abweichung vom Briefing 362: Buttons «Erstgespräch vereinbaren» wie auf der Startseite (Rückfrage offen, Punkt 91) |
| 364 | Performance-Analyse ergänzen (ROWAPA, 30.10.2026) | fünf Erhebungsmethoden mit «Warum» wieder zeigen; «Was Sie erreichen» (Handlungsfelder, Empfehlungen, Umsetzung mit ROWAPA); mehrere Auswertungen als Slide; die sechs Phasen auf die vier Schritte aufteilen; «Für Unternehmen» im Header immer in Plum | Runde 55 (`stufe3-screens/runde55/`, Ansicht https://claude.ai/artifact/6HsZc1zhigNCnBFpgeMxCk): Slider wie «Unsere Erfolge», vier Phasen der Startseite mit den sechs Analyse-Phasen, Methoden-Leiste, Kopfzeile Variante B (Plum-Feld), weil Plum-Schrift auf Manganese nur 1,8 : 1 Kontrast hat (Rückfrage Punkt 93) |
| 365 | Performance-Analyse überarbeiten (ROWAPA, 30.10.2026) | Führung als Messinstrument zeigen (wie in der Vorlage); vier Phasen streichen; fünf Methoden als Visualisierung wie in der HTML-Vorlage; «Was möchten Sie verbessern? Vertriebs- oder Mitarbeiterperformance?» früh unter der Ausgangslage; Frage, ob Vorlagen dauerhaft verfügbar sind; Frage nach FAQ auf allen Seiten | Runde 56 (`stufe3-screens/runde56/`). Vorlagen V4 und «Standortbestimmung» liegen jetzt in `quellen/vorlagen/`; Decks und Cockpit nur nach Freigabe (Punkt 94). Empfehlung FAQ: Punkt 95 |
| 366 | Rückmeldung ChatGPT auswerten und Seite anpassen (ROWAPA, 31.10.2026) | nach Einschätzung Claude | Runde 57 (`stufe3-screens/runde57/LIESMICH.md` mit Auswertung Punkt für Punkt): Reiter statt Slider (Führung zuerst), Quellenzeile je Grafik, präzisere Aussagen, Aufwand getrennt, fachliche Auswertung sichtbar, Branche im Einstieg, Kopfzeile C, Lupe ohne Kiste, Plum nur für Handlungsbedarf. Nicht übernommen: Kontakt-Baustein ändern (nur Einleitung), CTA-Wechsel (Punkt 91 offen), Benchmarks und Conversion-Zahlen auf der Seite |
| 367 | Performance-Analyse: Rückmeldung zu Runde 57 (ROWAPA, 31.10.2026) | Button hier «Strategiegespräch anfragen», je Seite entscheiden (Erstgespräch oder Strategiegespräch); Kopfzeile Variante C; Kundenstimme zeigen; Fremdsicht 20 bis 30 Minuten; Vorschläge für Effekte gewünscht | Runde 58 umgesetzt (`stufe3-screens/runde58/`); Effekt-Vorschläge im Konzept Abschnitt 14 |
| 368 | Effekte Performance-Analyse (ROWAPA, 31.10.2026) | alle empfohlenen Effekte ausser «eher nicht»; Vorschau als Video; je Seite gern etwas Besonderes, darf experimentell sein; Mauszeiger: lieber behalten (evtl. nur Punkt) | Runde 59: Videos Desktop und Handy (`stufe3-screens/runde59/`, Ansicht Reiter «Effekte»). Besonderer Effekt dieser Seite: Scroll-Geschichte «Fünf Methoden». Mauszeiger: Empfehlung wie Startseite (Punkt mit Ring) auf allen Seiten, Rückfrage Punkt 99 |
| 369 | Rückmeldung zu den Effekt-Videos Runde 59 (ROWAPA, 31.10.2026) | sieht gut aus; Aufbau «Fünf Methoden» etwas langsam; Mauszeiger so lassen wie auf der Startseite; Ideen für besondere Effekte als Video zeigen, bevor es weitergeht | Runde 60 (`stufe3-screens/runde60/`): Methoden schneller (Scroll-Strecke 340 → 190 px je Methode, Übergänge 0,45 → 0,28 s, im Video rund 4 statt 9 s); Mauszeiger Punkt mit Ring auf allen Seiten (Punkt 99 erledigt); vier Ideen als Video (Themenlinie: Karten stapeln, Hebel-Seite: Text steht/Belege ziehen vorbei, Meine Entwicklung: Plum-Linie zeichnet Lernweg, Team: Porträt aus Punkten), Ansicht Reiter «Ideen» |

---

## Offene Punkte

1. ~~Freigabe Stufe 2~~: erteilt (Entscheid 320).
2. Video-Link `https://vimeo.com/738627796` in der Lightbox einsetzen (von Hand, 30 Sekunden; Benutzerhandbuch 2.15). Die Schnittstelle kann die Lightbox-Medien nicht setzen.
3. Slider optional auf «Cross Fade» und automatischen Wechsel (8 s) stellen (von Hand; Benutzerhandbuch 2.14).
4. Auszüge der drei neuen Insights-Karten bestätigen (aus dem Titel abgeleitet, die Originalbeiträge waren aus der Cloud-Umgebung nicht erreichbar). In Stufe 3 kommen die Auszüge aus dem CMS. [ROWAPA bestätigen]
5. Favicon und Webclip in Webflow hochladen (von Hand).
6. Stehendes Logo als SVG (falls vorhanden).
7. Weitere Kennzahlen, die gezeigt werden dürfen.
8. ~~Hilfs-Collection «Organisationen»~~: heisst «Unternehmen & Partner» (Entscheid 324).
9. ~~Option Mobile: Wische-Reihen auch für Wege und Werkzeuge~~: heute Wischreihen (siehe Handy-Tabelle, Entscheid 269).
10. Themen-URLs in Stufe 4 an die neuen Titel anpassen (mit Weiterleitung); ebenso `/fuer-organisationen`.
11. ~~Nächste Stufe~~: Stufe 3 läuft (Entscheid 320).
12. Megamenü-Bezeichnungen «Mensch & Potenzial», «Leadership & Team», «Recruiting & Retention» weichen von den Titeln auf der Startseite ab («Mitarbeiterperformance & Potenzial», «Führung & Teams», «Recruiting & Mitarbeiterbindung»). Bearbeiten wir später (Entscheid Runde 18).
13. Eigene Bilder für Managing Partner, Education Partner und Trainer Academy, falls vorhanden (die Menütexte sind bestätigt).
14. `/home-v3` mit der Themenlinien-Szene wie die Referenz (Runde 20). Wird v3 die definitive Startseite? Tendenz v3, Entscheid folgt (Runde 27).
15. Handy: «Im Blickpunkt» und «Neueste Insights» sind länger als ein Bildschirm (Entscheid 170). Vorschlag zum Kürzen jetzt in der Handy-Tabelle (Sections 11 und 12, offener Punkt 41).
16. Designer-Ansicht: «Unsere Erfolge» mit 8 Folien geprüft und in Ordnung. «Unser Vorgehen» noch prüfen (die Designer-Vorschau brach mehrmals ab).
17. Aufräumen (Entwurfsseiten, ausgeblendete Blöcke, ungenutzte Klassen) erst nach dem Entscheid für die definitive Variante. Dazu seit Runde 24: Zusatzklassen `is-diagonal` und der Schalter `?anordnung=diagonal` im Skript; seit Runde 27 auch der Schalter `?uebergang=diagonal` (Vorhang von unten entschieden); seit Runde 28 die zwei Logo-Band-Interaktionen (zusammenführen) und die Hero-Variante (Grundvariante mit wechselnder Unterstreichung entfällt, wenn v3 gilt); seit Runde 33 der Schalter `?einrasten=rad` und, je nach Entscheid 37, die Seite `/home-v3-farben` mit ihren Zusatzklassen und Varianten; seit Runde 35 dazu `main-wrapper is-farbkonzept` und der Modus «Manganese» der Sammlung «Textlinks» (seit Runde 36 überflüssig, der Grundwert ist Manganese); seit Runde 36 die Footer-Variante «Manganese» und `footer_component theme-tiefsee` (ersetzt durch `theme-kontrast`), `section_cas.theme-hell`, `section_cas.theme-tiefsee`, die Interaktion «CAS Farbfläche einblenden» und nach dem Entscheid 36 die drei Seiten `/home-v3-antrieb-a/-b/-c` mit den nicht gewählten Klassen. Seit Runde 37: der Programmteil der Plum-Form samt `?plumform` (Skript), die Sammlung «Textlinks» mit dem Modus «Manganese» (Grundwert bleibt), nach dem Löschen der vier Seiten die Klassen `antrieb_kopf`, `antrieb_aufdecken`, `antrieb_leitsatz`, `statement_layout.is-einspaltig`, `main-wrapper.is-farbkonzept`, `kicker.is-spalte`, `section_cas.theme-hell`. **Stand Runde 38:** Die vier Seiten sind gelöscht. Entfernt sind `antrieb_kopf`, `antrieb_aufdecken`, `antrieb_leitsatz`, `statement_layout.is-einspaltig`, `main-wrapper.is-farbkonzept`, `kicker.is-spalte`, `section_cas.theme-hell` und `footer_component.theme-tiefsee`. Offen bleiben die Schalter und Programmteile im Skript, die Sammlung «Textlinks» mit dem Modus «Manganese», `section_cas.theme-tiefsee` und die Interaktion «CAS Farbfläche einblenden» (nur noch v2).
18. Kurznamen der stehenden Leiste (Tablet, Handy): «Vertrieb · Potenzial · Führung · Recruiting · Digital». [ROWAPA bestätigen]
19. Texte «Warum ROWAPA» (vier Punkte, Texttabelle Rev. 9). [ROWAPA bestätigen]
20. ~~Themenlinien-Texte (Rev. 9)~~: vorläufig übernommen (Entscheid 223).
21. Option: feine Plum-Linie entlang der diagonalen Vorhangkante (wie das Ribbon). Nicht gebaut, nur Idee.
22. Tablet und Handy: Blöcke untereinander wie die Referenz (Runde 20, rund 3,5 Bildschirme auf dem Handy). Die Plum-Form zerfällt dort, während der Block in den Blick rückt (Runde 21); auf Wunsch verwandelt sie sich wie auf dem Desktop.
23. ~~Riesige Titel der Themen~~: vorläufig übernommen (Entscheid 223).
24. ~~Vorhang~~: entschieden, von unten (Entscheid 222).
25. ~~Themenlinien-Texte A, B oder C~~: entschieden, Variante A (Entscheid 213).
26. ~~Erweiterte Erklärtexte~~: vorläufig übernommen (Entscheid 223).
27. Farbfolge: auf v3 umgesetzt (Entscheid 211). Offen: auch auf v2, falls v2 weitergeführt wird.
28. ~~Titel «Lösungen für Unternehmen»~~: entschieden, Kicker über der Themenliste (Entscheid 212).
29. ~~ROWAPA Digital ruhiger~~: entschieden und auf v3 umgesetzt (Entscheide 218–220). Offen bleibt nur: Satz «Jede Lösung ist einzeln buchbar.» beim Bau der Übersichtsseite in Stufe 3 einsetzen.
30. ~~Runde 27 (Entwürfe Header, Fotorahmen, Abstände, Megamenü)~~: entschieden und auf v3 umgesetzt (Entscheide 229–237); die Abstände gelten für alle Seiten.
31. Seite `/referenzen` mit den Abschnitten `#branchen`, `#cases`, `#stimmen` (Ziele der Unterpunkte von «Unsere Kunden», Entscheid 237). Bis dahin führen die Links ins Leere. Stufe 3/4.
32. Wenn v3 die definitive Startseite wird: «Navbar · Bühne» auf allen Seiten einsetzen (oder die alte Navbar ersetzen) und das Handy-Menü um die Unterpunkte von «Unsere Kunden» ergänzen (Option, nicht gebaut).
33. Leeren Variablen-Modus «Luft (v3)» im Designer löschen (Entscheid 238, von Hand).
34. ~~Themen-Szene mit Trackpad: Wisch-Einrasten~~: Standard seit Grafik 1.12.0 (Entscheid 250); `?einrasten=rad` beim Aufräumen entfernen.
35. ~~Zeiger und Hover-Videos auf dem Gerät von ROWAPA~~: bestätigt (Entscheid 261).
36. ~~«Was uns antreibt»~~: Variante A gewählt und auf v3 umgesetzt (Entscheid 263).
37. ~~Farbkonzept~~: als Standard übernommen (Entscheid 258); `/home-v3-farben` ist überholt.
38. ~~Plum-Form~~: weggelassen (Entscheid 262).
39. ~~Handy und kleine Formate: Vorgehen festlegen~~: entschieden (Entscheid 268), Tabelle für die Startseite erstellt (Entscheid 269).
40. ~~Vier Seiten «ZU LÖSCHEN · …» löschen~~: von ROWAPA gelöscht, Klassen entfernt (Entscheid 270).
41. ~~Handy-Fassung der Startseite~~: gebaut und bestätigt (Entscheide 303–320).
42. Kennzahlen in «Was uns antreibt» und Zahlenkachel im Team (Texttabelle Rev. 22, Fragen 20 und 21). [ROWAPA bestätigen]
43. ~~Netz im Punktemeer~~: «an», auf allen Seiten, Footer ohne (Entscheid 277).
44. ~~Reihenfolge~~: als Variante «Home v3 · Variante Lösungen oben» neben v3 (Entscheid 278).
45. ~~Welche Startseite wird weitergeführt?~~: die Variante «Lösungen oben», jetzt «Startseite (definitiv)» (Entscheid 289). v3 (`/home-v3`) und v2 (`/home-v2`) löscht ROWAPA von Hand (Pages › Seite › Zahnrad › Delete); danach entfernen wir die nur dort genutzten Klassen.
46. ~~«Was uns antreibt» gespiegelt~~: bleibt so (Entscheid 286).
47. Option: Figur der Themen auch ab 1920 px nach der neuen Formel, falls der leichte Kontakt bei 1920 × 950 stört (Entscheid 288).
48. ~~Startseite als Home festlegen~~: erledigt (Entscheid 297). Offen nur das Löschen der Hüllen (Punkt 1).
49. ~~Megamenü «Was wir tun»~~: angeglichen (Entscheid 295).
50. ~~SEO-Beschreibung der Startseite~~: angeglichen (Entscheid 296).
51. Skript-Version ohne Vergleichsschalter: «varianten» entfernt (1.17.0); `?plumform`, `?uebergang`, `?einrasten`, `?anordnung` folgen in einer eigenen Fassung.
52. Platzhalter «Ihre E-Mail-Adresse» im Newsletter-Feld setzen (von Hand: Footer › Feld › Einstellungen › Placeholder; die Schnittstelle kann ihn nicht setzen). Benutzerhandbuch 2.43.
53. ~~Ziel des Buttons «Erstgespräch»~~: vorerst E-Mail, später Buchungstool (Entscheid 318).
54. Newsletter-Anmeldungen: Heute landen sie in Webflow (Site settings › Forms, Benachrichtigung per E-Mail an die eingetragene Adresse). Soll später ein Newsletter-Dienst angebunden werden (z. B. Mailchimp, Brevo)? [ROWAPA bestätigen]
55. ~~Site-Plan mit CMS kaufen~~: Premium aktiv (Entscheid 333). Ohne Upgrade lassen sich keine weiteren CMS-Einträge anlegen (Entscheid 329). Von ROWAPA: Site settings › Plans.
56. ~~Hauptsprache~~: Deutsch (Schweiz), `de-CH` (Entscheid 332). Früher: «English» (`en`). Auf Deutsch umstellen: Site settings › Localization › Primary locale (von Hand, vor dem Import der Texte). [ROWAPA bestätigen]
57. Team: Namen zu den Sofa-Fotos, die übrigen Fotos, der persönliche Gegenstand je Person und die Videos (als Dateien mit Namen).
58. Zustimmung der 8 Personen in «Stimmen» bestätigen (Schalter «Freigegeben») und Beziehung HWZ / ETH juniors beschreiben (Kurzbeschreibung). [ROWAPA bestätigen]
59. Mehrsprachigkeit (DE/EN/FR/IT in der Navigation): zum Start nötig? Dann Zusatz «Localization» unter Plans › Add ons. [ROWAPA bestätigen]
60. Muster Themenlinien prüfen (Texttabelle `09_cms_texttabelle_themenlinien.md`): 8 Hebel ohne Detailseite ergänzen, Leitfrage-Feld, Farbwelt je Themenlinie, Typeform, Wiederholung «Wissensplattform». [ROWAPA bestätigen]
61. ~~Quelle für Blog, Downloads und Team~~: beide (Entscheid 341); WordPress folgt mit Punkt 62.
62. ~~Netzwerk der Cloud-Umgebung~~ (erledigt, Entscheid 345): `rowapa.ch` und `www.rowapa.ch` unter «Allowed domains» freigeben (Umgebung › Edit › Network access), damit die WordPress-Beiträge gelesen werden können.
63. Team: welche der 9 Personen bleiben, Profiltexte Gramos Kerqeli und Janos Niederhauser, Autor:in je Blogbeitrag. [ROWAPA bestätigen]
64. Blog-Import aufräumen (Auswahl, Anrede und Autorin entschieden, Entscheide 350–352): Umfragereste, kaputte Überschriften, abgeschnittene SEO-Titel, CTA-Links auf `rowapa.ch/dev/…`, Du-Anrede in Firmen-Themen (Liste `10_cms_blogimport.md`). Welche Beiträge bleiben? [ROWAPA entscheiden]
65. Vorlage Themenlinie: Filter, Werkzeug-Liste und Sortierung von Hand setzen (Handbuch 2.46) oder mich im Designer machen lassen, sobald die Schnittstelle es kann.
66. Freigabe Eintrag «Vertriebsperformance» als Vorschau auf der Testadresse (Entscheid 349).
67. Abnahme je Header-Typ: B (Themen-Header) und C (Inhalts-Header, Artikel) anhand `stufe3-screens/runde49/` (Entscheid 355). Bewegung auf der Startseite bleibt (Entscheid 356). Ganze Seite: `stufe3-screens/runde50/`.
68. Buchungstool: vermutlich Calendly, Link folgt (Entscheid 355). Bis dahin führt «Termin buchen» auf die Kontaktseite.
69. ~~Ansprechperson~~: überall Jennifer Boek (Entscheid 355).
70. Lösungs-Kästen im Blog: Ziel der Links festlegen (alte Pfade `rowapa.ch/cas-professional-leadership-for-finance/`, leere Links in 4 Beiträgen).
71. ~~Name~~: Performance-Analyse (Entscheid 358).
72. ~~Musterbericht~~: Auszüge frei, PDF gegen E-Mail (Entscheid 359).
73. ~~Preis~~: auf Anfrage (Entscheid 358).
74. ~~Abgrenzung Diagnostik & Potenzialanalyse~~: eigenes Angebot (Entscheid 360). Auf der Seite höchstens als Querverweis.
75. ~~Referenzlogos~~: dürfen gezeigt werden (Entscheid 359).
76. ~~Ganze Seite als Entwurf~~: `stufe3-screens/runde51/` (Entscheid 359).
77. ~~Methoden~~: fünf (Entscheid 359).
78. ~~Folgemessung~~: individuell, z. B. nach 6 Monaten (Entscheid 359).
79. ~~Zeit je Person~~: ca. 25 Min. (Entscheid 359).
80. ~~Demo-Seite~~: Passwort einverstanden, keine Cockpit-Bildschirmfotos (Entscheid 359).
81. ~~Musterbericht-Regel~~: einverstanden (Entscheid 359).
82. Abnahme Landingpage «Performance-Analyse» (`stufe3-screens/runde51/`): Aufbau, Reihenfolge, Länge. [ROWAPA bestätigen]
83. ~~Aussagen auf der Landingpage~~: freigegeben (Entscheid 360).
84. Musterbericht über Mailchimp (Entscheid 361): Webflow-Formular mit eigener Ziel-Adresse an Mailchimp, Double-Opt-in von Mailchimp, Willkommens-E-Mail mit PDF-Link. Zu klären: Mailchimp-Konto und Plan vorhanden? Eigene Zielgruppe oder Tag «Musterbericht» (damit Newsletter-Abonnierende nicht den PDF-Link erhalten)? Abgleich mit Pipedrive gewünscht? [ROWAPA bestätigen]
85. Section «Wo anfangen?» in der Themenlinie Vertriebsperformance; Demo-Seite wartet (Entscheid 360). [ROWAPA entscheiden]
86. ~~Zusammenführung~~: ja (Entscheid 361).
87. ~~Top-Performer~~: Vorschlag für das Soll-Profil (Entscheid 361).
88. ~~Bewegung~~: zurückhaltend, ohne Schalter (Entscheid 362): Punkte-Lupe im Header, Logo-Laufband, Detailansicht Teamvergleich, Aufbau der Diagramme.
89. ~~Navigation und CTA~~: Website-Navigation (Entscheid 361); CTA «Strategiegespräch anfragen» (Entscheid 362).
90. Landingpage: Buchungslink (Calendly) eintragen, Adressen Impressum und Datenschutz bestätigen, Mindestgrösse «Standard fünf Personen» und die drei Erhebungsformen bestätigen (`landingpage-performance-analyse/AENDERUNGEN.md`). [ROWAPA bestätigen]
91. ~~Button-Text~~: je Seite entscheiden; Performance-Analyse «Strategiegespräch anfragen» (Entscheid 367). Der Text ist eine Eigenschaft von Header und Kontakt-Komponente.
92. Seitenfamilie «Angebot für Unternehmen» (Aufbau `stufe3-screens/runde54/LIESMICH.md`) als Vorlage für weitere Angebotsseiten abnehmen. Header B ohne Kicker und mit kleinerem Titel gilt dann auch für die Themenlinien (Runde 50). [ROWAPA bestätigen]
93. ~~Kopfzeile~~: Variante C (Plum-Linie, weisse Schrift) für Unterseiten (Entscheid 367).
94. Weitere Quellen ins Repo (`quellen/`)? Standortbestimmung-Pitch, Musterbericht, Sales-Deck (Kundenname auf Folie 1 und 14) und Analyse-Cockpit (intern). [ROWAPA entscheiden]
95. «Gut zu wissen» (FAQ) als Standard-Baustein: Vorschlag auf Startseite, Themenlinien, Hebel-, Angebots- und Lösungsseiten, Meine Entwicklung; nicht auf Artikeln, Team, Kontakt, Rechtlichem. Je Seite 4 bis 6 Fragen aus der CMS-Collection FAQ. [ROWAPA bestätigen]
96. ~~Kundenstimme~~: Stimme Raiffeisenbank Berg-Erlen zu Besuchsbegleitungen eingesetzt (Entscheid 367). Ein Fall speziell zur Performance-Analyse folgt, sobald freigegeben.
97. ~~Effekte~~: Auswahl getroffen, Videos Runde 59 (Entscheid 368), Methoden schneller in Runde 60 (Entscheid 369).
98. Fremdsicht 20 bis 30 Minuten: je beurteilte Person oder insgesamt? [ROWAPA bestätigen]
99. ~~Mauszeiger~~: wie Startseite, Punkt mit Ring, auf allen Seiten (Entscheid 369).
100. «Besonderer Effekt je Seite»: vier Ideen als Video vorgelegt (Runde 60, Reiter «Ideen»): 1 Themenlinie Karten stapeln (nativ), 2 Hebel-Seite Text steht/Belege ziehen vorbei (nativ), 3 Meine Entwicklung Plum-Linie Lernweg (ROWAPA-Grafik), 4 Team Porträt aus Punkten (ROWAPA-Grafik). Welche übernehmen? [ROWAPA entscheiden]
