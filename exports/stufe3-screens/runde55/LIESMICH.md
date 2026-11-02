# Runde 55 · Performance-Analyse: Methoden, Nutzen, Auswertungs-Slider (30.10.2026)

Ansicht (privat): https://claude.ai/artifact/6HsZc1zhigNCnBFpgeMxCk (Desktop, Handy, Auswertungen, Kopfzeile). Gerendert auf der Testadresse mit den Bausteinen der Startseite, nichts in Webflow gebaut. Werkzeug: `tools/entwuerfe/runde55_performance-analyse.js` (`MODE=slides` für die fünf Auswertungen, `MODE=header` mit `a|b|c` für die Kopfzeilen).

## Änderungen gegenüber Runde 54 (Rückmeldung ROWAPA)

| Wunsch | Umsetzung |
|---|---|
| «Für Unternehmen» in Plum, danach Performance-Analyse, auf allen Unterseiten | Brotkrumen mit Plum. Variante A (Plum-Schrift) hat auf Manganese nur 1,8 : 1 Kontrast. Im Entwurf Variante B: Plum-Feld mit weisser Schrift (7,2 : 1). Variante C: Plum-Linie wie die Kicker der Startseite. Bilder `kopfzeile_a/b/c.jpg` |
| Was Sie erreichen | neue Section: 01 Klare Handlungsfelder · 02 Konkrete Empfehlungen · 03 Umsetzung mit ROWAPA |
| Mehrere Auswertungen als Slide | Slider «So sieht ein Ergebnis aus», gleich gebaut wie «Unsere Erfolge» (Überblendung, Punkte, Pfeile, Plum-Fotorahmen). Fünf Folien: Ist gegen Soll, Teamvergleich, Eigen- und Fremdsicht, interne Referenz (optional), Handlungsfelder und Empfehlungen. Bilder `auswertung_1…5.jpg`. In Webflow: natives Slider-Element |
| Sechs Phasen auf die vier aufteilen | «Unser Vorgehen» mit den Phasen der Startseite: Analysieren (Auftrag aufsetzen, Profil entwickeln, Erheben) · Verstehen (Auswerten, Ergebnis) · Handeln (Massnahmen umsetzen) · Messen (Wirkung messen, optional). Je Schritt eine kleine Liste mit Dauer |
| Fünf Methoden mit «Warum» | unter den vier Schritten: «Fünf Methoden, ein vollständiges Bild», je Methode ein Satz, was sie zeigt; On-the-Job-Begleitung dunkel hervorgehoben («fester Bestandteil»), darunter «Ein differenzierter Ist-Zustand je Person und Team» |
| – | Das Band «Lernen Sie von Ihren eigenen Besten» ist jetzt Folie 4; das separate On-the-Job-Band ist in den Methoden aufgegangen. FAQ: Frage «Können wir die Massnahmen auch mit ROWAPA umsetzen?» statt «Folgemessung» |

## Aufbau

Navigation · Header B · Logo-Band · Ausgangslage · Was Sie erreichen (+ Slider) · Die Methode (Unser Vorgehen + fünf Methoden) · Gut zu wissen · Kontakt · Footer. Desktop rund 6600 px.

## Texttabelle (neue und geänderte Texte)

| Section | Original (Runde 54) | Vorschlag | Begründung | Offene Fragen |
|---|---|---|---|---|
| Header | «Für Unternehmen › Performance-Analyse» grau | «Für Unternehmen» als Plum-Feld | Wunsch ROWAPA, lesbar | Variante A, B oder C? |
| Was Sie erreichen | «Eine klare Grundlage für Ihre Entscheidung» | «Klare Handlungsfelder. Konkrete Empfehlungen.» + «Und auf Wunsch die Umsetzung aus einer Hand.» | Nutzen für Entscheider | – |
| Folie 5 | – | Plan mit Handlungsfeld, Für wen, Empfehlung, Wann | zeigt Handlungsempfehlungen konkret | – |
| Die Methode | «In vier Schritten zur Entscheidungsgrundlage», Ausrichten/Erheben/Auswerten/Entscheiden | «Vom Auftrag bis zur Wirkung», Analysieren/Verstehen/Handeln/Messen mit den sechs Phasen | Wiedererkennung Startseite | – |
| Fünf Methoden | On-the-Job-Band allein | Skill-Check, Eigensicht, Fremdsicht, Interviews, On-the-Job-Begleitung, je ein «Warum»-Satz | Wunsch ROWAPA | – |
