# ROWAPA Website 2027 · Stufe 2: Startseite (Prototyp `/home-v2`)

**Projekt:** ROWAPA Website 2027 Automation (Webflow Site-ID `6addf1532819c0aacc74a496`)
**Stand:** 25.10.2026 · Phase 3, Stufe 2 von 4 · **wartet auf visuelles Feedback**
**Grundlagen:** Design-System Stufe 1 (`03_stufe1_designsystem.md`), Redaktionsleitfaden (`04_redaktionsleitfaden.md`), Texttabelle (`05_home_texttabelle.md`)

---

## 1. Wo anschauen

| Was | Wo |
|---|---|
| Startseite (Entwurf, nicht veröffentlicht) | Webflow Designer › Seiten › **Home v2 (Prototyp)** (`/home-v2`) |
| Hero-Variante umschalten | Hero anklicken › rechts **Eigenschaften/Properties** › **Variante**: «A · Signatur» oder «B · Editorial» |
| Neue Komponenten | Komponenten-Panel › **03 Cards › Card Featured** und **04 Sections › Section Hero Home** |
| Vorschau-Bilder (Annäherung) | `exports/stufe2-screens/` (Desktop 1440, Tablet 820, Mobile 390) |

Die Bilder in `stufe2-screens` sind mit einem lokalen Chromium aus den Webflow-Daten (Klassen, Variablen, Texte, Bilder) gerendert, weil die Designer-Vorschau über die Schnittstelle wiederholt nicht erreichbar war. Sie zeigen Layout, Abstände und Texte zuverlässig, ersetzen aber nicht den Blick in den Designer.

---

## 2. Aufbau der Seite

| # | Section | Theme | Inhalt | Nächster Schritt |
|---|---|---|---|---|
| 1 | Hero (Komponente, 2 Varianten) | Tiefsee / B: Hell | Kicker, H1, Lead, 2 Buttons, Punktemeer-Grafik bzw. Bild mit Ribbon | Erstgespräch vereinbaren · Lösungen entdecken |
| 2 | Kundenlogos | Hell | 12 Logos, eingeordnet | – |
| 3 | Lösungen für Unternehmen | Soft | Card Featured (Vertriebsperformance) + 4 Card Feature im Bento-Raster | Mehr zu … (je Thema) · Zum Unternehmensbereich |
| 4 | Was uns antreibt | Sea | Leitsatz + 3 Kennzahlen | – |
| 5 | Unser Vorgehen | Hell | Erstgespräch + 4 Phasen, Treppen-Grafik | Mehr zu unserem Vorgehen |
| 6 | ROWAPA Digital | Kontrast | Einleitung (wer, KI, buchbar), 5 Werkzeug-Karten, Orbit-Grafik, Hinweis «Fundament» | Demo vereinbaren · Alle digitalen Lösungen |
| 7 | Unsere Erfolge | Soft | grosses Zitat + 3 Karten | Alle Referenzen |
| 8 | Menschen + Partner | Hell | Team (Gründer zuerst), Partnerlogos | Team kennenlernen |
| 9 | Persönlich weiterkommen | Sea | 3 Card Teaser (neutral formuliert) | je Weg |
| 10 | Im Blickpunkt: CAS | Tiefsee | Spotlight mit Eckdaten | Mehr zum CAS · Zoom-Infosession |
| 11 | Neueste Insights | Soft | 3 Blog-Karten (Card Teaser) + Hinweise auf Live-Webinare und ROWAPA TV | Alle Inhalte |
| 12 | Häufige Fragen («Gut zu wissen») | Hell | 6 Fragen (natives Aufklappen) | – |
| 13 | Kontakt | Sea | Porträt, Werte-Zeile, Text, Telefon und E-Mail | Erstgespräch vereinbaren · Schreiben Sie uns |

Navbar und Footer sind die Komponenten aus Stufe 1.

---

## 3. Neue Komponenten

### 3.1 Section Hero Home (Gruppe «04 Sections»)

| Eigenschaft | Typ |
|---|---|
| Kicker, Lead | Text |
| Button 1 Text / Link, Button 2 Text / Link | Text / Link |
| **Variante** | A · Signatur (Tiefsee, Punktemeer-Grafik, zentriert) · B · Editorial (hell, zweispaltig, Bild mit Diagonal-Ribbon) |

Die H1 ist bewusst nicht als Eigenschaft angelegt: Sie wird direkt im Designer geändert und bleibt so die einzige H1 der Seite.

### 3.2 Card Featured (Gruppe «03 Cards»)

Grosse Karte mit Grafik als Hintergrund (Kicker, Titel, Text, Grafik, Grafik-Alt-Text, Button-Text, Link). Im Bento-Raster für das Leitthema; wiederverwendbar auf den Lösungsseiten (Stufe 4).

### 3.3 Klassen

Alle neuen Klassen folgen Client-First und haben Regeln für Tablet, Mobile quer und Mobile hoch: `section-head`, `hero_*`, `logos_*`, `bento_*`, `card_featured*`, `statement_*`, `stat_*`, `vorgehen_*`, `steps_*`, `digital_*`, `tools_grid`, `note-box*`, `quote_*`, `team_*`, `partner_block`, `spotlight_*`, `chip-list`, `link-teaser*`, `faq_*`, `contact_*` sowie je Section eine `section_…`-Klasse.

---

## 4. Grafiken und Animation (Einschätzung, zur Freigabe)

### 4.1 Grundsatz

Bewegung erklärt oder lenkt, sie ist nie Selbstzweck. Das passt zu «klar, souverän, inspirierend»: ruhig statt verspielt.

1. **Höchstens eine bewegte Grafik pro Bildschirmansicht.**
2. **Langsam und leise:** lange Zyklen, kleine Ausschläge, nur CI-Farben.
3. **Einmal statt endlos**, wo die Grafik etwas erklärt (aufbauen, dann stehen).
4. **Barrierefrei:** Bei «Bewegung reduzieren» im Betriebssystem erscheint das Standbild. Ausserhalb des Bildschirms pausiert die Animation.
5. **Kein Einfluss auf Ladezeit:** Das Standbild ist sofort da, die Animation lädt danach.

### 4.2 Was bleibt, was geht

| Element | Empfehlung | Begründung |
|---|---|---|
| **Punktemeer** (Hero A) | behalten: langsame Welle, auf Desktop leichte Reaktion auf die Maus, auf Mobile ruhiger | starkes Markenbild, erster Eindruck |
| **Punkte-Figur** (Card Featured Vertriebsperformance) | behalten: Punkte formen sich beim Einscrollen einmal zur Figur, dann Stillstand | zeigt «Leistung wächst» ohne Worte |
| **Treppe** (Vorgehen) | behalten: Stufen bauen sich nacheinander auf, passend zu den vier Phasen | erklärt den Ablauf |
| **Orbit** (ROWAPA Digital) | behalten: fünf Punkte kreisen sehr langsam um das Zentrum | erklärt «fünf Werkzeuge, ein System» |
| Einblenden der Sections, Logo-Laufband, FAQ, Hover der Karten | nativ in Webflow (Interactions), dezent | vom Kunden selbst pflegbar |
| Wort-für-Wort-Aufbau des Leitsatzes | weglassen | halb ausgegrauter Text ist schwer lesbar |
| Farbfluss beim Scrollen, Smooth Scrolling, festgehaltene Sections (Scroll-Jacking) | weglassen | lenkt ab, fühlt sich fremd an, Probleme bei Barrierefreiheit |
| Rotierender Wertering (Kontakt) | ersetzt durch Werte-Zeile | Werte sollen lesbar sein |

### 4.3 Umsetzung (nach Freigabe des Designs)

- Ein kleines Grafik-Modul (Canvas, ohne Bibliotheken) für die vier Punkte-Grafiken. Die Stellen sind schon vorbereitet: Attribut `data-grafik` (`punktemeer`, `vertriebsperformance`, `treppe`, `orbit`) mit Standbild.
- Pflege ohne Code: Grafik tauschen = Standbild im Asset ersetzen; Grafik aus = Attribut entfernen bzw. Hero-Variante B wählen.
- Alles andere mit nativen Webflow Interactions.

---

## 5. Prüfung

| Prüfung | Ergebnis |
|---|---|
| Inhalt gegen Redaktionsleitfaden (Was, für wen, Nutzen, nächster Schritt) | alle 13 Sections geprüft, Texttabelle `05_home_texttabelle.md` |
| Anrede | Sie; «Persönlich weiterkommen» neutral; keine Du-Anrede auf der Seite |
| Überschriften | eine H1 (Hero), 11 H2 (je Section ausser Logos), Karten und Phasen H3 |
| Bilder | alle inhaltlichen Bilder mit Alt-Text, Logos mit Firmennamen |
| Kein horizontales Scrollen | geprüft bei 1440, 1024, 820, 390 px (lokaler Render) |
| Mobile | alle Raster einspaltig, Lesereihenfolge bleibt erhalten |

---

## 6. Bekannte Einschränkungen und Ideen

1. **Grosse Breakpoints** 1280 / 1440 / 1920 sind im Designer noch nicht aktiviert (oben in der Geräte-Leiste über «+» hinzufügen). Danach ergänze ich die Werte für grosse Bildschirme.
2. **Hero B** ist in den Webflow-Daten vollständig angelegt, aber noch nicht im Designer visuell kontrolliert (Vorschau-Timeouts).
3. **Werkzeug-Karten** bei 1440 px: fünf schmale Spalten. Idee: Orbit links, Karten rechts als 2-spaltige Liste, oder Raster 3 + 2.
4. **Mobile Seitenlänge** rund 18 900 px. Ideen: Partnerlogos auf Mobile hoch als Laufband statt Raster, Erfolge auf ein Zitat + Link, FAQ auf vier Fragen.
5. **Blog-Auszüge** sind vorläufig; in Stufe 3 kommen sie aus dem CMS.
6. Offene inhaltliche Fragen: siehe Ende von `05_home_texttabelle.md`.

---

## 7. Nächster Schritt

Nach Ihrem Feedback zur Startseite (Hero-Variante, Animationskonzept, Texte):

- Korrekturen an `/home-v2`, danach ersetzt sie die heutige Startseite.
- **Stufe 3:** CMS-Collections und Draft-Einträge (inkl. echter Blog-Auszüge).
- Grafik-Modul für die vier Punkte-Grafiken.
