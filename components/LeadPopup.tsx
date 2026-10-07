"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { X, Calendar, CheckCircle2 } from "lucide-react";
import InquiryForm from "@/components/InquiryForm";

/*
  Lead popup with the same fields as the Contact form.

  Opens when:
  - the page loads or is refreshed (after FIRST_OPEN_MS)
  - every REOPEN_MS (10 minutes) after it was last closed
  - any "Get Free Audit" style link to #audit-form or #contact is clicked
  - something calls openLeadPopup()
  Automatic opening stops for the rest of the visit once the visitor has
  submitted the form (here or in the Contact section).
*/

const CALENDLY_URL = "https://calendly.com/qsaistudio/quickupp-ai-studio-30-min-strategy-call";
const FIRST_OPEN_MS = 1500; // shortly after every page load / refresh
const REOPEN_MS = 10 * 60 * 1000; // 10 minutes after the popup was last closed
const DONE_KEY = "qs_lead_submitted";
const OPEN_EVENT = "open-lead-popup";

export const openLeadPopup = () => {
  if (typeof window !== "undefined") window.dispatchEvent(new Event(OPEN_EVENT));
};

const safeGet = (k: string) => {
  try {
    return window.sessionStorage.getItem(k);
  } catch {
    return null;
  }
};
const safeSet = (k: string) => {
  try {
    window.sessionStorage.setItem(k, "1");
  } catch {
    /* storage unavailable: popup simply may show again */
  }
};

export default function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const firstShown = useRef(false); // after the first opening, the next auto-open waits 10 minutes

  const show = useCallback(() => {
    lastFocus.current = document.activeElement as HTMLElement | null;
    firstShown.current = true;
    setDone(false);
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    lastFocus.current?.focus?.();
  }, []);

  // CTA links → popup
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      const href = a?.getAttribute("href");
      if (href === "#audit-form" || href === "#contact") {
        e.preventDefault();
        show();
      }
    };
    const onOpen = () => show();
    // capture phase: runs before Next.js <Link> handles the click and scrolls to the anchor
    document.addEventListener("click", onClick, true);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener(OPEN_EVENT, onOpen);
    };
  }, [show]);

  // Auto-open: on every load/refresh, then again 10 minutes after each close
  useEffect(() => {
    if (open) return;
    const delay = firstShown.current ? REOPEN_MS : FIRST_OPEN_MS;
    const t = window.setTimeout(() => {
      if (safeGet(DONE_KEY)) return;
      show();
    }, delay);
    return () => window.clearTimeout(t);
  }, [open, show]);

  // While open: lock page scroll, Escape closes, focus the first field, keep Tab inside
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusables = () =>
      Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) ?? []
      );
    window.setTimeout(() => panelRef.current?.querySelector<HTMLElement>("input, select, textarea")?.focus(), 50);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "Tab") {
        const f = focusables();
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* backdrop */}
      <button
        type="button"
        aria-label="Close"
        tabIndex={-1}
        onClick={close}
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm animate-[fadeIn_200ms_ease-out]"
      />

      {/* panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-popup-title"
        className="relative w-full sm:max-w-2xl max-h-[92dvh] overflow-y-auto overscroll-contain no-scrollbar rounded-t-3xl sm:rounded-3xl border border-purple-100 bg-white shadow-2xl shadow-purple-900/20 animate-[popIn_250ms_cubic-bezier(0.22,1,0.36,1)]"
      >

        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-3 top-4 sm:right-4 sm:top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-purple-100 hover:text-purple-800"
        >
          <X className="h-4 w-4" />
        </button>

        {done ? (
          <div className="p-6 sm:p-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-300">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 id="lead-popup-title" className="font-heading text-2xl font-bold text-slate-900">
              Inquiry Submitted!
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
              Thank you for reaching out. Our DTC creative strategy team has received your project details and will get back to you within 24 hours.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={close}
                className="w-full sm:w-auto sm:px-10 rounded-xl bg-gradient-brand py-3 text-sm font-bold text-white shadow-md glow-neon"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div className="p-4 xs:p-5 sm:p-7">
            <div className="pr-10 mb-5">
              <h2 id="lead-popup-title" className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-slate-900 !leading-tight">
                Get Free <span className="font-serif italic font-bold text-gradient-brand inline-block pr-1">Creative Audit</span>
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Send us your project details, or book a free 30-minute strategy call with our creative team. Whichever suits you.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-purple-50 px-3 py-1.5 text-xs font-bold text-purple-800 hover:bg-purple-100"
              >
                <Calendar className="h-3.5 w-3.5" />
                <span>Book a Strategy Call</span>
              </a>
            </div>

            <InquiryForm
              layout="popup"
              onSuccess={() => {
                safeSet(DONE_KEY);
                setDone(true);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
