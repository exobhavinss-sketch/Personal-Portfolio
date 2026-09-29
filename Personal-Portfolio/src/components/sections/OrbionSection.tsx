import React from 'react'
import { motion } from 'framer-motion'
import {
  Bot,
  Workflow,
  GitMerge,
  Database,
  Sparkles,
  ArrowUpRight,
  Globe,
  Building2,
  CheckCircle2,
  Send,
  Zap,
  Shield
} from 'lucide-react'

import { SectionHeader } from '../ui/SectionHeader'
import { portfolioData } from '../../data/portfolioData'

export const OrbionSection: React.FC = () => {
  const { orbion } = portfolioData

  const pillarIconMap: Record<string, React.ReactNode> = {
    Bot: <Bot className="w-5 h-5 text-[#00E0D6]" />,
    Workflow: <Workflow className="w-5 h-5 text-[#5B4FFF]" />,
    GitMerge: <GitMerge className="w-5 h-5 text-[#2997FF]" />,
    Database: <Database className="w-5 h-5 text-[#9E53E8]" />
  }

  return (
    <section id="orbion" className="py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Ambient Volumetric Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[550px] bg-gradient-to-tr from-[#5B4FFF]/15 via-[#00E0D6]/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <SectionHeader
          eyebrow="Startup Venture • Founded by Bhavin Shankur"
          title="Orbion Technologies."
          gradientTitle="The AI Operating System."
          subtitle="Moving beyond traditional static software into intelligent, autonomous AI systems capable of understanding objectives, using tools, and executing everyday business workflows."
        />

        {/* Top Bento Row: Founder Spotlight & Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
          {/* Main Founder & Vision Card (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 p-8 sm:p-10 rounded-3xl apple-glass-card flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Top Brand Banner */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#5B4FFF]/15 dark:bg-[#5B4FFF]/25 border border-[#5B4FFF]/30 flex items-center justify-center p-2 shadow-inner">
                    <img
                      src="./brand/svg/orbion-symbol.svg"
                      alt="Orbion Symbol"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-black tracking-tight text-[#1D1D1F] dark:text-white">
                        {orbion.name}
                      </h3>
                      <span className="text-xs px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider bg-[#5B4FFF]/15 text-[#5B4FFF] dark:bg-[#5B4FFF]/30 dark:text-[#A59FFF]">
                        {orbion.role}
                      </span>
                    </div>
                    <p className="text-xs text-[#86868B] dark:text-[#A1A1A6] font-mono">
                      {orbion.legalName}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#30D158]/10 text-[#30D158] border border-[#30D158]/20">
                  <span className="w-2 h-2 rounded-full bg-[#30D158] animate-pulse" />
                  <span>{orbion.statusBadge}</span>
                </div>
              </div>

              {/* Tagline */}
              <h4 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1D1D1F] dark:text-white leading-snug mt-2">
                {orbion.tagline}
              </h4>

              {/* Founder Narrative Quote */}
              <div className="mt-6 p-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 relative">
                <div className="text-xs font-bold uppercase tracking-wider text-[#5B4FFF] dark:text-[#00E0D6] flex items-center gap-1.5 mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Founder's Mission & Manifesto</span>
                </div>
                <blockquote className="text-sm sm:text-base text-[#1D1D1F] dark:text-[#E5E5EA] leading-relaxed italic">
                  "{orbion.vision}"
                </blockquote>
                <p className="mt-3 text-xs sm:text-sm text-[#86868B] dark:text-[#A1A1A6] font-medium leading-relaxed">
                  {orbion.narrative[0]}
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/10 flex flex-wrap items-center gap-4">
              <a
                href={orbion.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#5B4FFF] hover:bg-[#4D40FA] text-white text-sm font-semibold shadow-[0_4px_20px_rgba(91,79,255,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-98 cursor-pointer"
              >
                <Globe className="w-4 h-4" />
                <span>Visit Orbion.in</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 text-[#1D1D1F] dark:text-white border border-black/10 dark:border-white/15 text-sm font-medium transition-all duration-200"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Inquire About Orbion</span>
              </a>
            </div>
          </motion.div>

          {/* Metrics & Focus Areas Card (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 p-8 sm:p-10 rounded-3xl apple-glass-card flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-6 text-xs font-bold uppercase tracking-wider text-[#5B4FFF] dark:text-[#00E0D6]">
                <Building2 className="w-4 h-4" />
                <span>Operating Framework</span>
              </div>

              {/* 2x2 Metric Grid */}
              <div className="grid grid-cols-2 gap-4">
                {orbion.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10"
                  >
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#86868B] dark:text-[#A1A1A6]">
                      {m.label}
                    </div>
                    <div className="mt-1 text-base sm:text-lg font-black text-[#1D1D1F] dark:text-white">
                      {m.value}
                    </div>
                    <div className="text-[11px] text-[#515154] dark:text-[#86868B] mt-0.5">
                      {m.helper}
                    </div>
                  </div>
                ))}
              </div>

              {/* Founder Focus Disciplines */}
              <div className="mt-6">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#86868B] dark:text-[#A1A1A6] mb-3">
                  Core Engineering & Strategic Disciplines
                </h5>
                <div className="flex flex-wrap gap-2">
                  {orbion.focusAreas.map((area, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-black/5 dark:bg-white/5 text-[#1D1D1F] dark:text-[#E5E5EA] border border-black/5 dark:border-white/10"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/10 text-xs text-[#86868B] dark:text-[#A1A1A6] flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#30D158] shrink-0" />
              <span>Full governance, human-in-the-loop validation, and enterprise-grade sandboxing.</span>
            </div>
          </motion.div>
        </div>

        {/* Technical Architecture Pillars (4 Cards) */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1D1D1F] dark:text-white">
                Core Architectural Pillars
              </h4>
              <p className="text-sm text-[#86868B] dark:text-[#A1A1A6] mt-1">
                The foundational technologies powering Orbion's autonomous AI operating layer.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {orbion.pillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 sm:p-7 rounded-3xl apple-glass-card flex flex-col justify-between relative group"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-10 h-10 rounded-2xl bg-black/5 dark:bg-white/10 flex items-center justify-center border border-black/10 dark:border-white/15">
                      {pillarIconMap[pillar.icon] || <Zap className="w-5 h-5 text-[#5B4FFF]" />}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#5B4FFF]/10 text-[#5B4FFF] dark:bg-[#5B4FFF]/20 dark:text-[#A59FFF]">
                      {pillar.tag}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h5 className="text-lg font-bold text-[#1D1D1F] dark:text-white group-hover:text-[#5B4FFF] dark:group-hover:text-[#00E0D6] transition-colors duration-200">
                    {pillar.title}
                  </h5>

                  <p className="mt-2 text-xs sm:text-sm text-[#86868B] dark:text-[#A1A1A6] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Specs List */}
                <div className="mt-5 pt-4 border-t border-black/5 dark:border-white/10 space-y-2">
                  {pillar.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 text-xs text-[#515154] dark:text-[#C7C7CC]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00E0D6] shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrbionSection
