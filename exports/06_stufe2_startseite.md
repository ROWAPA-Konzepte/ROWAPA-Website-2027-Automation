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
