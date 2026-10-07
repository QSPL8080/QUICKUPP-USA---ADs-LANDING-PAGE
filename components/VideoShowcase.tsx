"use client";

import React, { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { Film, ArrowRight, Volume2, VolumeX, Play, Pause } from "lucide-react";

import SectionBg from "@/components/SectionBg";
import { SECTION_BG } from "@/lib/photos";

/* Portfolio videos live in /public/videos, covers in /public/videos/posters */
type Category = "ugc" | "product" | "hyper" | "cartoon";

interface ShowcaseVideo {
  id: string;
  category: Category;
  title: string;
  src: string;
  poster: string;
}

const CATEGORY_LABEL: Record<Category, string> = {
  ugc: "AI UGC",
  product: "Product Ads",
  hyper: "Hyper-Realistic",
  cartoon: "AI Cartoon",
};

const BADGE_COLOR: Record<Category, string> = {
  ugc: "text-pink-600 bg-pink-50 border-pink-200",
  product: "text-amber-700 bg-amber-50 border-amber-200",
  hyper: "text-cyan-700 bg-cyan-50 border-cyan-200",
  cartoon: "text-indigo-600 bg-indigo-50 border-indigo-200",
};

const VIDEOS: ShowcaseVideo[] = [
  { id: "1", category: "ugc", title: "Skincare", src: "/videos/Portfolio 1.mp4", poster: "/videos/posters/Portfolio 1.jpg" },
  { id: "2", category: "product", title: "Hair Care", src: "/videos/Portfolio 2.mp4", poster: "/videos/posters/Portfolio 2.jpg" },
  { id: "3", category: "hyper", title: "Jewelry", src: "/videos/Portfolio 3.mp4", poster: "/videos/posters/Portfolio 3.jpg" },
  { id: "4", category: "product", title: "Sneakers", src: "/videos/Portfolio 4.mp4", poster: "/videos/posters/Portfolio 4.jpg" },
  { id: "5", category: "hyper", title: "Lip Gloss", src: "/videos/Portfolio 5.mp4", poster: "/videos/posters/Portfolio 5.jpg" },
  { id: "6", category: "cartoon", title: "3D Characters", src: "/videos/Portfolio 6.mp4", poster: "/videos/posters/Portfolio 6.jpg" },
];

// Tabs only for categories that have videos
const TABS: { key: "all" | Category; label: string }[] = [
  { key: "all", label: "All Ads" },
  ...(Object.keys(CATEGORY_LABEL) as Category[])
    .filter((c) => VIDEOS.some((v) => v.category === c))
    .map((c) => ({ key: c, label: CATEGORY_LABEL[c] })),
];

export default function VideoShowcase() {
  const [activeTab, setActiveTab] = useState<"all" | Category>("all");
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [soundId, setSoundId] = useState<string | null>(null); // the one video allowed to play with sound
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const filtered = activeTab === "all" ? VIDEOS : VIDEOS.filter((v) => v.category === activeTab);

  // Only one video plays at a time
  const play = useCallback((id: string, withSound?: boolean) => {
    Object.entries(videoRefs.current).forEach(([vid, el]) => {
      if (el && vid !== id && !el.paused) el.pause();
    });
    const el = videoRefs.current[id];
    if (!el) return;
    if (withSound !== undefined) {
      el.muted = !withSound;
      setSoundId(withSound ? id : null);
    }
    el.play().then(() => setPlayingId(id)).catch(() => {});
  }, []);

  const pause = useCallback((id: string) => {
    const el = videoRefs.current[id];
    if (el && !el.paused) el.pause();
    setPlayingId((cur) => (cur === id ? null : cur));
  }, []);

  const togglePlay = (id: string) => {
    const el = videoRefs.current[id];
    if (!el) return;
    if (el.paused) play(id, soundId === id);
    else pause(id);
  };

  const toggleSound = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const el = videoRefs.current[id];
    if (!el) return;
    const turnOn = soundId !== id;
    Object.entries(videoRefs.current).forEach(([vid, other]) => {
      if (other && vid !== id) other.muted = true;
    });
    el.muted = !turnOn;
    setSoundId(turnOn ? id : null);
    if (turnOn && el.paused) play(id, true);
  };

  const canHover = () => typeof window !== "undefined" && window.matchMedia?.("(hover: hover)").matches;

  return (
    <section id="showcase" className="py-14 sm:py-20 lg:py-24 bg-white border-b border-purple-100/80 relative isolate">
      <SectionBg photo={SECTION_BG.showcase} opacity={0.18} />
      <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-8 sm:mb-12">
          <span className="eyebrow text-[11px] sm:text-xs">
            <Film className="w-3.5 h-3.5 text-purple-600" />
            <span>Video Showcase</span>
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 !leading-[1.2] tracking-tight">
            Converting Video Ads <span className="font-serif italic font-bold text-gradient-brand inline-block pr-1.5">In Action</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Explore conversion-focused DTC ad examples engineered for high ROAS on short-form video feeds.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="-mx-4 px-4 sm:mx-0 sm:px-0 flex flex-nowrap sm:flex-wrap items-center justify-start sm:justify-center gap-2 mb-8 sm:mb-12 overflow-x-auto no-scrollbar snap-x">
          {TABS.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => {
                if (playingId) pause(playingId);
                setActiveTab(t.key);
              }}
              className={`shrink-0 snap-start whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                activeTab === t.key
                  ? "bg-purple-900 text-white border-purple-900 shadow-sm"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-purple-50 hover:text-purple-900"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Video cards */}
        <div className="-mx-4 px-4 sm:mx-auto sm:px-0 flex sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-6xl 3xl:max-w-7xl overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar pb-2 sm:pb-0">
          {filtered.map((v) => {
            const isPlaying = playingId === v.id;
            const hasSound = soundId === v.id;
            return (
              <div
                key={v.id}
                className="w-[78%] xs:w-[72%] shrink-0 snap-center sm:w-auto sm:shrink rounded-2xl border border-slate-200 bg-white p-3 shadow-sm hover:shadow-lg hover:border-purple-300 transition-all flex flex-col group"
                onMouseEnter={() => canHover() && !hasSound && play(v.id, false)}
                onMouseLeave={() => canHover() && !hasSound && pause(v.id)}
              >
                {/* Phone frame with the video */}
                <div className="ad-reel-phone w-full relative bg-slate-950 border border-purple-400/30">
                  <video
                    ref={(el) => {
                      videoRefs.current[v.id] = el;
                    }}
                    src={v.src}
                    poster={v.poster}
                    preload="none"
                    muted
                    loop
                    playsInline
                    onClick={() => togglePlay(v.id)}
                    onPause={() => setPlayingId((cur) => (cur === v.id ? null : cur))}
                    aria-label={`${CATEGORY_LABEL[v.category]} example: ${v.title}`}
                    className="absolute inset-0 h-full w-full object-cover cursor-pointer"
                  />

                  {/* Play button while paused */}
                  {!isPlaying && (
                    <button
                      type="button"
                      onClick={() => togglePlay(v.id)}
                      aria-label={`Play ${v.title}`}
                      className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-md border border-white/50 shadow-lg transition-all group-hover:scale-110 group-hover:bg-purple-600 group-hover:border-purple-400"
                    >
                      <Play className="h-6 w-6 fill-current ml-0.5" />
                    </button>
                  )}

                  {/* Controls */}
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-black/60 to-transparent p-3 pt-10">
                    <button
                      type="button"
                      onClick={() => togglePlay(v.id)}
                      aria-label={isPlaying ? `Pause ${v.title}` : `Play ${v.title}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/70"
                    >
                      {isPlaying ? <Pause className="h-4 w-4 fill-current" /> : <Play className="h-4 w-4 fill-current ml-0.5" />}
                    </button>
                    <button
                      type="button"
                      onClick={(e) => toggleSound(v.id, e)}
                      aria-label={hasSound ? `Mute ${v.title}` : `Turn on sound for ${v.title}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/70"
                    >
                      {hasSound ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {/* Card bottom */}
                <div className="flex items-center justify-between gap-2 px-1 pt-3 pb-1">
                  <h4 className="font-bold text-sm text-slate-900 truncate">{v.title}</h4>
                  <span className={`shrink-0 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded border ${BADGE_COLOR[v.category]}`}>
                    {CATEGORY_LABEL[v.category]}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA below showcase */}
        <div className="mt-8 sm:mt-12 text-center">
          <Link
            href="#audit-form"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-brand px-5 sm:px-6 py-3.5 text-[13px] sm:text-sm font-bold text-white text-center shadow-md glow-neon hover:brightness-110 active:scale-95 transition-all"
          >
            <span>GET FREE AUDIT TO UNLOCK THESE FORMATS</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </Link>
        </div>

      </div>
    </section>
  );
}
