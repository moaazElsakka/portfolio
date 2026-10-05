import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, BookOpen, Layers, CheckCircle } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-950 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-500 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3" />
        </div>

        {/* Education Timeline Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            
            {/* Left Column - Degree Info */}
            <div className="lg:col-span-5 space-y-4 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 pb-6 lg:pb-0 lg:pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-blue-500/10 text-blue-500">
                <span>{EDUCATION_DATA.year} Student</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {EDUCATION_DATA.degree}
              </h3>

              <div className="space-y-2">
                <p className="text-lg font-semibold text-cyan-600 dark:text-cyan-400">
                  {EDUCATION_DATA.institution}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Location: {EDUCATION_DATA.location}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80">
                <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <Layers className="w-4 h-4 text-cyan-500" />
                  <span>Specialization: <strong className="text-slate-900 dark:text-white">{EDUCATION_DATA.specialization}</strong></span>
                </div>
              </div>
            </div>

            {/* Right Column - Relevant Coursework */}
            <div className="lg:col-span-7">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-500" />
                <span>Relevant Coursework & Core Topics</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EDUCATION_DATA.coursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800/80 text-slate-800 dark:text-slate-200 text-sm font-medium"
                  >
                    <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
