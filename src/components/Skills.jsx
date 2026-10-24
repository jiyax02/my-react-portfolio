import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Server,
  Database,
  Wrench,
  Sparkles,
  Layers,
  Palette,
  FileCode,
  Atom,
  Globe,
  Wind,
  Workflow,
  Network,
  KeyRound,
  ShieldCheck,
  Boxes,
  GitBranch,
  Terminal,
  Send,
} from 'lucide-react';
import { GithubIcon, FigmaIcon } from './BrandIcons';
import { skillsData } from '../data/portfolioData';

// Map icon strings to components
const iconMap = {
  Code2,
  Palette,
  FileCode,
  Atom,
  Globe,
  Layers,
  Wind,
  Server,
  Workflow,
  Network,
  KeyRound,
  ShieldCheck,
  Database,
  Boxes,
  GitBranch,
  Github: GithubIcon,
  Terminal,
  Send,
  Figma: FigmaIcon,
};

const categoryTabs = [
  { id: 'all', label: 'All Disciplines', icon: Sparkles },
  { id: 'frontend', label: 'Frontend', icon: Code2 },
  { id: 'backend', label: 'Backend', icon: Server },
  { id: 'database', label: 'Database', icon: Database },
  { id: 'tools', label: 'Tools', icon: Wrench },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = Object.entries(skillsData).map(([key, data]) => ({
    key,
    ...data,
  }));

  const filteredCategories =
    activeTab === 'all'
      ? categories
      : categories.filter((cat) => cat.key === activeTab);

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full bg-indigo-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300 uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6"
          >
            Skills &{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-200">
              Technology Stack
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed"
          >
            A comprehensive overview of my frontend, backend, database, and tooling proficiencies for architecting end-to-end modern digital products.
          </motion.p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {categoryTabs.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'text-white'
                    : 'text-[#A1A1AA] hover:text-white bg-[#121222]/60 hover:bg-white/5 border border-purple-500/15'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <TabIcon className="relative z-10 w-4 h-4" />
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="space-y-14">
          <AnimatePresence mode="wait">
            {filteredCategories.map((category) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-purple-500/15 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_8px_#A855F7]" />
                      {category.title}
                    </h3>
                    <p className="text-sm text-[#A1A1AA] mt-1">
                      {category.description}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-purple-300/80 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 self-start sm:self-auto">
                    {category.skills.length} Technologies
                  </span>
                </div>

                {/* Skills Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.skills.map((skill, index) => {
                    const SkillIcon = iconMap[skill.icon] || Code2;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        className="group relative p-5 rounded-2xl bg-[#111122]/70 border border-purple-500/15 hover:border-purple-400/50 backdrop-blur-xl transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_30px_rgba(168,85,247,0.25)] flex flex-col justify-between"
                      >
                        {/* Glow on hover */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                        <div className="flex items-start justify-between mb-4">
                          <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:bg-purple-600/20 group-hover:border-purple-400 transition-all shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                            <SkillIcon className="w-5 h-5 text-purple-300 group-hover:text-white transition-colors" />
                          </div>

                          <span className="text-[11px] font-mono font-medium text-purple-300/70 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/5">
                            {skill.tag}
                          </span>
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
                            {skill.name}
                          </h4>
                          <p className="text-xs text-[#A1A1AA] mt-1 leading-snug">
                            {skill.level}
                          </p>
                        </div>

                        {/* Progress indicator */}
                        <div className="mt-4 pt-3 border-t border-purple-500/10 flex items-center justify-between text-[11px] font-mono text-[#A1A1AA]">
                          <span className="text-purple-400/90 font-medium">Proficient</span>
                          <span className="flex gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400/40" />
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
