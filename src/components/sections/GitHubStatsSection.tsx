import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '../ui/Icons'
import { SectionHeader } from '../ui/SectionHeader'
import { portfolioData } from '../../data/portfolioData'

export const GitHubStatsSection: React.FC = () => {
  const { personal } = portfolioData

  const repoHighlights = [
    {
      name: 'Artifical-Intelligence-Chatbot',
      desc: 'Local RAG Chatbot querying AI strategy books with Ollama, FAISS, ChromaDB & Streamlit.',
      lang: 'Python',
      langColor: '#3572A5',
      url: 'https://github.com/exobhavinss-sketch/Artifical-Intelligence-Chatbot'
    },
    {
      name: 'Our-Earth',
      desc: '3D Earth educational experience with GLSL shaders, Three.js, React & GSAP.',
      lang: 'TypeScript',
      langColor: '#3178C6',
      url: 'https://github.com/exobhavinss-sketch/Our-Earth'
    },
    {
      name: 'GitHub-Mentor-AI',
      desc: 'AI Mentor backend for Git/Dev workflows with FastAPI, FAISS & streaming SSE.',
      lang: 'Python',
      langColor: '#3572A5',
      url: 'https://github.com/exobhavinss-sketch/GitHub-Mentor-AI'
    },
    {
      name: 'ai-pathfinder-buddy-18',
      desc: 'Interactive roadmap and fundamentals repository for new AI/ML students.',
      lang: 'Python',
      langColor: '#3572A5',
      url: 'https://github.com/exobhavinss-sketch/ai-pathfinder-buddy-18'
    }
  ]

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Open Source & GitHub Ecosystem"
          title="Committed to Public Code."
          gradientTitle="Continuous Shipping."
          subtitle="All core architectures, RAG pipelines, and 3D shaders are developed in public repositories."
        />

        {/* GitHub Highlight Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {repoHighlights.map((repo, idx) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-5 rounded-3xl apple-glass-card flex flex-col justify-between hover:border-[#0071E3]/40 dark:hover:border-[#2997FF]/40 transition-all group text-left"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <GithubIcon className="w-4 h-4 text-[#86868B] group-hover:text-[#1D1D1F] dark:group-hover:text-white transition-colors" />
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#86868B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                <h4 className="text-sm font-bold text-[#1D1D1F] dark:text-white group-hover:text-[#0071E3] dark:group-hover:text-[#2997FF] transition-colors line-clamp-1">
                  {repo.name}
                </h4>

                <p className="text-xs text-[#86868B] dark:text-[#A1A1A6] mt-2 line-clamp-3 leading-relaxed">
                  {repo.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[11px] text-[#86868B]">
                <div className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: repo.langColor }}
                  />
                  <span>{repo.lang}</span>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#30D158]">
                  Active
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1D1D1F] text-white hover:bg-[#2C2C2E] dark:bg-white dark:text-black dark:hover:bg-[#E5E5EA] text-sm font-semibold shadow-md transition-all"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Follow Bhavin on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>
      </div>
    </section>
  )
}
