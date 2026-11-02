# Runde 90 · Empfehlungen wie Einordnung, «Unsere Erfolge» als Kacheln, Header und Wellenmeer gemeinsam (Stufe 4, 01.11.2026)

## Auftrag ROWAPA (Entscheid 404)

| Punkt | Auftrag |
|---|---|
| Beispielauswertungen (Muster 2, Spalte Manganese) | Die zwei Bereiche unter dem Diagramm sollen die gleiche Art der Darstellung haben. Der Titel der rechten Spalte könnte «Empfehlungen» heissen. Die rote Linie oben bleibt als Abgrenzung zur linken Seite. |
| Startseite, «Referenzen» | den Bereich so bauen wie im Printscreen (Kacheln aus der Skizze), mit Zähler bei den Zahlen und irgendwo noch ein Foto; alles als Entwurf |
| Header | Das Einblenden darf etwas länger gehen. Das Wellenmeer soll gleichzeitig mitlaufen und gleichzeitig aufgebaut sein wie der ganze Header. |

Rückfragen beantwortet (Runde 90):

- **Foto:** unter dem Titel, neben der dunklen Kundenstimme; die vier Zahlen stehen in einer Reihe.
- **Doppelte Zahlen:** umschaltbar, also «Was uns antreibt» mit oder ohne die drei Zahlen.
- **Header:** auf beiden Entwurfsseiten.
- **Leiste:** Alle bisherigen Möglichkeiten bleiben zum Vergleichen.

## Links zum Ansehen (Testadresse)

- **Performance-Analyse (Entwurf):** https://rowapa-website-2027-automation.webflow.io/performance-analyse-entwurf?v=auswertung:mischung-dunkel,insights:foto-gross,belege:muster,antrieb:ohne-zahlen,kopf:08
- **Startseite (Entwurf):** https://rowapa-website-2027-automation.webflow.io/startseite-entwurf?v=auswertung:mischung-dunkel,insights:foto-gross,belege:muster,antrieb:ohne-zahlen,kopf:08
- **Header langsamer zum Vergleich:** am Ende der Adresse `kopf:12` statt `kopf:08`; wie heute: `kopf:heute`.

Unten links öffnet «Entwurf · … im Muster» die Umschaltleiste. Sie hat jetzt fünf Punkte:

- Beispielauswertungen
- Neueste Insights
- **Unsere Erfolge** (neu): «Slider wie heute» oder «Kacheln mit Zahlen und Foto»
- **Was uns antreibt** (neu): «mit den drei Zahlen» oder «ohne die drei Zahlen»
- **Header einblenden** (neu): «wie heute», «gemeinsam 0,8 s», «0,6 s», «1,2 s». Nach dieser Wahl lädt die Seite neu, denn das Einblenden wirkt beim Laden.

Die echten Seiten (`/`, `/performance-analyse`) sind unverändert.

## 1. Empfehlungen wie Einordnung (Beispielauswertungen)

- Der rechte Block heisst in allen fünf Reitern **«Empfehlungen»** statt «Mögliche nächste Massnahme» (Webflow-Text, gilt für Muster 1 und 2).
- In Muster 2 haben beide Blöcke jetzt die gleiche Darstellung, gemessen an der Seite:
  - **Bezeichnung:** TASA Explorer 11 px, Extrabold, Grossbuchstaben, Manganese gedämpft (bisher rechts Plum).
  - **Text:** TASA Orbiter 17 px, Medium, Manganese (bisher rechts 16 px fett).
  - **Quelle** «Abgeleitet aus dem Musterbericht»: wie der Hinweis links, 14 px mit Sea-Cliff-Linie.
  - **Abstände:** gleich (16 px oben, 8 px unter der Bezeichnung, 16 px vor der Quelle).
- Die **Plum-Linie oben** über den Empfehlungen bleibt als Abgrenzung. Links bleibt die feine graue Linie.

## 2. «Unsere Erfolge» als Kacheln (Startseite-Entwurf)

Neuer Abschnitt `section_belege` aus Webflow-Elementen, im Designer pflegbar, direkt nach dem heutigen Abschnitt. Die Leiste zeigt entweder den heutigen Slider oder die Kacheln.

**Aufbau (Desktop):**

- **Titel:** «Referenzen», «Unsere Erfolge», Satz «Was Kunden über die Zusammenarbeit sagen und was wir messen.», Link «Alle Referenzen».
- **Kundenstimme rechts (dunkel, Manganese):**
  - Kurztitel in Sea Cliff, Zitat, Name und Funktion.
  - Pfeile ← → mit Anzeige «1 / 8»; auf dem Handy auch wischen.
  - Die acht Stimmen von heute, gleiche Reihenfolge wie in der Skizze.
  - Kein automatischer Wechsel (Skizze: «Kundenstimmen von Hand»).
- **Foto unter dem Titel:** «Trainer präsentiert im Seminarraum», ein Bild, das schon im heutigen Slider vorkommt.
- **Vier Zahlen mit Zähler:**
  - 20 Jahre, 98 %, 100 %, 100 %, mit den Texten von heute.
  - Die Zahlen zählen einmal hoch, sobald sie ins Bild kommen (Attribut `data-grafik="zaehler"`).
- **«Wirkung gemessen»** als feine Rahmenkachel, daneben die Kundennamen als Text («Unter anderem vertrauen uns diese Finanzunternehmen», wie im Logo-Band).

**Fläche:**

- Der Abschnitt ist **grau (Snowbank)** mit weissen Kacheln, nicht weiss wie im Printscreen. Sonst stünden drei weisse Abschnitte hintereinander («Was uns antreibt», Erfolge, «Unser Vorgehen»); die Prüfliste verlangt den Wechsel hell/grau.
- «Wirkung gemessen» ist darum die Kachel ohne Fläche, nur mit Rahmen (im Printscreen grau auf Weiss).

**Tablet und Handy:** alles untereinander (Titel, Kundenstimme, Foto). Zahlen 2 × 2; auf schmalen Handys untereinander, damit die längeren Texte lesbar bleiben.

**Pflege:**

- Texte, Foto und Reihenfolge der Stimmen im Designer ändern.
- Farben und Schriften hängen an den CI-Variablen.
- Das Weiterschalten der Stimmen macht im Entwurf die Umschaltleiste. Beim festen Bau wird daraus ein Webflow-Slider (ohne Skript).

## 3. «Was uns antreibt» mit oder ohne Zahlen (Startseite-Entwurf)

- **«ohne die drei Zahlen»:** Die vier Gründe stehen als 2 × 2-Kacheln neben dem Text, auf dem Handy als Liste. Die Zahlen stehen dann nur noch in «Unsere Erfolge».
- **«mit den drei Zahlen»:** wie heute.

## 4. Header und Wellenmeer gemeinsam einblenden (beide Entwurfsseiten)

**Heute:**

- Der Text steht sofort da.
- Das Wellenmeer blendet erst nach dem Laden der Seite ein, in 1,4 s; beim Seitenwechsel erst nach der Überblendung.
- Gemessen: Text ab 0,3 s, Wellenmeer von 1,0 bis 2,1 s.

**Neu (Entwurf):**

- Der Inhalt des Headers wartet unsichtbar, bis das Wellenmeer sein erstes Bild gezeichnet hat. Der Inhalt sind Titel, Text, Buttons, Foto, Lupe und auf der Startseite das Logo-Band.
- Dann blenden alle Teile **gleichzeitig und gleich lang** ein: 0,8 s, wahlweise 0,6 s oder 1,2 s. Das Wellenmeer bewegt sich dabei schon.
- **Gemessen, direkter Aufruf:**
  - Startseite: Inhalt und Wellenmeer beide von 1,09 bis 1,69 s.
  - Performance-Analyse: beide von 0,89 bis 1,55 s.
  - Mit 1,2 s: 1,03 bis 1,99 s.
- **Beim Seitenwechsel** (Startseite → Performance-Analyse und zurück über das Logo):
  - Zuerst die gewohnte Überblendung der Seite (0,35 s), dann blenden Header und Wellenmeer zusammen ein.
  - Die Bildfolge während der Überblendung ist gleich ruhig wie heute (gemessen: gleich viele lange Bilder wie ohne die neue Einblendung).
- **Nebenwirkung:** Beim direkten Aufruf erscheint der Text etwas später als heute (in der Testumgebung rund 0,8 s), dafür steht der ganze Header früher fertig da (1,7 s statt 2,1 s).
- **Notfall:** Spätestens nach 3,5 s ist der Header in jedem Fall sichtbar. Bei «Bewegung reduzieren» bleibt alles wie heute.

**Technik:**

- Grafik-Skript **1.30.0**, site-weit eingebunden: Das Wellenmeer startet sofort, wenn am `html`-Element `data-rg-kopf` steht.
- Das neue Kopf-Skript **«ROWAPAEntwurfKopf» 1.0.0**, nur auf den beiden Entwurfsseiten, setzt dieses Attribut aus der Wahl der Leiste.
- Auf den echten Seiten fehlt das Attribut, dort ändert sich nichts (geprüft).

## Technik und Versionen

- Grafik **1.30.0** (`rowapa-website-grafik@c76c987`), site-weit, Footer.
- Umschaltleiste **2.2.0** (`ROWAPA-Website-2027-Automation@91dab3c`, Quelle `entwurf-code/entwurf-muster.js`), Footer beider Entwurfsseiten.
- Kopf-Skript **1.0.0** (inline, Quelle `entwurf-code/entwurf-kopf.js`), Kopf beider Entwurfsseiten.
- Neuer Abschnitt `section_belege` (Startseite-Entwurf), Klassen `belege_*`, Farben und Schriften über die CI-Variablen. IDs in `00_webflow-ids.md`.

## Texttabelle

| Ort | Original | Entwurf | Begründung | Offene Fragen |
|---|---|---|---|---|
| Beispielauswertungen, rechter Block | «Mögliche nächste Massnahme» | «Empfehlungen» | Vorschlag ROWAPA | – |
| Unsere Erfolge, Satz unter dem Titel | – (heute nur Titel und Button) | «Was Kunden über die Zusammenarbeit sagen und was wir messen.» | aus der Skizze, im Printscreen von ROWAPA | – |
| Unsere Erfolge, Link | Button «Alle Referenzen» | Textlink «Alle Referenzen» | nächster Schritt bleibt; die Seite `/referenzen` folgt noch (wie heute) | – |
| Unsere Erfolge, Zahlen | in «Was uns antreibt»: 100 %, 98 %, 100 %; «Seit 20 Jahren» im Text | «20 Jahre · arbeiten wir ausschliesslich für die Finanzbranche: Banken, Versicherungen und Krankenkassen.»; 98 %, 100 %, 100 % mit den Texten von heute | wie im Printscreen; Texte unverändert übernommen | Belege zu den Kennzahlen weiterhin offen (offener Punkt 42) [ROWAPA bestätigen] |
| Unsere Erfolge, Kundenstimmen | acht Stimmen im Slider | dieselben acht Stimmen, gleiche Texte | – | – |
| Unsere Erfolge, «Wirkung gemessen» | Grund 02 in «Was uns antreibt» | derselbe Text als Kachel | wie im Printscreen | Bleibt Grund 02 in «Was uns antreibt» zusätzlich stehen? |
| Unsere Erfolge, Kundennamen | Logos im Logo-Band | «Unter anderem vertrauen uns diese Finanzunternehmen» und zwölf Namen als Text | wie im Printscreen | – |

## Prüfsession 26 (Entscheid 378)

| Bereich | Punkt | Ergebnis |
|---|---|---|
| A CI | Farben, Schriften | ✓ nur CI-Variablen (Manganese, Plum, Sea Cliff, Snowbank, White, Manganese Soft, Linien); TASA über die Schrift-Variablen; im Designer als Variablen verknüpft |
| A CI | 8-px-Raster | ✓ Abstände 8, 16, 24, 32, 48 px; Pfeilknöpfe 40 px |
| A CI | Flächenfolge | ✓ «Unsere Erfolge» grau statt weiss, damit hell und grau wechseln (Abweichung vom Printscreen, oben begründet) |
| B Texte | keine erfundenen Fakten | ✓ alle Zahlen, Stimmen und Namen stehen heute schon auf der Website; Satz unter dem Titel aus der Skizze, von ROWAPA im Printscreen gezeigt; Belege zu den Kennzahlen bleiben offener Punkt 42 |
| B Texte | Sie-Form, «Unternehmen» | ✓ |
| B Texte | Texttabelle | ✓ oben |
| C Bauweise | nativ zuerst | ✓ «Unsere Erfolge» aus Webflow-Elementen mit Klassen nach Client-First, Zähler über Attribut, Foto als Webflow-Bild. Weiterschalten der Stimmen, Umschalten und Header-Einblenden im Entwurf per Skript; beim festen Bau Webflow-Slider |
| C Bauweise | «Bewegung reduzieren» | ✓ Header wie heute, Zähler stehen, Stimmen wechseln ohne Bewegung |
| C Bauweise | Handy und Tablet | ✓ 390, 900, 1280 und 1440 px, keine Überbreite; Zahlen auf schmalen Handys untereinander |
| D Abmachungen | Entscheid 393 (umschaltbar, nebeneinander) | ✓ drei neue Punkte in der Leiste, alle bisherigen bleiben |
| D Abmachungen | Seitenwechsel 0,35 s, Navigation steht (Entscheid 401) | ✓ unverändert; Header-Einblenden kommt danach, Bildfolge gemessen |
| D Abmachungen | Bewegung messen statt schätzen | ✓ Einblenden Bild für Bild aufgezeichnet, Zeiten oben |
| E Ablauf | Entwurf zuerst (389) | ✓ nur auf den Entwurfsseiten; Grafik 1.30.0 wirkt nur mit dem Attribut, echte Seiten geprüft |
| E Ablauf | Veröffentlichen, Löschen | ✓ nur Testadresse; nichts gelöscht |
| E Ablauf | Grafik-Skript nur im Repository, jsDelivr mit SRI | ✓ |
| E Ablauf | keine Zugangsdaten, keine Modellbezeichnungen, keine Personenfotos im Repository | ✓ |

## Fragen an ROWAPA

1. Empfehlungen: So übernehmen?
2. «Unsere Erfolge»: Kacheln übernehmen? Passen Foto und graue Fläche?
3. «Was uns antreibt»: mit oder ohne die drei Zahlen? Bleibt «Wirkung gemessen» dort zusätzlich als Grund 02 stehen?
4. Header: 0,8 s, 0,6 s oder 1,2 s? Ist der etwas spätere Start des Textes beim direkten Aufruf in Ordnung?
5. Weiterhin offen: Wahl aus den Mustern (Auswertung, Insights), Videos als Vimeo-Links, 404-Seite.
