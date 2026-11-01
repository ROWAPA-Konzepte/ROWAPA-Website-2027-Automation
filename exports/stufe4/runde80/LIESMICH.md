# Runde 80 · Auswahl übernommen, neue Entwürfe, Grafik-Skript im eigenen Repository (Stufe 4, 01.11.2026)

## Auftrag ROWAPA (Entscheid 394)

- Auswahl aus der Umschaltleiste per Link: Foto mit Text, schnellere Einblendungen, markiertes Megamenü, Button «Beispielauswertung ansehen», Hinweise in den Diagrammen, feinere Lupe. Nicht gewählt: Titel im Wechsel, Sprachen ausblenden, Eckdatenzeile (Inhalt stimmt, aber nicht eingeblendet), ruhigere Rahmen.
- Foto mit Text passt, aber auf grossen Bildschirmen war das Kinn zu stark angeschnitten. Ausschnitt eher ausgewogen zwischen Kopf und Kinn.
- Im Header-Untertitel einen kleinen Abstand zwischen den beiden Sätzen.
- «Ihre Entscheidungsgrundlage» nach der Rückmeldung von ChatGPT aufbauen: Reiter als Fragen, beim Chart eine deutlichere Aussage.
- «Fünf Perspektiven»: zusätzlich aufklappen, wenn die Maus darüberfährt; die vorherige schliesst sich.
- Das Repository für das Grafik-Skript ist angelegt und freigeschaltet.

## 1. Auf die echte Seite übernommen (`/performance-analyse`)

| Punkt | Umsetzung (nativ) |
|---|---|
| Foto mit Text | Section `section_bildtext` nach «Fünf Perspektiven». Ausschnitt neu: Bildfläche im Seitenverhältnis 16:10 statt fester Höhe, Bildmitte bei 40 % (oben und unten wird gleich wenig angeschnitten). Ist der Text höher als das Bild (z. B. 1024 px), füllt das Bild die ganze Höhe. Tablet 1:1, Handy 4:3 |
| Einblendungen schneller | Interaktion «Titel wortweise (H2)» jetzt 0,5 s, Versatz 0,02 s, früher ausgelöst. Titelblock samt Einleitung, Kundenzitat und Aufwandzahlen ohne Einblendung (Attribut `data-einblenden` entfernt) |
| Button im Header | «Beispielauswertung ansehen», springt zu den Beispielauswertungen (Sprungmarke `beispielauswertung` am Kopf über den Reitern) |
| Hinweise in den Diagrammen | Attribut `data-hinweis="ja"` an den vier Diagrammen, Grafik-Skript 1.24.0 |
| Feinere Lupe | neues Bild im Header |
| **Megamenü markiert** | **noch offen, von Hand.** Die Webflow-Schnittstelle kann den Zustand «Current» nicht setzen; der Versuch erzeugt eine falsche Klasse (gelöscht). Anleitung unten und im Handbuch. Gilt dann auf allen Seiten |

Die Entwurfsseite ist gleich angeglichen. «heute» bedeutet dort wieder: wie die echte Seite. Das nicht gewählte Bildband ist auf der Entwurfsseite ausgeblendet, nicht gelöscht. Die beiden Entwurfs-Interaktionen für die Titel sind gelöscht, weil die echte Interaktion jetzt für beide Seiten gilt.

**Anleitung «Megamenü: aktuelle Seite markieren» (einmalig, rund 2 Minuten):**
1. Im Designer eine Seite öffnen, die im Megamenü steht, z. B. «Performance-Analyse».
2. Megamenü «Was wir tun» öffnen und den Link «Performance-Analyse» anklicken (Klassen `navbar_dropdown-link` + `is-buehne`).
3. Rechts im Style-Panel neben den Klassen auf «States» › «Current».
4. Borders › linke Kante: Breite 2 px, Farbe Variable «Plum Perfect». Typography › Weight 600.
5. Zurück auf «None», veröffentlichen.

Gleiche Logik wie bei den Reitern in Runde 67 (`stufe4/runde67/reiter_current_anleitung.png`). Die Beschriftung im Panel muss blau sein, sonst ist der Wert nicht im Zustand gesetzt.

## 2. Korrigiert: Auswertungen auf dem Tablet

Bisher standen Diagramm-Karte und Text auf dem Tablet nebeneinander. Die Karte war dann so schmal, dass die Achse bei 768 px nur noch 9 px breit war; das Diagramm war nicht lesbar. Jetzt stehen Karte und Text bis 991 px untereinander, wie auf dem Handy, und die Karte richtet ihre Höhe nach dem Inhalt. Achse bei 768 px neu 370 px breit. Ab 992 px unverändert.

## 3. Neue Entwürfe zum Umschalten

https://rowapa-website-2027-automation.webflow.io/performance-analyse-entwurf · unten links «Varianten»

| Punkt | Heute | Entwurf |
|---|---|---|
| Untertitel im Header | ein Absatz | zwei Absätze mit kleinem Abstand (8 px) |
| Beispielauswertungen | heutige Titel und Reiter | Titel als Frage, Reiter als Fragen, beim Chart eine Aussage (Texte unten) |
| «Fünf Perspektiven» | Aufklappen per Klick | auch beim Darüberfahren mit der Maus: nach kurzer Verzögerung öffnet sich die Methode unter der Maus, die vorherige schliesst sich. Die neu geöffnete bleibt dabei unter der Maus stehen, nichts springt. Klick funktioniert weiter, auf Touch nur Klick |

Das Öffnen beim Darüberfahren ist direkt im Grafik-Skript gebaut (Attribut `data-oeffnen="hover"`). Bei Übernahme wird nur das Attribut gesetzt.

## 4. Texttabelle «Beispielauswertungen als Fragen»

| Stelle | Original | Vorschlag | Begründung | Offene Fragen |
|---|---|---|---|---|
| Titel über den Reitern | «So werden aus Ergebnissen konkrete Entscheidungen.» | «Wo bleibt Leistung hinter den Möglichkeiten zurück?» | Frage, die sich eine Führungskraft stellt (Rückmeldung ChatGPT, Wunsch ROWAPA) | Ähnlich wie der Titel der Ausgangslage «Wo bleibt in Ihrem Unternehmen Potenzial ungenutzt?»: zweimal «Wo bleibt …» auf einer Seite. So lassen oder einen der beiden anpassen? |
| Text darunter | «Entdecken Sie fünf Beispielauswertungen und was Sie daraus für Ihr Unternehmen ableiten können.» | «Erkennen Sie, wo Führung nicht ankommt, welche Kompetenzen fehlen und wo Ihre Teams Unterstützung brauchen. Fünf Beispielauswertungen zeigen, welche Entwicklungsmassnahmen Sie daraus ableiten können.» | nennt den Nutzen konkret | – |
| Etikett | «Alle Werte illustrativ» | «Beispielauswertungen mit illustrativen Daten» | deutlicher, dass es Beispiele sind | – |
| Reiter 1 | «Führung» | «Kommt Führung an?» | Frage statt Bezeichnung | – |
| Reiter 2 | «Rollenprofil» | «Was fehlt für die Rolle?» | Nutzen statt Fachbegriff | – |
| Reiter 3 | «Teams» | «Wo brauchen Teams Unterstützung?» | | – |
| Reiter 4 | «Interne Referenz» | «Was machen die Besten anders?» | passt: Die Auswertung vergleicht mit einer Referenzgruppe nach vorab festgelegten Erfolgskriterien; die heutige Aussage lautet schon «Was Ihre Besten anders machen.» | – |
| Reiter 5 | «Massnahmen» | «Was hat jetzt Priorität?» | | – |
| Aussage beim Chart 1 | «Wie Führung eingeschätzt und im Alltag erlebt wird.» | «Wo Führungskräfte ihre Führung anders sehen als ihre Teams.» | Vorschlag ChatGPT war «Ihre Führungskräfte sehen ihre Leistung anders als ihre Teams.» Das wäre eine Aussage über das Unternehmen des Besuchers, obwohl es ein Musterfall ist (davor warnt ChatGPT selbst). Darum als «Wo …» formuliert wie die anderen, und «Führung» statt «Leistung», weil das Diagramm Führung zeigt | – |
| Aussage beim Chart 2 | «Wo steht das Team gegenüber der Rolle?» | «Wo Kompetenzen hinter den Anforderungen zurückbleiben.» | wie vorgeschlagen | – |
| Aussage beim Chart 3 | «Zwei Themen, nicht vier Teams.» | «Welche Schwächen mehrere Teams bremsen – und wo gezielte Begleitung nötig ist.» | wie vorgeschlagen | «Schwächen» passend im Ton? |
| Aussage beim Chart 4 | «Was Ihre Besten anders machen.» | «Welche Unterschiede zu Ihren leistungsstarken Mitarbeitenden Ansatzpunkte für Entwicklung liefern.» | wie vorgeschlagen | – |
| Aussage beim Chart 5 | «Vom Befund zur priorisierten Massnahme.» | «Wo Sie mit Training und Coaching gezielt ansetzen sollten.» | wie vorgeschlagen | – |
| Header-Untertitel | ein Absatz | zwei Absätze, Text unverändert | Wunsch ROWAPA | – |

Der Abschnittstitel «Klarheit, wo sich Entwicklung lohnt.» und die drei Karten darüber bleiben (Entscheid 382). Die Reiter passen bei 1440 px in eine Zeile, auf Tablet und Handy brechen sie um.

## 5. Grafik-Skript im eigenen Repository (1.24.0)

- Neu: https://github.com/ROWAPA-Konzepte/rowapa-website-grafik (öffentlich, muss es bleiben). Quelle, Build, Beschreibung und README mit Ablauf für neue Fassungen.
- Fassung 1.24.0 bringt die Diagramm-Hinweise (`data-hinweis="ja"`) und das Öffnen beim Darüberfahren (`data-oeffnen="hover"`).
- Site-weit eingebunden über jsDelivr, Commit `53a71e0` mit SRI-Prüfsumme. Geprüft: Datei identisch, Version 1.24.0 auf der Seite aktiv.
- Der alte Ordner `tools/grafik` im Projekt-Repository bleibt als Stand bis 1.23.0 mit Hinweis «verschoben». Löschen nur mit Freigabe [ROWAPA entscheiden].

## Geprüft

| Prüfung | Ergebnis |
|---|---|
| Echte Seite: Foto, Button mit Sprung, Hinweise, Lupe, keine Einblendung an Titelblöcken | ✓ |
| Foto in 2560, 2000 × 750, 1440, 1024, 768, 390 | ✓ Kopf und Kinn sichtbar; 1024 ohne Streifen |
| Tablet-Auswertungen 768 bis 991 | ✓ untereinander, lesbar; ab 992 unverändert |
| Entwurfsseite: drei neue Punkte umschalten, Link, «heute» = echte Seite | ✓ |
| Methoden beim Darüberfahren | ✓ öffnet nach kurzer Verzögerung, Zeile bleibt stehen (gemessen 0 px Versatz), ohne Attribut kein Öffnen |
| Grafik-Skript 1.24.0 aus dem neuen Repository | ✓ |

Bildschirmfotos mit dem Teamfoto sind nicht im Repo.

## Prüfsession 16 (Entscheid 378)

| Bereich | Punkt | Ergebnis |
|---|---|---|
| A CI | Farben, Schrift | ✓ unverändert, Hinweise und Markierung Plum |
| B Texte | keine erfundenen Fakten | ✓ Aussage 1 auf den Musterfall bezogen umformuliert (begründet); «Was machen die Besten anders?» durch die Referenzgruppe der Seite belegt |
| B Texte | doppelte Formulierung | ? zweimal «Wo bleibt …» (Ausgangslage, Beispielauswertungen) an ROWAPA |
| B Fotos | Kopf und Kinn je Format, auch niedrige Fenster | ✓ |
| C Bauweise | nativ zuerst | ✓ Übernahmen nativ; Hinweise und Hover im gepflegten Grafik-Skript; «Current» braucht den Designer, darum Anleitung statt Code |
| C Bauweise | «Bewegung reduzieren» | ✓ Titel springen ans Ende; Methoden bleiben offen |
| D Abmachungen | Entscheid 393 | ✓ Neues umschaltbar, «heute» = echte Seite |
| D Abmachungen | nicht Gewähltes | ✓ Titel im Wechsel, Sprachen, Eckdaten, Rahmen nicht übernommen |
| E Ablauf | Veröffentlichen | ✓ nur Testadresse |
| E Ablauf | Löschen | ✓ nur eigene Hilfsteile: zwei Entwurfs-Interaktionen (ersetzt), eine falsche Klasse aus dem Versuch «Current». Bildband nur ausgeblendet |

## Fragen an ROWAPA

1. Neue Entwürfe: Welche der drei Punkte übernehmen (Link aus der Leiste schicken)?
2. Zweimal «Wo bleibt …»: so lassen oder anpassen?
3. Megamenü-Markierung: machst du die zwei Minuten im Designer selbst (Anleitung oben), oder soll ich es anders lösen?
4. Alter Ordner `tools/grafik` im Projekt-Repository: stehen lassen oder löschen?
