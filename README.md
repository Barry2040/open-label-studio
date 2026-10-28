# Label Studio

Eigene Web-App zum Gestalten und Drucken von Etiketten auf dem **Phomemo M220** – am PC und am Handy.
Alles steckt in einer einzigen Datei: [`label-studio/index.html`](label-studio/index.html).

## Starten

`label-studio/index.html` in **Chrome** oder **Edge** öffnen. Eine Installation ist nicht nötig.

## Funktionen

- Etiketten frei gestalten: Text, QR-Code, Barcode, Bild, Rahmen, Linie
- Fertige Etiketten importieren (PNG, SVG, PDF – z. B. von 3dfilamentprofiles.com)
- Platzhalter `{datum}`, `{zeit}`, `{nr}` (zählt bei mehreren Kopien hoch)
- Vorlagen speichern, exportieren und importieren
- Druck über den **Windows-Treiber per USB** oder direkt per **Bluetooth**
- Fenster frei anordnen, mit Einrasten und anpassbarer Breite
- Anleitung direkt in der App: Menü **„Label Studio ▾“** oben links

## Drucken am PC (USB)

1. Phomemo-Treiber für das Modell von phomemo.com installieren, Drucker per USB anschließen.
2. In der App **„Über Windows-Drucker drucken (USB)“** wählen.
3. Im Druckfenster: Papierformat wie in der App (M220: 50 × 30 mm), Ränder „Keine“, Skalierung 100.

## Bluetooth

Funktioniert in Chrome/Edge am PC, Chrome auf Android und Bluefy auf dem iPhone (über https).
Unterstützte Modelle: Phomemo M220, M221, M200, M110/M120, M110S.
Die Bluetooth-Befehle stammen aus dem Open-Source-Projekt [phomymo](https://github.com/transcriptionstream/phomymo)
und sind noch nicht an einem echten Gerät getestet.
