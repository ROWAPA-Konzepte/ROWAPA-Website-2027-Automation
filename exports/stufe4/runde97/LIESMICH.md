# Runde 97 · Themenlinie Vertriebsperformance ergänzt (Stufe 4, 02.11.2026)

**Ansehen (Testadresse):** https://rowapa-website-2027-automation.webflow.io/themen/vertriebsperformance

## Auftrag ROWAPA (Entscheid 410)

| Punkt | Entscheid | Umgesetzt |
|---|---|---|
| 1 Hebel-Karten | Effekt aus dem Video: die überdeckte Karte wird leicht kleiner | ✓ Karte wird auf 94 % kleiner und leicht dunkler, solange die nächste sie überdeckt (Webflow-Interaktion) |
| 2 So arbeiten wir | gleiche Darstellung wie Performance-Analyse (Punkte-Treppe), ohne Zeitstrahl und zeitlichen Ablauf | ✓ Komponente «Section Vorgehen» mit Schaltern; Themenlinie: Zeitstrahl aus, Ablauf aus, Link an |
| 3 Fotos über die Desktop-App | Frage | beantwortet (siehe unten) |
| 4 Kugel | nur die Kugel, leicht drehend, nichts kreist; Text «Viele Hebel greifen darauf zurück» | ✓ Kugel «ROWAPA Wissensplattform» in «Ihr Vorteil», dreht langsam; Text angepasst |
| 5 Insights | feine Variante wie erster Entwurf: Reihe mit drei Vorschaubildern; Zuordnung Sales/Leadership | ✓ Abschnitt «Passend zum Thema» mit drei Beiträgen (Handy: zum Wischen); Etikett aus der Kategorie (Sales) |
| Fotos | Alles, was ROWAPA hochlädt, darf veröffentlicht werden (Zusage liegt vor) | ✓ als Entscheid festgehalten; offener Punkt 125 (Einverständnis) erledigt |

Dazu, wie besprochen: **Foto mit Text** (wie auf der Performance-Analyse) mit dem Foto «Beratungsgespräch» und dem Satz zu «bald 30 Jahre und mehr im Finanzvertrieb».

## Aufbau der Seite (neu)

| # | Abschnitt | Fläche | Neu in Runde 97 |
|---|---|---|---|
| 1 | Header | Manganese | – |
| 2 | Die Hebel | Snowbank | überdeckte Karte tritt zurück |
| 3 | Ihr Vorteil | Weiss | Kugel «ROWAPA Wissensplattform» links unter dem Titel, Text «Viele unserer Hebel …» |
| 4 | **Foto mit Text** | Snowbank | neu: Foto, Titel, Text aus dem CMS |
| 5 | Aus der Praxis + Logo-Leiste | Snowbank | – |
| 6 | So arbeiten wir | Weiss | jetzt Komponente «Section Vorgehen» mit Punkte-Treppe wie Performance-Analyse |
| 7 | Gut zu wissen | Snowbank | – |
| 8 | **Passend zum Thema** (Insights) | Weiss | neu: drei Beiträge aus dem Feld «Insights» |
| 9 | Kontakt | Sea Cliff | – |

Flächenfolge: Abschnitt 4 und 5 sind beide grau und laufen als ein Block (Foto, dann Kundenstimme); sonst abwechselnd.

## Bauweise

- **Karten treten zurück (Interaktion «Hebel-Karte tritt zurück»):** Auslöser ist die Liste der Hebel (`thema_hebel-liste`), nicht die einzelne Karte. Grund: Karten mit «sticky» verrutschen als Auslöser, sobald die Seite nachlädt (gemessen: alle Karten sprangen gleichzeitig zurück). Die Interaktion verkleinert jede Karte ausser der letzten nacheinander (`.hebel_item:not(:last-child)`, gestaffelt) und blendet in ihr die Fläche `hebel_schatten` auf 35 % ein. Die Staffelung passt sich der Zahl der Hebel an. Bei «Bewegung reduzieren» im Betriebssystem läuft nichts.
- **Komponente «Section Vorgehen»** (Gruppe Sections): aus der Performance-Analyse erstellt. Schalter «Zeitstrahl anzeigen», «Zeitlicher Ablauf anzeigen» (Titel, Aufwand, Hinweis), «Link anzeigen» (Link «Mehr zu unserem Vorgehen →») und Text «Satz». Performance-Analyse: alles an, Link aus (unverändert geprüft). Themenlinie: Zeitstrahl und Ablauf aus, Link an, Satz «In vier Schritten von Ihrer Ausgangslage zur messbaren Veränderung.». Die Kurzfassung aus Runde 96 (`vorgehen_kurz`) ist ersetzt und gelöscht.
- **Kugel:** gleiches Grafik-Modul wie die Wissensplattform auf der Startseite (`data-grafik="orbit"`), aber ohne Kacheln: es dreht sich nur die Kugel (`data-tempo="0.6"`). Klassen `thema_kugel-wrap`, `thema_kugel`, `orbit_kugel is-thema`, `thema_kugel-label`.
- **Foto mit Text:** Abschnitt `section_bildtext` wie auf der Performance-Analyse, Bild, Titel und Text an die neuen CMS-Felder gebunden.
- **Insights:** Liste an das neue Referenzfeld «Insights» der Themenlinie gebunden, neueste zuerst, höchstens 6; Karte = Komponente «Card Insight», Variante «Insights Reihe» (wie Startseite, Handy: Wischreihe). Bild, Titel, Auszug und Etikett (Kategorie) kommen aus dem Blog-Beitrag.

### CMS-Änderungen

| Collection | Änderung |
|---|---|
| Themenlinien | neue Felder «Foto» (Bild), «Foto-Titel», «Foto-Text», «Insights» (Mehrfach-Referenz Blog) |
| Eintrag Vertriebsperformance | Vorteil-Text (siehe Texttabelle), Foto «Beratungsgespräch mit ROWAPA am Tisch», Foto-Titel, Foto-Text, drei Insights |
| Blog | drei Sales-Beiträge veröffentlicht (Testadresse): «Wie setzen Generalagenturen Verkaufskurse …», «Wie Technologie den Vertrieb …», «Kundenberatung in der Finanzbranche als Sales-Story» |
| Kategorien | «Sales» und «Leadership» veröffentlicht, damit das Etikett erscheint (Beschreibung und Farbwelt fehlen noch) |

## Texttabelle

| Ort | Original | Vorschlag (umgesetzt) | Begründung | Offene Fragen |
|---|---|---|---|---|
| Ihr Vorteil, Text | «Sie entscheiden auf gesicherter Grundlage statt aus dem Bauch. Alle unsere Werkzeuge greifen auf die ROWAPA Wissensplattform zu, das Praxiswissen aus 20 Jahren Finanzvertrieb. So arbeiten Ihre Leute …» | «Sie entscheiden auf gesicherter Grundlage statt aus dem Bauch. **Viele unserer Hebel greifen auf die ROWAPA Wissensplattform zurück**, das Praxiswissen aus 20 Jahren Finanzvertrieb. So arbeiten Ihre Leute mit dem, was in Ihrer Branche wirklich verkauft, und die Wirkung trägt in den Alltag.» | Entscheid 410, Punkt 4 | – |
| Kugel, Beschriftung | – | «ROWAPA Wissensplattform» | benennt die Grafik | – |
| Foto mit Text, Titel | – | «Aus dem Vertrieb, für den Vertrieb.» | kurz, sagt, wer trainiert | bitte prüfen |
| Foto mit Text, Text | – | «Wir sind selbst schon bald 30 Jahre und mehr im Finanzvertrieb tätig. Darum trainieren wir an Ihren Produkten, Ihren Gesprächssituationen und mit Ihren Zahlen.» | Angabe Personen aus Entscheid 409 | bitte prüfen |
| So arbeiten wir, Satz | «In vier Schritten von Ihrer Ausgangslage zur messbaren Veränderung.» | unverändert (jetzt Text der Komponente) | – | – |
| Insights | – | Kicker «Insights», Titel «Passend zum Thema», Button «Alle Inhalte», Karten mit Etikett «Sales», Zeile «Blog», Link «Beitrag lesen» | wie Startseite | Datum statt «Blog»? (Frage 3) |

**Redaktions-Check:** Was: Themenlinie Vertriebsperformance. Für wen: Vertriebsverantwortliche (Sie). Nutzen: neu sichtbar, worauf die Hebel bauen (Wissensplattform) und wer trainiert (Foto). Nächster Schritt: Beiträge lesen, Erstgespräch. ✓

## Geprüft auf der Testadresse

- **Karten-Effekt** Desktop 1440 px und Handy 390 px, in Schritten von 100–200 px gescrollt: jede Karte wird erst kleiner, wenn die nächste sie überdeckt (Desktop ab 104 px, Handy ab 80 px), und bleibt danach bei 94 %; die letzte Karte bleibt gross. Keine Sprünge mehr.
- **Kugel** dreht sich (zwei Aufnahmen im Abstand von 2,5 s unterscheiden sich), nichts kreist.
- **So arbeiten wir:** Themenlinie ohne Zeitstrahl und Ablauf, mit Link; Performance-Analyse unverändert (Zeitstrahl und Ablauf sichtbar, kein Link).
- **Insights:** drei Karten mit Bild, Etikett «Sales», Titel; Handy: Wischreihe, keine seitliche Verschiebung der Seite (390 px).
- **Foto mit Text** auf Desktop und Handy.

Bilder: `screens/` (ohne Personenfotos; Foto- und Insights-Abschnitt nur auf der Testadresse ansehen).

## Antwort auf Frage 3 (Ordner über die Desktop-App freigeben)

Ja, das geht. In der Claude-Desktop-App unter **Settings › Claude Code › Remote Control** einen Ordner freigeben (Mac oder Linux; nicht der ganze Benutzerordner und kein versteckter Ordner). Danach kann Claude in dieser Sitzung um Zugriff bitten; die App fragt jedes Mal nach. Heute ist noch kein Ordner freigegeben. Einfacher für einzelne Fotos: weiterhin direkt im Chat hochladen.

## Fragen an ROWAPA

1. **Karten-Effekt:** Stärke passt (94 % und leicht dunkler)? Feiner oder deutlicher möglich.
2. **Foto-Titel und -Text** (Texttabelle) so freigeben?
3. **Datum auf den Insights-Karten:** Webflow zeigt das Datum über die Schnittstelle nur englisch («April 9, 2026»). Darum steht vorerst «Blog». Soll das Datum erscheinen? Dann stelle ich es im Designer auf «09.04.2026» um (ein Handgriff).
4. **Wohin führen die Karten?** Die Übersicht «Wissen» (`/wissen`) und die Vorlage für Blog-Beiträge sind noch nicht gebaut; der Button «Alle Inhalte» und die Karten führen deshalb vorerst ins Leere (wie auf der Startseite). Vorschlag: als Nächstes die Blog-Vorlage bauen, dann verlinkt jede Karte ihren Beitrag.
5. **Insights der übrigen Themenlinien:** Feld «Insights» und «Foto» bei den anderen vier Themenlinien befüllen (z. B. Leadership-Beiträge für «Führung»). Vorschlag kommt mit deren Textprüfung.

## Prüfsession 32 (Entscheid 378)

| Bereich | Punkt | Ergebnis |
|---|---|---|
| A CI | Farben, Schriften, 8-px-Raster | ✓ nur Variablen; neue Abstände 2 und 3 rem; Kugel in den Markenfarben (Grafik der Startseite) |
| A CI | Flächenfolge | ✓ abwechselnd; Foto und Kundenstimme bewusst ein grauer Block |
| B Texte | Sie-Form, «Unternehmen», keine erfundenen Fakten | ✓ «bald 30 Jahre und mehr» aus Entscheid 409; «Viele unserer Hebel» nach Vorgabe |
| B Texte | Texttabelle | ✓ oben |
| C Bauweise | nativ, pflegbar | ✓ Interaktion, Komponente mit Schaltern, CMS-Felder; Kugel über das bestehende Grafik-Modul |
| C Bauweise | Scroll-Interaktion an sticky-Elementen | ✗ → korrigiert: erster Bau löste an der Karte selbst aus (verrutschte); jetzt Auslöser an der Liste (neue Regel in der Prüfliste) |
| C Bauweise | Unvollständige CMS-Einträge als Entwurf | ? Kategorien «Sales» und «Leadership» veröffentlicht, obwohl Beschreibung und Farbwelt fehlen, weil sonst das Etikett leer bleibt (nur Testadresse). Ihre Kategorie-Seiten zeigen bis zum Bau eine leere Vorlage und sind nicht verlinkt. Frage im Punkt 146. |
| D Abmachungen | Entscheid 410 | ✓ alle fünf Punkte |
| D Abmachungen | Personenfotos nicht im Repository | ✓ Screenshots ohne Foto- und Insights-Abschnitt |
| E Ablauf | Löschen | ✓ nur die ersetzte Kurzfassung «So arbeiten wir» und ihre zwei Klassen (Entscheid 406) |
| E Ablauf | Veröffentlichen | ✓ nur Testadresse |
| E Ablauf | keine Zugangsdaten, keine Modellbezeichnungen | ✓ |
