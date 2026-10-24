import { useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

/** Bară de progres la scroll + apariție animată a secțiunilor (site-wide). */
export function ScrollFx() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? h.scrollTop / max : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    const onMove = (e: PointerEvent) => {
      const el = (e.target as HTMLElement | null)?.closest?.<HTMLElement>(".fx-spot");
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  // Pre-render off-screen sections one by one while the phone is idle, so scrolling never pays for it.
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > #top ~ *"));
    if (!sections.length) return;
    const ric: (cb: () => void) => number =
      (window as any).requestIdleCallback?.bind(window) ?? ((cb: () => void) => window.setTimeout(cb, 200));
    const cic: (id: number) => void =
      (window as any).cancelIdleCallback?.bind(window) ?? window.clearTimeout;
    let i = 0;
    let id = 0;
    const step = () => {
      const el = sections[i++];
      if (!el) return;
      el.classList.add("cv-ready");
      id = ric(step);
    };
    const start = () => { id = ric(step); };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => { cic(id); window.removeEventListener("load", start); };
  }, [path]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("main [data-reveal]"),
    );
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("fx-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px -60px 0px" },
    );
    for (const t of targets) {
      const r = t.getBoundingClientRect();
      if (r.top < window.innerHeight) continue; // deja vizibil
      t.classList.add("fx-reveal");
      io.observe(t);
    }
    return () => io.disconnect();
  }, [path]);

  return (
    <>
      <div ref={barRef} aria-hidden className="fx-progress" />
    </>
  );
}

/** Numărătoare animată pentru cifre (ex. 24, 15). */
export function CountUp({ to, duration = 1200 }: { to: number; duration?: number }) {
  const [v, setV] = useState(to);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setV(0);
    const io = new IntersectionObserver(([e]) => {
      if (!e?.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t: number) => {
        const k = Math.min(1, (t - t0) / duration);
        setV(Math.round(to * (1 - Math.pow(1 - k, 3))));
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{v}</span>;
}

/** Bandă derulantă cu servicii. */
export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="fx-marquee" aria-hidden>
      <div className="fx-marquee-track">
        {row.map((t, i) => (
          <span key={i} className="fx-marquee-item">
            <span className="fx-marquee-dot" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Anvelopă decorativă care se rotește. */
export function SpinningTire({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden className={`fx-tire ${className}`}>
      <circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" strokeWidth="14" strokeDasharray="10 6" />
      <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="3" opacity=".6" />
      <circle cx="100" cy="100" r="22" fill="currentColor" opacity=".8" />
      {Array.from({ length: 6 }).map((_, i) => (
        <rect key={i} x="96" y="34" width="8" height="46" rx="4" fill="currentColor" opacity=".7" transform={`rotate(${i * 60} 100 100)`} />
      ))}
    </svg>
  );
}

/** Ora curentă (Timișoara), actualizată live. */
export function LiveClock() {
  const [t, setT] = useState<string>("Deschis");
  useEffect(() => {
    const f = () =>
      setT(new Intl.DateTimeFormat("ro-RO", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Bucharest" }).format(new Date()));
    f();
    const id = setInterval(f, 15000);
    return () => clearInterval(id);
  }, []);
  return <span className="tabular-nums">Ora {t}</span>;
}
