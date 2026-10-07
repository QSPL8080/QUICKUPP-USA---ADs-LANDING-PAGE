"use client";

import React from "react";

export default function SocialProof() {
  return (
    <section id="social-proof" className="py-8 sm:py-10 bg-slate-50/70 border-b border-purple-100/80">
      <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-6 lg:px-8">
        {/* 4 Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 max-w-5xl mx-auto">
          
          <div className="rounded-2xl border border-purple-100/90 bg-white/95 p-4 sm:p-5 text-center shadow-xs hover:border-purple-300 hover:shadow-md transition-all">
            <div className="font-extrabold text-2xl xs:text-3xl sm:text-4xl text-gradient-brand mb-1">60s</div>
            <div className="text-xs sm:text-sm font-bold text-slate-600">Max video length</div>
          </div>

          <div className="rounded-2xl border border-purple-100/90 bg-white/95 p-4 sm:p-5 text-center shadow-xs hover:border-purple-300 hover:shadow-md transition-all">
            <div className="font-extrabold text-2xl xs:text-3xl sm:text-4xl text-purple-700 mb-1">5+</div>
            <div className="text-xs sm:text-sm font-bold text-slate-600">Creative formats</div>
          </div>

          <div className="rounded-2xl border border-purple-100/90 bg-white/95 p-4 sm:p-5 text-center shadow-xs hover:border-purple-300 hover:shadow-md transition-all">
            <div className="font-extrabold text-2xl xs:text-3xl sm:text-4xl text-slate-900 mb-1">Multiple</div>
            <div className="text-xs sm:text-sm font-bold text-slate-600">Hooks & concepts</div>
          </div>

          <div className="rounded-2xl border border-purple-100/90 bg-white/95 p-4 sm:p-5 text-center shadow-xs hover:border-purple-300 hover:shadow-md transition-all">
            <div className="font-extrabold text-xl xs:text-2xl sm:text-3xl text-pink-600 mb-1">Built for</div>
            <div className="text-xs sm:text-sm font-bold text-slate-600">Paid Social</div>
          </div>

        </div>

      </div>
    </section>
  );
}
