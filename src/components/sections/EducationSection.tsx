import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { portfolioData } from '../../data/portfolioData'

export const EducationSection: React.FC = () => {
  const { education } = portfolioData

  return (
    <section id="education" className="py-24 sm:py-32 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          eyebrow="Academic Foundation"
          title="Education & Engineering Rigor."
          subtitle="Formative academics establishing theoretical and mathematical foundations for artificial intelligence and systems engineering."
        />

        {/* Timeline */}
        <div className="relative border-l-2 border-black/10 dark:border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {education.map((item, idx) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative text-left"
            >
              {/* Timeline Bullet */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 border-black dark:border-white ${
                  item.status === 'In Progress'
                    ? 'bg-[#0071E3] dark:bg-[#2997FF] ring-4 ring-[#0071E3]/20 dark:ring-[#2997FF]/20'
                    : 'bg-[#86868B]'
                }`}
              />

              <div className="p-6 sm:p-8 rounded-3xl apple-glass-card">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#0071E3] dark:text-[#2997FF]">
                    {item.status}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#86868B] dark:text-[#A1A1A6]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.timeline}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] dark:text-white">
                  {item.institution}
                </h3>
                <h4 className="text-base font-semibold text-[#515154] dark:text-[#D1D1D6] mt-1">
                  {item.degree}
                </h4>

                <div className="flex items-center gap-1.5 text-xs text-[#86868B] mt-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>

                <p className="text-sm text-[#86868B] dark:text-[#A1A1A6] mt-4 leading-relaxed">
                  {item.details}
                </p>

                {item.highlights && item.highlights.length > 0 && (
                  <div className="mt-4 flex flex-col gap-1.5">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#515154] dark:text-[#D1D1D6]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#30D158] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
