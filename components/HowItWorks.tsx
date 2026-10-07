"use client";

import React from "react";
import { Workflow } from "lucide-react";

import SectionBg from "@/components/SectionBg";
import { SECTION_BG } from "@/lib/photos";
const steps = [
  {
    num: "01",
    title: "Research",
    desc: "We understand your product, audience, positioning and competitive landscape.",
  },
  {
    num: "02",
    title: "Creative Strategy",
    desc: "We identify creative angles, messaging opportunities and potential concepts.",
  },
  {
    num: "03",
    title: "Hooks & Concepts",
    desc: "We develop scroll-stopping hooks and multiple creative directions.",
  },
  {
    num: "04",
    title: "Script & Storyboard",
    desc: "The selected concept becomes a structured, production-ready video.",
  },
  {
    num: "05",
    title: "AI Production",
    desc: "Our AI-powered workflow brings the creative concept to life.",
  },
  {
    num: "06",
    title: "Editing & Sound",
    desc: "We add captions, voiceover, music, sound effects, pacing and finishing touches.",
  },
  {
    num: "07",
    title: "Quality Control",
    desc: "Every creative goes through a final review before delivery.",
  },
  {
    num: "08",
    title: "Delivery",
    desc: "You receive ready-to-use short-form video creatives for your marketing campaigns.",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="py-14 sm:py-20 lg:py-24 bg-white border-b border-purple-100/80 relative isolate">
      <SectionBg photo={SECTION_BG.problem} opacity={0.2} />
      <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10 sm:mb-14 lg:mb-16">
          <span className="eyebrow text-[11px] sm:text-xs">
            <Workflow className="w-3.5 h-3.5 text-purple-600" />
            <span>Our Creative Process</span>
          </span>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold !leading-[1.2] tracking-tight text-slate-900">
            From Product<br />
            <span className="font-serif italic font-bold text-gradient-brand inline-block pr-1.5">
              To performance-ready creative
            </span>
          </h2>

          <div className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto space-y-1">
            <p>You don't need to manage creators, locations and production teams.</p>
            <p className="font-semibold text-slate-900">We handle the creative workflow from concept to final video.</p>
          </div>
        </div>

        {/* 8-Step Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 max-w-6xl 3xl:max-w-7xl mx-auto">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className={`rounded-2xl p-5 lg:p-6 border transition-all flex flex-col justify-between ${
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
