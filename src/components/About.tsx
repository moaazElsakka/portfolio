import React from 'react';
import { BookOpen, MapPin, GraduationCap, Award, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-900/40 dark:bg-slate-900/40 border-y border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-500 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Background & Identity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative Paragraphs */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
            {PERSONAL_INFO.aboutBio.map((paragraph, index) => (
              <p key={index} className="bg-white/50 dark:bg-slate-950/40 p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm">
                {paragraph}
              </p>
            ))}

            <div className="pt-2 flex items-center gap-3 text-sm text-cyan-600 dark:text-cyan-400 font-medium">
              <Compass className="w-4 h-4" />
              <span>Dedicated to continuous learning & hands-on practical problem solving</span>
            </div>
          </div>

          {/* Quick Info Sidebar Card */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-slate-950 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white pb-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-cyan-500" />
                <span>Academic Information</span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-500 shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">Education</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      Computer Science — {PERSONAL_INFO.university}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500 shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">Current Year</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {PERSONAL_INFO.year}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">Specialization</span>
                    <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                      {PERSONAL_INFO.specialization}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">Location</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <span className="inline-block w-full py-2 px-3 text-center text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 rounded-lg">
                  Career Target: AI & Data Science
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
