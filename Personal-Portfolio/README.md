# Bhavin Shankur — Apple-Grade Personal Portfolio

<div align="center">

[![GitHub Pages Deployment](https://github.com/exobhavinss-sketch/Personal-Portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/exobhavinss-sketch/Personal-Portfolio/actions/workflows/deploy.yml)
[![CI Pipeline](https://github.com/exobhavinss-sketch/Personal-Portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/exobhavinss-sketch/Personal-Portfolio/actions/workflows/ci.yml)
[![Vercel Ready](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel)](https://vercel.com)
[![Netlify Ready](https://img.shields.io/badge/Netlify-Deployed-00C7B7?logo=netlify&logoColor=white)](https://netlify.com)
[![Render Ready](https://img.shields.io/badge/Render-Deployed-46E3B7?logo=render&logoColor=white)](https://render.com)
[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<p align="center">
  <b>Official Personal Portfolio Website</b> for Bhavin Shankur.<br/>
  Engineered with React 19, TypeScript, Tailwind CSS v4, Framer Motion, and Lenis Smooth Scrolling.<br/>
  Crafted in alignment with Apple Human Interface Design principles and optimized for <b>GitHub Pages</b>, <b>Vercel</b>, <b>Netlify</b>, and <b>Render</b>.
</p>

### 🚀 1-Click Deployments

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/exobhavinss-sketch/Personal-Portfolio)
&nbsp;
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/exobhavinss-sketch/Personal-Portfolio)
&nbsp;
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/exobhavinss-sketch/Personal-Portfolio)

</div>

---

## 🌟 Visual & Design Philosophy

- **Apple Keynote Aesthetic**: Clean minimalism, generous negative space, refined typography (SF Pro / Inter), and fluid motion.
- **Single Source of Truth**: All education, project architectures, technical competencies, certifications, and leadership milestones are strictly sourced from Bhavin's verified academic and project records.
- **Local AI & Privacy First**: Highlights offline-first AI architectures using Ollama, FAISS, and LangChain without external cloud APIs or fees.
- **Mandatory Resume Download**: Built-in Apple capsule button linking directly to `./resume/Bhavin Shankur - Resume.docx` with native HTML5 `download` attribute.
- **System-Aware Theme Engine**: Seamless transition between Apple Space Black Dark Mode and Pro Studio Light Mode.
- **60 FPS Inertial Physics**: Lenis smooth scrolling with Framer Motion spring physics.

---

## 🚀 Flagship Projects Featured

1. **[Book RAG Chatbot](https://github.com/exobhavinss-sketch/Artifical-Intelligence-Chatbot)**: Fully local RAG chatbot querying AI strategy literature with Ollama, FAISS, ChromaDB, Sentence Transformers, and Streamlit.
2. **[Our Earth — The Living Planet](https://github.com/exobhavinss-sketch/Our-Earth)**: Cinematic 3D educational web platform with procedural GLSL shaders, Three.js / React Three Fiber, GSAP ScrollTrigger, and real-time $CO_2$ climate visualization.
3. **[GitHub Mentor AI](https://github.com/exobhavinss-sketch/GitHub-Mentor-AI)**: Real-time AI developer mentor backend with FastAPI, FAISS semantic retrieval, document chunking, and streaming SSE tokens.
4. **[AI Pathfinder Buddy](https://github.com/exobhavinss-sketch/ai-pathfinder-buddy-18)**: Open-source educational guide mentoring newcomers in artificial intelligence and machine learning.

---

## 🛠️ Technical Stack & Platform Optimizations

- **Framework**: [React 19](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Language**: [TypeScript 5.7](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Motion & Physics**: [Framer Motion](https://www.framer.com/motion/) + [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: Custom SVG + [Lucide Icons](https://lucide.dev/)
- **Multi-Cloud Deployment Support**:
  - 🌐 **GitHub Pages**: Automated deployment via GitHub Actions (`.github/workflows/deploy.yml`)
  - ▲ **Vercel**: Edge-cached SPA routing and security headers via `vercel.json`
  - 🔷 **Netlify**: Zero-config static hosting with redirects and immutable asset headers via `netlify.toml` and `_redirects`
  - 🟣 **Render**: Declarative infrastructure blueprint via `render.yaml`
  - ⚡ **Vite Rollup Chunk Splitting**: Modular vendor chunks (`react`, `framer-motion`, `lenis`, `lucide-react`) for maximum CDN cache hit ratios
  - 🔍 **SEO & Social Optimization**: Pre-rendered `sitemap.xml`, `robots.txt`, `site.webmanifest`, and 1200x630 Apple Keynote OpenGraph banner

---

## 📂 Project Architecture

```
Personal-Portfolio/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.yml                 # Structured issue template
│   │   └── feature_request.yml            # Feature request template
│   ├── workflows/
│   │   ├── deploy.yml                     # Automated GitHub Pages CI/CD
│   │   └── ci.yml                         # Automated PR & build verification
│   ├── dependabot.yml                     # Dependency security scanner
│   └── PULL_REQUEST_TEMPLATE.md
├── public/
│   ├── resume/
│   │   └── Bhavin Shankur - Resume.docx   # Official resume download asset
│   ├── _headers                           # Netlify security & cache headers
│   ├── _redirects                         # Netlify SPA rewrite rules
│   ├── favicon.svg                        # Apple-style monogram
│   ├── og-image.png                       # 1200x630 social preview card
│   ├── robots.txt                         # Search engine crawler directives
│   ├── site.webmanifest                   # PWA & mobile installation metadata
│   └── sitemap.xml                        # Search engine indexing map
├── src/
│   ├── components/
│   │   ├── layout/                        # Navbar, Footer
│   │   ├── sections/                      # Hero, About, Projects, Skills, etc.
│   │   ├── ui/                            # Buttons, AmbientCanvas, ThemeToggle
│   │   └── modals/                        # Project inspection modal
│   ├── data/
│   │   └── portfolioData.ts               # Single source of truth from resume
│   ├── hooks/
│   │   └── useTheme.ts                    # Dark/Light mode hook
│   ├── lib/
│   │   └── utils.ts
│   ├── types/
│   │   └── portfolio.ts                   # Strict TypeScript schemas
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .gitignore                             # Clean multi-environment ignore rules
├── index.html                             # Enriched SEO & OpenGraph meta tags
├── netlify.toml                           # Netlify build & rewrite configuration
├── package.json
├── render.yaml                            # Render Blueprint infrastructure spec
├── vercel.json                            # Vercel SPA rewrite & header config
└── vite.config.ts                         # Optimized Vite configuration
```

---

## 💻 Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## 🚢 Multi-Platform Deployment Guides

### 1. GitHub Pages (Automated CI/CD)
The repository includes a ready-to-use GitHub Actions workflow (`.github/workflows/deploy.yml`).
1. Push your changes to the repository:
   ```bash
   git add .
   git commit -m "feat: multi-platform deployment optimizations"
   git push origin main
   ```
2. In your GitHub repository:
   - Go to **Settings > Pages**.
   - Under **Build and deployment > Source**, select **GitHub Actions**.
3. Every push to `main` will automatically build and publish the latest version to GitHub Pages.

---

### 2. Vercel
1. Import the repository into [Vercel](https://vercel.com/new).
2. Vercel will automatically detect Vite from `vercel.json` with settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Click **Deploy**. Vercel will deploy to its global Edge Network with instant SPA rewrites and asset caching.

---

### 3. Netlify
1. Connect the repository at [Netlify](https://app.netlify.com/start).
2. Netlify automatically reads `netlify.toml`:
   - **Build Command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node Version**: `20`
3. Click **Deploy Site**. SPA rewrite rules (`_redirects`) and immutable asset caching (`_headers`) are active out of the box.

---

### 4. Render
1. Open the [Render Dashboard](https://dashboard.render.com/).
2. Click **New +** > **Blueprint**.
3. Connect your repository. Render automatically reads `render.yaml` and provisions:
   - **Service Type**: Static Site
   - **Build Command**: `npm run build`
   - **Publish Directory**: `./dist`
   - **Routes**: Automatic rewrite `/* -> /index.html`
4. Click **Apply** to deploy your portfolio.

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
