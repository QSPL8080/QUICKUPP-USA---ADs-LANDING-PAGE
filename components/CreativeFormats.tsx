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

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-normal text-slate-900">
            CHOOSE YOUR CREATIVE STYLE<br />
            <span className="font-serif italic font-semibold text-gradient-brand inline-block pr-1.5">
              ONE STUDIO. MULTIPLE WAYS TO CREATE.
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
              <div className="ad-reel-phone max-w-[260px] w-full">
                <video
                  poster="https://quickuppaistudio.us/videos/posters/UGC%20Sample.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="https://quickuppaistudio.us/videos/HERO%20VIDEO%20NEW.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 pointer-events-none p-3 flex flex-col justify-between bg-gradient-to-b from-black/50 via-transparent to-black/80">
                  <span className="text-white text-[11px] font-bold">@glow.skincare</span>
                  <div className="bg-pink-600 text-white text-[10px] font-bold p-1.5 rounded text-center">
                    Shop Now →
                  </div>
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
              <div className="ad-reel-phone max-w-[260px] w-full">
                <video
                  poster="https://quickuppaistudio.us/videos/posters/HERO%20VIDEO%20NEW.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="https://quickuppaistudio.us/videos/HERO%20VIDEO%20NEW.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 pointer-events-none p-3 flex flex-col justify-between bg-gradient-to-b from-black/50 via-transparent to-black/80">
                  <span className="text-white text-[11px] font-bold">@pure.wellness</span>
                  <div className="bg-purple-600 text-white text-[10px] font-bold p-1.5 rounded text-center">
                    Learn More →
                  </div>
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
              <div className="ad-reel-phone max-w-[260px] w-full">
                <img
                  src="/images/Digital Twin Image.png"
                  alt="Hyper-Realistic"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 pointer-events-none p-3 flex flex-col justify-between bg-gradient-to-b from-black/50 via-transparent to-black/80">
                  <span className="text-white text-[11px] font-bold">@lumina.jewelry</span>
                  <div className="bg-cyan-600 text-white text-[10px] font-bold p-1.5 rounded text-center">
                    Discover Collection →
                  </div>
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
              <div className="ad-reel-phone max-w-[260px] w-full bg-gradient-to-br from-amber-500 to-purple-900 p-4 flex flex-col items-center justify-center text-center text-white">
                <Sparkles className="w-12 h-12 text-amber-300 animate-bounce mb-2" />
                <span className="font-bold text-sm">3D Cartoon & Animated Ads</span>
                <span className="text-[11px] text-amber-100 mt-1">High retention pattern interrupt</span>
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
              <div className="ad-reel-phone max-w-[260px] w-full">
                <img
                  src="/images/Digital Twin Image.png"
                  alt="Digital Twin"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 pointer-events-none p-3 flex flex-col justify-between bg-gradient-to-b from-black/50 via-transparent to-black/80">
                  <span className="text-white text-[11px] font-bold">@founder.twin</span>
                  <div className="bg-emerald-600 text-white text-[10px] font-bold p-1.5 rounded text-center">
                    Follow Story →
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
