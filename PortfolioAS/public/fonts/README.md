# Font-Dateien

Dieses Verzeichnis sollte die Inter Font-Dateien im woff2-Format enthalten.

## Font-Dateien herunterladen

Die Font-Dateien können von Google Fonts heruntergeladen werden:

1. Besuchen Sie: https://fonts.google.com/specimen/Inter
2. Klicken Sie auf "Download family"
3. Extrahieren Sie die Dateien
4. Konvertieren Sie die .ttf Dateien zu .woff2 Format (z.B. mit https://cloudconvert.com/ttf-to-woff2)
5. Benennen Sie die Dateien wie folgt:
   - `inter-latin-300-normal.woff2` (Light)
   - `inter-latin-400-normal.woff2` (Regular)
   - `inter-latin-500-normal.woff2` (Medium)
   - `inter-latin-600-normal.woff2` (Semi Bold)
   - `inter-latin-700-normal.woff2` (Bold)
   - `inter-latin-800-normal.woff2` (Extra Bold)
   - `inter-latin-900-normal.woff2` (Black)

## Alternative: Direkter Download

Sie können die Fonts auch direkt von Google Fonts API herunterladen:

```bash
# Beispiel für Weight 400
curl "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2" -o inter-latin-400-normal.woff2
```

**Hinweis:** Die URLs ändern sich regelmäßig. Bitte verwenden Sie die aktuellen URLs von Google Fonts.

## Automatisches Download-Skript

Ein Skript zum automatischen Herunterladen der Fonts kann erstellt werden, falls gewünscht.

