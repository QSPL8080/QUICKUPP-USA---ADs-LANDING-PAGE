"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calendar, Zap, Menu, X, Sparkles, ArrowRight } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header id="site-nav-container" className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      <div id="site-header-bar" className="relative border-b border-slate-200/80 bg-white/95 backdrop-blur-xl shadow-xs z-50">
        <div className="mx-auto flex w-full max-w-[1560px] items-center justify-between gap-3 xl:gap-6 px-4 sm:px-6 lg:px-8 py-3.5 min-h-[74px] sm:min-h-[80px]">
          
          {/* Logo on the left */}
          <Link
            href="#top"
            id="navbar-logo-anchor"
            className="flex items-center shrink-0 transition-opacity hover:opacity-90 mr-2"
            aria-label="QUICKUPP AI STUDIO"
          >
            <img
              src="/images/LOGO 1.png"
              alt="QUICKUPP AI STUDIO"
              className="h-8 sm:h-9 md:h-10 lg:h-11 w-auto object-contain shrink-0"
              width={140}
              height={44}
            />
          </Link>

          {/* Navigation in center */}
          <nav
            aria-label="Main Navigation"
            className="hidden items-center gap-1 rounded-xl border border-slate-200/90 bg-slate-100/80 px-3 py-1.5 xl:flex shadow-2xs relative shrink-0 mx-auto"
          >
            <Link
              href="#services"
              className="whitespace-nowrap rounded-lg px-3.5 py-2 text-sm font-bold text-slate-700 transition-colors duration-200 hover:text-purple-700 active:scale-95"
            >
              Services
            </Link>
            <Link
              href="#who-we-serve"
              className="whitespace-nowrap rounded-lg px-3.5 py-2 text-sm font-bold text-slate-700 transition-colors duration-200 hover:text-purple-700 active:scale-95"
            >
              Who We Serve
            </Link>
            <Link
              href="#showcase"
              className="whitespace-nowrap rounded-lg px-3.5 py-2 text-sm font-bold text-slate-700 transition-colors duration-200 hover:text-purple-700 active:scale-95"
            >
              Portfolio
            </Link>
            <Link
              href="#solution"
              className="whitespace-nowrap rounded-lg px-3.5 py-2 text-sm font-bold text-slate-700 transition-colors duration-200 hover:text-purple-700 active:scale-95"
            >
              Packages
            </Link>
            <Link
              href="#process"
              className="whitespace-nowrap rounded-lg px-3.5 py-2 text-sm font-bold text-slate-700 transition-colors duration-200 hover:text-purple-700 active:scale-95"
            >
              How It Works
            </Link>
            <Link
              href="#faq"
              className="whitespace-nowrap rounded-lg px-3.5 py-2 text-sm font-bold text-slate-700 transition-colors duration-200 hover:text-purple-700 active:scale-95"
            >
              FAQ
            </Link>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden xl:flex items-center gap-2.5 2xl:gap-3.5 shrink-0">
            
            {/* Button 1: Book a Strategy Call */}
            <a
              href="https://calendly.com/qsaistudio/quickupp-ai-studio-30-min-strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl font-bold transition-all duration-200 cursor-pointer border border-purple-200/90 bg-gradient-to-r from-violet-100 via-purple-100 to-pink-100 text-purple-900 shadow-xs hover:from-violet-200 hover:via-purple-200 hover:to-pink-200 hover:border-purple-400 hover:text-purple-950 hover:shadow-md hover:shadow-purple-500/15 active:scale-95 gap-1.5 whitespace-nowrap group px-4 py-2.5 text-xs sm:text-[13.5px]"
            >
              <Calendar className="h-4 w-4 text-purple-700 shrink-0 transition-transform duration-200 group-hover:scale-110" />
              <span>Book a Strategy Call</span>
            </a>

            {/* Button 2: Get Free Audit */}
            <Link
              href="#audit-form"
              className="inline-flex items-center justify-center rounded-xl font-bold transition-all duration-200 cursor-pointer bg-gradient-brand text-white shadow-md glow-neon hover:brightness-110 active:scale-95 gap-1.5 whitespace-nowrap text-xs sm:text-[13.5px] py-2.5 px-5"
            >
              <Sparkles className="h-4 w-4 text-white shrink-0" />
              <span>Get Free Audit</span>
            </Link>

            {/* Button 3: Launch DTC Ads / Buy Now */}
            <Link
              href="#audit-form"
              className="inline-flex items-center justify-center rounded-xl font-bold transition-all duration-200 cursor-pointer border border-purple-400/80 bg-slate-900 text-white shadow-xs hover:bg-slate-800 hover:border-purple-300 hover:shadow-md hover:shadow-purple-500/20 active:scale-95 transition-all gap-1.5 whitespace-nowrap group px-4.5 py-2.5 text-xs sm:text-[13.5px]"
            >
              <Zap className="h-4 w-4 text-white shrink-0 transition-transform duration-200 group-hover:scale-110" />
              <span>Launch DTC Ads</span>
            </Link>

          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 xl:hidden shrink-0">
            <Link
              href="#audit-form"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-gradient-brand px-3.5 py-2 text-xs font-bold text-white shadow-md hover:brightness-110 active:scale-95"
            >
              Get Free Audit
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 min-h-[40px] min-w-[40px] items-center justify-center rounded-xl border border-slate-200/90 bg-slate-100/90 text-slate-800 transition-colors hover:border-purple-400 hover:bg-purple-50 hover:text-purple-700 active:scale-95 cursor-pointer shadow-xs shrink-0"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5 text-slate-800" /> : <Menu className="h-5 w-5 text-slate-800" />}
            </button>
          </div>

        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-200 bg-white/98 px-5 py-5 space-y-3 shadow-2xl backdrop-blur-xl">
            <Link
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-slate-700 hover:text-purple-700 border-b border-slate-100"
            >
              Services
            </Link>
            <Link
              href="#who-we-serve"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-slate-700 hover:text-purple-700 border-b border-slate-100"
            >
              Who We Serve
            </Link>
            <Link
              href="#showcase"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-slate-700 hover:text-purple-700 border-b border-slate-100"
            >
              Portfolio
            </Link>
            <Link
              href="#solution"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-slate-700 hover:text-purple-700 border-b border-slate-100"
            >
              Packages
            </Link>
            <Link
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-slate-700 hover:text-purple-700 border-b border-slate-100"
            >
              How It Works
            </Link>
            <Link
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-slate-700 hover:text-purple-700 border-b border-slate-100"
            >
              FAQ
            </Link>
            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href="https://calendly.com/qsaistudio/quickupp-ai-studio-30-min-strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 rounded-xl border border-purple-200 bg-purple-50 text-purple-900 font-bold text-xs"
              >
                Book a Strategy Call
              </a>
              <Link
                href="#audit-form"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-xl bg-gradient-brand text-white font-bold text-xs shadow-md glow-neon"
              >
                Claim Free DTC Creative Audit →
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
