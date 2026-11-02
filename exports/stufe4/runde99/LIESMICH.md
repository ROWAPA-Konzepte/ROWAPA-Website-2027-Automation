# Runde 99 · Vertriebsperformance: Spannungsfelder, Kunden-Rad, Ihr Nutzen, Leseliste, Header (Stufe 4, 02.11.2026)

**Entwurf mit Umschaltleiste:** https://rowapa-website-2027-automation.webflow.io/themen/vertriebsperformance?entwurf
**Heute (ohne Entwurf):** https://rowapa-website-2027-automation.webflow.io/themen/vertriebsperformance

Die Leiste unten links (Version 2.0) zeigt acht Punkte. Standard sind alle Entwürfe an. «Link zu dieser Auswahl» kopiert die Kombination. Ohne `?entwurf` bleibt die Seite wie heute (geprüft).

## Auftrag ROWAPA (Entscheid 412)

| Punkt | Auftrag | Umgesetzt (Entwurf) |
|---|---|---|
| 1 | Praxisbeispiel: Wechsel von produktorientiertem zu kundenorientiertem Verkauf; mehr Wertschöpfung im Termin und besseres Kundenerlebnis, daraus Weiterempfehlungen und hohe Kundenbindung; gehört zu Verkaufsprozess & Strategien; die vier Phasen (Verstehen, Beraten, Umsetzen, Begleiten, Kunde in der Mitte) als Vorlage für Punktgrafik und Animation | ✓ Reiter «Produktorientiert» / «Kundenorientiert», Punkte verwandeln sich vom Produkt-Ablauf ins Kunden-Rad, Wirkungskette in vier Schritten |
| 2 | Hebel-Karten in der neuen Darstellung, aber mit Titel (z. B. «Verkaufsprozess & Strategien»), Zeichnungen behalten, Sprungmarken braucht es nicht | ✓ Kennzeile «Hebel 3 · Verkaufsprozess & Strategien» (aus dem CMS), Sprungmarken entfernt |
| 3 | «Ihr Vorteil» → «Ihr Nutzen»; Kugel mit den drei Themen viel prominenter; «Wo anfangen?» und Werkzeug als Schlusszeile | ✓ grosse drehende Kugel, drei Wissensbereiche daneben, Schlusszeile mit beiden Karten |
| 4 | Insights: andere Darstellung, die sich wie ein neuer Benchmark anfühlt | ✓ redaktionelle Leseliste (siehe unten) |
| 5 | Ausgangslage unter dem Header nach der Idee «Ihre Kunden kommen informiert. Gehen sie auch überzeugt?» mit vier Spannungsfeldern, Punktgrafik und Beitrag von ROWAPA | ✓ neuer Abschnitt mit vier Reitern, je eigene Punktverwandlung auf Knopfdruck, Link zum passenden Hebel |
| 6 | Header: Verteilung von Text, Buttons und Zeichnung auf jeder Bildschirmgrösse prüfen | ✓ gemessen in acht Grössen, Entwurf «füllt jede Bildschirmgrösse» |

## Header (Punkt 6)

**Befund heute** (gemessen): Auf grossen Bildschirmen steht der Inhalt oben, die Zeichnung bleibt klein und darunter liegt eine leere Fläche.
- 2560 × 1440: Text endet bei 40 % der Höhe, Zeichnung 512 px breit (20 %), rund 500 px leer bis zum Punktemeer.
- Ursache: Der Inhalt ist nicht in der freien Fläche zentriert. Lead und Zeichnung wachsen ab etwa 1600 px nicht mehr mit.

**Entwurf:**
- Der Inhalt steht in der Mitte der Fläche über dem Punktemeer.
- Die Zeichnung wächst mit Fensterbreite und -höhe (bis 56 rem).
- Text- und Bildspalte im Verhältnis 7 : 5.
- Der Lead wächst leicht mit (18–24 px).

Zusatzklassen `is-gefuellt` an `header-unterseite_inner`, `_grid`, `_figur`, `_bild`, `_lead`. Gemessen (Zeichnung Breite, Oberkante Titel):

| Fenster | heute Zeichnung (Formel) | Entwurf Zeichnung (gemessen) | Entwurf: Titel beginnt bei |
|---|---|---|---|
| 2560 × 1440 | 512 px | 680 px | 33 % der Höhe |
| 1920 × 1080 | 512 px | 670 px | 32 % |
| 1440 × 900 | 403 px | 518 px | 32 % |
| 1280 × 720 | 358 px | 446 px | 31 % |
| 390 × 844 | 176 px | 172 px | unverändert gestapelt |

Gilt nach Übernahme für alle Unterseiten mit diesem Header (auch Performance-Analyse).

## Spannungsfelder (Punkt 5)

- Native Webflow-Reiter: links vier Aussagen, rechts Punktbild, Text, «Mit ROWAPA» und der Link zum passenden Hebel.
- Die erste Situation ist offen, niemand muss klicken.
- «Veränderung sichtbar machen» löst die Punktverwandlung aus (0,75 s, endet dann). Ein zweiter Klick zeigt wieder den Ausgangszustand.

| Aussage | Punktbild | Hebel |
|---|---|---|
| Verglichen ist noch nicht verstanden. | viele Informationen → eine Richtung | Sales-Story |
| Ein gutes Gespräch ist noch kein nächster Schritt. | einzelne Momente → ein gemeinsamer Weg | Verkaufstrainings |
| Ein neues Tool verändert noch keine Beratung. | viele Kanäle → eine Beratung | Digitales & hybrides Verkaufen |
| Ein starkes Training wirkt erst im Alltag. | einzelne Impulse → gelebter Alltag | Verkaufsprozess & Strategien |

**Nur im Entwurf gelöst, für den festen Bau ein Handgriff:** Die Schnittstelle kann keinen vierten Reiter anlegen. Ich habe einen aus einem zweiten Reiter-Element verschoben. Er heisst darum wie der dritte («Tab 3»), und die Leiste benennt ihn beim Laden um. Beim festen Bau im Designer: Reiter-Element wählen › Einstellungen › «Add Tab». Die Plum-Markierung des aktiven Reiters setzt im festen Bau der Zustand «Current» im Designer (wie bei den Beispielauswertungen).

## Praxisbeispiel (Punkt 1)

- Reiter «Produktorientiert»: Punkte ordnen sich zu einem linearen Ablauf, der auf den Kasten «Produkt» zuläuft.
- Reiter «Kundenorientiert»: Dieselben Punkte wandern ins Kunden-Rad, mit vier Bögen und dem Plum-Ring «Kunde» in der Mitte. Die Beschriftungen Verstehen, Beraten, Umsetzen und Begleiten stehen wie in der ROWAPA-Vorlage (oben rechts im Uhrzeigersinn).
- Darunter immer sichtbar: «Die Wirkung» mit 01 Mehr Wertschöpfung im Termin · 02 Ein besseres Kundenerlebnis · 03 Weiterempfehlungen · 04 Hohe Kundenbindung.
- Hinweis «Schematische Darstellung, vereinfacht.» und Link zum Hebel Verkaufsprozess & Strategien.

## Hebel-Karten (Punkt 2)

- Kennzeile aus zwei CMS-Feldern: «Hebel 3 · Verkaufsprozess & Strategien» (Karten-Kennung · Kartentitel).
- Darunter wie in Runde 98 Nutzentitel, drei Zeilen und die eigene Punktfigur.
- Sprungmarken entfernt.

## Ihr Nutzen (Punkt 3)

- Kicker «Ihr Nutzen». Titel und Text kommen weiter aus dem CMS (Vorteil Titel, Vorteil Text).
- Neue Bühne: links die drehende Kugel «ROWAPA Wissensplattform» (bis 34 rem), rechts «Drei Wissensbereiche».
- Darunter die Schlusszeile mit «Wo anfangen? Performance-Analyse» und dem Werkzeug (SalesStep). Es sind dieselben Elemente wie heute (CMS-Liste), im Entwurf nur verschoben.

## Insights als Leseliste (Punkt 4)

Redaktionelle Liste statt Kartenreihe:
- Pro Beitrag eine ruhige Zeile mit Kategorie (Plum), grossem Titel, Auszug, «Beitrag lesen ↗» und dem Titelbild rechts.
- Feine Linien dazwischen, viel Weissraum. So arbeiten Wirtschaftsmagazine und Beratungshäuser mit hohem Anspruch.
- Die Liste hängt am selben CMS-Feld «Insights» der Themenlinie, neueste zuerst, höchstens sechs.
- Auf dem Handy steht das Bild über dem Text.

## Grafik-Skript 1.33.0 / 1.33.1 (Repository `rowapa-website-grafik`)

Neues Modul `punktbild`:
- Formen: `ordnen`, `verbinden`, `buendeln`, `kreislauf`, `produkt`, `kunde`.
- Die Verwandlung dauert 0,75 s und hört dann auf. Ausgelöst wird sie per Knopf (`data-punktbild-ausloeser`) oder beim Öffnen des Reiters (`data-ausloesen="sichtbar"`).
- Farben aus den CI-Variablen. Bei «Bewegung reduzieren» springt das Bild ohne Bewegung.
- 1.33.1: Im Kasten «Produkt» liegen keine Punkte mehr unter der Beschriftung.
- Site-weit registriert, gleiche Anwendung wie bisher.

## Texttabelle

| Ort | Original | Vorschlag (Entwurf) | Begründung | Offene Fragen |
|---|---|---|---|---|
| Spannungsfelder, Kopf | – | Kicker «Vertriebsrealität · Banken & Versicherungen», H2 «Ihre Kunden kommen informiert. Gehen sie auch überzeugt?», Text «Vergleiche liefern Informationen. Ihre Beratung muss daraus Orientierung machen: Was ist relevant? Was passt? Und wie geht es weiter?» | Vorschlag ROWAPA übernommen; zweite Titelzeile einfarbig (Entscheid 383) | Plum-Zeile wie in der Vorlage gewünscht? |
| Feld 1 | – | «Den Unterschied im Gespräch machen.» · «Wenn Preise, Leistungen und digitale Antworten bereits vorliegen, braucht es mehr als Produktwissen: eine Beratung, die Bedürfnisse erkennt und den persönlichen Nutzen verständlich macht.» · Mit ROWAPA: «Ihr Team entwickelt Sales-Stories, die an der Situation Ihrer Kundschaft ansetzen, und trainiert, Nutzen klar zu vermitteln und Einwände sicher aufzugreifen.» | aus der Vorlage, inklusiv formuliert | – |
| Feld 2 | – | «Aus guten Gesprächen verbindliche Schritte machen.» · «Viele Gespräche verlaufen angenehm und enden offen. Wirksam wird eine Beratung erst, wenn beide Seiten den nächsten Schritt gemeinsam vereinbaren.» · Mit ROWAPA: «Wir trainieren an Ihren Produkten und echten Gesprächssituationen, wie Ihr Team Bedürfnisse klärt, Entscheidungen vorbereitet und den nächsten Schritt verbindlich vereinbart.» | konkrete Fähigkeiten statt Schlagworte | bitte bestätigen |
| Feld 3 | – | «Über alle Kanäle Nähe und Orientierung schaffen.» · «Kundinnen und Kunden wechseln zwischen Website, Video-Termin, Telefon und Gespräch vor Ort. Ein neues Tool allein verbindet diese Wege noch nicht zu einer Beratung.» · Mit ROWAPA: «Wir professionalisieren Online-Beratung und hybride Kundenkontakte, damit Ihr Team auch am Bildschirm persönlich wirkt und klar zum nächsten Schritt führt.» | ohne Studienzahlen, keine Behauptung | bitte bestätigen |
| Feld 4 | – | «Aus Impulsen gemeinsame Standards machen.» · «Ein guter Trainingstag setzt Impulse. Ob sie wirken, zeigt sich im Alltag: wenn das Team die neuen Abläufe wiederholt anwendet und Führungskräfte sie begleiten.» · Mit ROWAPA: «Wir entwickeln mit Ihnen einheitliche Beratungsstandards und verankern sie im Alltag, mit klaren Abläufen und Begleitung im Kundenkontakt.» | aus Hebel 3 | bitte bestätigen |
| Bildzeilen | – | «Viele Informationen · eine Richtung» · «Einzelne Momente · ein gemeinsamer Weg» · «Viele Kanäle · eine Beratung» · «Einzelne Impulse · gelebter Alltag» | beschreibt die Verwandlung | – |
| Schlusszeile | – | «Wo kann Ihr Vertrieb mehr bewegen?» · «Die vier Hebel entdecken ↗» | aus der Vorlage | – |
| Praxisbeispiel, Kopf | «So wird aus einer Produktbeschreibung ein relevantes Kundengespräch.» | «Vom Produkt zum Kunden: So wächst die Wertschöpfung im Termin.» · «Ein Beispiel aus dem Hebel Verkaufsprozess & Strategien. Wählen Sie, wie das Gespräch geführt wird.» | Vorgabe ROWAPA | – |
| Produktorientiert | – | «Das Gespräch folgt dem Produkt.» · «Die Beratung stellt Leistungen, Prämie und Konditionen vor und fragt am Ende nach dem Abschluss. Die Kundin oder der Kunde vergleicht und vertagt die Entscheidung.» · Bausteine: Produkt vorstellen · Leistungen erklären · Preis nennen · Abschluss erfragen | Gegenbild | – |
| Kundenorientiert | – | «Das Gespräch beginnt beim Kunden.» · «Die Kundin oder der Kunde steht in der Mitte. Vier Phasen führen durch das Gespräch, das Produkt wird zur Antwort auf eine erkannte Situation.» · Verstehen · Situation, Ziele und Sorgen klären / Beraten · Lösung am persönlichen Nutzen zeigen / Umsetzen · nächsten Schritt gemeinsam vereinbaren / Begleiten · nach dem Abschluss dranbleiben | Phasen aus der ROWAPA-Vorlage; Kurzbeschreibungen sind Vorschläge | Beschreibungen [ROWAPA bestätigen] |
| Wirkung | – | Mehr Wertschöpfung im Termin · Ein besseres Kundenerlebnis · Weiterempfehlungen · Hohe Kundenbindung | Vorgabe ROWAPA | – |
| Ihr Nutzen | Kicker «Ihr Vorteil» | «Ihr Nutzen» | Vorgabe ROWAPA | – |
| Karten | Kicker «Hebel 1» | «Hebel 1 · Individuell zugeschnittene Verkaufstrainings» (usw.) | Titel bleibt sichtbar | – |

**Redaktions-Check:** Was: Themenlinie Vertriebsperformance. Für wen: Vertriebsverantwortliche in Banken und Versicherungen (Sie). Nutzen: Die Besucher erkennen ihre Situation und sehen, welcher Hebel hilft. Nächster Schritt: «Die vier Hebel entdecken», Hebel-Link, Erstgespräch. ✓

## Geprüft auf der Testadresse

- **Ohne `?entwurf`:** keine Leiste, kein Entwurfsteil sichtbar, keine Zusatzklasse aktiv, Grafik 1.33.1.
- **Mit `?entwurf`** (gehostete Skripte, SRI geprüft):
  - Spannungsfelder: alle vier Reiter wechseln; Punktverwandlung auf Knopfdruck in Reiter 1 und 4 geprüft.
  - Praxisbeispiel: Reiter wechseln; das Kunden-Rad baut sich beim Öffnen auf.
  - Karten: Kennzeilen aus dem CMS stimmen.
  - Ihr Nutzen: Schlusszeile verschoben.
  - Leseliste: drei Beiträge mit Bildern.
  - Keine seitliche Verschiebung bei 1440 und 390 px, keine Fehler in der Konsole.
- **Header** in acht Grössen gemessen (oben).
- **Erster Bau, korrigiert:**
  - Reiterzeilen zeigten den Platzhalter von Webflow (Textblöcke aus dem Baukasten lassen sich nicht beschriften), ersetzt.
  - Der Inhalt rutschte unter das Menü (Clearfix der Webflow-Reiter im Raster), jetzt feste Rasterplätze.
  - Das erneute Einlesen der Reiter blockierte das Praxisbeispiel; jetzt werden die Namen vor dem Start von Webflow gesetzt.

Bildschirmfotos liegen nicht im Repository (Mauszeiger und Blogbilder mit Personen). Bitte direkt auf der Testadresse ansehen.

## Fragen an ROWAPA

1. **Welche Punkte übernehmen?** Am einfachsten den Link aus der Leiste schicken.
2. **Spannungsfelder:** Texte der Felder 2–4 und die Zuordnung zu den Hebeln so passend? Soll sich das Punktbild beim Öffnen von selbst verwandeln statt erst auf Knopfdruck?
3. **Titel einfarbig?** Die Vorlage zeigte «Gehen sie auch überzeugt?» in Plum. Nach Entscheid 383 sind zweite Titelzeilen einfarbig. Gilt das hier auch?
4. **Kunden-Rad:** Kurzbeschreibungen der vier Phasen bestätigen. Soll das Rad auch auf der Seite «So arbeiten wir» erscheinen?
5. **Insights:** Leseliste als neuer Standard für alle Themenlinien? Für die Startseite bleibt das Magazin (Entscheid 405).
6. **Header:** Übernahme gilt für alle Unterseiten mit diesem Header (auch Performance-Analyse). Einverstanden?
7. **Spannungsfelder je Themenlinie:** Für die anderen vier Themenlinien braucht es eigene Aussagen. Vorschlag: als Felder im CMS der Hebel (je Hebel ein Spannungsfeld), sobald ROWAPA den Aufbau bestätigt.

## Prüfsession 34 (Entscheid 378)

| Bereich | Punkt | Ergebnis |
|---|---|---|
| A CI | Farben nur Variablen, 8-px-Raster | ✓ alle neuen Klassen mit Variablen; Abstände in 0,25/0,5/1/1,5/2/3 rem |
| A CI | Zweite Titelzeile einfarbig (Entscheid 383) | ✗ → korrigiert: Die Vorlage zeigte die zweite Zeile in Plum; gebaut einfarbig, Frage 3 |
| A CI | Punktgrafik minimalistisch, Plum nur als Akzent | ✓ Plum nur am Ziel (Pfeilspitze, nächster Schritt, Mitte «Kunde») |
| B Texte | Sie-Form, «Unternehmen», inklusive Sprache | ✓ «Kundin oder Kunde», «Kundschaft», «Kundinnen und Kunden»; Titel «Ihre Kunden kommen informiert» als Vorgabe von ROWAPA übernommen ? (Frage 3 sinngemäss) |
| B Texte | Keine erfundenen Fakten | ✓ keine Studienzahlen auf der Seite; Rad als «Schematische Darstellung» gekennzeichnet; Phasen-Beschreibungen [ROWAPA bestätigen] |
| C Bauweise | nativ, pflegbar | ✓ Webflow-Reiter, CMS-Liste, CMS-Bindungen, Klassen; Grafik nur für die Punktverwandlung |
| C Bauweise | Skript-Klassen in der Ablage | ✓ `is-gefuellt` (fünf Header-Klassen) und `thema_start is-zeile` eingetragen |
| C Bauweise | Handgriffe, die die Schnittstelle nicht kann | ? vierter Reiter («Add Tab») und Zustand «Current» beim festen Bau im Designer (offene Punkte) |
| C Bauweise | Handy geprüft | ✓ alle Abschnitte bei 390 px, keine seitliche Verschiebung |
| D Abmachungen | Entwurf umschaltbar, echte Seite unverändert | ✓ |
| D Abmachungen | Mauszeiger bleibt | ✓ |
| E Ablauf | Löschen | ✓ nur eigene, ersetzte Entwurfsteile (alte Ausgangslage, altes Praxisbeispiel, Wissensbereiche-Liste, Sprungmarken im Skript) nach Entscheid 406 |
| E Ablauf | Veröffentlichen | ✓ nur Testadresse |
| E Ablauf | keine Zugangsdaten, keine Modellbezeichnungen | ✓ |
