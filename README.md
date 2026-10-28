<p align="center">
  <img src="docs/banner.svg" alt="Label Studio – Etiketten gestalten und drucken" width="100%">
</p>

<p align="center">
  <b>Eine eigene Etiketten-App für den Phomemo M220 – am PC und am Handy, direkt im Browser.</b><br>
  Keine Installation, keine Anmeldung, alles in einer einzigen HTML-Datei.
</p>

---

## ✨ Funktionen

| | |
|---|---|
| 🖊️ **Gestalten** | Text, QR-Code, Barcode, Bild, Rahmen und Linie – frei verschieben und skalieren |
| 📥 **Importieren** | Fertige Etiketten als PNG, SVG oder PDF, z. B. von [3dfilamentprofiles.com](https://3dfilamentprofiles.com) |
| 🔢 **Platzhalter** | `{datum}`, `{zeit}` und `{nr}` – die Nummer zählt bei mehreren Kopien hoch |
| 💾 **Vorlagen** | Speichern, laden, als Datei exportieren und auf andere Geräte übertragen |
| 🖨️ **Drucken** | Über den Windows-Treiber per USB oder direkt per Bluetooth |
| 🧩 **Arbeitsfläche** | Fenster frei anordnen und in der Breite ziehen, mit Einrasten an Kanten |
| ❓ **Hilfe** | Anleitung, Treiber-Infos und Fehlerbehebung im Menü **„Label Studio“** oben links |

## 🚀 Loslegen

1. [`label-studio/label-studio.html`](label-studio/label-studio.html) herunterladen.
2. In **Chrome** oder **Edge** öffnen.
3. Etikettengröße wählen, gestalten, drucken.

## 🖨️ Drucken am PC (USB)

1. Den Windows-Treiber für dein Modell von [phomemo.com](https://phomemo.com) installieren und den Drucker per USB anschließen.
2. In der App **„Über Windows-Drucker drucken (USB)“** klicken.
3. Im Druckfenster einstellen:

   | Einstellung | Wert |
   |---|---|
   | Ziel | dein Phomemo-Drucker |
   | Papierformat | wie in der App (M220: 50 × 30 mm) |
   | Ränder | Keine |
   | Skalierung | 100 |

> [!TIP]
> Der M220-Treiber kennt nur 50 × 30 und 50 × 70 mm. Kleinere Etiketten (z. B. 40 × 30) setzt die App automatisch mittig auf die Seite.

## 📶 Bluetooth

Funktioniert in **Chrome/Edge** am PC, **Chrome** auf Android und mit der App **Bluefy** auf dem iPhone – am Handy nur, wenn die App über `https` läuft.

| Modell | Druckbreite | Rolle |
|---|---|---|
| Phomemo M220 | 72 mm | rechts |
| Phomemo M221 | 72 mm | mittig |
| Phomemo M200 | 76 mm | mittig |
| Phomemo M110 / M120 | 48 mm | mittig |
| Phomemo M110S | 48 mm | rechts |

> [!NOTE]
> Die Bluetooth-Befehle stammen aus dem Open-Source-Projekt [phomymo](https://github.com/transcriptionstream/phomymo) und sind noch nicht an einem echten Gerät getestet. Per USB funktioniert der Druck auf dem M220.

## 🔒 Datenschutz

Die Datei enthält keine persönlichen Daten. Etiketten, Vorlagen und Einstellungen speichert die App **nur im Browser** des jeweiligen Geräts – sie landen weder in der Datei noch auf GitHub.

## 🌐 Online stellen

Die Datei `netlify.toml` ist schon vorbereitet: Repository bei [Netlify](https://netlify.com) importieren, fertig. Die Startadresse öffnet direkt die App, und jede Änderung auf GitHub wird automatisch veröffentlicht.
