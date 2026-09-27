import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { portfolioData } from '../../data/portfolioData'

export const LeadershipSection: React.FC = () => {
  const { leadership } = portfolioData

  return (
    <section id="leadership" className="py-24 sm:py-32 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Leadership & Social Impact"
          title="Engineering for Communities."
          gradientTitle="Real-World Impact."
          subtitle="Collaborative innovation addressing global sustainability and civic water safety through edge AI."
        />

        {/* Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 sm:p-12 rounded-3xl apple-glass-card border border-white/10 dark:border-white/10 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-gradient-to-br from-[#30D158]/15 via-[#0071E3]/15 to-transparent blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 text-left">
              {/* Event Badge */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-[#30D158]/15 text-[#30D158] border border-[#30D158]/30">
                  {leadership.eventName}
                </span>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-black/5 dark:bg-white/10 text-[#86868B] dark:text-[#A1A1A6]">
                  Team {leadership.teamName}
                </span>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-black/5 dark:bg-white/10 text-[#86868B] dark:text-[#A1A1A6]">
                  {leadership.location}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1D1D1F] dark:text-white leading-tight">
                {leadership.projectTitle}
              </h3>

              <p className="mt-4 text-base sm:text-lg text-[#86868B] dark:text-[#A1A1A6] leading-relaxed">
                {leadership.objective}
              </p>

              {/* Impact Points */}
              <div className="mt-6 flex flex-col gap-3">
                {leadership.impactPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-[#515154] dark:text-[#D1D1D6]">
                    <CheckCircle2 className="w-4 h-4 text-[#30D158] shrink-0 mt-1" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {leadership.technologies.map(t => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-[#1D1D1F] dark:text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* SDG Goals Card */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#86868B] dark:text-[#A1A1A6] text-left">
                United Nations SDG Alignment
              </span>
              {leadership.sdgGoals.map(sdg => (
                <div
                  key={sdg.number}
                  className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-left flex items-center gap-3.5 hover:scale-[1.02] transition-transform"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0071E3] to-[#30D158] flex items-center justify-center text-white font-black text-sm shrink-0 shadow-sm">
                    {sdg.number}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#86868B] dark:text-[#A1A1A6]">
                      SDG Goal {sdg.number}
                    </h5>
                    <p className="text-sm font-semibold text-[#1D1D1F] dark:text-white mt-0.5">
                      {sdg.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
