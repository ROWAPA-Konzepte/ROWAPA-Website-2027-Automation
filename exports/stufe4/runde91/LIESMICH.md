# Runde 91 · Wahl getroffen, «Nach oben» auf den Themenlinien, Header 1,2 s ohne weissen Blitz (Stufe 4, 02.11.2026)

## Auftrag ROWAPA (Entscheid 405)

| Punkt | Entscheid / Auftrag |
|---|---|
| Startseite, Themenlinien | Auf den ersten fünf Kacheln der Themenlinien unten rechts ein Knopf für den Rücksprung an den Seitenanfang, der mitläuft, damit man direkt wieder ins Hauptmenü kommt, ohne bis zum Schluss zu scrollen |
| Empfehlungen | so übernehmen (Muster 2, Spalte Manganese, unten Einordnung und Empfehlungen gleich dargestellt) |
| «Unsere Erfolge» | so lassen wie bisher (Slider); die Kacheln aus Runde 90 werden nicht übernommen |
| «Was uns antreibt» | wie bisher (mit den drei Zahlen) |
| Header | gemeinsam mit dem Wellenmeer, **1,2 s**. Der Sprung auf die Startseite soll gleich aussehen wie auf die Unterseiten: Bisher wurde der Logobereich kurz weiss. |
| Kennzahlen | stimmen; die Anzahl der Antworten der Befragung braucht es nicht (offener Punkt 42 erledigt) |
| Gewählte Fassung | Links von ROWAPA: Auswertung Muster 2 Manganese, Insights mit Foto nur im grossen Beitrag, Erfolge und Antrieb wie heute, Header 1,2 s |
| Frage ROWAPA | «Willst du erst nochmal den finalen Entwurf bauen, ohne Auswahl, bevor wir in Webflow bauen?» (Empfehlung unten) |

## Links zum Ansehen (Testadresse)

Die gewählte Fassung ist jetzt der Standard, ohne Zusatz in der Adresse:

- https://rowapa-website-2027-automation.webflow.io/startseite-entwurf
- https://rowapa-website-2027-automation.webflow.io/performance-analyse-entwurf

Die Leiste unten links zeigt nur noch drei Punkte (Beispielauswertungen, Insights, Header), jeweils mit der Wahl als Standard und «heute» zum Vergleichen. «Unsere Erfolge» und «Was uns antreibt» sind aus der Leiste entfernt und stehen wie heute.

## 1. «Nach oben» auf den Themenlinien (Startseite-Entwurf)

- **Bisher:** Solange die Bühne der fünf Themenlinien steht (ab 992 px), waren Navigation und Knopf «Nach oben» ausgeblendet. Ins Menü kam man erst nach dem letzten Thema.
- **Neu:** Der Knopf «Nach oben» (Plum, unten rechts) bleibt auf der Bühne stehen und läuft durch alle fünf Themen mit. Ein Klick führt an den Seitenanfang, die Navigation ist dort wieder da. Die Navigation selbst bleibt auf der Bühne ausgeblendet, wie entschieden.
- **Geprüft:**
  - Auf der Bühne (Thema 1 und 3) ist der Knopf sichtbar und klickbar, nichts liegt darüber.
  - Ein Klick führt an den Seitenanfang.
  - Auf der echten Startseite bleibt er wie bisher ausgeblendet.
- **Technik:** Grafik 1.31.0 mit dem Attribut `data-nachoben` = `mitlaufen` am Abschnitt `section_themen`. Gesetzt ist es nur auf der Entwurfsseite, für die echte Seite beim festen Bau.
- **Handy und Tablet:** Dort gibt es keine stehende Bühne, der Knopf erscheint wie bisher nach gut einer Bildschirmhöhe.

## 2. Header 1,2 s und Logo-Band ohne weissen Blitz

- **Ursache:** Beim gemeinsamen Einblenden wurde das ganze Logo-Band unsichtbar gemacht, samt seiner dunklen Fläche. Für einen Moment war darunter die weisse Seite zu sehen.
- **Lösung (Kopf-Skript 1.0.1):** Beim Logo-Band blendet nur der Inhalt ein (die Logos), die dunkle Fläche bleibt stehen. Damit sieht der Sprung auf die Startseite aus wie auf die Unterseiten: Fläche steht, Inhalt und Wellenmeer blenden gemeinsam ein.
- **Gemessen:** Seitenwechsel von der Performance-Analyse über das Logo zur Startseite, Bild für Bild, Helligkeit im Streifen des Logo-Bands.
  - vorher: in mehreren Bildern 100 % weiss
  - jetzt: in keinem Bild weiss, auf der Testadresse nachgeprüft
- **Standard ist jetzt 1,2 s,** in der Leiste zum Vergleichen weiterhin 0,8 s, 0,6 s und «wie heute».

## 3. Empfehlung zur Frage «finaler Entwurf ohne Auswahl»

**Ja, empfehle ich, und zwar direkt nativ in Webflow auf den beiden Entwurfsseiten.**

Damit ist der finale Entwurf schon der echte Bau. Sie prüfen genau das, was später auf den echten Seiten steht. Danach ist die Übernahme auf die echten Seiten ein kurzer, sicherer Schritt. Vorgehen:

1. **Performance-Analyse (Entwurf):** Muster 2 mit Spalte Manganese nativ.
   - **Raster und Fragenspalte:** über Zusatzklassen nur an den Elementen der Entwurfsseite (z. B. `is-fragen`), damit die echte Seite unberührt bleibt.
   - **Bezeichnungen und Empfehlungen:** «Einordnung» als Webflow-Text in jedem Reiter, Empfehlungen wie gewählt.
   - **Schrittleiste:** als Webflow-Elemente.
   - **Aufbau Schritt für Schritt:** Das Abblenden und Einblenden übernimmt ein Modul im Grafik-Skript, weil Webflow das nicht kann. Die Umschaltleiste braucht es danach nicht mehr.
2. **Startseite (Entwurf):**
   - **Insights als Magazin** mit Foto nur im grossen Beitrag, nativ über Zusatzklassen (grosser Beitrag = erster Eintrag der Liste, Kurztexte der übrigen sichtbar).
   - **«Nach oben» auf den Themenlinien** (erledigt).
   - **Header 1,2 s** gemeinsam mit dem Wellenmeer.
3. **Aufräumen** (Freigabe nötig, da Löschen):
   - Umschaltleiste und Kopf-Skript der Entwürfe entfernen.
   - Den nicht gewählten Abschnitt «Unsere Erfolge» als Kacheln (`section_belege`, Klassen `belege_*`) löschen.
   - Das nicht gewählte Muster 1 entfernen.
4. **Prüfen:** Prüfsession, Desktop, Tablet und Handy; danach Ihre Abnahme der beiden Entwurfsseiten.
5. **Übernahme auf die echten Seiten:**
   - dieselben Zusatzklassen und Elemente auf `/` und `/performance-analyse` setzen
   - Header-Einblenden site-weit über das Kopf-Skript «ROWAPASeitenwechsel»
   - danach die Entwurfsseiten löschen (Freigabe)

## Technik und Versionen

- Grafik **1.31.0** (`rowapa-website-grafik@07500be`), site-weit, Footer.
- Umschaltleiste **2.2.1** (`ROWAPA-Website-2027-Automation@d7ffbb5`, Quelle `entwurf-code/entwurf-muster.js`), Footer beider Entwurfsseiten.
- Kopf-Skript **1.0.1** (inline, Quelle `entwurf-code/entwurf-kopf.js`), Kopf beider Entwurfsseiten.
- Attribut `data-nachoben="mitlaufen"` an `section_themen` der Startseite (Entwurf).

## Texttabelle

Keine Textänderungen in dieser Runde. Die Texttabelle der Runde 90 (Empfehlungen) gilt. Die offene Frage zu den Kennzahlen ist erledigt: Die Kennzahlen stimmen, eine Anzahl Antworten wird nicht genannt (Entscheid 405).

## Prüfsession 27 (Entscheid 378)

| Bereich | Punkt | Ergebnis |
|---|---|---|
| A CI | Farben, Knopf | ✓ Knopf «Nach oben» unverändert (Plum), auf den hellen Themen-Panels gut sichtbar |
| A CI | Flächen beim Einblenden | ✓ dunkle Flächen bleiben stehen (Logo-Band korrigiert); kein weisser Blitz mehr, gemessen |
| B Texte | keine erfundenen Fakten | ✓ keine neuen Texte; Kennzahlen von ROWAPA bestätigt |
| C Bauweise | nativ zuerst | ✓ Knopf ist das bestehende Webflow-Element; das Mitlaufen steuert ein Attribut am Abschnitt (pflegbar), das Skript nur das Ausblenden auf der Bühne |
| C Bauweise | «Bewegung reduzieren» | ✓ Header wie heute; Knopf springt direkt |
| D Abmachungen | Navigation auf der Themen-Bühne ausgeblendet (Runde 20) | ✓ bleibt; nur der Knopf läuft mit (Auftrag ROWAPA) |
| D Abmachungen | Seitenwechsel 0,35 s, Navigation steht (Entscheid 401) | ✓ unverändert; Startseite und Unterseiten sehen beim Wechsel jetzt gleich aus |
| E Ablauf | Entwurf zuerst (389) | ✓ Attribut nur auf der Entwurfsseite; echte Startseite geprüft (Knopf auf der Bühne weiterhin aus) |
| E Ablauf | Löschen | ✓ nichts gelöscht; `section_belege` bleibt ausgeblendet bis zur Freigabe |
| E Ablauf | Veröffentlichen | ✓ nur Testadresse |
| E Ablauf | keine Zugangsdaten, keine Modellbezeichnungen | ✓ |

## Fragen an ROWAPA

1. Finaler Entwurf nativ auf den Entwurfsseiten, wie oben beschrieben: einverstanden?
2. Dürfen dabei der nicht gewählte Abschnitt «Unsere Erfolge» als Kacheln (`section_belege`, Klassen `belege_*`) und das nicht gewählte Muster 1 gelöscht werden?
