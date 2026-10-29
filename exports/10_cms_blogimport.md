# Blog-Import aus rowapa.ch (WordPress) – Prüfliste

Stand 28.10.2026 · Collection «Blog» `6ae2662518387f485b2e2bd7` · alle Einträge **Entwurf** · die Website rowapa.ch bleibt unverändert (Entscheide 338, 345).

**Umfang:** 58 Beiträge aus WordPress (REST-Schnittstelle, `www.rowapa.ch/wp-json/wp/v2/posts`) und 4 Beiträge aus dem früheren Webflow-Projekt, zusammen 62. Keine Duplikate (Zählung nach dem Import).

**Was übernommen wurde:** Titel, Slug, Kategorie (Sales, Leadership, Persönlichkeit, Recruiting, ROWAPA), Datum, Teaser (aus dem Auszug, max. 180 Zeichen), Lesezeit (Wörter / 200), Titelbild, Text mit Bildern (Webflow kopiert die Bilder auf den eigenen Speicher), Lösungs-CTA (aus dem farbigen Kasten), alte URL (für spätere Weiterleitungen), SEO-Titel und -Beschreibung (Yoast). Beiträge unter 60 Wörtern haben den Schalter «Platzhalter» an.

**Was beim Import bereinigt wurde:** leere Lazy-Load-Bilder, Link-Hüllen um Bilder, Absätze in Zitaten, Fettschrift in Überschriften, HTML-Zeichen in SEO-Titeln.

## Entscheide ROWAPA (29.10.2026)

- Nur Beiträge **ab 2023** bleiben (19 aus WordPress, 4 aus dem früheren Webflow-Projekt). Die 39 älteren sind in Webflow **archiviert**, nicht gelöscht (Entscheid 350).
- Anrede: Persönlichkeit mit Du, Sales und Leadership mit Sie (Entscheid 351). Umgestellt: 17 Beiträge. Bleibt in Du: Zitate Dritter (z. B. Erpresser-Nachricht in «Cyberversicherung und KMU», Sätze in «Positive Leadership») und das Interview Wolfgang Wachter / Jasmina Rasiti im CAS-Erfahrungsbericht. Abgeschnittene SEO-Titel bleiben zu kürzen (u. a. Selbstführung, Zeitmanagement, Leadership-Weiterbildung).
- Autorin aller WordPress-Beiträge ab 2023: Galina Shokhova (Entscheid 352).

Die Mängelliste unten betrifft teils archivierte Beiträge; relevant sind nur die aktiven.

## Bereinigung der aktiven Beiträge (29.10.2026, Entscheid 353)

- **SEO-Titel neu** (vollständig, max. 60 Zeichen): Burnout in der Finanzbranche · Erfahrungsbericht CAS · Leadership-Weiterbildung · Selbstführung («Selbstführung: So stoppen Sie die Fluktuation im Team») · CAS Leadership · Zeitmanagement im Vertrieb («… Wie Eifer Ihre Ziele sabotiert») · Kundenberatung als Sales-Story · Empathische Führung.
- **Entfernt:** Umfragerest (Storytelling), abgelaufenes LinkedIn-Bild (Kundenberatung als Sales-Story), leere LinkedIn-Links (Erfahrungsbericht CAS, Empathische Führung), nicht funktionsfähiger «Kosten der Fluktuation – interaktiver Rechner» (Selbstführung; Inhalt: Recruiting 20 % des Jahreslohns, Vakanz = Jahreslohn / 220 Arbeitstage × Tage, Onboarding pauschal 5 000 CHF, Ramp-up 30 % der Monatskosten, Austritt pauschal 1 000 CHF; als Webflow-Rechner nur mit Code möglich).
- **Neu gesetzt:** Vergleichstabellen als Listen (Positive Leadership, Empathische Führung), Überschriften ohne kaputte Fettschrift (CAS Leadership), Labels «Lösungsansatz» und Bildunterschriften als Absätze, geteilter Link «Khaled Salah» zusammengeführt.
- **Tippfehler:** «Postitive», «emotionalle», fehlendes Leerzeichen im CTA-Titel (11 Fehler), Satzbau (Schwierige Kunden), doppeltes Verb (Empathische Führung).
- **Offen:** Ziel der Lösungs-Kästen (offener Punkt 70); Beschreibung «Leadership-Weiterbildung» sprachlich holprig; Linkpfade zum CAS uneinheitlich (bei den Weiterleitungen prüfen).

## Prüfen vor dem Veröffentlichen (Mängel aus der Quelle, unverändert übernommen)

| Thema | Beiträge | Vorschlag |
|---|---|---|
| Reste von WordPress-Umfragen im Text («… Min votes count should be 1») | tagebuch-fuer-persoenlichkeitsentwicklung, storytelling-im-finanzvertrieb, abschalten-nach-der-arbeit (2×), rollen-und-aufgaben-einer-fuehrungskraft-in-der-finanzbranche, versicherung-verkauf_die-groessten-probleme | Absatz löschen |
| Tabellen oder Umfragen als blosser Text | positive-leadership-im-finanzvertrieb, empathische-fuehrung, linkedin-fuer-kundenberater-aus-der-finanzbranche_drei-strategien | als Liste neu setzen oder löschen |
| Kaputte Fettschrift in Überschriften | cas-leadership-deine-fragen-unsere-antworten («1.», «8.»), tagebuch-fuer-persoenlichkeitsentwicklung | Überschrift neu tippen |
| Abgeschnittene oder fehlerhafte SEO-Titel | cas-leadership…, zeitmanagement-im-vertrieb, kunden-telefonat…, kundenberatung-als-sales-story, empfehlungsmarketing…, burnout-in-der-finanzbranche, empathische-fuehrung (Restzeichen) | SEO-Titel kürzen, max. 60 Zeichen |
| Lösungs-CTA verweist auf die WordPress-Testseite `rowapa.ch/dev/einwandbehandlung-fuer-die-finanzbranche/` | u. a. fuehrung-4-0…, kunden-telefonat…, rollen-und-aufgaben…, sozialkompetenzen…, gute-vorsaetze-2023…, 5-tipps-fuer-erfolgreiche-digitale-fuehrung, welche-fuehrungskompetenzen…, einwandbehandlung-fuer-die-finanzbranche-2 | auf ein passendes Angebot der neuen Website setzen |
| Interner Link fehlerhaft | zeitmanagement-durch-priorisierung («/5-zeitmanagement-methoden/)»), kunden-telefonat… (`/dev/telefonleitfaden…`) | Link korrigieren |
| Bild nicht übernommen (LinkedIn-Adresse, abgelaufen) | kundenberatung-als-sales-story | Bild neu hochladen oder entfernen |
| Video erwähnt, aber nicht vorhanden | rowapa-video-sales-und-leadership-trainings (Platzhalter) | Video-Link ergänzen oder Beitrag weglassen |
| Ohne Text | rowapa-expertentalk-herausforderungen-von-banken-und-versicherungen (Platzhalter) | weglassen oder neu schreiben |
| Tippfehler | empfehlungsmarketing… («zumEmpfehlungsmarketing» im CTA-Titel) | Leerzeichen |

## Grundsätzliche Fragen

1. **Anrede:** Die meisten Beiträge sprechen mit «Du» an, auch bei Themen für Unternehmen (Führung, Vertrieb). Unsere Regel: Sie für Unternehmen, Du nur bei Angeboten für Einzelpersonen. Nicht umgeschrieben. Vorschlag: Beiträge der Kategorie «Persönlichkeit» bleiben bei Du, Führung und Sales auf Sie umstellen, sobald ROWAPA entschieden hat, welche Beiträge bleiben. [ROWAPA entscheiden]
2. **Auswahl:** Welche der 62 Beiträge sollen auf die neue Website? Viele sind von 2021–2023 (z. B. «Herausforderungen in der Führung für 2022», «Gute Vorsätze 2023»). [ROWAPA entscheiden]
3. **Autor:innen:** Das Feld «Autor» ist leer. In WordPress stehen u. a. Galina Shokhova und «corinne», die nicht in «Personen» sind. [ROWAPA bestätigen]
4. **Weiterleitungen:** Das Feld «Alte URL» ist gefüllt; die Weiterleitungen werden beim Umzug der Domain angelegt.

## Einträge (Slug → Webflow-ID)

### Testeintrag

- generationsmanagement-in-der-finanzbranche 6ae282af38bfead0f9c2f631

### Lauf 1

- emotionale-intelligenz 6ae2832a34d14cc61ce21248
- erfahrungsbericht-cas-professional-leadership-for-finance 6ae28359cf8b68d027ce2bda
- die-fuehrungskraft-in-der-digitalen-welt 6ae2838128562a6d5ddb73ec
- demotivation-der-mitarbeiter-wie-fuehrungskraefte-den-unterschied-machen 6ae283ad6bab517f3b37dd9f
- leadership-weiterbildung 6ae283d7d9b75391e2e2de41
- den-kunden-verstehen-dank-dem-eisbergmodell 6ae28400be927a33195f497a
- tagebuch-fuer-persoenlichkeitsentwicklung 6ae28450ee7132ac3cf18c2a
- 7-tipps-fuer-mehr-selbstdisziplin 6ae28475ee7132ac3cf19745
- gute-vorsaetze-2023-5-tipps-von-rowapa 6ae2849a65f24e29b867f396
- 5-tipps-fuer-erfolgreiche-digitale-fuehrung 6ae284bd1b171a066792db43
- selbstreflexion-fuer-die-nachhaltige-leadership 6ae284dc3a73f0115408f3e9
- fuenf-phasen-des-verkaufsgespraechs 6ae284fbbe927a33195fce2c
- welche-fuehrungskompetenzen-haben-top-leader-heute 6ae28518ee7132ac3cf1d0a2
- rowapa-expertentalk-herausforderungen-von-banken-und-versicherungen 6ae2851dd8be7bd57f880e64 (platzhalter, leer)

### Lauf 2

- positive-leadership-im-finanzvertrieb 6ae2831b8fdb11c9db64e4b3
- beratungsansaetze-der-finanzbranche-im-wandel 6ae28345be927a33195eed2c
- wie-erreiche-ich-meine-lebensziele 6ae2836f7c36cd2e1bf21dd1
- die-grossen-herausforderungen-der-digitalisierung 6ae2839a7568ebcf4e58d195
- empathische-fuehrung 6ae283c96bab517f3b37e806
- die-fuehrungskraft-in-der-digitalen-welt-2 6ae283f1f0ea5909d7a59ab9
- burnout-in-der-finanzbranche 6ae28419e7885c6c98c6b65a
- 5-zeitmanagement-methoden 6ae2843da77ff62e59185a98
- 11-fehler-im-cross-und-upselling-in-der-finanzbranche 6ae2846148ff3f4afd497bc8
- linkedin-fuer-kundenberater-aus-der-finanzbranche_drei-strategien 6ae284921debb0c71e0818ca
- herausforderungen-in-der-fuehrung-fuer-2022 6ae284b5aaedbcae9c04d84c
- befaehigen-in-der-fuehrung 6ae284d3518581f64f82a090
- schwierige-kunden_was-tun 6ae284ede1b445078c7d315d
- wir-sind-cicero-akkreditiert 6ae284faa8fc8471285c88ec
- rowapa-video-sales-und-leadership-trainings 6ae284fe7b88b21e6621defb (platzhalter)

### Lauf 3

- demotivation 6ae28325aca985e73cfbc497
- mit-mini-gewohnheiten-zu-maximalem-erfolg 6ae2835834d14cc61ce22457
- entspannung-im-finanzvertrieb 6ae2838628562a6d5ddb7674
- videoberatung 6ae283b020de97d958f7e8de
- recruiting 6ae283d77568ebcf4e58eefb
- smartphone-der-taegliche-begleiter 6ae283ff518581f64f828a63
- arbeitskonflikte 6ae284517568ebcf4e5922c1
- selbstfuehrung-als-loesung 6ae2847904a7ec31ee86207b
- die-verschiedenen-fuehrungsstile-welcher-ist-deiner 6ae2849e7568ebcf4e594381
- versicherung-verkauf_die-groessten-probleme 6ae284c6e1b445078c7d23d0
- zeitmanagement-durch-priorisierung 6ae284e8d9b75391e2e30833
- versicherungsprovision-gefahren 6ae28504a8fc8471285c8d4d
- was-macht-eine-gute-fuehrungskraft-aus 6ae2851dbe927a33195fe1fe
- einwandbehandlung-fuer-die-finanzbranche-2 6ae2852c28562a6d5ddc00e1

### Lauf 4

- cas-leadership-deine-fragen-unsere-antworten 6ae28316607b1b78443f5a26
- storytelling-im-finanzvertrieb 6ae2834abe927a33195ef07e
- fuehrung-4-0-interview-mit-adrian-steiner 6ae28375b4790aac3cbce2e4
- kunden-telefonat-termin-vereinbaren-in-10-schritten 6ae283a0475a4021d91f92fa
- onboarding 6ae283c76041fc5cc999e999
- zeitmanagement-im-vertrieb 6ae283eee1b445078c7d08dd
- cyberversicherung-und-kmu 6ae28411c119b44d7c72bb92
- kundenberatung-als-sales-story 6ae28433a8fc8471285c32da
- abschalten-nach-der-arbeit 6ae28460f8bccebaf7759f97
- kundenberatung-2-0 6ae284867568ebcf4e593b92
- rollen-und-aufgaben-einer-fuehrungskraft-in-der-finanzbranche 6ae28499475a4021d91fff43
- lead-generation-fuer-die-finanzbranche 6ae284b71b171a066792d6a4
- empfehlungsmarketing-ideen-fuer-die-finanzbranche 6ae284cb7b88b21e6621d5ef
- sozialkompetenzen-der-top-verkaeufer-in-der-finanzbranche 6ae284dc20de97d958f82110

