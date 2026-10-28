<p align="center">
  <img src="docs/banner.svg" alt="Label Studio – Etiketten gestalten und drucken" width="100%">
</p>

<p align="center">
  <b>Eine eigene Etiketten-App für deinen Etikettendrucker – am PC und am Handy, direkt im Browser.</b><br>
  Keine Installation, alles in einer einzigen HTML-Datei.
</p>

<p align="center">
  <a href="https://barry2040.github.io/open-label-studio/"><b>▶ App öffnen: barry2040.github.io/open-label-studio</b></a>
</p>

> [!WARNING]
> **Vibe-coded:** Dieses Projekt ist mit KI-Unterstützung (Claude) im „Vibe Coding“ entstanden – also im Gespräch,
> Schritt für Schritt, ohne klassische Code-Reviews oder automatisierte Tests. Es kann daher **Fehler enthalten**.
> Getestet wurde nur das, was in den Tabellen unten als „getestet“ markiert ist. Nutzung auf eigene Gefahr –
> Fehler und Verbesserungen gerne als [Issue](https://github.com/Barry2040/open-label-studio/issues) melden.

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

**Online:** [barry2040.github.io/open-label-studio](https://barry2040.github.io/open-label-studio/) in **Chrome** oder **Edge** öffnen – am PC wie am Handy.

**Offline:** [`label-studio/label-studio.html`](label-studio/label-studio.html) herunterladen und im Browser öffnen.

Dann Etikettengröße wählen, gestalten, drucken.

## 🖨️ Drucken am PC (USB)

1. Den Windows-Treiber für dein Modell von [phomemo.com](https://phomemo.com) installieren und den Drucker per USB anschließen.
2. In der App **„Über Windows-Drucker drucken (USB)“** klicken.
3. Im Druckfenster einstellen:

   | Einstellung | Wert |
   |---|---|
   | Ziel | dein Etikettendrucker |
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
| Marklife P15 / P7 (auch LP15, S15 …) | 12–15 mm | quer | ✅ getestet (PC) |
| Marklife P12 (auch LP90, P11) | 12–15 mm | quer | ungetestet |
| Marklife M60 (auch X2) | bis 50 mm | quer | ungetestet |

> [!TIP]
> ✅ **Mit echten Geräten getestet:** **Phomemo M220** per Bluetooth mit Android (Chrome) und **Marklife P15** per Bluetooth am PC (Chrome/Edge unter Windows) – Verbinden und Drucken funktionieren. Einfach [barry2040.github.io/open-label-studio](https://barry2040.github.io/open-label-studio/) öffnen.

> [!NOTE]
> Unter Windows scheitert die Bluetooth-Kopplung mit dem M220 – dort per USB drucken. Die Phomemo-Modelle sind nach dem Open-Source-Projekt [phomymo](https://github.com/transcriptionstream/phomymo) eingestellt, die **Marklife**-Modelle nach [thermoprint](https://github.com/tomLadder/thermoprint) von tomLadder (MIT-Lizenz). Marklife-Drucker werden beim Verbinden automatisch erkannt; ihre Etiketten (z. B. 40 × 12 mm) gestaltest du einfach im Querformat, die App dreht das Bild selbst.

## 🖨️ Dein Drucker fehlt?

In der App im Menü **„Label Studio“ → „Drucker vorschlagen …“** – oder direkt hier: [**🖨️ Drucker vorschlagen**](https://github.com/Barry2040/open-label-studio/issues/new?template=drucker-wunsch.yml). Wer vorher „Verbinden“ ausprobiert, schickt die Bluetooth-Diagnose gleich mit – das hilft beim Einbauen. Dafür ist ein kostenloses GitHub-Konto nötig.

## 🔒 Datenschutz

Die Datei enthält keine persönlichen Daten. Etiketten, Vorlagen und Einstellungen speichert die App **nur im Browser** des jeweiligen Geräts – sie landen weder in der Datei noch auf GitHub.

## 🌐 Online

Die App läuft über **GitHub Pages** unter **[barry2040.github.io/open-label-studio](https://barry2040.github.io/open-label-studio/)**. Jede Änderung auf `main` wird automatisch veröffentlicht (Workflow `.github/workflows/pages.yml`).
