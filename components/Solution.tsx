"use client";

import React from "react";
import Link from "next/link";
import { Zap, Lightbulb, Layers, Sliders, Trophy, ArrowRight, Sparkles } from "lucide-react";

export default function Solution() {
  return (
    <section id="solution" className="py-16 sm:py-24 bg-gradient-to-b from-purple-50/30 via-white to-slate-50/50 border-b border-purple-100/80 relative">
      <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="eyebrow">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>INTRODUCING QUICKUPP AI STUDIO</span>
          </span>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-normal text-slate-900">
            ONE PRODUCT.<br />
            <span className="font-serif italic font-semibold text-gradient-brand inline-block pr-1.5">
              MORE CREATIVE POSSIBILITIES.
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Instead of creating one video and hoping it works, build a creative system around your product. We turn your product, positioning and audience into multiple creative directions designed for testing.
          </p>
        </div>

        {/* 5 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* Card 01 */}
          <div className="rounded-2xl border border-purple-100/90 bg-white/95 p-6 sm:p-7 shadow-xs hover:border-purple-400 hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-black tracking-wider px-2.5 py-1 rounded-md border text-purple-700 bg-purple-100/90 border-purple-200">
                  01
                </span>
                <div className="h-10 w-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900 mb-2 group-hover:text-purple-700 transition-colors">
                MORE HOOKS
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Different opening angles designed to stop the scroll in the first 3 seconds, lower your cost per view, and capture immediate buyer attention.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-purple-100 text-[11px] font-mono font-bold text-purple-600">
              Pattern Interrupts • Problem Hooks • Curiosity
            </div>
          </div>

          {/* Card 02 */}
          <div className="rounded-2xl border border-purple-100/90 bg-white/95 p-6 sm:p-7 shadow-xs hover:border-purple-400 hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-black tracking-wider px-2.5 py-1 rounded-md border text-pink-700 bg-pink-100/90 border-pink-200">
                  02
                </span>
                <div className="h-10 w-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900 mb-2 group-hover:text-pink-600 transition-colors">
                MORE CONCEPTS
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Different creative ideas built around the same product—from unboxings and tutorials to comparison ads and emotional transformations.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-pink-100 text-[11px] font-mono font-bold text-pink-600">
              Unboxings • Comparisons • Routine Demos
            </div>
          </div>

          {/* Card 03 */}
          <div className="rounded-2xl border border-purple-100/90 bg-white/95 p-6 sm:p-7 shadow-xs hover:border-purple-400 hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-black tracking-wider px-2.5 py-1 rounded-md border text-cyan-700 bg-cyan-100/90 border-cyan-200">
                  03
                </span>
                <div className="h-10 w-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Layers className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                MORE FORMATS
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                UGC, avatar, product-focused, lifestyle, cinematic and more to find the exact visual style that resonates with each consumer segment.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-cyan-100 text-[11px] font-mono font-bold text-cyan-700">
              AI UGC • AI Avatar • Hyper-Realistic • Twin
            </div>
          </div>

          {/* Card 04 */}
          <div className="rounded-2xl border border-purple-100/90 bg-white/95 p-6 sm:p-7 shadow-xs hover:border-purple-400 hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-black tracking-wider px-2.5 py-1 rounded-md border text-emerald-700 bg-emerald-100/90 border-emerald-200">
                  04
                </span>
                <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sliders className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                MORE VARIATIONS
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Test different messaging, visuals, offers, CTAs, voiceovers and storytelling angles without booking a new production shoot every time.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-emerald-100 text-[11px] font-mono font-bold text-emerald-700">
              A/B Copy • Voice Accents • Offer Swaps
            </div>
          </div>

          {/* Card 05 (Spans 2 cols on lg) */}
          <div className="rounded-2xl border border-purple-300/80 bg-gradient-to-r from-purple-900 via-indigo-950 to-slate-950 p-6 sm:p-7 text-white shadow-md md:col-span-2 lg:col-span-2 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-black tracking-wider px-2.5 py-1 rounded-md bg-purple-800 text-purple-200 border border-purple-600">
                  05
                </span>
                <div className="h-10 w-10 rounded-xl bg-purple-500/30 text-purple-200 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-neon" />
                </div>
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-2">
                MORE OPPORTUNITIES TO WIN
              </h3>
              <p className="text-sm sm:text-base text-purple-100 leading-relaxed">
                Give your advertising team and media buyers more creative options to test continuously, scale winning campaigns, and lower customer acquisition costs.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-purple-800/80 flex items-center justify-between">
              <span className="text-xs font-mono text-purple-300 font-bold">Scale ROAS • Beat Ad Fatigue</span>
              <Link
                href="#audit-form"
                className="text-xs font-bold text-pink-300 hover:text-white inline-flex items-center gap-1 transition-colors"
              >
                <span>Start Testing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
