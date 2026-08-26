import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '../../lib/utils'

interface AppleButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'glass' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  href?: string
  download?: string | boolean
  target?: string
  rel?: string
  className?: string
}

export const AppleButton: React.FC<AppleButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  href,
  download,
  target,
  rel,
  className,
  ...props
}) => {
  const sizeStyles = {
    sm: 'px-4 py-2 text-xs font-medium gap-1.5',
    md: 'px-5 py-2.5 text-sm font-medium gap-2',
    lg: 'px-7 py-3.5 text-base font-semibold gap-2.5 rounded-full'
  }

  const variantStyles = {
    primary:
      'bg-[#0071E3] hover:bg-[#0077ED] text-white shadow-[0_4px_14px_rgba(0,113,227,0.35)] hover:shadow-[0_6px_20px_rgba(0,113,227,0.45)] dark:bg-[#2997FF] dark:text-black dark:hover:bg-[#43A4FF] dark:shadow-[0_4px_20px_rgba(41,151,255,0.4)]',
    secondary:
      'bg-[#1D1D1F] text-[#F5F5F7] hover:bg-[#2C2C2E] border border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15 dark:border-white/15',
    glass:
      'bg-white/70 dark:bg-white/5 backdrop-blur-xl text-[#1D1D1F] dark:text-[#F5F5F7] border border-black/10 dark:border-white/15 hover:bg-white/90 dark:hover:bg-white/10 shadow-sm',
    ghost:
      'bg-transparent text-[#1D1D1F] dark:text-[#F5F5F7] hover:bg-black/5 dark:hover:bg-white/10'
  }

  const commonClasses = cn(
    'inline-flex items-center justify-center rounded-full transition-all duration-300 select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0071E3]/50 active:scale-[0.98]',
    sizeStyles[size],
    variantStyles[variant],
    className
  )

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={commonClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
      </motion.a>
    )
  }

  return (
    <motion.button
      className={commonClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </motion.button>
  )
}
