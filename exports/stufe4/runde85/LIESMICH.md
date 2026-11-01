# Runde 85 · Abstand unter der Linie wie Startseite, drei Aussagen gemeinsam, Seitenwechsel und fehlende Seiten (Stufe 4, 01.11.2026)

## Rückmeldung ROWAPA (Entscheid 399)

1. Der graue Strich ist immer noch nicht so wie auf der Startseite.
2. Von der Startseite über das Megamenü klappt der Seitenwechsel nicht, nur zurück. Jede angeklickte Seite muss gleich geladen werden.
3. «Ihre Entscheidungsgrundlage»: Die drei Aussagen mit dem roten Strich erscheinen beim Laden etwas versetzt zum weissen Feld. Absicht?

## 1. Linie: Vergleich mit der Startseite

Alle Linien der Startseite gemessen (1440 und 3440 px). In einem grauen Abschnitt gibt es genau eine: unter «Im Blickpunkt» (`section_cas`). Die anderen Linien der Startseite (`is-anschluss`, `is-linie`) liegen in weissen Abschnitten und laufen nur über die Inhaltsbreite.

| | Startseite «Im Blickpunkt» | Performance-Analyse vorher | jetzt |
|---|---|---|---|
| Linie | 1 px, Manganese 14 %, ganze Breite | gleich | gleich |
| Linie bis zum ersten Text darunter | **100 px** («Wissen & Impulse») | 48 px («Kundenstimmen») | **100 px** |

Die Linie war gleich, anders war der Abstand darunter. Die Kundenstimmen haben deshalb wieder den normalen Abstand oben (Kombi-Klasse `is-nach-bild` entfernt, auf beiden Seiten). Die Klasse wird nicht mehr verwendet und kann beim nächsten Aufräumen gelöscht werden.

## 2. Drei Aussagen bei «Ihre Entscheidungsgrundlage»

Das war die Standard-Einblendung für Karten nebeneinander (seit Runde 64): Das weisse Feld stand schon, die drei Aussagen glitten um 0,12 und 0,24 s versetzt herein. **Jetzt** erscheint das weisse Feld samt den drei Aussagen gemeinsam (Einblendung am Feld `erreichen_kacheln`, an den drei Kacheln entfernt; beide Seiten). Gemessen: in rund 0,3 s, alle drei gleichzeitig.

## 3. Seitenwechsel bei jedem Klick

**Gemessen:** Zwischen Seiten, die es gibt, läuft der Wechsel in beide Richtungen gleich (Startseite ↔ Performance-Analyse, Runde 84). Navigation und Megamenü der Startseite verlinken auf 32 verschiedene Seiten, und **nur zwei davon existieren** auf der Testadresse: die Startseite und die Performance-Analyse. Die anderen 30 (z. B. «So arbeiten wir», «Über uns», «Kontakt», die Themen- und Entwicklungsseiten) ergeben die Fehlermeldung 404.

**Ursache:** Für fehlende Seiten zeigt Webflow nicht eine Seite unseres Projekts, sondern die allgemeine Fehlerseite der Plattform: weiss, Englisch («404 – Page not found»), ohne Navigation und ohne unsere Skripte. Darum gibt es dort keinen Seitenwechsel, sondern einen harten Sprung. Das betrifft vorerst fast jeden Klick im Megamenü.

**Lösung:** eine eigene 404-Seite im ROWAPA-Auftritt (Navigation, kurzer Text, Weg zur Startseite, Footer). Sie hat dieselben Skripte wie alle Seiten, der Wechsel läuft dann bei jedem Klick gleich. Sie wird ohnehin vor dem Start gebraucht (offener Punkt 126). Die 404-Seite ist eine Hilfsseite («Utility Page») und über die Schnittstelle nicht erreichbar. **ROWAPA:** im Designer links «Pages» öffnen und unten bei «Utility Pages» die Seite «404» anklicken. Dann kann ich sie über die offene Designer-Verbindung bauen. Gibt es dort keine 404-Seite, bitte melden.

Bis dahin: Den Seitenwechsel bitte mit der Performance-Analyse und der Startseite testen (Megamenü «Was wir tun» › «Performance-Analyse», zurück über das Logo).

## Geprüft (Testadresse)

| Prüfung | Ergebnis |
|---|---|
| Linie bis zum ersten Text: Startseite und Performance-Analyse je 100 px (1440, 3440) | ✓ |
| Drei Aussagen erscheinen gemeinsam mit dem weissen Feld | ✓ |
| Navigation und Megamenü: 32 verlinkte Seiten, 2 vorhanden, 30 ergeben 404; dazu Platzhalter `#` und E-Mail | festgestellt |
| 404-Antwort: Plattform-Fehlerseite ohne Projekt-Skripte | festgestellt |

## Prüfsession 21 (Entscheid 378)

| Bereich | Punkt | Ergebnis |
|---|---|---|
| A CI | Linie, Abstände | ✓ wie Startseite (gleiche Variable, gleicher Section-Abstand) |
| C Bauweise | nativ | ✓ Abstand über die Standardklasse, Einblendung über das bestehende Attribut |
| D Abmachungen | Entscheide 394, 398 | ✓ Einblendungen ruhiger (wie Titelblöcke, Zitate, Zahlen seit Runde 80); Seitenwechsel bei jedem Klick: braucht die 404-Seite (?) |
| E Ablauf | Veröffentlichen | ✓ nur Testadresse |
| E Ablauf | Löschen | ✓ nichts gelöscht; ungenutzte Klasse `is-nach-bild` bleibt bis zur Freigabe |

## Fragen an ROWAPA

1. Bitte im Designer die Hilfsseite «404» öffnen, damit ich sie bauen kann (Texte als Vorschlag mit Texttabelle).
2. Ungenutzte Klasse `is-nach-bild` löschen?
