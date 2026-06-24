"use client";

import { useState } from "react";
import { FaWhatsapp, FaRegCircleCheck } from "react-icons/fa6";

// ---------------------------------------------------------------------------
// CONFIG — update FORMSPREE_ENDPOINT with your actual Formspree form ID
// Get it free at https://formspree.io → New Form → copy the endpoint URL
// ---------------------------------------------------------------------------
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mlgobbyk";

// Optional: Google Sheets endpoint (Apps Script web app URL)
// Leave empty string "" to skip Sheets and use email only
const SHEETS_ENDPOINT = "https://script.google.com/macros/s/AKfycbz8D8EAE2C5Fdm9twqh915VPdpAWJgOlkNgWdGZoy2SifkEbAk4w9eB7GW8NwU41XRtcQ/exec";

// ---------------------------------------------------------------------------
// COMPONENT
// ---------------------------------------------------------------------------

export default function HeroLeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value.trim(),
      interest: (form.elements.namedItem("interest") as HTMLSelectElement).value,
      source: "Homepage hero form",
      timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    };

    try {
      const requests: Promise<Response>[] = [
        fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data),
        }),
      ];

      if (SHEETS_ENDPOINT) {
        requests.push(
          fetch(SHEETS_ENDPOINT, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          })
        );
      }

      await Promise.all(requests);
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try WhatsApp below.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 px-5 py-8 text-center">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-emerald-500/20 text-emerald-400 text-xl">
          <FaRegCircleCheck />
        </div>
        <div>
          <p className="text-sm font-bold text-white">We&apos;ll WhatsApp you shortly!</p>
          <p className="mt-1 text-xs text-slate-400">
            Our team will send you options and pricing within 30 minutes.
          </p>
        </div>
        <a
          href="https://wa.me/917975709648?text=Hi%20Prestige%20Dream%20Decor%2C%20I%20just%20filled%20your%20form%20and%20I%27m%20looking%20for%20a%20custom%20sofa."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-400 transition-colors"
        >
          <FaWhatsapp />
          Chat with us now
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 px-5 py-5">
      {/* Name */}
      <div>
        <label htmlFor="hero-name" className="mb-1 block text-xs font-medium text-slate-400">
          Your name
        </label>
        <input
          id="hero-name"
          name="name"
          type="text"
          required
          placeholder="Eg. Priya Sharma"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="hero-phone" className="mb-1 block text-xs font-medium text-slate-400">
          WhatsApp number
        </label>
        <input
          id="hero-phone"
          name="phone"
          type="tel"
          required
          placeholder="10-digit mobile number"
          pattern="[6-9][0-9]{9}"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
        />
      </div>

      {/* Interest */}
      <div>
        <label htmlFor="hero-interest" className="mb-1 block text-xs font-medium text-slate-400">
          What are you looking for?
        </label>
        <select
          id="hero-interest"
          name="interest"
          required
          defaultValue=""
          className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
        >
          <option value="" disabled className="text-slate-500">Select a product</option>
          <option>Custom Sofa</option>
          <option>L-Shape Sofa</option>
          <option>Sofa Cum Bed</option>
          <option>3-Seater Sofa</option>
          <option>Dining Table</option>
          <option>Recliner</option>
          <option>Bed</option>
          <option>Not sure yet</option>
        </select>
      </div>

      {error && (
        <p className="rounded-xl bg-red-900/30 px-4 py-2.5 text-xs text-red-400">{error}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3.5 text-sm font-bold text-white hover:bg-emerald-400 disabled:opacity-60 transition-colors"
      >
        {loading ? (
          "Sending..."
        ) : (
          <>
            <FaWhatsapp className="text-base" />
            Get my free quote
          </>
        )}
      </button>

      {/* WhatsApp fallback */}
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-white/10" />
        <span className="text-[10px] text-slate-500">or</span>
        <div className="h-px flex-1 bg-white/10" />
      </div>
      <a
        href="https://wa.me/917975709648?text=Hi%20Prestige%20Dream%20Decor%2C%20I%27m%20looking%20for%20a%20custom%20sofa.%20Please%20share%20options%20and%20pricing."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-semibold text-slate-300 hover:bg-white/10 transition-colors"
      >
        <FaWhatsapp className="text-emerald-400 text-base" />
        Chat on WhatsApp instead
      </a>
    </form>
  );
}