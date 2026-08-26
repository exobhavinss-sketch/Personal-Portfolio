import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { portfolioData } from '../../data/portfolioData'

export const Footer: React.FC = () => {
  const { personal } = portfolioData
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }
      setCurrentTime(new Intl.DateTimeFormat('en-IN', options).format(new Date()))
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-16 px-4 sm:px-6 border-t border-black/10 dark:border-white/10 bg-black/5 dark:bg-[#0A0A0B]/80 relative text-left">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#2997FF] to-[#9E53E8] flex items-center justify-center text-white font-bold text-xs">
                BS
              </div>
              <h4 className="text-base font-bold text-[#1D1D1F] dark:text-white">
                {personal.fullName}
              </h4>
            </div>
            <p className="text-xs text-[#86868B] dark:text-[#A1A1A6] max-w-sm">
              AI Engineer • Full-Stack Developer • 2nd Year B.Tech CSE (AIML) at MIT Vishwaprayag University.
            </p>
          </div>

          {/* Live IST Clock & Status */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs font-medium text-[#86868B] dark:text-[#A1A1A6]">
              <span className="w-2 h-2 rounded-full bg-[#30D158]" />
              <span>Solapur, IN: {currentTime || 'IST'}</span>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 text-xs font-semibold text-[#1D1D1F] dark:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#86868B]">
          <p>
            © {new Date().getFullYear()} {personal.fullName}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href={personal.resumePath}
              download={personal.resumeFileName}
              className="hover:text-[#1D1D1F] dark:hover:text-white transition-colors"
            >
              Resume (.DOCX)
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1D1D1F] dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={personal.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1D1D1F] dark:hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
