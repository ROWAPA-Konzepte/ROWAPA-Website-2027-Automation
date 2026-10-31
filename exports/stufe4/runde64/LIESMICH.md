# Runde 64 · Performance-Analyse: Effekte, Reiter, Header, Megamenü (Stufe 4, 31.10.2026)

Rückmeldung ROWAPA (Entscheid 375): Reiter sind angelegt, Zustand «Current» sollte gemacht sein. Logo-Laufband läuft weiter. Auf 13 Zoll ist das Logo-Band nicht mehr im ersten Bild. Übersichtsseiten im Megamenü: recherchieren und entscheiden. «So arbeiten wir» integrieren und prominent zeigen. Effekte jetzt bauen.

Testadresse: https://rowapa-website-2027-automation.webflow.io/performance-analyse (veröffentlicht und geprüft). Videos: `effekte_desktop.mp4` (1440 × 900, rund 58 s), `effekte_handy.mp4` (390 px, rund 31 s). Bilder: `header_1280x800.jpg`, `header_1440x900.jpg`, `megamenue.png`, `methoden_desktop.png`.

## 1. Reiter 4 und 5

Inhalt aus der Zwischenablage in die zwei neuen Reiter verschoben, Beschriftungen «Interne Referenz» (mit «optional») und «Massnahmen» gesetzt, Klasse `auswertung_reiter`, Zwischenablage gelöscht. Alle fünf Reiter wechseln auf der Testadresse.

**Offen:** Der Zustand «Current» ist im veröffentlichten Stil nicht vorhanden; der aktive Reiter zeigt noch das Webflow-Grau. Klickweg im Benutzerhandbuch 2.47. Nach dem Setzen veröffentliche ich und prüfe.

## 2. Header und Logo-Band auf 13 Zoll

Vorher lag das Logo-Band unter dem ersten Bildschirm (Header 817 px hoch, Logos ab 914 px bei 1440 × 900). Jetzt richtet sich der Header nach der Fensterhöhe; Texte unverändert:

- Titel nach CI 6 % der Fensterhöhe, höchstens 60 px (`heading-style-h1.is-unterseite`: `clamp(2.25rem, min(1.2rem + 3vw, 6vh), 3.75rem)`).
- Abstand oben und unten wächst mit der Fensterhöhe (`header-unterseite_inner`: oben `clamp(3rem, 8vh, 7.5rem)`, unten `clamp(7rem, 16vh, 12.5rem)`).
- Header füllt das erste Bild, das Logo-Band schliesst mit der Fensterunterkante ab wie auf der Startseite (`section_header-unterseite`: Mindesthöhe `calc(100svh - 169px)` = Fenster minus Navigation 73 px und Logo-Band 96 px; Tablet und Handy ohne Mindesthöhe).

Gemessen auf der Testadresse (Logos oben–unten, Fensterhöhe): 1280 × 800: 747–787; 1440 × 900: 828–868; 1470 × 956: 884–924; 1512 × 982: 910–950; 1920 × 1080: 1008–1048. Damit liegen die Logos überall im ersten Bild, gleich wie auf der Startseite (1440 × 900: 828–868).

## 3. Übersichtsseiten im Megamenü (Recherche und Entscheid)

- Nutzerinnen und Nutzer erwarten, dass sie von einem Menübereich auf eine Übersichtsseite kommen. In Tests erwartete die Mehrheit, dass Spaltentitel im Megamenü anklickbar sind; Baymard fand bei 14 % der untersuchten Shops nur Textlabels (zitiert im Test des Shopify-Themes Dawn). Richtlinien von Universitäten und Behörden empfehlen Spaltentitel als Link oder einen eigenen Link «Übersicht», weil der oberste Menüpunkt beim Megamenü selbst kein Link ist. Das gilt besonders auf Tablets, wo es kein Darüberfahren gibt.
- Übersichtsseiten sind im Konzept vorgesehen (`01_cms_architektur.md`, Unikat-Seiten «Für Organisationen» und «Meine persönliche Entwicklung») und helfen bei Suchmaschinen.
- **Entscheid Claude:** Übersichtsseiten behalten, aber nicht als eigener Punkt «Übersicht» in der Liste (stand zuoberst, las sich unter «Performance-Analyse» unglücklich). Stattdessen ist der **Spaltentitel selbst der Link** mit Pfeil: «Für Unternehmen →», «Meine Entwicklung →». Die zwei Punkte «Übersicht» sind entfernt.
- Bis die Übersichtsseiten gebaut sind, führen die Links auf die Startseite: «Für Unternehmen» auf `/#themen` (Lösungen für Unternehmen), «Meine Entwicklung» auf `/#entwicklung` (neue Sprungmarke in der Section «Meine Entwicklung»). Handy-Menü gleich.
- Neue Klassen `navbar_dropdown-heading-link` (Farbe wie Spaltentitel, beim Darüberfahren Manganese, einzeilig) und `navbar_dropdown-heading-pfeil`.

## 4. «So arbeiten wir» (Einschätzung)

Einverstanden mit ROWAPA: integrieren, und zwar prominent. Entscheider wollen vor der Kontaktaufnahme wissen, wie die Zusammenarbeit abläuft; ein sichtbarer Ablauf nimmt Unsicherheit. Die Seite `/so-arbeiten-wir` ist im Konzept und im Menü vorgesehen.

Vorschlag für die Themenlinie: eigene Section nach «Ihr Vorteil» und vor «Aus der Praxis», mit den vier Phasen und der Treppe der Startseite (Komponente, gleiche Texte), darunter «Mehr zu unserer Arbeitsweise →». Reihenfolge: Was (Hebel) → Warum ROWAPA → **Wie wir arbeiten** → Beweis → Fragen → Gespräch. Auf der Performance-Analyse nicht nötig, dort erklärt «Die Methode» den Ablauf. Entwurf folgt mit der Themenlinie (offener Punkt 103).

## 5. Effekte (Auswahl Entscheid 368, Tempo Entscheid 369)

| # | Effekt | Umsetzung |
|---|---|---|
| 1 | Header: Lupe setzt sich aus Punkten zusammen, Plum-Strich zeichnet sich | Lupe: Grafik-Skript 1.19.0, `data-grafik="punktfigur"` mit `data-start="sofort"`, `data-tempo="0.7"` an `header-unterseite_figur`. Strich: native Interaction «Header Unterseite · Strich zeichnen» (beim Laden). Kleines Vorbereitungs-Skript im Seitenkopf verhindert, dass Lupe und Strich kurz aufblitzen (blendet nach spätestens 4 s alles ein) |
| 2–4 | Section-Köpfe, Leistungsfelder, Führungsband, Kacheln, Ergebnis-Kopf, Reiter, Hinweis, Aufwand, Fragen gleiten herein, gestaffelt | **native** Interactions «Einblenden 0 bis 3». Steuerung ohne Code über das Attribut `data-einblenden` (0 = sofort, 1/2/3 = 0,12/0,24/0,36 s später). Gilt auf jeder Seite, auf der das Attribut gesetzt ist |
| 5 | Grafiken der Reiter bauen sich auf (beim ersten Erscheinen und bei jedem Reiterwechsel) | Grafik-Skript, `data-grafik="aufbau"` an `auswertung_grafik`; `data-richtung`: Führung `mitte`, Rollenprofil und Interne Referenz `links`, Teams und Massnahmen `oben`. Bilder bleiben normale Webflow-Bilder |
| 6 | Scroll-Geschichte «Fünf Methoden» | Grafik-Skript, `data-grafik="methoden"` an `methode_layout`; ab 992 px steht die Grafik, Methode für Methode leuchtet auf, Linie mit Punkt zum Ergebnis, Ergebnis-Punkte füllen sich (`data-punkte` an der Zeile), am Ende «Fünf Quellen, ein Bild»; 190 px Scrollweg je Methode. Darüberfahren färbt die Linie Plum. Tablet und Handy: Zeilen stehen, Section gleitet herein |
| 7 | Kundenstimme: Plum-Linie zeichnet sich | native Interaction «Kundenstimme · Plum-Linie zeichnen», neues Element `stimme_linie` oben in der Karte |
| 9 | Mauszeiger, Punktemeer mit Netz, Logo-Laufband | laufen bereits (Runde 63) |

Alle Effekte: Inhalt ohne Bewegung vollständig lesbar, «Bewegung reduzieren» springt ans Ende bzw. bleibt stehen. Kontakt-Section bewusst ohne Einblendung (Komponente, sonst ändert sich auch die Startseite).

**Abweichung:** Die Texte im Header (Titel, Satz, Buttons) laufen nicht ein, sondern stehen sofort. Grund: Lesbarkeit und Ladezeit (Google misst, wann der Titel sichtbar ist); ein Einlaufen hätte den Titel erst nach dem Laden der Webflow-Skripte gezeigt. Im Video Runde 59 liefen sie ein. [ROWAPA bestätigen]

## Prüfung

- Testadresse mit Grafik 1.19.0: Lupe baut sich nach 0,8 s auf und steht nach 2,3 s, Strich zeichnet sich, Einblendungen bei 85 % der Fensterhöhe, «Fünf Methoden» Schritt für Schritt (Methode 1–5, danach «Fünf Quellen, ein Bild», Punkte 1, 1, 2+3, 5, 4), Reiter-Grafiken bauen sich auf, Linie der Kundenstimme zeichnet sich.
- Startseite unverändert (Figuren, Laufband), keine Fehler im Browser.
- Handy: keine horizontale Verschiebung.

## Texttabelle

| Stelle | Original | Neu | Begründung | Offene Fragen |
|---|---|---|---|---|
| Megamenü, Spaltentitel | «Für Unternehmen», darunter Punkt «Übersicht» | «Für Unternehmen →» (Link) | ein Weg zur Übersicht, ohne zusätzlichen Listenpunkt | Adresse der Übersicht später `/fuer-unternehmen`? [ROWAPA bestätigen] |
| Megamenü, Spaltentitel | «Meine Entwicklung», darunter Punkt «Übersicht» | «Meine Entwicklung →» (Link) | wie oben | – |
| Fünf Methoden, Schrittanzeige | Entwurf Runde 59/60 | «Methode 1 von 5» … «Fünf Quellen, ein Bild» | wie abgenommen; im Designer änderbar über `data-text-schritt`, `data-text-fertig` | – |
