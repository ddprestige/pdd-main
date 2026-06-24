/**
 * Prestige Dream Decor — Reusable Category Page Template
 *
 * HOW TO USE FOR A NEW CATEGORY:
 * 1. Copy this file into your route folder, e.g. app/l-shape-sofas/page.tsx
 * 2. Edit the `categoryConfig` object at the top of that file
 * 3. That's it — layout, FAQ, CTA, footer strip all stay the same
 *
 * Example routes already configured at the bottom of this file:
 *   /l-shape-sofas, /3-seater-sofas, /sofa-cum-beds,
 *   /dining-tables, /recliners, /beds, /custom-sofas
 */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  FaWhatsapp,
  FaRegCircleCheck,
  FaTruckFast,
  FaRulerCombined,
  FaPalette,
} from "react-icons/fa6";
import { waLink, PHONE_E164 } from "../lib/constants";

// ---------------------------------------------------------------------------
// TYPES
// ---------------------------------------------------------------------------

export type CategoryProduct = {
  id: string;
  name: string;
  /** One short line shown under the name, e.g. "Custom sizes available" */
  tag: string;
  imageUrl: string;
};

export type CategoryFaq = {
  question: string;
  answer: string;
};

export type CategoryConfig = {
  /** Used in <title> and <meta description> */
  seoTitle: string;
  seoDescription: string;
   startingPrice?: string;
  heroTitle: string;
  /** 1–2 sentence hero subheading */
  heroDescription: string;
  /** Hero background image path (from /public) */
  heroImage: string;
  /** Breadcrumb label, e.g. "L-Shape Sofas" */
  categoryLabel: string;
  /** Custom-CTA section headline */
  customCtaTitle: string;
  /** Custom-CTA section body */
  customCtaDescription: string;
  products: CategoryProduct[];
  faqs: CategoryFaq[];
  /** WhatsApp pre-fill for the hero button */
  heroWaMessage: string;
  /** WhatsApp pre-fill for the custom-CTA recommendation button */
  recommendationWaMessage: string;
};

// ---------------------------------------------------------------------------
// DEFAULT FAQs  (override per category if you like)
// ---------------------------------------------------------------------------

export const defaultFaqs: CategoryFaq[] = [
  {
    question: "Do you offer custom designs?",
    answer:
      "Yes — every piece is built to order. Share your room dimensions, preferred fabric and colour on WhatsApp, and our team will design a layout that fits perfectly.",
  },
  {
    question: "What is the delivery time?",
    answer:
      "Most orders are ready and delivered within 15–21 working days. We send production photos along the way and confirm an exact delivery date before you pay.",
  },
  {
    question: "Can I choose my own fabric and colour?",
    answer:
      "Absolutely. We stock 50+ fabric options including leatherette, velvet, linen, and performance weaves. We can courier swatches to your home or you can visit our Vidyaranyapura showroom.",
  },
  {
    question: "Do you deliver across Bangalore?",
    answer:
      "Yes — free delivery and professional installation across all of Bengaluru. For other cities, we ship at actual logistics cost.",
  },
];

// ---------------------------------------------------------------------------
// SHARED COMPONENTS
// ---------------------------------------------------------------------------

function WhatsAppButton({
  message,
  label,
  variant = "primary",
  className = "",
}: {
  message: string;
  label: string;
  variant?: "primary" | "outline" | "white";
  className?: string;
}) {
  
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-colors";
  const variants = {
    primary:
      "bg-emerald-600 text-white shadow-lg shadow-emerald-900/20 hover:bg-emerald-500 px-6 py-3.5 text-sm",
    outline:
      "border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-6 py-3.5 text-sm",
    white:
      "bg-white text-emerald-700 shadow-xl hover:bg-emerald-50 px-7 py-4 text-base",
  };
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={[base, variants[variant], className].join(" ")}
    >
      <FaWhatsapp className="shrink-0 text-lg" aria-hidden="true" />
      {label}
    </a>
  );
}

function ProductCard({ product, waMessage }: { product: CategoryProduct; waMessage: string }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-md">
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      {/* Body */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-sm font-semibold text-slate-900">{product.name}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-[11px] font-medium text-emerald-700">
          <FaRegCircleCheck aria-hidden="true" className="shrink-0" />
          {product.tag}
        </p>
        <a
          href={waLink(waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto pt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        >
          <FaWhatsapp aria-hidden="true" />
          Get Price on WhatsApp
        </a>
      </div>
    </div>
  );
}

function FaqItem({ question, answer }: CategoryFaq) {
  return (
    <details className="group border-b border-slate-100 py-5 last:border-b-0">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-slate-900 hover:text-emerald-700">
        <span>{question}</span>
        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-slate-100 text-xs font-black text-slate-500 transition-colors group-open:bg-emerald-100 group-open:text-emerald-700">
          <span className="group-open:hidden">+</span>
          <span className="hidden group-open:block">−</span>
        </span>
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{answer}</p>
    </details>
  );
}

// ---------------------------------------------------------------------------
// MAIN TEMPLATE COMPONENT
// ---------------------------------------------------------------------------

export function CategoryPageTemplate({ config }: { config: CategoryConfig }) {
  const {
    heroTitle,
    heroDescription,
    heroImage,
    categoryLabel,
    customCtaTitle,
    customCtaDescription,
    products,
    faqs,
    heroWaMessage,
    recommendationWaMessage,
  } = config;
  const heroMessage =
  "Hi Prestige Dream Decor, I'm looking for custom-built furniture for my home. Please share the catalogue, price range and delivery timelines.";


  return (
    <div className="bg-white text-slate-900">

      {/* ── STICKY MOBILE BAR ─────────────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center gap-2 border-t border-slate-200 bg-white px-4 py-3 shadow-2xl sm:hidden">
        <a
          href={waLink(heroWaMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-sm font-bold text-white"
        >
          <FaWhatsapp aria-hidden="true" />
          Get Free Quote
        </a>
        <a
          href={`tel:${PHONE_E164}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-emerald-600 py-3 text-sm font-bold text-emerald-700"
        >
          📞 Call Now
        </a>
      </div>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-slate-950"
        aria-labelledby="hero-heading"
        style={{ minHeight: "60vh" }}
      >
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={heroTitle}
            fill
            priority
            className="object-cover object-center opacity-70"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-slate-950/20" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-950/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-24 sm:pt-28">

          {/* Breadcrumb */}
          <nav className="mb-5 flex items-center gap-1.5 text-xs text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-300">{categoryLabel}</span>
          </nav>

          {/* Two-column layout — left: text, right: card */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">

            {/* LEFT — headline, description, CTAs */}
            <div className="flex-1">
              {/* Pill */}
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-[11px] font-semibold text-amber-300">
                Prestige Dream Decor · Bengaluru Studio
              </p>

              <h1
                id="hero-heading"
                className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                {heroTitle}
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300">
                {heroDescription}
              </p>

              {/* Price anchor */}
              <p className="mt-3 text-sm font-semibold text-emerald-400">
                Custom sofas from ₹14,500 · No hidden costs · Free installation
              </p>

              {/* CTAs */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <WhatsAppButton message={heroWaMessage} label="Get Price on WhatsApp" variant="primary" />
                <a
                  href={`tel:${PHONE_E164}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/8 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/15 transition-colors"
                >
                  📞 Call Now
                </a>
              </div>

              {/* Micro-reassurances */}
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-slate-400">
                {["Reply in under 30 min", "Free delivery & installation", "Starting from ₹14,500"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <FaRegCircleCheck className="shrink-0 text-emerald-400" aria-hidden="true" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT — 3-step quote card */}
            <div className="w-full max-w-[340px] shrink-0 lg:ml-auto">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
                <div className="bg-emerald-600 px-5 py-4">
                  <p className="text-sm font-bold text-white">⚡ Get your price in 3 easy steps</p>
                  <p className="mt-0.5 text-xs text-emerald-100">No commitment. Real answers from our team — not bots.</p>
                </div>
                <div className="space-y-2.5 px-5 py-5">
                  {[
                    { num: "1", text: "Send your room size & a photo" },
                    { num: "2", text: "Pick fabric, colour & comfort level" },
                    { num: "3", text: "Get exact price + delivery date" },
                  ].map(step => (
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
                    href={waLink(heroMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-emerald-400 transition-colors"
                  >
                    <FaWhatsapp aria-hidden="true" className="text-base" />
                    Start on WhatsApp — It&apos;s Free
                  </a>
                  <p className="mt-2.5 text-center text-[10px] text-slate-500">
                    🔒 You talk to our team directly. No bots, no spam.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ───────────────────────────────────────────────── */}
      <div className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-4 text-xs font-medium text-slate-600">
          {[
            { icon: <FaRegCircleCheck className="text-emerald-500" />, label: "10+ years of craftsmanship" },
            { icon: <FaTruckFast className="text-emerald-500" />, label: "Free delivery across Bengaluru" },
            { icon: <FaRulerCombined className="text-emerald-500" />, label: "Made to your measurements" },
            { icon: <FaPalette className="text-emerald-500" />, label: "Easy EMI options" },
          ].map((item) => (
            <span key={item.label} className="flex items-center gap-2">
              {item.icon}
              {item.label}
            </span>
          ))}
        </div>
      </div>

      

      {/* ── PRODUCT GRID ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-16" aria-labelledby="products-heading">
        <div className="mb-8">
          <h2 id="products-heading" className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            {categoryLabel}
          </h2>
          <p className="mt-1.5 text-sm text-slate-500">
            Tap <strong>Get Price on WhatsApp</strong> on any product — we reply with pricing, fabric options and delivery timeline.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              waMessage={`Hi Prestige Dream Decor, I'm interested in: ${product.name}. Please share price, fabric options and delivery timeline.`}
            />
          ))}
        </div>

        {/* Urgency strip */}
        <div className="mt-10 flex flex-col gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-amber-100 text-amber-700">
              <FaTruckFast aria-hidden="true" />
            </div>
            <p className="text-sm font-semibold text-amber-900">
              Limited production slots available this week — share your requirements to lock in current pricing.
            </p>
          </div>
          <WhatsAppButton
            message={heroWaMessage}
            label="Get Price on WhatsApp"
            variant="primary"
            className="shrink-0"
          />
        </div>
      </section>

      {/* ── CUSTOM CTA SECTION ────────────────────────────────────────── */}
      <section className="bg-emerald-700" aria-labelledby="custom-cta-heading">
        <div className="mx-auto max-w-5xl px-4 py-14 text-center">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-300">
            Need something unique?
          </p>
          <h2
            id="custom-cta-heading"
            className="text-2xl font-extrabold text-white sm:text-3xl"
          >
            {customCtaTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-emerald-100">
            {customCtaDescription}
          </p>
          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <WhatsAppButton
              message={recommendationWaMessage}
              label="Get Sofa Recommendation"
              variant="white"
            />
            <a
              href={waLink(`Hi Prestige Dream Decor, I'd like to chat about a custom ${categoryLabel} for my home.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/40 px-7 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <FaWhatsapp aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
          <p className="mt-5 text-[11px] text-emerald-300">
            Free delivery &amp; installation · No commitment · Reply in &lt;30 min
          </p>
        </div>
      </section>

      {/* ── WHY CHOOSE US — 3-column cards ───────────────────────────── */}
      <section className="border-b border-slate-100 bg-slate-50" aria-labelledby="why-heading">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <h2 id="why-heading" className="mb-8 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Why choose Prestige Dream Decor
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Built to your exact size",
                desc: "No standard sizes. We measure your room, design to fit, and build from scratch.",
              },
              {
                title: "Factory-direct pricing",
                desc: "No middlemen. You pay studio price — same quality as premium showrooms, lower cost.",
              },
              {
                title: "Guided over WhatsApp",
                desc: "Fabric samples, 3D layouts, price quotes — all over WhatsApp, no showroom visit needed.",
              },
              {
                title: "Free delivery & installation",
                desc: "We deliver and install professionally across all of Bengaluru at zero extra charge.",
              },
              {
                title: "Transparent timelines",
                desc: "We share production photos and confirm an exact delivery date before you pay.",
              },
              {
                title: "10+ years of expertise",
                desc: "Specialised in premium sofas and upholstered furniture crafted for Indian homes.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-2 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
              >
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <FaRegCircleCheck aria-hidden="true" />
                </div>
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="text-xs leading-relaxed text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="bg-white" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <div className="mb-8 text-center">
            <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-600">
              Common Questions
            </p>
            <h2 id="faq-heading" className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Everything you want to know before ordering
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              We answer these every day on WhatsApp — here they are upfront.
            </p>
          </div>

          <div className="divide-y divide-slate-100 rounded-2xl border border-slate-100 bg-slate-50 px-6">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} {...faq} />
            ))}
          </div>

          {/* FAQ bottom CTA */}
          <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50 px-6 py-6 text-center">
            <p className="text-sm font-semibold text-slate-800">Still have a question?</p>
            <p className="mt-1 text-xs text-slate-500">
              Ask us directly — we reply in under 30 minutes during business hours.
            </p>
            <WhatsAppButton
              message={`Hi Prestige Dream Decor, I have a question about your ${categoryLabel}.`}
              label="Ask on WhatsApp"
              variant="primary"
              className="mt-4"
            />
          </div>
        </div>
      </section>

      {/* ── BOTTOM PADDING for mobile sticky bar ──────────────────────── */}
      <div className="h-20 sm:hidden" aria-hidden="true" />
    </div>
  );
}

// ===========================================================================
// READY-TO-USE CATEGORY PAGES
// Copy one of these into its own app/[route]/page.tsx and export as default
// ===========================================================================

// ---------------------------------------------------------------------------
// L-SHAPE SOFAS  →  app/l-shape-sofas/page.tsx
// ---------------------------------------------------------------------------
export const lShapeConfig: CategoryConfig = {
  seoTitle: "L-Shape Sofas in Bangalore | Custom Built | Prestige Dream Decor",
  seoDescription:
    "Buy custom L-shape sofas in Bangalore. Tailored to your room size, fabric & colour. Free delivery & installation. Factory-direct pricing.",
  heroTitle: "L-Shape Sofas in Bangalore",
  heroDescription:
    "Explore modern L-shape sofas designed for comfort and space efficiency. Choose from multiple fabrics, colours, and custom sizes — delivered and installed free across Bengaluru.",
  heroImage: "/brownlsofa.jpeg",
  categoryLabel: "L-Shape Sofas",
  customCtaTitle: "Need a Custom L-Shape for Your Living Room?",
  customCtaDescription:
    "We design L-shape sofas based on your exact room dimensions, fabric preference, and interior style. Share a photo — we'll suggest the best layout.",
  heroWaMessage:
    "Hi Prestige Dream Decor, I'm looking for a custom L-shape sofa. Please share catalogue, price range and delivery timeline.",
  recommendationWaMessage:
    "Hi Prestige Dream Decor, I need help choosing an L-shape sofa for my living room. Can you recommend options based on my room size?",
  products: [
    { id: "l1", name: "Signature L-Shape Sofa", tag: "Custom sizes available", imageUrl: "/greyLshape.jpeg" },
    { id: "l2", name: "Modern Corner Sofa", tag: "Premium upholstery", imageUrl: "/heroimage.jpeg" },
    { id: "l3", name: "Classic L-Shape", tag: "Timeless design", imageUrl: "/whitelsofa.jpeg" },
    { id: "l4", name: "Compact L-Shape", tag: "Space-saving fit", imageUrl: "/greenlshape.webp" },
    { id: "l5", name: "Chocolate black L-Shape", tag: "On Customer demand", imageUrl: "/chocoLshape.jpeg" },
    { id: "l6", name: "Luxury L-Shape", tag: "50+ fabric options", imageUrl: "/blackpremium.jpg" },
    { id: "l7", name: "Sectional L-Shape", tag: "Modular configuration", imageUrl: "/classic-blue-lshape.jpeg" },
    { id: "l8", name: "SeaBlue L-Shape", tag: "Premium Blue ", imageUrl: "/SeaBlueLshape.jpeg" },
  ],
  faqs: [
    ...defaultFaqs,
    {
      question: "What sizes do your L-shape sofas come in?",
      answer:
        "We build every L-shape sofa to your exact room size. Common configurations are 8×5 ft, 9×6 ft, and 10×7 ft — but we customise to any dimensions you need.",
    },
  ],
};

// ---------------------------------------------------------------------------
// 3 SEATER SOFAS  →  app/3-seater-sofas/page.tsx
// ---------------------------------------------------------------------------
export const threeSeaterConfig: CategoryConfig = {
  seoTitle: "3 Seater Sofas in Bangalore | Custom Built | Prestige Dream Decor",
  seoDescription:
    "Buy custom 3-seater sofas in Bangalore. Made to your room size, fabric and colour. Free delivery & installation. Factory-direct pricing.",
  heroTitle: "3 Seater Sofas in Bangalore",
  heroDescription:
    "Premium 3-seater sofas built to order in our Bengaluru studio. Choose your fabric, colour, and size — we deliver and install free across the city.",
  heroImage: "/three-seater.webp",
  categoryLabel: "3 Seater Sofas",
  customCtaTitle: "Need a Custom 3-Seater for Your Home?",
  customCtaDescription:
    "We design 3-seater sofas around your room layout, seating preference and fabric choice. Share your space — we'll build the perfect fit.",
  heroWaMessage:
    "Hi Prestige Dream Decor, I'm looking for a custom 3-seater sofa. Please share catalogue, price range and delivery timeline.",
  recommendationWaMessage:
    "Hi Prestige Dream Decor, I need help choosing a 3-seater sofa. Can you recommend options based on my room size?",
  products: [
    { id: "3s1", name: "City Comfort 3-Seater", tag: "Custom sizes available", imageUrl: "/three-seater.webp" },
    { id: "3s2", name: "Minimalist 3-Seater", tag: "Clean modern lines", imageUrl: "/blue3seater.jpeg" },
    { id: "3s3", name: "Classic 3-Seater", tag: "Timeless comfort", imageUrl: "/tradition3seater.webp" },
    { id: "3s4", name: "Compact 3-Seater", tag: "Ideal for apartments", imageUrl: "/compact3.webp" },
    { id: "3s5", name: "Premium 3-Seater", tag: "50+ fabric options", imageUrl: "/white3seater.jpg" },
    { id: "3s6", name: "Family 3-Seater", tag: "High-density foam", imageUrl: "/3seaterclassic.jpeg" },
  ],
  faqs: defaultFaqs,
};

// ---------------------------------------------------------------------------
// SOFA CUM BEDS  →  app/sofa-cum-beds/page.tsx
// ---------------------------------------------------------------------------
export const sofaCumBedConfig: CategoryConfig = {
  seoTitle: "Sofa Cum Beds in Bangalore | Custom Built | Prestige Dream Decor",
  seoDescription:
    "Buy custom sofa cum beds in Bangalore. Space-saving, premium finish, and built to your size. Free delivery & installation.",
  heroTitle: "Sofa Cum Beds in Bangalore",
  heroDescription:
    "Stylish by day, comfortable by night. Our sofa cum beds are custom-built to your room size — perfect for studios, guest rooms, and compact homes.",
  heroImage: "/sofacumbed.jpeg",
  categoryLabel: "Sofa Cum Beds",
  customCtaTitle: "Need a Custom Sofa Cum Bed?",
  customCtaDescription:
    "We design sofa cum beds around your space and sleeping needs. Tell us the room size and we'll suggest the best mechanism and fabric.",
  heroWaMessage:
    "Hi Prestige Dream Decor, I'm looking for a sofa cum bed. Please share catalogue, price range and delivery timeline.",
  recommendationWaMessage:
    "Hi Prestige Dream Decor, I need help choosing a sofa cum bed for my room. Can you recommend based on my space?",
  products: [
    { id: "scb1", name: "Standard Sofa Cum Bed", tag: "Space-saving design", imageUrl: "/sofacumbed.jpeg" },
    { id: "scb2", name: "Premium Sofa Cum Bed", tag: "Comfortable fold-out", imageUrl: "/redsofacumbed.webp" },
    { id: "scb3", name: "Compact Sofa Bed", tag: "Ideal for studios", imageUrl: "/greensofacumbed.webp" },
    { id: "scb4", name: "Designer Sofa Cum Bed", tag: "Sleek premium finish", imageUrl: "/designercumbed.webp" },
    { id: "scb5", name: "Family Sofa Cum Bed", tag: "Extra sleeping space", imageUrl: "/white-sofabed.jpg" },
    { id: "scb6", name: "Luxury Sofa Cum Bed", tag: "50+ fabric options", imageUrl: "/sectionalcumbed.jpeg" },
    { id: "scb7", name: "Luxury Blue Sofa Cum Bed", tag: "50+ fabric options", imageUrl: "/familycustom.jpeg" },
  ],
  faqs: [
    ...defaultFaqs,
    {
      question: "What size mattress does a sofa cum bed fit?",
      answer:
        "Most of our sofa cum beds open to a double-bed sleeping surface (roughly 4×6 ft). We can build custom sizes to fit a single, queen or king mattress on request.",
    },
  ],
};

// ---------------------------------------------------------------------------
// DINING TABLES  →  app/dining-tables/page.tsx
// ---------------------------------------------------------------------------
export const diningTableConfig: CategoryConfig = {
  seoTitle: "Dining Tables in Bangalore | Custom Built | Prestige Dream Decor",
  seoDescription:
    "Buy custom dining tables in Bangalore. Solid wood, engineered wood and glass-top options. Tailored to your dining space. Free delivery.",
  heroTitle: "Dining Tables in Bangalore",
  heroDescription:
    "Custom dining tables built to your room size and seating requirement. Choose from solid wood, engineered wood, glass-top, and premium finishes — delivered free.",
  heroImage: "/6seaterdining.webp",
  categoryLabel: "Dining Tables",
  customCtaTitle: "Need a Custom Dining Table?",
  customCtaDescription:
    "We design dining tables for 4-seater to 12-seater requirements. Share your dining room dimensions and we'll suggest the right size and finish.",
  heroWaMessage:
    "Hi Prestige Dream Decor, I'm looking for a custom dining table. Please share catalogue, price range and delivery timeline.",
  recommendationWaMessage:
    "Hi Prestige Dream Decor, I need help choosing a dining table. Can you recommend options based on my dining room size?",
  products: [
    { id: "dt1", name: "4-Seater Dining Set", tag: "Compact & modern", imageUrl: "/diningtable1.jpeg" },
    { id: "dt2", name: "6-Seater Dining Table", tag: "Family favourite", imageUrl: "/6seaterdining.webp" },
    { id: "dt3", name: "Glass-Top Dining Table", tag: "Premium glass finish", imageUrl: "/6seaterglasstop.jpeg" },
    { id: "dt4", name: "Solid Wood Dining Set", tag: "Sheesham wood build", imageUrl: "/diningtable2.jpeg" },
    { id: "dt5", name: "Extendable Dining Table", tag: "4 to 8 seater flex", imageUrl: "/extendablediningtable.jpg" },
    { id: "dt6", name: "Marble-Top Dining Table", tag: "Luxury finish", imageUrl: "/marbletopdining.jpeg" },
  ],
  faqs: [
    {
      question: "Do you offer custom dining table sizes?",
      answer:
        "Yes — we build to your exact dimensions. Share your room size and seating count on WhatsApp and we'll design accordingly.",
    },
    ...defaultFaqs.slice(1),
  ],
};

// ---------------------------------------------------------------------------
// RECLINERS  →  app/recliners/page.tsx
// ---------------------------------------------------------------------------
export const reclinerConfig: CategoryConfig = {
  seoTitle: "Recliners in Bangalore | Custom Fabric | Prestige Dream Decor",
  seoDescription:
    "Buy premium recliners in Bangalore. Single, double, and home-theatre recliners. Custom fabric options. Free delivery & installation.",
  heroTitle: "Recliners in Bangalore",
  heroDescription:
    "Premium manual and motorised recliners built for the Indian home. Choose your fabric, colour, and reclining mechanism — delivered and installed free.",
  heroImage: "/reclinersofa.webp",
  categoryLabel: "Recliners",
  customCtaTitle: "Need a Custom Recliner Setup?",
  customCtaDescription:
    "From single-seat reading chairs to full home-theatre rows — we design recliner setups around your room and budget.",
  heroWaMessage:
    "Hi Prestige Dream Decor, I'm looking for a recliner. Please share options, price range and delivery timeline.",
  recommendationWaMessage:
    "Hi Prestige Dream Decor, I need help choosing a recliner. Can you recommend options for my room?",
  products: [
    { id: "r1", name: "Single Recliner Chair", tag: "Manual reclining", imageUrl: "/recliner1.jpeg" },
    { id: "r2", name: "2-Seater Recliner Sofa", tag: "Dual-action recliner", imageUrl: "/reclinersofa.webp" },
    { id: "r3", name: "3-Seater Recliner Sofa", tag: "Family comfort", imageUrl: "/recliner3ss.jpg" },
    { id: "r4", name: "Home Theatre Recliner", tag: "4-seat configuration", imageUrl: "/reclinerhome.jpeg" },
    { id: "r5", name: "Motorised Recliner", tag: "Power reclining + USB", imageUrl: "/reclinermosturised.jpg" },
    { id: "r6", name: "Luxury Leatherette Recliner", tag: "Premium finish", imageUrl: "/reclinerluxury.jpg" },
  ],
  faqs: defaultFaqs,
};

// ---------------------------------------------------------------------------
// BEDS  →  app/beds/page.tsx
// ---------------------------------------------------------------------------
export const bedConfig: CategoryConfig = {
  seoTitle: "Custom Beds in Bangalore | Upholstered & Wood | Prestige Dream Decor",
  seoDescription:
    "Buy custom beds in Bangalore. Upholstered, wood, and storage beds. Built to your room size with free delivery & installation.",
  heroTitle: "Custom Beds in Bangalore",
  heroDescription:
    "Upholstered beds, platform beds, and storage beds — all custom-built to your room size. Free delivery and professional installation across Bengaluru.",
  heroImage: "/upholdbed.jpeg",
  categoryLabel: "Beds",
  customCtaTitle: "Need a Custom Bed for Your Bedroom?",
  customCtaDescription:
    "We design beds around your mattress size, room dimensions, and storage needs. Share your room photo — we'll suggest the best design.",
  heroWaMessage:
    "Hi Prestige Dream Decor, I'm looking for a custom bed. Please share catalogue, price range and delivery timeline.",
  recommendationWaMessage:
    "Hi Prestige Dream Decor, I need help choosing a bed for my bedroom. Can you recommend based on my room size?",
  products: [
    { id: "b1", name: "Upholstered Platform Bed", tag: "Fabric headboard", imageUrl: "/upholdbed.jpeg" },
    { id: "b2", name: "Storage Bed", tag: "Hydraulic storage lift", imageUrl: "/bed1.jpeg" },
    { id: "b3", name: "Wooden Bed Frame", tag: "Sheesham solid wood", imageUrl: "/kingsizebed.jpeg" },
    { id: "b4", name: "Luxury Bed with Mattress", tag: "Luxury Bed king size", imageUrl: "/bed2.jpeg" },
    { id: "b5", name: "Blue Upholstered Platform Bed", tag: "Fabric headboard", imageUrl: "/bedblue.jpeg" },
    { id: "b6", name: "Classic Storage Bed with Mattress", tag: "Storage Bed", imageUrl: "/ClassicStoragebed.jpeg" },
  ],
  faqs: [
    {
      question: "Do you make beds with storage?",
      answer:
        "Yes — we offer hydraulic lift storage beds, drawer-base storage, and side-drawer configurations. Specify your storage requirement on WhatsApp and we'll design accordingly.",
    },
    ...defaultFaqs.slice(0, 3),
  ],
};

// ---------------------------------------------------------------------------
// CUSTOM SOFAS  →  app/custom-sofas/page.tsx
// ---------------------------------------------------------------------------
export const customSofaConfig: CategoryConfig = {
  seoTitle: "Custom Sofas in Bangalore | Built to Order | Prestige Dream Decor",
  seoDescription:
    "Order fully custom sofas in Bangalore. Any size, shape, fabric, and colour. Built to your room. Free delivery & installation.",
  heroTitle: "Custom Sofas in Bangalore",
  heroDescription:
    "Fully bespoke sofas built to your exact room measurements, layout, fabric and colour. No catalogue — your sofa, your rules.",
  heroImage: "/customchocolate.webp",
  categoryLabel: "Custom Sofas",
  customCtaTitle: "Design Your Dream Sofa",
  customCtaDescription:
    "Share your room photo, approximate size, and style preference — our team will design multiple layout options and quote you within 30 minutes.",
  heroWaMessage:
    "Hi Prestige Dream Decor, I'd like a fully custom sofa. Please guide me on size, fabric options and pricing.",
  startingPrice: "₹14,500", 
  recommendationWaMessage:
    "Hi Prestige Dream Decor, I need help designing a custom sofa for my living room. Can you help me get started?",
  products: [
    { id: "c1", name: "Bespoke Sectional", tag: "Any layout possible", imageUrl: "/familycumbed.jpg" },
    { id: "c2", name: "Designer Custom Sofa", tag: "One-of-a-kind design", imageUrl: "/customchocolate.webp" },
    { id: "c3", name: "Modular Custom Set", tag: "Mix & match modules", imageUrl: "/modularcustom.webp" },
    { id: "c4", name: "Luxury Custom Sofa", tag: "Premium materials", imageUrl: "/custombrown.webp" },
    { id: "c5", name: "Compact Custom Sofa", tag: "For small spaces", imageUrl: "/compactspacesaver.webp" },
    { id: "c6", name: "Family Sectional", tag: "Extra-wide seating", imageUrl: "/CustomPremiumsofa.jpeg" },
  ],
  faqs: defaultFaqs,
};

// ===========================================================================
// EXAMPLE: How to use in a route file
//
// app/l-shape-sofas/page.tsx
// ---------------------------------------------------------------------------
// import type { Metadata } from "next";
// import { CategoryPageTemplate, lShapeConfig } from "@/components/CategoryPage";
//
// export const metadata: Metadata = {
//   title: lShapeConfig.seoTitle,
//   description: lShapeConfig.seoDescription,
// };
//
// export default function LShapeSofasPage() {
//   return <CategoryPageTemplate config={lShapeConfig} />;
// }
// ===========================================================================