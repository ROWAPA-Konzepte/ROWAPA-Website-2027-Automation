# Runde 93 · Feinschliff Performance-Analyse, Hilfsseiten offline, Was heisst «online»? (Stufe 4, 02.11.2026)

## Auftrag ROWAPA (Entscheid 407)

| Punkt | Entscheid / Auftrag | Umgesetzt |
|---|---|---|
| Aktiver Reiter | so lassen (Plum-Unterstreichung) | ✓ keine Änderung; offener Punkt 133 erledigt |
| Google-Beschreibung Performance-Analyse | ändern, passend zum neuen Titel | ✓ neue Beschreibung (Texttabelle) |
| Hilfsseiten | «Performance-Analyse alt» löschen | ✓ «Performance-Analyse (alt)» und «Performance-Analyse · Vorschau» offline (beide überholt seit Runde 72); endgültig löschen im Designer |
| Doppelte «Musterdaten» | oberen Hinweis «Beispielauswertungen mit illustrativen Daten» entfernen, «Musterdaten» im Reiter reicht | ✓ Element gelöscht (Klasse `auswertung_muster` bleibt für die Hinweise in den Reitern) |
| Frage | Ist das jetzt schon online, 1:1 mit der Domain? | Antwort unten |

## Texttabelle

| Ort | Original | Vorschlag (umgesetzt) | Begründung | Offene Fragen |
|---|---|---|---|---|
| Performance-Analyse, Google-Beschreibung | «Entwicklung gezielt steuern. Entscheidungen fundiert treffen. Die Performance-Analyse für mehr Vertriebs- und Mitarbeiterperformance in Banken, Versicherungen und bei Brokern.» | «Analyse erstellen. Potenziale erkennen. Entwicklung gezielt steuern. Für mehr Vertriebs- und Mitarbeiterperformance in Banken, Versicherungen und bei Brokern.» | gleich wie der neue Header-Titel von ROWAPA; 158 Zeichen, passt in die Google-Anzeige | – |
| Performance-Analyse, über den Auswertungen | «Beispielauswertungen mit illustrativen Daten» | entfällt | «Musterdaten» steht in jedem Reiter (Auftrag ROWAPA) | – |

## Was heisst «online»?

**Kurz:** Die Startseite und die Performance-Analyse sind die echten Seiten der neuen Website, keine Entwürfe mehr. Sie sind aber nur auf der Testadresse veröffentlicht (`rowapa-website-2027-automation.webflow.io`). Mit der Domain verbunden und veröffentlicht, gingen sie genau so online, 1:1.

**Aber:** Online geht immer die ganze Webflow-Site, nicht einzelne Seiten. Heute ist sie noch nicht startklar:

| Prüfpunkt (Testadresse, 02.11.2026) | Stand |
|---|---|
| Fertige Seiten | 2 (Startseite, Performance-Analyse) von rund 68 geplanten |
| Interne Links auf diesen beiden Seiten | 47 Ziele, davon 45 noch ohne Seite (Fehlerseite), u. a. Kontakt, Impressum, Datenschutz, Über uns, Team, Themenlinien, Blog, Webinare, Partner |
| Alte Adressen von rowapa.ch | 166 Adressen; ohne Weiterleitungen (`02_redirect_mapping.xlsx`) laufen Links aus Google, Newslettern und Lesezeichen ins Leere |
| CMS-Einträge (Themenlinien, Blog, Personen …) | als Entwurf angelegt, noch nicht veröffentlicht |
| Kontaktweg, eigene 404-Seite, Sprachlinks EN/FR/IT | offen (Punkt 126) |
| Hilfsseite `/fotos-entwurf` | noch veröffentlicht, vor dem Start offline nehmen |
| Domain in Webflow | noch keine verbunden; Site-Plan Premium ist aktiv (Entscheid 333) |

**Empfehlung:** rowapa.ch bleibt, wie sie ist, bis die nötigen Seiten gebaut sind. Dann folgt ein geordneter Start:

1. Seiten fertig bauen. Als Nächstes ist die Vertriebsperformance vereinbart (Punkt 127). Danach nach Ihrer Priorität, z. B. Kontakt, Impressum, Datenschutz, Über uns, So arbeiten wir, übrige Themenlinien und Übersichtsseiten.
2. CMS-Einträge freigeben.
3. Weiterleitungen eintragen, Favicon und SEO setzen.
4. Gesamtprüfung auf allen Geräten.
5. Domain verbinden und veröffentlichen, nur mit Ihrer Freigabe.

Falls die Performance-Analyse früher öffentlich sein soll (z. B. für eine Kampagne), gibt es Zwischenwege. Den passenden schauen wir gerne gemeinsam an (offener Punkt 135).

## Prüfsession 29 (Entscheid 378)

| Bereich | Punkt | Ergebnis |
|---|---|---|
| A CI | Darstellung | ✓ Kopf der Auswertungen ruhiger, «Musterdaten» einmal je Reiter |
| B Texte | keine erfundenen Fakten | ✓ Beschreibung nur aus Titel und bestehender Beschreibung |
| C Bauweise | nativ | ✓ Element gelöscht, Seiteneinstellungen geändert |
| D Abmachungen | Entscheid 407 | ✓ |
| E Ablauf | Löschen | ✓ nur Freigegebenes; Seiten offline, endgültig löschen macht ROWAPA |
| E Ablauf | Veröffentlichen | ✓ nur Testadresse; Domain erst mit Freigabe |
| E Ablauf | keine Zugangsdaten, keine Modellbezeichnungen | ✓ |

## Für ROWAPA im Designer (rund 3 Minuten)

Pages › Seite › Zahnrad › Delete page für die vier Seiten mit «(erledigt, löschen)» im Namen:

- Startseite · Entwurf
- Performance-Analyse · Entwurf
- Performance-Analyse · Vorschau
- Performance-Analyse (alt)

Danach im Style Manager «Clean up».
