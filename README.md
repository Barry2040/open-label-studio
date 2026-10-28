<p align="center">
  <img src="docs/banner.svg" alt="Label Studio – Etiketten gestalten und drucken" width="100%">
</p>

<p align="center">
  <b>Eine eigene Etiketten-App für den Phomemo M220 – am PC und am Handy, direkt im Browser.</b><br>
  Keine Installation, alles in einer einzigen HTML-Datei.
</p>

<p align="center">
  <a href="https://open-label-studio.netlify.app"><b>▶ App öffnen: open-label-studio.netlify.app</b></a>
</p>

---

## ✨ Funktionen

| | |
|---|---|
| 🖊️ **Gestalten** | Text, QR-Code, Barcode, Bild, Rahmen und Linie – verschieben, skalieren und um 90° drehen |
| 🗂️ **Ebenen** | Alle Elemente als Liste wie in Photoshop: auswählen, ausblenden, sperren, umsortieren, umbenennen |
| 📐 **Präzise** | Lineal in mm, zuschaltbares Raster (1/2/5 mm) mit Einrasten, Rückgängig/Wiederholen (Strg+Z/Y) |
| 📥 **Importieren** | Fertige Etiketten als PNG, SVG oder PDF, z. B. von [3dfilamentprofiles.com](https://3dfilamentprofiles.com) |
| 🔢 **Platzhalter** | `{datum}`, `{zeit}` und `{nr}` – die Nummer zählt bei mehreren Kopien hoch |
| 💾 **Vorlagen & Sicherung** | Vorlagen speichern; Export/Import überträgt Vorlagen, Rollen, Einstellungen und Fensteranordnung auf andere Geräte |
| 🔗 **Teilen** | Etikett per Link oder QR-Code aufs Handy holen – einfach scannen |
| 🧻 **Rollen** | Profile je Etikettenrolle: Größe, Papierformat und Versatz mit einem Klick |
| 🖨️ **Drucken** | Über den Windows-Treiber per USB oder direkt per Bluetooth, Versatz in X und Y einstellbar |
| 🔋 **Druckerstatus** | Akku, Papier und Deckel werden per Bluetooth angezeigt, mit Warnung vor dem Druck |
| 🧩 **Arbeitsfläche** | Fenster frei anordnen und in der Breite ziehen, mit Einrasten an Kanten |
| ❓ **Hilfe** | Anleitung, Treiber-Infos und Fehlerbehebung im Menü **„Label Studio“** oben links |

## 🚀 Loslegen

**Online:** [open-label-studio.netlify.app](https://open-label-studio.netlify.app) in **Chrome** oder **Edge** öffnen – am PC wie am Handy.

**Offline:** [`label-studio/label-studio.html`](label-studio/label-studio.html) herunterladen und im Browser öffnen.

Dann Etikettengröße wählen, gestalten, drucken.

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

| Modell | Druckbreite | Rolle | Bluetooth |
|---|---|---|---|
| Phomemo M220 | 72 mm | rechts | ✅ getestet (Android) |
| Phomemo M221 | 72 mm | mittig | ungetestet |
| Phomemo M200 | 76 mm | mittig | ungetestet |
| Phomemo M110 / M120 | 48 mm | mittig | ungetestet |
| Phomemo M110S | 48 mm | rechts | ungetestet |
| Marklife P15 (auch P7, P12, LP15 …) | 12–15 mm | quer | ungetestet |

> [!TIP]
> ✅ **Getestet mit Phomemo M220 + Android (Chrome):** Verbinden und Drucken per Bluetooth funktionieren – einfach [open-label-studio.netlify.app](https://open-label-studio.netlify.app) am Handy öffnen.

> [!NOTE]
> Unter Windows scheitert die Bluetooth-Kopplung mit dem M220 – am PC deshalb per USB drucken. Die übrigen Phomemo-Modelle sind nach dem Open-Source-Projekt [phomymo](https://github.com/transcriptionstream/phomymo) eingestellt, der **Marklife P15** nach [thermoprint](https://github.com/tomLadder/thermoprint) von tomLadder (MIT-Lizenz) – beide noch nicht selbst getestet. Der P15 wird beim Verbinden automatisch erkannt; seine schmalen Etiketten (z. B. 40 × 12 mm) gestaltest du einfach im Querformat, die App dreht das Bild selbst.

## 🖨️ Dein Drucker fehlt?

In der App im Menü **„Label Studio“ → „Drucker vorschlagen …“** Hersteller, Modell und Bluetooth-Namen schicken. Wer vorher „Verbinden“ ausprobiert, schickt die Bluetooth-Diagnose gleich mit – das hilft beim Einbauen.

## 🔒 Datenschutz

Die Datei enthält keine persönlichen Daten. Etiketten, Vorlagen und Einstellungen speichert die App **nur im Browser** des jeweiligen Geräts – sie landen weder in der Datei noch auf GitHub.

## 🌐 Online

Die App läuft unter **[open-label-studio.netlify.app](https://open-label-studio.netlify.app)**. Netlify veröffentlicht jede Änderung auf GitHub automatisch – die Einstellungen stehen in `netlify.toml`.
