"use client";

import React from "react";
import { Workflow } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "RESEARCH",
    desc: "We understand your product, audience, positioning and competitive landscape.",
  },
  {
    num: "02",
    title: "CREATIVE STRATEGY",
    desc: "We identify creative angles, messaging opportunities and potential concepts.",
  },
  {
    num: "03",
    title: "HOOKS & CONCEPTS",
    desc: "We develop scroll-stopping hooks and multiple creative directions.",
  },
  {
    num: "04",
    title: "SCRIPT & STORYBOARD",
    desc: "The selected concept becomes a structured, production-ready video.",
  },
  {
    num: "05",
    title: "AI PRODUCTION",
    desc: "Our AI-powered workflow brings the creative concept to life.",
  },
  {
    num: "06",
    title: "EDITING & SOUND",
    desc: "We add captions, voiceover, music, sound effects, pacing and finishing touches.",
  },
  {
    num: "07",
    title: "QUALITY CONTROL",
    desc: "Every creative goes through a final review before delivery.",
  },
  {
    num: "08",
    title: "DELIVERY",
    desc: "You receive ready-to-use short-form video creatives for your marketing campaigns.",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="py-16 sm:py-24 bg-white border-b border-purple-100/80 relative">
      <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="eyebrow">
            <Workflow className="w-3.5 h-3.5 text-purple-600" />
            <span>OUR CREATIVE PROCESS</span>
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
            FROM PRODUCT<br />
            <span className="font-serif italic font-bold text-gradient-brand inline-block pr-1.5">
              TO PERFORMANCE-READY CREATIVE.
            </span>
          </h2>

          <div className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto space-y-1">
            <p>You don't need to manage creators, locations and production teams.</p>
            <p className="font-semibold text-slate-900">We handle the creative workflow from concept to final video.</p>
          </div>
        </div>

        {/* 8-Step Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className={`rounded-2xl p-6 border transition-all flex flex-col justify-between ${
                idx === 7
                  ? "bg-gradient-to-b from-purple-900 via-indigo-950 to-slate-950 text-white border-purple-800 shadow-md"
                  : "bg-slate-50/70 border-slate-200/90 text-slate-900 hover:border-purple-300 hover:bg-purple-50/30 shadow-xs"
              }`}
            >
              <div>
                <span
                  className={`font-mono text-xs font-black tracking-wider px-2.5 py-1 rounded-md border ${
                    idx === 7
                      ? "bg-purple-800 text-purple-200 border-purple-600"
                      : "bg-purple-100 text-purple-700 border-purple-200"
                  }`}
                >
                  {step.num}
                </span>

                <h3
                  className={`font-heading text-base font-bold mt-4 mb-2 ${
                    idx === 7 ? "text-white" : "text-slate-900"
                  }`}
                >
                  {step.title}
                </h3>

                <p
                  className={`text-xs sm:text-sm leading-relaxed ${
                    idx === 7 ? "text-purple-100" : "text-slate-600"
                  }`}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
