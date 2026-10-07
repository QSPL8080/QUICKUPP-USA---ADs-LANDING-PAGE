"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, Zap, Menu, X, Sparkles, ArrowRight } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/qsaistudio/quickupp-ai-studio-30-min-strategy-call";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#who-we-serve", label: "Who We Serve" },
  { href: "#showcase", label: "Portfolio" },
  { href: "#process", label: "How It Works" },
  { href: "#faq", label: "FAQ" },
];

/*
  Responsive behaviour
  ─────────────────────────────────────────────────────────────
  < 1024px  (phones + tablets)  Logo · [Get Free Audit] · ☰ menu
  ≥ 1024px  (small laptops)     Logo · Nav · Get Free Audit
  ≥ 1280px  (laptops)           Logo · Nav · Book a Call · Get Free Audit
  ≥ 1680px  (large desktops)    Logo · Nav · Book a Call · Get Free Audit · Launch DTC Ads
  Every hidden item stays available in the mobile menu.
*/
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Subtle shadow once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu on Escape or when resizing up to desktop
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileMenuOpen(false);
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = (e: MediaQueryListEvent) => e.matches && setMobileMenuOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    // Lock page scroll behind the open menu
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
      document.body.style.overflow = prev;
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header id="site-nav-container" className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      <div
        id="site-header-bar"
        className={`relative border-b border-slate-200/80 bg-white/95 backdrop-blur-xl z-50 transition-shadow duration-300 ${
          scrolled || mobileMenuOpen ? "shadow-md shadow-slate-900/5" : "shadow-xs"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1560px] items-center justify-between gap-2 sm:gap-3 xl:gap-4 px-3 xs:px-4 sm:px-6 lg:px-6 xl:px-8 h-16 sm:h-[72px] lg:h-[76px] 2xl:h-20">
          {/* Logo */}
          <Link
            href="#top"
            id="navbar-logo-anchor"
            onClick={closeMenu}
            className="flex items-center shrink min-w-0 transition-opacity hover:opacity-90"
            aria-label="QUICKUPP AI STUDIO"
          >
            <img
              src="/images/LOGO 1.png"
              alt="QUICKUPP AI STUDIO"
              className="h-7 xs:h-8 sm:h-9 lg:h-8 xl:h-9 2xl:h-10 3xl:h-11 w-auto max-w-full object-contain object-left"
              width={1600}
              height={292}
            />
          </Link>

          {/* Desktop navigation (≥1024px) */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex flex-1 justify-center min-w-0"
          >
            <div className="flex items-center gap-0.5 rounded-xl border border-slate-200/90 bg-slate-100/80 px-1.5 xl:px-2 py-1 xl:py-1.5 shadow-2xs">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="whitespace-nowrap rounded-lg px-2 xl:px-2.5 2xl:px-3.5 py-2 text-[13px] 2xl:text-sm font-bold text-slate-700 transition-colors duration-200 hover:bg-white hover:text-purple-700 active:scale-95"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Desktop CTAs (≥1024px) */}
          <div className="hidden lg:flex items-center gap-2 2xl:gap-2.5 shrink-0">
            {/* Book a Strategy Call — from 1280px */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-xl border border-purple-200/90 bg-gradient-to-r from-violet-100 via-purple-100 to-pink-100 px-3 2xl:px-4 py-2.5 text-[13px] 2xl:text-[13.5px] font-bold text-purple-900 shadow-xs transition-all duration-200 hover:border-purple-400 hover:from-violet-200 hover:via-purple-200 hover:to-pink-200 hover:text-purple-950 hover:shadow-md hover:shadow-purple-500/15 active:scale-95 group"
            >
              <Calendar className="h-4 w-4 shrink-0 text-purple-700 transition-transform duration-200 group-hover:scale-110" />
              <span>Book a Strategy Call</span>
            </a>

            {/* Get Free Audit — always on desktop */}
            <Link
              href="#audit-form"
              className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-xl bg-gradient-brand px-4 2xl:px-5 py-2.5 text-[13px] 2xl:text-[13.5px] font-bold text-white shadow-md glow-neon transition-all duration-200 hover:brightness-110 active:scale-95"
            >
              <Sparkles className="h-4 w-4 shrink-0 text-white" />
              <span>Get Free Audit</span>
            </Link>

            {/* Launch DTC Ads — large desktops only */}
            <Link
              href="#audit-form"
              className="hidden 3xl:inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-xl border border-purple-400/80 bg-slate-900 px-4 py-2.5 text-[13.5px] font-bold text-white shadow-xs transition-all duration-200 hover:border-purple-300 hover:bg-slate-800 hover:shadow-md hover:shadow-purple-500/20 active:scale-95 group"
            >
              <Zap className="h-4 w-4 shrink-0 text-white transition-transform duration-200 group-hover:scale-110" />
              <span>Launch DTC Ads</span>
            </Link>
          </div>

          {/* Mobile / tablet controls (<1024px) */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            {/* Book a call icon button — tablets */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-xl border border-purple-200/90 bg-gradient-to-r from-violet-100 via-purple-100 to-pink-100 px-3.5 py-2.5 text-[13px] font-bold text-purple-900 shadow-xs hover:border-purple-400 active:scale-95"
            >
              <Calendar className="h-4 w-4 shrink-0 text-purple-700" />
              <span>Book a Call</span>
            </a>
            <Link
              href="#audit-form"
              onClick={closeMenu}
              className="hidden min-[350px]:inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-xl bg-gradient-brand px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-[13px] font-bold text-white shadow-md hover:brightness-110 active:scale-95"
            >
              <Sparkles className="hidden sm:block h-4 w-4 shrink-0" />
              <span>Get Free Audit</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200/90 bg-slate-100/90 text-slate-800 shadow-xs transition-colors hover:border-purple-400 hover:bg-purple-50 hover:text-purple-700 active:scale-95 cursor-pointer"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile / tablet menu panel */}
        <div
          id="mobile-menu"
          className={`lg:hidden absolute inset-x-0 top-full origin-top border-t border-slate-200 bg-white shadow-2xl transition-all duration-200 ${
            mobileMenuOpen ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="mx-auto w-full max-w-3xl max-h-[calc(100dvh-4rem)] sm:max-h-[calc(100dvh-72px)] overflow-y-auto overscroll-contain px-4 sm:px-6 py-4 sm:py-6">
            <nav aria-label="Mobile Navigation" className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between border-b border-slate-100 py-3.5 text-[15px] font-bold text-slate-800 transition-colors hover:text-purple-700"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="h-4 w-4 text-slate-300" />
                </Link>
              ))}
            </nav>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-purple-200 bg-purple-50 px-4 py-3 text-sm font-bold text-purple-900"
              >
                <Calendar className="h-4 w-4 text-purple-700" />
                <span>Book a Strategy Call</span>
              </a>
              <Link
                href="#audit-form"
                onClick={closeMenu}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-brand px-4 py-3 text-sm font-bold text-white shadow-md glow-neon"
              >
                <Sparkles className="h-4 w-4" />
                <span>Get Free Audit</span>
              </Link>
              <Link
                href="#audit-form"
                onClick={closeMenu}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-purple-400/80 bg-slate-900 px-4 py-3 text-sm font-bold text-white"
              >
                <Zap className="h-4 w-4" />
                <span>Launch DTC Ads</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Dim the page behind the open menu */}
      <button
        type="button"
        aria-hidden="true"
        tabIndex={-1}
        onClick={closeMenu}
        className={`lg:hidden fixed inset-0 -z-10 bg-slate-950/40 backdrop-blur-[2px] transition-opacity duration-200 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
    </header>
  );
}
