"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RouteRefresh() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";

    const refreshLayout = () => {
      ScrollTrigger.refresh(true);
    };

    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      refreshLayout();
    };

    const onImageLoad = (event) => {
      if (event.target instanceof HTMLImageElement) {
        window.clearTimeout(window.__rebagRefreshTimer);
        window.__rebagRefreshTimer = window.setTimeout(refreshLayout, 80);
      }
    };

    window.requestAnimationFrame(resetScroll);
    window.setTimeout(refreshLayout, 250);
    window.addEventListener("load", refreshLayout);
    document.addEventListener("load", onImageLoad, true);

    return () => {
      window.removeEventListener("load", refreshLayout);
      document.removeEventListener("load", onImageLoad, true);
      window.clearTimeout(window.__rebagRefreshTimer);
    };
  }, [pathname, searchParams]);

  return null;
}
