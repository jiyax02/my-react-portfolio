import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './BrandIcons';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-purple-500/10 bg-[#06060E] py-14 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Top Section: Brand & Back to Top */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between pb-10 border-b border-purple-500/10 gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 p-[1.5px]">
              <div className="w-full h-full bg-[#080812] rounded-[10px] flex items-center justify-center font-mono font-bold text-purple-300">
                &lt;/&gt;
              </div>
            </div>
            <div>
              <p className="text-lg font-bold text-white tracking-tight">
                {personalInfo.name}
                <span className="text-purple-400">.</span>
              </p>
              <p className="text-xs text-[#A1A1AA] font-mono">
                Full Stack Web Developer
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/[0.03] hover:bg-purple-600/20 border border-purple-500/15 hover:border-purple-400/40 flex items-center justify-center text-[#A1A1AA] hover:text-white transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/[0.03] hover:bg-purple-600/20 border border-purple-500/15 hover:border-purple-400/40 flex items-center justify-center text-[#A1A1AA] hover:text-white transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 rounded-xl bg-white/[0.03] hover:bg-purple-600/20 border border-purple-500/15 hover:border-purple-400/40 flex items-center justify-center text-[#A1A1AA] hover:text-white transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-purple-600/20 border border-purple-500/15 hover:border-purple-400/40 text-xs font-mono text-purple-300 transition-all cursor-pointer shadow-[0_0_15px_rgba(168,85,247,0.1)]"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>

        {/* Quick Links Navigation */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 py-8 text-xs font-medium text-[#A1A1AA]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-purple-300 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Copyright and signature */}
        <div className="text-center text-xs text-[#A1A1AA] space-y-1">
          <p>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center justify-center gap-1.5 text-[11px] text-zinc-500 font-mono">
            Crafted with React, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
