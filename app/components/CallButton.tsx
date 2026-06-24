import React from "react";
import { FaPhone } from "react-icons/fa";

type Props = {
  phoneNumber?: string;
};

const CallButton: React.FC<Props> = ({
  phoneNumber = "+917975709648",
}) => {
  return (
    <a
      href={`tel:${phoneNumber}`}
      aria-label="Call us"
    >
      <div className="fixed bottom-5 left-5 z-50 flex cursor-pointer items-center gap-2 rounded-full bg-slate-900 px-4 py-3 text-white shadow-lg ring-2 ring-white/70 transition-all hover:bg-slate-700 hover:shadow-xl md:bottom-6 md:left-6">
        <FaPhone size={20} />
        <span className="hidden text-sm font-semibold md:inline">Call us</span>
      </div>
    </a>
  );
};

export default CallButton;