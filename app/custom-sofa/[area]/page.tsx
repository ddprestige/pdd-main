import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  FaWhatsapp,
  FaStar,
  FaRegCircleCheck,
  FaTruckFast,
  FaLocationDot,
  FaShieldHalved,
} from "react-icons/fa6";

import { areaDataMap, allAreaSlugs } from "../../lib/areaData";
import { waLink, PHONE_E164 } from "../../lib/constants";

// ---------------------------------------------------------------------------
// STATIC PARAMS — tells Next.js which slugs to pre-render at build time
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return allAreaSlugs.map((slug) => ({ area: slug }));
}

// ---------------------------------------------------------------------------
// DYNAMIC METADATA — unique title + description per area
// ---------------------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>;
}): Promise<Metadata> {
  const { area } = await params;
  const data = areaDataMap[area];
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `https://www.prestigedreamdecor.in/custom-sofa/${data.slug}`,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://www.prestigedreamdecor.in/custom-sofa/${data.slug}`,
      siteName: "Prestige Dream Decor",
      locale: "en_IN",
      type: "website",
    },
  };
}

// ---------------------------------------------------------------------------
// SHARED CATALOG PRODUCTS — same cards shown on every area page
// ---------------------------------------------------------------------------

const sofaProducts = [
  {
    id: "l1",
    name: "Signature L-Shape Sofa",
    description: "Built to your exact dimensions. Choose from 40+ fabrics. Free delivery & installation.",
    imageUrl: "/brownlsofa.jpeg",
    startingPrice: "₹55,999",
    deliveryDays: "7–12 days",
  },
  {
    id: "3s1",
    name: "City Comfort 3-Seater",
    description: "Wide seating, deep cushions, your choice of fabric. Built and delivered across Bangalore.",
    imageUrl: "/three-seater.webp",
    startingPrice: "₹34,999",
    deliveryDays: "7–10 days",
  },
  {
    id: "c2",
    name: "Designer Custom Sofa",
    description: "Fully bespoke — your dimensions, your fabric, your design. Built to order in our workshop.",
    imageUrl: "/customchocolate.webp",
    startingPrice: "₹34,999",
    deliveryDays: "7–15 days",
  },
  {
    id: "scb2",
    name: "Premium Sofa Cum Bed",
    description: "Smooth fold-out mechanism, comfortable mattress, premium upholstery.",
    imageUrl: "/redsofacumbed.webp",
    startingPrice: "₹44,999",
    deliveryDays: "10–15 days",
  },
  {
    id: "l3",
    name: "Compact L-Shape",
    description: "Space-smart design for 2BHK and smaller living rooms. Custom dimensions available.",
    imageUrl: "/greyLshape.jpeg",
    startingPrice: "₹41,999",
    deliveryDays: "7–12 days",
  },
  {
    id: "c3",
    name: "Modular Custom Set",
    description: "Reconfigurable modular pieces built to your exact room layout.",
    imageUrl: "/CustomPremiumsofa.jpeg",
    startingPrice: "₹59,999",
    deliveryDays: "10–15 days",
  },
];

// ---------------------------------------------------------------------------
// SUB-COMPONENTS
// ---------------------------------------------------------------------------

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar
          key={i}
          className={i < rating ? "text-amber-400" : "text-slate-200"}
          style={{ fontSize: "11px" }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function WhatsAppBtn({
  label,
  message,
  className = "",
}: {
  label: string;
  message: string;
  className?: string;
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm",
        "hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 transition-colors",
        className,
      ].join(" ")}
    >
      <FaWhatsapp aria-hidden="true" className="text-base" />
      {label}
    </a>
  );
}

// ---------------------------------------------------------------------------
// PAGE
// ---------------------------------------------------------------------------

export default async function AreaPage({ params }: { params: Promise<{ area: string }> }) {
  const { area } = await params;
  const data = areaDataMap[area];

  // Return 404 for unknown slugs
  if (!data) notFound();

  const waHeroMessage = `Hi Prestige Dream Decor, I'm looking for a custom sofa delivered to ${data.name}, Bangalore. Please share options, price range and delivery timeline.`;

  // LocalBusiness + BreadcrumbList schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `https://www.prestigedreamdecor.in/custom-sofa/${data.slug}`,
        name: "Prestige Dream Decor",
        description: data.metaDescription,
        url: `https://www.prestigedreamdecor.in/custom-sofa/${data.slug}`,
        telephone: PHONE_E164,
        areaServed: {
          "@type": "Place",
          name: `${data.name}, Bangalore`,
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Vidyaranyapura",
          addressRegion: "Karnataka",
          addressCountry: "IN",
        },
        priceRange: "₹₹",
        openingHours: "Mo-Su 10:30-20:30",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.prestigedreamdecor.in" },
          { "@type": "ListItem", position: 2, name: "Custom Sofas", item: "https://www.prestigedreamdecor.in/custom-sofas" },
          { "@type": "ListItem", position: 3, name: `Custom Sofas ${data.name}`, item: `https://www.prestigedreamdecor.in/custom-sofa/${data.slug}` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: data.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

  return (
    <div className="bg-white text-slate-900">

      {/* ── SCHEMA ──────────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* ── STICKY MOBILE BAR ───────────────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white shadow-2xl sm:hidden">
        <div className="px-4 pt-2 pb-0.5 text-center">
          <p className="text-[10px] font-medium text-slate-500">
            Custom sofas from <span className="font-semibold text-emerald-700">₹34,999</span> · Free delivery to {data.name}
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 pb-3 pt-1.5">
          <a
            href={waLink(waHeroMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-sm font-bold text-white"
          >
            <FaWhatsapp aria-hidden="true" className="text-base" />
            Get Free Quote
          </a>
          <a
            href={`tel:${PHONE_E164}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-emerald-600 py-3 text-sm font-bold text-emerald-700"
          >
            📞 Call Now
          </a>
        </div>
      </div>

      {/* ── BREADCRUMB ──────────────────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-3">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
            <li><Link href="/" className="hover:text-emerald-700 transition-colors">Home</Link></li>
            <li aria-hidden="true">›</li>
            <li><Link href="/custom-sofas" className="hover:text-emerald-700 transition-colors">Custom Sofas</Link></li>
            <li aria-hidden="true">›</li>
            <li className="font-medium text-slate-800" aria-current="page">
              {data.name}
            </li>
          </ol>
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-slate-950"
        aria-labelledby="area-hero-heading"
        style={{ minHeight: "72vh" }}
      >
        <div className="absolute inset-0">
          <Image
            src="/brownlsofa.jpeg"
            alt={`Custom sofa delivered to ${data.name}, Bangalore`}
            className="object-cover object-center opacity-35"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/60" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-950 to-transparent" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pt-20 pb-20 sm:pt-28 lg:flex-row lg:items-center lg:gap-16">

          {/* LEFT */}
          <div className="flex-1 max-w-xl">

            {/* Location pill */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5">
              <FaLocationDot className="text-emerald-400" style={{ fontSize: "11px" }} aria-hidden="true" />
              <span className="text-xs font-semibold text-emerald-300">
                Delivering to {data.name} · {data.region}
              </span>
            </div>

            <h1
              id="area-hero-heading"
              className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-[52px]"
            >
              {data.headline}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              {data.subheadline}
            </p>

            <p className="mt-3 text-sm font-semibold text-emerald-400">
              Custom sofas from ₹34,999 · Delivered in 7–15 days · Free installation
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={waLink(waHeroMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-emerald-500 px-7 py-4 text-base font-bold text-white shadow-lg shadow-emerald-900/40 hover:bg-emerald-400 transition-colors"
              >
                <FaWhatsapp aria-hidden="true" className="text-xl" />
                Get Free Quote on WhatsApp
              </a>
              <a
                href={`tel:${PHONE_E164}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/8 px-7 py-4 text-base font-semibold text-white hover:bg-white/15 transition-colors"
              >
                📞 Call Now
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-slate-400">
              {["Reply in under 30 min", "Free delivery & installation", "No hidden costs"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <FaRegCircleCheck className="text-emerald-400 shrink-0" aria-hidden="true" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT: 3-step card */}
          <div className="w-full max-w-[320px] shrink-0 lg:ml-auto">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
              <div className="bg-emerald-600 px-5 py-4">
                <p className="text-sm font-bold text-white">⚡ Get your {data.name} price in 3 steps</p>
                <p className="mt-0.5 text-xs text-emerald-100">No commitment. Real answers — not bots.</p>
              </div>
              <div className="space-y-2.5 px-5 py-5">
                {[
                  { num: "1", text: "Send your room size & a photo" },
                  { num: "2", text: "Pick fabric, colour & comfort" },
                  { num: "3", text: "Get exact price + delivery date" },
                ].map((step) => (
                  <div key={step.num} className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/8">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-emerald-500 text-[11px] font-black text-white">
                      {step.num}
                    </span>
                    <span className="text-xs font-medium text-slate-200">{step.text}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/8 bg-slate-950/60 px-5 py-4">
                <a
                  href={waLink(waHeroMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3.5 text-sm font-bold text-white hover:bg-emerald-400 transition-colors"
                >
                  <FaWhatsapp aria-hidden="true" className="text-base" />
                  Start on WhatsApp — It&apos;s Free
                </a>
                <p className="mt-2.5 text-center text-[10px] text-slate-500">🔒 You talk to our team directly. No bots.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── STATS BAR ───────────────────────────────────────────────────── */}
      <section className="border-b border-slate-100" aria-label="Key facts">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 divide-x divide-y divide-slate-100 sm:grid-cols-4 sm:divide-y-0">
            {[
              { value: "₹34,999", label: "Starting price" },
              { value: "7–15 days", label: "Delivery timeline" },
              { value: "Free", label: "Delivery & installation" },
              { value: "40+", label: "Fabric choices" },
            ].map((s) => (
              <div key={s.label} className="py-6 text-center">
                <p className="text-xl font-extrabold text-slate-900 sm:text-2xl">{s.value}</p>
                <p className="mt-0.5 text-xs text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO COPY ──────────────────────────────────────────────────── */}
      <section className="bg-white" aria-labelledby="intro-heading">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-600">
            Custom furniture · {data.name} · Bangalore
          </p>
          <h2 id="intro-heading" className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Why {data.name} homeowners choose custom over catalogue
          </h2>
          <div className="mt-6 space-y-5">
            {data.introParagraphs.map((para, i) => (
              <p key={i} className="text-sm leading-[1.85] text-slate-600">
                {para}
              </p>
            ))}
          </div>
          <div className="mt-8">
            <WhatsAppBtn
              label={`Get a quote for ${data.name}`}
              message={waHeroMessage}
            />
          </div>
        </div>
      </section>

      {/* ── SOFA CATALOG ────────────────────────────────────────────────── */}
      <section className="border-t border-slate-100 bg-slate-50" aria-labelledby="catalog-heading">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-600">
            All delivered free to {data.name}
          </div>
          <h2 id="catalog-heading" className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Popular sofas for {data.name} homes
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Tap <strong className="text-slate-700">Get Quote</strong> to get the exact price for your room size and fabric choice.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sofaProducts.map((product) => (
              <div
                key={product.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    className="object-cover transition-transform duration-300 hover:scale-[1.02]"
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-sm font-semibold text-slate-900">{product.name}</h3>
                  <p className="mt-1 line-clamp-2 text-xs text-slate-500">{product.description}</p>
                  <div className="mt-2.5 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                      From {product.startingPrice}
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600">
                      Ready in {product.deliveryDays}
                    </span>
                  </div>
                  <a
                    href={waLink(
                      `Hi Prestige Dream Decor, I'm interested in the ${product.name} delivered to ${data.name}, Bangalore. Please share price, fabric options and delivery timeline.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto pt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500 transition-colors"
                  >
                    <FaWhatsapp aria-hidden="true" className="text-sm" />
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/custom-sofas"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:border-emerald-300 hover:text-emerald-700 transition-colors"
            >
              See our full range of sofas →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CUSTOM SECTION ──────────────────────────────────────────── */}
      <section className="border-t border-slate-100 bg-white" aria-labelledby="why-heading">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-600">
            Why choose Prestige Dream Decor
          </p>
          <h2 id="why-heading" className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Built for {data.name} homes specifically
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {data.whyCustomPoints.map((point) => (
              <div
                key={point.title}
                className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm"
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <FaRegCircleCheck aria-hidden="true" />
                </div>
                <p className="text-sm font-semibold text-slate-900">{point.title}</p>
                <p className="text-xs leading-relaxed text-slate-500">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────────────── */}
      <section className="border-t border-slate-100 bg-slate-50" aria-labelledby="reviews-heading">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-600">
            Customer stories
          </p>
          <h2 id="reviews-heading" className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            What {data.name} customers say
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {data.testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  {/* Initials avatar */}
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-emerald-100 text-sm font-bold text-emerald-700">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                    <p className="text-[11px] text-slate-500">{t.neighbourhood}, Bangalore</p>
                    <Stars rating={t.rating} />
                  </div>
                </div>
                <blockquote className="text-xs leading-relaxed text-slate-600">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <p className="text-[11px] font-medium text-slate-400">
                  {t.sofa}
                </p>
              </figure>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.google.com/maps/place/Prestige+Dream+Decor/@13.0683529,77.557453,17z/data=!4m8!3m7!1s0x3bae23614ecb9453:0xe40430f5c46bba6d!8m2!3d13.0683529!4d77.5600279!9m1!1b1!16s%2Fg%2F11wxsy25nf?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-5 py-2 text-xs font-semibold text-amber-800 hover:bg-amber-100 transition-colors"
            >
              <div className="flex items-center gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <FaStar key={i} className="text-amber-400" style={{ fontSize: "9px" }} aria-hidden="true" />
                ))}
              </div>
              See all 26 reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────────────── */}
      <section className="border-t border-slate-100 bg-white" aria-labelledby="process-heading">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-600">How it works</p>
          <h2 id="process-heading" className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            From WhatsApp to your {data.name} home
          </h2>
          <p className="mt-2 text-sm text-slate-500">No showroom visit needed. The whole process runs over WhatsApp.</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-4">
            {[
              { num: "1", title: "Share your room", desc: "Send us a photo and your room dimensions over WhatsApp." },
              { num: "2", title: "Pick your fabric", desc: "We send you fabric options. You choose colour, texture, and feel." },
              { num: "3", title: "We build it", desc: "Your sofa is manufactured in our Bangalore workshop in 7–15 days." },
              { num: "4", title: "We deliver & install", desc: `Free delivery and professional installation to your ${data.name} address.` },
            ].map((step) => (
              <div key={step.num} className="flex flex-col items-center gap-3 text-center">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-600 text-sm font-black text-white shadow-md">
                  {step.num}
                </div>
                <p className="text-sm font-semibold text-slate-900">{step.title}</p>
                <p className="text-xs leading-relaxed text-slate-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ────────────────────────────────────────────────────── */}
      <section className="bg-emerald-700" aria-label="Call to action">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Ready to get started?</p>
          <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
            Get your {data.name} sofa price in 30 minutes
          </h2>
          <p className="mt-2 text-sm text-emerald-100">
            Share your room size on WhatsApp — we&apos;ll quote, design and deliver free to {data.name}.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={waLink(waHeroMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-emerald-700 shadow-xl hover:bg-emerald-50 transition-colors"
            >
              <FaWhatsapp aria-hidden="true" className="text-base" />
              Get Free Quote Now
            </a>
            <a
              href={`tel:${PHONE_E164}`}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/40 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              📞 Call Us
            </a>
          </div>
          <p className="mt-4 text-[11px] text-emerald-300">
            Free delivery &amp; installation · No pressure · Reply in &lt;30 min
          </p>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="border-t border-slate-100 bg-white" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <div className="mb-8 text-center">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-600">Common questions</p>
            <h2 id="faq-heading" className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Custom sofas in {data.name} — FAQs
            </h2>
          </div>

          <div className="divide-y divide-slate-100">
            {data.faqs.map((item, i) => (
              <details key={i} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-slate-900 hover:text-emerald-700">
                  <span>{item.q}</span>
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-500 group-open:bg-emerald-100 group-open:text-emerald-700 transition-colors text-xs font-bold">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:block">−</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-emerald-100 bg-emerald-50 px-6 py-6 text-center">
            <p className="text-sm font-semibold text-slate-800">Still have a question about {data.name} delivery?</p>
            <p className="mt-1 text-xs text-slate-500">Ask us directly — we reply in under 30 minutes during business hours.</p>
            <WhatsAppBtn
              label="Ask on WhatsApp"
              message={`Hi Prestige Dream Decor, I have a question about custom sofas delivered to ${data.name}.`}
              className="mt-4"
            />
          </div>
        </div>
      </section>

      {/* ── OTHER AREAS ─────────────────────────────────────────────────── */}
      <section className="border-t border-slate-100 bg-slate-50" aria-labelledby="other-areas-heading">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 id="other-areas-heading" className="mb-5 text-base font-bold text-slate-900">
            We also deliver to
          </h2>
          <div className="flex flex-wrap gap-3">
            {allAreaSlugs
              .filter((s) => s !== data.slug)
              .map((slug) => {
                const area = areaDataMap[slug];
                return (
                  <Link
                    key={slug}
                    href={`/custom-sofa/${slug}`}
                    className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm hover:border-emerald-400 hover:text-emerald-700 transition-colors"
                  >
                    Custom sofas {area.name} →
                  </Link>
                );
              })}
            <Link
              href="/"
              className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm hover:border-emerald-400 hover:text-emerald-700 transition-colors"
            >
              All Bangalore areas →
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom padding for mobile sticky bar */}
      <div className="h-20 sm:hidden" aria-hidden="true" />

    </div>
  );
}