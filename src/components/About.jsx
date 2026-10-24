import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Cpu, Layout, Rocket, CheckCircle2, User, Award, Layers } from 'lucide-react';
import { aboutData } from '../data/portfolioData';

const iconMap = {
  Sparkles: Sparkles,
  Cpu: Cpu,
  Layout: Layout,
  Rocket: Rocket,
};

export default function About() {
  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" />

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
            <User className="w-3.5 h-3.5" />
            <span>Discover My Philosophy</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6"
          >
            Passionate About Engineering{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-200">
              Modern Web Experiences
            </span>
          </motion.h2>
        </div>

        {/* Featured Introduction Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl mx-auto mb-20 p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#141426]/90 to-[#0F0F1E]/80 border border-purple-500/20 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
        >
          {/* Subtle Top Accent Line */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              <Sparkles className="w-7 h-7 text-white" />
            </div>

            <div className="space-y-4">
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-purple-50 leading-relaxed font-sans">
                "{aboutData.intro}"
              </p>
              <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                {aboutData.extendedBio}
              </p>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-purple-500/10">
            {aboutData.stats.map((stat, i) => (
              <div key={i} className="text-center sm:text-left">
                <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
                  {stat.value}
                </p>
                <p className="text-xs text-[#A1A1AA] uppercase tracking-wider mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 4 Animated Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutData.cards.map((card, index) => {
            const Icon = iconMap[card.icon] || Sparkles;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`group relative p-7 rounded-2xl bg-[#111122]/70 border border-purple-500/15 hover:border-purple-500/40 backdrop-blur-xl transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_35px_rgba(168,85,247,0.2)] flex flex-col justify-between`}
              >
                {/* Glow aura inside card */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/30 to-indigo-600/30 border border-purple-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-purple-400 transition-all shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                    <Icon className="w-6 h-6 text-purple-300 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-purple-500/10 space-y-2">
                  {card.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-purple-200/90 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
