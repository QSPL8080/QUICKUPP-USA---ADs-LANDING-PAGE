"use client";

import React from "react";
import Link from "next/link";
import StockPhoto from "@/components/StockPhoto";
import { PHOTOS, type Photo } from "@/lib/photos";

// Photo for each format card, in card order
const FORMAT_PHOTOS: Photo[] = [
  PHOTOS.ugcCreator,
  PHOTOS.avatarPresenter,
  PHOTOS.perfumeCinematic,
  PHOTOS.cartoonCharacter,
  PHOTOS.digitalTwin,
];
import { ArrowRight, Sparkles, Video, UserCheck, Flame, Palette, User } from "lucide-react";

const formats = [
  {
    num: "Format 1",
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
    num: "Format 2",
    title: "AI Avatar",
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
    num: "Format 3",
    title: "AI Hyper-Realistic",
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
    num: "Format 4",
    title: "AI Cartoon",
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
    num: "Format 5",
    title: "AI Digital Twin",
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
    <section id="services" className="py-14 sm:py-20 lg:py-24 bg-slate-50/60 border-b border-purple-100/80 relative">
      <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10 sm:mb-14 lg:mb-16">
          <span className="eyebrow text-[11px] sm:text-xs">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Creative Formats</span>
          </span>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold !leading-[1.2] tracking-tight text-slate-900">
            Choose Your Creative Style<br />
            <span className="font-serif italic font-bold text-gradient-brand inline-block pr-1.5">
              One Studio, multiple ways to create
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Select the video production style that fits your brand identity, product line and marketing channel objectives.
          </p>
        </div>

        {/* 5 Format Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-6 max-w-6xl 3xl:max-w-7xl mx-auto">
          {formats.map((item, idx) => {
            const Icon = item.icon;
            const isWide = idx === 3 || idx === 4;
            return (
              <div
                key={item.num}
                className={`group overflow-hidden rounded-2xl border border-purple-100 bg-white p-5 sm:p-6 lg:p-7 shadow-xs hover:border-purple-300 hover:shadow-md transition-all flex flex-col justify-between lg:col-span-2 ${
                  idx === 3 ? "lg:col-start-2" : ""
                } ${isWide && idx === 4 ? "sm:col-span-2 lg:col-span-2" : ""}`}
              >
                <div>
                  {/* Format photo */}
                  {FORMAT_PHOTOS[idx] && (
                    <div className="relative -mx-5 -mt-5 sm:-mx-6 sm:-mt-6 lg:-mx-7 lg:-mt-7 mb-5 aspect-[16/10] overflow-hidden bg-slate-100">
                      <StockPhoto
                        photo={FORMAT_PHOTOS[idx]}
                        sizes="(min-width: 1024px) 400px, (min-width: 640px) 100vw, 100vw"
                        className="transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  )}

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
