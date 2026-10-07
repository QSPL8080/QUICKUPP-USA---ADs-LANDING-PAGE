"use client";

import React, { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────────────────────
   Fires once when the element scrolls into view.
   ───────────────────────────────────────────────────────────── */
function useInViewOnce<T extends HTMLElement>(threshold = 0.35) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [inView, threshold]);

  return { ref, inView };
}

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

// Fast start, gentle landing — reads like a real counter settling on its value
const easeOut = (t: number) => 1 - Math.pow(1 - t, 2.2);

/* ─────────────────────────────────────────────────────────────
   <CountUp to={60} suffix="s" />
   Counts 0 → `to` when visible. Width is reserved with an
   invisible copy of the final value so the card never jumps.
   ───────────────────────────────────────────────────────────── */
export function CountUp({
  to,
  from = 0,
  duration = 2200,
  delay = 0,
  prefix = "",
  suffix = "",
  className = "",
}: {
  to: number;
  from?: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const { ref, inView } = useInViewOnce<HTMLSpanElement>();
  const [value, setValue] = useState(from);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion()) {
      setValue(to);
      setDone(true);
      return;
    }
    let raf = 0;
    let start = 0;
    const timer = window.setTimeout(() => {
      const tick = (now: number) => {
        if (!start) start = now;
        const t = Math.min(1, (now - start) / duration);
        // Small numbers count in smooth paced steps across the duration;
        // larger numbers ease out and settle gently on the final value
        const eased = Math.abs(to - from) <= 12 ? Math.pow(t, 0.85) : easeOut(t);
        setValue(Math.round(from + (to - from) * eased));
        if (t < 1) raf = requestAnimationFrame(tick);
        else setDone(true);
      };
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [inView, from, to, duration, delay]);

  const finalText = `${prefix}${to}${suffix}`;

  return (
    <span ref={ref} className="relative inline-grid tabular-nums" aria-label={finalText}>
      {/* reserves the final width */}
      <span aria-hidden="true" className={`invisible col-start-1 row-start-1 ${className}`}>
        {finalText}
      </span>
      <span
        aria-hidden="true"
        className={`col-start-1 row-start-1 transition-transform duration-500 ease-out ${
          done ? "scale-100" : inView ? "scale-[0.97]" : "scale-100"
        } ${className}`}
      >
        {prefix}
        {value}
        {suffix}
      </span>
    </span>
  );
}

/* ─────────────────────────────────────────────────────────────
   <RollText text="Multiple" />
   For word values: each letter rolls up into place, one after
   another, timed to finish alongside the number counters.
   ───────────────────────────────────────────────────────────── */
export function RollText({
  text,
  delay = 0,
  stagger = 90,
  className = "",
}: {
  text: string;
  delay?: number;
  stagger?: number;
  className?: string;
}) {
  const { ref, inView } = useInViewOnce<HTMLSpanElement>();
  const [reduced, setReduced] = useState(false);

  useEffect(() => setReduced(prefersReducedMotion()), []);

  return (
    <span ref={ref} className={`inline-flex overflow-hidden align-bottom ${className}`} aria-label={text}>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="inline-block will-change-transform"
          style={{
            transform: inView || reduced ? "translateY(0)" : "translateY(105%)",
            opacity: inView || reduced ? 1 : 0,
            transition: reduced
              ? "none"
              : `transform 700ms cubic-bezier(0.22, 1, 0.36, 1) ${delay + i * stagger}ms, opacity 500ms ease-out ${
                  delay + i * stagger
                }ms`,
            whiteSpace: "pre",
          }}
        >
          {ch}
        </span>
      ))}
    </span>
  );
}
