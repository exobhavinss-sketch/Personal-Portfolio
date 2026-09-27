import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Copy, Check, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/Icons'
import { SectionHeader } from '../ui/SectionHeader'
import { ResumeDownloadButton } from '../ui/ResumeDownloadButton'
import { portfolioData } from '../../data/portfolioData'

export const ContactSection: React.FC = () => {
  const { personal } = portfolioData
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text)
    if (type === 'email') {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } else {
      setCopiedPhone(true)
      setTimeout(() => setCopiedPhone(false), 2000)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setFormSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
    }, 4000)
  }

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's Build Something."
          gradientTitle="Extraordinary."
          subtitle="Open for AI engineering internships, full-stack collaborations, startup discussions, and open-source contributions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Direct Channels & Resume Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 p-8 sm:p-10 rounded-3xl apple-glass-card flex flex-col justify-between text-left"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0071E3] dark:text-[#2997FF]">
                Direct Connect
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-white mt-1">
                Reach Out Directly
              </h3>
              <p className="text-sm text-[#86868B] dark:text-[#A1A1A6] mt-2">
                Fastest response via email or LinkedIn.
              </p>

              {/* Direct Info List */}
              <div className="mt-8 flex flex-col gap-4">
                {/* Email */}
                <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-[#0071E3]/10 dark:bg-[#2997FF]/10 text-[#0071E3] dark:text-[#2997FF] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-[11px] font-semibold text-[#86868B]">Email</p>
                      <a
                        href={`mailto:${personal.email}`}
                        className="text-sm font-bold text-[#1D1D1F] dark:text-white hover:text-[#0071E3] dark:hover:text-[#2997FF] transition-colors truncate block"
                      >
                        {personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personal.email, 'email')}
                    className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-[#86868B] transition-colors shrink-0 cursor-pointer"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-[#30D158]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#30D158]/10 text-[#30D158] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-[#86868B]">Phone</p>
                      <p className="text-sm font-bold text-[#1D1D1F] dark:text-white">
                        {personal.phone}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personal.phone, 'phone')}
                    className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-[#86868B] transition-colors shrink-0 cursor-pointer"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-[#30D158]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FF9F0A]/10 text-[#FF9F0A] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-[#86868B]">Location</p>
                    <p className="text-sm font-bold text-[#1D1D1F] dark:text-white">
                      {personal.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Callout Card in Contact */}
            <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#86868B] mb-2 block">
                Official Document
              </span>
              <p className="text-xs text-[#515154] dark:text-[#A1A1A6] mb-4">
                Download Bhavin's comprehensive 1-page official resume in Microsoft Word (.DOCX) format.
              </p>
              <ResumeDownloadButton variant="hero" className="w-full text-center" />
            </div>
          </motion.div>

          {/* Interactive Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 p-8 sm:p-10 rounded-3xl apple-glass-card flex flex-col justify-between text-left"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0071E3] dark:text-[#2997FF]">
                Send a Message
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-white mt-1">
                Direct Message
              </h3>
              <p className="text-sm text-[#86868B] dark:text-[#A1A1A6] mt-2">
                Have a project, startup idea, or role in mind? Send an instant note.
              </p>

              {formSubmitted ? (
                <div className="mt-12 p-8 rounded-3xl bg-[#30D158]/10 border border-[#30D158]/30 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#30D158] text-black flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h4 className="text-xl font-bold text-[#1D1D1F] dark:text-white">
                    Message Prepared!
                  </h4>
                  <p className="text-sm text-[#515154] dark:text-[#A1A1A6] mt-2 max-w-md">
                    Thank you! You can also email directly at{' '}
                    <a href={`mailto:${personal.email}`} className="text-[#0071E3] dark:text-[#2997FF] underline font-semibold">
                      {personal.email}
                    </a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#86868B] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tim Cook / Hiring Manager"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-sm text-[#1D1D1F] dark:text-white placeholder-[#86868B] focus:outline-none focus:ring-2 focus:ring-[#0071E3]/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#86868B] mb-2">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. name@company.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-sm text-[#1D1D1F] dark:text-white placeholder-[#86868B] focus:outline-none focus:ring-2 focus:ring-[#0071E3]/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#86868B] mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your team, role, or project..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-sm text-[#1D1D1F] dark:text-white placeholder-[#86868B] focus:outline-none focus:ring-2 focus:ring-[#0071E3]/50 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white dark:bg-white dark:text-black dark:hover:bg-[#E5E5EA] text-sm font-semibold shadow-md transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-semibold text-[#86868B]">
                Professional Profiles
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personal.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-xs font-medium text-[#1D1D1F] dark:text-white transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#0071E3] dark:text-[#2997FF]" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-xs font-medium text-[#1D1D1F] dark:text-white transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
