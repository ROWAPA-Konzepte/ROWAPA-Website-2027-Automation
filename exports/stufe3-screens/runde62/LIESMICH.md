# Runde 62 · Themenlinie «Vertriebsperformance» im Standard der Performance-Analyse (31.10.2026)

Ansicht: https://claude.ai/artifact/XLPZpG2EUUiU5s51CxbBKi (Reiter «Video», «Desktop», «Handy», «Aufbau»). Nichts in Webflow gebaut. Die Vorlage «Themenlinie» im Designer (Entscheide 346–349) wird nach der Abnahme in Stufe 4 angepasst.

Ausgangslage: Entwurf Runde 50 (vor den Entscheiden zur Performance-Analyse). Jetzt mit denselben Bausteinen wie die abgenommene Performance-Analyse (Entscheid 371) und die Startseite (Entscheid 363) und mit dem besonderen Effekt dieser Seitenfamilie: Hebel-Karten stapeln sich (Idee 1, Entscheid 370).

Dateien: `seite_vertriebsperformance_desktop.jpg` (1440 px), `seite_vertriebsperformance_handy.jpg` (390 px, doppelte Auflösung), `video_desktop.mp4` (rund 42 s), `video_handy.mp4` (rund 22 s). Werkzeug `tools/entwuerfe/runde62_themenlinie.js` (`MODE=page` oder `MODE=video`), nutzt `fx60.js`, `runde61_performance-analyse.js` (Grundstil) und `fig_vertrieb_360.png` (Themenfigur für den Punkte-Aufbau).

## Aufbau

| # | Section | Hintergrund | Baustein | Gegenüber Runde 50 |
|---|---|---|---|---|
| 1 | Header B | Manganese, Punktemeer mit Netz | wie Performance-Analyse: Kopfzeile C, kein Kicker, Strich, ein Satz, zwei Buttons, Themenfigur setzt sich aus Punkten zusammen | ohne Kicker, Kopfzeile C |
| 2 | Logo-Band | Manganese | Startseite | neu |
| 3 | Die Hebel | Snowbank | vier Karten, stapeln sich beim Scrollen, abwechselnd hell und dunkel | vorher vier kleine Karten nebeneinander |
| 4 | Ihr Vorteil | Weiss | Text, darunter «Wo anfangen?» (Performance-Analyse) und Werkzeug SalesStep | Text gekürzt, Performance-Analyse verlinkt |
| 5 | Aus der Praxis | Snowbank | drei Kundenstimmen der Startseite | ersetzt Case-Stories mit Platzhalter-Zahlen |
| 6 | Gut zu wissen | Weiss | Startseite, sechs Fragen der Themenlinie | gleich |
| 7 | Kontakt | Sea Cliff | Startseite, Satz angepasst | vorher eigene Variante |
| – | «So arbeiten wir» | – | – | weggelassen wie bei der Performance-Analyse |

Seite am Desktop rund 7100 px lang (Runde 50: ähnlich, aber mit Vorgehen und Case-Stories).

## Bau in Webflow (Stufe 4)

- Hebel-Karten stapeln: nativ. Karte `position: sticky` mit Versatz je Karte (Zusatzklassen `is-2` … `is-4` oder CMS-Reihenfolge mit festem Versatz), Grösse und Helligkeit über die Interaction «beim Scrollen». Kein eigener Code.
- Themenfigur aus Punkten: wie die Lupe der Performance-Analyse (Figuren-Aufbau im ROWAPA-Grafik-Skript erweitern).
- Logo-Band, Erfolge-Karten, «Gut zu wissen», Kontakt: vorhandene Komponenten der Startseite; Kontakt-Satz und Button-Text als Eigenschaft.

## Texttabelle

| Stelle | Original (Runde 50 / CMS v11) | Vorschlag | Begründung | Offene Fragen |
|---|---|---|---|---|
| Kopfzeile | Brotkrumen + Kicker «Für Unternehmen · Vertriebsperformance» | Kopfzeile C «Für Unternehmen › Vertriebsperformance», ohne Kicker | wie Performance-Analyse (Entscheid 367) | – |
| Titel, Satz | «Vertriebsstärke ist kein Zufall.» · «ROWAPA entwickelt die Verkaufsleistung Ihres Unternehmens entlang von vier Hebeln, …» | unverändert | klar und kurz | – |
| Buttons | «Erstgespräch vereinbaren» · «Die vier Hebel» | unverändert | Button je Seite (Entscheid 367); hier Erstgespräch | – |
| Hebel-Karten | Kennung, Titel, Kurztext, «Mehr erfahren» | unverändert, grösser, mit Figur | ein System statt Liste (Idee 1) | Eigene Grafik je Hebel? Heute überall die Figur Vertrieb. [ROWAPA entscheiden] |
| Ihr Vorteil | fünf Sätze inkl. SalesStep und «schwarz auf weiss» | drei Sätze: «Sie entscheiden auf gesicherter Grundlage statt aus dem Bauch. Alle unsere Werkzeuge greifen auf die ROWAPA Wissensplattform zu, das Praxiswissen aus 20 Jahren Finanzvertrieb. So arbeiten Ihre Leute mit dem, was in Ihrer Branche wirklich verkauft, und die Wirkung trägt in den Alltag.» | kürzer; SalesStep steht jetzt in der eigenen Karte | «20 Jahre» stammt aus v11. [ROWAPA bestätigen] |
| Wo anfangen? | – | Karte «Performance-Analyse: Fünf Methoden zeigen, wo in Ihren Teams Potenzial liegt und welcher Hebel am meisten bewegt. Fachlich ausgewertet durch ROWAPA.» · «Zur Performance-Analyse →» | führt Entscheider zum Einstieg; offener Punkt 85 | So in Ordnung? [ROWAPA entscheiden] |
| Werkzeug | «Werkzeug SalesStep · Diagnostik der Vertriebskompetenz» | Karte «SalesStep: Diagnostik der Vertriebskompetenz: Sie sehen schwarz auf weiss, wo Ihre Vertriebsstärke liegt.» · «Tools und Methoden →» | Text aus dem bisherigen Vorteil | – |
| Aus der Praxis | Case-Stories mit Platzhalter-Zahlen («Plus 40 Prozent …»*) | drei freigegebene Kundenstimmen der Startseite (Basler, Raiffeisenbank Berg-Erlen, Mobiliar), Titel «Was unsere Kunden über die Zusammenarbeit sagen» | keine erfundenen Zahlen | Später echte Case-Stories (CMS Referenzen) |
| Gut zu wissen | sechs Fragen v11, mit Kommas verbunden | gleiche Fragen, Sätze getrennt (z. B. «Wirkung wird sichtbar gemacht, nicht behauptet.») | besser lesbar | – |
| Kontakt | «Sprechen wir über Ihre Ausgangslage.» · «Termin buchen» / «Nachricht schreiben» | Kontakt der Startseite, Satz «Im Erstgespräch klären wir Ihre Ausgangslage und welcher Hebel in Ihrem Unternehmen am meisten bewegt.» · «Erstgespräch vereinbaren» | Kontakt überall gleich (Entscheid 363) | – |
| So arbeiten wir | vier Phasen der Startseite | weggelassen | wie bei der Performance-Analyse | Hier auch weglassen? [ROWAPA entscheiden] |

## Redaktions-Check (Leitfaden)

Was: Themenlinie mit vier Hebeln. Für wen: Vertriebsverantwortliche in Banken, Versicherungen, bei Brokern (Sie). Nutzen: messbare Vertriebsleistung, gesicherte Entscheidungen. Nächster Schritt: Erstgespräch, oder Einstieg über die Performance-Analyse.

## Nebenbei korrigiert

Die Handy-Videos aus Runde 59/60 zeigten die Seite nur im oberen linken Viertel. `runde60/effekte_handy.mp4` ist neu zugeschnitten; die Ansicht Performance-Analyse zeigt die korrigierte Fassung.

## Vergleich mit v11 (Struktur und Ablauf, auf Wunsch ROWAPA)

Bild v11: `v11_vertriebsperformance_desktop.jpg` (aus `ROWAPA-Website-v11.html`). In der Ansicht Reiter «Vergleich v11».

- **v11:** Was wir tun → Warum ROWAPA → Wie wir arbeiten → Beweis → Gespräch. Sechs Abschnitte, kurz und textlastig, rund 3 100 px.
- **Webflow-Vorlage heute (Entscheid 346):** Hero → Hebel → Diagnostik & Tools → Vorteil → Abschluss. Fünf Abschnitte aus dem CMS.
- **Runde 62:** Was + Vertrauen → die vier Hebel als System → Warum ROWAPA und wo anfangen → Beweis → Fragen klären → Gespräch mit Ansprechperson. Sieben Abschnitte, rund 7 100 px (davon rund 2 400 px die grossen Hebel-Karten).

| Schritt | v11 | Webflow-Vorlage heute | Runde 62 | Warum |
|---|---|---|---|---|
| Einstieg | heller Hero mit Kicker, Titel, Satz, Foto-Platzhalter, ohne Buttons | Hero aus dem CMS | Header B dunkel, Kopfzeile C, zwei Buttons, Themenfigur aus Punkten | gleicher Auftritt wie Startseite und Performance-Analyse |
| Vertrauen | – | – | Logo-Band | Referenzen sofort sichtbar |
| Angebot | vier Karten 2 × 2 | CMS-Liste | vier grosse Karten, stapeln sich | Idee 1: ein System statt Liste |
| Diagnostik & Tools | Link im Vorteil | eigene Section | Karte «SalesStep» im Vorteil | ein Abschnitt weniger |
| Warum ROWAPA | Vorteil, fünf Sätze | Vorteil | drei Sätze + «Wo anfangen?» (Performance-Analyse) | kürzer, neuer Einstieg |
| Wie wir arbeiten | eine Zeile mit Link | – | weggelassen | wie Performance-Analyse (offen) |
| Beweis | Case-Stories mit Platzhalter-Zahlen | – | drei freigegebene Kundenstimmen | keine erfundenen Zahlen |
| Fragen klären | – | – | «Gut zu wissen», sechs Fragen | Einwände vor dem Gespräch klären |
| Abschluss | Box «Wo steht Ihr Vertrieb heute?», «Erstgespräch vereinbaren» + «Weitere Themenlinien» | Abschluss-CTA | Kontakt der Startseite | Kontakt überall gleich; «Weitere Themenlinien» als Textlink behalten? (offen) |
