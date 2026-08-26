import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  gradientTitle?: string
  centered?: boolean
  className?: string
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  gradientTitle,
  centered = true,
  className
}) => {
  return (
    <div
      className={cn(
        'max-w-3xl mb-14 md:mb-20',
        centered ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-wider rounded-full bg-[#0071E3]/10 text-[#0071E3] dark:bg-[#2997FF]/10 dark:text-[#2997FF] border border-[#0071E3]/20 dark:border-[#2997FF]/20"
        >
          {eyebrow}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] leading-[1.12]"
      >
        {title}{' '}
        {gradientTitle && (
          <span className="text-gradient-blue">{gradientTitle}</span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-base sm:text-lg md:text-xl text-[#86868B] dark:text-[#A1A1A6] font-normal leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
