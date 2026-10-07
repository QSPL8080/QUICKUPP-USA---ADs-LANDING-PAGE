"use client";

import React from "react";
import { CountUp, RollText } from "@/components/StatCounter";

const card =
  "rounded-2xl border border-purple-100/90 bg-white/95 p-4 sm:p-5 text-center shadow-xs hover:border-purple-300 hover:shadow-md transition-all";
const value = "font-extrabold text-2xl xs:text-3xl sm:text-4xl leading-tight mb-1";
const label = "text-xs sm:text-sm font-bold text-slate-600";

export default function SocialProof() {
  return (
    <section id="social-proof" className="py-8 sm:py-10 bg-slate-50/70 border-b border-purple-100/80">
      <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-6 lg:px-8">
        {/* 4 Metric Cards — values animate when the row scrolls into view */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 max-w-5xl mx-auto">
          <div className={card}>
            <div className={value}>
              <CountUp to={60} suffix="s" duration={4800} className="text-gradient-brand" />
            </div>
            <div className={label}>Max video length</div>
          </div>

          <div className={card}>
            <div className={`${value} text-purple-700`}>
              <CountUp to={5} suffix="+" duration={4200} delay={300} />
            </div>
            <div className={label}>Creative formats</div>
          </div>

          <div className={card}>
            <div className={`${value} text-slate-900`}>
              <RollText text="Multiple" delay={600} stagger={220} />
            </div>
            <div className={label}>Hooks &amp; concepts</div>
          </div>

          <div className={card}>
            <div className="font-extrabold text-xl xs:text-2xl sm:text-3xl leading-tight mb-1 sm:pt-1 text-pink-600">
              <RollText text="Built for" delay={800} stagger={220} />
            </div>
            <div className={label}>Paid Social</div>
          </div>
        </div>
      </div>
    </section>
  );
}
