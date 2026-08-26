import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { ThemeToggle } from '../ui/ThemeToggle'
import { ResumeDownloadButton } from '../ui/ResumeDownloadButton'
import { GithubIcon } from '../ui/Icons'
import { Theme } from '../../hooks/useTheme'
import { portfolioData } from '../../data/portfolioData'

interface NavbarProps {
  theme: Theme
  toggleTheme: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Contact', href: '#contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navLinks.map(l => l.href.substring(1))
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 200) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <nav
          className={`pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 px-4 sm:px-6 py-2.5 rounded-full transition-all duration-400 ${
            scrolled
              ? 'apple-glass shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] border-white/20 dark:border-white/10'
              : 'bg-white/60 dark:bg-[#161617]/60 backdrop-blur-lg border border-black/5 dark:border-white/10'
          }`}
        >
          {/* Logo / Monogram */}
          <a
            href="#"
            className="flex items-center gap-2 group text-left focus:outline-none"
            aria-label="Bhavin Shankur Portfolio Home"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#2997FF] to-[#9E53E8] flex items-center justify-center text-white font-bold text-xs tracking-tight shadow-sm group-hover:scale-105 transition-transform duration-200">
              BS
            </div>
            <span className="hidden md:inline-block font-semibold text-sm tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] group-hover:text-[#0071E3] dark:group-hover:text-[#2997FF] transition-colors">
              Bhavin Shankur
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-black/5 dark:bg-white/15 text-[#0071E3] dark:text-[#2997FF] font-semibold'
                      : 'text-[#86868B] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
          </div>

          {/* Actions: Resume Download + GitHub + Theme Toggle + Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <ResumeDownloadButton variant="nav" />

            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 text-[#1D1D1F] dark:text-[#F5F5F7] border border-black/10 dark:border-white/15 transition-colors"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 text-[#1D1D1F] dark:text-white cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-50 p-6 rounded-3xl apple-glass dark:bg-[#161617]/95 border border-white/20 dark:border-white/10 shadow-2xl lg:hidden max-w-sm mx-auto"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 text-base font-medium rounded-2xl text-[#1D1D1F] dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#86868B]" />
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-black/10 dark:border-white/10 flex flex-col gap-3">
                <a
                  href={portfolioData.personal.resumePath}
                  download={portfolioData.personal.resumeFileName}
                  className="flex items-center justify-center gap-2 py-3 rounded-full bg-[#0071E3] dark:bg-white text-white dark:text-black font-semibold text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Download Resume (.DOCX)
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
