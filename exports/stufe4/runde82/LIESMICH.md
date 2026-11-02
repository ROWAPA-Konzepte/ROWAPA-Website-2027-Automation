# Runde 82 · Untertitel wieder ein Absatz, Kasten übernommen, Entwürfe laufende Linien, Foto schmaler und Text neben dem Foto (Stufe 4, 01.11.2026)

## Auftrag ROWAPA (Entscheid 396)

- Header: kein Umbruch im Untertitel, kein eigener Absatz. Wieder wie vorher.
- Kasten «alles sichtbar, Marke Plum» übernehmen.
- Linien von den fünf Methoden zum Kasten rechts: immer animieren, als Laufbewegung von den Punkten nach rechts; beim Klick nur die Farbe wechseln.
- Foto: «gross» ist zu gross, «kompakt» zu klein. Ausschnitt oben und unten eingrenzen (schmaler) und mit der folgenden Section (Kundenstimmen) verbinden. Ein bis zwei Vorschläge.
- Text neben dem Foto: zwei bis drei Vorschläge mit Titel und Untertitel.

## 1. Auf die echte Seite übernommen (`/performance-analyse`, nativ, Entwurfsseite gleich)

| Punkt | Umsetzung |
|---|---|
| Untertitel im Header | wieder **ein Absatz**: «Fundierte Empfehlungen für die Entwicklung Ihrer Teams und Führungskräfte. Für mehr Vertriebs- und Mitarbeiterperformance.» Der zweite Absatz und die Kombi-Klasse `is-erster-satz` sind entfernt |
| Kasten «Fünf Perspektiven» | Attribut `data-ergebnis="marke"` an `methode_layout`: alle fünf Punkte immer voll sichtbar, nur die Marke der Punkte der angeklickten Methode wird Plum und etwas grösser, die übrigen Marken Sea Cliff |

## 2. Neue Entwürfe zum Umschalten (Umschaltleiste 1.3.0)

https://rowapa-website-2027-automation.webflow.io/performance-analyse-entwurf · unten links «Varianten»

Direkt zu meinen Empfehlungen:
https://rowapa-website-2027-automation.webflow.io/performance-analyse-entwurf?v=linien:laufen,foto:grau,fototext:a

| Punkt | heute | Entwurf |
|---|---|---|
| «Fünf Perspektiven»: Linien zum Kasten | ruhende Linien, die aktive in Plum | **laufen dauernd:** die Linien bestehen aus Punkten, die ohne Pause von den Methoden zum Kasten wandern (Sea Cliff, die aktive Linie in Plum und etwas kräftiger). Beim Klick auf eine Methode wechselt nur die Farbe, die Bewegung läuft weiter. Bei «Bewegung reduzieren» zeigt die Seite wie bisher die Methoden offen untereinander, ohne Linien. Grafik-Skript 1.26.0 (`data-linien="laufen"`) |
| Foto mit Text | gross: Foto bis an den Rand, 16:10, Text auf dunkler Fläche | **Vorschlag 1 «schmaler, im Grau der Kundenstimmen»:** Ausschnitt oben und unten beschnitten (2,2:1, Bildmitte bei 25 %, Köpfe ganz sichtbar), Text auf Snowbank-Grau wie die Kundenstimmen, weniger Abstand zur folgenden Section. Foto und Kundenstimmen wirken als ein Block. **Vorschlag 2 «schmaler, Text als Karte»:** gleicher Ausschnitt, der Text steht auf einer weissen Karte, die ins Foto hineinragt, mit versetztem Plum-Rahmen wie bei der Kundenstimme darunter |
| Text neben dem Foto | «Eingeordnet von Menschen aus der Praxis.» | **A**, **B** oder **C** (siehe Texttabelle) |

**Höhe der Foto-Section und Platz für die Kundenstimmen** (mit Text A; gemessen auf der Testadresse, Section oben 80 px unter dem Fensterrand):

| Fenster | gross (heute) | Vorschlag 1 grau | Vorschlag 2 Karte | kompakt (Runde 81) |
|---|---|---|---|---|
| 2000 × 1050 | 729 px, Rest 241 | **530 px, Rest 440** | 606 px, Rest 364 | 431 px |
| 1440 × 900 | 525 px, Rest 295 | **442 px, Rest 378** (mit Text B/C 382) | 436 px, Rest 383 | 438 px |
| 768 × 1024 | 425 px | 384–425 px | 674–717 px | 380 px |
| 390 × 844 | 630–655 px | 630–655 px | 599–602 px | – |

«Rest» = Höhe, die im Fenster unter der Foto-Section für «Kundenstimmen · Aus der Praxis» bleibt. Das Foto bleibt deutlich grösser als «kompakt» (bei 2000 px 1167 px breit, «kompakt» rund 650 px), nimmt aber rund 200 px weniger Höhe als «gross».

**Empfehlung:** Vorschlag 1 (grau). Er ist ruhiger, bindet das Foto ohne zusätzliches Element an die Kundenstimmen und bleibt auf dem Tablet niedrig. Vorschlag 2 wiederholt den Plum-Rahmen der Kundenstimme direkt darüber; das betont, wirkt aber doppelt, und auf dem Tablet wird die Section höher (Karte unter dem Foto).

## 3. Texttabelle «Text neben dem Foto»

Im Titel kein «Praxis», weil gleich danach «Aus der Praxis» folgt. Jede Fassung stützt sich nur auf Angaben, die schon auf der Seite stehen (Fachpersonen mit eigener Praxis in Vertrieb und Führung der Finanzbranche, Ergebnisgespräch, Empfehlungen, priorisierte Massnahmen). Mit jeder neuen Fassung ist auch der doppelte Satz gelöst: Der Kasten bei «Fünf Perspektiven» behält den heutigen Satz, neben dem Foto steht ein anderer.

| | Titel | Untertitel | Begründung | offene Fragen |
|---|---|---|---|---|
| Original | Eingeordnet von Menschen aus der Praxis. | Unsere Fachpersonen bringen eigene Praxis aus Vertrieb und Führung in der Finanzbranche mit. Sie ordnen die Ergebnisse ein und leiten Empfehlungen ab. | – | gleicher Satz steht im Kasten bei «Fünf Perspektiven»; «Praxis» dreimal in Folge mit «Aus der Praxis» |
| **A** (Empfehlung) | Zahlen brauchen Erfahrung. | Unsere Fachpersonen kennen Vertrieb und Führung in der Finanzbranche aus eigener Erfahrung. Im Ergebnisgespräch ordnen sie die Auswertung mit Ihnen ein. | kurz und klar; passt zum Foto (zwei Personen über einer Auswertung); nennt den nächsten Schritt (Ergebnisgespräch) und dass es gemeinsam geschieht | – |
| B | Persönlich eingeordnet. | Hinter jeder Auswertung stehen Menschen, die Ihre Branche kennen. Sie leiten aus den Ergebnissen konkrete Empfehlungen für Ihre Teams und Führungskräfte ab. | betont den Menschen hinter der digitalen Erhebung; greift den Nutzen aus dem Header auf (Empfehlungen für Teams und Führungskräfte) | «Ihre Branche» setzt voraus, dass der Leser aus der Finanzbranche kommt (Zielgruppe der Seite) |
| C | Vom Befund zum Gespräch. | Die Daten zeigen, wo Sie stehen. Im Ergebnisgespräch übersetzen unsere Fachpersonen sie in Prioritäten, die zu Ihrem Unternehmen passen. | zeigt den Weg von der Auswertung zum Handeln; «Prioritäten» stützt sich auf «Massnahmen, priorisiert» | – |

Redaktionsleitfaden: Was ist es (fachliche Einordnung durch Menschen), für wen (Unternehmen der Finanzbranche), Nutzen (Empfehlungen, Prioritäten), nächster Schritt (Ergebnisgespräch). Anrede Sie, «Unternehmen». ✓ für A, B, C.

## 4. Grafik-Skript 1.26.0

Repository `rowapa-website-grafik`, Commit `aa8ab8c`, site-weit eingebunden (SRI geprüft, Version 1.26.0 aktiv). Neu ist `data-linien="laufen"`. Die Linien werden jetzt einmal angelegt und bei Grösse oder Klick nur neu geführt, damit die Laufbewegung beim Klick nicht neu beginnt. Ohne das Attribut bleibt alles wie bisher.

## Geprüft (Testadresse, nach dem Veröffentlichen)

| Prüfung | Ergebnis |
|---|---|
| Echte Seite: Untertitel ein Absatz, Kasten «Marke», keine Umschaltleiste, Grafik 1.26.0 | ✓ |
| Entwurf «Linien laufen»: fünf Linien mit Laufbewegung, aktive Linie Plum; nach Klick weiter fünf Linien, Bewegung läuft weiter | ✓ |
| Foto grau / Karte in 2000, 1440, 768, 390 | ✓ Köpfe frei, Kinn sichtbar, Kundenstimmen darunter im Bild |
| Texte A, B, C | ✓ Titel und Untertitel wechseln, «heute» = echte Seite |
| «Bewegung reduzieren»: Methoden offen, keine Linien, keine Bewegung | ✓ |
| Umschaltleiste 1.3.0: drei Punkte, gespeicherte Wahl aus 1.2.0 fällt auf «heute» zurück, wenn es sie nicht mehr gibt | ✓ |

## Prüfsession 18 (Entscheid 378)

| Bereich | Punkt | Ergebnis |
|---|---|---|
| A CI | Farben | ✓ Linien Sea Cliff, aktive Linie und Marke Plum; Vorschlag 1 Snowbank, Vorschlag 2 Weiss mit Plum-Rahmen |
| A CI | Abstände | ✓ 8-px-Raster (2,5 rem, 3 rem, 1,5 rem) |
| B Texte | Redaktionsleitfaden, Anrede, «Unternehmen» | ✓ A, B, C; keine erfundenen Angaben |
| B Texte | Doppelungen | ✓ doppelter Satz mit jeder neuen Fassung gelöst; ? zweimal «Wo bleibt …» weiterhin offen (Runde 80) |
| B Fotos | Köpfe, Kinn, Ausschnitt je Format | ✓ 2,2:1 mit Bildmitte 25 % ab 992 px, darunter wie bisher |
| C Bauweise | nativ zuerst | ✓ Untertitel und Kasten nativ; Linien im gepflegten Grafik-Skript; Foto und Texte in der Umschaltleiste, bei Wahl nativ |
| C Bauweise | «Bewegung reduzieren» | ✓ wie bisher Methoden offen ohne Linien (geprüft); die Laufbewegung ist zusätzlich im CSS abgeschaltet |
| C Bauweise | Tablet | ✓ geprüft; Vorschlag 2 auf dem Tablet höher (Hinweis oben) |
| D Abmachungen | Entscheid 393, 396 | ✓ heute behalten, Entwürfe umschaltbar, mehrere Möglichkeiten nebeneinander |
| E Ablauf | Veröffentlichen | ✓ nur Testadresse |
| E Ablauf | Löschen | ✓ nur der zweite Untertitel-Absatz und die Kombi-Klasse `is-erster-satz` (Rückbau auf Wunsch) |
| E Ablauf | Grafik nur im neuen Repository | ✓ |

## Fragen an ROWAPA

1. Linien: «laufen dauernd» übernehmen?
2. Foto: Vorschlag 1 (grau, Empfehlung), Vorschlag 2 (Karte) oder doch gross?
3. Text neben dem Foto: A (Empfehlung), B oder C?
4. Offen aus früheren Runden: Megamenü-Markierung «Current» von Hand im Designer (Anleitung Runde 80); zweimal «Wo bleibt …»; alter Ordner `tools/grafik` im Website-Repository löschen?
