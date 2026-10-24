import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, FolderGit2, Send, Terminal, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  const titles = personalInfo.titles || ['Creative Web Developer', 'Full Stack Developer'];

  useEffect(() => {
    const currentFullTitle = titles[currentTitleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setDisplayedText(currentFullTitle.substring(0, displayedText.length + 1));
        setTypingSpeed(100);

        if (displayedText.length + 1 === currentFullTitle.length) {
          // Pause at full word
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        setDisplayedText(currentFullTitle.substring(0, displayedText.length - 1));
        setTypingSpeed(50);

        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex, titles, typingSpeed]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] max-w-full rounded-full bg-gradient-to-tr from-purple-600/20 via-indigo-600/15 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[90px] pointer-events-none -z-10" />

      {/* Center-Aligned Content Container */}
      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#161626]/80 border border-purple-500/20 backdrop-blur-xl shadow-[0_0_20px_rgba(168,85,247,0.15)] mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-medium text-purple-200 tracking-wide">
            {personalInfo.roleBadge}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
        </motion.div>

        {/* Oversized Cinematic Typography Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mb-6"
        >
          <p className="text-sm sm:text-base md:text-lg font-mono uppercase tracking-[0.25em] text-[#C4B5FD] mb-2 font-semibold">
            Hello World, I'm
          </p>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-white select-none">
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-purple-200 drop-shadow-[0_10px_35px_rgba(168,85,247,0.3)]">
                {personalInfo.name}
              </span>
              <span className="text-purple-400">.</span>
            </span>
          </h1>
        </motion.div>

        {/* Dynamic Typing Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-12 sm:h-16 flex items-center justify-center gap-2 mb-6"
        >
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight font-sans">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C4B5FD] via-purple-300 to-[#A855F7]">
              {displayedText}
            </span>
            <span className="inline-block w-[3px] h-6 sm:h-8 ml-1 bg-purple-400 animate-pulse align-middle shadow-[0_0_8px_#A855F7]" />
          </span>
        </motion.div>

        {/* Center Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-[#A1A1AA] leading-relaxed mb-10 font-normal"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Center-Aligned Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Explore My Work Button */}
          <button
            onClick={() => scrollToSection('projects')}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white text-base overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-500 shadow-[0_0_30px_rgba(168,85,247,0.35)] hover:shadow-[0_0_40px_rgba(168,85,247,0.55)] hover:-translate-y-1 active:translate-y-0 cursor-pointer"
          >
            <FolderGit2 className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            <span>Explore My Work</span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none transition-transform" />
          </button>

          {/* Contact Me Button */}
          <button
            onClick={() => scrollToSection('contact')}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-[#C4B5FD] text-base bg-[#121222]/80 hover:bg-[#18182E] border border-purple-500/30 hover:border-purple-400/60 backdrop-blur-xl transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(196,181,253,0.25)] hover:-translate-y-1 active:translate-y-0 cursor-pointer"
          >
            <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 text-purple-400" />
            <span className="text-white group-hover:text-purple-200 transition-colors">Contact Me</span>
          </button>
        </motion.div>

        {/* Tech Stack Subtle Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-[#A1A1AA] font-mono"
        >
          <span className="text-purple-400/80 font-semibold uppercase tracking-wider flex items-center gap-1.5 mr-1">
            <Terminal className="w-3.5 h-3.5" /> Stack:
          </span>
          {['React.js', 'Next.js', 'Node.js', 'Tailwind CSS', 'MongoDB', 'REST APIs'].map((item) => (
            <span
              key={item}
              className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/5 hover:border-purple-500/30 hover:text-white transition-colors"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Small Animated Scroll-Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={() => scrollToSection('about')}
      >
        <span className="text-[11px] font-mono tracking-widest text-[#A1A1AA] uppercase group-hover:text-purple-300 transition-colors">
          Scroll Down
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-purple-500/30 group-hover:border-purple-400/60 p-1 flex justify-center bg-[#080812]/40 backdrop-blur-sm transition-colors">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#A855F7]"
          />
        </div>
      </motion.div>
    </section>
  );
}
