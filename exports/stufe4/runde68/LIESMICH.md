# Runde 68 · Texte der Vorschau nach ROWAPA, Farbbeispiel, Kontakt, Logo-Leiste (Stufe 4, 31.10.2026)

Rückmeldung ROWAPA (Entscheid 382): Texte 1 bis 12 festgelegt, während der Runde neuer Header-Titel und -Untertitel. Zur Farbe der zweiten Titelzeile ein Beispiel gewünscht. Beim Kontakt sind Text und Darstellung auf allen Seiten gleich, die Button-Beschriftung je Seite. Frage: Logos nur auf der Startseite als Laufband unter dem Header, auf allen anderen Seiten eine ruhige Logo-Leiste nach den Kundenstimmen?

Testadresse: https://rowapa-website-2027-automation.webflow.io/performance-analyse-vorschau (veröffentlicht und geprüft). Bilder:
- `vorschau_header_1440.jpg`, `vorschau_header_handy.jpg`
- `vorschau_leistungsfelder.jpg`, `vorschau_reiter_massnahmen.jpg`, `vorschau_abschnitte.jpg`
- `farbe_zweite-zeile.jpg`

## 1. Umgesetzt in der Vorschau (Texttabelle)

| # | Stelle | vorher | jetzt (Text ROWAPA) | Bemerkung |
|---|---|---|---|---|
| 1 | Header, Titel | «Sie kennen Ihre Ergebnisse. Wir zeigen, wo Sie gezielt ansetzen können.» (eine Zeile) | «Entwicklung gezielt steuern.» / «Entscheidungen fundiert treffen.» (zweite Zeile beginnt neu) | Nachtrag ROWAPA während der Runde; zuerst war «Sie kennen Ihre Ergebnisse.» / «Wir zeigen, wo …» umgesetzt. Zweite Zeile mit Klasse `heading-wendung`; Umbruch ausgeglichen (Titel der Unterseiten `text-wrap: balance`, wirkt auch auf der Originalseite) |
| 1 | Header, Untertitel | «Für mehr Vertriebs- und Mitarbeiterperformance in Banken, Versicherungen und bei Brokern. Wir verbinden digitale Erhebung …» | «Ihre Performance-Analyse für mehr Vertriebs- und Mitarbeiterperformance.» | Nachtrag ROWAPA; die Zwischenfassung («Für mehr … Daraus erhalten Sie konkrete Empfehlungen …») ist ersetzt. Branchen nicht mehr genannt (siehe Prüfsession) |
| 2 | Ausgangslage, Titel | «Wo bleibt in Ihrem Unternehmen Potenzial ungenutzt?» | unverändert | – |
| 2 | Ausgangslage, Untertitel | «Was möchten Sie verbessern? Fragestellung und Umfang legen wir gemeinsam fest.» | «Ihre Zahlen zeigen die Ergebnisse. Unsere Analyse hilft Ihnen zu erkennen, welche Fähigkeiten und Verhaltensweisen Sie gezielt entwickeln können.» | – |
| 4 | Vertriebsperformance | Satz + 3 Stichworte | «Wissen, wo Sie ansetzen müssen.» + 4 Fragen | Fragen statt Stichworte (ändert Entscheid 377 für diese Karten) |
| 4 | Mitarbeiterperformance | Satz + 3 Stichworte | «Wissen, wen Sie wie weiterentwickeln sollten.» + 4 Fragen | wie oben |
| 5 | Führungsband | «Wie Führung funktioniert und wirkt» / «Führung prägt beide Felder. Darum messen wir sie mit:» | «Wie gut unterstützt Ihre Führung die Leistung Ihrer Teams?» / «Sie erkennen, wo Ihre Führungskräfte Unterstützung brauchen, um ihre Teams gezielt weiterzuentwickeln.» | Die drei Marken bleiben, jetzt ohne Satzbezug: «Eigenes Kompetenzprofil», «Urteil der Mitarbeitenden», «Begleitung in Führungsgesprächen» [ROWAPA: stehen lassen?] |
| 6 | Was Sie erreichen | ganzer Inhalt | Bezeichnung «Ihre Entscheidungsgrundlage», Titel «Klarheit, wo sich Entwicklung lohnt.», Satz und drei Kacheln wie geliefert | komplett ersetzt |
| 7 | Ergebnis | «So sieht ein Ergebnis aus» / «Fünf Auswertungen aus einem Musterbericht. Wählen Sie eine Ansicht.» | «So werden aus Ergebnissen konkrete Entscheidungen.» / «Entdecken Sie fünf Beispielauswertungen und was Sie daraus für Ihr Unternehmen ableiten können.» | – |
| 8 | Methode, Titel | «Fünf Methoden. Ein differenzierter Blick auf den Ist-Zustand.» | «Fünf Perspektiven. Ein differenzierter Blick auf den Ist-Zustand.» | Kasten «Ein differenzierter Ist-Zustand» unverändert |
| 9 | Reiter «Führung» | – | neu: «Abweichungen sind Hinweise für den Dialog, kein Urteil über eine Person.» | dezent mit Sea-Cliff-Linie |
| 10 | Reiter «Massnahmen» | Bild einer Tabelle | **Musterbericht als Webflow-Elemente** (Text im Designer änderbar): Hauptziel «Kundenpotenzial im Bestand nutzen · Team D, Kundenberatung» → 1 Befund → 2 Bedeutung → 3 Massnahmen, priorisiert. Titel «Musterbericht: vom Befund zur Massnahme», Legende ergänzt «Der vollständige Bericht enthält den nächsten Schritt je Person». Rechts: «Vom Befund zur priorisierten Massnahme.» und ein angepasster Satz | Musterdaten nach der Demo, abgestimmt auf die Reiter «Teams» und «Führung»; keine genauen Zahlen, damit nichts den Grafiken widerspricht [ROWAPA bestätigen] |
| 11 | Ablauf | «Ihr Aufwand für die Performance-Analyse» | «Ihr zeitlicher Ablauf für die Performance-Analyse» | Rest unverändert |
| 12 | Kontakt | – | unverändert | – |

**Reiter «Current» funktioniert jetzt:** aktiver Reiter mit Plum-Linie, Schrift Manganese Black, kein Grau mehr. Auf der Testadresse gemessen, Desktop und Handy.

**Kleinigkeiten mitgemacht:**
- Die Figuren der zwei Leistungsfelder haben jetzt gleich hohe Felder (7 rem, Handy 4,5 rem). Damit beginnen beide Fragenlisten auf gleicher Höhe (vorher 32 px Versatz).
- Der Musterbericht passt in die feste Grafikfläche (32 rem) und hat Luft nach unten.

## 2. Farbe der zweiten Titelzeile (Beispiel)

Siehe `farbe_zweite-zeile.jpg`. Sie betrifft nur Titel aus zwei Teilen, auf dieser Seite den Header und «Die Methode».

| Fläche | A heute | B nach performance.rowapa.ch |
|---|---|---|
| Header (dunkel) | beide Zeilen Weiss | zweite Zeile Sea Cliff. Great Serpent wäre auf dem dunklen Grund zu schwach (Kontrast unter 3:1) |
| Section-Titel (hell) | beide Teile Manganese Black | zweiter Teil Great Serpent (Kontrast 5,2:1, gut lesbar) |

**Meine Empfehlung: A.** Begründung:
- Der Zeilenumbruch allein schafft schon den Rhythmus aus Aussage und Wendung.
- Einfarbige Titel passen zu «Structure over decoration» und zur Startseite, deren Titel einfarbig sind.
- Zweifarbige Titel gibt es nur, wo ein Titel aus zwei Teilen besteht. Das wäre auf der Website uneinheitlich.

Wenn Sie B möchten, ist das eine Einstellung an einer Stelle: Die Klasse `heading-wendung` bekommt die Farbe, und alle zweiten Zeilen ändern sich. [ROWAPA entscheiden]

## 3. Kontakt (Klärung)

Festgehalten (Entscheid 382):
- Text und Darstellung des Kontakts sind auf allen Seiten gleich.
- Die Button-Beschriftung wird je Seite gewählt.
- Die Komponente hat dafür schon die Eigenschaft «Button Text» (hier «Strategiegespräch anfragen»).

**Offene Frage:** Heute hat die Performance-Analyse einen eigenen Satz unter dem Titel (Strategiegespräch, Musterauswertung). Er weicht vom Standardsatz ab (Entscheide 363/367: «Satz je Seite»). Soll auch der Satz überall gleich sein? Dann setze ich ihn auf den Standard zurück. [ROWAPA entscheiden]

## 4. Logos: Laufband nur auf der Startseite, sonst ruhige Leiste nach den Kundenstimmen (Einschätzung)

**Ich finde den Vorschlag gut**, mit einer Einschränkung.

**Dafür spricht:**
- **Ruhigerer Einstieg:** Der Header der Unterseiten wird ruhiger und konzentriert sich auf das Versprechen. Das Problem mit dem Logo-Band auf 13 Zoll entfällt (Entscheid 375), der Header bekommt mehr Luft.
- **Beweis an einer Stelle:** Kundenstimme und Logos stehen zusammen. Das ist die Stelle, an der man Bestätigung sucht, kurz vor Fragen und Kontakt.
- **Startseite bleibt besonders:** Das bewegte Band bleibt ein Merkmal der Startseite. Auf jeder Unterseite wiederholt, nutzt es sich ab.

**Einschränkung:** Wer über eine Kampagne direkt auf die Performance-Analyse kommt, sieht im ersten Bild dann keinen Vertrauensbeleg. Zusammen mit dem neuen Untertitel ohne Branchen steht im ersten Bild auch nicht mehr, für wen das Angebot ist. Zwei Möglichkeiten (eine genügt):
- (a) Im Untertitel «in der Finanzbranche» ergänzen.
- (b) Eine kleine Textzeile unter den Buttons, z. B. «Für Banken, Versicherungen und Broker in der ganzen Schweiz».

Fakten nur, soweit bestätigt. [ROWAPA entscheiden]

**So würde ich die Leiste bauen:**
- volle Breite, weisser Grund mit feinen Linien oben und unten
- Logos einfarbig grau (in Webflow über Filter «Graustufen», nicht neu zeichnen), gleich hoch, in einer Reihe gleichmässig verteilt, ohne Bewegung
- links eine kleine Bezeichnung «Unter anderem vertrauen uns diese Finanzunternehmen»
- Handy: zwei Reihen
- als Komponente «Logo-Leiste», Logos aus der CMS-Collection «Unternehmen & Partner» mit Schalter «auf Unterseiten zeigen». So pflegt ROWAPA die Logos an einer Stelle, ohne Code.

**Folgen:**
- Entscheid 367/375 (Logo-Band im ersten Bild der Unterseiten) wird ersetzt.
- Die Mindesthöhe des Headers richte ich neu aus.

Bau zuerst in der Vorschau, nach Ihrer Freigabe. [ROWAPA entscheiden]

## Bau (Webflow)

- **Neue Klassen:**
  - `heading-wendung`: zweite Titelzeile, Block, Umbruch ausgeglichen
  - `bericht`, `bericht_ziel`, `bericht_etikett`, `bericht_ziel-text`, `bericht_schritt`, `bericht_schritt-kopf`, `bericht_nummer`, `bericht_text`, `bericht_liste`: Musterbericht; alle Farben über Variablen, Abstände 8/16 px
  - `auswertung_hinweis`: Satz im Reiter «Führung»
- **Geändert:**
  - `feld_figur`: Höhe 7 rem, Handy 4,5 rem
  - `feld_figur-bild`: Höhe 100 %, eingepasst
- **Entfernt** (nur in der Vorschau, ersetzt durch neue Elemente):
  - zwei frühere H1 (alter Titel, Zwischenfassung)
  - alte Listen der Leistungsfelder und die Marken
  - alte Bezeichnung «Was Sie erreichen»
  - die zwei Bilder, der Titel und die Legende des Reiters «Massnahmen»

  Die Bilder bleiben in den Assets, die Originalseite `/performance-analyse` ist unverändert.

## Prüfung

- Testadresse Desktop 1440 × 900 und Handy 390 × 844, mit TASA-Schriften gemessen. Ergebnisse:
  - keine horizontale Verschiebung
  - Musterbericht 320 px hoch in 328 px Grafikfläche
  - Fragenlisten beide auf gleicher Höhe
  - aktiver Reiter Plum, kein Grau
  - keine Skriptfehler
- Header Desktop 1440: zwei Zeilen («Entwicklung gezielt steuern.» / «Entscheidungen fundiert treffen.»). Handy: vier Zeilen, ausgeglichen.

## Prüfsession 4 (Entscheid 378), vor dem Vorschlag zur Freigabe

| Bereich | Punkt | Ergebnis |
|---|---|---|
| B Texte | Texte genau wie geliefert | ✓ Wort für Wort übernommen (inkl. Nachtrag Header) und auf der Testadresse kontrolliert |
| B Texte | inklusive Sprache | ? «Was machen unsere besten Kundenberater anders?»: Vorschlag «… unsere besten Kundenberaterinnen und -berater …» oder «… unsere besten Beraterinnen und Berater …» [ROWAPA entscheiden] |
| B Texte | Prüffrage «für wen» | ? Header nennt das Angebot, aber keine Branche («Ihre Performance-Analyse für mehr Vertriebs- und Mitarbeiterperformance.»); mit dem Logo-Vorschlag fehlt im ersten Bild jeder Hinweis auf die Zielgruppe (siehe 4) |
| B Texte | Perspektive der Fragen | ✓ Die Fragen sind bewusst aus Sicht der Kunden formuliert («unsere besten …», «Wo setzen wir …»), so wie sie sich die Fragen selbst stellen. Sie-Form bleibt, keine Du-Form |
| B Texte | Grammatik nach Textänderung | ✗ → korrigiert: Die Marken im Führungsband hingen am alten Satz («… messen wir sie mit: einem eigenen Kompetenzprofil»). Jetzt stehen sie für sich |
| B Texte | keine erfundenen Fakten | ✓ Musterbericht klar als «Musterdaten», ohne neue Zahlen zu ROWAPA |
| A CI | Abstände 8-px-Raster | ✗ → korrigiert: `bericht_ziel` hatte 4 px Zeilenabstand, jetzt 8 px. Alle neuen Abstände 8/16 px |
| A CI | Farben | ✓ neue Klassen nur mit Variablen; Farbe der zweiten Zeile offen (Beispiel 2) |
| A CI | Nummern | ✓ nur im Musterbericht, wo die Reihenfolge zählt (Befund → Bedeutung → Massnahmen; Priorität) |
| C Bauweise | nativ, pflegbar | ✓ Musterbericht aus Webflow-Elementen statt Bild; kein eigener Code |
| C Bauweise | Effekte | ✓ Aufbau-Effekt des Reiters wirkt auch auf den Musterbericht; «Bewegung reduzieren» geprüft |
| D Abmachungen | Kontakt | ✓ Klärung festgehalten (Entscheid 382); ? Satz je Seite |
| E Ablauf | Löschen | ✓ nur ersetzte Elemente in der Vorschau entfernt, Originalseite unverändert |
| E Ablauf | Veröffentlichen | ✓ nur Testadresse |
