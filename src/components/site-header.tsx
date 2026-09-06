"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { contactHref } from "@/lib/site";

// Absolute so the same header also works from the 404 page.
const links = [
  { label: "Projects", href: "/#projects" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: contactHref },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const navigationRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    setOpen(false);
    toggleRef.current?.focus({ preventScroll: true });
  };

  useEffect(() => {
    const breakpoint = window.matchMedia("(min-width: 768px)");
    if (navigationRef.current)
      navigationRef.current.inert = !breakpoint.matches && !open;
    const closeMenu = () => {
      setOpen(false);
      if (navigationRef.current)
        navigationRef.current.inert = !breakpoint.matches;
    };
    breakpoint.addEventListener("change", closeMenu);
    return () => breakpoint.removeEventListener("change", closeMenu);
  }, [open]);

  // Keeps the travelling desktop header legible over the dark sections.
  useEffect(() => {
    const header = headerRef.current;
    const darkSections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-header-dark]"),
    );
    if (!header || darkSections.length === 0) return;

    const update = () => {
      const probe = header.getBoundingClientRect().bottom - 10;
      const onDark = darkSections.some((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= probe && rect.bottom >= probe;
      });
      header.dataset.theme = onDark ? "dark" : "light";
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    // Every page marks its own content regions, so the overlay works site-wide.
    const regions = Array.from(
      document.querySelectorAll<HTMLElement>("[data-menu-content]"),
    );
    const previousOverflow = document.documentElement.style.overflow;
    const previousInert = regions.map((region) => region.inert);
    document.documentElement.style.overflow = "hidden";
    regions.forEach((region) => {
      region.inert = true;
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (event.key === "Tab") {
        const controls =
          headerRef.current?.querySelectorAll<HTMLElement>("a[href], button");
        const first = controls?.[0];
        const last = controls?.[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !headerRef.current?.contains(event.target)
      )
        setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.documentElement.style.overflow = previousOverflow;
      regions.forEach((region, index) => {
        region.inert = previousInert[index];
      });
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <header className="header" ref={headerRef}>
      <Link
        className="logo"
        href="/#home"
        aria-label="Hammad, home"
        onClick={() => setOpen(false)}
      >
        <span className="logo-mark" aria-hidden="true">
          <i />
          <i />
        </span>
        Hammad<span className="logo-dot">.</span>
      </Link>
      <button
        ref={toggleRef}
        className="menu-toggle"
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="navigation"
        onClick={() => (open ? closeMenu() : setOpen(true))}
      >
        <span />
        <span />
        <span />
      </button>
      <nav
        ref={navigationRef}
        className={`navigation${open ? " is-open" : ""}`}
        id="navigation"
        aria-label="Main navigation"
      >
        {links.map(({ label, href }) => (
          <Link key={label} href={href} onClick={closeMenu}>
            {label}
          </Link>
        ))}
        <Link
          className="button button-dark header-cta"
          href={contactHref}
          onClick={closeMenu}
        >
          Let&apos;s Talk
        </Link>
      </nav>
    </header>
  );
}
