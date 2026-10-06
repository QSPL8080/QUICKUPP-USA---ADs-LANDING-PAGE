"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Film, ArrowRight, Volume2, VolumeX, Sparkles, ChevronRight, Gift, Play } from "lucide-react";

interface AdItem {
  id: string;
  category: string;
  title: string;
  description: string;
  sponsor: string;
  metric: string;
  ctaText: string;
  ctaColor: string;
  type: "video" | "image";
  src: string;
  poster?: string;
  badge: string;
  badgeColor: string;
  platform: string;
}

const adsData: AdItem[] = [
  {
    id: "1",
    category: "ugc",
    title: "Organic Beauty UGC Testimonial",
    description: "Direct-to-camera creator style with unboxing, application routine, and social proof.",
    sponsor: "@solace.skincare",
    metric: "Hook: 74%",
    ctaText: "Shop Serum Bundle",
    ctaColor: "bg-pink-600 hover:bg-pink-700",
    type: "video",
    src: "https://quickuppaistudio.us/videos/HERO%20VIDEO%20NEW.mp4",
    poster: "https://quickuppaistudio.us/videos/posters/UGC%20Sample.jpg",
    badge: "AI UGC AD",
    badgeColor: "text-pink-600 bg-pink-50 border-pink-200",
    platform: "Meta / TikTok",
  },
  {
    id: "2",
    category: "avatar",
    title: "Supplement Science Explainer",
    description: "Presenter-led mechanism of action walkthrough with dynamic B-roll and clear benefits.",
    sponsor: "@apex.nootropics",
    metric: "CTR 4.2%",
    ctaText: "Claim 30-Day Supply",
    ctaColor: "bg-purple-600 hover:bg-purple-700",
    type: "video",
    src: "https://quickuppaistudio.us/videos/HERO%20VIDEO%20NEW.mp4",
    poster: "https://quickuppaistudio.us/videos/posters/HERO%20VIDEO%20NEW.jpg",
    badge: "AI AVATAR AD",
    badgeColor: "text-purple-600 bg-purple-50 border-purple-200",
    platform: "Paid Social",
  },
  {
    id: "3",
    category: "product",
    title: "Luxury Leather Durability Test",
    description: "High-contrast product focus highlighting craftsmanship, texture, and water resistance.",
    sponsor: "@vanguard.leather",
    metric: "ROAS 5.1x",
    ctaText: "Order with Monogram",
    ctaColor: "bg-amber-600 hover:bg-amber-700",
    type: "image",
    src: "/images/Digital Twin Image.png",
    badge: "PRODUCT AD",
    badgeColor: "text-amber-600 bg-amber-50 border-amber-200",
    platform: "Instagram Reels",
  },
  {
    id: "4",
    category: "hyper",
    title: "Cinematic Perfume Bottle Reveal",
    description: "Elevated 3D environment with liquid splashing, volumetric lighting, and premium look.",
    sponsor: "@aurora.fragrance",
    metric: "CPA $14.20",
    ctaText: "Discover Scent",
    ctaColor: "bg-cyan-600 hover:bg-cyan-700",
    type: "image",
    src: "/images/ai studio logo hero.png",
    badge: "HYPER-REALISTIC",
    badgeColor: "text-cyan-600 bg-cyan-50 border-cyan-200",
    platform: "Meta & YouTube",
  },
  {
    id: "5",
    category: "twin",
    title: "Founder Origin & Brand Vision",
    description: "Infinite scalable content generated with the founder's exact digital twin likeness and voice.",
    sponsor: "@founder.brand",
    metric: "Organic & Paid",
    ctaText: "Watch Founder Story",
    ctaColor: "bg-indigo-600 hover:bg-indigo-700",
    type: "image",
    src: "/images/Digital Twin Image.png",
    badge: "DIGITAL TWIN",
    badgeColor: "text-indigo-600 bg-indigo-50 border-indigo-200",
    platform: "Founder Led",
  },
  {
    id: "6",
    category: "ugc",
    title: "Sensory ASMR Crunch Demo",
    description: "High attention pattern-interrupt hook built for instant TikTok FYP scroll-stopping power.",
    sponsor: "@snack.crunch",
    metric: "Viral Reach",
    ctaText: "Try Variety Pack",
    ctaColor: "bg-rose-600 hover:bg-rose-700",
    type: "video",
    src: "https://quickuppaistudio.us/videos/HERO%20VIDEO%20NEW.mp4",
    poster: "https://quickuppaistudio.us/videos/posters/UGC%20Sample.jpg",
    badge: "PATTERN INTERRUPT",
    badgeColor: "text-rose-600 bg-rose-50 border-rose-200",
    platform: "TikTok FYP",
  },
];

export default function VideoShowcase() {
  const [activeTab, setActiveTab] = useState("all");
  const [mutedStates, setMutedStates] = useState<Record<string, boolean>>({
    "1": true,
    "2": true,
    "6": true,
  });

  const toggleMute = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setMutedStates((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredAds =
    activeTab === "all"
      ? adsData
      : adsData.filter((ad) => ad.category === activeTab);

  return (
    <section id="showcase" className="py-16 sm:py-24 bg-white border-b border-purple-100/80 relative">
      <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="eyebrow">
            <Film className="w-3.5 h-3.5 text-purple-600" />
            <span>05 — VIDEO SHOWCASE</span>
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-slate-900 leading-tight tracking-tight">
            CONVERTING VIDEO ADS <span className="font-serif italic font-normal text-gradient-brand inline-block pr-1.5 text-[1.08em] tracking-normal">In Action</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Explore conversion-focused DTC ad examples engineered for high ROAS on short-form video feeds.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
              activeTab === "all"
                ? "bg-purple-900 text-white border-purple-900 shadow-sm"
                : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-purple-50 hover:text-purple-900"
            }`}
          >
            All Ads
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("ugc")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
              activeTab === "ugc"
                ? "bg-purple-900 text-white border-purple-900 shadow-sm"
                : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-purple-50 hover:text-purple-900"
            }`}
          >
            AI UGC
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("avatar")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
              activeTab === "avatar"
                ? "bg-purple-900 text-white border-purple-900 shadow-sm"
                : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-purple-50 hover:text-purple-900"
            }`}
          >
            AI AVATAR
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("product")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
              activeTab === "product"
                ? "bg-purple-900 text-white border-purple-900 shadow-sm"
                : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-purple-50 hover:text-purple-900"
            }`}
          >
            PRODUCT ADS
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("hyper")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
              activeTab === "hyper"
                ? "bg-purple-900 text-white border-purple-900 shadow-sm"
                : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-purple-50 hover:text-purple-900"
            }`}
          >
            HYPER-REALISTIC
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("twin")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
              activeTab === "twin"
                ? "bg-purple-900 text-white border-purple-900 shadow-sm"
                : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-purple-50 hover:text-purple-900"
            }`}
          >
            DIGITAL TWIN
          </button>
        </div>

        {/* Ad Video Cards Grid (No external video/image dependencies) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredAds.map((ad) => (
            <div
              key={ad.id}
              className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm hover:shadow-lg hover:border-purple-300 transition-all flex flex-col justify-between group"
            >
              {/* Ad Mockup Frame */}
              <div className="ad-reel-phone w-full relative p-4 flex flex-col justify-between bg-gradient-to-b from-slate-900 via-purple-950/80 to-black border border-purple-400/30">
                
                {/* Top Bar */}
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-white text-[11px] font-bold">
                    <span className="w-4 h-4 rounded-full bg-purple-500 flex items-center justify-center text-[9px]">Q</span>
                    <span>{ad.sponsor}</span>
                  </span>
                  <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/30 text-emerald-300 border border-emerald-400/40 text-[9px] font-bold font-mono">
                    {ad.metric}
                  </span>
                </div>

                {/* Center Graphic */}
                <div className="my-auto py-6 flex flex-col items-center justify-center text-center space-y-2">
                  <div className="h-12 w-12 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-lg">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                  <span className="text-xs font-bold text-white tracking-wide">{ad.badge}</span>
                  <span className="text-[10px] text-slate-400">{ad.platform}</span>
                </div>

                {/* Native Ad Callout */}
                <div className="space-y-1.5">
                  <div className="bg-black/70 backdrop-blur-md rounded-lg p-2 border border-white/10 text-[10px] text-white">
                    <span className="font-bold text-purple-300">{ad.title}</span>
                  </div>
                  <div
                    className={`flex items-center justify-between p-1.5 px-2 rounded-md text-white font-bold text-[10px] shadow-sm ${ad.ctaColor}`}
                  >
                    <span>{ad.ctaText}</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              </div>

              {/* Card Bottom Meta */}
              <div className="p-3 pt-4">
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded border ${ad.badgeColor}`}>
                    {ad.badge}
                  </span>
                  <span className="text-[10px] text-slate-400 font-semibold">{ad.platform}</span>
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">{ad.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{ad.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA below showcase */}
        <div className="mt-12 text-center">
          <Link
            href="#audit-form"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-bold text-white shadow-md glow-neon hover:brightness-110 active:scale-95 transition-all"
          >
            <span>GET FREE AUDIT TO UNLOCK THESE FORMATS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
