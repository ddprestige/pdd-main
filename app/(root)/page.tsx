import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  FaWhatsapp,
  FaStar,
  FaRegCircleCheck,
  FaCouch,
  FaTruckFast,
  FaShieldHalved,
} from "react-icons/fa6";
import HeroLeadForm from "../components/HeroLeadForm";

export const metadata: Metadata = {
  title: "Custom Sofas & Furniture in Bengaluru | Prestige Dream Decor",
  description:
    "Order custom-built sofas, sofa cum beds and premium furniture in Bengaluru. Starting from ₹34,999. Tailored to your room size, delivered in 7–15 days with free installation.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a custom sofa cost in Bangalore?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom sofas start from ₹21,999, depending on size, fabric quality and design. Most orders fall between ₹34,999 and ₹1,20,999. WhatsApp us for a precise quote within 30 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "How long does custom sofa delivery take in Bangalore?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most orders are delivered within 7–15 working days after confirmation, depending on design complexity. Simple sofas are often completed in 7–10 days.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer free delivery and installation in Bangalore?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide free delivery and professional installation for all orders within Bengaluru.",
      },
    },
    {
      "@type": "Question",
      name: "Can I customise the size, fabric, and colour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Every piece is fully customisable — size, fabric, colour, cushioning and design to match your home interiors.",
      },
    },
  ],
};

import { PHONE_E164, ADDRESS, waLink } from "../lib/constants";

// ---------------------------------------------------------------------------
// TYPES
// ---------------------------------------------------------------------------

type CatalogProduct = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  startingPrice?: string;
  deliveryDays?: string;
};

type CatalogCategory = {
  id: string;
  name: string;
  /** Slug used for "View all →" link, e.g. /l-shape-sofas */
  slug: string;
  products: CatalogProduct[];
};

// ---------------------------------------------------------------------------
// DATA — 7 categories including Dining Tables, Recliners, Beds
// ---------------------------------------------------------------------------

const catalogCategories: CatalogCategory[] = [
  {
    id: "l-shape",
    name: "L-Shape Sofas",
    slug: "/l-shape-sofas",
    products: [
      { id: "l1", name: "Signature L-Shape Sofa", description: "Built to your exact dimensions in our Bangalore workshop. Choose from 40+ fabrics. Free delivery & installation.", imageUrl: "/brownlsofa.jpeg", startingPrice: "₹21,999", deliveryDays: "7–15 days" },
      { id: "l2", name: "Classic L-Shape", description: "Timeless L-shape with engineered hardwood frame and high-density foam. Customise size, fabric and leg finish.", imageUrl: "/heroimage.jpeg", startingPrice: "₹21,999", deliveryDays: "7–15 days" },
      { id: "l3", name: "Compact L-Shape", description: "Space-efficient L-shape designed for smaller rooms and apartments across Bangalore. Custom dimensions available.", imageUrl: "/greyLshape.jpeg", startingPrice: "₹21,999", deliveryDays: "7–12 days" },
    ],
  },
  {
    id: "3-seater",
    name: "3 Seater Sofas",
    slug: "/3-seater-sofas",
    products: [
      { id: "3s1", name: "City Comfort 3-Seater", description: "Premium 3-seater built to order in our Bangalore studio. Pick your fabric, depth and arm style.", imageUrl: "/three-seater.webp", startingPrice: "₹24,999", deliveryDays: "7–12 days" },
      { id: "3s2", name: "Minimalist 3-Seater", description: "Clean lines and neutral tones for modern Bangalore homes. Fully customisable dimensions and upholstery.", imageUrl: "/blue3seater.jpeg", startingPrice: "₹24,999", deliveryDays: "7–12 days" },
      { id: "3s3", name: "Classic 3-Seater", description: "Traditional design with lasting comfort. Engineered frame, custom fabric selection, free installation.", imageUrl: "/tradition3seater.webp", startingPrice: "₹24,999", deliveryDays: "7–12 days" },
    ],
  },
  {
    id: "sofa-cum-bed",
    name: "Sofa Cum Beds",
    slug: "/sofa-cum-beds",
    products: [
      { id: "scb2", name: "Premium Sofa Cum Bed", description: "Comfortable seating by day, smooth fold-out bed by night. Custom sizes built for your guest room.", imageUrl: "/redsofacumbed.webp", startingPrice: "₹24,999", deliveryDays: "10–15 days" },
      { id: "scb4", name: "Designer Sofa Cum Bed", description: "Sleek mechanism with premium finish. Ideal for studio apartments and compact 2BHKs across Bangalore.", imageUrl: "/designercumbed.webp", startingPrice: "₹24,999", deliveryDays: "10–15 days" },
      { id: "scb5", name: "Family Sofa Cum Bed", description: "Extra seating and generous sleeping space. Built wide to accommodate the whole family.", imageUrl: "/white-sofabed.jpg", startingPrice: "₹24,999", deliveryDays: "10–15 days" },
    ],
  },
  {
    id: "custom",
    name: "Custom Sofas",
    slug: "/custom-sofas",
    products: [
      { id: "c2", name: "Designer Custom Sofa", description: "Fully bespoke — your dimensions, your fabric, your design. Built in our Bangalore workshop to match your exact brief.", imageUrl: "/customchocolate.webp", startingPrice: "₹21,999", deliveryDays: "7–15 days" },
      { id: "c3", name: "Modular Custom Set", description: "Modular pieces you can configure as you like. Expand, rearrange or add sections later — fully custom-built.", imageUrl: "/CustomPremiumsofa.jpeg", startingPrice: "₹24,999", deliveryDays: "10–15 days" },
      { id: "c4", name: "Compact Custom Sofa", description: "Custom-built for small or irregular spaces. We measure, design and build to fit your room perfectly.", imageUrl: "/compactspacesaver.webp", startingPrice: "₹21,999", deliveryDays: "7–12 days" },
    ],
  },
  {
    id: "dining-tables",
    name: "Dining Tables",
    slug: "/dining-tables",
    products: [
      { id: "dt1", name: "4-Seater Dining Set", description: "Compact and modern dining set built to order for smaller Bangalore homes. Custom wood finish and table size.", imageUrl: "/diningtable1.jpeg", startingPrice: "₹18,999", deliveryDays: "7–12 days" },
      { id: "dt2", name: "6-Seater Dining Table", description: "Family-sized dining table with premium finish. Choose your wood tone, leg style and chair upholstery.", imageUrl: "/6seaterdining.webp", startingPrice: "₹21,999", deliveryDays: "10–15 days" },
      { id: "dt3", name: "Glass-Top Dining Table", description: "Elegant tempered glass top with solid wood base. Custom dimensions and base finish available.", imageUrl: "/marbletopdining.jpeg", startingPrice: "₹18,999", deliveryDays: "7–12 days" },
    ],
  },
  {
    id: "recliners",
    name: "Recliners",
    slug: "/recliners",
    products: [
      { id: "r1", name: "Single Recliner Chair", description: "Manual reclining chair ideal for reading nooks and media rooms. Custom upholstery and colour options.", imageUrl: "/recliner1.jpeg", startingPrice: "₹24,999", deliveryDays: "7–12 days" },
      { id: "r2", name: "2-Seater Recliner Sofa", description: "Dual-action recliner for couples. Premium mechanism with full fabric customisation.", imageUrl: "/reclinersofa.webp", startingPrice: "₹21,999", deliveryDays: "10–15 days" },
      { id: "r3", name: "Home Theatre Recliner", description: "Premium 4-seat configuration for your media room. Built to your row dimensions, delivered across Bangalore.", imageUrl: "/reclinerhome.jpeg", startingPrice: "₹24,999", deliveryDays: "10–15 days" },
    ],
  },
  {
    id: "beds",
    name: "Beds",
    slug: "/beds",
    products: [
      { id: "b1", name: "Upholstered Platform Bed", description: "Fabric headboard with clean platform design. Custom sizes from single to king — built in our Bangalore studio.", imageUrl: "/bed1.jpeg", startingPrice: "₹24,999", deliveryDays: "7–12 days" },
      { id: "b2", name: "Storage Bed", description: "Hydraulic lift storage — perfect for smaller bedrooms. Custom fabric headboard and box size available.", imageUrl: "/upholdbed.jpeg", startingPrice: "₹18,999", deliveryDays: "10–15 days" },
      { id: "b3", name: "Luxury Tufted Bed", description: "Premium velvet tufted headboard in custom sizes. A statement piece built to your exact room dimensions.", imageUrl: "/bed2.jpeg", startingPrice: "₹24,999", deliveryDays: "10–15 days" },
    ],
  },
];

// ---------------------------------------------------------------------------
// TESTIMONIALS
// ---------------------------------------------------------------------------

type Testimonial = {
  name: string;
  city: string;
  rating: 4 | 5;
  photoUrl: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Ananya R.",
    city: "Vidyaranyapura",
    rating: 5,
    photoUrl: "/testimonial-ananya.png",
    quote: "Our custom L-shape sofa looks exactly like the 3D design they shared. The finish feels premium and guests always compliment it.",
  },
  {
    name: "Sanjay K.",
    city: "Whitefield",
    rating: 5,
    photoUrl: "/testimonial-sanjay.png",
    quote: "Very professional from WhatsApp inquiry to delivery. Fabric suggestions were practical for family use and cleaning.",
  },
  {
    name: "Meera S.",
    city: "Yelahanka",
    rating: 5,
    photoUrl: "/testimonial-meera.png",
    quote: "We ordered a sofa cum bed and a custom bed. Both arrived on time and the workmanship is solid and neat.",
  },
  {
    name: "Rahul P.",
    city: "Indiranagar",
    rating: 4,
    photoUrl: "/testimonial-rahul.png",
    quote: "Good value for money and very responsive on WhatsApp. They shared options in our budget without any pressure.",
  },
];

// ---------------------------------------------------------------------------
// SHARED COMPONENTS
// ---------------------------------------------------------------------------

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar key={i} className={i < rating ? "text-amber-400" : "text-slate-200"} aria-hidden="true" />
      ))}
    </div>
  );
}

function WhatsAppCta({
  label = "Get Price on WhatsApp",
  message,
  className = "",
}: {
  label?: string;
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

function CatalogCard({ product, getQuoteMessage }: { product: CatalogProduct; getQuoteMessage: string }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <Image
          src={product.imageUrl}
          alt={product.name}
          className="object-cover transition-transform duration-300 hover:scale-[1.02]"
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-sm font-semibold text-slate-900">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-xs text-slate-500">{product.description}</p>
        {(product.startingPrice || product.deliveryDays) && (
          <div className="mt-3 flex items-center justify-between gap-2">
            {product.startingPrice && (
              <span className="text-sm font-bold text-emerald-700">
                From {product.startingPrice}
              </span>
            )}
            {product.deliveryDays && (
              <span className="flex items-center gap-1 text-[11px] text-slate-400">
                <FaTruckFast aria-hidden="true" className="shrink-0" />
                {product.deliveryDays}
              </span>
            )}
          </div>
        )}
        <a
          href={waLink(getQuoteMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto pt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        >
          <FaWhatsapp aria-hidden="true" className="text-sm" />
          Get Quote
        </a>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// HERO MESSAGE
// ---------------------------------------------------------------------------

const heroMessage =
  "Hi Prestige Dream Decor, I'm looking for custom-built furniture for my home. Please share the catalogue, price range and delivery timelines.";

// ---------------------------------------------------------------------------
// PAGE
// ---------------------------------------------------------------------------

const Home: React.FC = () => {
  return (
    <div className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── STICKY MOBILE CTA BAR ─────────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white shadow-2xl sm:hidden">
        <div className="px-4 pt-1.5 pb-0.5 text-center">
          <span className="text-[10px] text-slate-400">Custom sofas from <strong className="text-emerald-700">₹34,999</strong> · Delivered in 7–15 days</span>
        </div>
        <div className="flex items-center gap-2 px-4 pb-3">
          <a
            href={waLink(heroMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-sm font-bold text-white active:bg-emerald-700"
          >
            <FaWhatsapp aria-hidden="true" className="text-base" />
            Get Free Quote
          </a>
          <a
            href={`tel:${PHONE_E164}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-emerald-600 py-3 text-sm font-bold text-emerald-700 active:bg-emerald-50"
          >
            📞 Call Now
          </a>
        </div>
      </div>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-slate-950"
        aria-labelledby="hero-heading"
        style={{ minHeight: "100vh" }}
      >
        <div className="absolute inset-0">
          <Image
            src="/heroimage.jpeg"
            alt="Premium living room with designer sofa from Prestige Dream Decor"
            className="object-cover object-center opacity-70"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-slate-950/20" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950/70 to-transparent" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pt-24 pb-20 sm:pt-32 lg:flex-row lg:items-center lg:gap-16">

          {/* LEFT */}
          <div className="flex-1 max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5">
              <div className="flex items-center gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <FaStar key={i} className="text-amber-400" style={{ fontSize: "10px" }} aria-hidden="true" />
                ))}
              </div>
              <a
                href="https://www.google.com/maps/place/Prestige+Dream+Decor/@13.0683529,77.557453,17z/data=!4m8!3m7!1s0x3bae23614ecb9453:0xe40430f5c46bba6d!8m2!3d13.0683529!4d77.5600279!9m1!1b1!16s%2Fg%2F11wxsy25nf?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-amber-300 hover:text-amber-200 transition-colors"
              >
                4.9★ · 26 reviews on Google →
              </a>
            </div>

            <h1
              id="hero-heading"
              className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-[56px]"
            >
              Custom Sofas Built{" "}
              <span className="text-amber-400">Perfectly for Your Home</span>{" "}
              in Bangalore
            </h1>

            <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
              Tell us your room size, pick your fabric — we build, deliver, and install it{" "}
              <span className="font-semibold text-white">free anywhere in Bengaluru.</span>
            </p>

            <div className="mt-4 inline-flex flex-wrap items-center gap-x-4 gap-y-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5">
              <span className="text-sm font-bold text-emerald-400">Custom sofas from ₹21,999</span>
              <span className="hidden sm:block h-3 w-px bg-white/20" />
              <span className="text-xs text-slate-400">Delivered in 7–15 days · No hidden costs</span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={waLink(heroMessage)}
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
              {["Reply in under 30 min", "Free delivery & installation", "Easy EMI Options"].map(t => (
                <span key={t} className="flex items-center gap-1.5">
                  <FaRegCircleCheck className="text-emerald-400 shrink-0" aria-hidden="true" />
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {[
                { dot: "bg-emerald-400", label: "10+ years of expertise" },
                { dot: "bg-amber-400", label: "Factory-direct pricing" },
                { dot: "bg-sky-400", label: "Bengaluru studio" },
              ].map(b => (
                <div key={b.label} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                  <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${b.dot}`} />
                  {b.label}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Inline lead form */}
          <div className="w-full max-w-[360px] shrink-0 lg:ml-auto">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
              <div className="bg-emerald-600 px-5 py-4">
                <p className="text-sm font-bold text-white">⚡ Get your price in 30 minutes</p>
                <p className="mt-0.5 text-xs text-emerald-100">No commitment. Real answers from our team — not bots.</p>
              </div>
              <HeroLeadForm />
              <p className="px-5 pb-4 text-center text-[10px] text-slate-500">
                🔒 Your number is only used to send your sofa quote. We never share it.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── TRUST / BENEFITS ──────────────────────────────────────────── */}
      <section className="border-b border-slate-100 bg-white" aria-labelledby="benefits-heading">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2
            id="benefits-heading"
            className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            Studio-crafted furniture that feels as good as it looks
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-slate-500">
            Every sofa and bed is made to order in our Bengaluru studio with engineered frames, premium cushioning and careful finishing at every stage.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "10+ years of sofa craftsmanship", desc: "Specialised in premium sofas and upholstered furniture for Indian homes.", icon: <FaCouch className="text-amber-700" aria-hidden="true" /> },
              { title: "Easy EMI Options", desc: "Flexible payments for select orders.", icon: <FaRegCircleCheck className="text-amber-700" aria-hidden="true" /> },
              { title: "Free delivery & installation", desc: "Free delivery and professional installation in and around Bengaluru.", icon: <FaTruckFast className="text-amber-700" aria-hidden="true" /> },
              { title: "Curated performance fabrics", desc: "Stain-resistant, pet-friendly upholstery options tested for daily use.", icon: <FaShieldHalved className="text-amber-700" aria-hidden="true" /> },
            ].map(item => (
              <div key={item.title} className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-amber-100">{item.icon}</div>
                  <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                </div>
                <p className="text-xs leading-relaxed text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORY BROWSE STRIP ─────────────────────────────────────── */}
      <section className="border-b border-slate-100 bg-slate-50" aria-label="Browse categories">
        <div className="mx-auto max-w-6xl px-4 py-7">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Browse by category</p>
          <div className="flex flex-wrap gap-2">
            {catalogCategories.map(cat => (
              <Link
                key={cat.id}
                href={cat.slug}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:border-emerald-400 hover:text-emerald-700 transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT CATALOG ───────────────────────────────────────────── */}
      <section className="bg-white" aria-labelledby="collection-heading">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div id="collection" className="scroll-mt-24">

            <h2 id="collection-heading" className="text-3xl font-extrabold tracking-tight text-slate-900">
              Product catalog
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-500">
              Browse by category. Tap <strong className="text-slate-700">Get Quote</strong> on any product for pricing and delivery details.
            </p>

            {catalogCategories.map(category => (
              <div key={category.id} className="mt-14">

                {/* Category header with "View all" link */}
                <div className="flex items-end justify-between gap-4">
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                    {category.name}
                  </h3>
                  <Link
                    href={category.slug}
                    className="shrink-0 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700 hover:bg-emerald-100 transition-colors"
                  >
                    View all →
                  </Link>
                </div>

                {/* 3-product preview grid */}
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {category.products.map(product => (
                    <CatalogCard
                      key={product.id}
                      product={product}
                      getQuoteMessage={`Hi Prestige Dream Decor, I'm interested in: ${product.name}. Please share price, fabric options and delivery timeline.`}
                    />
                  ))}
                </div>

                {/* Per-category "See full range" CTA */}
                <div className="mt-4 flex justify-center">
                  <Link
                    href={category.slug}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:border-emerald-300 hover:text-emerald-700 transition-colors"
                  >
                    See full {category.name} range →
                  </Link>
                </div>

              </div>
            ))}

            {/* URGENCY STRIP */}
            <div className="mt-14 rounded-3xl border border-amber-200 bg-amber-50 px-5 py-5 sm:px-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-amber-100 text-amber-700">
                    <FaTruckFast aria-hidden="true" />
                  </div>
                  <p className="text-sm font-semibold text-amber-900">
                    Limited production slots available this week — share your requirements to lock in current pricing.
                  </p>
                </div>
                <WhatsAppCta
                  message="Hi Prestige Dream Decor, I'd like to know today's best offers and delivery timeline for new furniture."
                  className="shrink-0 sm:w-auto"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS & WHY CHOOSE US ──────────────────────────────── */}
      <section className="border-t border-slate-100 bg-slate-50" aria-labelledby="testimonials-heading">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="grid gap-12 lg:grid-cols-2">

            {/* Testimonials */}
            <div>
              <h2 id="testimonials-heading" className="text-3xl font-extrabold tracking-tight text-slate-900">
                Loved by families across Bangalore
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-500">
                Real homes, real stories. Customers trust Prestige Dream Decor for premium finishing, transparent pricing and on-time delivery.
              </p>
              <a
                href="https://www.google.com/maps/place/Prestige+Dream+Decor/@13.0683529,77.557453,17z/data=!4m8!3m7!1s0x3bae23614ecb9453:0xe40430f5c46bba6d!8m2!3d13.0683529!4d77.5600279!9m1!1b1!16s%2Fg%2F11wxsy25nf?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-xs font-semibold text-amber-800 hover:bg-amber-100 transition-colors"
              >
                <span className="flex items-center gap-0.5">
                  {[1,2,3,4,5].map(i => <FaStar key={i} className="text-amber-400" style={{ fontSize: "9px" }} aria-hidden="true" />)}
                </span>
                4.9 · 26 reviews on Google — See all →
              </a>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {testimonials.map(t => (
                  <figure key={t.name} className="flex flex-col gap-3 rounded-3xl border border-slate-100 bg-white p-4 shadow-sm">
                    <div className="flex items-start gap-3">
                      <Image
                        src={t.photoUrl}
                        alt={`Photo of ${t.name}`}
                        className="rounded-2xl object-cover"
                        width={44}
                        height={44}
                        loading="lazy"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <div>
                            <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                            <p className="text-[11px] text-slate-500">{t.city}, Bangalore</p>
                          </div>
                          <Stars rating={t.rating} />
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-xs leading-relaxed text-slate-600">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                  </figure>
                ))}
              </div>
            </div>

            {/* Why choose us */}
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                Why choose Prestige Dream Decor
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-500">
                We focus on the details that actually matter when you are investing in premium furniture for your home.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Made to your measurements", desc: "No generic sizes. Every piece is tailored to fit your room perfectly." },
                  { title: "Built for everyday use", desc: "Engineered frames and high-density foam that keep their shape for years." },
                  { title: "Guided over WhatsApp", desc: "From fabric samples to layouts, our team helps you make confident choices." },
                  { title: "Transparent process", desc: "Clear timelines, price breakdowns and regular production updates." },
                ].map(item => (
                  <div key={item.title} className="flex flex-col gap-2 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <FaRegCircleCheck aria-hidden="true" className="text-sm" />
                    </div>
                    <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                    <p className="text-xs leading-relaxed text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
              {/* CTA anchored below Why Choose Us */}
              <div className="mt-6">
                <WhatsAppCta
                  label="Get Free Quote on WhatsApp"
                  message={heroMessage}
                  className="w-full sm:w-auto"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── MID-PAGE CTA BAND ─────────────────────────────────────────── */}
      <section className="bg-emerald-700" aria-label="Call to action">
        <div className="mx-auto max-w-5xl px-4 py-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Ready to get started?</p>
          <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
            Get your custom furniture price in 30 minutes
          </h2>
          <p className="mt-2 text-sm text-emerald-100">
            No showroom visit needed. Share your room size on WhatsApp — we&apos;ll quote, design and deliver.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={waLink("Hi Prestige Dream Decor, I'd like a quote for custom furniture for my home. Please guide me.")}
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
          <p className="mt-4 text-[11px] text-emerald-300">Free delivery &amp; installation · No pressure · Reply in &lt;30 min</p>
        </div>
      </section>

      {/* ── FAQ SECTION ───────────────────────────────────────────────── */}
      <section className="border-t border-slate-100 bg-white" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 py-20">
          <div className="mb-10 text-center">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-600">Common Questions</p>
            <h2 id="faq-heading" className="text-3xl font-extrabold tracking-tight text-slate-900">
              Everything you want to know before ordering
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              We answer these every day on WhatsApp — here they are upfront.
            </p>
          </div>

          <div className="divide-y divide-slate-100">
            {[
              {
                q: "How much does a custom sofa cost in Bangalore?",
                a: "Custom sofas start from ₹34,999, depending on the size, fabric quality and design you choose. Most orders fall between ₹34,999 and ₹1,20,999. Share your room size and requirements on WhatsApp and we'll send you a precise quote within 30 minutes.",
              },
              {
                q: "How long does it take to manufacture and deliver?",
                a: "Most orders are ready and delivered within 7–15 working days after confirmation, depending on the complexity of the design. Simple sofas are often completed in 7–10 days. We share production updates along the way and schedule delivery once your furniture is ready.",
              },
              {
                q: "Which sofa is best for small apartments?",
                a: "Compact 3-seater sofas and L-shape sofas with storage are popular choices for smaller living rooms. Our team helps you select a design that fits your room dimensions perfectly.",
              },
              {
                q: "Do you offer free delivery and installation in Bangalore?",
                a: "Yes. We provide free delivery and professional installation for all orders within Bengaluru. Our team ensures everything is properly placed and assembled in your home.",
              },
              {
                q: "Can I customize the size, fabric, and color?",
                a: "Absolutely. Every piece we make is fully customizable — size, fabric material, colour, cushioning, and design to match your home interiors.",
              },
              {
                q: "Can I see fabric samples before ordering?",
                a: "Yes. You can visit our Vidyaranyapura showroom to check fabrics in person. If visiting isn't convenient, we share fabric options and photos over WhatsApp.",
              },
              {
                q: "Do you make dining tables, beds, and recliners too?",
                a: "Yes — besides sofas, we also make custom dining tables, upholstered beds with storage, and premium recliners. All built to order in our Bengaluru studio.",
              },
              {
                q: "How do I start ordering?",
                a: "Simply send us a message on WhatsApp with your room photo, approximate dimensions, and preferred design. Our team will recommend options and share a quote quickly.",
              },
            ].map((item, i) => (
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

          {/* FAQ bottom CTA */}
          <div className="mt-10 rounded-3xl border border-emerald-100 bg-emerald-50 px-6 py-6 text-center">
            <p className="text-sm font-semibold text-slate-800">Still have a question?</p>
            <p className="mt-1 text-xs text-slate-500">Ask us directly — we reply in under 30 minutes during business hours.</p>
            <a
              href={waLink("Hi Prestige Dream Decor, I have a question about ordering furniture.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow hover:bg-emerald-500 transition-colors"
            >
              <FaWhatsapp aria-hidden="true" />
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── SHOWROOM SECTION ──────────────────────────────────────────── */}
      <section id="showroom" className="bg-white scroll-mt-24" aria-labelledby="showroom-heading">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="grid gap-10 lg:grid-cols-2">

            <div>
              <h2 id="showroom-heading" className="text-3xl font-extrabold tracking-tight text-slate-900">
                Visit our Bengaluru showroom
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-500">
                Experience the comfort, fabrics and build quality in person before you decide. Shortlist designs online and walk in with confidence.
              </p>
              <div className="mt-6 space-y-4 text-sm text-slate-700">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Address</p>
                  <p className="mt-1">{ADDRESS}</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Visiting hours</p>
                  <p className="mt-1">Monday–Sunday, 10:30 AM – 8:30 PM</p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
                  <WhatsAppCta
                    label="Get Directions on WhatsApp"
                    message="Hi Prestige Dream Decor, please share your Google Maps location and best time to visit the showroom."
                    className="w-full sm:w-auto"
                  />
                  <a
                    href={`tel:${PHONE_E164}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:border-emerald-400 hover:text-emerald-700 transition-colors"
                  >
                    📞 Call the showroom
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
  <div className="relative h-64 overflow-hidden rounded-3xl border border-slate-100 bg-slate-100 sm:h-72">
    {/* The Map Iframe */}
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.486050432547!2d77.5574476106568!3d13.068352887202815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae23614ecb9453%3A0xe40430f5c46bba6d!2sPrestige%20Dream%20Decor!5e0!3m2!1sen!2sin!4v1775233871366!5m2!1sen!2sin"
      className="absolute inset-0 h-full w-full border-0"
      
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Prestige Dream Decor Location"
    ></iframe>

    {/* Location Overlay Badge */}
    <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl bg-slate-900/90 px-4 py-3 text-xs text-white">
      <span>Prestige Dream Decor Showroom, Vidyaranyapura</span>
      <span className="hidden sm:inline-flex items-center gap-1 text-emerald-400">
        <FaWhatsapp aria-hidden="true" />
        Share live location
      </span>
    </div>
  </div>

  {/* Travel Info Box */}
  <div className="rounded-3xl border border-slate-100 bg-slate-50 px-5 py-4 text-xs text-slate-600">
    <p className="font-semibold text-slate-900">Travelling from out of Bengaluru?</p>
    <p className="mt-1">
      Share your travel dates on WhatsApp and we'll help you plan a focused showroom visit with all your shortlisted designs ready.
    </p>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* Bottom padding for mobile sticky bar */}
      <div className="h-20 sm:hidden" aria-hidden="true" />

    </div>
  );
};

export default Home;