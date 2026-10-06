"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, Volume2, VolumeX, ShieldCheck, CheckCircle2, Sparkles, ChevronRight, Gift } from "lucide-react";

export default function Hero() {
  const [muted1, setMuted1] = useState(true);
  const [muted2, setMuted2] = useState(true);

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
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.15] tracking-tight text-slate-900">
              CREATE MORE ADS.<br />
              TEST MORE IDEAS.<br />
              <span className="font-serif italic font-normal text-gradient-brand inline-block pr-2 text-[1.12em] tracking-normal">
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

          {/* Right Hero DTC Ad Videos Showcase (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            <div className="w-full max-w-lg lg:max-w-none relative">
              
              {/* Glow backdrop behind videos */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-400/15 to-blue-400/15 blur-2xl rounded-3xl -z-10"
              />

              {/* 3 DTC Vertical Ad Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-3 lg:gap-4 items-center">
                
                {/* VIDEO 01 - AI UGC */}
                <div className="ad-reel-phone group relative cursor-pointer">
                  <video
                    poster="https://quickuppaistudio.us/videos/posters/UGC%20Sample.jpg"
                    autoPlay
                    loop
                    muted={muted1}
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="https://quickuppaistudio.us/videos/HERO%20VIDEO%20NEW.mp4" type="video/mp4" />
                  </video>

                  {/* Native Ad UI Overlay */}
                  <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-3 bg-gradient-to-b from-black/60 via-transparent to-black/85 z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-white text-[11px] font-bold">
                        <span className="w-4 h-4 rounded-full bg-pink-500 flex items-center justify-center text-[9px]">Q</span>
                        <span>@glow.skincare</span>
                      </div>
                      <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/30 text-emerald-300 border border-emerald-400/40 text-[9px] font-bold font-mono">
                        ROAS 4.6x
                      </span>
                    </div>

                    <div className="space-y-1.5 pointer-events-auto">
                      <div className="bg-black/70 backdrop-blur-md rounded-lg p-2 border border-white/10 text-[10px] text-white">
                        <span className="font-bold text-pink-300">"The texture is insane! 🔥"</span>
                        <p className="text-[9px] text-slate-300">Hydration barrier repaired in 3 days.</p>
                      </div>
                      <div className="flex items-center justify-between p-1.5 px-2 rounded-md bg-blue-600 text-white font-bold text-[10px] shadow-sm">
                        <span>Shop 20% Off</span>
                        <ChevronRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>

                  {/* Sound Toggle */}
                  <button
                    type="button"
                    onClick={() => setMuted1(!muted1)}
                    className="absolute top-2.5 right-2.5 z-20 bg-black/80 text-white p-1 rounded-full border border-white/20 hover:bg-purple-600 transition-all"
                    aria-label="Toggle sound"
                  >
                    {muted1 ? <VolumeX className="w-3 h-3 text-red-400" /> : <Volume2 className="w-3 h-3 text-emerald-400" />}
                  </button>

                  <div className="absolute bottom-1 right-2 z-20">
                    <span className="text-[8px] font-mono font-bold uppercase text-purple-200 bg-purple-950/90 px-1 py-0.5 rounded border border-purple-400/30">
                      AI UGC
                    </span>
                  </div>
                </div>

                {/* VIDEO 02 - AI AVATAR (Top Hook Winner) */}
                <div className="ad-reel-phone group relative cursor-pointer sm:-translate-y-3 sm:shadow-[0_0_40px_rgba(200,80,255,0.4)] border-purple-400/80">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap bg-gradient-brand text-white text-[8px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-md glow-neon">
                    ⭐ TOP HOOK WINNER
                  </div>

                  <video
                    poster="https://quickuppaistudio.us/videos/posters/HERO%20VIDEO%20NEW.jpg"
                    autoPlay
                    loop
                    muted={muted2}
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="https://quickuppaistudio.us/videos/HERO%20VIDEO%20NEW.mp4" type="video/mp4" />
                  </video>

                  {/* Native Ad UI Overlay */}
                  <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-3 bg-gradient-to-b from-black/60 via-transparent to-black/85 z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-white text-[11px] font-bold">
                        <span className="w-4 h-4 rounded-full bg-purple-500 flex items-center justify-center text-[9px]">Q</span>
                        <span>@pure.wellness</span>
                      </div>
                      <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/30 text-emerald-300 border border-emerald-400/40 text-[9px] font-bold font-mono">
                        CTR 3.8%
                      </span>
                    </div>

                    <div className="space-y-1.5 pointer-events-auto">
                      <div className="bg-black/70 backdrop-blur-md rounded-lg p-2 border border-white/10 text-[10px] text-white">
                        <span className="font-bold text-purple-300">Stop taking normal collagen.</span>
                        <p className="text-[9px] text-slate-300">Here is why liposomal absorbs 10x faster.</p>
                      </div>
                      <div className="flex items-center justify-between p-1.5 px-2 rounded-md bg-purple-600 text-white font-bold text-[10px] shadow-sm">
                        <span>Get 30-Day Starter</span>
                        <ChevronRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>

                  {/* Sound Toggle */}
                  <button
                    type="button"
                    onClick={() => setMuted2(!muted2)}
                    className="absolute top-2.5 right-2.5 z-20 bg-black/80 text-white p-1 rounded-full border border-white/20 hover:bg-purple-600 transition-all"
                    aria-label="Toggle sound"
                  >
                    {muted2 ? <VolumeX className="w-3 h-3 text-red-400" /> : <Volume2 className="w-3 h-3 text-emerald-400" />}
                  </button>

                  <div className="absolute bottom-1 right-2 z-20">
                    <span className="text-[8px] font-mono font-bold uppercase text-purple-200 bg-purple-950/90 px-1 py-0.5 rounded border border-purple-400/30">
                      AI Avatar
                    </span>
                  </div>
                </div>

                {/* VIDEO 03 - HYPER-REALISTIC PRODUCT AD */}
                <div className="ad-reel-phone group relative cursor-pointer">
                  <img
                    src="/images/Digital Twin Image.png"
                    alt="Hyper Realistic Product Ad"
                    className="w-full h-full object-cover"
                  />

                  {/* Native Ad UI Overlay */}
                  <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-3 bg-gradient-to-b from-black/60 via-transparent to-black/85 z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-white text-[11px] font-bold">
                        <span className="w-4 h-4 rounded-full bg-cyan-500 flex items-center justify-center text-[9px]">Q</span>
                        <span>@lumina.jewelry</span>
                      </div>
                      <span className="px-1.5 py-0.5 rounded-full bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 text-[9px] font-bold font-mono">
                        CPA -34%
                      </span>
                    </div>

                    <div className="space-y-1.5 pointer-events-auto">
                      <div className="bg-black/70 backdrop-blur-md rounded-lg p-2 border border-white/10 text-[10px] text-white">
                        <span className="font-bold text-cyan-300">Luxury reimagined. ✨</span>
                        <p className="text-[9px] text-slate-300">Solid 18k waterproof gold aesthetic.</p>
                      </div>
                      <div className="flex items-center justify-between p-1.5 px-2 rounded-md bg-cyan-600 text-white font-bold text-[10px] shadow-sm">
                        <span>Claim Free Gift</span>
                        <Gift className="w-3 h-3" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-1 right-2 z-20">
                    <span className="text-[8px] font-mono font-bold uppercase text-cyan-200 bg-cyan-950/90 px-1 py-0.5 rounded border border-cyan-400/30">
                      Hyper-Realistic
                    </span>
                  </div>
                </div>

              </div>

              {/* Small text below videos */}
              <div className="mt-4 text-center">
                <p className="text-xs sm:text-sm font-semibold tracking-wide text-purple-900/80 font-mono">
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
