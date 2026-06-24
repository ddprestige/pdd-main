import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

type Props = {
  phoneNumber?: string;
  message?: string;
};

const WhatsAppButton: React.FC<Props> = ({
  phoneNumber = "+917975709648",
  message = "Hi Prestige Dream Decor, I'm interested in custom furniture for my home. Can you help me?",
}) => {
  const digitsOnly = phoneNumber.replace(/[^\d]/g, "");
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${digitsOnly}?text=${encodedMessage}`;

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <div className="fixed bottom-5 right-5 z-50 flex cursor-pointer items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-white shadow-lg ring-2 ring-white/70 transition-all hover:bg-emerald-600 hover:shadow-xl md:bottom-6 md:right-6">
        <FaWhatsapp size={24} />
        <span className="hidden text-sm font-semibold md:inline">Chat with us</span>
      </div>
    </Link>
  );
};

export default WhatsAppButton;