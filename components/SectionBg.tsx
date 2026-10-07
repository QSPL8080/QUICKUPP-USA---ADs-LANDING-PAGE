import React from "react";
import { type Photo, unsplash, unsplashSet } from "@/lib/photos";

/*
  Semi-transparent full-bleed photo behind a section.
  The parent <section> needs `relative isolate` so this sits behind its content.
  The photo stays visible across the section and only fades at the top and
  bottom edges so neighbouring sections blend into each other.
*/
const EDGE_FADE = "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)";

export default function SectionBg({
  photo,
  opacity = 0.25,
  dark = false,
}: {
  photo: Photo;
  opacity?: number;
  dark?: boolean;
  /** @deprecated kept for compatibility; the photo now covers the whole section */
  fade?: string;
}) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={unsplash(photo.id, 1600, 65)}
        srcSet={unsplashSet(photo.id, [640, 960, 1280, 1600, 2200])}
        sizes="100vw"
        alt=""
        loading="lazy"
        decoding="async"
        className={`h-full w-full object-cover ${dark ? "mix-blend-luminosity" : ""}`}
        style={{ opacity, objectPosition: photo.position, maskImage: EDGE_FADE, WebkitMaskImage: EDGE_FADE }}
      />
    </div>
  );
}
