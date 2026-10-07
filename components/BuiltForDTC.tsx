"use client";

import React from "react";
import { Sparkles, HeartPulse, Shirt, Gem, Coffee, Home, Box, Store } from "lucide-react";

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
                className={`rounded-2xl border border-slate-200/90 bg-white p-5 lg:p-6 shadow-xs hover:border-purple-300 hover:shadow-md transition-all group ${
                  isLast ? "sm:col-span-2 lg:col-span-3 xl:col-span-2" : ""
                }`}
              >
                <div
                  className={`h-11 w-11 rounded-xl flex items-center justify-center mb-4 border group-hover:scale-110 transition-transform ${item.color}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
