# Zulfiqar Ali Chandio — Portfolio Website

> Premium modern portfolio for a Senior Mobile Engineer (Android | iOS | Cross-Platform)

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38BDF8?logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?logo=framer)](https://www.framer.com/motion/)

---

## ✨ Features

- **Premium Apple-level UI/UX** — Dark glassmorphism design with smooth animations
- **Animated Hero** — Particle background, typing effect, floating UI cards
- **Interactive Sections** — About, Skills, Experience Timeline, Projects, Services, Testimonials, Contact
- **Dark/Light Mode** — Persistent theme toggle
- **Scroll-triggered Animations** — Framer Motion viewport animations throughout
- **Animated Counters** — Stats that count up when scrolled into view
- **Project Filter** — Filter by Government, Fintech, Consumer, Enterprise
- **Testimonial Slider** — Auto-rotating with manual controls
- **Contact Form** — With animated send state
- **SEO Optimized** — Meta tags, Open Graph, Twitter Card, canonical URL
- **Mobile-first Responsive** — Works perfectly on all screen sizes
- **Loading Screen** — Branded animated loading experience

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/zulfiqarchandio/portfolio.git
cd zulfiqar-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
zulfiqar-portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          ← Add your resume here
├── src/
│   ├── assets/             ← Images and static assets
│   ├── components/
│   │   ├── sections/       ← Page sections
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   └── ui/             ← Reusable UI components
│   │       ├── LoadingScreen.jsx
│   │       ├── ParticleBackground.jsx
│   │       └── SectionWrapper.jsx
│   ├── data/
│   │   └── index.js        ← All portfolio content/data
│   ├── hooks/
│   │   ├── useTheme.js
│   │   ├── useScrollSpy.js
│   │   └── useCounter.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html              ← SEO meta tags here
├── vite.config.js
├── package.json
└── README.md
```

---

## 🏗️ Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

Preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deploy to GitHub Pages

### Step 1 — Install gh-pages

```bash
npm install --save-dev gh-pages
```

### Step 2 — Update `package.json`

Add these scripts:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 3 — Update `vite.config.js`

Set the base to your repository name:

```js
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```

### Step 4 — Deploy

```bash
npm run deploy
```

This pushes the `dist/` folder to the `gh-pages` branch. GitHub Pages will serve from there.

### Step 5 — Enable GitHub Pages

1. Go to your repository on GitHub
2. Settings → Pages
3. Source: Deploy from branch → `gh-pages` → `/ (root)`
4. Save

Your site will be live at: `https://yourusername.github.io/your-repo-name/`

---

## 🔗 Custom Domain Setup

### Step 1 — Add CNAME file

Create `public/CNAME` with your domain:

```
zulfiqarchandio.dev
```

### Step 2 — DNS Configuration

At your domain registrar, add these DNS records:

**For apex domain (zulfiqarchandio.dev):**
```
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
```

**For www subdomain:**
```
CNAME   www   yourusername.github.io
```

### Step 3 — GitHub Settings

1. Repository → Settings → Pages
2. Custom domain: enter `zulfiqarchandio.dev`
3. Check "Enforce HTTPS" (after DNS propagates, ~24-48 hours)

### Step 4 — Update vite.config.js

Change base back to `/` when using a custom domain:

```js
base: '/',
```

---

## 🔍 SEO Optimization

### Update `index.html`

Replace placeholder values in `index.html`:

```html
<meta property="og:url" content="https://YOUR-ACTUAL-DOMAIN.com" />
<link rel="canonical" href="https://YOUR-ACTUAL-DOMAIN.com" />
```

### Add OG Image

Place a `1200×630px` image at `public/og-image.png`.

### Add Resume

Place your resume PDF at `public/resume.pdf`.

### Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your domain property
3. Verify ownership via DNS TXT record
4. Submit your sitemap: `https://yourdomain.com/sitemap.xml`

---

## 🎨 Customization

### Update Personal Info

Edit `src/data/index.js` — all content is centralized here:

```js
export const personalInfo = {
  name: 'Your Name',
  email: 'your@email.com',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
  whatsapp: 'https://wa.me/yourphonenumber',
};
```

### Update Colors

Edit `src/index.css` `@theme` block to change the color palette.

### Add Profile Photo

Replace the emoji placeholder in `About.jsx` with an `<img>` tag pointing to your photo in `src/assets/`.

---

## 📦 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| Vite | 8 | Build tool |
| Tailwind CSS | 4 | Styling |
| Framer Motion | 11 | Animations |
| React Icons | 5 | Icon library |

---

## 📄 License

MIT © Zulfiqar Ali Chandio
