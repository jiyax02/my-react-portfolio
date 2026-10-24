import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  Building2,
  Award,
  CheckCircle2,
  BookOpen,
  Sparkles,
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-purple-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300 uppercase tracking-widest mb-4"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Certifications</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6"
          >
            Education &{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-200">
              Credentials
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed"
          >
            Formal computer science education, specialized full stack web development training, and industry certifications.
          </motion.p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto mb-20 relative">
          {/* Vertical Glowing Timeline Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-8 w-0.5 bg-gradient-to-b from-purple-500 via-indigo-500 to-purple-800/20" />

          <div className="space-y-12">
            {educationData.timeline.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-12 sm:pl-20"
              >
                {/* Glowing Node on Timeline */}
                <div className="absolute left-1.5 sm:left-5.5 top-1.5 -translate-x-1/2 w-6 h-6 rounded-full bg-[#080812] border-2 border-purple-400 shadow-[0_0_12px_#A855F7] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-purple-300 animate-pulse" />
                </div>

                {/* Card Container */}
                <div className="p-7 sm:p-8 rounded-3xl bg-[#111122]/75 border border-purple-500/15 hover:border-purple-400/40 backdrop-blur-xl transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_35px_rgba(168,85,247,0.2)]">
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/20">
                      <BookOpen className="w-3.5 h-3.5" />
                      {item.type}
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#A1A1AA] bg-white/[0.03] px-3 py-1 rounded-full border border-white/5">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2 text-sm font-medium text-purple-300 mb-4">
                    <Building2 className="w-4 h-4 text-purple-400" />
                    <span>{item.institute}</span>
                  </div>

                  <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2 pt-4 border-t border-purple-500/10">
                    {item.achievements.map((ach, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Sub-Section */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
              <Award className="w-6 h-6 text-purple-400" />
              <span>Professional Certifications</span>
            </h3>
            <p className="text-sm text-[#A1A1AA] mt-1">
              Verified accreditations across modern development technologies
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {educationData.certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group p-5 rounded-2xl bg-[#111122]/70 border border-purple-500/15 hover:border-purple-400/40 backdrop-blur-xl transition-all shadow-[0_6px_25px_rgba(0,0,0,0.25)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Award className="w-5 h-5 text-purple-400" />
                    </div>
                    <span className="text-[11px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                      {cert.year}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white group-hover:text-purple-200 transition-colors mb-1.5">
                    {cert.title}
                  </h4>

                  <p className="text-xs text-purple-300/80 font-mono mb-3">
                    {cert.issuer}
                  </p>

                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-purple-500/10 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Credential</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
