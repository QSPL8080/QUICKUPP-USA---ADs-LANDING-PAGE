"use client";

import React from "react";
import Link from "next/link";
import { Calendar, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-slate-950 px-4 xs:px-5 sm:px-6 lg:px-8 pt-12 pb-8 text-slate-300 md:pt-16 overflow-hidden">
      {/* Radiant Atmosphere Bottom Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[400px] sm:h-[600px] w-full select-none"
        style={{
          background:
            "radial-gradient(ellipse 110% 80% at 50% 90%, rgba(200, 50, 255, 0.35) 0%, rgba(130, 45, 255, 0.22) 40%, rgba(40, 110, 255, 0.1) 65%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl 3xl:max-w-7xl flex flex-col">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-9 md:grid-cols-3 lg:grid-cols-12 lg:gap-6 items-start">
          
          {/* Column 1: Brand Info (3 cols) */}
          <div className="col-span-2 md:col-span-3 lg:col-span-3 flex flex-col items-start gap-3.5">
            <Link href="#top" className="-ml-1 flex items-center transition-opacity hover:opacity-90">
              <img
                src="/images/logo.png"
                alt="Quickupp AI Studio logo"
                className="h-9 md:h-10 w-auto object-contain"
                loading="lazy"
                width={125}
                height={40}
              />
            </Link>
            
            <div className="space-y-1">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300">
                QUICKUPP AI STUDIO
              </h4>
              <p className="text-sm font-semibold text-neon">AI Creative Team for Brands</p>
            </div>

            <p className="text-xs leading-relaxed text-slate-400 sm:text-sm max-w-sm">
              We create conversion-focused AI video ads for brands—without expensive shoots, creators, or production teams.
            </p>

            <div className="pt-2">
              <a
                href="https://calendly.com/qsaistudio/quickupp-ai-studio-30-min-strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2 text-xs font-semibold text-white shadow-md glow-neon transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Calendar className="h-3.5 w-3.5" />
                <span>Book a Strategy Call</span>
              </a>
            </div>
          </div>

          {/* Column 2: SERVICES (2 cols) */}
          <div className="flex flex-col gap-3 lg:col-span-2">
            <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-white sm:text-sm">
              SERVICES
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-xs text-slate-400 transition-colors hover:text-neon sm:text-sm">
                  AI UGC Video Ads
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-xs text-slate-400 transition-colors hover:text-neon sm:text-sm">
                  AI Avatar Video Ads
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-xs text-slate-400 transition-colors hover:text-neon sm:text-sm">
                  AI Cartoon Video Ads
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-xs text-slate-400 transition-colors hover:text-neon sm:text-sm">
                  AI Hyper-Realistic Video Ads
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-xs text-slate-400 transition-colors hover:text-neon sm:text-sm">
                  AI Digital Twin Video
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-xs text-slate-400 transition-colors hover:text-neon sm:text-sm">
                  Digital Twin Setup
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: INDUSTRIES (2 cols) */}
          <div className="flex flex-col gap-3 lg:col-span-2">
            <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-white sm:text-sm">
              INDUSTRIES
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#who-we-serve" className="text-xs text-slate-400 transition-colors hover:text-neon sm:text-sm">
                  DTC / E-Commerce
                </Link>
              </li>
              <li>
                <Link href="#who-we-serve" className="text-xs text-slate-400 transition-colors hover:text-neon sm:text-sm">
                  SaaS / AI
                </Link>
              </li>
              <li>
                <Link href="#who-we-serve" className="text-xs text-slate-400 transition-colors hover:text-neon sm:text-sm">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link href="#who-we-serve" className="text-xs text-slate-400 transition-colors hover:text-neon sm:text-sm">
                  Med Spa / Aesthetics
                </Link>
              </li>
              <li>
                <Link href="#who-we-serve" className="text-xs text-slate-400 transition-colors hover:text-neon sm:text-sm">
                  Agencies
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: COMPANY (2 cols) */}
          <div className="flex flex-col gap-3 lg:col-span-2">
            <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-white sm:text-sm">
              COMPANY
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#top" className="text-xs text-slate-400 transition-colors hover:text-neon sm:text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="#showcase" className="text-xs text-slate-400 transition-colors hover:text-neon sm:text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#solution" className="text-xs text-slate-400 transition-colors hover:text-neon sm:text-sm">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-xs text-slate-400 transition-colors hover:text-neon sm:text-sm">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-xs text-slate-400 transition-colors hover:text-neon sm:text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#audit-form" className="text-xs text-slate-400 transition-colors hover:text-neon sm:text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: OUR LOCATIONS (3 cols) */}
          <div className="col-span-2 md:col-span-3 lg:col-span-3 flex flex-col gap-3.5">
            <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-white sm:text-sm">
              OUR LOCATIONS
            </h3>

            <div className="flex flex-col gap-2.5 text-xs">
              <a
                href="https://maps.app.goo.gl/2rLqrCN4rco2XpQr5"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-1.5 text-slate-400 hover:text-[#60a5fa] transition-colors"
              >
                <MapPin className="h-3.5 w-3.5 text-[#60a5fa] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white group-hover:text-[#60a5fa]">USA Office: </span>
                  <span className="leading-tight block text-[11px] text-slate-400 mt-0.5">
                    8 The Green, Suite A, Dover, Delaware - 19901, USA
                  </span>
                </div>
              </a>

              <a
                href="https://maps.google.com/?q=Jacques+St,+Montr%C3%A9al,+QC+H2Y+1P5"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-1.5 text-slate-400 hover:text-red-400 transition-colors"
              >
                <MapPin className="h-3.5 w-3.5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white group-hover:text-red-400">Canada Office: </span>
                  <span className="leading-tight block text-[11px] text-slate-400 mt-0.5">
                    Jacques St, Montréal, QC H2Y 1P5
                  </span>
                </div>
              </a>
            </div>

            <div className="border-t border-slate-800/80 pt-3 flex flex-col gap-2.5">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@quickuppaistudio.us"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-neon"
                title="Send email via Gmail"
              >
                <Mail className="h-4.5 w-4.5 text-neon shrink-0 transition-transform group-hover:scale-110" />
                <span className="text-[13px] sm:text-sm font-medium tracking-tight break-all">
                  info@quickuppaistudio.us
                </span>
              </a>

              <a
                href="tel:+13027545679"
                className="group inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-emerald-400"
                title="Call Quickupp AI Studio"
              >
                <Phone className="h-4.5 w-4.5 text-emerald-400 shrink-0 transition-transform group-hover:scale-110" />
                <span className="font-mono text-[13px] sm:text-sm font-medium tracking-wide">
                  +1 (302) 754-5679
                </span>
              </a>
            </div>
          </div>

        </div>

        {/* Big Footer Brand Logo Banner */}
        <div className="mt-10 mb-6 md:mt-12 md:mb-8 flex items-center justify-center select-none">
          <img
            src="/images/footer logo.png"
            alt="Quickupp AI Studio"
            className="w-full max-w-5xl h-auto max-h-[160px] sm:max-h-[220px] md:max-h-[300px] object-contain drop-shadow-[0_0_50px_rgba(200,50,255,0.25)]"
            loading="lazy"
          />
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-4 pb-2 text-center text-xs text-slate-500 sm:flex-row">
          <p>© 2026 Quickupp AI Studio. All rights reserved.</p>
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
            <a href="https://quickuppaistudio.us/privacy-policy" target="_blank" className="hover:text-neon transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="https://quickuppaistudio.us/terms" target="_blank" className="hover:text-neon transition-colors">
              Terms & Conditions
            </a>
            <span>•</span>
            <a href="https://quickuppaistudio.us/cookie-policy" target="_blank" className="hover:text-neon transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
