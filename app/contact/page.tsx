 "use client";

import React from "react";
import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaClock,
  FaArrowRight,
  FaCouch,
  FaIndustry,
  FaRegCircleCheck,
} from "react-icons/fa6";

const PHONE_E164 = "+917975709648";
const EMAIL = "prestigedreamdecor@gmail.com";
const ADDRESS =
  "1001/52/1 Main Road, Nanjappa - Thindlu Rd, Doddabommasandra, Vidyaranyapura, Bengaluru, Karnataka 560097";
const BUSINESS_HOURS = "Monday – Sunday, 10:30 AM – 8:30 PM";

function waLink(message: string) {
  const digitsOnly = PHONE_E164.replace(/[^\d]/g, "");
  return `https://wa.me/${digitsOnly}?text=${encodeURIComponent(message)}`;
}

const defaultInquiryMessage =
  "Hi Prestige Dream Decor, I’d like to discuss a custom sofa for my home. Please help me with options, pricing and delivery timeline.";

const sofaTypes = [
  "L-Shape Sofa",
  "3-Seater / 2-Seater Sofa",
  "Sofa Cum Bed",
  "Recliner Sofa",
  "Sectional / U-Shape Sofa",
  "Bedroom Seating / Bench",
  "Other (Tell us in the message)",
];

function WhatsAppPrimaryButton({
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
        "inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg ring-2 ring-emerald-400/40",
        "hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-white",
        className,
      ].join(" ")}
    >
      <FaWhatsapp aria-hidden="true" className="text-base" />
      {label}
    </a>
  );
}

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const name = (formData.get("name") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim();
    const type = (formData.get("sofaType") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();

    const lines = [
      "Hi Prestige Dream Decor, I’d like a quick sofa consultation.",
      name ? `Name: ${name}` : null,
      phone ? `Phone: ${phone}` : null,
      type ? `Sofa type interested in: ${type}` : null,
      message ? `Details: ${message}` : null,
    ].filter(Boolean);

    const fullMessage = lines.join("\n");
    const url = waLink(fullMessage);

    if (typeof window !== "undefined") {
      window.open(url, "_blank");
    }

    e.currentTarget.reset();
  };

  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    ADDRESS
  )}&output=embed`;

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    ADDRESS
  )}`;

  return (
    <div className="bg-white text-slate-900">
      {/* HEADER SECTION */}
      <section className="border-b border-slate-100 bg-slate-50/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:py-14 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-700">
              Contact Prestige Dream Decor
            </p>
            <h1 className="mt-5 text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Let&apos;s Design Your Perfect Sofa
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-sm sm:text-base leading-relaxed text-slate-600">
              Share your room photos, size and budget on WhatsApp or drop into our Bengaluru
              showroom. Our team will guide you with layouts, fabrics and pricing — no pressure, just
              clear, friendly advice.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsAppPrimaryButton
                label="Chat on WhatsApp – Free Consultation"
                message={defaultInquiryMessage}
                className="w-full sm:w-auto"
              />
              <div className="text-xs text-slate-500">
                <p>Or call us on</p>
                <a
                  href={`tel:${PHONE_E164}`}
                  className="font-semibold text-slate-900 hover:text-emerald-700"
                >
                  +91 79757 09648
                </a>
              </div>
            </div>
          </div>

          <div className="w-full max-w-md lg:ml-auto">
            <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100">
              <div className="border-b border-slate-100 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Quick snapshot
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  WhatsApp, call or visit — whichever is easiest today.
                </p>
              </div>
              <div className="grid gap-4 px-5 py-5 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                    <FaWhatsapp aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      WhatsApp
                    </p>
                    <a
                      href={waLink(defaultInquiryMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block font-semibold text-slate-900 hover:text-emerald-700"
                    >
                      +91 79757 09648
                    </a>
                    <p className="mt-1 text-xs text-slate-500">
                      Fastest way to get layouts, fabrics &amp; pricing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-amber-300">
                    <FaLocationDot aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Showroom
                    </p>
                    <p className="mt-1 text-sm text-slate-900">
                      Vidyaranyapura, Bengaluru
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      See comfort, fabrics and finish in person before you decide.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-800">
                    <FaClock aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Business hours
                    </p>
                    <p className="mt-1 text-sm text-slate-900">{BUSINESS_HOURS}</p>
                    <p className="mt-1 text-xs text-slate-500">
                      Planning a visit? Message us on WhatsApp so we can keep samples ready.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION BLOCK */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.1fr,1.2fr] lg:items-start">
            <div className="space-y-4 rounded-3xl bg-slate-50/80 p-5 shadow-xs ring-1 ring-slate-100">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">
                Contact information
              </h2>
              <p className="text-sm text-slate-600">
                Reach out however you prefer — WhatsApp, call, or email. We&apos;ll help you plan the
                right sofa for your space.
              </p>
              <div className="mt-3 grid gap-4 text-sm text-slate-800">
                <div className="flex items-start gap-3">
                  <FaPhone className="mt-1 text-emerald-600" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Phone / WhatsApp
                    </p>
                    <a
                      href={`tel:${PHONE_E164}`}
                      className="mt-1 block font-semibold hover:text-emerald-700"
                    >
                      +91 79757 09648
                    </a>
                    <a
                      href={waLink(defaultInquiryMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
                    >
                      <FaWhatsapp aria-hidden="true" className="text-sm" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaEnvelope className="mt-1 text-slate-700" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Email
                    </p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="mt-1 block text-sm font-semibold text-slate-900 hover:text-emerald-700"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaLocationDot className="mt-1 text-slate-900" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Showroom address
                    </p>
                    <p className="mt-1 text-sm text-slate-900">{ADDRESS}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaClock className="mt-1 text-slate-700" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Business hours
                    </p>
                    <p className="mt-1 text-sm text-slate-900">{BUSINESS_HOURS}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* QUICK INQUIRY FORM */}
            <div className="rounded-3xl bg-slate-950 text-slate-50 shadow-xl">
              <div className="border-b border-slate-800 px-5 py-4 sm:px-6">
                <h2 className="text-lg sm:text-xl font-bold tracking-tight">
                  Quick inquiry form
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-300">
                  Share a few details and we&apos;ll reply on WhatsApp with options and pricing. No
                  long forms, no spam.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4 px-5 py-5 sm:px-6 sm:py-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium uppercase tracking-[0.16em] text-slate-300"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className="h-10 w-full rounded-xl border border-slate-800 bg-slate-900 px-3 text-sm text-slate-50 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      placeholder="Full name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="phone"
                      className="block text-xs font-medium uppercase tracking-[0.16em] text-slate-300"
                    >
                      Phone number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      className="h-10 w-full rounded-xl border border-slate-800 bg-slate-900 px-3 text-sm text-slate-50 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      placeholder="WhatsApp number"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="sofaType"
                    className="block text-xs font-medium uppercase tracking-[0.16em] text-slate-300"
                  >
                    Sofa type interested in
                  </label>
                  <select
                    id="sofaType"
                    name="sofaType"
                    className="h-10 w-full rounded-xl border border-slate-800 bg-slate-900 px-3 text-sm text-slate-50 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select an option (optional)
                    </option>
                    {sofaTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium uppercase tracking-[0.16em] text-slate-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    placeholder="Room size, layout, preferred style or any questions…"
                  />
                </div>

                <div className="space-y-2">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg ring-2 ring-emerald-400/50 transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-950"
                  >
                    <FaWhatsapp aria-hidden="true" />
                    Submit &amp; open WhatsApp
                  </button>
                  <p className="text-[11px] text-slate-400">
                    Your details are only used to respond to your inquiry. We usually reply within
                    business hours on the same day.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAP EMBED SECTION */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.3fr,1fr] lg:items-center">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-3xl border border-slate-100 bg-slate-100 shadow-sm">
                <iframe
                  src={mapEmbedUrl}
                  title="Prestige Dream Decor showroom location on Google Maps"
                  className="h-64 w-full border-0 sm:h-80"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Map showing the location of Prestige Dream Decor showroom in Bengaluru"
                />
              </div>
            </div>
            <div className="space-y-4 rounded-3xl bg-slate-50/90 p-5 shadow-xs ring-1 ring-slate-100">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">
                Visit our showroom
              </h2>
              <p className="text-sm text-slate-600">
                See comfort, fabrics and finishes in person. Shortlist designs online and walk in
                with clarity on what will suit your room.
              </p>
              <div className="space-y-2 text-sm text-slate-800">
                <p className="font-semibold">Prestige Dream Decor Showroom</p>
                <p>{ADDRESS}</p>
                <p className="text-xs text-slate-500">Landmark: Near Vidyaranyapura</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 sm:w-auto"
                >
                  <FaArrowRight aria-hidden="true" />
                  Get Directions
                </a>
                <a
                  href={waLink(
                    "Hi Prestige Dream Decor, please share your Google Maps location and best time to visit the showroom."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-500/70 bg-white px-5 py-2.5 text-sm font-semibold text-emerald-700 shadow-sm hover:bg-emerald-50 sm:w-auto"
                >
                  <FaWhatsapp aria-hidden="true" />
                  WhatsApp for live location
                </a>
              </div>
              <p className="text-[11px] text-slate-500">
                Visiting from out of Bengaluru? Share your travel dates and we&apos;ll line up
                fabric books and layout options in advance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHATSAPP CTA SECTION */}
      <section className="border-b border-slate-100 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <div className="grid gap-6 rounded-3xl bg-gradient-to-r from-emerald-600 to-emerald-500 px-6 py-8 text-white shadow-xl sm:grid-cols-[1.6fr,1.1fr] sm:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-100">
                WhatsApp first, showroom next
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">
                Chat with us instantly
              </h2>
              <p className="mt-3 text-sm sm:text-base text-emerald-50">
                Share a quick message and we&apos;ll help you choose the right sofa style, size and
                fabric before you even step into the showroom.
              </p>
            </div>
            <div className="space-y-3">
              <WhatsAppPrimaryButton
                label="Chat with us instantly"
                message={defaultInquiryMessage}
                className="w-full"
              />
              <p className="text-[11px] text-emerald-100">
                Response within business hours. No automated bots — you chat directly with our
                team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST REMINDER SECTION */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <div className="rounded-3xl bg-slate-50/90 p-6 shadow-xs ring-1 ring-slate-100">
            <div className="grid gap-5 text-sm text-slate-800 sm:grid-cols-3">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <FaCouch aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">10+ Years Experience</p>
                  <p className="mt-1 text-xs text-slate-600">
                    A decade of crafting sofas and custom furniture that last through moves and
                    makeovers.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <FaIndustry aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">In-house Manufacturing</p>
                  <p className="mt-1 text-xs text-slate-600">
                    Designed, built and finished in our own unit — not outsourced to unknown
                    workshops.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <FaRegCircleCheck aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Free Consultation</p>
                  <p className="mt-1 text-xs text-slate-600">
                    Share your space and budget — we&apos;ll suggest layouts and fabrics at no
                    extra cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
