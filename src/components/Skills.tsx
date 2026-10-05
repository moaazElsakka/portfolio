import React from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';
import { Code2, Database, Cpu, Wrench, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming Languages':
        return <Code2 className="w-5 h-5 text-cyan-500" />;
      case 'Data & Databases':
        return <Database className="w-5 h-5 text-blue-500" />;
      case 'Computer Science Fundamentals':
        return <Cpu className="w-5 h-5 text-indigo-500" />;
      default:
        return <Wrench className="w-5 h-5 text-emerald-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-950 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-500 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Knowledge
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm sm:text-base max-w-xl">
            A comprehensive overview of programming languages, databases, computer science principles, and practical tools.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3" />
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_GROUPS.map((group, groupIdx) => (
            <div
              key={groupIdx}
              className="bg-white dark:bg-slate-900/90 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-sm transition-all hover:border-slate-300 dark:hover:border-slate-700"
            >
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-200 dark:border-slate-800">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800">
                  {getCategoryIcon(group.category)}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, skillIdx) => {
                  if (skill.emphasized) {
                    // Visually Emphasized Python Badge
                    return (
                      <div
                        key={skillIdx}
                        className="group relative flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-indigo-500/15 border-2 border-cyan-500 text-slate-900 dark:text-white font-bold shadow-lg shadow-cyan-500/10 transform hover:-translate-y-0.5 transition-all w-full sm:w-auto"
                      >
                        <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-lg text-cyan-600 dark:text-cyan-300">{skill.name}</span>
                        <span className="ml-auto inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-cyan-500 text-slate-950">
                          <Sparkles className="w-3 h-3" /> Primary Focus
                        </span>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={skillIdx}
                      className="flex items-center justify-between gap-3 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/50 text-slate-800 dark:text-slate-200 text-sm font-medium hover:border-cyan-500/40 transition-colors"
                    >
                      <span>{skill.name}</span>
                      {skill.level && (
                        <span className="text-[11px] font-normal text-slate-500 dark:text-slate-400 bg-slate-200 dark:bg-slate-900/80 px-2 py-0.5 rounded-md">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
