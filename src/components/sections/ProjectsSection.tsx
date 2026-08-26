import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '../ui/Icons'
import { SectionHeader } from '../ui/SectionHeader'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from '../modals/ProjectModal'
import { portfolioData } from '../../data/portfolioData'
import { Project } from '../../types/portfolio'

export const ProjectsSection: React.FC = () => {
  const { projects, personal } = portfolioData
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeFilter, setActiveFilter] = useState<string>('All')

  const filterTabs = ['All', 'AI / RAG', '3D & WebGL', 'Backend & DevTools']

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter(p => p.category === activeFilter || (activeFilter === 'AI / RAG' && p.category === 'Education'))

  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Engineered from First Principles."
          gradientTitle="Built for Scale."
          subtitle="A selection of end-to-end AI applications, 3D WebGL simulations, and open-source developer tooling."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-5 py-2 text-xs font-semibold rounded-full transition-all duration-300 cursor-pointer ${
                activeFilter === tab
                  ? 'bg-[#0071E3] text-white dark:bg-white dark:text-black shadow-md'
                  : 'bg-black/5 dark:bg-white/5 text-[#86868B] dark:text-[#A1A1A6] hover:bg-black/10 dark:hover:bg-white/10 hover:text-[#1D1D1F] dark:hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={p => setSelectedProject(p)}
              index={idx}
            />
          ))}
        </div>

        {/* GitHub Portfolio Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 p-6 rounded-3xl bg-black/5 dark:bg-[#161617]/40 border border-black/5 dark:border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-2xl bg-black/10 dark:bg-white/10 flex items-center justify-center shrink-0">
              <GithubIcon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1D1D1F] dark:text-white">
                Explore More Open-Source Work
              </h4>
              <p className="text-xs text-[#86868B] dark:text-[#A1A1A6]">
                Review all repositories, RAG pipelines, and experimentation on GitHub.
              </p>
            </div>
          </div>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white dark:bg-white dark:text-black dark:hover:bg-[#E5E5EA] shadow-sm transition-all"
          >
            <span>Visit @exobhavinss-sketch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
