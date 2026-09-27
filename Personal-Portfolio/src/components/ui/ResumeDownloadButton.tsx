import React from 'react'
import { motion } from 'framer-motion'
import { FileDown, Sparkles } from 'lucide-react'
import { cn } from '../../lib/utils'

interface ResumeDownloadButtonProps {
  variant?: 'hero' | 'nav' | 'card' | 'compact'
  className?: string
  showBadge?: boolean
}

export const ResumeDownloadButton: React.FC<ResumeDownloadButtonProps> = ({
  variant = 'hero',
  className,
  showBadge = true
}) => {
  const resumeUrl = './resume/Bhavin Shankur - Resume.docx'
  const resumeFileName = 'Bhavin Shankur - Resume.docx'

  if (variant === 'nav') {
    return (
      <motion.a
        href={resumeUrl}
        download={resumeFileName}
        className={cn(
          'relative inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white dark:bg-[#2997FF] dark:text-black dark:hover:bg-[#43A4FF] shadow-sm transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0071E3]/50',
          className
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title="Download Official Resume (.DOCX)"
      >
        <FileDown className="w-3.5 h-3.5 stroke-[2.5]" />
        <span>Resume</span>
      </motion.a>
    )
  }

  if (variant === 'compact') {
    return (
      <motion.a
        href={resumeUrl}
        download={resumeFileName}
        className={cn(
          'inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 text-[#1D1D1F] dark:text-white border border-black/10 dark:border-white/15 transition-all duration-200 cursor-pointer',
          className
        )}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <FileDown className="w-4 h-4 text-[#0071E3] dark:text-[#2997FF]" />
        <span>Download Resume (.DOCX)</span>
      </motion.a>
    )
  }

  return (
    <motion.div
      className={cn('relative inline-block group', className)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
    >
      {/* Ambient Pulsing Glow on Hover */}
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#2997FF] via-[#9E53E8] to-[#FF375F] opacity-0 group-hover:opacity-60 blur-md transition-all duration-500 group-hover:duration-200 animate-apple-pulse" />

      <a
        href={resumeUrl}
        download={resumeFileName}
        className="relative flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold rounded-full bg-[#0071E3] text-white hover:bg-[#0077ED] dark:bg-white dark:text-black dark:hover:bg-[#E5E5EA] shadow-[0_8px_25px_rgba(0,113,227,0.35)] dark:shadow-[0_8px_30px_rgba(255,255,255,0.2)] transition-all duration-300 cursor-pointer select-none"
        aria-label="Download Bhavin Shankur's Resume in DOCX format"
      >
        <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white/20 dark:bg-black/10 shrink-0">
          <FileDown className="w-4 h-4 text-white dark:text-black" />
        </div>
        <span>Download Resume</span>

        {showBadge && (
          <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-bold tracking-wide uppercase rounded-full bg-white/25 dark:bg-black/15 text-white dark:text-black shrink-0">
            <Sparkles className="w-2.5 h-2.5" />
            DOCX
          </span>
        )}
      </a>
    </motion.div>
  )
}
