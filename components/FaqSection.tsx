"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What types of brands do you work with?",
    a: "We primarily work with DTC and e-commerce brands that need more short-form video creative for their marketing and advertising across Meta, TikTok, Instagram, and YouTube Shorts.",
  },
  {
    q: "Do I need professional product footage?",
    a: "Not necessarily. Depending on the creative concept, we can work with existing product images, Shopify store brand assets, raw product footage, CAD files, or other available materials.",
  },
  {
    q: "What platforms are the videos designed for?",
    a: "Our creatives can be developed for platforms including Meta (Facebook & Instagram Feed, Stories, Reels), TikTok, YouTube Shorts, and other short-form video placements.",
  },
  {
    q: "How long are the videos?",
    a: "Our standard videos can be up to 60 seconds, depending on the selected creative and project requirements (typically 15s, 30s, or 45s for peak paid social conversion rates).",
  },
  {
    q: "Can you create multiple versions of the same ad?",
    a: "Yes! Creating multiple hooks, angles, concepts and variations is one of the key advantages of our creative workflow, giving media buyers optimal test variants.",
  },
  {
    q: "Do you provide scripts and concepts?",
    a: "Yes. Our end-to-end process can include research, creative strategy, hooks, concepts, scripts, storyboards, AI production, editing, and quality control.",
  },
  {
    q: "Can you work with our existing marketing team or agency?",
    a: "Yes. Quickupp AI Studio regularly works alongside in-house marketing teams, media buyers, agencies, and other creative partners to provide continuous creative volume.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 lg:py-24 bg-white border-b border-purple-100/80 relative">
      <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10 sm:mb-14">
          <span className="eyebrow text-[11px] sm:text-xs">
            <HelpCircle className="w-3.5 h-3.5 text-purple-600" />
            <span>11 — FAQ</span>
          </span>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold !leading-[1.2] tracking-tight text-slate-900">
            Frequently Asked <span className="font-serif italic font-bold text-gradient-brand inline-block pr-1.5">Questions</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="rounded-2xl border border-slate-200/90 bg-slate-50/50 overflow-hidden transition-all shadow-xs hover:border-purple-300"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-3 p-4 sm:p-5 text-left font-bold text-slate-900 hover:text-purple-700 transition-colors focus:outline-none"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-purple-600 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-3 text-[13px] sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
