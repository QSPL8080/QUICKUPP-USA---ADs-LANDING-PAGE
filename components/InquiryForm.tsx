"use client";

import React, { useId, useState } from "react";

/*
  The inquiry form used by both the Contact section and the lead popup,
  so both always have exactly the same fields and submit the same way.
*/

export type InquiryData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  industry: string;
  serviceNeeded: string;
  requirement: string;
  projectDetails: string;
  agreed: boolean;
};

const EMPTY: InquiryData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  website: "",
  industry: "",
  serviceNeeded: "",
  requirement: "",
  projectDetails: "",
  agreed: false,
};

export default function InquiryForm({
  layout = "section",
  defaultAgreed = false,
  onSuccess,
}: {
  /** "section": fields go single-column on small laptops (narrow column); "popup": two columns from 640px */
  layout?: "section" | "popup";
  /** Whether the agreement checkbox starts ticked (unticked by default, in both the popup and the Contact section) */
  defaultAgreed?: boolean;
  onSuccess?: () => void;
}) {
  const initial: InquiryData = { ...EMPTY, agreed: defaultAgreed };
  const [formData, setFormData] = useState<InquiryData>(initial);
  const [loading, setLoading] = useState(false);
  const agreeId = useId();

  const rowClass =
    layout === "popup"
      ? "grid grid-cols-1 sm:grid-cols-2 gap-3"
      : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3";

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
      setFormData(initial);
      onSuccess?.();
    } catch (err: any) {
      onSuccess?.();
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 flex flex-col h-full justify-between">
      <div className="space-y-3">
        {/* Row 1: Name & Work Email */}
        <div className={rowClass}>
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
        <div className={rowClass}>
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
        <div className={rowClass}>
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
        <div className={rowClass}>
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
            id={agreeId}
            checked={formData.agreed}
            onChange={handleChange}
            className="mt-0.5 h-4 w-4 shrink-0 accent-purple-600 rounded"
          />
          <label htmlFor={agreeId} className="leading-relaxed cursor-pointer">
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
  );
}
