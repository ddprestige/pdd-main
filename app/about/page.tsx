import React from "react";
import {
  FaRulerCombined,
  FaCouch,
  FaScrewdriverWrench,
  FaTruckFast,
  FaGem,
  FaRupeeSign,
  FaHeadset,
  FaRegCircleCheck,
  FaStore,
  FaIndustry,
  FaWhatsapp,
} from "react-icons/fa6";

const PHONE_E164 = "+917975709648";
const ADDRESS =
  "1001/52/1 Main Road, Nanjappa - Thindlu Rd, Doddabommasandra, Vidyaranyapura, Bengaluru, Karnataka 560097";

function waLink(message: string) {
  const digitsOnly = PHONE_E164.replace(/[^\d]/g, "");
  return `https://wa.me/${digitsOnly}?text=${encodeURIComponent(message)}`;
}

function WhatsAppInlineButton({
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
        "inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg ring-2 ring-emerald-400/40",
        "hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-white",
        className,
      ].join(" ")}
    >
      <FaWhatsapp aria-hidden="true" className="text-base" />
      {label}
    </a>
  );
}

const visitShowroomMessage =
  "Hi Prestige Dream Decor, I’d like to visit your showroom and see your custom sofas and furniture. Please share the best time to visit and location.";

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white text-slate-900">
      {/* HERO */}
      <section className="border-b border-slate-100">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:py-20 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-700">
              About Prestige Dream Decor
            </p>
            <h1 className="mt-5 text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Crafting Comfort. Designing Homes.
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-sm sm:text-base leading-relaxed text-slate-600">
              Prestige Dream Decor is a Bengaluru‑based custom sofa and furniture studio. Every
              piece is built to order in our own factory — measured for your home, upholstered in
              premium fabrics, and finished by craftsmen who treat each sofa like it&apos;s going
              into their own living room.
            </p>
          </div>

          <div className="w-full max-w-md lg:ml-auto">
            <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-slate-50/60 p-5 shadow-sm">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-100/70 blur-2xl" />
              <div className="absolute -bottom-14 -left-16 h-40 w-40 rounded-full bg-amber-100/60 blur-3xl" />
              <div className="relative space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Premium custom furniture studio
                </p>
                <p className="text-sm font-semibold text-slate-900">
                  Built in our own factory. Designed around your home. Installed by our in‑house
                  team.
                </p>
                <div className="grid gap-3 text-xs text-slate-600 sm:grid-cols-2">
                  <div className="flex items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-xs ring-1 ring-slate-100">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <FaCouch aria-hidden="true" />
                    </span>
                    <span>Specialised in custom sofas &amp; upholstered furniture.</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-xs ring-1 ring-slate-100">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                      <FaIndustry aria-hidden="true" />
                    </span>
                    <span>Own manufacturing unit with strict quality checks.</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-xs ring-1 ring-slate-100">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-amber-300">
                      <FaRulerCombined aria-hidden={true} />
                    </span>
                    <span>Made‑to‑measure designs for every room layout.</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-xs ring-1 ring-slate-100">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <FaRegCircleCheck aria-hidden="true" />
                    </span>
                    <span>Transparent timelines, installation and after‑sales support.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                Our Story
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-700">
                Prestige Dream Decor began as a small workshop in Bengaluru, working with families
                who couldn&apos;t find sofas that truly fit their homes. Standard sizes left gaps,
                fabrics didn&apos;t suit everyday Indian use, and mass‑produced frames simply
                didn&apos;t last.
              </p>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-700">
                Instead of selling from a catalogue, we chose the slower path — understanding how
                people actually live in their spaces and building pieces around that. Over the
                years, we&apos;ve grown into a dedicated studio with an in‑house factory, but the
                way we work hasn&apos;t changed: measured on site, built from the frame up, and
                finished by craftsmen who know their work is going into a real family&apos;s home.
              </p>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-700">
                Being based in Bengaluru means we are close to our customers. You can walk into our
                showroom, speak directly with the team that will build your sofa, and visit again
                years later when you&apos;re ready for your next room. No franchises, no layers of
                middlemen — just a local team that takes responsibility for every stitch and joint.
              </p>
            </div>
            <div className="space-y-4 rounded-3xl bg-slate-50/80 p-6 shadow-xs ring-1 ring-slate-100">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                What this means for you
              </p>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <FaRegCircleCheck className="text-[11px]" aria-hidden="true" />
                  </span>
                  <span>Furniture made to your dimensions, not adjusted to match a catalogue.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <FaRegCircleCheck className="text-[11px]" aria-hidden="true" />
                  </span>
                  <span>Direct conversations with the people building your sofa and bed.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <FaRegCircleCheck className="text-[11px]" aria-hidden="true" />
                  </span>
                  <span>Long‑term support from a local team that knows your project.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="border-b border-slate-100 bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              How we work
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-700">
              A clear, transparent process from your first conversation to the day your sofa is
              installed.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Consultation & Measurement",
                icon: <FaRulerCombined aria-hidden="true" />,
                label: "Step 1",
                description:
                  "We understand your room, usage and comfort preferences. Our team visits for measurements or guides you remotely with simple steps.",
              },
              {
                title: "Material & Fabric Selection",
                icon: <FaGem aria-hidden="true" />,
                label: "Step 2",
                description:
                  "Choose from curated fabrics, finishes and cushioning options tailored to Indian homes — pets, kids and guests included.",
              },
              {
                title: "Custom Manufacturing",
                icon: <FaScrewdriverWrench aria-hidden="true" />,
                label: "Step 3",
                description:
                  "Your sofa is built in our own factory — from kiln‑dried frames to stitching and finishing, every stage is checked in‑house.",
              },
              {
                title: "Delivery & Installation",
                icon: <FaTruckFast aria-hidden="true" />,
                label: "Step 4",
                description:
                  "Our team delivers, installs and levels your furniture. We walk you through care instructions and remain reachable for support.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="flex flex-col gap-3 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    {step.icon}
                  </div>
                  <span className="rounded-full bg-slate-900 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-300 px-3 py-1">
                    {step.label}
                  </span>
                </div>
                <p className="text-sm font-semibold text-slate-900">{step.title}</p>
                <p className="text-xs leading-relaxed text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACTORY & SHOWROOM */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                Factory &amp; Showroom
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-700">
                Your sofa is not outsourced to an unknown workshop. It is designed, manufactured and
                finished within our own ecosystem — from raw frame to final fabric. This allows us
                to control timelines, materials and quality at every step.
              </p>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-700">
                Our showroom lets you see and feel our work in person, while the factory behind it
                ensures consistent build quality for every order.
              </p>
              <div className="mt-6 rounded-2xl bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-700">
                <p className="font-semibold text-slate-900">
                  In‑house manufacturing ensures quality control.
                </p>
                <p className="mt-1">
                  No third‑party vendors. No surprise substitutions. The same team that meets you is
                  responsible for building and installing your furniture.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative h-52 overflow-hidden rounded-3xl bg-slate-100 shadow-sm sm:h-56">
                <img
                  src="/showroom.jpeg"
                  alt="Prestige Dream Decor showroom interior with premium sofas"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <span className="inline-flex items-center gap-2 rounded-full bg-black/70 px-3 py-1">
                    <FaStore aria-hidden="true" />
                    Bengaluru Showroom
                  </span>
                </div>
              </div>
              <div className="relative h-52 overflow-hidden rounded-3xl bg-slate-100 shadow-sm sm:h-56">
                <img
                  src="/factory.jpeg"
                  alt="Prestige Dream Decor factory and craftsmen at work"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <span className="inline-flex items-center gap-2 rounded-full bg-black/70 px-3 py-1">
                    <FaIndustry aria-hidden="true" />
                    In‑house Manufacturing Unit
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 rounded-3xl bg-slate-50 px-5 py-5 text-xs sm:text-sm text-slate-700 sm:grid-cols-[1.5fr,1fr] sm:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Showroom address
              </p>
              <p className="mt-1">{ADDRESS}</p>
            </div>
            <div className="space-y-2 sm:text-right">
              <p>Open all 7 days, 10:30 AM – 8:30 PM.</p>
              <p className="text-xs text-slate-500">
                Share your visit time on WhatsApp so we can keep fabric books and layout options
                ready for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="border-b border-slate-100 bg-slate-50/70">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Why families choose us
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-700">
              When you invest in custom furniture, you&apos;re trusting more than just the design.
              You&apos;re trusting the people behind it.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-2 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <FaCouch aria-hidden="true" />
              </div>
              <p className="text-sm font-semibold text-slate-900">10+ Years Experience</p>
              <p className="text-xs leading-relaxed text-slate-600">
                A decade of building sofas and beds that survive real Indian homes, moves and
                makeovers.
              </p>
            </div>

            <div className="flex flex-col gap-2 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <FaRulerCombined aria-hidden="true" />
              </div>
              <p className="text-sm font-semibold text-slate-900">Made‑to‑Measure Designs</p>
              <p className="text-xs leading-relaxed text-slate-600">
                Size, layout and comfort tuned for your exact room, not a one‑size‑fits‑all model.
              </p>
            </div>

            <div className="flex flex-col gap-2 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <FaGem aria-hidden="true" />
              </div>
              <p className="text-sm font-semibold text-slate-900">Premium Materials</p>
              <p className="text-xs leading-relaxed text-slate-600">
                Seasoned wood, high‑density foams and upholstery options curated for both comfort
                and durability.
              </p>
            </div>

            <div className="flex flex-col gap-2 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <FaRupeeSign aria-hidden="true" />
              </div>
              <p className="text-sm font-semibold text-slate-900">Direct Factory Pricing</p>
              <p className="text-xs leading-relaxed text-slate-600">
                You pay for build quality, not showroom mark‑ups or middlemen margins.
              </p>
            </div>

            <div className="flex flex-col gap-2 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <FaHeadset aria-hidden="true" />
              </div>
              <p className="text-sm font-semibold text-slate-900">Local Support &amp; Service</p>
              <p className="text-xs leading-relaxed text-slate-600">
                Easy follow‑ups, repairs and additions from a team that&apos;s based where you are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="overflow-hidden rounded-3xl bg-slate-900 text-white shadow-xl">
            <div className="grid gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[1.6fr,1.1fr] lg:items-center">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-300">
                  Ready to experience it in person?
                </p>
                <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Visit our showroom and feel the comfort yourself.
                </h2>
                <p className="mt-4 max-w-xl text-sm sm:text-base text-slate-200">
                  Walk in with your room photos and measurements, walk out with a clear plan and
                  transparent pricing for your custom sofa or complete room.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <WhatsAppInlineButton
                    label="Visit Our Showroom – WhatsApp Us"
                    message={visitShowroomMessage}
                    className="w-full sm:w-auto"
                  />
                  <div className="text-xs text-slate-300">
                    <p>Or call us on</p>
                    <a
                      href="tel:+917975709648"
                      className="font-semibold text-emerald-300 hover:text-emerald-200"
                    >
                      +91 79757 09648
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4 rounded-2xl bg-slate-800/70 p-5 text-xs sm:text-sm">
                <p className="font-semibold text-white">What to bring when you visit</p>
                <ul className="mt-2 space-y-2 text-slate-200">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[10px]">
                      ✓
                    </span>
                    <span>Rough room measurements or a floor plan (if available).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[10px]">
                      ✓
                    </span>
                    <span>Photos of your existing space and any inspiration images.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[10px]">
                      ✓
                    </span>
                    <span>A rough budget so we can recommend the right fabric and build options.</span>
                  </li>
                </ul>
                <p className="mt-3 text-[11px] text-slate-400">
                  If you prefer, we&apos;re equally happy to start everything over WhatsApp — from
                  layout discussion to fabric suggestions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
