import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Terminal, ShieldCheck, Cpu } from 'lucide-react'
import { GithubIcon } from '../ui/Icons'
import { ResumeDownloadButton } from '../ui/ResumeDownloadButton'
import { portfolioData } from '../../data/portfolioData'

export const HeroSection: React.FC = () => {
  const { personal, metrics } = portfolioData

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Background Subtle Radial Gradient for Hero */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[400px] bg-gradient-to-b from-[#2997FF]/15 via-[#9E53E8]/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Top Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/15 backdrop-blur-md shadow-sm mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#30D158] animate-pulse" />
          <span className="text-xs sm:text-sm font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
            AI Engineer • Full-Stack Developer • Startup Mindset
          </span>
        </motion.div>

        {/* Grand Keynote Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#1D1D1F] dark:text-white leading-[1.04]"
        >
          {personal.fullName}
        </motion.h1>

        {/* Dynamic Subtitle / Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-[#86868B] dark:text-[#A1A1A6] max-w-3xl"
        >
          Architecting <span className="text-shimmer font-bold">Intelligent Local AI Systems</span> &{' '}
          <span className="text-[#0071E3] dark:text-[#2997FF]">High-Performance Web</span> with Craft & Precision.
        </motion.p>

        {/* Narrative Personal Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-sm sm:text-base md:text-lg text-[#515154] dark:text-[#86868B] max-w-2xl leading-relaxed font-normal"
        >
          2nd-year B.Tech CSE (AIML) student at MIT Vishwaprayag University. Creator of production-grade Retrieval-Augmented Generation (RAG) pipelines, local LLM integrations, and interactive 3D WebGL experiences.
        </motion.p>

        {/* Primary Action Button Cluster */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5"
        >
          {/* Mandatory Download Resume Button */}
          <ResumeDownloadButton variant="hero" />

          {/* Explore Projects Button */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 text-[#1D1D1F] dark:text-white border border-black/10 dark:border-white/15 backdrop-blur-xl transition-all duration-300 shadow-sm active:scale-98"
          >
            <span>Explore Work</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          {/* GitHub Button */}
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 text-base font-semibold rounded-full bg-transparent hover:bg-black/5 dark:hover:bg-white/5 text-[#86868B] hover:text-[#1D1D1F] dark:text-[#A1A1A6] dark:hover:text-white transition-all duration-300"
          >
            <GithubIcon className="w-5 h-5" />
            <span>GitHub</span>
          </a>
        </motion.div>

        {/* Interactive Apple-Style Engine Feature Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 w-full max-w-4xl p-5 sm:p-7 rounded-3xl apple-glass-card border border-white/10 dark:border-white/10 shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2997FF] to-[#9E53E8] flex items-center justify-center text-white shadow-md shrink-0">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-[#1D1D1F] dark:text-white">
                    Local Neural Inference & RAG
                  </h3>
                  <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-[#30D158]/15 text-[#30D158] border border-[#30D158]/30">
                    Offline First
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#86868B] dark:text-[#A1A1A6] mt-0.5">
                  100% private semantic search powered by Ollama, FAISS, and LangChain without external cloud APIs.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs font-medium text-[#86868B] dark:text-[#A1A1A6]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#30D158]" />
                Zero API Costs
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs font-medium text-[#86868B] dark:text-[#A1A1A6]">
                <Terminal className="w-3.5 h-3.5 text-[#2997FF]" />
                FastAPI + Streamlit
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Metric Stat Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl"
        >
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-black/5 dark:bg-[#161617]/50 border border-black/5 dark:border-white/10 text-left flex flex-col justify-between hover:border-black/10 dark:hover:border-white/20 transition-colors"
            >
              <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#1D1D1F] dark:text-white">
                {m.value}
              </span>
              <span className="mt-1 text-xs font-semibold text-[#86868B] dark:text-[#A1A1A6]">
                {m.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
