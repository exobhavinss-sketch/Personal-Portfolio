import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Award, CheckCircle2 } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { portfolioData } from '../../data/portfolioData'

export const CertificationsSection: React.FC = () => {
  const { certifications } = portfolioData
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const categories = [
    'All',
    'AI & Generative AI',
    'Cloud & Systems',
    'Programming & DSA',
    'Practical & Internship'
  ]

  const filteredCerts =
    activeCategory === 'All'
      ? certifications
      : certifications.filter(c => c.category === activeCategory)

  return (
    <section id="certifications" className="py-24 sm:py-32 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Industry Credentials & Upskilling"
          title="Verified Competence."
          gradientTitle="Continuous Mastery."
          subtitle="A track record of 7+ professional certifications across cloud architecture, generative AI, algorithmic development, and cybersecurity."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs font-semibold rounded-full transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#0071E3] text-white dark:bg-white dark:text-black shadow-md'
                  : 'bg-black/5 dark:bg-white/5 text-[#86868B] dark:text-[#A1A1A6] hover:bg-black/10 dark:hover:bg-white/10 hover:text-[#1D1D1F] dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-6 rounded-3xl apple-glass-card flex flex-col justify-between hover:border-[#0071E3]/30 dark:hover:border-[#2997FF]/30 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-black/5 dark:bg-white/10 text-[#0071E3] dark:text-[#2997FF]">
                    {cert.category}
                  </span>
                  <Award className="w-4 h-4 text-[#FF9F0A] shrink-0" />
                </div>

                <h4 className="text-base sm:text-lg font-bold text-[#1D1D1F] dark:text-white group-hover:text-[#0071E3] dark:group-hover:text-[#2997FF] transition-colors leading-snug">
                  {cert.title}
                </h4>

                <p className="text-xs font-semibold text-[#86868B] dark:text-[#A1A1A6] mt-1.5">
                  Issued by {cert.issuer}
                </p>

                {cert.description && (
                  <p className="text-xs text-[#515154] dark:text-[#86868B] mt-3 leading-relaxed">
                    {cert.description}
                  </p>
                )}
              </div>

              <div className="mt-5 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[11px] text-[#86868B]">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#30D158]" />
                  Verified Credential
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
