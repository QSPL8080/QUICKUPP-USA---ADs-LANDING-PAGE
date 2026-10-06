"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, Volume2, VolumeX, ShieldCheck, CheckCircle2, Sparkles, ChevronRight, Gift } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-purple-50/60 via-white to-slate-50/50 pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-purple-100/80"
    >
      {/* Background Atmosphere Lights */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-20 h-[500px] w-[500px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-32 h-[500px] w-[500px] rounded-full blur-3xl opacity-25"
        style={{ background: "radial-gradient(circle, rgba(236, 72, 153, 0.30) 0%, transparent 70%)" }}
      />

      <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Brand Banner Image */}
        <div className="w-full mb-8 lg:mb-12 flex justify-start">
          <img
            src="/images/ai studio logo hero.png"
            alt="Quickupp AI Studio"
            className="w-full max-w-[320px] sm:max-w-[480px] lg:max-w-[620px] h-auto object-contain select-none"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Hero Content (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
            
            {/* Eyebrow */}
            <div className="eyebrow">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
              </span>
              <span>AI VIDEO ADS FOR DTC BRANDS</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.22] tracking-tight text-slate-900 py-1">
              CREATE MORE ADS.<br />
              TEST MORE IDEAS.<br />
              <span className="font-serif italic font-normal text-gradient-brand inline-block pr-3 text-[1.12em] tracking-normal">
                Find What Works.
              </span>
            </h1>

            {/* Supporting Copy */}
            <div className="space-y-3.5 text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
              <p className="font-bold text-slate-900 text-base sm:text-lg">
                Your product deserves more than the same 2–3 ads.
              </p>
              <p>
                Quickupp AI Studio creates conversion-focused AI video ads for DTC and e-commerce brands without the traditional production overhead of expensive shoots, creators, locations and production teams.
              </p>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-purple-900 pt-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Create more creative variations for Meta, Instagram, TikTok and other short-form channels.</span>
              </div>
            </div>

            {/* CTAs & Microcopy */}
            <div className="w-full pt-2 flex flex-col space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="#audit-form"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-bold text-white shadow-md glow-neon hover:brightness-110 active:scale-95 transition-all text-center"
                >
                  <span>GET YOUR FREE CREATIVE AUDIT →</span>
                </Link>

                <Link
                  href="#showcase"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 shadow-xs hover:border-purple-400 hover:text-purple-700 hover:bg-purple-50/50 active:scale-95 transition-all text-center"
                >
                  <Play className="w-4 h-4 text-purple-600 fill-purple-600" />
                  <span>VIEW OUR WORK →</span>
                </Link>
              </div>

              <p className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-purple-600 shrink-0" />
                <span>No commitment. We'll identify creative opportunities for your brand.</span>
              </p>
            </div>

            {/* Highlight Badges */}
            <div className="pt-4 border-t border-slate-200/80 w-full flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                48H Fast Turnaround
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                Meta, TikTok & Reels Ready
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-pink-500"></span>
                Starting at $79 / AI Video
              </span>
            </div>

          </div>

          {/* Right Hero DTC Ad Showcase (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            
            <div className="w-full max-w-xl lg:max-w-none relative pt-4 pb-2">
              
              {/* Soft purple glow backdrop */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-purple-400/25 via-pink-400/20 to-indigo-400/20 blur-3xl rounded-3xl -z-10"
              />

              {/* 3 DTC Ad Phone Mockup Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-4 items-stretch">
                
                {/* CARD 01 - AI UGC */}
                <div className="relative flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#160e29] via-[#0f0a1c] to-[#080511] border border-purple-500/30 p-4 shadow-xl hover:border-pink-400/60 hover:-translate-y-1 transition-all duration-300 min-h-[380px] sm:min-h-[410px]">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-1 pb-2 border-b border-white/10">
                    <span className="font-mono text-[10px] font-bold text-pink-300 bg-pink-950/90 px-2 py-0.5 rounded border border-pink-500/40">
                      [ VIDEO 01 ]
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[9px] font-bold font-mono">
                      ROAS 4.6x
                    </span>
                  </div>

                  {/* Center Graphic */}
                  <div className="my-auto py-6 flex flex-col items-center justify-center text-center space-y-2.5">
                    <div className="h-13 w-13 rounded-full bg-gradient-to-tr from-pink-600 to-purple-600 p-[1px] shadow-lg">
                      <div className="h-full w-full rounded-full bg-[#160e29] flex items-center justify-center text-pink-400 hover:scale-105 transition-transform">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white tracking-wide block">AI UGC TESTIMONIAL</span>
                      <span className="text-[10px] text-pink-300/80 font-medium">Scroll-Stop Hook • Routine</span>
                    </div>
                  </div>

                  {/* Bottom Native Feed UI */}
                  <div className="space-y-2">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/10 text-white space-y-0.5">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="font-bold text-pink-300">@glow.skincare</span>
                        <span className="text-[9px] text-slate-400">#ad</span>
                      </div>
                      <p className="text-[10px] text-slate-200 line-clamp-2">
                        "The barrier repair is insane! 🔥 3 days in and my skin transformed."
                      </p>
                    </div>
                    <div className="flex items-center justify-between p-2 px-3 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-bold text-[11px] shadow-md transition-colors">
                      <span>Shop 20% Off Bundle</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* CARD 02 - AI AVATAR (Top Hook Winner - Elevated) */}
                <div className="relative flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#1c1236] via-[#120a24] to-[#0a0518] border-2 border-purple-400 p-4 shadow-2xl hover:border-purple-300 hover:-translate-y-1 transition-all duration-300 min-h-[380px] sm:min-h-[410px] sm:-translate-y-2">
                  
                  {/* Floating Top Badge */}
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap bg-gradient-brand text-white text-[9px] font-black uppercase px-3 py-1 rounded-full shadow-lg glow-neon flex items-center gap-1 border border-white/30">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    <span>TOP HOOK WINNER</span>
                  </div>

                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-1 pb-2 border-b border-white/10 pt-1">
                    <span className="font-mono text-[10px] font-bold text-purple-200 bg-purple-950/90 px-2 py-0.5 rounded border border-purple-400/50">
                      [ VIDEO 02 ]
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[9px] font-bold font-mono">
                      CTR 3.8%
                    </span>
                  </div>

                  {/* Center Graphic */}
                  <div className="my-auto py-6 flex flex-col items-center justify-center text-center space-y-2.5">
                    <div className="h-13 w-13 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 p-[1px] shadow-lg">
                      <div className="h-full w-full rounded-full bg-[#1c1236] flex items-center justify-center text-purple-300 hover:scale-105 transition-transform">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white tracking-wide block">AI AVATAR EXPLAINER</span>
                      <span className="text-[10px] text-purple-300/80 font-medium">Mechanism of Action</span>
                    </div>
                  </div>

                  {/* Bottom Native Feed UI */}
                  <div className="space-y-2">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/10 text-white space-y-0.5">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="font-bold text-purple-300">@apex.wellness</span>
                        <span className="text-[9px] text-slate-400">#sponsored</span>
                      </div>
                      <p className="text-[10px] text-slate-200 line-clamp-2">
                        "Stop taking regular collagen. Liposomal absorbs 10x faster."
                      </p>
                    </div>
                    <div className="flex items-center justify-between p-2 px-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-[11px] shadow-md transition-colors">
                      <span>Get 30-Day Starter Kit</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* CARD 03 - HYPER-REALISTIC PRODUCT AD */}
                <div className="relative flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#0f192b] via-[#09111f] to-[#050912] border border-cyan-500/30 p-4 shadow-xl hover:border-cyan-400/60 hover:-translate-y-1 transition-all duration-300 min-h-[380px] sm:min-h-[410px]">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-1 pb-2 border-b border-white/10">
                    <span className="font-mono text-[10px] font-bold text-cyan-300 bg-cyan-950/90 px-2 py-0.5 rounded border border-cyan-500/40">
                      [ VIDEO 03 ]
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 text-[9px] font-bold font-mono">
                      CPA -34%
                    </span>
                  </div>

                  {/* Center Graphic */}
                  <div className="my-auto py-6 flex flex-col items-center justify-center text-center space-y-2.5">
                    <div className="h-13 w-13 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 p-[1px] shadow-lg">
                      <div className="h-full w-full rounded-full bg-[#0f192b] flex items-center justify-center text-cyan-300 hover:scale-105 transition-transform">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white tracking-wide block">HYPER-REALISTIC 3D</span>
                      <span className="text-[10px] text-cyan-300/80 font-medium">Liquid & Macro Textures</span>
                    </div>
                  </div>

                  {/* Bottom Native Feed UI */}
                  <div className="space-y-2">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/10 text-white space-y-0.5">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="font-bold text-cyan-300">@lumina.jewelry</span>
                        <span className="text-[9px] text-slate-400">#luxury</span>
                      </div>
                      <p className="text-[10px] text-slate-200 line-clamp-2">
                        "Luxury reimagined. ✨ Solid 18k waterproof gold aesthetic."
                      </p>
                    </div>
                    <div className="flex items-center justify-between p-2 px-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-[11px] shadow-md transition-colors">
                      <span>Claim Free Gift With Order</span>
                      <Gift className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

              </div>

              {/* Small text below videos */}
              <div className="mt-5 text-center">
                <p className="text-xs sm:text-sm font-semibold tracking-wider text-purple-950/80 font-mono bg-purple-50/80 py-2 px-4 rounded-full border border-purple-200/60 inline-block shadow-2xs">
                  AI UGC • AI Avatar • Product Video • Hyper-Realistic • Digital Twin
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
