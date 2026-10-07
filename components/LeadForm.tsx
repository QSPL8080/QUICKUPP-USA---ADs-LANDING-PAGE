"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, Lock, Clock, CheckCircle2, Check } from "lucide-react";

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="audit-form" className="py-12 sm:py-20 lg:py-24 bg-slate-50/70 relative">
      <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto rounded-2xl sm:rounded-3xl border border-purple-200/90 bg-white p-4 xs:p-5 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
          
          {/* Header */}
          <div className="text-center space-y-3 mb-7 sm:mb-10">
            <span className="eyebrow">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>15 — LEAD FORM</span>
            </span>

            <h2 className="font-heading text-[1.35rem] leading-snug sm:text-2xl md:text-3xl font-bold text-slate-900">
              Claim Your Free DTC Creative Audit & <span className="text-gradient-brand">Ad Blueprint</span>
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
              Share your store details below. Our DTC creative strategy team will analyze your product angles and send 3 high-converting hook concepts within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-purple-600 focus:bg-white focus:outline-none transition-all shadow-2xs"
                />
              </div>

              {/* Brand Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Brand / Company Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lumina Skincare"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-purple-600 focus:bg-white focus:outline-none transition-all shadow-2xs"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Best Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="sarah@yourbrand.com"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-purple-600 focus:bg-white focus:outline-none transition-all shadow-2xs"
                />
              </div>

              {/* Store URL */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Website / Store URL *
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://yourbrand.com"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-purple-600 focus:bg-white focus:outline-none transition-all shadow-2xs"
                />
              </div>

            </div>

            {/* Dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Current Monthly Ad Spend
                </label>
                <select className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-purple-600 focus:bg-white focus:outline-none transition-all shadow-2xs cursor-pointer">
                  <option value="under5k">Under $5,000 / month</option>
                  <option value="5k-20k" defaultValue="5k-20k">$5,000 – $20,000 / month</option>
                  <option value="20k-50k">$20,000 – $50,000 / month</option>
                  <option value="50k-100k">$50,000 – $100,000 / month</option>
                  <option value="100k+">$100,000+ / month</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Target Launch Timeline
                </label>
                <select className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-purple-600 focus:bg-white focus:outline-none transition-all shadow-2xs cursor-pointer">
                  <option value="asap">ASAP (Next 7 days)</option>
                  <option value="2weeks">Within 2–4 weeks</option>
                  <option value="exploring">Just exploring options</option>
                </select>
              </div>
            </div>

            {/* Formats Checklist */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                Creative Formats of Interest (Select All That Apply)
              </label>
              <div className="grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-2.5 text-[13px] sm:text-xs text-slate-800">
                <label className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-purple-50 cursor-pointer">
                  <input type="checkbox" defaultChecked className="accent-purple-600 rounded" />
                  <span>AI UGC Videos</span>
                </label>
                <label className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-purple-50 cursor-pointer">
                  <input type="checkbox" defaultChecked className="accent-purple-600 rounded" />
                  <span>AI Avatar Ads</span>
                </label>
                <label className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-purple-50 cursor-pointer">
                  <input type="checkbox" className="accent-purple-600 rounded" />
                  <span>Hyper-Realistic 3D</span>
                </label>
                <label className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-purple-50 cursor-pointer">
                  <input type="checkbox" className="accent-purple-600 rounded" />
                  <span>AI Cartoon / Pattern</span>
                </label>
                <label className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-purple-50 cursor-pointer">
                  <input type="checkbox" className="accent-purple-600 rounded" />
                  <span>Digital Twin</span>
                </label>
                <label className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-purple-50 cursor-pointer">
                  <input type="checkbox" className="accent-purple-600 rounded" />
                  <span>Full Creative Mix</span>
                </label>
              </div>
            </div>

            {/* Bottleneck Textarea */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                What is your biggest creative bottleneck right now? (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="e.g. We have ad fatigue on Meta and need 10+ fresh hook angles for our flagship product..."
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-purple-600 focus:bg-white focus:outline-none transition-all shadow-2xs"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-brand px-4 py-4 text-sm sm:text-base font-bold text-center leading-snug text-white shadow-md glow-neon hover:brightness-110 active:scale-95 transition-all cursor-pointer"
            >
              {loading ? (
                <span>Generating Your Audit Plan...</span>
              ) : (
                <>
                  <span>CLAIM YOUR FREE CREATIVE AUDIT & AD BLUEPRINT</span>
                  <ArrowRight className="w-5 h-5 shrink-0" />
                </>
              )}
            </button>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs text-slate-500 pt-2 font-mono">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-emerald-600" /> 100% Free & Confidential
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-purple-600" /> 24-Hour Turnaround
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-cyan-600" /> No Obligation
              </span>
            </div>

          </form>

        </div>

      </div>

      {/* Submission Success Modal */}
      {submitted && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-white border border-purple-200 rounded-3xl p-6 sm:p-8 max-w-md w-full max-h-[90dvh] overflow-y-auto text-center space-y-4 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-300">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-slate-900">Creative Audit Received!</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our DTC creative strategists are analyzing your store and crafting your customized hook angles. Expect your audit blueprint in your inbox within 24 hours.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="w-full rounded-xl bg-gradient-brand py-3 text-sm font-bold text-white shadow-md glow-neon"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
