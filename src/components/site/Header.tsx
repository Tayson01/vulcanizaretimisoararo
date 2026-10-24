import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Phone, Menu, X, MessageCircle, ChevronRight } from "lucide-react";

import { BrandLogo } from "./BrandLogo";

import { ThemeToggle } from "@/components/site/ThemeToggle";
import { Button } from "@/components/ui/button";
import { PHONE, TEL, WA } from "@/lib/site-data";

const nav = [
  { to: "/", label: "Acasă" },
  { to: "/servicii", label: "Servicii" },
  { to: "/zone", label: "Zone deservite" },
  { to: "/intrebari-frecvente", label: "Întrebări" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener("keydown", closeOnEscape);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-[60] border-b transition-colors ${
        scrolled ? "border-border bg-background" : "border-transparent bg-background"
      }`}
    >
      <div className="relative mx-auto grid h-16 max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-4 sm:px-5 lg:flex lg:justify-between">
        <Link to="/" className="absolute inset-y-0 left-1/2 flex -translate-x-1/2 items-center lg:static lg:inset-auto lg:translate-x-0">
          <BrandLogo />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-foreground font-semibold" }}
              className="transition-colors hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="col-start-1 flex items-center lg:hidden">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setOpen((v) => !v)}
            aria-label="Meniu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="flex size-10 items-center justify-center rounded-xl border border-border bg-card active:scale-95"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>

        <div className="col-start-2 flex items-center gap-1.5 sm:gap-2">
          <ThemeToggle className="hidden sm:flex" />

          <a
            href={`tel:${TEL}`}
            className="vm-callfx vm-callcta inline-flex size-10 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-brand px-0 text-sm font-bold text-brand-foreground transition-all hover:brightness-110 active:scale-95 sm:h-11 sm:w-auto sm:px-4"
          >
            <Phone className="size-4 shrink-0" />
                <span className="hidden tabular-nums sm:inline">{PHONE}</span>
            <span className="sr-only">Sună</span>
          </a>
        </div>
      </div>

      {open && (
        <div className="fixed inset-x-0 bottom-0 top-16 z-50 lg:hidden">
          <button
            aria-label="Închide meniul"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
          />
          <nav id="mobile-navigation" aria-label="Navigare pe telefon" className="animate-rise absolute inset-x-0 top-0 max-h-full overflow-y-auto overscroll-contain border-b border-border bg-background px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-3 shadow-float">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "!text-brand !border-brand/40 !bg-brand-soft" }}
                className="mb-2 flex min-h-14 items-center justify-between rounded-2xl border border-border bg-card px-4 text-base font-semibold text-foreground active:scale-[0.99]"
              >
                {n.label}
                <ChevronRight className="size-4 text-muted-foreground" />
              </Link>
            ))}
            <div className="mt-4 grid grid-cols-2 gap-2">
              <a
                href={`tel:${TEL}`}
                className="vm-callfx vm-callcta flex min-h-13 items-center justify-center gap-2 rounded-2xl bg-brand text-sm font-bold text-brand-foreground"
              >
                <Phone className="size-4 shrink-0" />
                <span className="tabular-nums">{PHONE}</span>
              </a>
              <a
                href={WA}
                className="flex min-h-13 items-center justify-center gap-2 rounded-2xl border border-border bg-card text-sm font-semibold"
              >
                <MessageCircle className="size-4 text-brand" /> WhatsApp
              </a>
            </div>
            <div className="mt-3 flex items-center justify-between rounded-2xl border border-border bg-card px-4 py-3">
              <span className="text-sm font-semibold text-muted-foreground">Mod întunecat</span>
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
