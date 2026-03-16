"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Me", href: "#meRoger" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        aria-label="Toggle theme"
        className="rounded-full"
      >
        <span className="h-4 w-4" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="rounded-full"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}

export function Navigation() {
  const [activeSection, setActiveSection] = useState("meRoger");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Sync with URL hash on mount (and support direct links).
    const initialHash = window.location.hash.replace("#", "");
    if (initialHash) setActiveSection(initialHash);

    const TOP_OFFSET = 120;
    let raf = 0;

    const getSections = () =>
      navItems
        .map((item) => document.getElementById(item.href.slice(1)))
        .filter(Boolean) as HTMLElement[];

    const updateActiveSection = () => {
      raf = 0;
      const scrollY = window.scrollY;

      if (scrollY < 10) {
        setActiveSection("meRoger");
        return;
      }

      const sections = getSections();
      if (!sections.length) return;

      let currentId = sections[0].id;

      // Fallback: keep "Me" active until the next section reaches the top offset.
      const meSection = document.getElementById("meRoger");
      const aboutSection = document.getElementById("about");
      if (meSection && aboutSection) {
        const aboutTop = aboutSection.getBoundingClientRect().top + scrollY;
        if (scrollY + TOP_OFFSET < aboutTop) {
          setActiveSection("meRoger");
          return;
        }
      }

      for (const section of sections) {
        const top = section.getBoundingClientRect().top + scrollY;
        if (top <= scrollY + TOP_OFFSET) currentId = section.id;
      }

      setActiveSection(currentId);
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    // Ensure sections rendered after hydration are picked up
    const t1 = window.setTimeout(updateActiveSection, 50);
    const t2 = window.setTimeout(updateActiveSection, 250);
    const onHashChange = () => {
      const id = window.location.hash.replace("#", "");
      if (id) setActiveSection(id);
      window.requestAnimationFrame(updateActiveSection);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("hashchange", onHashChange);

    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  const onNavClick = (href: string) => {
    setActiveSection(href.slice(1));
    window.requestAnimationFrame(() =>
      window.dispatchEvent(new Event("scroll")),
    );
  };

  return (
    <>
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 lg:hidden bg-background/80 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between px-5 py-4 gap-3">
          <span className="text-sm font-medium text-foreground">RAR</span>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="px-5 pb-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  onNavClick(item.href);
                  setMobileMenuOpen(false);
                }}
                className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.href.slice(1)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex flex-col items-start gap-4 fixed left-8 top-1/2 -translate-y-1/2 z-50">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => onNavClick(item.href)}
            className="group flex items-center gap-3"
          >
            <span
              className={`h-px transition-all duration-300 ${
                activeSection === item.href.slice(1)
                  ? "w-16 bg-primary"
                  : "w-8 bg-muted-foreground/50 group-hover:w-12 group-hover:bg-muted-foreground"
              }`}
            />
            <span
              className={`text-xs font-medium uppercase tracking-widest transition-colors ${
                activeSection === item.href.slice(1)
                  ? "text-primary"
                  : "text-muted-foreground group-hover:text-foreground"
              }`}
            >
              {item.label}
            </span>
          </Link>
        ))}
        <div className="mt-6 inline-flex w-fit self-start p-2 rounded-full bg-background/80 border border-border/60 shadow-sm hover:border-primary/60 transition-colors">
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
}
