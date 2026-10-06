"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Video, UserCheck, Flame, Palette, User } from "lucide-react";

const formats = [
  {
    num: "FORMAT 1",
    title: "AI UGC",
    tagline: "Authentic. Social-first. Built for the feed.",
    desc: "UGC-style creative designed to feel native to platforms like TikTok, Instagram and Meta.",
    bestFor: [
      "Beauty & Skincare",
      "Health & Wellness",
      "Fashion & Apparel",
      "Consumer Products",
    ],
    icon: Video,
    accentColor: "text-pink-600 bg-pink-50 border-pink-200",
    badgeColor: "bg-pink-100 text-pink-800 border-pink-200",
  },
  {
    num: "FORMAT 2",
    title: "AI AVATAR",
    tagline: "Consistent presenters without a traditional shoot.",
    desc: "Create presenter-led videos with AI avatars for product education, demonstrations, explanations and advertising.",
    bestFor: [
      "Product education",
      "Explainer ads",
      "SaaS",
      "Consumer products",
      "Retargeting",
    ],
    icon: UserCheck,
    accentColor: "text-purple-600 bg-purple-50 border-purple-200",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
  },
  {
    num: "FORMAT 3",
    title: "AI HYPER-REALISTIC",
    tagline: "Premium visual storytelling.",
    desc: "Create realistic, polished video content for brands that need a more elevated visual identity.",
    bestFor: [
      "Premium products",
      "Beauty",
      "Jewelry",
      "Fashion",
      "Lifestyle",
    ],
    icon: Flame,
    accentColor: "text-cyan-600 bg-cyan-50 border-cyan-200",
    badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-200",
  },
  {
    num: "FORMAT 4",
    title: "AI CARTOON",
    tagline: "Make your product impossible to ignore.",
    desc: "Distinctive visual concepts designed to create pattern interruption and stand out in crowded feeds.",
    bestFor: [
      "Creative campaigns",
      "Product launches",
      "Social content",
      "Younger audiences",
    ],
    icon: Palette,
    accentColor: "text-amber-600 bg-amber-50 border-amber-200",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
  },
  {
    num: "FORMAT 5",
    title: "AI DIGITAL TWIN",
    tagline: "Create a consistent digital version of your brand representative.",
    desc: "Build scalable content around a digital version of a real person. Founders and brand spokespeople can produce infinite videos every month without setting up cameras or spending hours filming.",
    bestFor: [
      "Founders",
      "Creators",
      "Personal brands",
      "Recurring content",
      "Brand spokespersons",
    ],
    icon: User,
    accentColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
  },
];

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
            Select the video production style that fits your brand identity, product line and marketing channel objectives.
          </p>
        </div>

        {/* 5 Format Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {formats.map((item, idx) => {
            const Icon = item.icon;
            const isWide = idx === 3 || idx === 4;
            return (
              <div
                key={item.num}
                className={`rounded-2xl border border-purple-100 bg-white p-6 sm:p-7 shadow-xs hover:border-purple-300 hover:shadow-md transition-all flex flex-col justify-between ${
                  isWide && idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2.5 py-1 rounded-md font-mono text-xs font-bold border ${item.badgeColor}`}>
                      {item.num}
                    </span>
                    <div className={`h-10 w-10 rounded-xl flex items-center justify-center border ${item.accentColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-1">
                    {item.title}
                  </h3>

                  <p className="text-purple-700 font-semibold text-xs sm:text-sm mb-3">
                    {item.tagline}
                  </p>

                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    BEST FOR
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.bestFor.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-slate-100/80 text-slate-700 text-xs font-medium"
                      >
                        • {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
