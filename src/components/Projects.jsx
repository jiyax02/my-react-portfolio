import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FolderGit2,
  ExternalLink,
  Sparkles,
  Layers,
  ArrowUpRight,
  Eye,
  Info,
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { projectsData } from '../data/portfolioData';
import ProjectCardMockup from './ProjectCardMockup';
import ProjectModal from './ProjectModal';

const filterCategories = ['All', 'Frontend', 'React.js', 'Next.js', 'Full Stack', 'Utility'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  const handleLinkClick = (e, type, url) => {
    // If it's a placeholder URL, provide helpful visual toast feedback
    if (url.includes('placeholder')) {
      e.preventDefault();
      setToastMessage(
        `${type} URL is currently a placeholder. Set your actual link in src/data/portfolioData.js!`
      );
      setTimeout(() => setToastMessage(null), 4000);
    }
  };

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[130px] pointer-events-none" />

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
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Curated Portfolio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6"
          >
            Featured Projects &{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-200">
              Web Applications
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed"
          >
            A collection of interactive web applications, responsive client interfaces, and secure backend systems built with precision.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`relative px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeFilter === cat
                  ? 'text-white'
                  : 'text-[#A1A1AA] hover:text-white bg-[#121222]/60 hover:bg-white/5 border border-purple-500/15'
              }`}
            >
              {activeFilter === cat && (
                <motion.div
                  layoutId="activeProjectFilter"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative rounded-3xl bg-[#111122]/75 border border-purple-500/15 hover:border-purple-400/50 backdrop-blur-xl overflow-hidden transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(168,85,247,0.25)] flex flex-col justify-between"
              >
                {/* Glow Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  {/* Visual Preview / Mockup Area */}
                  <div className="p-4 pb-0 relative">
                    <ProjectCardMockup
                      type={project.mockupType}
                      accentColor={project.accentColor}
                    />

                    {/* Quick View Overlay on hover */}
                    <div className="absolute inset-4 top-4 rounded-xl bg-black/60 opacity-0 group-hover:opacity-100 backdrop-blur-sm flex items-center justify-center gap-3 transition-opacity duration-300">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 shadow-lg cursor-pointer transition-all transform scale-95 group-hover:scale-100"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Details</span>
                      </button>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-purple-400">
                        {project.category}
                      </span>
                      {project.isInteractive && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-amber-300 bg-amber-500/15 px-2 py-0.5 rounded-full border border-amber-500/20">
                          <Sparkles className="w-2.5 h-2.5" /> Interactive
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors mb-2">
                      {project.title}
                    </h3>

                    <p className="text-sm text-[#A1A1AA] leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.04] text-purple-200/80 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons (GitHub & Live Demo) */}
                <div className="p-6 pt-0 border-t border-purple-500/10 mt-auto flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => handleLinkClick(e, 'GitHub', project.githubUrl)}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => handleLinkClick(e, 'Live Demo', project.liveDemoUrl)}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Toast Notification for Placeholder feedback */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed bottom-6 right-6 z-50 max-w-md p-4 rounded-2xl bg-[#16162B] border border-purple-500/40 text-purple-200 text-sm shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex items-start gap-3"
            >
              <Info className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <span>{toastMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project Details Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
