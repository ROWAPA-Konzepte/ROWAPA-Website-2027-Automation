# Runde 70 · Animierte Diagramme, Header füllend, Seitenverlauf, «Aus der Praxis» (Stufe 4, 01.11.2026)

Rückmeldung ROWAPA (Entscheid 384):
- **Reiter-Grafiken:** Sie sollen sich beim Scrollen aufbauen und animiert sein, die erste unter «Führung» auch farblich. Bisher waren es Bilder, die nur einflossen.
- **Header:** Ohne Logos muss der blaue Bereich das Bild füllen, das Wellenmeer bis unten.
- **Seitenverlauf:** prüfen. Der Logobereich gehört ins gleiche Grau wie die Kundenstimme.
- **Titel:** Braucht es für Kundenstimme und Logos einen Titel?
- **Vorgehen:** zuerst Anpassungen in der Vorschau.

Testadresse: https://rowapa-website-2027-automation.webflow.io/performance-analyse-vorschau (veröffentlicht und geprüft).
Dateien:
- `diagramme_desktop.mp4`: Video, rund 25 s, alle fünf Reiter
- `diagramme_aufbau_desktop.jpg`: je Reiter mitten im Aufbau und am Ende
- `diagramme_handy.jpg`
- `header_vollbild_1440.jpg`
- `aus-der-praxis_1440.jpg`

## 1. Reiter-Grafiken: echte Diagramme statt Bilder

Die vier Bilder (Führung, Rollenprofil, Teams, Interne Referenz) sind ersetzt durch **Diagramme aus normalen Webflow-Elementen**. Texte, Farben und Grössen lassen sich im Designer ändern. Die Werte stehen in Attributen (`data-wert`). Das Grafik-Skript **1.21.0** (neues Modul `diagramm`) setzt Lage, Breite und Farbe und bewegt sie. Der Aufbau läuft beim ersten Erscheinen und **bei jedem Reiterwechsel**.

| Reiter | Aufbau |
|---|---|
| **Führung** (farbig) | Eigensicht gleitet zuerst an ihre Stelle, dann Fremdsicht und Beobachtung. Danach zeichnet sich der **Abstand Eigen- zu Fremdsicht als Plum-Band**, und die Zahl rechts zählt hoch (Plum ab 1,5 Punkten). Neue Legende «Abstand Eigen- zu Fremdsicht» |
| **Rollenprofil** | Balken wachsen von links (unter dem Soll in Plum), die Soll-Marke setzt sich, der Abstand zum Soll zählt hoch (−1,9 … +0,8) |
| **Teams** | Die Wärmetabelle färbt sich in einer diagonalen Welle von Grau zu ihrer Farbe (tief Plum, hoch Sea Cliff). Legende «tiefer / höher» |
| **Interne Referenz** | Zuerst wächst die Vergleichsgruppe, dann die Referenz, dann zeichnet sich der Abstand Plum, und die Zahl zählt hoch |
| **Massnahmen** | Hauptziel und Schritte blenden nacheinander ein, die Nummern 1–3 füllen sich Plum |

- **Musterdaten:** dieselben Werte wie in den bisherigen Bildern, keine neuen Zahlen.
- **Feste Grafikfläche:** 32 rem am Desktop, nichts springt beim Reiterwechsel (gemessen: alle fünf Reiter 512 px, kein Überlauf).
- **Handy:** Die Diagramme ordnen sich neu (Bezeichnung über der Zeile) statt einer verkleinerten Bildfassung. Keine horizontale Verschiebung.
- **«Bewegung reduzieren»:** Alle Werte stehen sofort am Ziel (geprüft).
- **Grenze:** Die Diagramme brauchen das Grafik-Skript, um die Werte zu setzen. Fehlt es, stehen Balken und Marken in der Mitte. Das Skript ist site-weit eingebunden und mit SRI auf einen festen Stand gesperrt.

## 2. Header füllt jede Ansicht

`section_header-unterseite`:
- Mindesthöhe am Desktop neu Fensterhöhe minus Navigation (`calc(100svh - 73px)`, vorher minus 169 px wegen des Logo-Bands)
- Tablet und Handy neu `calc(100svh - 65px)` (vorher ohne Mindesthöhe)

Das Wellenmeer liegt im ganzen Header und reicht damit bis zur Fensterunterkante. Gemessen: 1440 × 900 Header bis 900 px, 768 × 1024 vorher 155 px Lücke, jetzt füllend. Da die Klasse geteilt ist, gilt das auch für die Originalseite `/performance-analyse`. Dort rutscht das Logo-Band unter das erste Bild, bis die Vorschau übernommen ist.

## 3. Seitenverlauf (Flächenfolge und Dramaturgie)

**Flächen vorher:** Header dunkel · Ausgangslage weiss · Entscheidungsgrundlage + Ergebnis grau · Methode weiss · Kundenstimme grau · **Logos weiss · So arbeiten wir weiss · Fragen weiss** · Kontakt hellblau. Drei weisse Flächen hintereinander, der Rhythmus brach.

**Flächen jetzt:** Header dunkel · Ausgangslage weiss · Entscheidungsgrundlage + Ergebnis grau · Methode weiss · **Aus der Praxis (Kundenstimme + Logos) grau** · So arbeiten wir weiss · **Fragen grau** · Kontakt hellblau. Hell und grau wechseln sich ab, jede Fläche ist ein Kapitel.

**Reihenfolge:** Ich empfehle, sie so zu lassen. Begründung, Kapitel für Kapitel:

| Kapitel | Frage, die es beantwortet |
|---|---|
| Ausgangslage | Wo stehen wir? |
| Entscheidungsgrundlage und Ergebnis | Was bekommen wir? |
| Methode | Wie entsteht das? |
| Aus der Praxis | Wirkt es? |
| So arbeiten wir | Was kommt auf uns zu? |
| Fragen | Was ist noch offen? |
| Kontakt | Wie geht es weiter? |

Die Kapitel folgen den Fragen eines Entscheiders vor dem Erstgespräch.

## 4. Kundenstimme und Logos: ein Block mit Titel (Einschätzung und Umsetzung)

**Meine Einschätzung:** Ja, es braucht einen Titel. Ohne ihn sind es zwei lose Elemente, die man leicht überscrollt. Beides ist Beweis («Wirkt es?») und gehört zusammen.

Praxisberichte empfehlen:
- Belege nahe an der Stelle zu zeigen, an der man sich entscheidet
- benannte Stimmen mit Funktion und Unternehmen zu verwenden
- Logos nur von echten Kunden zu zeigen

Das trifft hier zu. Kontrollierte Studien dazu habe ich nicht gefunden.

**Umgesetzt (Vorschau):**
- Neuer Kopf: Bezeichnung **«Aus der Praxis»**, Titel **«Nachhaltig durch Begleitung im Alltag.»** Die Kernaussage der Stimme wird zum Titel. Der kleine Plum-Titel in der Karte entfällt, damit er nicht doppelt steht.
- Die Karte mit dem Zitat steht darunter, nach rechts eingerückt.
- Die **Logo-Leiste hat jetzt dasselbe Grau** (Theme Soft). Getrennt durch eine feine Linie folgt sie direkt darunter, als ein durchgehender Block.

[ROWAPA bestätigen: Titel und Bezeichnung]

## Bau (Webflow)

- **Neue Klassen Diagramme:**
  - `dia`, `dia_zeile`, `dia_label`, `dia_achse`, `dia_linie`
  - `dia_spanne` (+ `is-abstand`)
  - `dia_punkt` (+ `is-fremd`, `is-beobachtung`)
  - `dia_wert` (+ `is-gross`)
  - `dia_spur`, `dia_balken` (+ `is-tief`, `is-gruppe`, `is-referenz`), `dia_soll`, `dia_paar`
  - `dia_skala`, `dia_skala-werte`
  - `dia_legende`, `dia_legende-item`, `dia_marke` (+ `is-fremd`, `is-beobachtung`, `is-abstand`, `is-soll`, `is-tief`, `is-gruppe`, `is-referenz`, `is-ist`)
  - `dia_waerme`, `dia_kopf`, `dia_team`, `dia_zelle`

  Alle Farben über Variablen, Abstände 8/16 px.
- **Grafikflächen:** `auswertung_grafik` der fünf Reiter mit `data-grafik="diagramm"` (statt «aufbau»), Skala über `data-min`/`data-max` (Führung und Rollenprofil 4–10, Referenz 0–10), Teams mit `data-spalten="4"`.
- **Entfernt** (nur in der Vorschau):
  - die acht Bilder der vier Reiter (Desktop und Handy); die Assets bleiben
- **Aus der Praxis:**
  - neue Klassen-Kombinationen `section-head is-flush is-ganz`, `padding-section-large is-stimme`; `stimme_rahmen` in Spalte 2
  - `section_logo-leiste` grau, ohne Rahmen; `logo-leiste_inner` mit Linie oben
- **Fragen:** `section_faq theme-soft`.
- **Grafik 1.21.0** @`5c08b3e`, SRI geprüft, site-weit (Footer).

## Prüfsession 6 (Entscheid 378), vor dem Vorschlag zur Freigabe

| Bereich | Punkt | Ergebnis |
|---|---|---|
| A CI | Farben | ✗ → korrigiert: Ein Farbverlauf für die Wärmetabellen-Legende liess sich nicht an Variablen binden (wäre fest codiert gewesen). Ersetzt durch zwei Marken «tiefer» (Plum) und «höher» (Sea Cliff). Sonst nur Variablen; das Skript liest die CI-Farben aus den Variablen |
| A CI | 8-px-Raster | ✗ → korrigiert: Wärmetabelle auf dem Handy 4 px Abstand und Spaltenkopf 4 px Innenabstand, jetzt 8 px bzw. 0 |
| A CI | Ruhe, Plum sparsam | ✓ Plum nur für Abstände, tiefe Werte und Nummern; Bewegungen 0,9 s, gestaffelt |
| A CI | Flächenrhythmus | ✓ abwechselnd hell und grau |
| B Texte | keine erfundenen Fakten | ✓ gleiche Musterdaten, als «Musterdaten» gekennzeichnet |
| B Texte | neue Bezeichnungen | ✓ «Aus der Praxis», «Abstand Eigen- zu Fremdsicht», «Ist unter dem Soll», «tiefer/höher»; ? Titel des Beweis-Blocks bestätigen |
| B Texte | Barrierefreiheit | ✓ Bezeichnungen und Zahlen sind Text (vorher im Bild); Marken sind Schmuck |
| C Bauweise | nativ, pflegbar | ✓ Diagramme aus Elementen, Werte als Attribute, im Handbuch beschrieben |
| C Bauweise | eigener Code | ✓ nur für Bewegung und Lage der Werte (Webflow kann Werte nicht beim Reiterwechsel neu aufbauen); ? ohne Skript stehen Balken in der Mitte (siehe Grenze) |
| C Bauweise | «Bewegung reduzieren» | ✓ Werte sofort am Ziel |
| D Abmachungen | Header Unterseite | ✓ füllt das erste Bild ohne Logo-Band (ersetzt Mindesthöhe aus Entscheid 375) |
| D Abmachungen | Logo-Leiste | ✓ nach der Kundenstimme, im selben Grau |
| E Ablauf | Löschen | ✓ nur ersetzte Bilder und der doppelte Karten-Titel in der Vorschau |
| E Ablauf | Veröffentlichen | ✓ nur Testadresse |

## Quellen (Praxisberichte, keine kontrollierten Studien)

- [Design Project: Incorporating Social Proof (Testimonials, Case Studies, Logos)](https://designproject.io/blog/incorporating-social-proof-testimonials-case-studies-and-logos/)
- [Blend: Website social proof](https://www.blendb2b.com/blog/website-social-proof)
- [Pravin Kumar: Why customer logos are not proof](https://www.pravinkumar.co/blog/why-customer-logos-are-not-proof-b2b-software-2026)
