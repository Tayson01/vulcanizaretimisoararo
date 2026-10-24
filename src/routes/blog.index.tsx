import { useMemo, useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Phone, Search } from "lucide-react";

import { Btn, SectionLabel } from "@/components/site/ui";
import { ServedAreas } from "@/components/site/ServedAreas";
import { posts, postCategory, type BlogPost } from "@/lib/blog-data";
import { zones } from "@/lib/zones-data";
import { PHONE, TEL } from "@/lib/site-data";

const SITE = "https://vulcanizaretimisoara.ro";
const TITLE = "Blog vulcanizare Timișoara — ghiduri locale pentru pene și anvelope";
const DESC =
  "Ghiduri practice pentru pene și anvelope în Timișoara, Dumbrăvița, Giroc, Ghiroda, Moșnița, Săcălaz, pe A1 și în tot județul Timiș. Sfaturi de la Vulcanizare Non Stop Timișoara.";

const zoneBySlug = Object.fromEntries(zones.map((z) => [z.slug, z]));
const fmt = (d: string) => new Date(d).toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" });
const CATS = ["Toate", "Ghid local", "Urgență", "Sfaturi"] as const;

export const Route = createFileRoute("/blog/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE}/blog` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/blog` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Blog",
              "@id": `${SITE}/blog`,
              name: "Blog Vulcanizare Non Stop Timișoara",
              description: DESC,
              inLanguage: "ro-RO",
              publisher: { "@type": "Organization", name: "Vulcanizare Non Stop Timișoara", url: `${SITE}/` },
              blogPost: posts.map((p) => ({
                "@type": "BlogPosting",
                headline: p.title,
                url: `${SITE}/blog/${p.slug}`,
                datePublished: p.date,
                ...(p.area && zoneBySlug[p.area] ? { contentLocation: { "@type": "Place", name: `${zoneBySlug[p.area]!.short}, județul Timiș` } } : {}),
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Acasă", item: `${SITE}/` },
                { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: BlogIndex,
});

function PostCard({ p }: { p: BlogPost }) {
  const z = p.area ? zoneBySlug[p.area] : undefined;
  return (
    <Link to="/blog/$slug" params={{ slug: p.slug }} className="group flex flex-col rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-card">
      <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold">
        <span className="rounded-full bg-brand/10 px-2.5 py-1 uppercase tracking-wider text-brand">{postCategory(p)}</span>
        {z && <span className="inline-flex items-center gap-1 text-muted-foreground"><MapPin className="size-3.5 text-brand" />{z.short}</span>}
      </div>
      <h3 className="mt-3 font-bold leading-snug">{p.title}</h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.desc}</p>
      <div className="mt-4 flex items-center justify-between text-xs">
        <time dateTime={p.date} className="text-muted-foreground">{fmt(p.date)}</time>
        <span className="inline-flex items-center gap-1 font-semibold text-brand">
          Citește <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

function BlogIndex() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("Toate");
  const [area, setArea] = useState<string | null>(null);
  const [q, setQ] = useState("");
  const areas = useMemo(() => zones.filter((z) => posts.some((p) => p.area === z.slug)), []);
  const list = posts.filter(
    (p) =>
      (cat === "Toate" || postCategory(p) === cat) &&
      (!area || p.area === area) &&
      (!q || `${p.title} ${p.desc} ${p.keyword}`.toLowerCase().includes(q.toLowerCase())),
  );
  const [featured, ...rest] = list;
  const filtering = cat !== "Toate" || area || q;

  return (
    <main className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
      <nav aria-label="Navigare" className="text-xs text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Acasă</Link> / <span className="text-foreground">Blog</span>
      </nav>

      <header className="mt-6 max-w-3xl">
        <SectionLabel>Blog · Timișoara și județul Timiș</SectionLabel>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Ghiduri pentru pene și anvelope, pe localități</h1>
        <p className="mt-4 text-muted-foreground">
          Sfaturi scrise de echipa Vulcanizare Non Stop Timișoara pentru șoferii din oraș, din comunele din jur și de pe A1: ce faci la pană, unde oprești în siguranță și ce putem repara la tine.
        </p>
        <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-muted-foreground">
          <span className="rounded-full border border-border px-3 py-1.5">{posts.length} articole</span>
          <span className="rounded-full border border-border px-3 py-1.5">{areas.length} localități cu ghid dedicat</span>
          <span className="rounded-full border border-border px-3 py-1.5">Actualizat {fmt(posts[0]?.date ?? "")}</span>
        </div>
      </header>

      {/* Filtre */}
      <div className="mt-10 space-y-4">
        <label className="relative block max-w-md">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Caută: pană A1, Giroc, iarnă…" aria-label="Caută în blog" className="h-12 w-full rounded-2xl border border-border bg-card pl-11 pr-4 text-sm outline-none focus:border-brand/50" />
        </label>
        <div className="flex flex-wrap gap-2">
          {CATS.map((c) => (
            <button key={c} type="button" onClick={() => setCat(c)} className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${cat === c ? "bg-foreground text-background" : "border border-border bg-card text-muted-foreground hover:text-foreground"}`}>{c}</button>
          ))}
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          <button type="button" onClick={() => setArea(null)} className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-bold ${!area ? "bg-brand text-brand-foreground" : "border border-border bg-card text-muted-foreground"}`}>Toate zonele</button>
          {areas.map((z) => (
            <button key={z.slug} type="button" onClick={() => setArea(area === z.slug ? null : z.slug)} className={`inline-flex shrink-0 items-center gap-1 rounded-full px-3 py-1.5 text-xs font-bold ${area === z.slug ? "bg-brand text-brand-foreground" : "border border-border bg-card text-muted-foreground hover:text-foreground"}`}>
              <MapPin className="size-3" />{z.short}
            </button>
          ))}
        </div>
      </div>

      {list.length === 0 ? (
        <p className="mt-10 rounded-3xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">Niciun articol pentru căutarea asta. Sună-ne direct la {PHONE}.</p>
      ) : (
        <>
          {featured && !filtering && (
            <Link to="/blog/$slug" params={{ slug: featured.slug }} className="group mt-10 block rounded-[2rem] border border-border bg-card p-7 shadow-card transition-all hover:border-brand/30 sm:p-10">
              <span className="text-[11px] font-black uppercase tracking-widest text-brand">Cel mai nou · {postCategory(featured)}</span>
              <h2 className="mt-3 max-w-3xl text-2xl font-extrabold leading-tight sm:text-3xl">{featured.title}</h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">{featured.desc}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-brand">Citește articolul <ArrowUpRight className="size-4" /></span>
            </Link>
          )}
          <h2 className="sr-only">Toate articolele</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(filtering ? list : rest).map((p) => <PostCard key={p.slug} p={p} />)}
          </div>
        </>
      )}

      {/* Ghiduri pe localități */}
      <section className="mt-16">
        <SectionLabel>Ghiduri locale</SectionLabel>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Vulcanizare mobilă pe localități</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">Fiecare localitate are colecția ei de articole, cu drumurile principale, timpul estimat de sosire și întrebări frecvente.</p>
        <div className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {zones.map((z) => {
            const n = posts.filter((p) => p.area === z.slug || p.links.some((l) => l.to.endsWith(z.slug))).length;
            return (
              <Link key={z.slug} to="/blog/zona/$slug" params={{ slug: z.slug }} className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-card px-4 py-3 transition-colors hover:border-brand/40">
                <span className="min-w-0">
                  <span className="block truncate text-sm font-bold">Blog vulcanizare {z.short}</span>
                  <span className="block text-xs text-muted-foreground">{z.etaMinutes}{n ? ` · ${n} ${n === 1 ? "articol" : "articole"}` : ""}</span>
                </span>
                <ArrowUpRight className="size-4 shrink-0 text-brand transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            );
          })}
        </div>
      </section>

      <div className="mt-14 flex flex-col items-start justify-between gap-4 rounded-3xl border border-border bg-card p-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-bold">Ai pană acum și nu vrei să citești?</p>
          <p className="text-sm text-muted-foreground">Non-stop, în Timișoara și tot județul Timiș.</p>
        </div>
        <Btn href={`tel:${TEL}`}><Phone className="size-4" /> <span className="tabular-nums">{PHONE}</span></Btn>
      </div>

      <ServedAreas title="Unde venim: localități deservite" />
    </main>
  );
}
