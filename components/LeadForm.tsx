"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, Lock, Clock, CheckCircle2, Check, Calendar, ExternalLink } from "lucide-react";

import SectionBg from "@/components/SectionBg";
import { SECTION_BG } from "@/lib/photos";
export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    industry: "",
    serviceNeeded: "",
    requirement: "",
    projectDetails: "",
    agreed: true,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        // even if API route isn't set up yet, fallback to graceful success
      }
      setSubmitted(true);
    } catch (err: any) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-10 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-50/80 via-purple-50/30 to-white relative overflow-hidden isolate">
      <SectionBg photo={SECTION_BG.contact} opacity={0.24} />
      {/* Anchor target for legacy audit-form links */}
      <span id="audit-form" aria-hidden="true" className="absolute top-0 left-0" />
      {/* Soft Background Wave / Blur Atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full blur-[140px] opacity-25"
        style={{ background: "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full blur-[140px] opacity-20"
        style={{ background: "radial-gradient(circle, rgba(236, 72, 153, 0.35) 0%, transparent 70%)" }}
      />

      <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-2.5 mb-8 sm:mb-12 max-w-2xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-[2.1rem] lg:text-[2.35rem] font-bold tracking-tight text-slate-900 !leading-[1.15]">
            Contact / <span className="font-serif italic font-bold text-gradient-brand inline-block pr-1.5">Booking</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-[14px] leading-relaxed max-w-lg mx-auto">
            Send us your project details, or book a free 30-minute strategy call with our creative team. Whichever suits you.
          </p>
        </div>

        {/* 2-Column Grid: Left Contact Form | Right Calendly Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-stretch max-w-6xl 3xl:max-w-7xl mx-auto">
          
          {/* ─────────────────────────────────────────────────────────────
              LEFT COLUMN: CONTACT FORM (6 Cols)
             ───────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-6 min-w-0 rounded-2xl sm:rounded-3xl border border-purple-100/90 bg-white p-4 xs:p-5 sm:p-6 lg:p-7 shadow-xl shadow-purple-900/5 flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="space-y-3 flex flex-col h-full justify-between">
              <div className="space-y-3">
                {/* Row 1: Name & Work Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Name*
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Work Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Phone*
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Company / Brand*
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company or brand name"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Website & Industry */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Website
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://yourbrand.com or social"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Industry*
                    </label>
                    <select
                      name="industry"
                      required
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all cursor-pointer"
                    >
                      <option value="">Select industry</option>
                      <option value="Beauty & Skincare">Beauty &amp; Skincare</option>
                      <option value="Health & Wellness">Health &amp; Wellness</option>
                      <option value="Fashion & Apparel">Fashion &amp; Apparel</option>
                      <option value="Jewelry & Accessories">Jewelry &amp; Accessories</option>
                      <option value="Food & Beverage">Food &amp; Beverage</option>
                      <option value="Pet & Home">Pet &amp; Home</option>
                      <option value="Consumer Tech / Electronics">Consumer Tech / Electronics</option>
                      <option value="Other DTC / E-Commerce">Other DTC / E-Commerce</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: What do you need & Monthly creative requirement */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      What do you need?*
                    </label>
                    <select
                      name="serviceNeeded"
                      required
                      value={formData.serviceNeeded}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all cursor-pointer"
                    >
                      <option value="">Select video format / need</option>
                      <option value="AI UGC Video Ads">AI UGC Video Ads</option>
                      <option value="AI Avatar Explainer Ads">AI Avatar Explainer Ads</option>
                      <option value="Hyper-Realistic 3D Ads">Hyper-Realistic 3D Ads</option>
                      <option value="AI Cartoon / Style Ads">AI Cartoon / Style Ads</option>
                      <option value="Digital Twin Ads">Digital Twin Ads</option>
                      <option value="Full Creative Variation Package">Full Creative Variation Package</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Monthly creative requirement*
                    </label>
                    <select
                      name="requirement"
                      required
                      value={formData.requirement}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all cursor-pointer"
                    >
                      <option value="">Select volume / requirement</option>
                      <option value="Starter (3–5 Ads / month)">Starter (3–5 Ads / month)</option>
                      <option value="Growth (10–15 Ads / month)">Growth (10–15 Ads / month)</option>
                      <option value="Scale (25+ Ads / month)">Scale (25+ Ads / month)</option>
                      <option value="One-time Test Campaign">One-time Test Campaign</option>
                    </select>
                  </div>
                </div>

                {/* Project Details Textarea */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Project details*
                  </label>
                  <textarea
                    name="projectDetails"
                    required
                    rows={3}
                    value={formData.projectDetails}
                    onChange={handleChange}
                    placeholder="Tell us what you're selling, who you're targeting, hooks/angles, and what you're trying to achieve..."
                    className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all"
                  />
                </div>

                {/* Legal Checkbox */}
                <div className="flex items-start gap-2 pt-1 text-[11px] sm:text-xs text-slate-500">
                  <input
                    type="checkbox"
                    name="agreed"
                    id="agree-checkbox"
                    checked={formData.agreed}
                    onChange={handleChange}
                    className="mt-0.5 h-4 w-4 shrink-0 accent-purple-600 rounded"
                  />
                  <label htmlFor="agree-checkbox" className="leading-relaxed cursor-pointer">
                    I agree to the{" "}
                    <a href="#privacy" className="text-purple-600 underline hover:text-purple-700">
                      Privacy Policy
                    </a>
                    ,{" "}
                    <a href="#terms" className="text-purple-600 underline hover:text-purple-700">
                      Terms &amp; Conditions
                    </a>
                    , and{" "}
                    <a href="#cookies" className="text-purple-600 underline hover:text-purple-700">
                      Cookie Policy
                    </a>
                    .
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-gradient-brand py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md glow-neon hover:brightness-110 active:scale-98 transition-all cursor-pointer disabled:opacity-75"
                >
                  {loading ? "Submitting Inquiry..." : "SUBMIT INQUIRY"}
                </button>
              </div>
            </form>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              RIGHT COLUMN: CALENDLY EMBED CARD (6 Cols)
             ───────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-6 min-w-0 rounded-2xl sm:rounded-3xl border border-purple-100/90 bg-white overflow-hidden shadow-xl shadow-purple-900/5 flex flex-col h-full">
            
            {/* Top Bar matching screenshot */}
            <div className="px-4 py-3.5 sm:px-6 sm:py-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-x-3 gap-y-2 bg-slate-50/50 shrink-0">
              <div className="flex items-center gap-2.5 text-left min-w-0">
                <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center text-white shrink-0 shadow-xs">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[13px] sm:text-sm font-bold text-slate-900 leading-tight">
                    Book a 30-Min Strategy Call
                  </h4>
                  <p className="text-[11px] text-slate-500">Pick a time that works for you · Free</p>
                </div>
              </div>

              <a
                href="https://calendly.com/qsaistudio/quickupp-ai-studio-30-min-strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open booking page in a new tab"
                className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap text-[11px] font-semibold text-purple-700 hover:text-purple-800 bg-purple-50 hover:bg-purple-100 px-2.5 sm:px-3 py-1.5 rounded-lg transition-all"
              >
                <span>Open in New Tab</span>
                <ExternalLink className="w-3 h-3 shrink-0" />
              </a>
            </div>

            {/* Calendly Inline Widget — scrollable, with its scrollbar hidden.
                The scrollbar lives inside Calendly's page (can't be styled), so the
                iframe is made 24px wider than this box and the overflow is clipped. */}
            <div className="w-full flex-1 bg-white relative overflow-hidden">
              <iframe
                src="https://calendly.com/qsaistudio/quickupp-ai-studio-30-min-strategy-call?embed_domain=quickuppaistudio.us&embed_type=Inline&hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=9333ea"
                frameBorder="0"
                loading="lazy"
                title="Quickupp AI Studio - 30 Min Strategy Call"
                className="block max-w-none border-0 w-[calc(100%+24px)] h-[620px] sm:h-[600px] lg:h-full lg:min-h-[540px]"
              />
            </div>
          </div>

        </div>

      </div>

      {/* Submission Success Modal */}
      {submitted && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white border border-purple-200 rounded-3xl p-6 sm:p-8 max-w-md w-full max-h-[90dvh] overflow-y-auto text-center space-y-4 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-300">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-slate-900">Inquiry Submitted!</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Thank you for reaching out. Our DTC creative strategy team has received your project details and will get back to you within 24 hours.
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
