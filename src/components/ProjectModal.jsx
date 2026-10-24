import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Layers,
  Plus,
  Minus,
  RotateCcw,
  Calculator,
  ShieldAlert,
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!project || !isOpen) return null;

  // Interactive Burger Builder Mini Demo State
  const [burgerLayers, setBurgerLayers] = useState([
    { id: 1, type: 'lettuce', name: 'Crisp Lettuce', price: 0.8, color: 'bg-emerald-500' },
    { id: 2, type: 'tomato', name: 'Fresh Tomato', price: 1.0, color: 'bg-red-500' },
    { id: 3, type: 'cheese', name: 'Cheddar Cheese', price: 1.2, color: 'bg-yellow-400' },
    { id: 4, type: 'patty', name: 'Angus Patty', price: 3.5, color: 'bg-[#532b1d]' },
  ]);

  const addIngredient = (type, name, price, color) => {
    if (burgerLayers.length >= 8) return;
    setBurgerLayers([
      { id: Date.now() + Math.random(), type, name, price, color },
      ...burgerLayers,
    ]);
  };

  const removeTopIngredient = () => {
    if (burgerLayers.length === 0) return;
    setBurgerLayers(burgerLayers.slice(1));
  };

  const resetBurger = () => {
    setBurgerLayers([
      { id: 1, type: 'lettuce', name: 'Crisp Lettuce', price: 0.8, color: 'bg-emerald-500' },
      { id: 2, type: 'tomato', name: 'Fresh Tomato', price: 1.0, color: 'bg-red-500' },
      { id: 3, type: 'cheese', name: 'Cheddar Cheese', price: 1.2, color: 'bg-yellow-400' },
      { id: 4, type: 'patty', name: 'Angus Patty', price: 3.5, color: 'bg-[#532b1d]' },
    ]);
  };

  const burgerTotalPrice = (
    4.5 + burgerLayers.reduce((acc, curr) => acc + curr.price, 0)
  ).toFixed(2);

  // Interactive Calculator Demo State
  const [calcDisplay, setCalcDisplay] = useState('0');
  const [calcTheme, setCalcTheme] = useState('dark');

  const handleCalcInput = (val) => {
    if (val === 'C') {
      setCalcDisplay('0');
      return;
    }
    if (val === '=') {
      try {
        const sanitized = calcDisplay.replace(/×/g, '*').replace(/÷/g, '/');
        if (/^[\d+\-*/. ]+$/.test(sanitized)) {
          // eslint-disable-next-line no-eval
          const res = Function(`'use strict'; return (${sanitized})`)();
          setCalcDisplay(String(Number(res.toFixed(4))));
        }
      } catch (err) {
        setCalcDisplay('Error');
      }
      return;
    }
    if (calcDisplay === '0' || calcDisplay === 'Error') {
      setCalcDisplay(val);
    } else {
      setCalcDisplay(calcDisplay + val);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl rounded-3xl bg-[#101020] border border-purple-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-purple-500/15 bg-[#141426]">
            <div>
              <span className="text-xs font-mono text-purple-300 uppercase tracking-widest">
                {project.category} Showcase
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 overflow-y-auto space-y-6">
            <p className="text-base text-zinc-300 leading-relaxed">
              {project.detailedDescription || project.description}
            </p>

            {/* Interactive Feature Demo if Available */}
            {project.isInteractive && project.interactiveType === 'burger' && (
              <div className="p-5 rounded-2xl bg-[#16162B] border border-amber-500/20 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-amber-300 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> Live Interactive Customizer
                  </h4>
                  <span className="text-xs font-mono text-white bg-amber-500/20 px-2.5 py-1 rounded-full border border-amber-500/30">
                    Est. Price: ${burgerTotalPrice}
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center py-4 bg-[#0B0B14] rounded-xl border border-white/5 min-h-[180px]">
                  {/* Top Bun */}
                  <div className="w-36 h-9 rounded-t-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 flex items-center justify-center shadow-md">
                    <div className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-200" />
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-200" />
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-200" />
                    </div>
                  </div>

                  {/* Dynamic Layers */}
                  <div className="flex flex-col items-center gap-1 my-1 w-full max-w-[200px]">
                    <AnimatePresence>
                      {burgerLayers.map((layer) => (
                        <motion.div
                          key={layer.id}
                          initial={{ scale: 0.8, opacity: 0, y: -10 }}
                          animate={{ scale: 1, opacity: 1, y: 0 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          className={`w-full h-3 rounded-full ${layer.color} shadow-sm text-[9px] text-black font-bold flex items-center justify-center font-mono`}
                        >
                          {layer.name}
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  {/* Bottom Bun */}
                  <div className="w-34 h-6 rounded-b-xl bg-gradient-to-r from-amber-600 to-amber-500" />
                </div>

                {/* Controls */}
                <div className="flex flex-wrap gap-2 justify-center pt-2">
                  <button
                    onClick={() => addIngredient('lettuce', 'Lettuce', 0.8, 'bg-emerald-500')}
                    className="px-3 py-1.5 text-xs rounded-lg bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-200 border border-emerald-500/30 flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3 h-3" /> Lettuce
                  </button>
                  <button
                    onClick={() => addIngredient('tomato', 'Tomato', 1.0, 'bg-red-500')}
                    className="px-3 py-1.5 text-xs rounded-lg bg-red-600/30 hover:bg-red-600/50 text-red-200 border border-red-500/30 flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3 h-3" /> Tomato
                  </button>
                  <button
                    onClick={() => addIngredient('cheese', 'Cheese', 1.2, 'bg-yellow-400')}
                    className="px-3 py-1.5 text-xs rounded-lg bg-yellow-500/30 hover:bg-yellow-500/50 text-yellow-200 border border-yellow-500/30 flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3 h-3" /> Cheese
                  </button>
                  <button
                    onClick={() => addIngredient('patty', 'Patty', 3.5, 'bg-[#532b1d] text-white')}
                    className="px-3 py-1.5 text-xs rounded-lg bg-amber-900/40 hover:bg-amber-900/60 text-amber-200 border border-amber-700/40 flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3 h-3" /> Patty
                  </button>
                  <button
                    onClick={removeTopIngredient}
                    className="px-3 py-1.5 text-xs rounded-lg bg-zinc-700/40 hover:bg-zinc-700/60 text-zinc-300 border border-zinc-600 flex items-center gap-1 cursor-pointer"
                  >
                    <Minus className="w-3 h-3" /> Remove Top
                  </button>
                  <button
                    onClick={resetBurger}
                    className="px-3 py-1.5 text-xs rounded-lg bg-zinc-800 text-zinc-400 hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" /> Reset
                  </button>
                </div>
              </div>
            )}

            {/* Interactive Calculator Demo */}
            {project.isInteractive && project.interactiveType === 'calculator' && (
              <div className="p-5 rounded-2xl bg-[#16162B] border border-emerald-500/20 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-emerald-300 flex items-center gap-2">
                    <Calculator className="w-4 h-4" /> Live Embedded Calculator
                  </h4>
                  <button
                    onClick={() => setCalcTheme(calcTheme === 'dark' ? 'light' : 'dark')}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-zinc-200 hover:bg-white/20"
                  >
                    Toggle Theme: {calcTheme.toUpperCase()}
                  </button>
                </div>

                <div
                  className={`max-w-xs mx-auto p-4 rounded-2xl border transition-colors ${
                    calcTheme === 'dark'
                      ? 'bg-[#0A0A14] border-purple-500/30 text-white'
                      : 'bg-zinc-100 border-zinc-300 text-zinc-900 shadow-xl'
                  }`}
                >
                  <div className="text-right p-3 mb-3 rounded-xl bg-black/20 text-2xl font-mono font-bold truncate">
                    {calcDisplay}
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {['C', '(', ')', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='].map((btn) => (
                      <button
                        key={btn}
                        onClick={() => handleCalcInput(btn)}
                        className={`py-2 rounded-xl text-sm font-mono font-semibold transition-all cursor-pointer ${
                          btn === '='
                            ? 'col-span-2 bg-emerald-500 text-black hover:bg-emerald-400 font-bold'
                            : btn === 'C'
                            ? 'bg-red-500/20 text-red-300 hover:bg-red-500/40'
                            : ['÷', '×', '-', '+'].includes(btn)
                            ? 'bg-purple-600/30 text-purple-300 hover:bg-purple-600/50'
                            : calcTheme === 'dark'
                            ? 'bg-white/5 hover:bg-white/15 text-zinc-200'
                            : 'bg-white hover:bg-zinc-200 text-zinc-800 shadow-sm'
                        }`}
                      >
                        {btn}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Architecture Highlights */}
            <div>
              <h4 className="text-sm font-bold text-purple-200 uppercase tracking-wider mb-3">
                Key Technical Highlights
              </h4>
              <div className="space-y-2">
                {project.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Badges */}
            <div>
              <h4 className="text-sm font-bold text-purple-200 uppercase tracking-wider mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Notice about placeholder links */}
            <div className="p-3.5 rounded-xl bg-purple-900/20 border border-purple-500/20 text-xs text-purple-200 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-purple-400 shrink-0" />
              <span>
                Repository and demo links are configured as placeholders in{' '}
                <code className="text-purple-300">src/data/portfolioData.js</code>. Update them with your live links at any time!
              </span>
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="p-6 border-t border-purple-500/15 bg-[#141426] flex items-center justify-end gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-zinc-300 bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repo</span>
            </a>
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
