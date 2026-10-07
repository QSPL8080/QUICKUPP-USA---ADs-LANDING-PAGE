"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, Volume2, VolumeX, ShieldCheck, CheckCircle2, Sparkles, ChevronRight, Gift } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-purple-50/60 via-white to-slate-50/50 pt-24 pb-14 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 3xl:pt-40 border-b border-purple-100/80"
    >
      {/* Background Atmosphere Lights */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-20 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-32 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full blur-3xl opacity-25"
        style={{ background: "radial-gradient(circle, rgba(236, 72, 153, 0.30) 0%, transparent 70%)" }}
      />

      <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 xl:gap-14 items-center">
          
          {/* Left Hero Content (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-5 sm:space-y-6 min-w-0">
            
            {/* Eyebrow */}
            <div className="eyebrow">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
              </span>
              <span>AI VIDEO ADS FOR DTC BRANDS</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-[1.85rem] xs:text-[2.1rem] sm:text-5xl md:text-[3.25rem] lg:text-[2.6rem] xl:text-[3.25rem] 3xl:text-[3.75rem] font-bold leading-[1.18] sm:leading-[1.2] tracking-tight text-slate-900 py-1">
              CREATE MORE ADS.<br />
              TEST MORE IDEAS.<br />
              <span className="font-serif italic font-normal text-gradient-brand inline-block pr-3 text-[1.12em] tracking-normal">
                Find What Works.
              </span>
            </h1>

            {/* Supporting Copy */}
            <div className="space-y-3.5 text-slate-600 text-[15px] sm:text-base xl:text-lg leading-relaxed max-w-xl">
              <p className="font-bold text-slate-900 text-base sm:text-lg">
                Your product deserves more than the same 2–3 ads.
              </p>
              <p>
                Quickupp AI Studio creates conversion-focused AI video ads for DTC and e-commerce brands without the traditional production overhead of expensive shoots, creators, locations and production teams.
              </p>
              <div className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-purple-900 pt-1">
                <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600 shrink-0" />
                <span>Create more creative variations for Meta, Instagram, TikTok and other short-form channels.</span>
              </div>
            </div>

            {/* CTAs & Microcopy */}
            <div className="w-full pt-2 flex flex-col space-y-3">
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center lg:items-stretch xl:items-center gap-3">
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

              <p className="text-xs text-slate-500 font-medium flex items-start gap-1.5">
                <ShieldCheck className="w-4 h-4 text-purple-600 shrink-0 -mt-px" />
                <span>No commitment. We'll identify creative opportunities for your brand.</span>
              </p>
            </div>

          </div>

          {/* Right Hero DTC Ad Showcase (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center min-w-0">
            
            <div className="w-full max-w-xl lg:max-w-none 3xl:max-w-[720px] relative pt-2 pb-2">
              
              {/* Soft purple glow backdrop */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-400/15 to-indigo-400/15 blur-3xl rounded-3xl -z-10"
              />

              {/* 3 DTC Ad Showcase Cards - Perfectly Aligned */}
              <div className="grid grid-cols-3 gap-2.5 xs:gap-3 sm:gap-4 items-center">
                
                {/* [ VIDEO 01 ] */}
                <div className="relative flex flex-col items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#180f2b] to-[#0a0513] border border-purple-400/30 p-2 sm:p-4 xl:p-6 shadow-lg hover:border-pink-400/60 transition-all duration-200 aspect-[9/14] w-full">
                  <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-3.5 text-center my-auto">
                    <div className="h-9 w-9 xs:h-10 xs:w-10 sm:h-13 sm:w-13 rounded-full bg-pink-500/15 border border-pink-400/40 flex items-center justify-center text-pink-400 shadow-md">
                      <Play className="w-4 h-4 sm:w-6 sm:h-6 fill-current ml-0.5" />
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono text-[9px] xs:text-[10px] sm:text-xs xl:text-sm font-bold text-white tracking-wide sm:tracking-wider whitespace-nowrap bg-white/10 px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-md border border-white/15 inline-block">
                        [ VIDEO 01 ]
                      </span>
                      <p className="text-[10px] sm:text-[11px] text-pink-300 font-medium pt-1">AI UGC</p>
                    </div>
                  </div>
                </div>

                {/* [ VIDEO 02 ] */}
                <div className="relative flex flex-col items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#180f2b] to-[#0a0513] border border-purple-400/30 p-2 sm:p-4 xl:p-6 shadow-lg hover:border-purple-400/60 transition-all duration-200 aspect-[9/14] w-full">
                  <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-3.5 text-center my-auto">
                    <div className="h-9 w-9 xs:h-10 xs:w-10 sm:h-13 sm:w-13 rounded-full bg-purple-500/15 border border-purple-400/40 flex items-center justify-center text-purple-300 shadow-md">
                      <Play className="w-4 h-4 sm:w-6 sm:h-6 fill-current ml-0.5" />
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono text-[9px] xs:text-[10px] sm:text-xs xl:text-sm font-bold text-white tracking-wide sm:tracking-wider whitespace-nowrap bg-white/10 px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-md border border-white/15 inline-block">
                        [ VIDEO 02 ]
                      </span>
                      <p className="text-[10px] sm:text-[11px] text-purple-300 font-medium pt-1">AI Avatar</p>
                    </div>
                  </div>
                </div>

                {/* [ VIDEO 03 ] */}
                <div className="relative flex flex-col items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#180f2b] to-[#0a0513] border border-purple-400/30 p-2 sm:p-4 xl:p-6 shadow-lg hover:border-cyan-400/60 transition-all duration-200 aspect-[9/14] w-full">
                  <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-3.5 text-center my-auto">
                    <div className="h-9 w-9 xs:h-10 xs:w-10 sm:h-13 sm:w-13 rounded-full bg-cyan-500/15 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-md">
                      <Play className="w-4 h-4 sm:w-6 sm:h-6 fill-current ml-0.5" />
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono text-[9px] xs:text-[10px] sm:text-xs xl:text-sm font-bold text-white tracking-wide sm:tracking-wider whitespace-nowrap bg-white/10 px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-md border border-white/15 inline-block">
                        [ VIDEO 03 ]
                      </span>
                      <p className="text-[10px] sm:text-[11px] text-cyan-300 font-medium pt-1">Product Video</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Small text below videos */}
              <div className="mt-5 text-center">
                <p className="text-[10px] xs:text-[11px] sm:text-sm font-semibold tracking-wide sm:tracking-wider leading-relaxed text-purple-950/80 font-mono bg-purple-50/90 py-2 px-3 sm:px-4 rounded-2xl sm:rounded-full border border-purple-200/70 inline-block shadow-2xs">
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
