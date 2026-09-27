import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Cpu, Code2, Layout, Server, Terminal, ChevronRight } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { portfolioData } from '../../data/portfolioData'

export const SkillsBentoSection: React.FC = () => {
  const { skills } = portfolioData
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)

  const iconMap: Record<string, React.ReactNode> = {
    Cpu: <Cpu className="w-5 h-5 text-[#2997FF]" />,
    Code2: <Code2 className="w-5 h-5 text-[#FF9F0A]" />,
    Layout: <Layout className="w-5 h-5 text-[#30D158]" />,
    Server: <Server className="w-5 h-5 text-[#BF5AF2]" />,
    Terminal: <Terminal className="w-5 h-5 text-[#64D2FF]" />
  }

  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Technical Stack & Architecture"
          title="Deep Technical Breadth."
          gradientTitle="Laser Precision."
          subtitle="A comprehensive matrix of languages, machine learning frameworks, databases, and developer tooling mastered through hands-on development."
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Category Selector Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            {skills.map((category, idx) => {
              const isSelected = activeCategoryIndex === idx
              return (
                <button
                  key={category.category}
                  onClick={() => setActiveCategoryIndex(idx)}
                  className={`flex items-center justify-between p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'apple-glass bg-white/90 dark:bg-[#1C1C1E] border-[#0071E3]/40 dark:border-[#2997FF]/40 shadow-lg'
                      : 'bg-black/5 dark:bg-white/5 border border-transparent hover:bg-black/10 dark:hover:bg-white/10 text-[#86868B] dark:text-[#A1A1A6]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-black/5 dark:bg-white/10 flex items-center justify-center shrink-0">
                      {iconMap[category.iconName] || <Cpu className="w-5 h-5" />}
                    </div>
                    <div>
                      <h4
                        className={`text-sm font-bold tracking-tight ${
                          isSelected
                            ? 'text-[#1D1D1F] dark:text-white'
                            : 'text-[#515154] dark:text-[#86868B]'
                        }`}
                      >
                        {category.category}
                      </h4>
                      <p className="text-[11px] text-[#86868B] dark:text-[#A1A1A6] mt-0.5 line-clamp-1">
                        {category.skills.length} core competencies
                      </p>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isSelected
                        ? 'text-[#0071E3] dark:text-[#2997FF] translate-x-1'
                        : 'text-[#86868B] opacity-40'
                    }`}
                  />
                </button>
              )
            })}
          </div>

          {/* Detailed Skill Cards for Active Category */}
          <motion.div
            key={activeCategoryIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 p-7 sm:p-9 rounded-3xl apple-glass-card border border-white/10 dark:border-white/10 shadow-xl"
          >
            <div className="flex items-center justify-between pb-6 border-b border-black/10 dark:border-white/10 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0071E3] dark:text-[#2997FF]">
                  Category Spotlight
                </span>
                <h3 className="text-2xl font-bold text-[#1D1D1F] dark:text-white mt-1">
                  {skills[activeCategoryIndex].category}
                </h3>
                <p className="text-xs sm:text-sm text-[#86868B] dark:text-[#A1A1A6] mt-1">
                  {skills[activeCategoryIndex].description}
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills[activeCategoryIndex].skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:border-[#0071E3]/30 dark:hover:border-[#2997FF]/30 transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-sm font-bold text-[#1D1D1F] dark:text-white">
                      {skill.name}
                    </span>
                    <span
                      className={`px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full ${
                        skill.level === 'Expert'
                          ? 'bg-[#30D158]/15 text-[#30D158] border border-[#30D158]/30'
                          : skill.level === 'Advanced'
                          ? 'bg-[#2997FF]/15 text-[#2997FF] border border-[#2997FF]/30'
                          : 'bg-[#FF9F0A]/15 text-[#FF9F0A] border border-[#FF9F0A]/30'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  {skill.highlight && (
                    <p className="text-xs text-[#86868B] dark:text-[#A1A1A6] line-clamp-1">
                      {skill.highlight}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
