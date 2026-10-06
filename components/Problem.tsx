"use client";

import React from "react";
import { AlertCircle, Check, X, Sparkles } from "lucide-react";

export default function Problem() {
  return (
    <section id="problem" className="py-16 sm:py-24 bg-white border-b border-purple-100/80 relative overflow-hidden">
      
      {/* Background radial glow with OKLCH */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.68 0.27 350) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.65 0.28 305) 0%, transparent 70%)" }}
      />

      <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <span className="eyebrow">
            <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
            <span>CREATIVE FATIGUE IS EXPENSIVE.</span>
          </span>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.25] tracking-tight text-slate-900 py-1">
            YOUR PRODUCT ISN'T THE PROBLEM.<br />
            <span className="font-serif italic font-normal text-gradient-brand inline-block pr-3 text-[1.1em] tracking-normal">
              Your creative volume might be.
            </span>
          </h2>

          <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto pt-2">
            <p className="font-semibold text-slate-900">
              DTC advertising moves fast.
            </p>
            <p>
              A creative works. Performance improves. Then fatigue sets in.<br />
              Your audience has seen the same hook.<br />
              The same product angle.<br />
              The same UGC format.<br />
              And suddenly, your winning ad starts losing momentum.
            </p>
            <p className="font-bold text-purple-900 bg-purple-50 p-3.5 rounded-xl border border-purple-100">
              The solution isn't always a bigger media budget.<br />
              Sometimes, you need more creative ideas to test.
            </p>
          </div>
        </div>

        {/* Split-Screen Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Left: Traditional Production */}
          <div className="rounded-2xl border border-rose-200/90 bg-rose-50/40 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-rose-200">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-rose-600 font-bold">LEFT —</span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">TRADITIONAL PRODUCTION</h3>
                </div>
              </div>

              <ul className="space-y-3.5 text-sm sm:text-base text-slate-700 font-medium">
                <li className="flex items-center gap-3">
                  <span className="h-6 w-6 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center font-bold shrink-0">✕</span>
                  <span>• Find creators</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-6 w-6 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center font-bold shrink-0">✕</span>
                  <span>• Book shoots</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-6 w-6 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center font-bold shrink-0">✕</span>
                  <span>• Organize locations</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-6 w-6 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center font-bold shrink-0">✕</span>
                  <span>• Write scripts</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-6 w-6 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center font-bold shrink-0">✕</span>
                  <span>• Coordinate production</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-6 w-6 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center font-bold shrink-0">✕</span>
                  <span>• Edit</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-6 w-6 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center font-bold shrink-0">✕</span>
                  <span>• Repeat</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: AI Creative Workflow */}
          <div className="rounded-2xl border-2 border-purple-400 bg-gradient-to-b from-purple-50/90 via-white to-purple-50/50 p-6 sm:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-brand"></div>

            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-purple-200">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-purple-700 font-bold">RIGHT —</span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                    <span>AI CREATIVE WORKFLOW</span>
                    <Sparkles className="w-4 h-4 text-purple-600" />
                  </h3>
                </div>
              </div>

              <ul className="space-y-3.5 text-sm sm:text-base text-slate-900 font-semibold">
                <li className="flex items-center gap-3">
                  <span className="h-6 w-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">✓</span>
                  <span>• Research</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-6 w-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">✓</span>
                  <span>• Hooks</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-6 w-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">✓</span>
                  <span>• Concepts</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-6 w-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">✓</span>
                  <span>• Scripts</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-6 w-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">✓</span>
                  <span>• AI Production</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-6 w-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">✓</span>
                  <span>• Editing</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-6 w-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">✓</span>
                  <span>• Variations</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
