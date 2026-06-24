export const PHONE_E164 = "+917975709648";
export const PHONE_DISPLAY = "+91 79757 09648";
export const ADDRESS =
  "1001/52/1 Main Road, Nanjappa - Thindlu Rd, Doddabommasandra, Vidyaranyapura, Bengaluru, Karnataka 560097";
export const MAPS_URL = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}`;

export function waLink(message: string): string {
  const digitsOnly = PHONE_E164.replace(/[^\d]/g, "");
  return `https://wa.me/${digitsOnly}?text=${encodeURIComponent(message)}`;
}

export const BOOK_NOW_MESSAGE =
  "Hi Prestige Dream Decor, I'd like to book a consultation / showroom visit. Please share available slots and details.";
export const VISIT_SHOWROOM_MESSAGE =
  "Hi Prestige Dream Decor, I'd like to visit your showroom. Please share location and best time to visit.";
