"use client";

import React from "react";
import { AlertCircle } from "lucide-react";

export default function Problem() {
  return (
    <section id="problem" className="py-14 sm:py-20 lg:py-24 bg-white border-b border-purple-100/80 relative overflow-hidden">
      
      {/* Background radial glow with OKLCH */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 h-64 w-64 sm:h-96 sm:w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.68 0.27 350) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 h-64 w-64 sm:h-96 sm:w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.65 0.28 305) 0%, transparent 70%)" }}
      />

      <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="eyebrow text-[11px] sm:text-xs">
            <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
            <span>Creative Fatigue Is Expensive</span>
          </span>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold !leading-[1.2] tracking-tight text-slate-900">
            Your Product Isn't the Problem<br />
            <span className="font-serif italic font-bold text-gradient-brand inline-block pr-1.5">
              Your creative volume might be
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
            <p className="font-bold text-purple-900 bg-purple-50 p-4 rounded-xl border border-purple-100">
              The solution isn't always a bigger media budget.<br />
              Sometimes, you need more creative ideas to test.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

