# Runde 77 · Seitenwechsel site-weit, Methoden und Titel übernommen, Bildband-Entwurf, Fotos (Stufe 4, 01.11.2026)

## Entscheide ROWAPA (Entscheid 391)

1. Seitenwechsel: **sanft**.
2. Aufklappbare Methoden übernehmen; Eigensicht bekommt ihren Punkt im Ergebnis.
3. Wortweise Titel übernehmen.
4. Eigenes Repository für das Grafik-Skript: Claude legt es selbst an.
5. Neue Fotos der eigenen Leute (Fototermin Zürich 2025), auch für andere Seiten; Frage nach Zugriff auf den Foto-Ordner. Feedback von ChatGPT folgt, danach eventuell Anpassungen.

## Umgesetzt (Testadresse)

| Punkt | Umsetzung | Prüfung |
|---|---|---|
| Seitenwechsel sanft, alle Seiten | Kopf-Skript «ROWAPASeitenwechsel» 1.0.0 site-weit. Neue Seite fährt samt Navigation von unten ein (1,0 s, Sinus-Kurve), alte Seite fährt hoch und dunkelt ab. Handy: Überblenden 0,3 s. «Bewegung reduzieren»: kein Übergang. Nur innerhalb der Website; beim Erstbesuch von aussen kein Übergang. Offene Megamenüs schliessen vorher sauber (über Webflows eigenes Schliessen) | Startseite → Megamenü → Performance-Analyse: Übergang aktiv; Zurück-Taste: Übergang aktiv, Megamenü öffnet danach normal |
| Entwurfsteile Seitenwechsel | Entwurfs-Skript und Umschalt-Leiste von der Entwurfsseite entfernt (Klassen gelöscht) | – |
| Methoden aufklappbar, `/performance-analyse` | `methode_layout` mit `data-grafik="methoden-klapp"`; Eigensicht `data-punkte="2"` | Start: Skill-Check offen, Punkt 1 leuchtet; Eigensicht offen: Punkt 2 leuchtet (Bild `pa_methoden_aufklappbar.jpg`) |
| Wortweise Titel, `/performance-analyse` | Interaktion «Titel wortweise (H2) · Performance-Analyse» gilt jetzt für die Performance-Analyse und die Entwurfsseite | Titel werden aufgeteilt und erscheinen wortweise |
| Bildband (Entwurf) | Foto 5 (zwei Mitarbeitende im Arbeitsgespräch, Plum-Vorhang) als ganzes Bildband nach «Fünf Perspektiven», direkt nach dem Satz «Unsere Fachpersonen … ordnen die Ergebnisse ein». Setzt sich beim Scrollen von 108 auf 100 % (native Interaktion). Ohne Bildtext, damit nichts behauptet wird, was das Foto nicht zeigt. Bild ohne Metadaten hochgeladen (298 KB), Alt-Text gesetzt | Bild `entwurf_bildband.jpg` |

## Eigenes Repository: nicht angelegt

GitHub hat das Anlegen in der Organisation «ROWAPA-Konzepte» abgelehnt: Die Claude-App hat dort keine Berechtigung, neue Repositories zu erstellen.

So geht es weiter:
1. In GitHub in der Organisation «ROWAPA-Konzepte» ein neues Repository anlegen: Name `rowapa-website-grafik`, **öffentlich**, mit README.
2. Der Claude-App Zugriff darauf geben: GitHub › Organisation › Settings › GitHub Apps › Claude › Configure › Repository access › `rowapa-website-grafik` hinzufügen (oder «All repositories»).
3. Kurz Bescheid geben. Ich hänge das Repository an, ziehe das Grafik-Skript um, registriere die nächste Fassung von dort und dokumentiere es.

Bis dahin läuft alles wie bisher aus dem Projekt-Repository.

## Fotos: Einschätzung der fünf neuen Fotos

Alle fünf sind ungestellte Arbeitsfotos der eigenen Leute, genau die Art Bild, die der Website fehlt.

| Foto | Motiv | Wo es passt | Hinweis |
|---|---|---|---|
| 4 | Lachender Mitarbeiter mit blauer Brille im Gespräch, Gegenüber im Anschnitt | Kontakt, «Über uns», Themenlinie Führung, persönliche Beratung | sehr warm; eignet sich auch im Hochformat |
| 5 | Zwei Mitarbeitende schauen gemeinsam auf Unterlagen, Plum-Vorhang | **Performance-Analyse** (Bildband im Entwurf), Angebote mit Analyse oder Auswertung | Plum im Hintergrund passt zur CI |
| 6 | Drei Personen am Tisch, einer notiert am Tablet | «So arbeiten wir» (Phase Analysieren/Verstehen), Beratungsangebote | links ein Plakat im Bild, siehe unten |
| 7 | Mitarbeiter mit langen Haaren vor Plakat | Team-Porträt, «Über uns» | Plakat dominiert den Hintergrund |
| 8 | Zwei Mitarbeitende im Gespräch mit einer Frau (von hinten) | Coaching, persönliche Beratung, Führung | Plakat im Hintergrund |

**Plakat im Hintergrund (Fotos 6–8):** Das Plakat in Plum zeigt Themen wie «Organisation · People · Space», «Wellbeing», «Vorprojekt · Detailplanung · Realisierung». Das sind Themen der Büro- und Arbeitsplatzgestaltung, nicht von ROWAPA; zudem ist ein Firmen-Signet zu sehen. Diese Fotos nur so anschneiden, dass das Plakat nicht lesbar ist, oder nach Freigabe des Plakat-Inhabers verwenden. [ROWAPA bestätigen]

**Einverständnis:** Es sind eigene Leute aus einem Fototermin. Ich gehe davon aus, dass die Abgebildeten der Veröffentlichung zugestimmt haben. [ROWAPA bestätigen]

**Zugriff auf den Foto-Ordner:**
- Der Pfad `C:\Users\…\ROWAPA AG - Marketing\Foto und Video Termine ZH 2025` liegt auf deinem Windows-Computer bzw. in SharePoint. Aus der Cloud kann ich darauf nicht zugreifen. Die Verbindung zu einem Ordner auf dem eigenen Computer geht nur mit Mac oder Linux.
- Möglich sind:
  - (a) eine Auswahl hier im Chat hochladen, wie jetzt;
  - (b) den Ordner oder eine Auswahl in Google Drive kopieren und mir den Ordnernamen nennen (Google Drive ist hier verbunden).
- Für grosse Bildbänder ideal: Originale mit mindestens 2400 px Breite. Die heutigen Fotos haben 2000 px, das reicht für Bildbänder bis etwa 1440 px Bildschirmbreite.

## Prüfsession 13 (Entscheid 378)

| Bereich | Punkt | Ergebnis |
|---|---|---|
| A CI | Farben, Bildsprache | ✓ Foto mit Plum-Ton, keine neuen Farben; schwarze Schattenfläche nur während des Seitenwechsels (seit Runde 75 bekannt, keine Einwände) |
| B Texte | keine erfundenen Fakten | ✓ kein Bildtext; Alt-Text beschreibt nur, was zu sehen ist; Einverständnis und Plakat als [ROWAPA bestätigen] markiert |
| B Texte | Personenfotos | ✓ nur eigene Leute, Fotos nicht im Repo, ohne Metadaten hochgeladen |
| C Bauweise | eigener Code nur, wo nötig | ✓ Seitenwechsel als kleines Kopf-Skript (Webflow kann keine Seitenübergänge); Bildband und Titel nativ; Methoden im bestehenden Grafik-Modul |
| C Bauweise | «Bewegung reduzieren» | ✓ kein Seitenwechsel, Methoden offen, Bild ohne Bewegung |
| D Abmachungen | Entscheide 389–391 | ✓ Megamenü normal, Navigation beim Scrollen, Seitenwechsel sanft, Methoden aufklappbar, Titel wortweise auf der Performance-Analyse |
| E Ablauf | erst als Entwurf | ✓ Bildband nur auf der Entwurfsseite; übernommen wurde nur, was ROWAPA freigegeben hat |
| E Ablauf | Veröffentlichen, Löschen | ✓ nur Testadresse; gelöscht nur die Entwurfs-Leiste und das Entwurfs-Skript des Seitenwechsels (durch die Wahl erledigt) |

## Fragen an ROWAPA

1. Bildband mit Foto 5 nach «Fünf Perspektiven» auf die echte Performance-Analyse übernehmen?
2. Wortweise Titel auch auf anderen Unterseiten (z. B. Themenlinien) oder nur auf der Performance-Analyse?
3. Fotos: Einverständnis bestätigen; Plakat in den Fotos 6–8 anschneiden oder Freigabe einholen?
4. Repository: anlegen und der Claude-App Zugriff geben (Schritte oben)?
5. Weitere Fotos: hier hochladen oder über Google Drive?
