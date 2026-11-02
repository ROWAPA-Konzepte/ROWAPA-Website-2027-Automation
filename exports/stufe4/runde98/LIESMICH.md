# Runde 98 · Vertriebsperformance: Feinschliff direkt, neue Karten und Ergänzungen als Entwurf (Stufe 4, 02.11.2026)

**Heute (Testadresse):** https://rowapa-website-2027-automation.webflow.io/themen/vertriebsperformance
**Entwurf mit Umschaltleiste:** https://rowapa-website-2027-automation.webflow.io/themen/vertriebsperformance?entwurf

Ohne `?entwurf` sieht die Seite aus wie bisher. Mit `?entwurf` erscheint unten links die Leiste «Entwurf · Vertriebsperformance». Dort lässt sich jeder Punkt einzeln zwischen «wie heute» und dem Entwurf umschalten. Standard sind alle Entwürfe an. «Link zu dieser Auswahl» kopiert einen Link mit genau dieser Kombination. Auf dem Handy ist die Leiste zu Beginn zugeklappt.

## Auftrag ROWAPA (Entscheid 411)

Grundlage ist die Rückmeldung von ChatGPT zur Seite Vertriebsperformance. Die Einschätzung dazu steht im Chat vom 02.11.2026.

| Punkt | Auftrag | Umgesetzt |
|---|---|---|
| 1 | direkt umsetzen; die bestehende Regel für Titelgrössen beachten, auf alle Seiten übertragbar, nicht zu klein | ✓ Titel-Leiter H2, FAQ-Symbol, Seitentitel, «Erstgespräch anfragen», Karten-Effekt feiner; Menü-Markierung und Datum als Designer-Handgriff (unten) |
| 2 | Hebel-Figuren wieder aus Punkten | ✓ vier Figuren, je hell und dunkel (Grafik-Repository `figuren/hebel/`) |
| 3 | Kartentexte: Vorschlag, ROWAPA bestätigt | ✓ als Entwurf (Texttabelle), Bestätigung offen |
| 4 | Wissensplattform: Leadership, Sales, Persönlichkeitsentwicklung | ✓ als Entwurf «Drei Wissensbereiche» |
| 5 | alles als Entwurf, mit Umschalter | ✓ sieben Umschaltpunkte (unten) |

Datum der Insights-Karten «09.04.2026»: Über die Schnittstelle lässt sich das Datumsformat nicht einstellen. Webflow zeigt dann «April 9, 2026». Darum steht weiterhin «Blog». Der Designer-Handgriff dazu steht unten (offener Punkt 144).

## Punkt 1 · direkt umgesetzt

### Titel-Leiter (gilt site-weit)

Die Regel bleibt: Die H1 einer Unterseite ist 6 % der Fensterhöhe (Entscheid zu den Header-Titeln). Bisher war die H2 auf grossen Bildschirmen **grösser als die H1** der Unterseite (1440 × 900: H2 62 px, H1 54 px). Jetzt richtet sich die H2 auch nach der Fensterhöhe und bleibt immer unter der H1:

- **H2** `heading-style-h2`: `clamp(2rem, min(1rem + 2.6vw, 5.2vh), 3.5rem)` (vorher `clamp(2.25rem, 1.2rem + 3vw, 4.25rem)`). Mindestens 32 px, höchstens 56 px. Die einzeiligen Varianten (`is-einzeilig`, gross und mittel) verwenden dieselbe Formel. Handy-Werte bleiben unverändert.
- **H3 gross** (`heading-style-h3 is-gross`, Kartentitel): auf dem Handy jetzt 22–24 px (vorher 26 px). So bleibt sie unter der H2 des Abschnitts.

Gemessen auf der Testadresse (Schriftgrösse in px):

| Fenster | H1 Unterseite | H2 | H3 gross |
|---|---|---|---|
| 1920 × 1080 | 60 | 56 | 38 |
| 1440 × 900 | 54 | 46,8 | 36,3 |
| 1280 × 720 (13 Zoll) | 43,2 | 37,4 | 34,2 |
| 1024 × 768 | 46,1 | 39,9 | 30,9 |
| 390 × 844 (Handy) | 36 | 25,2 | 22 |

Die H1 der Startseite (84 px bei 1440) ist nicht betroffen.

### Weitere Punkte

| Punkt | Umsetzung |
|---|---|
| FAQ-Symbol | dreht sich beim Öffnen um 45° (Plus wird zu ×) und beim Schliessen zurück. Interaktion «FAQ-Symbol dreht beim Öffnen» (site-weit, gilt auch für die Performance-Analyse) |
| Karten-Effekt | feiner: die überdeckte Karte wird auf 96 % kleiner (vorher 94 %) und der Schatten nur auf 25 % (vorher 35 %); Kartenschatten etwas weicher |
| Seitentitel (Browser, Google) | die Vorlage zieht Titel und Beschreibung jetzt aus den CMS-Feldern «SEO-Titel» und «SEO-Beschreibung»; alle fünf Themenlinien haben einen Titel (Texttabelle); geprüft: «Vertriebsperformance für Banken und Versicherungen · ROWAPA» |
| «Erstgespräch anfragen» | statt «Erstgespräch vereinbaren» bzw. «Termin vereinbaren» in vier Themenlinien und in der Komponente «Section Kontakt» (Standardtext); der Knopf öffnet weiterhin eine E-Mail (Entscheid 318) |
| Mauszeiger | bleibt (Entscheide 369, 385, 401) |

### Zwei Handgriffe im Designer (die Schnittstelle kann sie nicht)

**A · Menüpunkt der aktuellen Seite markieren («Current»)**
1. Seite «Themenlinien Template» öffnen.
2. In der Navbar den Megamenü-Eintrag «Vertriebsperformance» anklicken.
3. Rechts im Style-Panel oben bei «States» die Option **Current** wählen.
4. Farbe Plum Perfect (Variable) oder eine Plum-Unterstreichung setzen, wie auf der Performance-Analyse (Anleitung mit Bildern in `stufe4/runde67/`).

Hinweis: Auf einer CMS-Vorlage markiert Webflow «Current» nur, wenn der Link genau auf die angezeigte Seite zeigt. Bei den Themenlinien gilt das für jeden Eintrag einzeln, denn jeder Link führt auf seine eigene Themenlinie.

**B · Datum auf den Insights-Karten (09.04.2026)**
1. Seite «Themenlinien Template» öffnen, im Abschnitt «Passend zum Thema» die erste Karte «Card Insight» anklicken.
2. Rechts bei den Props das Feld **Meta** an das CMS-Feld «Veröffentlicht am» binden (Symbol mit dem Stecker).
3. Format **DD.MM.YYYY** wählen.
4. Veröffentlichen. Gleich bei der Startseite, falls das Datum dort auch erscheinen soll.

## Entwurf · sieben Umschaltpunkte

| Punkt | «wie heute» | Entwurf |
|---|---|---|
| Hebel-Karten | Kartentitel, ein Satz, Figur der Themenlinie | Nutzentitel als Hauptaussage, drei Zeilen **Ausgangslage · Was ROWAPA liefert · Wirkung**, eigene Punktfigur je Hebel (hell oder dunkel passend zur Karte) |
| Sprungmarken | aus | vier Knöpfe über dem Kartenstapel («01 Verkaufstrainings» …), springen zur Karte |
| Ausgangslage | aus | neuer Abschnitt vor den Hebeln: «Kommt Ihnen das bekannt vor?» mit drei Aussagen |
| Praxisbeispiel | aus | neuer Abschnitt nach den Hebeln: Sales-Story in drei Reitern (Ausgangslage, Veränderung, Anwendung) |
| Wissensplattform | Kugel gross | Kugel kleiner, dazu «Drei Wissensbereiche»: Sales, Leadership, Persönlichkeitsentwicklung |
| Einstieg | Lead wie heute | Lead verbindet Analyse und Hebel; Hinweis «direkt mit dem passenden Hebel» unter der Hebel-Einleitung |
| Text neben dem Foto | wie heute | kürzer und klarer: Personen bald 30 Jahre, getrennt vom Unternehmen (20 Jahre) |

### Hebel-Figuren

| Hebel | Figur | Idee |
|---|---|---|
| 1 Verkaufstrainings | Gespräch | zwei Personen am Tisch, Sprechblase in Plum |
| 2 Sales-Story | Story | Erzählbogen mit Stationen, Ziel in Plum |
| 3 Verkaufsprozesse | Pfad | Weg mit drei Stationen und Plum-Fahne |
| 4 Digitales & hybrides Verkaufen | Hybrid | Bildschirm mit Person und Verbindung |

Gerendert mit derselben Kamera und demselben Punkt-Shader wie die Vertriebs-Treppe (`rowapa-website-grafik/figuren/hebel.js`). Je Figur zwei Farbsätze: Manganese/Serpent für helle Karten, Weiss/Sea Cliff für dunkle Karten. Welche sichtbar ist, steuert der Theme-Modus der Karte über zwei Zahlen-Variablen. Auf dem Handy steht die Figur klein oben rechts neben der Nummer. So ist jede Karte ganz sichtbar, bevor die nächste darüber gleitet.

## Bauweise

- **Alles in der Vorlage, nichts doppelt.** Eine Kopie der Vorlage als statische Seite verliert alle CMS-Inhalte. Darum stehen die Entwurfsteile direkt in der Vorlage «Themenlinie», in Hüllen mit der Klasse `hide` und dem Attribut `data-entwurf="…"`. Ohne `?entwurf` bleiben sie verborgen, auch auf den anderen vier Themenlinien. Teile von «heute», die der Entwurf ersetzt, tragen `data-entwurf-heute="…"`.
- **Neue CMS-Felder (Hebel):** «Karte Nutzentitel», «Karte Ausgangslage», «Karte Leistung», «Karte Wirkung», «Motiv für helle Karten», «Motiv für dunkle Karten». Befüllt für die vier Hebel der Vertriebsperformance.
- **Hell/dunkel ohne Skript:** Theme-Variablen «Motiv für hellen Grund» (1 im Standard, 0 in Kontrast, Tiefsee, Plum) und «Motiv für dunklen Grund» (umgekehrt) steuern die Deckkraft der beiden Bilder (`hebel_motiv-bild is-hell` / `is-dunkel`).
- **Sprungmarken:** Jede Karte hat als Anker den Slug des Hebels (z. B. `#sales-story`) und als Attribut `data-kurzname` den Namen. Die Knöpfe baut im Entwurf das Skript. Für den festen Bau ist eine native Lösung vorgesehen (offener Punkt 149).
- **Praxisbeispiel:** native Webflow-Reiter (Tabs) mit den Klassen der Beispielauswertungen der Performance-Analyse (`auswertung_…`), Bausteine `beispiel_baustein` (neu in Plum: `is-neu`).
- **Umschaltleiste** `entwurf-code/entwurf-vp.js` 1.0.0, registriert als «ROWAPAEntwurfVP», über jsDelivr mit Commit-Kennung und SRI, nur auf der Vorlage «Themenlinie». Nach dem Entscheid wird das Gewählte fest gebaut und das Skript entfernt.
- **Ablage Skript-Zustände:** `thema_kugel-wrap is-klein` ist als Element in der Ablage auf «Styleguide (intern)» eingetragen.

### Neue Klassen

`section_lage`, `lage_layout`, `lage_kopf`, `lage_liste`, `lage_punkt`, `lage_text` · `section_beispiel`, `beispiel_kopf`, `beispiel_buehne`, `beispiel_pane`, `beispiel_bausteine`, `beispiel_baustein` (+ `is-neu`), `beispiel_text` · `hebel_details`, `hebel_detail`, `hebel_detail-label`, `hebel_detail-text`, `hebel_motiv`, `hebel_motiv-bild` (+ `is-hell`, `is-dunkel`) · `wissen_bereich`, `wissen_name` · `thema_kugel-wrap is-klein`. Alle Farben über Variablen.

## Texttabelle

### Punkt 1 (umgesetzt)

| Ort | Original | Vorschlag (umgesetzt) | Begründung | Offene Fragen |
|---|---|---|---|---|
| SEO-Titel Vertriebsperformance | Name der Vorlage | «Vertriebsperformance für Banken und Versicherungen · ROWAPA» | sagt Thema und Zielgruppe | – |
| SEO-Titel übrige Themenlinien | Name der Vorlage | «Mitarbeiterperformance & Potenzial · ROWAPA», «Führung & Teams · ROWAPA», «Recruiting & Mitarbeiterbindung · ROWAPA», «Digitale Lösungen · ROWAPA» | einheitlich, kurz | Zielgruppe ergänzen wie bei Vertrieb? |
| Kontakt-Knopf | «Erstgespräch vereinbaren» / «Termin vereinbaren» | «Erstgespräch anfragen» | ehrlicher: der Knopf öffnet eine E-Mail, kein Kalender | – |

### Entwurf (zur Bestätigung)

| Ort | Original | Vorschlag (Entwurf) | Begründung | Offene Fragen |
|---|---|---|---|---|
| Header, Lead | «ROWAPA entwickelt die Verkaufsleistung Ihres Unternehmens entlang von vier Hebeln, von der Diagnostik über Trainings bis zur Begleitung im Kundenkontakt.» | «Die Performance-Analyse zeigt, wo Sie ansetzen. Vier Hebel setzen die Veränderung um, einzeln oder kombiniert.» | verbindet Analyse und Hebel (Rückmeldung Punkt 3) | – |
| Hebel, Hinweis | – | «Kennen Sie Ihren Entwicklungsbedarf bereits, beginnen wir direkt mit dem passenden Hebel.» | Einstieg ohne Analyse sichtbar | – |
| Ausgangslage | – | Kicker «Die Ausgangslage», Titel «Kommt Ihnen das bekannt vor?», Aussagen: «Viele Kundengespräche, aber zu wenig verbindliche nächste Schritte.» · «Gute Produkte, deren Nutzen im Gespräch nicht deutlich wird.» · «Erfolgreiche Einzelne, aber keine gemeinsamen Standards.» | holt die Lesenden bei ihrem Problem ab | passen die drei Aussagen? |
| Karte 1 | Titel «Individuell zugeschnittene Verkaufstrainings», Text «Kundenorientierte Trainings auf Stufe Geschäftsstelle, Generalagentur und Vertriebseinheit, für mehr Wertschöpfung in jedem Gespräch.» | Nutzentitel «Beratungsgespräche wirksamer führen.» · Ausgangslage «Viele Gespräche, aber zu selten ein verbindlicher nächster Schritt.» · Was ROWAPA liefert «Trainings auf Stufe Geschäftsstelle, Generalagentur und Vertriebseinheit, an Ihren Produkten und echten Gesprächssituationen.» · Wirkung «Mehr Wertschöpfung in jedem Gespräch.» | Nutzen zuerst, Inhalt aus dem heutigen Text | bitte bestätigen |
| Karte 2 | Titel «Sales-Story-Entwicklung», Text «Kundenorientierte Sales-Stories für Ihre Beratungsansätze und Tools, mit hybridem Storytelling als Game-Changer.» | «Den Kundennutzen überzeugend vermitteln.» · «Gute Produkte, deren Nutzen im Gespräch nicht ankommt.» · «Kundenorientierte Sales-Stories für Ihre Beratungsansätze und Tools, auch hybrid erzählt.» · «Die Beratung setzt bei der Situation Ihrer Kundschaft an, nicht beim Produkt.» | «Game-Changer» ersetzt (keine Superlative) | bitte bestätigen |
| Karte 3 | Titel «Verkaufsprozess & Strategien», Text «Einheitliche Beratungsstandards entwickeln und verankern, für Kundenbindung und Wettbewerbsvorteile.» | «Erfolgreiche Beratung systematisch verankern.» · «Einzelne sind stark, gemeinsame Standards fehlen.» · «Einheitliche Beratungsstandards, mit Ihnen entwickelt und im Alltag verankert.» · «Kundenbindung und Wettbewerbsvorteile.» | wie oben | bitte bestätigen |
| Karte 4 | Titel «Digitales & hybrides Verkaufen», Text «Online-Beratung und hybride Kundenkontakte professionalisieren, für mehr Schlagzahl und Schlagkraft.» | «Auch digital persönliche Nähe schaffen.» · «Online-Termine wirken schnell unpersönlicher als das Gespräch am Tisch.» · «Online-Beratung und hybride Kundenkontakte professionalisieren.» · «Mehr Schlagzahl und Schlagkraft.» | wie oben | bitte bestätigen |
| Praxisbeispiel, Kopf | – | Kicker «Aus der Praxis · Beispiel», Titel «So wird aus einer Produktbeschreibung ein relevantes Kundengespräch.», Text «Ein vereinfachtes Beispiel aus einer Vorsorgeberatung, in drei Schritten. Wählen Sie oben den Schritt.» | zeigt die Arbeitsweise konkret (Rückmeldung Punkt 2) | Beispiel Vorsorge passend? |
| Reiter 1 «Ausgangslage» | – | Bausteine «Produkt vorstellen · Leistungen im Detail · Prämie und Konditionen · Abschlussfrage»; «Die Beratung erklärt das Produkt.» «Die Vorsorgelösung wird Punkt für Punkt vorgestellt. Die Kundin oder der Kunde hört zu, fragt wenig nach und vertagt die Entscheidung.» | typisches Muster | – |
| Reiter 2 «Veränderung» | – | Bausteine «Lebenssituation verstehen · Ziele und Sorgen klären · Lücke sichtbar machen · Produkt als Lösung · Nächsten Schritt vereinbaren»; «Die Beratung beginnt beim Kunden.» «Die Sales-Story ordnet das Gespräch neu: zuerst verstehen, dann beraten. Das Produkt kommt erst, wenn die Kundin oder der Kunde die eigene Lücke sieht.» | Kern der Sales-Story | – |
| Reiter 3 «Anwendung» | – | zwei Fragen aus dem ROWAPA-Beitrag «Kundenberatung in der Finanzbranche als Sales-Story», Nutzen, nächster Schritt; «Fragen, Nutzen, nächster Schritt.» «Die Beratung arbeitet mit passenden Fragen, einer verständlichen Nutzenargumentation und einem vereinbarten nächsten Schritt. Genau das trainieren wir an Ihren Produkten und Gesprächssituationen.» | Fragen belegt, nicht erfunden | Nutzen und nächster Schritt sind Beispiel-Formulierungen [ROWAPA bestätigen] |
| Wissensplattform | – | «Drei Wissensbereiche»: **Sales** «Beratung, Verkauf und Vertriebssteuerung» · **Leadership** «Führung von Menschen, Teams und Vertriebseinheiten» · **Persönlichkeitsentwicklung** «Wirkung, Haltung und Selbstführung» | Bereiche nach Vorgabe ROWAPA | Beschreibungen [ROWAPA bestätigen] |
| Foto, Text | «Wir sind selbst schon bald 30 Jahre und mehr im Finanzvertrieb tätig. Darum trainieren wir an Ihren Produkten, Ihren Gesprächssituationen und mit Ihren Zahlen.» | «Wir stehen selbst seit bald 30 Jahren im Finanzvertrieb. Darum trainieren wir an Ihren Produkten, Ihren Gesprächssituationen und mit Ihren Zahlen.» | kürzer; «und mehr» doppelt sich mit «bald» | – |

**Redaktions-Check:** Was: Themenlinie Vertriebsperformance. Für wen: Vertriebsverantwortliche in Banken und Versicherungen (Sie). Nutzen: je Hebel sichtbar, welches Problem er löst und was sich verändert. Nächster Schritt: Hebel wählen oder Performance-Analyse, Erstgespräch anfragen. ✓

## Geprüft auf der Testadresse

- **Ohne `?entwurf`** (Desktop und Handy): keine Leiste, alle 13 Entwurfsteile verborgen, nur der heutige Lead sichtbar.
- **Mit `?entwurf`** (gehostetes Skript, SRI geprüft): Leiste da (Handy zugeklappt), vier Sprungmarken, alle Punkte schalten um, Karten mit neuen Texten und Figuren, hell/dunkel richtig je Karte, Stapel-Effekt läuft, Reiter wechseln, keine seitliche Verschiebung (1440 und 390 px).
- **Handy-Karten:** Karte 609–647 px hoch bei 844 px Fenster, Figur 108 × 82–94 px oben rechts; jede Karte ist ganz sichtbar, bevor die nächste sie überdeckt. Erster Bau: Figur unten, von der nächsten Karte verdeckt → korrigiert.
- **FAQ-Symbol** dreht auf 45° und zurück. **Seitentitel** aus dem CMS. **Titel-Leiter** in fünf Fenstergrössen gemessen (oben).

Hinweis: Die Bildschirmfotos dieser Runde liegen nicht im Repository. Sie zeigen den Mauszeiger und teils die Foto-Section. Bitte direkt auf der Testadresse ansehen.

## Fragen an ROWAPA

1. **Kartentexte** (Texttabelle, Karten 1–4) so bestätigen oder ändern?
2. **Welche Umschaltpunkte übernehmen?** Am einfachsten die Leiste einstellen und den Link «Link zu dieser Auswahl» schicken.
3. **Praxisbeispiel:** Vorsorgeberatung als Beispiel passend? Später je Themenlinie eigenes Beispiel aus dem CMS (dann Felder je Reiter)?
4. **Wissensbereiche:** Beschreibungen der drei Bereiche bestätigen.
5. **Figuren:** Gefallen die vier Punktfiguren? Für die übrigen Themenlinien würde ich je Hebel ebenfalls eine Figur zeichnen.
6. **Leere Entwurfsseite** `/vertriebsperformance-entwurf` (offline, Titel «… nicht verwendet, löschen») im Designer löschen (die Schnittstelle kann keine Seiten löschen).

## Prüfsession 33 (Entscheid 378)

| Bereich | Punkt | Ergebnis |
|---|---|---|
| A CI | Farben, Schriften, 8-px-Raster | ✓ nur Variablen (Hex-Werte aus dem ersten Bau durch Variablen ersetzt); Abstände 0,5/1/1,5/2/3 rem |
| A CI | Titel-Hierarchie | ✗ → korrigiert: H2 war auf grossen Bildschirmen grösser als die H1 der Unterseite; H3 gross auf dem Handy grösser als die H2. Beides angepasst, gemessen in fünf Grössen |
| A CI | Grafik-Elemente minimalistisch, Punkte-Bildsprache | ✓ Figuren aus Punkten in Markenfarben, Plum nur als Akzent |
| B Texte | Sie-Form, «Unternehmen», keine Superlative | ✓ «Game-Changer» im Entwurf ersetzt |
| B Texte | Inklusive Sprache | ✗ → korrigiert: Praxisbeispiel «Der Berater …» und Karte 2 «Situation des Kunden» neutral bzw. in Paarform umformuliert |
| B Texte | Keine erfundenen Fakten | ? Praxisbeispiel als «vereinfachtes Beispiel» gekennzeichnet, Fragen aus einem ROWAPA-Beitrag; Nutzen, nächster Schritt und Wissensbereich-Beschreibungen sind Vorschläge [ROWAPA bestätigen] |
| B Texte | Texttabelle | ✓ oben |
| C Bauweise | nativ, pflegbar | ✓ CMS-Felder, native Reiter, Theme-Variablen für hell/dunkel, Interaktion für FAQ; Skript nur für die Umschaltleiste (wird gelöscht) |
| C Bauweise | Ausblenden über `hide` | ✗ → korrigiert: das Attribut `hidden` aus der Schnittstelle wird beim Veröffentlichen nicht ausgegeben (zwei Entwurfssätze waren kurz sichtbar); jetzt Hüllen mit `hide` (neue Regel) |
| C Bauweise | Skript-Klassen in der Ablage | ✓ `thema_kugel-wrap is-klein` eingetragen |
| C Bauweise | Handy geprüft | ✗ → korrigiert: Figur auf dem Handy von der nächsten Karte verdeckt; jetzt oben rechts |
| D Abmachungen | Mauszeiger, Erstgespräch per E-Mail | ✓ Zeiger bleibt; Knopf «anfragen» passt zur E-Mail |
| D Abmachungen | Entwurf umschaltbar (Entscheid 393), echte Seite unverändert | ✓ ohne `?entwurf` wie heute; Punkt 1 auf Auftrag direkt |
| D Abmachungen | Personenfotos nicht im Repository | ✓ keine Bildschirmfotos abgelegt |
| E Ablauf | Veröffentlichen | ✓ nur Testadresse |
| E Ablauf | Löschen | ✓ nichts gelöscht; leere Entwurfsseite offline, Löschen im Designer (Frage 6) |
| E Ablauf | keine Zugangsdaten, keine Modellbezeichnungen | ✓ |
