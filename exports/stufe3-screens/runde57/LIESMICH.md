# Runde 57 · Performance-Analyse nach Auswertung der Rückmeldung von ChatGPT (31.10.2026)

Ansicht: https://claude.ai/artifact/6HsZc1zhigNCnBFpgeMxCk (Desktop, Handy, Auswertungen, Kopfzeile). Gerendert auf der Testadresse mit den Bausteinen der Startseite, nichts in Webflow gebaut. Werkzeug: `tools/entwuerfe/runde57_performance-analyse.js` (Figur: `runde57_lupe_kopf.png`).

## Auswertung der Rückmeldung (ChatGPT) und Entscheid Claude

| Punkt ChatGPT | Einschätzung | Umsetzung |
|---|---|---|
| Richtung beibehalten, kein Umbau | einverstanden | Aufbau bleibt |
| Branchenbezug und persönliche Leistung im Einstieg | einverstanden | Untertitel: «Für mehr Vertriebs- und Mitarbeiterperformance in Banken, Versicherungen und bei Brokern. Wir verbinden digitale Erhebung mit Gesprächen und Beobachtungen im Arbeitsalltag, unsere Fachpersonen leiten daraus konkrete Empfehlungen ab.» |
| Wiederholung Einstieg/Ausgangslage | einverstanden | Titel Ausgangslage: «Wo bleibt in Ihrem Unternehmen Potenzial ungenutzt?» |
| Führungsband kürzen | einverstanden | ein Satz, ohne Stichworte |
| Ein starkes Beispiel dauerhaft sichtbar, übrige beschriftet, kein Auto-Weiterschalten | einverstanden | Slider ersetzt durch Reiter (Webflow-Tabs, nativ): Führung (offen) · Rollenprofil · Teams · Interne Referenz (optional) · Massnahmen. Darstellung wie «Unsere Erfolge» bleibt |
| Gesprächsoption unter dem Beispiel | einverstanden | Zeile «Welche Auswertung wäre für Ihr Unternehmen aufschlussreich?» + Button |
| Skalen und Datenquellen erklären | einverstanden, wichtig | unter jeder Grafik: Skala, Quelle, Vergleich (ohne interne Gewichtung) |
| Formulierungen präzisieren | einverstanden | «Gespräche helfen, Ergebnisse und Rahmenbedingungen einzuordnen»; «Gemeinsame Entwicklungsschwerpunkte zeichnen sich ab»; «Wie Führung eingeschätzt und im Alltag erlebt wird»; «Wo die untersuchten Anforderungen erfüllt sind, empfehlen wir keine zusätzliche Massnahme» |
| Aufwand für Auftraggebende und Teilnehmende trennen | einverstanden | Leiste unter den Methoden: Dauer · Für Projektverantwortliche · Für Teilnehmende |
| Fachliche Interpretation stärker zeigen | einverstanden | Ergebnis-Panel: «Fachliche Auswertung durch ROWAPA», Fachpersonen mit Praxis aus Vertrieb und Führung in der Finanzbranche (Aussage der Startseite) |
| Abschluss auf die Analyse zuschneiden | teilweise | Kontakt bleibt der Baustein der Startseite (Entscheid 363); nur die Einleitung ist angepasst (Eigenschaft der Komponente) |
| CTA «Strategiegespräch anfragen» | offen | bleibt «Erstgespräch vereinbaren» bis zum Entscheid (Punkt 91); auf allen Seiten einheitlich |
| Kopfzeile ruhig (Linie statt Feld) | einverstanden | Variante C im Entwurf |
| Lupe ohne Kiste | einverstanden | nur die Lupe; für den Bau die hochaufgelöste Fassung verwenden |
| Magenta in Diagrammen eindeutig | einverstanden | Plum nur für «deutlich unter dem Soll»; Referenzgruppe und Beobachtung in Manganese |
| Diagramme als echte Webelemente | einverstanden | gilt für den Bau in Webflow (Balken und Tabellen als native Elemente) |
| Kundenfall oder Kompetenznachweis | sinnvoll, nur mit Freigabe | nicht erfunden; Rückfrage (Punkt 96) |
| Benchmarks (RAIN, TLSA, Richardson, ISFB, Mercuri, Avenir, BTS, McKinsey) | als Orientierung nützlich | Kernaussage übernommen: Mehrere Methoden allein unterscheiden nicht; die Kombination Finanzbranche + Begleitung in echten Situationen + fachliche Auswertung + Umsetzung schon. Keine Anbieter oder Zahlen auf der Seite |
| Conversion-Zahlen (Unbounce, Gartner) | nicht geprüft | nicht auf der Website; Messgrösse später: qualifizierte Gespräche, Offerten, Mandate |
| Ergebnisse vor der Methode | bereits so | – |

## Texttabelle (geänderte Texte)

| Section | Original (Runde 56) | Vorschlag | Begründung | Offene Fragen |
|---|---|---|---|---|
| Header | «Die Performance-Analyse verbindet digitale Kompetenzerhebung …» | siehe oben | Branche und persönliche Leistung früh | – |
| Ausgangslage | «Die Resultate sind bekannt. Die Hintergründe oft nicht.» | «Wo bleibt in Ihrem Unternehmen Potenzial ungenutzt?» | keine Wiederholung | – |
| Auswertungen | Slider, 5 Punkte | Reiter mit Namen, Führung zuerst, Quellenzeile | verständlich ohne Klicken | – |
| Methode | «Ergebnis der Erhebung» | «Fachliche Auswertung durch ROWAPA» + Satz zu den Fachpersonen | persönliche Leistung | – |
| Aufwand | ein Satz | Leiste Dauer / Projektverantwortliche / Teilnehmende | transparent | Aufwand der Führungskräfte für die Fremdsicht beziffern? [ROWAPA bestätigen] |
| FAQ | «Können wir die Massnahmen auch mit ROWAPA umsetzen?» | «Wer sieht die Ergebnisse?» | Umsetzung steht schon in «Was Sie erreichen» | – |
| Kontakt | Einleitung der Startseite | «Im Erstgespräch klären wir Ihre Fragestellung, die relevanten Personen und Teams und einen sinnvollen Umfang. Sie sehen eine Musterauswertung und erhalten danach einen konkreten Vorschlag.» | Gesprächsnutzen konkret | – |
