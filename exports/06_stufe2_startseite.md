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
- **Offizielle Logos von ROWAPA** (Nachtrag 25.10.2026): Logo quer hell/dunkel, mit Claim, Name allein, Claim, Favicon und Avatar. Navigation und Footer zeigen jetzt das offizielle Logo für dunklen Grund (Signet und Name in Pastel Snowbank). Übersicht in `exports/ci-logos/LIESMICH.md`.
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
4. **Favicon und Webclip:** Die PNG-Dateien liegen bereit (`exports/ci-logos/offiziell/`). Sie müssen einmalig von Hand in Webflow › Site settings › General › Favicon / Webclip hochgeladen werden; die Schnittstelle kann das nicht.

---

## 9. Nächster Schritt

Nach Ihrem Feedback zu Rev. 2 (insbesondere Werkzeuge «Karten» oder «Liste»):

- Feinschliff, danach ersetzt `/home-v2` die heutige Startseite (Veröffentlichen nur mit Ihrer Freigabe).
- **Stufe 3:** CMS-Collections und Draft-Einträge (Kunden-Logos, Partner, Team, Erfolge, Blog), dann Laufband und Raster aus dem CMS.
- Grafik-Modul für die Punkte-Grafiken.

---

## 10. Nachtrag 25.10.2026, Abend (Entscheide ROWAPA)

| Thema | Entscheid | Umsetzung |
|---|---|---|
| ROWAPA Digital | **Karten** | Variante «Karten» aktiv; «Liste» bleibt als Reserve in der Komponente |
| Mobile kürzen | ja | Bento-Karten mit neuer Variante «Hell · kompakt» (auf Mobile ohne Beschreibung); dritte Insights-Karte auf Mobile ausgeblendet (`grid-item_hide-mobile`). Seitenlänge 390 px: rund 17 800 px inkl. Footer |
| Staging | veröffentlichen | `Home v2` ist kein Entwurf mehr; Veröffentlichung nur auf die Webflow-Subdomain `rowapa-website-2027-automation.webflow.io` (18:27 Uhr). Der Styleguide bleibt Entwurf |
| Pull Request | beobachten | Claude reagiert auf Kommentare in PR #2 |
| Backup | jetzt | 4-Datei-Backup erstellt; am selben Abend in laufend gepflegte Dokumente überführt (`00_start_hier.md`, `00_entscheide.md`, `07_benutzerhandbuch.md`) |


---

## 11. Feedback-Runde 3: Muster (25.10.2026, abends)

Vorgehen nach Entscheid ROWAPA: zuerst ein **Muster** (Header-Punktemeer, Lösungen mit fünf Punktfiguren, alle Teile ohne Code), danach der Rest im gleichen Stil. Leitlinie: Jede Grafik baut sich einmal auf und ruht dann; dauerhaft bewegt sind nur Punktemeer (Header, Footer) und später der Orbit. Das Kräuseln unter der Maus bleibt (Entscheid ROWAPA).

### 11.1 Umgesetzt

| Thema | Umsetzung | Technik |
|---|---|---|
| Header | Punktemeer bewegt sich in ruhigen Wellen, Kräuseln unter der Maus; liegt als Band unten im Header, oben weich ausgeblendet | Skript «ROWAPA Grafik» (WebGL) über dem Standbild |
| Titelzeilen | Die drei Zeilen werden im Wechsel hell und rot unterstrichen (alle 5 s, 15-s-Schleife) | Webflow-Interaction «Hero-Titelzeilen» (IX3), nur Variante A; bei «Bewegung reduzieren» bleibt Zeile 3 unterstrichen |
| Scroll-Hinweis | ausgeblendet (`hero_scroll` Display none), bleibt im Designer | – |
| Kundenlogos | Titel nur noch für Screenreader (`logos_label`) | ohne Code |
| Vertriebsperformance | Treppe als transparentes PNG im Stil der ersten Fassung; baut sich von unten auf, Pfeil zuletzt; Verlauf als Gestaltung der Klasse `card_featured_grafik` | Skript |
| Themenkarten 02–05 | je eine Punktfigur (Person mit Spirale, Führungsperson mit Team, Trichter mit Ring, Bildschirm mit Bausteinen), gestaffelter Aufbau, beim Darüberfahren leichtes Zusammenziehen; auf dem Handy ausgeblendet | Card Feature: neue Eigenschaften «Grafik anzeigen» und «Grafik»; Skript |
| Erfolge | Slider mit 5 echten Kundenstimmen im grossen Zitat (Lienhard, Simon J., Kranz, Antonio M., Suter), Pfeile unten rechts, Punkte unten links; die drei Karten bleiben | Webflow-Slider (nativ) |
| Team | Knopf «▶ Wer wir sind · Video» neben «Team kennenlernen» | Webflow-Lightbox (nativ) |
| Footer | Punktemeer bewegt sich langsam hinter der Wortmarke, mit Kräuseln | Skript |
| Hover-Video | unverändert, jetzt Teil des Grafik-Skripts | Skript |

### 11.2 Technik

- **Ein Skript** `tools/grafik` (Version 1.1.0): 10,8 KB, komprimiert 5,2 KB, ohne Bibliotheken. Quellcode lesbar im Repository, Doku in `tools/grafik/LIESMICH.md`.
- **Einbindung:** über die Webflow-Schnittstelle registriert als «ROWAPAGrafik», site-weit im Footer, geladen von jsDelivr mit fester Commit-Kennung und SRI-Prüfsumme. Das frühere Inline-Skript «ROWAPAHoverVideo» ist nicht mehr eingebunden (bleibt registriert).
- **Figuren:** Das Standbild (PNG mit transparentem Hintergrund) ist die Vorlage. Die Figur setzt sich aus Ausschnitten genau dieses Bildes zusammen; das Bild wird dafür weder ein zweites Mal geladen noch ausgelesen. Eine neue Figur ist ein neues PNG.
- **Einstellungen ohne Code:** Custom Attributes `data-tempo`, `data-dichte`, `data-hoehe`, `data-kraeuseln="aus"`, `data-verzoegerung`, Farben über die Webflow-Variablen.
- **Rückfall:** Ohne Skript, ohne WebGL oder bei «Bewegung reduzieren» stehen die Standbilder (geprüft).

### 11.3 Messung (Staging, Chromium, Mittelwert mehrerer Läufe)

| | vorher | nachher | Bemerkung |
|---|---|---|---|
| Desktop 1440: grösstes Element sichtbar (LCP) | 640 ms | 652 ms | unverändert |
| Desktop: Seite geladen | 626 ms | 703 ms | vier neue Figurenbilder |
| Desktop: Datenmenge | 858 KB | 955 KB | +13 KB Skript, Rest neue Bilder (Figuren) |
| Handy 390: LCP | 716 ms | 660 ms | unverändert |
| Handy: Datenmenge | 396 KB | 435 KB | Figuren auf dem Handy ausgeblendet, werden nicht geladen |
| Skripte | 143 KB | 156 KB | erste Fassung: 209 KB |

Hinweis: Die Testumgebung hat keine Grafikkarte; das bewegte Punktemeer wird dort per Software gezeichnet und erscheint als Rechenlast (Long Tasks). Ohne WebGL liegt die Rechenlast bei rund 80 ms (vorher 62 ms). Auf echten Geräten zeichnet die Grafikkarte; die erste Fassung kam in derselben Umgebung auf rund 4 000 ms.

### 11.4 Handgriffe in Webflow (von Hand, die Schnittstelle kann sie nicht setzen)

1. **Video einsetzen:** Knopf «Wer wir sind · Video» auswählen › Zahnrad › Lightbox Settings › Media › «+» › `https://vimeo.com/738627796` einfügen. Bis dahin öffnet der Knopf nichts.
2. **Slider (optional):** Slider auswählen › Zahnrad › Animation «Cross Fade», Auto-play ein, Delay 8 s. Heute: manuell mit Pfeilen und Punkten.

### 11.5 Nächste Schritte (nach Freigabe des Musters)

Zähler bei «Was uns antreibt», Treppe bei «Unser Vorgehen», Kugel und Orbit bei ROWAPA Digital (ohne Fluss, stille Verbindung beim Darüberfahren), Insights-Reihe mit Pfeiltasten, danach Prüfung auf allen Bildschirmgrössen und Messwerte.

Screens: `exports/stufe2-screens/runde3/`.

## 12. Feedback-Runde 3: Rest (25.10.2026, später Abend)

Freigabe des Musters durch ROWAPA («passt alles so»). Im gleichen Stil gebaut, auf Staging veröffentlicht (nur Webflow-Subdomain).

### 12.1 Umgesetzt

| Thema | Umsetzung | Technik |
|---|---|---|
| Startbildschirm | Das Logo-Band schliesst auf jedem Format mit der Fensterunterkante ab; der Header wird dafür so hoch wie nötig | Hülle `startscreen_wrapper` (Höhe Fenster minus Navigation), Hero füllt den Rest; geprüft auf 9 Formaten (375×667 bis 2560×1440) |
| Was uns antreibt | Die drei Kennzahlen zählen beim ersten Sichtbarwerden einmal hoch (1,6 s) | Attribut `data-grafik="zaehler"`; die Zahl bleibt der Text aus Webflow |
| Unser Vorgehen | Die vier Stufen bauen sich nacheinander auf; die Phase in der Liste leuchtet in Plum mit, eine Linie markiert die Stufe; danach steht Phase 01. Darüberfahren, Klick oder Tastatur auf eine Phase (oder Klick auf eine Stufe) hebt deren Stufe hervor (Plum füllt sie von unten) | Treppe als transparentes PNG neu gerendert (Stufen im Ruhezustand); Hervorhebung entsteht daraus. Klassen `step_item.is-aktiv`, `step_number.is-aktiv` |
| ROWAPA Digital | Kugel dreht sich langsam (70 s je Umdrehung), die fünf Kacheln ziehen ruhig auf der Bahn (150 s) und halten beim Darüberfahren. Karte ↔ Kachel: Kachel in Plum, feine Punktlinie mit Impuls zur Kugel. Handy: Kacheln stehen, Kugel dreht | Kacheln, Bahn, «Wissensplattform» als native Webflow-Elemente (Komponente Section Digital); Kugel als Canvas über einem Standbild, das mit derselben Zeichnung erzeugt ist |
| Insights | Editoriale Reihe mit 6 Beiträgen: Desktop 3, Tablet 2, Handy 1 mit Anschnitt. Pfeile neben «Alle Inhalte», feine Fortschrittslinie; wischen und scrollen gehen nativ | Klassen `insights_reihe` (Scroll-Snap), `reihe_item`, `reihe_fortschritt`; Skriptteil «reihe» nur für Pfeile und Linie, auch bei «Bewegung reduzieren» aktiv |

### 12.2 Technik

- **Skript «ROWAPA Grafik» 1.2.0:** 22,4 KB, komprimiert 9,9 KB, weiterhin ohne Bibliotheken. Neue Teile: `zaehler`, `treppe`, `orbit` (mit `kugel`), `reihe`. Registriert mit fester Commit-Kennung und SRI-Prüfsumme.
- **Bilder:** Treppe 80 KB (vorher JPG 122 KB), Kugel 53 KB (ersetzt das Orbit-JPG mit 2160 px), fünf Symbole als SVG.
- **Ruhe-Leitlinie eingehalten:** Dauerhaft bewegt sind nur Punktemeer (Header, Footer) und die Kugel mit Kacheln, nie gleichzeitig im Bild, alle langsam. Alles andere baut sich einmal auf und ruht.
- **Rückfall:** Ohne Skript oder bei «Bewegung reduzieren» stehen Treppe (Phase 01 hervorgehoben), Kugel und Kacheln (auf ihren Startplätzen) und die Kennzahlen; die Insights-Pfeile funktionieren trotzdem (geprüft).

### 12.3 Prüfung (Staging, live mit Skript 1.2.0)

- Desktop 1440, Tablet 820, Handy 390, «Bewegung reduzieren»: alle Teile wie beschrieben, keine Fehler in der Konsole.
- Messung (Chromium, Mittel aus 3 Läufen): Desktop LCP 620 ms, geladen 656 ms, 916 KB (vorher 955 KB); Handy LCP 604 ms, 441 KB (vorher 435 KB).
- Rechenlast der drehenden Kugel: rund 30 Bilder pro Sekunde, keine langen Aufgaben (auch ohne Grafikkarte). Werkzeug: `tools/grafik/pruefung/rechenlast.js`.
- Screens: `exports/stufe2-screens/runde3/rest_*`.

### 12.4 Handgriffe in Webflow (offen, von Hand)

Wie 11.4: Video-Link in der Lightbox, Slider-Einstellungen (optional).

### 12.5 Nächster Schritt

Feedback von ROWAPA zum Rest, danach Freigabe Stufe 2 und Beginn Stufe 3 (CMS).

## 13. Feedback-Runde 4 (25.10.2026, Nacht)

Feedback zuerst als Einschätzung, dann nach Antwort von ROWAPA umgesetzt. Direkt auf `/home-v2`, was eindeutig war; wo es mehrere gute Wege gibt, als Varianten auf der internen Seite `/varianten`.

### 13.1 Direkt umgesetzt

| Thema | Umsetzung |
|---|---|
| Schriftgrössen | Fliesstext 17 px, kleine Texte 13–15 px, Labels mindestens 12 px; rund 35 Klassen angepasst (Benutzerhandbuch 2.22) |
| Begriff | «Digitale Lösungen» statt «Werkzeuge», auch im Fliesstext |
| Digital pflegbar | alle Texte und Buttons als Properties der Komponente Section Digital |
| Kugel und Kacheln | schneller (40 s / 90 s); Kacheln Great Serpent mit weissem Symbol; Bahn und Namen berühren die Kugel nie (Bahn flacher und tiefer, Kugel 42 % statt grösser, Namen oben über der Kachel); Kachel ↔ Karte in beide Richtungen |
| Lösungen für Unternehmen | Figuren bauen sich rund 40 % schneller auf |
| Team | Reihe mit Anschnitt, Pfeilen, Linie und Schlusskarte «Weitere Teammitglieder» → /team |
| CAS | Daten 25. Februar bis 6. Dezember 2027 |

### 13.2 Varianten (`/varianten`, Auswahl offen)

| Thema | A | B | C |
|---|---|---|---|
| Mauszeiger | Punkt Plum, feiner Ring | Ring wächst auf Links und Karten zu «Öffnen» | Ring passt sich dunklem Grund an |
| Megamenü | erste Fassung: Spalten, Vorschau beim Darüberfahren | editorial: Links links, grosse Bildvorschau | Wegweiser: drei Einstiege mit Punktfigur |
| Kacheln Digital | Great Serpent, weisses Symbol (Startseite) | Sea Cliff, dunkles Symbol | dunkel mit kräftigem Rahmen |
| Im Blickpunkt | Bildband mit Ribbon | Eckdaten (Start, Abschluss, Präsenztage, ECTS) | schmales Band weiter oben, direkt nach «Unsere Erfolge» |
| Unser Vorgehen | ruhig: Bild steht, baut einmal auf, wechselt nur auf Wunsch | Phasen als Reiter mit Tafel | – |

### 13.3 Technik

- **Skript 1.3.1** (26,6 KB, komprimiert 11,3 KB): neu `zeiger`, `vorschau`, `varianten`; `treppe` mit `data-modus` (folge, ruhig, tabs); Kugel und Figuren schneller; `orbit` verbindet Kachel → Karte.
- **Fehler behoben:** Kombiklasse `is-aktiv` aus dem HTML-Import wurde global veröffentlicht und färbte aktive Elemente Plum (auch Phasen der Startseite). Entfernt, Umschalter nutzt `var_wahl-an`; geprüft im veröffentlichten CSS.

### 13.4 Prüfung (Staging, live mit 1.3.1)

- Startseite: Zähler, Treppe, Kugel (Kachel → Karte und Karte → Kachel), Namen ausserhalb der Kugel, Team-Reihe; Phasen nicht mehr vollflächig Plum. Keine Fehler in der Konsole.
- Variantenseite: alle Varianten auf Desktop 1440 und Handy 390 (Handy: Leiste nicht klebend, Varianten einspaltig, Vorschaubilder im Menü ausgeblendet).
- Screens: `exports/stufe2-screens/runde4/`.

### 13.5 Nächster Schritt

ROWAPA wählt je Thema einen Buchstaben. Danach Umsetzung auf `/home-v2`, Variantenseite löschen (mit Freigabe), Freigabe Stufe 2.

## 14. Feedback-Runde 5 (25./26.10.2026, Nacht)

Entscheide von ROWAPA: Vorgehen A, Kacheln A, Megamenü A, Mauszeiger mit Kontrast-Ring; Im Blickpunkt neue Varianten.

| Thema | Umsetzung | Prüfung (live, Skript 1.4.0) |
|---|---|---|
| Unser Vorgehen | Überschrift über dem Raster, Hinweis darunter; Grafik mittig zur Phasenliste, klebt in der Fenstermitte, Aufbau in der Bildmitte, ruhiger Modus | Mitte Grafik = Mitte Liste (0 px); läuft mit bis zum Ende der Liste; Handy: steht unter der Liste |
| Kacheln Digital | gleiche Weglänge auf der Bahn statt gleicher Winkel; Startplätze neu | Abstände ±7 % statt ±17 % |
| Megamenü | Spalte Vorschau mit neun Karten in der Navigation | Darüberfahren wechselt die Karte; Titel stimmen mit den Links überein |
| Mauszeiger | Ring dunkel auf hellem, hell auf dunklem Grund und auf Fotos; site-weit an der Navigation | Ring geprüft über Liste (dunkel), Digital (hell), Foto (hell); Handy ohne Zeiger |
| Im Blickpunkt | Varianten D, E, F auf `/varianten`, alle mit Titel auf einer Linie | Desktop und Handy |

Screens: `exports/stufe2-screens/runde5/`. Keine Fehler in der Konsole.

## 15. Feedback-Runde 6 (26.10.2026, Nacht)

| Thema | Umsetzung | Prüfung (live, Skript 1.4.1) |
|---|---|---|
| Im Blickpunkt D | Titel einzeilig über einem Fotoband, Inhalt auf dem Band | Desktop und Handy |
| Megamenü | volle Breite der Inhaltsspalte | linker und rechter Rand bündig mit der Navigation (47 / 1393 px bei 1440) |
| Unser Vorgehen | fest, optisch mittig, Farbaufbau | Abfolge der aktiven Phase 0-1-2-3, danach 0; Grafik 19 px über der rechnerischen Mitte (gewollt) |
| Digitale Lösungen | schneller, Halt nur über den Karten | Kachel dreht weiter, wenn die Maus über der Kugel ist; hält über den Karten |

### 15.1 Look-&-Feel-Entwurf `/home-look`

Struktur und Dramaturgie unverändert (Entscheid ROWAPA). Drei Gestaltungshebel, nur auf der Kopie:

1. **Display-Titel:** H2 deutlich grösser (bis 5,25 rem), enger gesetzt, höchstens 16 Zeichen breit. Mehr Spannung zwischen Titel und Fliesstext.
2. **Diagonal-Ribbon (45°, Plum):** als Akzent an drei Section-Ecken (Lösungen oben rechts, Erfolge unten links, Kontakt oben rechts); auf dem Handy ausgeblendet.
3. **Swiss-Raster:** feine 12er-Spaltenlinien im Hintergrund von Vorgehen, Team und FAQ.

Vergleich: `exports/stufe2-screens/runde6/look-feel_vergleich_links-heute_rechts-entwurf.jpg`.

## 16. Look-&-Feel-Varianten (26.10.2026)

Struktur, Inhalte und Bewegungen identisch mit `/home-v2`; nur die Gestaltung ändert sich. Für den schnellen Vergleich mit Test-CSS im Seitenkopf der Entwurfsseiten (`exports/look-entwuerfe/`), die gewählte Richtung wird anschliessend nativ als Webflow-Klassen umgesetzt.

| Look | Seite | Idee | Merkmale | Benchmark-Bezug |
|---|---|---|---|---|
| A Editorial Swiss | `/home-look` | Magazin mit Schweizer Raster | grosse Display-Titel, nummerierte Kicker (01 / 02 …), Karten ohne Box mit Linie oben, Diagonal-Ribbon an drei Ecken, feine Spaltenlinien | editoriale Insight-Seiten grosser Beratungen; Swiss Style (Raster, Weissraum, ein Akzent) |
| B Kontrast & Statement | `/home-look-b` | selbstbewusst, plakativ | sehr grosse fette Titel, Wechsel dunkel/weiss, Plum-Balken über jeder Section, grosse Kennzahlen, Ribbon in Lösungen | Beratungen mit kräftigen Markenfarben und grossen Aussagen |
| C Hell & präzise | `/home-look-c` | ruhig, viel Luft, Haarlinien | helle Flächen statt Sea-Tönung, mittlere Schriftstärke, sehr viel Weissraum, Karten als Liste mit Linie, eckige Buttons, Plum nur als Akzent | zurückhaltende Premium-Beratungen (Weissraum, Typografie statt Flächen) |

Vergleich: `exports/stufe2-screens/runde7/vergleich_heute-A-B-C.jpg` (Spalten: heute, A, B, C).

## 17. Layout-Varianten (Runde 8, 26.10.2026)

Dramaturgie und Texte wie `/home-v2` (Entscheid ROWAPA), aber jede Section mit neuer Anordnung statt «links Titel, rechts Inhalt». Die Entwürfe sind HTML/CSS-Prototypen (`exports/layout-entwuerfe/d.html`, `e.html`, `f.html`, Steuerung `proto.js`), werden über jsDelivr auf festem Commit geladen und ersetzen auf den Testseiten nur den Hauptbereich; Navigation, Megamenü, Zeiger und Footer sind die echten.

| Variante | Seite | Idee | Typische Anordnungen | Referenz |
|---|---|---|---|---|
| D Bühne & Reiter | `/layout-d` | grosse Bühne, Inhalte zum Durchschalten | Vollbild-Hero mit 4 automatisch wechselnden Themen und Fortschrittsbalken; Lösungen als Bildkacheln mit Hover-Text; Antrieb mit Riesentitel und senkrechten Kennzahlen; Digital als Reiter auf Navy; Erfolge als Fall-Slider; Wege als hohe Bildspalten; Kontakt mit schrägem Plum-Band | Simon-Kucher (Startseite, Branchen), Bain |
| E Editorial versetzt | `/layout-e` | Magazin, asymmetrisches Raster | schmale nummerierte Label-Spalte (00–11) und breite Inhaltsspalte; typografischer Hero in drei versetzten Zeilen mit Ribbon; Lösungen als nummerierte Zeilen; Vorgehen als versetzte Treppe; grosses Zitat mit versetztem Fotorahmen; Wege mit versetzter Mittelspalte; Schluss-Statement auf Navy | Oliver Wyman, Pictet, Simon-Kucher Insights |
| F Mosaik & Flächen | `/layout-f` | Flächen, Kacheln, klare Einstiege | geteilter Hero mit schrägem Bildschnitt und Plum-Band; drei Einstiegskarten (Unternehmen / persönlich / Broker) über der Hero-Kante; Lösungen als Bento-Mosaik mit Kennzahl-Kachel; Vorgehen als mittige Zeitachse; Wege in wechselnden Zeilen; CAS mit Siegel; Kontakt-Band mit Diagonalschnitt | Korn Ferry, Vontobel |

Geprüft live (1440 und 390 px): Inhalte geladen, Reiter und Slider schalten, keine Skriptfehler, kein seitlicher Überlauf. Screens: `exports/stufe2-screens/runde8/` (je Variante Desktop und Handy, Vergleich `vergleich_D-E-F.jpg`).

Native Umsetzbarkeit: alle Anordnungen sind mit Webflow-Grid, Flex, Tabs-Element (Auto-Wechsel nativ möglich), Slider-Element und Interactions baubar. Schräge Flächen über native Transform (Skew) bzw. Ribbon-Klasse; nur der Fortschrittsbalken der Reiter in D bräuchte eine kleine Interaction.

## 18. Kombi-Varianten G und H (Runde 9, 26.10.2026)

Grundlage ist die heutige Startseite (Kopie von `/home-v2`), nicht ein neuer Entwurf. Struktur, Texte, Punktemeer, Figuren, Treppe, Orbit und Zeiger bleiben; ein Aufsatz (`exports/layout-entwuerfe/kombi.css`, `kombi.js`, über jsDelivr auf festem Commit) ändert Anordnung und Bewegung.

| Bereich | G `/kombi-g` | H `/kombi-h` |
|---|---|---|
| Hero | Punktemeer + Fotofenster rechts (45°-Kante, Plum-Ribbon), Foto löst sich ins Punktemeer auf | Punktemeer + Foto über die ganze Breite, links und unten ausgeblendet; volle Fensterhöhe; Ribbon oben rechts |
| Foto | wechselt mit der hervorgehobenen Zeile: Seminar (Vertriebsleistung), Leadership (Führung), Recruiting (Fluktuation) | gleich |
| Titel | wie D: gross, fett, Plum-Strich zeichnet sich beim Hereinscrollen | gleich |
| Logos | wie E: Raster 6 × 2 mit Haarlinien, Label-Spalte, Logos erscheinen nacheinander | gleich |
| Lösungen | Schwerpunkt links, vier Themen als Zeilen rechts | Akkordeon, fünf Spalten, eine offen |
| Was uns antreibt | wie D: Riesentitel, Zahlen senkrecht mit Linie, Zahlen Great Serpent | gleich, Zahlen Plum |
| Team | wie F: Mosaik mit Kachel «150 Jahre Wissen und Erfahrung im Trainerteam» (Navy) | gleich, Kachel Plum |
| Farbfluss | gerade Wischbewegung von links | schräge Kante von links |
| Ribbons | zeichnen sich einmal in Section-Ecken (Lösungen, Antrieb, Team, Wege, Kontakt) | gleiten beim Scrollen durch die Ecken (Lösungen, Antrieb, Vorgehen, Team, Kontakt) |

Geprüft live (1440 und 390 px): Punktemeer läuft, Foto folgt den Zeilen (Abfolge 0-1-2-0), Akkordeon wechselt, keine Skriptfehler, kein seitlicher Überlauf. Screens: `exports/stufe2-screens/runde9/` (Vergleich heute / G / H, Hero-Vergleich, je Desktop und Handy).

Native Umsetzung: Fotos als zweite Ebene im Hero-Component mit Webflow-Interaction (Wechsel synchron zur bestehenden Zeilen-Animation), Farbfluss und Ribbons als Scroll-Interactions (IX2: «While scrolling in view» / «Scroll into view»), Logos, Antrieb, Team und Lösungen G mit Grid-Klassen. Das Akkordeon in H geht mit IX2 (Hover/Klick ändert die Breite), der automatische Wechsel bräuchte eine kleine Ergänzung im Grafik-Skript.

## 19. Master Kombi G2 (Runde 10, 26.10.2026)

`/kombi-g2` zeigt die beschlossene Fassung auf der echten Startseite (Kopie von `/home-v2`, Aufsatz `kombi2.css` und `kombi2.js` über jsDelivr auf festem Commit). Unten rechts öffnet «Varianten vergleichen» die Umschaltleiste: erster Knopf je Section = Entscheid ROWAPA, weitere = Gegenvorschläge. Die Wahl bleibt im Browser gespeichert; ein Link mit `?wahl=wege:b,hero:heute` öffnet eine bestimmte Kombination.

| Section | Entscheid | Gegenvorschläge |
|---|---|---|
| Hero | Kombi G: Fotofenster mit 45°-Kante und Plum-Ribbon, Foto wechselt mit der Zeile, Punktemeer | G sauber (ein Foto, keine Punkte darüber), Heute |
| Referenzen | Laufband | Raster (E) |
| Was wir tun | Zeilen (G) auf Weiss, Grau beim Darüberfahren | Akkordeon (H), Kacheln wie heute |
| Was uns antreibt | Look B: Aufbau wie heute, Kennzahlen bis 6 rem | Layout D |
| So arbeiten wir | G, Phasen grau beim Darüberfahren | – |
| Unsere Erfolge | E: Fotorahmen, grosses Zitat, Slider (5 Geschichten), drei Zitate ohne Rahmen | Heute |
| Digital, Insights, Gut zu wissen | G (Titel gross mit Strich) | – |
| Über uns | Mosaik mit «150» und Kachel «Weitere Trainerinnen, Trainer und Partner» | Reihe wie heute |
| Meine Entwicklung | offen | A Text im Bild, B Text unter dem Bild, C Zeilen |
| Im Blickpunkt | Foto links bis zur Mitte, Text rechts, Farbfläche als einzige Einblendung | wischt ein / blendet ein |
| Kontakt | dunkel (Look B) | hell wie heute |

Bewegung: Farbfluss nur im CAS-Block. Animiert bleiben der Plum-Strich unter den Titeln, die Team-Kacheln (nacheinander), die Unterstreichung im Header sowie Punktemeer, Treppe, Orbit und Zähler. Ribbons stehen fest (Lösungen, Antrieb, Team, Meine Entwicklung, Kontakt).

Geprüft live (1440 und 390 px): alle 22 Knöpfe der Leiste schalten die richtige Variante, Punktemeer läuft, Foto folgt den Zeilen, kein Farbfluss ausser CAS, keine Skriptfehler, kein seitlicher Überlauf. Screens: `exports/stufe2-screens/runde10/`.

Native Umsetzung (nach Freigabe): Lösungen-Zeilen, Antrieb, Team-Mosaik, Wege und CAS-Aufbau mit Grid-Klassen und Combo-Klassen; Grau beim Darüberfahren als Hover-State; Titelstrich und Team-Kacheln als IX2 «Scroll into view»; Farbfläche CAS als IX2 (Breite oder Deckkraft); Erfolge im bestehenden Slider-Element; Hero-Fotos als Ebene im Hero-Component mit Interaction synchron zur Zeilen-Animation.

## 20. Kombi G2, Stand Runde 11 (26.10.2026)

Standard in der Leiste (erster Knopf) ist jetzt: Hero wie heute, Laufband, Titel im Raster versetzt (Vorschlag), Zeilen, Look B, Fotorahmen, Digital als Liste neben der Kugel (Vorschlag), Mosaik, Meine Entwicklung C, CAS blendet ein, Insights ohne Balken, Kontakt hell. Die gespeicherte Wahl im Browser wurde zurückgesetzt, damit alle mit diesem Stand starten.

| Neu | Was | Native Umsetzung |
|---|---|---|
| Figuren «Was wir tun» | 192 × 144 px statt 112 × 96 px, Aufbau wieder sichtbar | Grösse der Klasse `card_grafik` in der Zeilen-Variante |
| Digital «Liste neben der Kugel» | links Titel, Text, fünf Zeilen (eine offen), rechts Orbit, darunter Wissensplattform als schmale Notiz | entspricht weitgehend der bestehenden Component-Variante mit Liste; Aufklappen per IX2 (Hover) |
| Digital «Kugel in der Mitte» | zentriert, Lösungen als Reihe ohne Beschreibung | Flex-Spalte, Karten-Variante «schlank» |
| Digital «Kompakt» | wie heute, ohne Beschreibungen, Wissensplattform einzeilig | Component-Variante |
| Titel versetzt | Vorgehen ¼ eingerückt, Meine Entwicklung ab 5/12, Insights mit Seitenspalte | Combo-Klassen am `section-head` (z. B. `is-versetzt-1`, `is-versetzt-2`), Insights-Layout als Grid |
| Meine Entwicklung C (Töne) | Section weiss, Textflächen Sea Cliff Tint / Pastel Snowbank / Plum Tint | Combo-Klassen an den Karten |
| Insights | ohne Fortschrittsbalken | Element ausblenden |

Geprüft live (1440 und 390 px): alle Knöpfe schalten, Figuren-Aufbau läuft, Farbfläche nur im CAS-Block, keine Skriptfehler, kein seitlicher Überlauf. Screens: `exports/stufe2-screens/runde11/`.

## 21. Finaler Entwurf Kombi G2 (Runde 12, 26.10.2026)

Feste Fassung (Grundlage für die native Umsetzung auf `/home-v2`):

| Section | Fassung |
|---|---|
| Hero | wie heute (Punktemeer, Zeilen mit Unterstreichung) |
| Referenzen | Laufband |
| Was wir tun | Zeilen (G) auf Weiss, Grau und Plum-Kante beim Darüberfahren, Figuren 192 × 144 px mit Aufbau, Pfeil hinter dem Titel statt Linktext |
| Was uns antreibt | Look B (grosse Kennzahlen), Titel in G-Grösse |
| Unser Vorgehen | wie G, Phasen grau beim Darüberfahren |
| Unsere Erfolge | Fotorahmen (E) im Slider, drei Zitate ohne Rahmen |
| Digitale Lösungen | **Wahl offen** (A–D, siehe Entscheid 121) |
| Über uns | Mosaik mit «150» und «Weitere Trainerinnen, Trainer und Partner» |
| Meine Entwicklung | C (Zeilen) mit drei Farbtönen; Bildausschnitt 19 % von oben (Augen sichtbar) |
| Im Blickpunkt | Foto links bis zur Mitte, Text rechts, Farbfläche blendet ein (einzige Einblendung) |
| Neueste Insights | Titel in der Seitenspalte, ohne Fortschrittsbalken |
| Gut zu wissen | wie heute, Titel in G-Grösse |
| Kontakt | hell wie heute |

Titel überall gross (bis 4,25 rem) mit Plum-Strich, der sich beim Hereinscrollen zeichnet; Kicker in Plum (auf Dunkel Sea Cliff). Ribbons fest an Lösungen, Antrieb, Team, Meine Entwicklung, Kontakt.

Geprüft live (1440 und 390 px): Figuren-Aufbau läuft, Farbfläche nur im CAS-Block, Leiste mit fünf Digital-Varianten schaltet, keine Skriptfehler, kein seitlicher Überlauf. Screens: `exports/stufe2-screens/runde12/`.
