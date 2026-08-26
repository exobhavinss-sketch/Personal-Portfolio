import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, GraduationCap, Cpu, Layers, Sparkles } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { portfolioData } from '../../data/portfolioData'

export const AboutSection: React.FC = () => {
  const { personal, education } = portfolioData
  const currentEdu = education[0]

  const pillars = [
    {
      icon: <Rocket className="w-6 h-6 text-[#2997FF]" />,
      title: 'Startup Ambition',
      description:
        'Driven to build a technology startup that brings intelligent, accessible, and high-performance computing tools to real-world users and businesses.'
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#9E53E8]" />,
      title: 'Local AI & Privacy First',
      description:
        'Pioneering offline-capable RAG architectures using Ollama, FAISS, and LangChain that run securely without relying on third-party cloud APIs or recurring API costs.'
    },
    {
      icon: <Layers className="w-6 h-6 text-[#30D158]" />,
      title: 'End-to-End Craftsmanship',
      description:
        'From low-level procedural GLSL shaders and Three.js 3D scenes to FastAPI async microservices and vector databases, every detail is engineered with precision.'
    }
  ]

  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="The Story & Philosophy"
          title="Designed for Innovation."
          gradientTitle="Engineered for Impact."
          subtitle="A second-year computer science engineer fusing cutting-edge machine learning with high-polish user experiences."
        />

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Narrative Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 p-8 sm:p-10 rounded-3xl apple-glass-card flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-6 text-xs font-bold uppercase tracking-wider text-[#0071E3] dark:text-[#2997FF]">
                <Sparkles className="w-4 h-4" />
                <span>Background & Vision</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-white leading-snug">
                Building technology that meaningfully improves the computing world.
              </h3>

              <p className="mt-5 text-base sm:text-lg text-[#86868B] dark:text-[#A1A1A6] leading-relaxed">
                {personal.summary}
              </p>

              <div className="mt-8 p-5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0071E3]/10 dark:bg-[#2997FF]/10 text-[#0071E3] dark:text-[#2997FF] flex items-center justify-center shrink-0 mt-0.5">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1D1D1F] dark:text-white text-base">
                      {currentEdu.institution}
                    </h4>
                    <p className="text-sm text-[#86868B] dark:text-[#A1A1A6] mt-0.5">
                      {currentEdu.degree} ({currentEdu.timeline})
                    </p>
                    <p className="text-xs text-[#515154] dark:text-[#86868B] mt-2">
                      {currentEdu.details}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#86868B]">
                Current Status
              </span>
              <span className="inline-flex items-center gap-2 text-xs font-medium text-[#30D158]">
                <span className="w-2 h-2 rounded-full bg-[#30D158] animate-ping" />
                {personal.status}
              </span>
            </div>
          </motion.div>

          {/* Three Core Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 sm:p-7 rounded-3xl apple-glass-card flex-1 flex flex-col justify-center hover:scale-[1.01] transition-transform"
              >
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-11 h-11 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center shrink-0">
                    {pillar.icon}
                  </div>
                  <h4 className="text-lg font-bold text-[#1D1D1F] dark:text-white">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-sm text-[#86868B] dark:text-[#A1A1A6] leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
