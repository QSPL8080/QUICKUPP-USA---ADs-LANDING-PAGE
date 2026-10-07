import React from "react";
import { type Photo, unsplash, unsplashSet } from "@/lib/photos";

/* Responsive, lazy-loaded stock photo that fills its parent (parent sets size) */
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
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={unsplash(photo.id, 640)}
      srcSet={unsplashSet(photo.id)}
      sizes={sizes}
      alt={photo.alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={`block h-full w-full object-cover text-transparent ${className}`}
      style={photo.position ? { objectPosition: photo.position } : undefined}
    />
  );
}
