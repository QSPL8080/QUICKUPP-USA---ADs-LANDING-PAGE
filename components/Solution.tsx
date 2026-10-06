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

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.25] tracking-tight text-slate-900 py-1">
            ONE PRODUCT.<br />
            <span className="font-serif italic font-normal text-gradient-brand inline-block pr-3 text-[1.1em] tracking-normal">
              More creative possibilities.
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
                Different opening angles designed to stop the scroll.
              </p>
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
                Different creative ideas built around the same product.
              </p>
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
                UGC, avatar, product-focused, lifestyle, cinematic and more.
              </p>
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
                Test different messaging, visuals, offers and storytelling.
              </p>
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
                Give your advertising team more creative options to test.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-purple-800/80 flex items-center justify-between">
              <span className="text-xs font-mono text-purple-300 font-bold">Quickupp AI Studio</span>
              <Link
                href="#audit-form"
                className="text-xs font-bold text-pink-300 hover:text-white inline-flex items-center gap-1 transition-colors"
              >
                <span>GET YOUR FREE AUDIT →</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
