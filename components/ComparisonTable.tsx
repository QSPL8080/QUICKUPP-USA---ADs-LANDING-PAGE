"use client";

import React from "react";
import { Scale, Sparkles, Check, X } from "lucide-react";

import SectionBg from "@/components/SectionBg";
import { SECTION_BG } from "@/lib/photos";
const comparisonRows = [
  {
    traditional: "Find creators",
    quickupp: "AI-powered creative workflow",
  },
  {
    traditional: "Coordinate shoots",
    quickupp: "Digital production",
  },
  {
    traditional: "Book locations",
    quickupp: "AI-generated environments",
  },
  {
    traditional: "Multiple production steps",
    quickupp: "Streamlined workflow",
  },
  {
    traditional: "One concept at a time",
    quickupp: "Multiple concepts simultaneously",
  },
  {
    traditional: "Expensive reshoots",
    quickupp: "Faster creative iterations",
  },
  {
    traditional: "Limited creative variations",
    quickupp: "More variations to test",
  },
  {
    traditional: "Repeat the production process",
    quickupp: "Build a continuous creative pipeline",
  },
];

export default function ComparisonTable() {
  return (
    <section id="comparison" className="py-14 sm:py-20 lg:py-24 bg-slate-50/60 border-b border-purple-100/80 relative isolate">
      <SectionBg photo={SECTION_BG.comparison} opacity={0.2} />
      <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10 sm:mb-14">
          <span className="eyebrow text-[11px] sm:text-xs">
            <Scale className="w-3.5 h-3.5 text-purple-600" />
            <span>Creative Comparison</span>
          </span>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold !leading-[1.2] tracking-tight text-slate-900">
            Traditional Production vs<br />
            <span className="font-serif italic font-bold text-gradient-brand inline-block pr-1.5">
              AI Creative Production
            </span>
          </h2>
        </div>

        {/* Premium Clean Comparison Table */}
        <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full table-fixed text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100/80">
                <th className="p-3 xs:p-4 sm:p-5 text-[10px] xs:text-xs sm:text-sm font-bold uppercase tracking-wide sm:tracking-wider text-slate-600 w-1/2 align-middle">
                  Traditional Production
                </th>
                <th className="p-3 xs:p-4 sm:p-5 text-[10px] xs:text-xs sm:text-sm font-bold uppercase tracking-wide sm:tracking-wider text-purple-900 w-1/2 bg-purple-100/50 border-l border-slate-200 align-middle">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>Quickupp AI Studio</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-[12.5px] xs:text-[13px] sm:text-sm">
              {comparisonRows.map((row) => (
                <tr key={row.traditional} className="hover:bg-purple-50/20 transition-colors">
                  <td className="p-3 xs:p-4 sm:p-5 text-slate-600 align-middle">
                    <div className="flex items-start sm:items-center gap-2">
                      <span className="h-5 w-5 rounded bg-rose-50 text-rose-500 font-bold text-xs flex items-center justify-center shrink-0">
                        ✕
                      </span>
                      <span>{row.traditional}</span>
                    </div>
                  </td>
                  <td className="p-3 xs:p-4 sm:p-5 text-slate-900 font-bold bg-purple-50/30 border-l border-slate-200 align-middle">
                    <div className="flex items-start sm:items-center gap-2">
                      <span className="h-5 w-5 rounded bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0">
                        ✓
                      </span>
                      <span>{row.quickupp}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Statement Card */}
        <div className="max-w-4xl mx-auto mt-6 sm:mt-8 rounded-2xl p-5 sm:p-8 bg-gradient-to-r from-purple-900 via-indigo-950 to-slate-950 text-center text-white shadow-md">
          <p className="text-slate-300 text-sm sm:text-base mb-1 font-medium">
            You don't always need another production day.
          </p>
          <p className="font-heading text-base xs:text-lg sm:text-2xl font-extrabold tracking-tight uppercase">
            SOMETIMES, YOU NEED <span className="text-gradient-brand">MORE CREATIVE IDEAS</span>
          </p>
        </div>

      </div>
    </section>
  );
}
