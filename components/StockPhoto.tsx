import React from "react";
import { type Photo, unsplash, unsplashSet } from "@/lib/photos";

/*
  Responsive, lazy-loaded stock photo that fills its parent (parent sets size).
  photo.fit === "contain" shows the whole photo uncropped, centred over a
  blurred copy of itself, so portrait photos never get cut in wide frames.
*/
export default function StockPhoto({
  photo,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  className = "",
  priority = false,
}: {
  photo: Photo;
  sizes?: string;
  className?: string;
  priority?: boolean;
}) {
  const loading = priority ? "eager" : "lazy";

  if (photo.fit === "contain") {
    return (
      <span className={`relative block h-full w-full overflow-hidden ${className}`}>
        {/* blurred fill behind */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={unsplash(photo.id, 320, 40)}
          alt=""
          aria-hidden="true"
          loading={loading}
          decoding="async"
          className="absolute inset-0 h-full w-full scale-125 object-cover blur-2xl opacity-90 text-transparent"
        />
        {/* the full photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={unsplash(photo.id, 640)}
          srcSet={unsplashSet(photo.id)}
          sizes={sizes}
          alt={photo.alt}
          loading={loading}
          decoding="async"
          className="relative block h-full w-full object-contain text-transparent"
        />
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={unsplash(photo.id, 640)}
      srcSet={unsplashSet(photo.id)}
      sizes={sizes}
      alt={photo.alt}
      loading={loading}
      decoding="async"
      className={`block h-full w-full object-cover text-transparent ${className}`}
      style={photo.position ? { objectPosition: photo.position } : undefined}
    />
  );
}
