"use client";

import React from "react";
import { ShoppingBag, Instagram, Video, Box, Mail, BarChart2 } from "lucide-react";

export default function SocialProof() {
  return (
    <section id="social-proof" className="py-10 bg-slate-50/70 border-b border-purple-100/80">
      <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-6">
          <p className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
            CREATIVE BUILT FOR MODERN E-COMMERCE
          </p>
        </div>

        {/* Marquee Banner */}
        <div className="overflow-hidden relative w-full py-3 mb-8">
          <div className="animate-marquee-scroll flex items-center gap-12 sm:gap-16 opacity-75 hover:opacity-100 transition-opacity">
            <span className="text-sm font-bold tracking-wider text-slate-700 flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-purple-600" /> SHOPIFY PLUS
            </span>
            <span className="text-sm font-bold tracking-wider text-slate-700 flex items-center gap-2">
              <Instagram className="w-4 h-4 text-pink-600" /> META ADS
            </span>
            <span className="text-sm font-bold tracking-wider text-slate-700 flex items-center gap-2">
              <Video className="w-4 h-4 text-cyan-600" /> TIKTOK ADS
            </span>
            <span className="text-sm font-bold tracking-wider text-slate-700 flex items-center gap-2">
              <Box className="w-4 h-4 text-amber-600" /> AMAZON DTC
            </span>
            <span className="text-sm font-bold tracking-wider text-slate-700 flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-600" /> KLAVIYO
            </span>
            <span className="text-sm font-bold tracking-wider text-slate-700 flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-indigo-600" /> TRIPLE WHALE
            </span>

            {/* Repeat for continuous marquee */}
            <span className="text-sm font-bold tracking-wider text-slate-700 flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-purple-600" /> SHOPIFY PLUS
            </span>
            <span className="text-sm font-bold tracking-wider text-slate-700 flex items-center gap-2">
              <Instagram className="w-4 h-4 text-pink-600" /> META ADS
            </span>
            <span className="text-sm font-bold tracking-wider text-slate-700 flex items-center gap-2">
              <Video className="w-4 h-4 text-cyan-600" /> TIKTOK ADS
            </span>
            <span className="text-sm font-bold tracking-wider text-slate-700 flex items-center gap-2">
              <Box className="w-4 h-4 text-amber-600" /> AMAZON DTC
            </span>
            <span className="text-sm font-bold tracking-wider text-slate-700 flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-600" /> KLAVIYO
            </span>
            <span className="text-sm font-bold tracking-wider text-slate-700 flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-indigo-600" /> TRIPLE WHALE
            </span>
          </div>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-5 max-w-5xl mx-auto">
          
          <div className="rounded-2xl border border-purple-100/90 bg-white/95 p-5 text-center shadow-xs hover:border-purple-300 hover:shadow-md transition-all">
            <div className="font-extrabold text-3xl sm:text-4xl text-gradient-brand mb-1">60s</div>
            <div className="text-xs sm:text-sm font-bold text-slate-600">Max video length</div>
          </div>

          <div className="rounded-2xl border border-purple-100/90 bg-white/95 p-5 text-center shadow-xs hover:border-purple-300 hover:shadow-md transition-all">
            <div className="font-extrabold text-3xl sm:text-4xl text-purple-700 mb-1">5+</div>
            <div className="text-xs sm:text-sm font-bold text-slate-600">Creative formats</div>
          </div>

          <div className="rounded-2xl border border-purple-100/90 bg-white/95 p-5 text-center shadow-xs hover:border-purple-300 hover:shadow-md transition-all">
            <div className="font-extrabold text-3xl sm:text-4xl text-slate-900 mb-1">Multiple</div>
            <div className="text-xs sm:text-sm font-bold text-slate-600">Hooks & concepts</div>
          </div>

          <div className="rounded-2xl border border-purple-100/90 bg-white/95 p-5 text-center shadow-xs hover:border-purple-300 hover:shadow-md transition-all">
            <div className="font-extrabold text-2xl sm:text-3xl text-pink-600 mb-1">Built for</div>
            <div className="text-xs sm:text-sm font-bold text-slate-600">Paid Social</div>
          </div>

        </div>

      </div>
    </section>
  );
}
