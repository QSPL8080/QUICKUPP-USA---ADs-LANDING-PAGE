"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Check, ChevronRight } from "lucide-react";

export default function CreativeFormats() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50/60 border-b border-purple-100/80 relative">
      <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="eyebrow">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>06 — CREATIVE FORMATS</span>
          </span>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.25] tracking-tight text-slate-900 py-1">
            CHOOSE YOUR CREATIVE STYLE<br />
            <span className="font-serif italic font-normal text-gradient-brand inline-block pr-3 text-[1.1em] tracking-normal">
              One Studio. Multiple ways to create.
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Select the video production style that fits your brand identity, product line, and marketing channel objectives.
          </p>
        </div>

        {/* 5 Format Cards */}
        <div className="space-y-8 max-w-6xl mx-auto">
          
          {/* FORMAT 1: AI UGC */}
          <div className="rounded-3xl border border-purple-100 bg-white p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-lg bg-pink-100 text-pink-800 font-mono text-xs font-bold border border-pink-200">
                  FORMAT 01
                </span>
                <span className="text-xs text-slate-500 font-semibold">Social-First • Native Feed</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                AI UGC
              </h3>
              
              <p className="text-pink-600 font-bold text-sm sm:text-base">
                Authentic. Social-first. Built for the feed.
              </p>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                UGC-style creative designed to feel native to platforms such as TikTok, Instagram and Meta. Gives your brand rapid social proof without creator ghosting or expensive physical sample shipments.
              </p>

              <div className="pt-2">
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  BEST FOR:
                </span>
                <div className="flex flex-wrap gap-2">
                  {["Beauty", "Skincare", "Fashion", "Wellness", "Consumer Products"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700"
                    >
                      • {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="#audit-form"
                  className="inline-flex items-center gap-2 text-sm font-bold text-pink-600 hover:text-pink-700 transition-colors"
                >
                  <span>EXPLORE AI UGC</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="ad-reel-phone max-w-[260px] w-full p-4 flex flex-col justify-between bg-gradient-to-b from-pink-950/90 via-slate-900 to-black border border-pink-500/30">
                <div className="flex items-center justify-between">
                  <span className="text-white text-[11px] font-bold">@glow.skincare</span>
                  <span className="px-1.5 py-0.5 rounded-full bg-pink-500/20 text-pink-300 text-[9px] font-bold font-mono">UGC Format</span>
                </div>
                <div className="my-auto py-6 flex flex-col items-center justify-center text-center space-y-2">
                  <div className="h-12 w-12 rounded-full bg-pink-500/20 border border-pink-400/40 flex items-center justify-center text-pink-300 shadow-md">
                    <Sparkles className="w-5 h-5 text-pink-400" />
                  </div>
                  <span className="text-xs font-bold text-white">AI UGC Testimonial</span>
                  <span className="text-[10px] text-slate-400">Social-First • Native Hook</span>
                </div>
                <div className="bg-pink-600 text-white text-[10px] font-bold p-2 rounded-lg text-center shadow-sm">
                  Shop Now →
                </div>
              </div>
            </div>
          </div>

          {/* FORMAT 2: AI AVATAR */}
          <div className="rounded-3xl border border-purple-100 bg-white p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-lg bg-purple-100 text-purple-800 font-mono text-xs font-bold border border-purple-200">
                  FORMAT 02
                </span>
                <span className="text-xs text-slate-500 font-semibold">Presenter-Led • High Trust</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                AI AVATAR
              </h3>

              <p className="text-purple-700 font-bold text-sm sm:text-base">
                Consistent presenters without a traditional shoot.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Create presenter-led videos with AI avatars for product education, demonstrations, explanations and advertising. Perfect for breakdown ads that explain ingredients, differentiators, and guarantees clearly.
              </p>

              <div className="pt-2">
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  BEST FOR:
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Product education",
                    "Explainer ads",
                    "SaaS",
                    "Consumer products",
                    "Retargeting",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700"
                    >
                      • {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="#audit-form"
                  className="inline-flex items-center gap-2 text-sm font-bold text-purple-700 hover:text-purple-900 transition-colors"
                >
                  <span>EXPLORE AI AVATAR</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="ad-reel-phone max-w-[260px] w-full p-4 flex flex-col justify-between bg-gradient-to-b from-purple-950/90 via-slate-900 to-black border border-purple-500/30">
                <div className="flex items-center justify-between">
                  <span className="text-white text-[11px] font-bold">@pure.wellness</span>
                  <span className="px-1.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[9px] font-bold font-mono">Avatar Presenter</span>
                </div>
                <div className="my-auto py-6 flex flex-col items-center justify-center text-center space-y-2">
                  <div className="h-12 w-12 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 shadow-md">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-xs font-bold text-white">Presenter Breakdown</span>
                  <span className="text-[10px] text-slate-400">High Trust • Education</span>
                </div>
                <div className="bg-purple-600 text-white text-[10px] font-bold p-2 rounded-lg text-center shadow-sm">
                  Learn More →
                </div>
              </div>
            </div>
          </div>

          {/* FORMAT 3: AI HYPER-REALISTIC */}
          <div className="rounded-3xl border border-purple-100 bg-white p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-lg bg-cyan-100 text-cyan-800 font-mono text-xs font-bold border border-cyan-200">
                  FORMAT 03
                </span>
                <span className="text-xs text-slate-500 font-semibold">Elevated Aesthetic • Luxury</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                AI HYPER-REALISTIC
              </h3>

              <p className="text-cyan-700 font-bold text-sm sm:text-base">
                Premium visual storytelling.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Create realistic, polished video content for brands that need a more elevated visual identity. 3D studio environments, liquid physics, close-up textures, and cinematic lighting angles.
              </p>

              <div className="pt-2">
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  BEST FOR:
                </span>
                <div className="flex flex-wrap gap-2">
                  {["Premium products", "Beauty", "Jewelry", "Fashion", "Lifestyle"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700"
                    >
                      • {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="#audit-form"
                  className="inline-flex items-center gap-2 text-sm font-bold text-cyan-700 hover:text-cyan-900 transition-colors"
                >
                  <span>EXPLORE HYPER-REALISTIC</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="ad-reel-phone max-w-[260px] w-full p-4 flex flex-col justify-between bg-gradient-to-b from-cyan-950/90 via-slate-900 to-black border border-cyan-500/30">
                <div className="flex items-center justify-between">
                  <span className="text-white text-[11px] font-bold">@lumina.jewelry</span>
                  <span className="px-1.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[9px] font-bold font-mono">Hyper-Real</span>
                </div>
                <div className="my-auto py-6 flex flex-col items-center justify-center text-center space-y-2">
                  <div className="h-12 w-12 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-md">
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-xs font-bold text-white">Cinematic 3D Lighting</span>
                  <span className="text-[10px] text-slate-400">Liquid Physics & Textures</span>
                </div>
                <div className="bg-cyan-600 text-white text-[10px] font-bold p-2 rounded-lg text-center shadow-sm">
                  Discover Collection →
                </div>
              </div>
            </div>
          </div>

          {/* FORMAT 4: AI CARTOON */}
          <div className="rounded-3xl border border-purple-100 bg-white p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-lg bg-amber-100 text-amber-800 font-mono text-xs font-bold border border-amber-200">
                  FORMAT 04
                </span>
                <span className="text-xs text-slate-500 font-semibold">Pattern Interrupt • Standout</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                AI CARTOON
              </h3>

              <p className="text-amber-700 font-bold text-sm sm:text-base">
                Make your product impossible to ignore.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Distinctive visual concepts designed to create pattern interruption and stand out in crowded feeds. Ideal for product launches, analogies, and younger demographic engagement.
              </p>

              <div className="pt-2">
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  BEST FOR:
                </span>
                <div className="flex flex-wrap gap-2">
                  {["Creative campaigns", "Product launches", "Social content", "Younger audiences"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700"
                      >
                        • {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="#audit-form"
                  className="inline-flex items-center gap-2 text-sm font-bold text-amber-700 hover:text-amber-900 transition-colors"
                >
                  <span>EXPLORE AI CARTOON</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="ad-reel-phone max-w-[260px] w-full p-4 flex flex-col justify-between bg-gradient-to-b from-amber-950/90 via-slate-900 to-black border border-amber-500/30">
                <div className="flex items-center justify-between">
                  <span className="text-white text-[11px] font-bold">@splash.creative</span>
                  <span className="px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[9px] font-bold font-mono">Animated</span>
                </div>
                <div className="my-auto py-6 flex flex-col items-center justify-center text-center space-y-2">
                  <div className="h-12 w-12 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shadow-md">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                  </div>
                  <span className="text-xs font-bold text-white">3D Cartoon Interrupt</span>
                  <span className="text-[10px] text-slate-400">High Hook Rate</span>
                </div>
                <div className="bg-amber-600 text-white text-[10px] font-bold p-2 rounded-lg text-center shadow-sm">
                  View Animated Ad →
                </div>
              </div>
            </div>
          </div>

          {/* FORMAT 5: AI DIGITAL TWIN */}
          <div className="rounded-3xl border border-purple-100 bg-white p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-lg bg-emerald-100 text-emerald-800 font-mono text-xs font-bold border border-emerald-200">
                  FORMAT 05
                </span>
                <span className="text-xs text-slate-500 font-semibold">Founder Scale • Consistency</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                AI DIGITAL TWIN
              </h3>

              <p className="text-emerald-700 font-bold text-sm sm:text-base">
                Create a consistent digital version of your brand representative.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Build scalable content around a digital version of a real person. Founders and brand spokespeople can produce infinite videos every month without setting up cameras or spending hours filming.
              </p>

              <div className="pt-2">
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  BEST FOR:
                </span>
                <div className="flex flex-wrap gap-2">
                  {["Founders", "Creators", "Personal brands", "Recurring content", "Brand spokespersons"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700"
                      >
                        • {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="#audit-form"
                  className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-900 transition-colors"
                >
                  <span>EXPLORE DIGITAL TWIN</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="ad-reel-phone max-w-[260px] w-full p-4 flex flex-col justify-between bg-gradient-to-b from-emerald-950/90 via-slate-900 to-black border border-emerald-500/30">
                <div className="flex items-center justify-between">
                  <span className="text-white text-[11px] font-bold">@founder.twin</span>
                  <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[9px] font-bold font-mono">Digital Twin</span>
                </div>
                <div className="my-auto py-6 flex flex-col items-center justify-center text-center space-y-2">
                  <div className="h-12 w-12 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 shadow-md">
                    <Sparkles className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-xs font-bold text-white">AI Founder Clone</span>
                  <span className="text-[10px] text-slate-400">Zero Filming Needed</span>
                </div>
                <div className="bg-emerald-600 text-white text-[10px] font-bold p-2 rounded-lg text-center shadow-sm">
                  Follow Story →
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
