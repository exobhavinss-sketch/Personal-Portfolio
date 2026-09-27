import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react'
import { GithubIcon } from '../ui/Icons'
import { Project } from '../../types/portfolio'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
          className="relative w-full max-w-3xl rounded-3xl apple-glass dark:bg-[#161617] border border-white/20 dark:border-white/10 shadow-2xl p-6 sm:p-10 my-8 z-10 max-h-[90vh] overflow-y-auto text-left"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 flex items-center justify-center w-9 h-9 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 text-[#1D1D1F] dark:text-white transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Eyebrow / Category */}
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-[#0071E3]/10 text-[#0071E3] dark:bg-[#2997FF]/10 dark:text-[#2997FF]">
              {project.category}
            </span>
            {project.featured && (
              <span className="flex items-center gap-1 text-xs font-semibold text-[#FF9F0A]">
                <Sparkles className="w-3.5 h-3.5" />
                Featured Flagship
              </span>
            )}
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F] dark:text-white">
            {project.title}
          </h2>
          <p className="text-base sm:text-lg font-medium text-[#86868B] dark:text-[#A1A1A6] mt-1">
            {project.subtitle}
          </p>

          <div className="mt-6 p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-sm font-semibold text-[#1D1D1F] dark:text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#30D158] shrink-0" />
            <span>{project.tagline}</span>
          </div>

          {/* Deep Architectural Details */}
          <div className="mt-8">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#86868B] dark:text-[#A1A1A6] mb-3">
              Architecture & Contribution
            </h4>
            <p className="text-base text-[#1D1D1F] dark:text-[#E5E5EA] leading-relaxed">
              {project.fullDetails}
            </p>
          </div>

          {/* Key Features */}
          <div className="mt-8">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#86868B] dark:text-[#A1A1A6] mb-3">
              Key Engineering Innovations
            </h4>
            <div className="flex flex-col gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#30D158] shrink-0 mt-1" />
                  <span className="text-sm text-[#515154] dark:text-[#A1A1A6]">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div className="mt-8">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#86868B] dark:text-[#A1A1A6] mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-[#1D1D1F] dark:text-[#F5F5F7]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-10 pt-6 border-t border-black/10 dark:border-white/10 flex flex-wrap gap-4 items-center justify-between">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white dark:bg-white dark:text-black dark:hover:bg-[#E5E5EA] text-sm font-semibold shadow-md transition-all cursor-pointer"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Explore GitHub Repository</span>
            </a>

            <button
              onClick={onClose}
              className="px-5 py-3 rounded-full text-sm font-medium text-[#86868B] hover:text-[#1D1D1F] dark:text-[#A1A1A6] dark:hover:text-white cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
