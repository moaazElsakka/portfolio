import React from 'react';
import { CURRENT_FOCUS } from '../data/portfolioData';
import { Brain, LineChart, Code2, Sparkles, ArrowUpRight } from 'lucide-react';

export const CurrentFocus: React.FC = () => {
  const getFocusIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-7 h-7 text-cyan-400" />;
      case 'LineChart':
        return <LineChart className="w-7 h-7 text-blue-400" />;
      default:
        return <Code2 className="w-7 h-7 text-indigo-400" />;
    }
  };

  return (
    <section id="exploring" className="py-20 bg-slate-900/40 dark:bg-slate-900/40 border-y border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-500 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Growth & Learning Direction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Currently Exploring
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm sm:text-base max-w-xl">
            My primary learning trajectory and active exploration areas in Artificial Intelligence, Data Science, and core Computer Science.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CURRENT_FOCUS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-950 rounded-2xl p-7 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col justify-between hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div>
                {/* Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                    {getFocusIcon(item.icon)}
                  </div>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-cyan-500 bg-cyan-500/10 px-2.5 py-1 rounded-md">
                    Active Study
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Points List */}
                <ul className="space-y-2.5 mb-6">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <ArrowUpRight className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center justify-between">
                <span>Building foundations</span>
                <span className="text-cyan-500 font-mono">Exploring & Learning</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
