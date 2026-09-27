# Bhavin Shankur — Apple-Grade Personal Portfolio

> **Official Personal Portfolio Website** for Bhavin Shriniwas Shankur. Built with React 19, TypeScript, Tailwind CSS v4, Framer Motion, and Lenis Smooth Scrolling. Designed according to Apple Human Interface Design principles and optimized for GitHub Pages.

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

## 🛠️ Technical Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Motion & Physics**: [Framer Motion](https://www.framer.com/motion/) + [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: Custom SVG + [Lucide Icons](https://lucide.dev/)
- **Deployment**: [GitHub Pages](https://pages.github.com/) via GitHub Actions

---

## 📂 Project Architecture

```
G:\GPP\
├── public/
│   ├── resume/
│   │   └── Bhavin Shankur - Resume.docx   # Official resume download asset
│   ├── favicon.svg                        # Apple-style monogram
│   └── og-image.png
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx                 # Floating frosted glass island
│   │   │   └── Footer.tsx                 # Minimalist Apple footer
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx            # Keynote headline & CTAs
│   │   │   ├── AboutSection.tsx           # Storytelling & milestones
│   │   │   ├── ProjectsSection.tsx        # Product cards & filters
│   │   │   ├── ProjectCard.tsx            # Keynote hardware card
│   │   │   ├── SkillsBentoSection.tsx     # Interactive Bento grid
│   │   │   ├── CertificationsSection.tsx  # Credential gallery
│   │   │   ├── LeadershipSection.tsx      # Samved Hackathon showcase
│   │   │   ├── EducationSection.tsx       # Academic timeline
│   │   │   ├── GitHubStatsSection.tsx     # Public open-source spotlight
│   │   │   └── ContactSection.tsx         # 1-click email copy & form
│   │   ├── ui/
│   │   │   ├── AppleButton.tsx            # Magnetic spring button
│   │   │   ├── ResumeDownloadButton.tsx   # Mandatory DOCX download button
│   │   │   ├── SectionHeader.tsx          # Keynote typography header
│   │   │   ├── ThemeToggle.tsx            # Fluid sun/moon switcher
│   │   │   ├── Icons.tsx                  # GitHub & LinkedIn SVGs
│   │   │   └── AmbientCanvas.tsx          # GPU ambient particle mesh
│   │   └── modals/
│   │       └── ProjectModal.tsx           # Deep architecture inspection
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
├── .github/
│   └── workflows/
│       └── deploy.yml                     # Automated GitHub Pages CI/CD
├── index.html
├── package.json
└── vite.config.ts
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

4. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## 🚢 GitHub Pages Deployment

The repository includes a ready-to-use GitHub Actions workflow (`.github/workflows/deploy.yml`).

To deploy:
1. Push this codebase to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: Apple-grade personal portfolio website"
   git branch -M main
   git remote add origin https://github.com/exobhavinss-sketch/<repo-name>.git
   git push -u origin main
   ```
2. In your GitHub repository settings, go to **Settings > Pages > Source** and choose **GitHub Actions**.
3. The site will automatically build and deploy to `https://exobhavinss-sketch.github.io/<repo-name>/`.
