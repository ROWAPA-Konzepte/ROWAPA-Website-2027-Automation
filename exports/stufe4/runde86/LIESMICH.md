# Runde 86 · Neu denken nach der Referenzanalyse: Vorschlag, wie es schnell sichtbar wird (Stufe 4, 01.11.2026)

## Auftrag ROWAPA (Entscheid 400)

Rückmeldung von aussen mit Referenzanalyse (Evolve, Wealthsimple, Tresmares), Wortlaut in `feedback_referenzen.md`. ROWAPA bittet, komplett neu zu denken und Designvorschläge zu machen. CI und vieles Bisherige bleiben. Die Darstellung soll schnell gehen, nicht pixelgenau, aber so, dass man die Idee versteht. Zuerst eine Rückmeldung, wie das am schnellsten sichtbar wird.

## Kern des Feedbacks

Weniger lange Scrollinszenierungen, mehr steuerbare Beispiele, die den Nutzen zeigen. Verständlich wie Wealthsimple, konsequente Formen wie Tresmares, ruhig wie Evolve. Die Punktewelt bleibt das Erkennungsmerkmal. Drei Markenmomente: (A) Einstieg, in dem aus Punkten eine Aussage entsteht, (B) direkt wählbare fünf Themen mit sich verwandelnder Punktform, (C) interaktive Auswertung «Vom Ergebnis zur Entscheidung». Alles andere reagiert schnell und ruhig.

## Vorschlag: klickbare Skizze statt Webflow-Bau

Eine einzige HTML-Seite als Prototyp, ausserhalb von Webflow, mit privatem Link (auch am Handy). Darin:

- CI wie heute: Manganese, Plum, Sea Cliff, Snowbank, Schrift TASA, unsere Punktfiguren und die Texte der Website.
- Echte Interaktion, aber nicht pixelgenau: Klick auf ein Thema verwandelt die Punktform, Wahl einer Frage baut Diagramm, Markierung, Einordnung und Massnahme auf.
- Je Szene ein Link «So ist es heute» auf die Testadresse.

Warum nicht gleich in Webflow: dauert ein Mehrfaches und berührt Klassen und Komponenten der echten Seiten. Nach der Wahl baue ich das Gewählte nativ als umschaltbaren Entwurf (Entscheid 393). Warum nicht als Bilder: Das Feedback dreht sich um Interaktion und Bewegung; das zeigt ein Bild nicht.

## Umfang der Skizze

| Nr. | Szene | Idee aus dem Feedback | Material |
|---|---|---|---|
| 1 | Startseite: Einstieg | Punkte bauen sich einmal zu einer Form, Titel sofort lesbar; Buttons «Beispielauswertung ansehen» und «Gespräch vereinbaren» (heute nur «Lösungen entdecken») | vorhanden |
| 2 | Themen-Auswahl statt Scroll-Bühne | fünf Themen links immer sichtbar; rechts verwandelt sich die Punktform (rund 800 ms), Nutzensatz und Link wechseln mit | vorhanden (Themen, Figuren, Kernbotschaften) |
| 3 | Belege früher | Kundenstimmen von Hand wählbar (heute automatischer Wechsel), Logos | vorhanden |
| 4 | Auswertung ausprobieren | kleine Vorschau der interaktiven Auswertung, führt zur Performance-Analyse | vorhanden |
| 5 | Vorgehen | vier Phasen, je Phase das konkrete Ergebnis für den Kunden | Phasentexte vorhanden, Ergebnisse als Vorschlag [ROWAPA bestätigen] |
| 6 | ROWAPA Digital | Werkzeug wählen, grosse Vorschau mit hervorgehobenem Bereich und einem Nutzensatz | **Bildschirmfotos fehlen**: bis dahin klar bezeichnete Platzhalter |
| 7 | Menschen | Teamkarte öffnet eine Detailansicht über der Übersicht | **Angaben fehlen** (Fachgebiet, Branchenbezug): Platzhalter |
| 8 | Header-Zustände | dunkel oben, kompakt nach dem Scrollen, Megamenü mit Punktmotiv je Eintrag, aktuelle Seite markiert; Schalter «Bewegung pausieren» | vorhanden |
| 9 | Performance-Analyse: interaktive Auswertung | Frage wählen → Diagramm baut sich auf → grösste Abweichung hervorgehoben → Einordnung → mögliche nächste Massnahme | Daten und Einordnung vorhanden; «nächste Massnahme» neu [ROWAPA bestätigen] |

**Faktencheck:** Im Feedback-Beispiel liegt die grösste Abweichung bei «Klarheit von Erwartungen». In unseren Musterdaten zu «Kommt Führung an?» ist es «Coaching im Alltag» (+2,2 zwischen Eigen- und Fremdsicht). Die Skizze verwendet unsere Daten und unsere bestehende Einordnung.

## Was schon da ist

- Performance-Analyse: Fragen-Reiter, animierte Diagramme, markierte grösste Abweichung, Aussage und Einordnung je Reiter. Das ist ein grosser Teil von Effekt C; neu wären die schrittweise Abfolge und die «nächste Massnahme».
- Grafik-Skript: baut Figuren aus Punkten auf (Modul `punktfigur`) und verwandelt Formen (Themen-Bühne). Das ist die Grundlage für A und B.
- Megamenü mit Vorschau, Seitenwechsel mit Vorladen.

## Widersprüche zu früheren Entscheiden (Prüfliste: Rückmeldungen von aussen nicht stillschweigend übernehmen)

| Feedback | bisher entschieden | Vorschlag für die Skizze |
|---|---|---|
| kein auffälliger Spezialcursor | Mauszeiger Punkt mit Ring, läuft 1:1 mit (369, 383) | ohne, zum Vergleich umschaltbar |
| keine Wort-für-Wort-Animationen bei Erklärungstexten | Titel wortweise auf der Performance-Analyse (391) | betrifft nur Titel, nicht Erklärungstexte; in der Skizze ohne, zum Vergleich |
| Seitenwechsel 250–450 ms, Überblendung oder kleine Verschiebung | 0,5 s, neue Seite fährt verkleinert von unten ein (391, 398) | kurze Überblendung als Variante |
| Menü: Hintergrund dezent abdunkeln | Megamenü ohne Abdunkeln (390) | dezent, umschaltbar |
| Themen kompakt statt festgehaltener Scroll-Szene | Themenlinien-Bühne (Runden 19–24) | Auswahl; die Punktverwandlung bleibt als Markenmoment |
| Kundenstimmen von Hand | Slider mit automatischem Wechsel | von Hand mit Pfeilen |
| Header nach dem Scrollen kompakt mit klarem Hintergrund | Navigation blendet beim Runterscrollen aus, beim Hochscrollen ein (390) | kompakt und sichtbar als Variante |
| Abschnittsnavigation (bei Wealthsimple beobachtet) | keine Kapitel-Leiste (390) | nicht in der Skizze; das Feedback empfiehlt sie nicht ausdrücklich |

## Eigene Ideen

1. **Einstieg nach Rolle:** drei kleine Schalter unter dem Titel («Für Generalagenturen», «Für Vertriebsleitungen», «Für Banken») wählen das passende Thema und die passende Beispielauswertung vor. Abgeleitet aus Abschnitt 7 des Feedbacks.
2. **Punktewelt-Familie:** ein Blatt mit allen Motiven (Themen, Lupe, Treppe, Kugel, Werkzeuge) in einheitlicher Punktgrösse und Dichte, als Grundlage für Menü und Seiten.
3. **Verbindungslinie als Leitmotiv:** Die laufenden Punktlinien aus «Fünf Perspektiven» verbinden in der interaktiven Auswertung Diagramm, Einordnung und Massnahme.

## Ablauf

1. Runde 86: Skizze bauen, Link an ROWAPA.
2. ROWAPA wählt, was übernommen wird.
3. Nativ in Webflow als umschaltbarer Entwurf, Reihenfolge wie im Feedback: Startseite straffen, Auswertung (geht schnell, vieles ist da), Digital (braucht Bildschirmfotos), Header und Übergänge, Feinschliff (Team braucht Angaben, Insights die Blog-Inhalte aus Stufe 3c).

Weiterhin offen: eigene 404-Seite (Hilfsseite im Designer öffnen, Runde 85).

## Prüfsession 22 (Entscheid 378)

| Bereich | Punkt | Ergebnis |
|---|---|---|
| A CI | Farben, Schrift, Punktewelt | ✓ bleiben; Skizze nutzt nur die CI-Farben und TASA |
| B Texte | keine erfundenen Fakten | ✓ Musterdaten geprüft (Abweichung «Coaching im Alltag»); neue Texte als Vorschlag [ROWAPA bestätigen]; Platzhalter klar bezeichnet |
| C Bauweise | nativ zuerst | ✓ Skizze ist kein Produkt; Übernahme danach nativ als umschaltbarer Entwurf |
| D Abmachungen | frühere Entscheide | ? acht Widersprüche gelistet, an ROWAPA |
| E Ablauf | Veröffentlichen, Löschen | ✓ nichts veröffentlicht, nichts gelöscht; Phasenwechsel erst nach Freigabe |

## Fragen an ROWAPA

1. Skizze als klickbare HTML-Seite mit privatem Link, nicht in Webflow: einverstanden?
2. Umfang: alle neun Szenen oder zuerst nur Einstieg, Themen-Auswahl und interaktive Auswertung?
3. Widersprüche: in der Skizze dem Feedback folgen und die bisherige Fassung als Umschalter daneben zeigen?
4. Gibt es Bildschirmfotos der Werkzeuge (Anker, Kompass, Lotse, Segel, Logbuch) und Angaben zum Team? Sonst Platzhalter.
5. «Mögliche nächste Massnahme» je Auswertung: soll ich Texte vorschlagen?
