"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Marks `[data-reveal]` elements as revealed once they reach the viewport.
 * The transition itself is CSS; this only flips an attribute. A plain scroll
 * listener is used rather than IntersectionObserver so the reveal still runs
 * in embedded//preview browsers where observer callbacks are throttled away.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    let pending = Array.from(
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

    const stop = () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };

    function check() {
      // Read every rect first, then write, so nothing thrashes layout.
      const limit = window.innerHeight * 0.92;
      // Anything at or past the trigger line counts, so jumping down the page
      // (anchor links, fast scrolling) never leaves a section stuck hidden.
      const ready = pending.filter(
        (element) => element.getBoundingClientRect().top < limit,
      );
      if (ready.length > 0) {
        reveal(ready);
        pending = pending.filter(
          (element) => !element.hasAttribute("data-revealed"),
        );
      }
      if (pending.length === 0) stop();
    }

    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    check();

    return stop;
  }, [pathname]);

  return null;
}
