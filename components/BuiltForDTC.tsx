"use client";

import React from "react";
import { Sparkles, HeartPulse, Shirt, Gem, Coffee, Home, Box, Store } from "lucide-react";
import StockPhoto from "@/components/StockPhoto";
import { PHOTOS } from "@/lib/photos";

// Photo for each industry card, in card order
const ART = [PHOTOS.beauty, PHOTOS.wellness, PHOTOS.fashion, PHOTOS.jewelry, PHOTOS.food, PHOTOS.pet, PHOTOS.ecommerce];

const industries = [
  {
    title: "Beauty & Skincare",
    desc: "Product demonstrations, routines, testimonials and UGC-style advertising.",
    icon: Sparkles,
    color: "text-pink-600 bg-pink-50 border-pink-200",
  },
  {
    title: "Health & Wellness",
    desc: "Product education, benefits-focused creative and relatable storytelling.",
    icon: HeartPulse,
    color: "text-emerald-600 bg-emerald-50 border-emerald-200",
  },
  {
    title: "Fashion & Apparel",
    desc: "Try-ons, styling concepts, product showcases and lifestyle content.",
    icon: Shirt,
    color: "text-purple-600 bg-purple-50 border-purple-200",
  },
  {
    title: "Jewelry & Accessories",
    desc: "Premium product visuals, lifestyle storytelling and social-first creative.",
    icon: Gem,
    color: "text-amber-600 bg-amber-50 border-amber-200",
  },
  {
    title: "Food & Beverage",
    desc: "Product-focused videos, lifestyle moments and social content.",
    icon: Coffee,
    color: "text-rose-600 bg-rose-50 border-rose-200",
  },
  {
    title: "Pet & Home",
    desc: "Relatable product stories, demonstrations and lifestyle-driven creative.",
    icon: Home,
    color: "text-cyan-600 bg-cyan-50 border-cyan-200",
  },
  {
    title: "Other Consumer Products",
    desc: "Product demos, problem-solution concepts and creative variations for DTC stores.",
    icon: Box,
    color: "text-indigo-600 bg-indigo-50 border-indigo-200",
  },
];

export default function BuiltForDTC() {
  return (
    <section id="who-we-serve" className="py-14 sm:py-20 lg:py-24 bg-slate-50/60 border-b border-purple-100/80 relative">
      <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10 sm:mb-14 lg:mb-16">
          <span className="eyebrow text-[11px] sm:text-xs">
            <Store className="w-3.5 h-3.5 text-purple-600" />
            <span>08 — Built for DTC</span>
          </span>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold !leading-[1.2] tracking-tight text-slate-900">
            Creative for Consumer Brands<br />
            <span className="font-serif italic font-bold text-gradient-brand inline-block pr-1.5">
              Built for brands that need more creative
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Quickupp AI Studio is designed for growing consumer brands that need a consistent flow of fresh video content to scale paid acquisition.
          </p>
        </div>

        {/* 7 Industry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 max-w-6xl 3xl:max-w-7xl mx-auto">
          {industries.map((item, idx) => {
            const Icon = item.icon;
            const isLast = idx === 6;
            return (
              <div
                key={item.title}
                className={`overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 lg:p-6 shadow-xs hover:border-purple-300 hover:shadow-md transition-all group ${
                  isLast ? "sm:col-span-2 lg:col-span-3 xl:col-span-2 sm:flex sm:items-stretch sm:p-0 lg:p-0" : ""
                }`}
              >
                {/* Photo: 16:10 on top, or a side panel on the wide card */}
                <div
                  className={`relative -mx-5 -mt-5 lg:-mx-6 lg:-mt-6 mb-4 aspect-[16/10] overflow-hidden bg-slate-100 ${
                    isLast ? "sm:m-0 lg:m-0 sm:aspect-auto sm:w-[45%] sm:min-h-[200px] sm:shrink-0" : ""
                  }`}
                >
                  <StockPhoto
                    photo={ART[idx] ?? PHOTOS.ecommerce}
                    sizes={isLast ? "(min-width: 640px) 45vw, 100vw" : "(min-width: 1280px) 300px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
                    className="transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className={`absolute left-4 lg:left-5 bottom-3 h-9 w-9 rounded-xl flex items-center justify-center border bg-white/90 backdrop-blur ${item.color}`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className={isLast ? "sm:flex sm:flex-col sm:justify-center sm:p-6 lg:p-8" : ""}>
                  <h3 className="font-heading text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
