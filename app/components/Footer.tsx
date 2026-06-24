import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa";
import { PHONE_E164, waLink, MAPS_URL } from "../lib/constants";

const BOOK_MSG =
  "Hi Prestige Dream Decor, I'd like to book a consultation. Please share available slots.";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-100 bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2 space-y-3">
            <p className="text-sm font-semibold tracking-[0.18em] text-amber-400 uppercase">
              Prestige Dream Decor
            </p>
            <p className="text-sm text-slate-300">
              Premium sofas and custom furniture crafted in Bengaluru, designed for modern homes
              across India.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={waLink(BOOK_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
              >
                <FaWhatsapp aria-hidden="true" />
                Book Now
              </Link>
              <a
                href={`tel:${PHONE_E164}`}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-600 bg-slate-800/80 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
              >
                <FaPhone aria-hidden="true" />
                Call Now
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-amber-500/60 bg-amber-500/20 px-4 py-2 text-sm font-semibold text-amber-300 hover:bg-amber-500/30"
              >
                Visit Our Showroom
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">
              Links
            </p>
            <nav className="space-y-1 text-sm">
              <Link href="/" className="block hover:text-amber-300">
                Home
              </Link>
              <Link href="/about" className="block hover:text-amber-300">
                About
              </Link>
              <Link href="/sofa-offer" className="block hover:text-amber-300">
                Shop / Services
              </Link>
              <Link href="/contact" className="block hover:text-amber-300">
                Contact
              </Link>
              <Link href="/terms" className="block hover:text-amber-300">
              Terms & Conditions
              </Link>
              <Link href="/privacy-policy" className="block hover:text-amber-300">
              Privacy Policy
              </Link>
            </nav>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">
              Contact
            </p>
            <div className="space-y-1 text-sm">
              <p>1001/52/1 Main Road, Nanjappa - Thindlu Rd, Doddabommasandra, Vidyaranyapura, Bengaluru, Karnataka 560097</p>
              <a href="tel:+917975709648" className="block hover:text-amber-300">
                +91 79757 09648
              </a>
              <a
                href="mailto:prestigedreamdecor@gmail.com"
                className="block hover:text-amber-300"
              >
                prestigedreamdecor@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.facebook.com/prestige.dreamdecor/"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-200 hover:bg-slate-700"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/prestige_dream_decor/"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-200 hover:bg-slate-700"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-4 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Prestige Dream Decor. All rights reserved.</p>
          <p>Made with care in Bengaluru, India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;