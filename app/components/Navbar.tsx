"use client"
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react"; // Install lucide-react or use SVG

const PHONE_E164 = "+917975709648";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/sofa-offer" },
    { name: "L Shape Sofas", href: "/l-shape-sofas" },
    { name: "Custom Sofas", href: "/custom-sofas" },
    { name: "Dining Tables", href: "/dining-tables" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="bg-emerald-500 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl shrink-0">
            <img className="h-10 w-10 rounded bg-white" src="/favicon.ico" alt="Logo" />
            <span className="hidden xs:block">Prestige Dream Decor</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-emerald-100 transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Action Buttons & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href={`tel:${PHONE_E164}`}
              className="flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-sm font-bold text-slate-900 hover:bg-amber-300 transition-all"
            >
              <Phone size={16} />
              <span className="hidden sm:inline">Call Now</span>
            </Link>

            {/* Hamburger Button */}
            <button 
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md hover:bg-emerald-600 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`${isOpen ? "block" : "hidden"} lg:hidden pb-4 border-t border-emerald-400/30`}>
          <ul className="flex flex-col gap-2 pt-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-2 py-3 text-lg font-medium hover:bg-emerald-600 rounded-md"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;