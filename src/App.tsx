import { useEffect } from 'react'
import Lenis from 'lenis'
import { useTheme } from './hooks/useTheme'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { AmbientCanvas } from './components/ui/AmbientCanvas'
import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { SkillsBentoSection } from './components/sections/SkillsBentoSection'
import { CertificationsSection } from './components/sections/CertificationsSection'
import { LeadershipSection } from './components/sections/LeadershipSection'
import { EducationSection } from './components/sections/EducationSection'
import { GitHubStatsSection } from './components/sections/GitHubStatsSection'
import { ContactSection } from './components/sections/ContactSection'

export function App() {
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-white dark:bg-black text-[#1D1D1F] dark:text-[#F5F5F7] transition-colors duration-300 font-sans selection:bg-[#0071E3]/25 selection:text-[#0071E3] dark:selection:text-[#2997FF]">
      {/* Background Ambient Glowing Canvas */}
      <AmbientCanvas />

      {/* Navigation Island */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Keynote Content Stream */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsBentoSection />
        <CertificationsSection />
        <LeadershipSection />
        <EducationSection />
        <GitHubStatsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
