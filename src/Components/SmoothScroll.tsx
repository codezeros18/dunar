"use client"; // If using Next.js

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 0.5, // 🚀 Makes scrolling much faster
      lerp: 0.09, // ✨ Keeps it smooth (lower is smoother)
      touchMultiplier: 3, // 📱 Increases speed on mobile
    });

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return <div ref={scrollRef} data-scroll-container>{children}</div>;
}
