"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Marks `[data-reveal]` elements as revealed once they reach the viewport.
 * The transition itself is CSS; this component only flips an attribute.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const pending = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-reveal]:not([data-revealed])",
      ),
    );
    if (pending.length === 0) return;

    const reveal = (elements: HTMLElement[]) =>
      elements.forEach((element) => element.setAttribute("data-revealed", ""));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      reveal(pending);
      return;
    }

    if (!("IntersectionObserver" in window)) {
      reveal(pending);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          element.setAttribute("data-revealed", "");
          observer.unobserve(element);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.06,
      },
    );

    // Waiting for the next frame guarantees the hidden state is painted first,
    // so above-the-fold reveal elements animate instead of appearing instantly.
    const frame = window.requestAnimationFrame(() => {
      pending.forEach((element) => observer.observe(element));
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
