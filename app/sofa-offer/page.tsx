import type { Metadata } from "next";
import Image from "next/image";
import {
  FaWhatsapp,
  FaStar,
  FaIndustry,
  FaTruckFast,
  FaShieldHalved,
  FaHandHoldingHeart,
  FaRegCircleCheck,
  FaCouch,
} from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Sofa Offer in Bengaluru | Prestige Dream Decor",
  description:
    "Factory-price sofas & custom furniture in Bengaluru. EMI options, fast delivery, warranty, and real customer testimonials. Get price instantly on WhatsApp.",
};

const PHONE_E164 = "+917975709648";
const EMAIL = "prestigedreamdecor@gmail.com";
const ADDRESS =
  "1001/52/1 Main Road, Nanjappa - Thindlu Rd, Doddabommasandra, Vidyaranyapura, Bengaluru, Karnataka 560097";

function waLink(message: string) {
  const digitsOnly = PHONE_E164.replace(/[^\d]/g, "");
  return `https://wa.me/${digitsOnly}?text=${encodeURIComponent(message)}`;
}

type Product = {
  id: string;
  title: string;
  priceRange: string;
  imageUrl: string;
  imageAlt: string;
  highlights: string[];
};

const products: Product[] = [
  {
    id: "lshape",
    title: "L-Shape Sofa (Custom Size)",
    priceRange: "₹38,999 – ₹89,999",
    imageUrl: "/signature-sofa.png",
    imageAlt: "Modern L-shape sofa in a warm living room",
    highlights: ["Custom layout", "Premium foam", "Fabric/Leatherette options"],
  },
  {
    id: "3seater",
    title: "3-Seater Sofa",
    priceRange: "₹19,999 – ₹54,999",
    imageUrl: "/three-seater.webp",
    imageAlt: "Minimal 3-seater sofa in neutral tones",
    highlights: ["Comfort seating", "Multiple colors", "Easy maintenance"],
  },
  {
    id: "sofacumbed",
    title: "Sofa Cum Bed",
    priceRange: "₹24,999 – ₹64,999",
    imageUrl: "/redsofacumbed.webp",
    imageAlt: "Convertible sofa bed in a modern apartment",
    highlights: ["Space-saving", "Guest-ready", "Durable mechanism"],
  },
  {
    id: "recliner",
    title: "Recliner Sofa (Single/Double)",
    priceRange: "₹12,999 – ₹79,999",
    imageUrl: "/reclinersofa.webp",
    imageAlt: "Recliner chair and sofa set with warm lighting",
    highlights: ["Relax mode", "Soft touch fabric", "Sturdy frame"],
  },
  {
    id: "sectional",
    title: "Sectional Sofa Set",
    priceRange: "₹49,999 – ₹1,29,999",
    imageUrl: "/customchocolate.webp",
    imageAlt: "Large sectional sofa with cushions",
    highlights: ["Modular seating", "Family size", "Made to order"],
  },
  {
    id: "custombed",
    title: "Custom Upholstered Bed",
    priceRange: "₹22,999 – ₹74,999",
    imageUrl: "/upholdbed.jpeg",
    imageAlt: "Upholstered bed with warm beige palette",
    highlights: ["Bengaluru delivery", "Storage options", "Premium upholstery"],
  },
  {
    id: "dining",
    title: "Dining Set (4/6 Seater)",
    priceRange: "₹16,999 – ₹69,999",
    imageUrl: "/6seaterdining.webp", 
    imageAlt: "Dining table set in a bright home",
    highlights: ["Solid build", "Modern finish", "Custom sizes"],
  },
  {
    id: "customsofa",
    title: "Fully Custom Sofa (Your Design)",
    priceRange: "Share your budget on WhatsApp",
    imageUrl: "/modularcustom.webp",
    imageAlt: "Designer sofa in an elegant living room",
    highlights: ["Any size", "Any fabric", "Factory-direct pricing"],
  },
];

type Testimonial = {
  name: string;
  area: string;
  rating: 5 | 4;
  photoUrl: string;
  quote: string;
  purchased: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Ananya R.",
    area: "Vidyaranyapura",
    rating: 5,
    photoUrl: "/testimonial-ananya.png",
    quote:
      "We got an L-shape sofa made to exact measurements. The finishing looks premium and delivery was quicker than promised.",
    purchased: "Custom L-Shape Sofa",
  },
  {
    name: "Sanjay K.",
    area: "Hebbal",
    rating: 5,
    photoUrl: "/testimonial-sanjay.png",
    quote:
      "Factory pricing is real. They helped us pick a fabric that’s easy to clean. Very comfortable and solid frame.",
    purchased: "3-Seater Sofa",
  },
  {
    name: "Meera S.",
    area: "Yelahanka",
    rating: 5,
    photoUrl: "/testimonial-meera.png",
    quote:
      "Loved the sofa cum bed quality. Installation was smooth and after-sales support was prompt.",
    purchased: "Sofa Cum Bed",
  },
  {
    name: "Rahul P.",
    area: "HBR Layout",
    rating: 4,
    photoUrl: "/testimonial-rahul.png",
    quote:
      "Great value for money. They kept us updated on the build and delivered locally without hassle.",
    purchased: "Sectional Sofa Set",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar
          key={i}
          className={i < rating ? "text-amber-400" : "text-stone-200"}
          aria-hidden="true"
        />
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
        "inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-base font-semibold text-white shadow-sm",
        "hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-white",
        className,
      ].join(" ")}
    >
      <FaWhatsapp aria-hidden="true" className="text-lg" />
      {label}
    </a>
  );
}

export default function SofaOfferPage() {
  const heroMessage =
    "Hi Prestige Dream Decor, I’m in Bengaluru. I want factory-price sofa options. Please share catalog + best price and delivery timeline.";

  return (
    <div className="bg-white text-stone-900">
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="sofa-offer-hero-heading"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-50 via-white to-white" />
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-16 sm:pb-20 sm:pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h1
                id="sofa-offer-hero-heading"
                className="mt-4 text-balance text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl"
              >
                Premium Sofas & Custom Furniture in Bengaluru —{" "}
                <span className="text-emerald-700">made to fit your home</span>
              </h1>
              <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-stone-700">
                Get the exact size, comfort, and finish you want — with factory-direct pricing, EMI
                options, and fast local delivery across Bengaluru.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <WhatsAppCta message={heroMessage} className="w-full sm:w-auto" />
                <a
                  href="#collection"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-stone-200 bg-white px-5 py-3 text-base font-semibold text-stone-800 shadow-sm hover:bg-stone-50 sm:w-auto"
                >
                  View Collection
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-50 via-white to-emerald-50" />
                <div className="relative p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-stone-800">
                        Instant quote on WhatsApp
                      </p>
                      <p className="mt-1 text-sm text-stone-600">
                        Share room size + style preference. We’ll reply with options & price range.
                      </p>
                    </div>
                    <div className="rounded-2xl bg-emerald-600/10 p-3 text-emerald-700">
                      <FaCouch aria-hidden="true" className="text-2xl" />
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {[
                      "Pick size, fabric & comfort",
                      "Get factory price + delivery timeline",
                      "Confirm with EMI / advance",
                      "Delivery + installation in Bengaluru",
                    ].map((t) => (
                      <div
                        key={t}
                        className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 ring-1 ring-stone-200"
                      >
                        <span className="grid h-8 w-8 place-items-center rounded-xl bg-emerald-600 text-white">
                          <FaRegCircleCheck aria-hidden="true" />
                        </span>
                        <span className="text-sm font-medium text-stone-800">{t}</span>
                      </div>
                    ))}
                  </div>

                  <p className="mt-5 text-center text-xs text-stone-500">
                    Tap <span className="font-semibold">Get Price on WhatsApp</span> above to start
                    your quote. We’ll guide you over chat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust points */}
      <section
        className="border-y border-stone-100 bg-white"
        aria-labelledby="sofa-offer-trust-heading"
      >
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                title: "Factory Pricing",
                desc: "Direct manufacturing. Transparent quotes.",
                icon: <FaIndustry className="text-emerald-700" aria-hidden="true" />,
              },
              {
                title: "EMI Options",
                desc: "Flexible payments for select orders.",
                icon: <FaRupeeSign className="text-emerald-700" aria-hidden="true" />,
              },
              {
                title: "Fast Delivery",
                desc: "Made-to-order with Bengaluru delivery.",
                icon: <FaTruckFast className="text-emerald-700" aria-hidden="true" />,
              },
              {
                title: "Warranty",
                desc: "Peace of mind on structure & workmanship.",
                icon: <FaShieldHalved className="text-emerald-700" aria-hidden="true" />,
              },
              {
                title: "Testimonials",
                desc: "Real customer feedback you can trust.",
                icon: <FaHandHoldingHeart className="text-emerald-700" aria-hidden="true" />,
              },
            ].map((p) => (
              <div
                key={p.title}
                className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-stone-200"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-600/10">
                    {p.icon}
                  </div>
                  <p className="font-bold text-stone-900">{p.title}</p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section
        className="bg-white"
        aria-labelledby="sofa-offer-collection-heading"
      >
        <div className="mx-auto max-w-6xl px-4 py-16">
          {/* Product grid */}
          <div id="collection" className="scroll-mt-24">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2
                  id="sofa-offer-collection-heading"
                  className="text-3xl font-extrabold tracking-tight text-stone-900"
                >
                  Popular picks in Bengaluru
                </h2>
                <p className="mt-2 max-w-2xl text-stone-600">
                  Tap any product to get a WhatsApp quote. We’ll ask a few quick questions and share
                  options that match your size & budget.
                </p>
              </div>
              <div className="mt-2 sm:mt-0">
                <WhatsAppCta
                  message="Hi Prestige Dream Decor, please share your best sofa prices and latest collection for Bengaluru delivery."
                  className="w-full sm:w-auto"
                />
              </div>
            </div>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {products.map((p) => {
                const msg = `Hi Prestige Dream Decor, I’m in Bengaluru. Please share best price, delivery timeline, and fabric options for: ${p.title}. Budget/Range: ${p.priceRange}.`;
                return (
                  <div
                    key={p.id}
                    className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                      <Image
                        src={p.imageUrl}
                        alt={p.imageAlt}
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-stone-800 backdrop-blur">
                            Bengaluru delivery
                          </span>
                          <span className="rounded-full bg-emerald-600/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                            Factory price
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-bold text-stone-900">{p.title}</h3>
                          <p className="mt-1 text-sm font-semibold text-emerald-700">
                            {p.priceRange}
                          </p>
                        </div>
                      </div>

                      <ul className="mt-4 grid gap-2 text-sm text-stone-600">
                        {p.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-2">
                            <span className="grid h-5 w-5 place-items-center rounded-md bg-emerald-600/10 text-emerald-700">
                              <FaRegCircleCheck aria-hidden="true" className="text-sm" />
                            </span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5">
                        <a
                          href={waLink(msg)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
                        >
                          <FaWhatsapp aria-hidden="true" />
                          Get Price on WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Urgency strip */}
          <div className="mt-16 rounded-3xl border border-amber-200 bg-amber-50 px-4 py-5 sm:px-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-semibold text-amber-900">
                Limited delivery slots this week in Bengaluru — get factory price today.
              </p>
              <WhatsAppCta
                message="Hi Prestige Dream Decor, I saw your sofa offer page. Please share today’s best factory-price sofa options for Bengaluru delivery."
                className="w-full sm:w-auto"
              />
            </div>
          </div>

          {/* Testimonials */}
          <div
            id="testimonials"
            className="mt-16 scroll-mt-24"
            aria-labelledby="sofa-offer-testimonials-heading"
          >
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2
                  id="sofa-offer-testimonials-heading"
                  className="text-3xl font-extrabold tracking-tight text-stone-900"
                >
                  Real customers. Real comfort.
                </h2>
                <p className="mt-2 max-w-2xl text-stone-600">
                  Customers across Bengaluru choose Prestige Dream Decor for on-time delivery,
                  premium finishing, and transparent pricing.
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              {testimonials.map((t) => (
                <figure
                  key={`${t.name}-${t.area}`}
                  className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <Image
                      src={t.photoUrl}
                      alt={`Photo of ${t.name}`}
                      className="rounded-2xl object-cover"
                      width={56}
                      height={56}
                      loading="lazy"
                    />
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <p className="font-bold text-stone-900">{t.name}</p>
                          <p className="text-sm text-stone-600">{t.area}, Bengaluru</p>
                        </div>
                        <Stars rating={t.rating} />
                      </div>
                      <p className="mt-2 text-sm font-semibold text-emerald-700">
                        Purchased: {t.purchased}
                      </p>
                    </div>
                  </div>
                  <blockquote className="mt-4 text-pretty text-stone-700">
                    “{t.quote}”
                  </blockquote>
                </figure>
              ))}
            </div>

            <div className="mt-10 rounded-3xl bg-gradient-to-r from-emerald-700 to-emerald-600 p-[1px]">
              <div className="rounded-3xl bg-white p-6 sm:p-7">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-lg font-extrabold text-stone-900">
                      Want the best price today?
                    </p>
                    <p className="mt-1 text-sm text-stone-600">
                      Message us your room size + preferred style. We’ll respond with 3–5 options.
                    </p>
                  </div>
                  <WhatsAppCta
                    message="Hi Prestige Dream Decor, I’m in Bengaluru. Please share 3–5 best sofa options with price + delivery timeline. My preferred style is modern."
                    className="w-full sm:w-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Why choose us */}
          <div className="mt-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-stone-900">
              Why choose Prestige Dream Decor
            </h2>
            <p className="mt-2 max-w-2xl text-stone-600">
              Minimal, no fluff — just the things that matter when buying a sofa in Bengaluru.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Trusted local delivery",
                  desc: "Bengaluru delivery + installation support.",
                },
                {
                  title: "Built for daily use",
                  desc: "Strong frame, premium foam, neat finishing.",
                },
                {
                  title: "Clear communication",
                  desc: "Quotes, timelines, and updates on WhatsApp.",
                },
              ].map((x) => (
                <div
                  key={x.title}
                  className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm"
                >
                  <p className="font-bold text-stone-900">{x.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{x.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Page footer contact */}
          <div className="mt-16 rounded-3xl border border-stone-200 bg-stone-50 p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-xl">
                <p className="text-xl font-extrabold text-stone-900">
                  Visit or message us for a quick quote
                </p>
                <p className="mt-2 text-sm text-stone-700">
                  Serving Bengaluru customers looking for sofas and custom furniture — with
                  factory-direct pricing and reliable delivery.
                </p>
                <div className="mt-4">
                  <WhatsAppCta
                    message="Hi Prestige Dream Decor, I’d like a quote. I’m in Bengaluru. Please share options based on my room size and budget."
                    className="w-full sm:w-auto"
                  />
                </div>
              </div>

              <div className="grid gap-3 text-sm text-stone-700">
                <div>
                  <p className="text-xs font-semibold tracking-widest text-stone-500">ADDRESS</p>
                  <p className="mt-1">{ADDRESS}</p>
                </div>
                <div className="grid gap-1">
                  <p className="text-xs font-semibold tracking-widest text-stone-500">PHONE</p>
                  <a className="font-semibold text-stone-900 hover:underline" href={`tel:${PHONE_E164}`}>
                    {PHONE_E164}
                  </a>
                  <p className="text-xs font-semibold tracking-widest text-stone-500">EMAIL</p>
                  <a
                    className="font-semibold text-stone-900 hover:underline"
                    href={`mailto:${EMAIL}`}
                  >
                    {EMAIL}
                  </a>
                  <p className="text-xs font-semibold tracking-widest text-stone-500">WHATSAPP</p>
                  <a
                    className="inline-flex items-center gap-2 font-semibold text-emerald-700 hover:underline"
                    href={waLink(
                      "Hi Prestige Dream Decor, I’m in Bengaluru. Please share sofa prices and available designs."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp aria-hidden="true" />
                    Message on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
