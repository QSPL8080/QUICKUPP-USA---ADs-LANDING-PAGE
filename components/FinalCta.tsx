"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function FinalCta() {
  return (
    <section
      id="final-cta"
      className="py-20 sm:py-28 bg-gradient-to-b from-[#0e081e] via-[#160a30] to-[#0a0518] text-white relative overflow-hidden"
    >
      {/* Radiant Glow Lights */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-brand opacity-25 blur-[120px] rounded-full"
      />

      <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-900/40 px-4 py-1.5 text-xs font-bold text-purple-200 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
          <span>READY TO CREATE MORE?</span>
        </div>

        {/* Headline */}
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-4xl mx-auto">
          YOUR NEXT WINNING AD<br />
          COULD BE ONE CREATIVE<br />
          <span className="font-serif italic font-bold text-gradient-brand">VARIATION AWAY.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-purple-200 text-base sm:text-xl font-semibold max-w-2xl mx-auto leading-relaxed">
          More hooks. More angles. More creative.<br />
          More opportunities to find what works.
        </p>

        {/* CTAs */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#audit-form"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-brand px-8 py-4 text-base font-bold text-white shadow-lg glow-neon-lg hover:brightness-110 active:scale-95 transition-all w-full sm:w-auto text-center"
          >
            <span>GET YOUR FREE DTC CREATIVE AUDIT →</span>
          </Link>

          <Link
            href="#showcase"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md hover:bg-white/20 hover:border-purple-300 transition-all w-full sm:w-auto text-center"
          >
            <Play className="w-4 h-4 text-pink-400 fill-pink-400" />
            <span>VIEW OUR WORK →</span>
          </Link>
        </div>

        <p className="text-xs text-purple-300/80 font-medium pt-2">
          Tell us about your brand and we'll identify potential creative opportunities.
        </p>

      </div>
    </section>
  );
}
