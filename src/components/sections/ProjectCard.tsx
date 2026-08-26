import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, Sparkles, Terminal } from 'lucide-react'
import { GithubIcon } from '../ui/Icons'
import { Project } from '../../types/portfolio'

interface ProjectCardProps {
  project: Project
  onSelect: (project: Project) => void
  index: number
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col justify-between rounded-3xl apple-glass-card p-7 sm:p-9 overflow-hidden hover:border-[#0071E3]/40 dark:hover:border-[#2997FF]/40 text-left"
    >
      {/* Visual Ambient Header Background */}
      <div
        className={`absolute -right-20 -top-20 w-64 h-64 rounded-full bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 blur-3xl transition-opacity duration-500 pointer-events-none`}
      />

      <div>
        {/* Category & Status */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-black/5 dark:bg-white/10 text-[#0071E3] dark:text-[#2997FF] border border-black/5 dark:border-white/10">
            {project.category}
          </span>
          {project.featured && (
            <span className="flex items-center gap-1 text-xs font-semibold text-[#FF9F0A]">
              <Sparkles className="w-3.5 h-3.5" />
              Flagship
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-white group-hover:text-[#0071E3] dark:group-hover:text-[#2997FF] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-[#86868B] dark:text-[#A1A1A6] mt-1">
          {project.subtitle}
        </p>

        {/* Highlight Tagline Pill */}
        <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black/5 dark:bg-white/5 text-xs font-medium text-[#515154] dark:text-[#D1D1D6] border border-black/5 dark:border-white/5">
          <Terminal className="w-3.5 h-3.5 text-[#0071E3] dark:text-[#2997FF] shrink-0" />
          <span>{project.tagline}</span>
        </div>

        {/* Description */}
        <p className="mt-5 text-sm sm:text-base text-[#86868B] dark:text-[#A1A1A6] leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Key Points */}
        <div className="mt-6 flex flex-col gap-2">
          {project.keyFeatures.slice(0, 2).map((feat, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#515154] dark:text-[#D1D1D6]">
              <CheckCircle2 className="w-4 h-4 text-[#30D158] shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feat}</span>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 5).map(tag => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-black/5 dark:bg-white/5 text-[#86868B] dark:text-[#A1A1A6]"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 5 && (
            <span className="px-2 py-1 text-[11px] font-medium rounded-lg bg-black/5 dark:bg-white/5 text-[#86868B]">
              +{project.tags.length - 5} more
            </span>
          )}
        </div>
      </div>

      {/* Card Actions */}
      <div className="mt-8 pt-5 border-t border-black/10 dark:border-white/10 flex items-center justify-between gap-3">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full bg-[#1D1D1F] text-white hover:bg-[#2C2C2E] dark:bg-white dark:text-black dark:hover:bg-[#E5E5EA] transition-all shadow-sm"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          <span>GitHub</span>
          <ArrowUpRight className="w-3 h-3 opacity-60" />
        </a>

        <button
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#0071E3] dark:text-[#2997FF] hover:underline cursor-pointer"
        >
          <span>View Architecture</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  )
}
