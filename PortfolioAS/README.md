# Portfolio AS

Eine moderne Portfolio-Webseite im Stil von SendPotion, erstellt mit React, TypeScript und Framer Motion.

## Features

- 🎨 **Modernes Design** - Inspiriert von SendPotion mit Glassmorphism-Effekten
- 🖱️ **Custom Cursor** - Interaktiver Cursor-Tracker mit Delay-Effekt
- ✨ **Scroll-Animationen** - Dynamische Animationen beim Scrollen
- 📱 **Responsive Design** - Optimiert für Mobile, Tablet und Desktop
- 🎯 **Interaktive Elemente** - Hover-Effekte und 3D-Transformationen
- 🚀 **Vercel Ready** - Vorbereitet für Deployment auf Vercel

## Tech Stack

- **React 18** mit TypeScript
- **Vite** - Schneller Build-Tool
- **Framer Motion** - Animationen
- **Tailwind CSS** - Styling
- **React Icons** - Icons

## Installation

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Production Build erstellen
npm run build

# Preview Production Build
npm run preview
```

## Projektstruktur

```
PortfolioAS/
├── src/
│   ├── components/      # React Komponenten
│   ├── hooks/           # Custom Hooks
│   ├── data/            # Datenstrukturen
│   └── styles/          # Globale Styles
├── public/              # Statische Assets
└── vercel.json          # Vercel Deployment Config
```

## Sektionen

- **Hero** - Hauptbereich mit animiertem Text
- **Projekte** - Portfolio-Projekte mit YouTube-Links
- **Bildung** - Bildungsweg und Qualifikationen
- **ASAIS Group** - Firmeninformationen
- **Kontakt** - Footer mit Social Links

## Daten anpassen

Die Platzhalter-Daten können in folgenden Dateien angepasst werden:

- `src/data/projects.ts` - Projekte
- `src/data/education.ts` - Bildung
- `src/data/asaisGroup.ts` - ASAIS Group Informationen

## Deployment auf Vercel

### Voraussetzungen
- GitHub Account
- Vercel Account (kostenlos auf [vercel.com](https://vercel.com))

### Schritt-für-Schritt Anleitung

1. **Projekt auf GitHub pushen**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <dein-github-repo-url>
   git push -u origin main
   ```

2. **Vercel Account erstellen**
   - Gehe zu [vercel.com](https://vercel.com)
   - Melde dich mit deinem GitHub-Account an

3. **Neues Projekt erstellen**
   - Klicke auf "New Project"
   - Wähle dein GitHub-Repository aus
   - Vercel erkennt automatisch Vite und die `vercel.json` Konfiguration

4. **Deployment starten**
   - Klicke auf "Deploy"
   - Vercel baut und deployed automatisch dein Projekt
   - Nach erfolgreichem Build erhältst du eine URL (z.B. `portfolio-as.vercel.app`)

5. **Custom Domain hinzufügen (optional)**
   - Gehe zu Project Settings → Domains
   - Füge deine Domain hinzu und folge den DNS-Anweisungen

### Automatische Deployments
- Jeder Push zu `main` Branch deployed automatisch
- Pull Requests erstellen Preview-Deployments
- Alle Deployments haben automatisch HTTPS

### Build-Informationen
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: Automatisch erkannt (empfohlen: 18.x oder höher)

## Anpassungen

### Farben
Farben können in `tailwind.config.js` angepasst werden.

### Animationen
Animationen werden mit Framer Motion gesteuert und können in den jeweiligen Komponenten angepasst werden.

### Cursor
Der Custom Cursor wird automatisch auf Touch-Geräten deaktiviert.

## Browser Support

- Chrome (neueste Version)
- Firefox (neueste Version)
- Safari (neueste Version)
- Edge (neueste Version)

## License

Alle Rechte vorbehalten.
