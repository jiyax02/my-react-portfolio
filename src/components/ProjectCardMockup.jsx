import React from 'react';
import { Layers, ShieldCheck, CheckSquare, Calculator, BarChart3, Lock, Check } from 'lucide-react';

export default function ProjectCardMockup({ type, accentColor }) {
  if (type === 'burger') {
    return (
      <div className="w-full h-48 sm:h-52 rounded-xl bg-gradient-to-b from-[#18182E] to-[#121222] p-4 flex flex-col items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="text-[10px] font-mono text-purple-300/60 ml-2">burger-builder.app</span>
        </div>

        <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30">
          $12.50 • 680 kcal
        </div>

        {/* Visual Burger Layers */}
        <div className="flex flex-col items-center gap-1 mt-4">
          {/* Top Bun */}
          <div className="w-32 h-8 rounded-t-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 shadow-md relative flex items-center justify-center">
            <div className="flex gap-2">
              <span className="w-1 h-1 rounded-full bg-amber-200" />
              <span className="w-1 h-1 rounded-full bg-amber-200" />
              <span className="w-1 h-1 rounded-full bg-amber-200" />
            </div>
          </div>
          {/* Lettuce */}
          <div className="w-34 h-2.5 rounded-full bg-emerald-500 shadow-sm" />
          {/* Tomato */}
          <div className="w-30 h-2.5 rounded-full bg-red-500" />
          {/* Cheese */}
          <div className="w-32 h-2 rounded bg-yellow-400 rotate-1 shadow-sm" />
          {/* Beef Patty */}
          <div className="w-32 h-4 rounded-lg bg-[#532b1d] shadow-inner" />
          {/* Bottom Bun */}
          <div className="w-30 h-5 rounded-b-xl bg-gradient-to-r from-amber-600 to-amber-500" />
        </div>

        <div className="absolute bottom-2 text-[10px] font-mono text-amber-300/80 flex items-center gap-1.5">
          <Layers className="w-3 h-3" /> Live Ingredient Customization
        </div>
      </div>
    );
  }

  if (type === 'agency') {
    return (
      <div className="w-full h-48 sm:h-52 rounded-xl bg-gradient-to-b from-[#18182E] to-[#121222] p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
            <span className="text-[11px] font-bold text-white tracking-wide">NEXUS DIGITAL</span>
          </div>
          <span className="text-[10px] font-mono bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded border border-purple-500/30">
            Growth +184%
          </span>
        </div>

        {/* Agency Metrics Bar */}
        <div className="grid grid-cols-3 gap-2 my-auto">
          <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5 text-center">
            <p className="text-[10px] text-[#A1A1AA]">Campaigns</p>
            <p className="text-sm font-bold text-white">48 Active</p>
          </div>
          <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5 text-center">
            <p className="text-[10px] text-[#A1A1AA]">ROAS</p>
            <p className="text-sm font-bold text-purple-400">4.8x Avg</p>
          </div>
          <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5 text-center">
            <p className="text-[10px] text-[#A1A1AA]">CTR</p>
            <p className="text-sm font-bold text-indigo-300">8.9%</p>
          </div>
        </div>

        {/* Mini Chart Bars */}
        <div className="flex items-end gap-1.5 h-8 w-full px-2">
          {[35, 55, 40, 70, 60, 90, 85, 100].map((h, i) => (
            <div
              key={i}
              style={{ height: `${h}%` }}
              className="flex-1 rounded-t bg-gradient-to-t from-purple-600/40 to-indigo-400"
            />
          ))}
        </div>
      </div>
    );
  }

  if (type === 'todo') {
    return (
      <div className="w-full h-48 sm:h-52 rounded-xl bg-gradient-to-b from-[#18182E] to-[#121222] p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
        <div className="flex items-center justify-between pb-2 border-b border-white/5">
          <span className="text-xs font-bold text-white flex items-center gap-1.5">
            <CheckSquare className="w-3.5 h-3.5 text-cyan-400" /> Task Master
          </span>
          <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
            3 of 4 Done
          </span>
        </div>

        <div className="space-y-1.5 my-auto">
          <div className="flex items-center gap-2 p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs text-white">
            <span className="w-3.5 h-3.5 rounded bg-cyan-400 flex items-center justify-center text-[#080812]">
              <Check className="w-2.5 h-2.5 stroke-[3]" />
            </span>
            <span className="line-through text-cyan-200/70 text-[11px]">Deploy Next.js microservice</span>
          </div>

          <div className="flex items-center gap-2 p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs text-white">
            <span className="w-3.5 h-3.5 rounded bg-cyan-400 flex items-center justify-center text-[#080812]">
              <Check className="w-2.5 h-2.5 stroke-[3]" />
            </span>
            <span className="line-through text-cyan-200/70 text-[11px]">Audit Lighthouse SEO score</span>
          </div>

          <div className="flex items-center gap-2 p-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-xs text-white">
            <span className="w-3.5 h-3.5 rounded border border-white/30" />
            <span className="text-[11px] text-zinc-300">Optimize server cache hydration</span>
          </div>
        </div>

        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
          <div className="h-full w-3/4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
        </div>
      </div>
    );
  }

  if (type === 'calculator') {
    return (
      <div className="w-full h-48 sm:h-52 rounded-xl bg-gradient-to-b from-[#18182E] to-[#121222] p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
        <div className="flex items-center justify-between pb-2 border-b border-white/5">
          <span className="text-xs font-bold text-white flex items-center gap-1.5">
            <Calculator className="w-3.5 h-3.5 text-emerald-400" /> ProCalc Engine
          </span>
          <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-white/5 text-[9px] font-mono text-zinc-400">
            <span>Dark</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </div>
        </div>

        <div className="p-2 rounded-lg bg-[#0E0E1A] border border-emerald-500/20 text-right">
          <span className="text-[10px] text-zinc-500 block font-mono">1,420 × 12.5%</span>
          <span className="text-lg font-mono font-bold text-emerald-400 tracking-wider">177.50</span>
        </div>

        <div className="grid grid-cols-4 gap-1">
          {['C', '±', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+'].slice(0, 12).map((key, i) => (
            <div
              key={i}
              className="py-1 text-center rounded bg-white/[0.04] text-[10px] font-mono text-zinc-300 hover:bg-emerald-500/20"
            >
              {key}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Default: Auth system
  return (
    <div className="w-full h-48 sm:h-52 rounded-xl bg-gradient-to-b from-[#18182E] to-[#121222] p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
      <div className="flex items-center justify-between pb-2 border-b border-white/5">
        <span className="text-xs font-bold text-white flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-pink-400" /> Secure Auth Guardian
        </span>
        <span className="text-[10px] font-mono text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded border border-pink-500/20">
          JWT Encrypted
        </span>
      </div>

      <div className="space-y-2 my-auto">
        <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between">
          <span className="text-[10px] font-mono text-zinc-400">Algorithm</span>
          <span className="text-[10px] font-mono text-pink-300">HS256 (JWT)</span>
        </div>
        <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between">
          <span className="text-[10px] font-mono text-zinc-400">Salt Rounds</span>
          <span className="text-[10px] font-mono text-purple-300">10 bcrypt rounds</span>
        </div>
        <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1.5 text-[10px] text-emerald-300">
          <Lock className="w-3 h-3" />
          <span>Session Token: Valid & Active</span>
        </div>
      </div>

      <div className="text-[9px] font-mono text-zinc-500 truncate">
        Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
      </div>
    </div>
  );
}
