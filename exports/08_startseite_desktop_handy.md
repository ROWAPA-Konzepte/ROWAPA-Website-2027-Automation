# ROWAPA Website 2027 · Startseite `/home-v3`: Desktop → Handy

**Neu seit Runde 45:** Alle Vorschläge als Vorher-nachher-Bilder mit Auswahl auf https://claude.ai/artifact/94Kw6Fk1UmcaodtJvJ3xTC (gemessene Längen statt Schätzungen). Die Startseite ist jetzt `/`.

**Stand:** 27.10.2026 · Runde 38 · **Vorschlag, nichts gebaut** (ausser der Korrektur in Kap. 5) · Entscheid je Section durch ROWAPA
**Grundlagen:** Entscheid 268 (Vorgehen Handy), Benutzerhandbuch 2.32 (Darstellung je Format), Redaktionsleitfaden (`04_redaktionsleitfaden.md`)

---

## 1. Grundsatz (Entscheid 268)

- **Das Handy bekommt eine eigene Fassung.** Es zeigt nicht einfach den verkleinerten Desktop. Jede Section bekommt die Darstellung, die auf dem Handy am besten wirkt. Die Desktop-Fassung bleibt unverändert.
- **Vier Möglichkeiten je Section:**

| Möglichkeit | Bedeutung | Beispiel |
|---|---|---|
| **gleich** | gleiche Inhalte und Anordnung, nur umgebrochen | Häufige Fragen |
| **vereinfacht** | gleiche Inhalte, aber kompakter (kleinere Bilder, engere Abstände, einzelne Zusätze ausgeblendet) | Im Blickpunkt ohne zwei Eckdaten |
| **andere Darstellung** | gleiche Aussage in einer anderen Form (Liste statt Kacheln, Wischreihe, Aufklappen) | Kennzahlen als Zeilen statt Kacheln |
| **weglassen** | auf dem Handy ausgeblendet, auf Desktop und Tablet sichtbar | Hinweis «Wissensplattform» in ROWAPA Digital (seit Runde 18) |

- **Ausblenden statt löschen:** In Webflow wird nur im Breakpoint Handy auf «Display: None» gestellt. Der Inhalt bleibt im Designer und im CMS, und Suchmaschinen sehen ihn weiterhin.
- **Ablauf:** Bei jeder neuen Seite gleich mitbauen. Am Schluss folgt ein gemeinsamer Durchgang auf echten Geräten (iPhone, Android, Tablet).
- **Tablet (768 bis 991 px):** Das Tablet übernimmt den Entscheid der Section. Wo Platz ist, stehen zwei Spalten (z. B. Kennzahlen nebeneinander, Gründe 2 × 2). Ein eigener Entscheid fürs Tablet ist nur nötig, wenn ROWAPA das wünscht.

---

## 2. Messung heute (Staging, 27.10.2026)

Gemessen mit Chromium und den TASA-Schriften auf `rowapa-website-2027-automation.webflow.io/home-v3`, ganz durchgescrollt (Zähler, Bilder und Grafiken stehen).

| Format | Seitenlänge | Bildschirme |
|---|---|---|
| Desktop 1440 × 900 | 14 761 px | 16,4 |
| Tablet 768 × 1024 | 16 231 px | 15,9 |
| Handy 390 × 844 | 14 251 px | 16,9 |

Die Handy-Zahl enthält die Korrektur aus Kap. 5 (Team +55 px). Bilder: `exports/stufe2-screens/runde38/`.

---

## 3. Tabelle je Section

**So lesen:** «Handy heute» ist die Höhe der Section auf einem 390 px breiten Handy, in Klammern die Bildschirme (844 px). «Handy neu» ist eine Schätzung aus den gemessenen Teilhöhen. Die Spalte «Entscheid» füllt ROWAPA aus: ok, eine Option (A, B, C) oder eine eigene Idee.

| # | Section | Desktop (1440) | Handy heute | Vorschlag | Was sich auf dem Handy ändert | Handy neu (Schätzung) | Entscheid ROWAPA |
|---|---|---|---|---|---|---|---|
| 1 | Navigation | Megamenü «Bühne» | Logo + Menü-Knopf, Menü als Liste | **gleich** (+ Idee 1) | Menüzeilen mind. 44 px hoch (beim Gerätedurchgang prüfen). Idee 1: kleiner Button «Erstgespräch» neben dem Menü-Knopf | – | |
| 2 | Header | 731 px, H1 dreizeilig, Punktemeer | 703 px (0,83) | **gleich** | – | 703 | |
| 3 | Logo-Band | 96 px, Laufband | 76 px | **gleich** | – | 76 | |
| 4 | Was uns antreibt | 1202 px, Text steht links, Kacheln rechts | 1357 px (1,61): Einleitung 309, drei Kennzahl-Kacheln je 144, vier Gründe-Kacheln je 112 (Text schon ausgeblendet) | **andere Darstellung** | Kennzahlen als kompakte Zeilen: Zahl links, Bezeichnung rechts, feine Linie dazwischen (je rund 76 px). Gründe als schlanke Liste ohne Rahmen: Nummer und Titel in einer Zeile (je rund 60 px). Bezeichnung der Kennzahlen 15 statt 13 px | rund 950 (−400) | |
| 5 | Unsere Erfolge | 886 px, Slider mit Bild und Zitat | 792 px (0,94) | **gleich** | Punkte des Sliders: gleiche Grösse, aber 44 px Tippfläche (heute 12 × 15 px). Button «Alle Referenzen» 44 statt 39 px hoch | 792 | |
| 6 | Lösungen für Unternehmen | 4946 px, fünf Themen mit Einrasten und Figur | 3819 px (4,52): Kopf mit Leiste 428, je Thema 663 bis 688 (Titel 2 × 46, Figur 242, Aussage 53, Text 123 bis 148) | **A vereinfacht** (Empfehlung) | **A:** Figur rund 40 % kleiner (150 statt 242 px), riesiger Titel eine Stufe kleiner, Abstände zwischen den Themen enger. Leiste und Texte bleiben. **B:** wie A, aber ohne Figur (nur Titel, Aussage, Text, Link). **C:** Reiter: Die stehende Leiste wird zur Auswahl, es steht immer nur ein Thema da (natives Webflow-Tabs-Element) | **A** rund 3050 (−770) · **B** rund 2550 (−1270) · **C** rund 1150 (−2670) | |
| 7 | Unser Vorgehen | 827 px, Treppen-Grafik, vier Phasen | 630 px (0,75): Treppe aus, Phasen als Wischkarten | **gleich** | Link «Mehr zu unserem Vorgehen» mit 44 px Tippfläche (heute 18 px) | 630 | |
| 8 | ROWAPA Digital | 836 px, Orbit, fünf Werkzeuge | 679 px (0,80): Orbit aus, Werkzeuge als Wischkarten | **gleich** | Button «Demo vereinbaren» 44 statt 38 px hoch, Link «Alle digitalen Lösungen» mit 44 px Tippfläche | 679 | |
| 9 | Die Menschen hinter ROWAPA | 784 px, Porträts, zwei Buttons | 765 px (0,91): Porträts als Wischreihe | **gleich** | Korrektur schon gemacht (Kap. 5). Buttons 44 statt 39 px hoch | 765 | |
| 10 | Persönlich weiterkommen | 929 px, drei Wege mit Video beim Darüberfahren | 839 px (0,99): Wischkarten, Du-Anrede | **gleich** | – | 839 | |
| 11 | Im Blickpunkt (CAS) | 695 px, Bild, Text, vier Eckdaten, zwei Buttons | 839 px (0,99): Bild 156, Text 200 (8 Zeilen), Eckdaten 70 (2 Zeilen), 2 Buttons | **vereinfacht** | Eckdaten «16 Präsenztage» und «15 ECTS-Punkte» ausblenden (Datum und «mit der HWZ Zürich» bleiben). Den zweiten Satz «Führungsthemen aus dem Berufsalltag …» ausblenden (Platz für Einzelheiten ist die CAS-Seite). Zweiter Button als Textlink «Zoom-Infosession am 17.11.2026» | rund 700 (−140) | |
| 12 | Neueste Insights | 685 px, drei Karten, Webinare, ROWAPA TV | 972 px (1,15): Kartenbild 186, Auszug 77 bis 102 | **vereinfacht** | Kartenbild 140 statt 186 px, Auszug ausblenden (wie auf Desktop 992 bis 1919). Pfeile 44 statt 40 px, Button «Alle Inhalte» 44 px | rund 830 (−140) | |
| 13 | Gut zu wissen (FAQ) | 667 px, sechs Fragen | 770 px (0,91), zum Aufklappen | **gleich** | Link «Schreiben Sie uns» 44 px Tippfläche (heute 26 px) | 770 | |
| 14 | Kontakt | 609 px, Porträt, Werte, Telefon, E-Mail | 785 px (0,93): Telefon und E-Mail als kleine Textlinks (24 px) | **vereinfacht** | Mobil, Büro und E-Mail als drei Zeilen mit je 48 px Tippfläche (die Links öffnen schon heute Telefon bzw. Mail). Porträt 96 statt 128 px | rund 800 (±0) | |
| 15 | Footer (alle Seiten) | 794 px | 1161 px (1,38): Marke und Adresse 231, drei Linkgruppen, Newsletter 248, Rechtliches 103, Wortmarke 91 | **A vereinfacht** (Empfehlung) | **A:** engere Abstände, Wortmarke unten kleiner, Eingabefeld Newsletter 48 statt 21 px hoch, Linkzeilen mind. 32 px. **B:** wie A, dazu die drei Linkgruppen zum Aufklappen | **A** rund 1000 (−160) · **B** rund 850 (−310) | |

### Summe (Schätzung)

| Auswahl | Handy-Länge | Bildschirme |
|---|---|---|
| heute | 14 251 px | 16,9 |
| alle Empfehlungen (Themen A, Footer A) | rund 12 650 px | rund 15,0 |
| Empfehlungen, aber Themen B | rund 12 150 px | rund 14,4 |
| stattdessen Themen C und Footer B | rund 10 600 px | rund 12,6 |

### Begründung der zwei Empfehlungen

- **Lösungen für Unternehmen, A statt C:** Die fünf Themen sind das Angebot von ROWAPA. Heute bekommt jedes Thema auf dem Handy fast einen eigenen Bildschirm, die Leiste oben zeigt, wo man steht. Bei Reitern (C) sieht man nur ein Thema, und die anderen vier werden auf dem Handy erfahrungsgemäss selten angetippt. Die Figuren sind das wiedererkennbare Bild der Themen. Kleiner wirken sie weiter, kosten aber weniger Platz. B ist die Wahl, wenn die Seite auf dem Handy deutlich kürzer werden soll.
- **Footer, A statt B:** Wer bis zum Footer scrollt, sucht meist etwas Bestimmtes (Adresse, Impressum, Kontakt). Offene Listen findet man ohne Tippen. Der Footer gilt auf allen Seiten, die Änderung wirkt also überall.

---

## 4. Regeln für alle Seiten auf dem Handy (Vorschlag)

| Regel | Wert | Heute auf `/home-v3` darunter |
|---|---|---|
| Tippfläche für Buttons, Pfeile, Slider-Punkte, Telefon, E-Mail | mind. 44 × 44 px (sichtbare Grösse darf kleiner sein, die Fläche wird mit Innenabstand grösser) | Buttons 38 bis 39 px (6), Slider-Punkte 12 × 15 (8), Pfeile 40 × 40 (2), Textlinks 18 bis 26 px (9), Kontaktlinks 24 px (3) |
| Linkzeilen in Listen (Footer, Menü) | mind. 32 px Abstand von Zeile zu Zeile | Footer-Links 19 px hoch (18), Abstand rund 30 px |
| Eingabefelder | 48 px hoch, Schrift 16 px (verhindert das automatische Hineinzoomen auf dem iPhone) | Newsletter: Schrift 16 px ist richtig, Höhe 21 px |
| Kleinste Schrift | 15 px; Fliesstext 17 px bleibt | Bezeichnung der Kennzahlen 13 px |
| Wischreihen | keine weiteren; heute fünf Reihen (Vorgehen, Digital, Team, Wege, Insights) und der Erfolge-Slider | – |
| Bewegung | auf dem Handy ruhiger: Treppe und Orbit aus, Figuren als Standbild (schon so) | – |
| Ausblenden | nur im Breakpoint Handy, nie löschen | – |

---

## 5. Gleich behoben (Fehler, keine Gestaltungsfrage)

- **Team: Button «Team kennenlernen» war auf dem Handy rechts abgeschnitten** (bei 390 px reichte er bis 426 px). Ursache: Die Button-Gruppe `button-group is-fest` durfte nicht schmaler werden. Korrektur: Im Breakpoint Handy quer (bis 767 px) darf sie schmaler werden (`flex-shrink: 1`, `max-width: 100%`). Die zwei Buttons stehen jetzt untereinander. Geprüft bei 360, 390 und 430 px; auf dem Tablet stehen sie weiterhin nebeneinander. Veröffentlicht am 27.10.2026. Auf den Bildern in `runde38/` ist noch der Stand vorher zu sehen.

---

## 6. Ideen zusätzlich (nicht gebaut)

1. **Erstgespräch auf dem Handy früher sichtbar:** Heute steht «Erstgespräch vereinbaren» auf dem Handy nur im Menü und in der Kontakt-Section, also nach rund 15 Bildschirmen. Vorschlag: In der Navigationsleiste steht neben dem Menü-Knopf ein kleiner Button «Erstgespräch» (Platz ist vorhanden: Logo 103 px, Knopf 44 px). Gilt dann auf allen Seiten.
2. **Vorher-nachher-Bilder je Section:** Nach dem Bau stelle ich je Section «heute» und «neu» nebeneinander. So sehen Sie den Unterschied ohne Handy.
3. **Gerätedurchgang am Schluss:** Eine kurze Liste mit den Prüfpunkten (Tippflächen, Wischen, Video, Formular, Querformat), die Sie auf Ihrem Handy abhaken können.

---

## 7. Nächster Schritt

1. ROWAPA entscheidet je Section (Spalte «Entscheid» oder kurz im Chat, z. B. «4 ok, 6 B, 11 ok, 15 A»).
2. Ich baue die Entscheide nativ auf `/home-v3`, nur im Breakpoint Handy (und wo nötig Tablet). Danach messe ich erneut, veröffentliche auf Staging und liefere Bilder vorher und nachher.
3. Die Regeln aus Kap. 4 gelten danach für jede weitere Seite.

### Bilder (`exports/stufe2-screens/runde38/`)

| Datei | Inhalt |
|---|---|
| `handy-1-header-antrieb-erfolge.png` | Header, Was uns antreibt, Unsere Erfolge |
| `handy-2-vorgehen-digital-team-wege.png` | Unser Vorgehen, ROWAPA Digital, Team, Persönlich weiterkommen (Team noch mit abgeschnittenem Button) |
| `handy-3-cas-insights-faq-kontakt-footer.png` | Im Blickpunkt, Insights, Gut zu wissen, Kontakt, Footer |
| `handy-4-loesungen.png` | Lösungen für Unternehmen (fünf Themen) |
| `handy-erfolge-ruhe.png` | Unsere Erfolge in Ruhe |

Hinweise zu den Bildern: Sie sind auf zwei Drittel verkleinert. Die Navigationsleiste erscheint auf Bild 1 mitten in der Seite. Das liegt an der Aufnahme, denn die Leiste bleibt beim Scrollen oben stehen. Bei «Unsere Erfolge» überlagern sich auf Bild 1 zwei Folien, weil die Aufnahme genau beim Folienwechsel entstand. In Ruhe ist die Folie sauber (`handy-erfolge-ruhe.png`).
