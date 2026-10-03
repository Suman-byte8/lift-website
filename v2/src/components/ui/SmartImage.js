"use client";
import { useState } from "react";
import Image from "next/image";
import { images } from "@/data/images";
import { cn } from "@/lib/cn";

/**
 * next/image wrapper that accepts an image key from data/images.js (or {src, alt}).
 * If a remote image fails, it degrades to a soft architectural gradient instead of a broken icon.
 */
export default function SmartImage({ image, alt, className, sizes = "100vw", priority, fill = true, ...rest }) {
  const data = typeof image === "string" ? images[image] : image;
  const [failed, setFailed] = useState(false);

  if (!data || failed) {
    return (
      <div
        role="img"
        aria-label={alt || data?.alt || "Image placeholder"}
        className={cn("absolute inset-0 bg-[radial-gradient(120%_80%_at_20%_10%,#F3EBDD_0%,#EEF1ED_45%,#E6EAEC_100%)]", className)}
      >
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent_0_79px,rgba(184,155,106,0.12)_79px_80px)]" />
      </div>
    );
  }
  return (
    <Image
      src={data.src}
      alt={alt ?? data.alt}
      fill={fill}
      sizes={sizes}
      priority={priority}
      onError={() => setFailed(true)}
      className={cn("object-cover", className)}
      {...rest}
    />
  );
}
