# Dimitris Antoniou Portfolio

🚀 Modern, animated portfolio website built with React + Vite

## Features

- ✨ Typing animation effect
- 🎯 Animated skill bars with intersection observer
- 🌌 Interactive particle background
- 📱 Fully responsive design
- 🎨 Dark techy theme with glowing effects
- ⚡ Fast loading with Vite

## Quick Start (Local Development)

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# 1. Navigate to project folder
cd portfolio-project

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The site will open at `http://localhost:5173`

## Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized files.

## Deploy to GitHub Pages

### Option 1: Manual Deploy

1. Create repository `your-username.github.io` on GitHub
2. Build the project: `npm run build`
3. Push the `dist` folder contents to the repo

### Option 2: GitHub Actions (Automated)

1. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          
      - name: Install & Build
        run: |
          npm install
          npm run build
          
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. In repo Settings → Pages, set source to `gh-pages` branch

## Project Structure

```
portfolio-project/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx          # Main portfolio component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Customization

### Update Personal Info
Edit `src/App.jsx` and update:
- Name and title
- Skills and levels
- Experience entries
- Contact links

### Change Colors
Main colors defined in `src/App.jsx`:
- Primary: `#00ffaa` (cyan-green)
- Secondary: `#00d4ff` (cyan-blue)
- Accent: `#a855f7` (purple)
- Background: `#0a0a14` (dark)

## License

MIT - Feel free to use for your own portfolio!
