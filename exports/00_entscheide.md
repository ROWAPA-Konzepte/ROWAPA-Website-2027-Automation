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

---

## Offene Punkte

1. Look & Feel: Rückmeldung zum Entwurf `/home-look` (Display-Titel, Ribbons, Rasterlinien: einzeln übernehmen, anpassen oder verwerfen). Danach Übernahme auf `/home-v2` und Freigabe Stufe 2.
1a. Kartentitel in Digital «Dein digitaler Begleiter im Verkauf» (von ROWAPA geändert) nutzt die Du-Anrede, die Section spricht mit Sie. Vorschlag: «Ihr digitaler Begleiter im Verkauf». [ROWAPA bestätigen]
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
