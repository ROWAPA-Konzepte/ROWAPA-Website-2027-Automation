# Runde 83 · Linien, Foto grau und Text A übernommen, Entwürfe Hintergrund, Button-Abstand, Titel, Seitenwechsel flüssig (Stufe 4, 01.11.2026)

## Auftrag ROWAPA (Entscheid 397)

- Auswahl per Link `?v=linien:laufen,foto:grau,fototext:a`: Linien laufen dauernd, Foto Vorschlag 1 (grau), Text A neben dem Foto.
- Zweites «Wo bleibt …» umformulieren.
- Alten Ordner `tools/grafik` löschen.
- Megamenü-Markierung «Current» passt ROWAPA selbst im Designer an.
- Foto grau: unten eine feine graue Linie wie auf der Startseite, oder auch einmal mit weissem Hintergrund zeigen.
- Header: Abstand vom Untertitel zu den zwei Buttons grösser.
- Seitenwechsel Startseite → Performance-Analyse ist noch nicht ganz flüssig, «harzt»: prüfen. Soll sehr reibungslos und nicht zu lang sein.

## 1. Auf die echte Seite übernommen (`/performance-analyse`, nativ, Entwurfsseite gleich)

| Punkt | Umsetzung |
|---|---|
| Linien laufen dauernd | Attribut `data-linien="laufen"` an `methode_layout` (Grafik-Skript ab 1.26.0) |
| Foto mit Text: schmaler, grau | Fläche mit der Klasse `theme-soft` (Snowbank wie die Kundenstimmen) statt `theme-kontrast`. `bildtext_bild-wrap` Seitenverhältnis 2,2:1, `bildtext_bild` Bildmitte 50 % 25 %, `bildtext_inhalt` Innenabstand oben und unten 40 px (alles im Desktop-Breakpoint; Tablet und Handy unverändert). Abstand zu den Kundenstimmen 48 px über die neue Kombi-Klasse `padding-section-large is-stimme is-nach-bild` (die alte Vorschauseite nutzt `is-stimme` auch und bleibt so unverändert) |
| Text A | «Zahlen brauchen Erfahrung.» / «Unsere Fachpersonen kennen Vertrieb und Führung in der Finanzbranche aus eigener Erfahrung. Im Ergebnisgespräch ordnen sie die Auswertung mit Ihnen ein.» Damit ist auch der doppelte Satz mit dem Methoden-Kasten weg |

Gemessen auf der Testadresse: Foto-Section 530 px hoch bei 2000 px Breite (vorher 729), 442 px bei 1440. Köpfe bei 2000, 1440, 1024, 768 und 390 px frei.

## 2. Neue Entwürfe zum Umschalten (Umschaltleiste 1.4.0)

https://rowapa-website-2027-automation.webflow.io/performance-analyse-entwurf · unten links «Varianten»

| Punkt | heute | Entwürfe |
|---|---|---|
| Foto mit Text: Hintergrund | grau | **grau, feine Linie unten:** 1 px in Manganese mit 14 % Deckkraft am unteren Rand der Foto-Section, wie zwischen «Im Blickpunkt» und den Insights auf der Startseite. **weiss:** Text auf Weiss, die Kundenstimmen bleiben grau |
| Header: Abstand Untertitel zu den Buttons | 32 px | **48 px** oder **64 px** (Handy 40 bzw. 48 px) |
| Titel über den Beispielauswertungen | «Wo bleibt Leistung hinter den Möglichkeiten zurück?» | **A**, **B**, **C** (Texttabelle unten) |
| Seitenwechsel (alle Seiten) | 1,0 s | **0,7 s, vorgeladen** oder **0,5 s, vorgeladen** (siehe Abschnitt 3) |

Direkt zu meinen Empfehlungen:
https://rowapa-website-2027-automation.webflow.io/performance-analyse-entwurf?v=hintergrund:linie,cta:48,titel:a,wechsel:neu

**Empfehlungen:**
- **Hintergrund: grau mit Linie.** Foto-Section und Kundenstimmen bleiben ein ruhiger grauer Block, die Linie trennt die beiden Inhalte sauber. So ist es auch auf der Startseite gelöst. Weiss wirkt leichter, das Foto steht dann aber zwischen zwei Flächen und verbindet sich weniger mit den Kundenstimmen.
- **Button-Abstand: 48 px.** Die Buttons lösen sich klar vom Untertitel. 64 px trennt sie optisch schon vom Textblock.

## 3. Seitenwechsel: Ursache und neue Fassung

**Gemessen** (Startseite → Performance-Analyse, 1440 × 900, Testadresse):

| | heute (1,0 s) | neu (0,7 s) | kurz (0,5 s) |
|---|---|---|---|
| Klick bis Beginn der Bewegung, ohne Vorladen | 0,5–0,8 s | 0,3–0,5 s | 0,4–0,5 s (Unterschied zu heute vor allem Netzschwankung, ohne Vorladen ändert sich die Wartezeit nicht) |
| Klick bis Beginn, vorgeladen (Maus vorher über dem Link) | – | **sofort (1 ms)** | **sofort** |
| Dauer der Bewegung (gemessen, inkl. Start) | 1,2–1,3 s | 0,76–0,83 s | 0,57–0,63 s |
| Ruckler während der Bewegung (Bild länger als 50 ms) | 5–8, bis 280 ms | keine bis vereinzelt 66–83 ms | keine bis vereinzelt 67–100 ms |

**Ursache des Harzens:** Das Grafik-Skript der neuen Seite startete genau während des Einfahrens. Punktemeer, Diagramme und Methoden wurden aufgebaut, während der Browser die Bewegung zeichnen sollte. Dazu kam eine Wartezeit von rund einer halben Sekunde, bis die neue Seite überhaupt geladen war.

**Neue Fassung** (umschaltbar, «heute» bleibt Standard, bis ROWAPA entscheidet):
1. **Grafik startet nach dem Einfahren.** Bis dahin stehen die Standbilder; das Punktemeer blendet danach weich ein (Grafik-Skript 1.27.0).
2. **Zielseite vorladen.** Fährt die Maus über einen Link der Website, lädt der Browser die Seite im Hintergrund vor. Ab 992 px Fensterbreite reicht das Darüberfahren, darunter geschieht es beim Antippen. Der Klick zeigt die Seite dann sofort. Bei Datensparmodus und Energiesparmodus lädt Chrome nicht vor. Andere Browser ohne diese Funktion wechseln wie bisher.
3. **Kürzer:** 0,7 s oder 0,5 s statt 1,0 s, gleiche sanfte Kurve.

Hinweis: Die Erkennung «Maus vorhanden» reicht dafür nicht, weil Ihr Gerät keine Maus meldet (Diagnose Runde 31). Darum entscheidet die Fensterbreite.

**Selbst ausprobieren:** einmal https://rowapa-website-2027-automation.webflow.io/?wechsel=neu öffnen, dann von der Startseite über das Menü zur Performance-Analyse wechseln. Zurück zum heutigen Stand: `?wechsel=heute`. Die Wahl gilt in diesem Browser für alle Seiten. Auf der Entwurfsseite lässt sie sich auch in der Leiste «Varianten» umschalten.

**Empfehlung: neu (0,7 s).** 0,5 s ist sehr knapp; die Bewegung ist dann kaum noch als Bewegung wahrnehmbar.

## 4. Texttabelle «Titel über den Beispielauswertungen»

Darunter folgen fünf Reiter als Fragen («Kommt Führung an?», «Was fehlt für die Rolle?», «Wo brauchen Teams Unterstützung?», «Was machen die Besten anders?», «Was hat jetzt Priorität?»). Der Titel der Ausgangslage bleibt «Wo bleibt in Ihrem Unternehmen Potenzial ungenutzt?».

| | Titel | Begründung | offene Fragen |
|---|---|---|---|
| Original | Wo bleibt Leistung hinter den Möglichkeiten zurück? | – | zweimal «Wo bleibt …» auf der Seite |
| **A** (Empfehlung) | Warum bleibt Leistung hinter den Möglichkeiten zurück? | kleinste Änderung; die von ROWAPA gewählte Aussage bleibt, «Warum» passt zum Text darunter (Führung kommt nicht an, Kompetenzen fehlen) | – |
| B | Was steckt hinter Ihren Ergebnissen? | knüpft an die Ausgangslage an («Ihre Zahlen zeigen die Ergebnisse») | – |
| C | Welche Antworten liefert die Auswertung? | rahmt die fünf Fragen-Reiter als Antworten | sachlicher, weniger Bezug zum Problem der Führungskraft |

Redaktionsleitfaden: Was ist es (Beispielauswertungen), für wen (Unternehmen, Führung), Nutzen (Ursachen erkennen), nächster Schritt (Reiter, Beispielauswertung). Anrede Sie. ✓

## 5. Ordner `tools/grafik` gelöscht

Gelöscht im Website-Repository (Freigabe ROWAPA). Vorher geprüft: Das Grafik-Skript lädt seit 1.24.0 aus `rowapa-website-grafik`; ältere Fassungen mit Commit-Kennung bleiben über jsDelivr erreichbar. Die Werkzeuge zum Neuerzeugen der Standbilder (Punktfiguren, Treppe, Kugel, Symbole) lagen im Unterordner `figuren/` und sind jetzt im Grafik-Repository unter `figuren/` (Commit `cc90bff`).

## Geprüft (Testadresse)

| Prüfung | Ergebnis |
|---|---|
| Echte Seite: Linien laufen, Foto grau, Text A, Kundenstimmen 48 px, keine Umschaltleiste | ✓ in 2000, 1440, 1024, 768, 390 px |
| Grafik 1.27.0, Seitenwechsel 1.1.2 site-weit | ✓, gehostete Datei identisch mit dem Repository |
| Umschaltleiste 1.4.0: Hintergrund, Abstand (32/48/64 px gemessen), Titel A/B/C, Seitenwechsel | ✓ |
| Seitenwechsel heute unverändert (1,0 s, kein Vorladen, Grafik wie bisher) | ✓ |
| Vorladen: Regel trifft 33 Links der Startseite, Darüberfahren startet das Vorladen, Klick zeigt die Seite nach 1 ms | ✓ (geprüft ohne angehängtes Messwerkzeug, weil Chrome mit Entwicklerwerkzeugen nicht vorlädt) |

**Fehler unterwegs, behoben:** Die erste Fassung der Vorlade-Regel schloss Links mit «?» aus und traf dadurch gar keinen Link (1.1.0, 1.1.1). In 1.1.2 entfernt; nachgemessen. Die Fassungen 1.1.0 und 1.1.1 waren nur auf der Testadresse und nur in der Fassung «neu» betroffen.

## Prüfsession 19 (Entscheid 378)

| Bereich | Punkt | Ergebnis |
|---|---|---|
| A CI | Farben | ✓ Snowbank, Linie Manganese 14 % wie auf der Startseite, Weiss |
| A CI | Abstände | ✓ 8-px-Raster (40, 48, 64 px) |
| B Texte | Titel A, B, C, Text A | ✓ Redaktionsleitfaden, Sie, keine neuen Behauptungen |
| B Texte | Doppelungen | ✓ doppelter Satz gelöst (Text A); zweimal «Wo bleibt …» mit A/B/C lösbar |
| B Fotos | Köpfe, Ausschnitt je Format | ✓ 2000, 1440, 1024, 768, 390 px |
| C Bauweise | nativ zuerst | ✓ Foto, Text, Linien nativ bzw. per Attribut; neue Kombi-Klasse statt Änderung an `is-stimme` |
| C Bauweise | eigener Code nur, wo nötig | ✓ Seitenwechsel bleibt ein kleines Kopf-Skript (Webflow kann keine Seitenübergänge); Vorladen und Grafik-Start dort bzw. im Grafik-Skript |
| C Bauweise | «Bewegung reduzieren» | ✓ kein Seitenwechsel, Grafik wie bisher aus |
| D Abmachungen | Entscheide 391, 393, 397 | ✓ heute bleibt Standard, alles Neue umschaltbar |
| E Ablauf | Veröffentlichen | ✓ nur Testadresse |
| E Ablauf | Löschen | ✓ `tools/grafik` (Freigabe), Werkzeuge vorher gesichert; Attribut `data-variante` (Rest aus Runde 79) an der Foto-Section der Entwurfsseite |
| E Ablauf | Grafik nur im Grafik-Repository | ✓ |

## Fragen an ROWAPA

1. Foto-Hintergrund: grau, grau mit Linie (Empfehlung) oder weiss?
2. Header: Abstand 32, 48 (Empfehlung) oder 64 px? Die Änderung gilt dann im Header aller Unterseiten.
3. Titel über den Beispielauswertungen: A (Empfehlung), B oder C?
4. Seitenwechsel: heute, neu 0,7 s (Empfehlung) oder kurz 0,5 s? Bitte auf dem eigenen Gerät ausprobieren (Link oben).
