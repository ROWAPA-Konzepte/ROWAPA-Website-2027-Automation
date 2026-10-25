# ROWAPA Website 2027 · Stufe 2: Startseite (Prototyp `/home-v2`)

**Projekt:** ROWAPA Website 2027 Automation (Webflow Site-ID `6addf1532819c0aacc74a496`)
**Stand:** 25.10.2026 · Phase 3, Stufe 2 von 4 · **Rev. 2 (Feedback-Runde 2 eingearbeitet), wartet auf visuelles Feedback**
**Grundlagen:** Design-System Stufe 1 (`03_stufe1_designsystem.md`), Redaktionsleitfaden (`04_redaktionsleitfaden.md`), Texttabelle (`05_home_texttabelle.md`)

---

## 1. Wo anschauen

| Was | Wo |
|---|---|
| Startseite (Entwurf, nicht veröffentlicht) | Webflow Designer › Seiten › **Home v2 (Prototyp)** (`/home-v2`) |
| Werkzeug-Darstellung umschalten | Section «ROWAPA Digital» anklicken › rechts **Eigenschaften/Properties** › **Variante**: «Karten» oder «Liste» |
| Hero-Variante (entschieden: A) | Hero anklicken › Variante «A · Signatur» (B bleibt vorerst als Reserve für Unterseiten) |
| Komponenten | Komponenten-Panel › **03 Cards** (Card Featured, Card Teaser mit Video) und **04 Sections** (Section Hero Home, Section Digital) |
| Medien | Asset-Panel, neu in 10 Ordnern sortiert (siehe Kap. 5) |
| Vorschau-Bilder (Annäherung) | `exports/stufe2-screens/runde2/` |

Die Bilder sind mit einem lokalen Chromium aus den Webflow-Daten gerendert (Klassen, Variablen, Texte, Bilder). Sie zeigen Layout, Abstände und Texte zuverlässig. Bewegung (Laufband, Hover-Video) ist darin nicht sichtbar und lässt sich erst in der Webflow-Vorschau bzw. auf der Staging-Seite prüfen.

---

## 2. Aufbau der Seite (Rev. 2)

| # | Section | Theme | Inhalt | Nächster Schritt |
|---|---|---|---|---|
| 1 | Hero (Komponente) | Tiefsee | Kicker mit rotem Strich, H1, Lead, Punktemeer, dezenter Scroll-Hinweis | (kein Button, «Erstgespräch vereinbaren» steht in der Navigation) |
| 2 | Kundenlogos | Hell | 12 Logos als langsames Laufband | – |
| 3 | Lösungen für Unternehmen | Soft | Card Featured + 4 Card Feature im Bento-Raster | Mehr zu … · Zum Unternehmensbereich |
| 4 | Was uns antreibt | Sea | Leitsatz + 3 Kennzahlen | – |
| 5 | Unser Vorgehen | Hell | Erstgespräch + 4 Phasen, Treppen-Grafik | Mehr zu unserem Vorgehen |
| 6 | **Unsere Erfolge** (neu vor Digital) | Soft | grosses Zitat + 3 Karten (Karten auf Mobile ausgeblendet) | Alle Referenzen |
| 7 | ROWAPA Digital (Komponente, 2 Varianten) | Kontrast | Einleitung, Orbit, Fundament, 5 Werkzeuge | Demo vereinbaren · Alle digitalen Lösungen |
| 8 | Menschen + Partner | Hell | Team, Partnerlogos im feinen Linienraster | Team kennenlernen |
| 9 | Persönlich weiterkommen | Sea | 3 Card Teaser mit Video-Vorschau beim Darüberfahren | je Weg |
| 10 | Im Blickpunkt: CAS | Tiefsee | Spotlight mit Eckdaten | Mehr zum CAS · Zoom-Infosession |
| 11 | Neueste Insights | Soft | 3 Blog-Karten + Live-Webinare, ROWAPA TV | Alle Inhalte |
| 12 | Häufige Fragen | Hell | 6 Fragen | Schreiben Sie uns |
| 13 | Kontakt | Sea | Porträt, Werte-Zeile, Telefon, E-Mail | Erstgespräch vereinbaren |
| – | Footer (Komponente) | Tiefsee | wie Stufe 1, **neu mit Punktemeer hinter der Wortmarke** | – |

Dramaturgie: Was (Lösungen) → Warum (Antrieb) → Wie (Vorgehen) → Beweis (Erfolge) → Neu (Digital) → Wer (Team).

---

## 3. Änderungen Rev. 2 im Detail

| Thema | Umsetzung in Webflow | Pflege durch ROWAPA |
|---|---|---|
| Kleiner Übertitel mit rotem Strich | Wrapper `kicker` mit `kicker_line` (24 × 2 px, Plum Perfect) und `text-style-kicker` | Section-Kopf kopieren; Strich ändert sich global über die Klasse `kicker_line` |
| Hero ohne Buttons | Button-Gruppe und die vier Button-Eigenschaften entfernt; neuer Link `hero_scroll` («Lösungen entdecken», Linie) springt zu `#loesungen`; auf Mobile ausgeblendet | Text direkt im Designer |
| Logo-Laufband | `logos_marquee` › `logos_track` › 2 × `logos_list` (zweite Liste `aria-hidden`), Ränder mit `logos_fade`. Interaction «Logo-Laufband» (IX3): 45 s pro Durchlauf, Endlosschleife, hält beim Darüberfahren an, ruht bei «Bewegung reduzieren» | Logo in **beiden** Listen ergänzen (ab Stufe 3 aus dem CMS, dann nur noch einmal) |
| Partner im Linienraster | `logos_grid.is-partner` mit Rahmen oben/links, Logos mit Kombi-Klasse `is-cell` (Rahmen rechts/unten). 7 Spalten Desktop/Tablet, 4 Mobile quer, 3 Mobile hoch | Logo duplizieren, Bild tauschen |
| Signet auf dunklem Grund | offizielle Variante aus dem Styleguide (S. 7 «Logo/Pittogramma»): Schild in Pastel Snowbank | Asset «rowapa-signet-negativ.svg» im Ordner «01 Marke (CI)» |
| Punktemeer im Footer | `footer_grafik` (absolut, hinter allen Inhalten, Mischmodus «Screen», 55 %) mit eigener Grafik in Sea Cliff und Plum | Bild tauschen = Asset ersetzen; ausblenden = Element verbergen |
| Hover-Video | Card Teaser: neues Video-Element `card_video` über dem Bild, Quelle aus der neuen Eigenschaft **«Video URL (Hover)»** (Gruppe Medien). Kleines Skript «ROWAPAHoverVideo» (site-weit, Footer) spielt das Video nur bei Maus und nicht bei «Bewegung reduzieren» | Pro Karte den Link aus dem Asset-Ordner «04 Videos» einsetzen; leer = kein Video |
| Section Digital | als Komponente, Varianten **Karten** (Raster unten) und **Liste** (Orbit links, beim Scrollen fix; Werkzeuge rechts untereinander). Ab Tablet beide gleich gestapelt | Variante im Eigenschaften-Panel wählen |
| Begriff «Unternehmen» | Seite, Navigation (Mega-Menü und Mobile), Footer, Styleguide | – |
| Beschreibungen gekürzt | entfernt bei Erfolge, Team, Insights; FAQ gekürzt | – |
| Mobile kürzer | Erfolge-Karten auf Mobile ausgeblendet (`is-erfolge`), Partner kompakt, Beschreibungen weg | – |

**Custom Code (Ausnahme nach CLAUDE.md):** nur das Hover-Video-Skript (rund 20 Zeilen), weil Webflow Videos nicht nativ beim Darüberfahren abspielt. Alles andere ist nativ.

---

## 4. Korrektur aus Stufe 1

Mit den jetzt aktiven grossen Breakpoints (1280 / 1440 / 1920) zeigte die Prüfung einen Fehler: Die Klasse `padding-global` setzte ab 1920 px den Theme-Modus «Soft». Dadurch wären auf grossen Bildschirmen alle Sections grau erschienen. **Behoben.** Alle übrigen Klassen mit Theme-Modus wurden geprüft und sind korrekt.

Werte für grosse Bildschirme (aus Stufe 1, jetzt wirksam): Container 90 rem (1440) bzw. 108 rem (1920), H1 4.5 / 5 rem, H2 3.5 rem, H3 1.75 rem, Section-Abstand 10 rem (1920), seitlicher Rand 4 rem (1920).

---

## 5. Medien und CI

- **Aus dem Repository `rowapa-website` übernommen:**
  - 12 Fotos (Vertrieb, Leadership, Recruiting, Coach, Digital usw.)
  - 6 weitere Blog-Bilder
  - Erfolge 2–8
  - 5 CAS-Bilder
  - 3 Video-Schleifen der Wege-Karten (MP4, je rund 0,3 MB)
- **Logos aus dem CI-Styleguide** (`Style Guide ROWAPA_2026`, S. 7): Signet farbig, Signet dunkel (Manganese) und Signet negativ (Snowbank). Die Wortbildmarke hell/dunkel stammt aus den Vektorpfaden der Baseline. Als Dateien unter `exports/ci-logos/`.
- **Asset-Ordner in Webflow:**
  1. Marke (CI)
  2. Grafiken
  3. Fotos
  4. Videos
  5. Team
  6. Kundenlogos
  7. Partnerlogos
  8. Blog und Insights
  9. Erfolge
  10. CAS

---

## 6. Grafiken und Animation (freigegeben)

- **Grundsatz:** Bewegung erklärt oder lenkt, nie Selbstzweck. Höchstens eine bewegte Grafik pro Ansicht. Langsam und leise. Bei «Bewegung reduzieren» erscheint ein Standbild.
- **Bleiben:**
  - Punktemeer (Hero und neu Footer)
  - Punkte-Figur (Vertriebsperformance)
  - Treppe (Vorgehen)
  - Orbit (Digital)
- **Gestrichen:**
  - Wort-für-Wort-Aufbau
  - Farbfluss beim Scrollen und Smooth Scrolling
  - festgehaltene Sections
  - rotierender Wertering
- **Section-Übergänge:** sauberer Schnitt, kein Verlauf. So bleiben die Sections frei verschiebbar.
- **Grafik-Modul** für die Punkte-Grafiken (Canvas, ohne Bibliotheken): nach Freigabe des Designs. Die Stellen sind vorbereitet (`data-grafik`: `punktemeer`, `vertriebsperformance`, `treppe`, `orbit`, `punktemeer-footer`).

---

## 7. Prüfung

| Prüfung | Ergebnis |
|---|---|
| Inhalt gegen Redaktionsleitfaden | alle Sections geprüft, Texttabelle Rev. 2 |
| Begriff «Organisationen» | auf Startseite, Navigation, Footer, Styleguide nicht mehr vorhanden |
| Anrede | Sie; «Persönlich weiterkommen» neutral |
| Kein horizontales Scrollen | geprüft bei 1920, 1440, 1024, 820, 390 px |
| Seitenlänge Mobile (390 px) | 18 635 px **inklusive Footer** (vorher rund 18 900 px ohne Footer) |
| Laufband, Hover-Video | angelegt; Funktion erst in Webflow-Vorschau/Staging sichtbar |

---

## 8. Offene Punkte und Ideen

1. **Hover-Pause des Laufbands und Hover-Video:** technisch angelegt. Bitte in der Webflow-Vorschau (Auge-Symbol) kurz testen; bei Bedarf justiere ich Tempo und Verhalten.
2. **Mobile weiter kürzen** (Vorschlag): Bento-Karten auf Mobile ohne Beschreibungstext, Insights auf 2 Karten.
3. **Blog-Auszüge** kommen in Stufe 3 aus dem CMS.
4. **Logo-Paket:** Falls es offizielle Logo-Dateien gibt (z. B. von der Agentur, die den Styleguide gestaltet hat), tausche ich die nachgebauten Wortbildmarken 1:1 aus.

---

## 9. Nächster Schritt

Nach Ihrem Feedback zu Rev. 2 (insbesondere Werkzeuge «Karten» oder «Liste»):

- Feinschliff, danach ersetzt `/home-v2` die heutige Startseite (Veröffentlichen nur mit Ihrer Freigabe).
- **Stufe 3:** CMS-Collections und Draft-Einträge (Kunden-Logos, Partner, Team, Erfolge, Blog), dann Laufband und Raster aus dem CMS.
- Grafik-Modul für die Punkte-Grafiken.
