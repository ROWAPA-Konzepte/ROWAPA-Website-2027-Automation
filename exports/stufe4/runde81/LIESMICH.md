# Runde 81 · Untertitel und Fragen übernommen, Entwürfe Ergebnis-Kasten und Foto kompakt (Stufe 4, 01.11.2026)

## Auftrag ROWAPA (Entscheid 395)

- Auswahl per Link: Untertitel in zwei Absätzen und Beispielauswertungen als Fragen übernehmen. Methoden **nicht** beim Darüberfahren öffnen, bleibt wie bisher (Klick).
- «Fünf Perspektiven», Kasten rechts: Alle fünf Punkte sollen immer voll sichtbar sein, nicht zurückversetzt. Nur die Aufzählungsmarke des Punktes, der zur angeklickten Methode gehört, wird Plum.
- Foto mit Text: auf dem grossen Desktop zu gross, wirkt wie eine eigene Section. Braucht es das? Kleiner, sodass es mit der folgenden Section im Bild erscheint.

## 1. Auf die echte Seite übernommen (`/performance-analyse`, nativ)

| Punkt | Umsetzung |
|---|---|
| Untertitel im Header | zwei Absätze: «Fundierte Empfehlungen für die Entwicklung Ihrer Teams und Führungskräfte.» und «Für mehr Vertriebs- und Mitarbeiterperformance.». Abstand 8 px über die Kombi-Klasse `header-unterseite_lead is-erster-satz` |
| Beispielauswertungen als Fragen | Titel, Text, Etikett, fünf Reiter und fünf Aussagen beim Diagramm wie in der Texttabelle von Runde 80 |

Webflow lässt die Texte der Reiter und des Etiketts über die Schnittstelle nicht direkt ändern, weil sie in einfachen Blöcken stehen. Diese sechs kleinen Textblöcke sind deshalb durch neue mit dem freigegebenen Text ersetzt. Im Designer bleiben sie per Doppelklick bearbeitbar. Die Entwurfsseite ist gleich angeglichen.

## 2. Neue Entwürfe zum Umschalten

https://rowapa-website-2027-automation.webflow.io/performance-analyse-entwurf · unten links «Varianten»

| Punkt | Heute | Entwurf |
|---|---|---|
| «Fünf Perspektiven»: Kasten rechts | Punkte der übrigen Methoden blass (30 %) | **alle Punkte voll sichtbar**, nur die Marke der Punkte der angeklickten Methode wird Plum und etwas grösser; die übrigen Marken in Sea Cliff. Die fest Plum gefärbte Marke bei «Wie Führung eingeschätzt und erlebt wird» ist dann nur Plum, wenn ihre Methode offen ist. Gebaut im Grafik-Skript 1.25.0 (`data-ergebnis="marke"`) |
| Foto mit Text | gross: Foto bis an den Rand, 16:10 | **kompakt:** Foto im Inhaltsraster, schmaler (5 von 12 Spalten), ganzes Bild 3:2 ohne Anschnitt, weniger Innenabstand. **ohne Foto:** Section ausgeblendet |

**Höhe der Foto-Section:**

| Breite | gross (heute) | kompakt |
|---|---|---|
| 2000 px | 729 px | 431 px |
| 1440 px | 525 px | 438 px |
| 768 px | 425 px | 380 px |

Bei 2000 × 1050 bleiben nach der Foto-Section in der kompakten Fassung 539 px für die Kundenstimmen im Bild (gross: 241 px).

**Braucht es das Foto?** Meine Empfehlung: ja, kompakt.
- Es ist das einzige Bild von Menschen auf der Seite. Es zeigt, dass hinter der digitalen Erhebung Fachpersonen stehen. Für Entscheider in der Finanzbranche ist das ein Vertrauenssignal.
- Kompakt wirkt es als Übergang zwischen Methode und Kundenstimmen statt als eigener Block.

**Gefunden:** Der Satz «Unsere Fachpersonen bringen eigene Praxis aus Vertrieb und Führung in der Finanzbranche mit. Sie ordnen die Ergebnisse ein und leiten Empfehlungen ab.» steht zweimal auf der Seite: im Kasten rechts bei «Fünf Perspektiven» und neben dem Foto. Vorschlag: Im Kasten weglassen (der Kasten zeigt dann nur Titel und die fünf Punkte) oder neben dem Foto einen anderen Satz verwenden. [ROWAPA entscheiden]

## 3. Grafik-Skript 1.25.0

Repository `rowapa-website-grafik`, Commit `21a40d8`, site-weit eingebunden und geprüft (Version 1.25.0 aktiv). Neu ist `data-ergebnis="marke"` für den Ergebnis-Kasten der Methoden. Auf der echten Seite ist das Attribut noch nicht gesetzt; heute bleibt dort also alles wie bisher.

## Geprüft

| Prüfung | Ergebnis |
|---|---|
| Echte Seite: zwei Absätze, Fragen-Reiter, Aussagen, Etikett | ✓ |
| Kasten «Marke»: Start Skill-Check | ✓ alle Punkte 100 %, Marke «Kompetenzen je Person und Team» Plum |
| Kasten «Marke»: Klick auf die dritte Methode | ✓ Marken der Punkte 2 und 3 Plum, übrige Sea Cliff |
| Foto kompakt in 2000, 1440, 768, 390 | ✓ ganzes Bild, Köpfe frei, Kundenstimmen darunter im Bild |
| Umschaltleiste 1.2.0 | ✓ zwei Punkte, «heute» = echte Seite |

## Prüfsession 17 (Entscheid 378)

| Bereich | Punkt | Ergebnis |
|---|---|---|
| A CI | Farben | ✓ Plum nur für die aktive Marke, sonst Sea Cliff |
| B Texte | übernommene Texte | ✓ wie Texttabelle Runde 80 |
| B Texte | Doppelungen | ? gleicher Satz im Methoden-Kasten und neben dem Foto (an ROWAPA); zweimal «Wo bleibt …» weiterhin offen (Runde 80) |
| B Fotos | Köpfe, Kinn | ✓ kompakt ohne Anschnitt (3:2) |
| C Bauweise | nativ zuerst | ✓ Texte und Untertitel nativ; Marke im gepflegten Grafik-Skript; Entwurf «kompakt» in der Umschaltleiste, bei Wahl nativ |
| C Bauweise | «Bewegung reduzieren» | ✓ Markenwechsel ohne Übergang |
| D Abmachungen | Entscheid 393, 395 | ✓ Neues umschaltbar; Methoden ohne Darüberfahren |
| E Ablauf | Veröffentlichen | ✓ nur Testadresse |
| E Ablauf | Löschen | ✓ nur die sechs ersetzten Textblöcke (Reiter, Etikett) nach Einsetzen der freigegebenen Texte |

## Fragen an ROWAPA

1. Kasten rechts: «alle sichtbar, Marke Plum» übernehmen?
2. Foto: gross, kompakt (Empfehlung) oder ohne?
3. Doppelter Satz: im Kasten weglassen oder neben dem Foto einen anderen Satz?
