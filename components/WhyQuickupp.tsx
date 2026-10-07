"use client";

import React from "react";
import { Compass, TrendingUp, Layers, Clock, Palette, Share2, Sparkles } from "lucide-react";

const reasons = [
  {
    title: "CREATIVE-FIRST",
    desc: "We don't simply generate videos. We start with the hook, concept, audience and message.",
    icon: Compass,
    color: "text-purple-600 bg-purple-50 border-purple-200",
  },
  {
    title: "PERFORMANCE-MINDED",
    desc: "Creative is developed with short-form advertising and attention in mind.",
    icon: TrendingUp,
    color: "text-pink-600 bg-pink-50 border-pink-200",
  },
  {
    title: "MORE VARIATIONS",
    desc: "Create multiple hooks, angles, concepts and visual directions from the same product.",
    icon: Layers,
    color: "text-cyan-600 bg-cyan-50 border-cyan-200",
  },
  {
    title: "FASTER PRODUCTION",
    desc: "Reduce the traditional coordination required to produce fresh video concepts.",
    icon: Clock,
    color: "text-amber-600 bg-amber-50 border-amber-200",
  },
  {
    title: "FLEXIBLE FORMATS",
    desc: "Choose from AI UGC, Avatar, Hyper-Realistic, Cartoon and Digital Twin.",
    icon: Palette,
    color: "text-emerald-600 bg-emerald-50 border-emerald-200",
  },
  {
    title: "PAID SOCIAL READY",
    desc: "Creative designed specifically for platforms such as Meta, Instagram and TikTok.",
    icon: Share2,
    color: "text-indigo-600 bg-indigo-50 border-indigo-200",
  },
];

export default function WhyQuickupp() {
  return (
    <section id="why-quickupp" className="py-14 sm:py-20 lg:py-24 bg-white border-b border-purple-100/80 relative">
      <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10 sm:mb-14 lg:mb-16">
          <span className="eyebrow">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>09 — WHY QUICKUPP</span>
          </span>

          <h2 className="font-heading text-[1.6rem] xs:text-[1.75rem] sm:text-3xl md:text-4xl lg:text-[2.75rem] 3xl:text-5xl font-bold leading-[1.25] tracking-tight text-slate-900 py-1">
            WHY QUICKUPP AI STUDIO<br />
            <span className="font-serif italic font-normal text-gradient-brand inline-block pr-3 text-[1.1em] tracking-normal">
              More creative. Less production complexity.
            </span>
          </h2>
        </div>

        {/* 6 Premium Icon Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-6xl 3xl:max-w-7xl mx-auto">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 lg:p-7 shadow-xs hover:border-purple-300 hover:shadow-md transition-all group"
              >
                <div
                  className={`h-12 w-12 rounded-xl flex items-center justify-center mb-5 border group-hover:scale-110 transition-transform ${item.color}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
