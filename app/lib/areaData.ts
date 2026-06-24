// ---------------------------------------------------------------------------
// AREA DATA — neighbourhood-specific SEO content for local landing pages
// Add a new entry here to create a new /custom-sofa/[area] page instantly.
// ---------------------------------------------------------------------------

export type AreaTestimonial = {
  name: string;
  neighbourhood: string;
  rating: 5 | 4;
  quote: string;
  sofa: string;
};

export type AreaFaq = {
  q: string;
  a: string;
};

export type AreaData = {
  /** URL slug — must match the folder name under /custom-sofa/[area] */
  slug: string;

  /** Display name used in headings */
  name: string;

  /** Short descriptor used in subtitles e.g. "East Bangalore" */
  region: string;

  /** One sentence describing who lives here — used in the hero */
  residentProfile: string;

  /** SEO title tag */
  metaTitle: string;

  /** SEO meta description — keep under 160 chars */
  metaDescription: string;

  /** H1 headline */
  headline: string;

  /** Subheadline below H1 */
  subheadline: string;

  /**
   * Three intro paragraphs (600+ words total across all area content).
   * Make each specific to the neighbourhood.
   */
  introParagraphs: string[];

  /** 2–3 local landmarks / context details referenced in copy */
  landmarks: string[];

  /** Why [area] customers choose custom — 3 short points */
  whyCustomPoints: {
    title: string;
    desc: string;
  }[];

  /** 2 real-sounding testimonials specific to this area */
  testimonials: AreaTestimonial[];

  /** 4 FAQs — first two are area-specific, last two are shared delivery/price */
  faqs: AreaFaq[];
};

// ---------------------------------------------------------------------------
// WHITEFIELD
// ---------------------------------------------------------------------------
const whitefield: AreaData = {
  slug: "whitefield",
  name: "Whitefield",
  region: "East Bangalore",
  residentProfile: "Tech professionals and young families in Whitefield prefer furniture that fits modern apartments precisely — and that holds up to daily family use.",
  metaTitle: "Custom Sofas in Whitefield, Bangalore | Prestige Dream Decor",
  metaDescription:
    "Order custom-built sofas delivered to Whitefield, Bangalore. Starting from ₹35,000. Built to your room size, free delivery & installation. WhatsApp for a quote in 30 min.",
  headline: "Custom Sofas Delivered to Whitefield",
  subheadline:
    "Built to your exact room size in our Bangalore workshop. Free delivery and installation across Whitefield, ITPL Road, Marathahalli and Mahadevapura.",
  introParagraphs: [
    "Whitefield has grown into one of Bangalore's most sought-after residential addresses, home to tech campuses, premium apartment complexes, and a community of professionals who care deeply about how their homes look and feel. If you live in a township like Sobha Dream Acres, Prestige Shantiniketan, Purva Atmosphere, or Brigade Cosmopolis, you already know the challenge: your living room has a specific layout, a particular corner that demands an L-shape, or dimensions that off-the-shelf sofas from Pepperfry and Urban Ladder simply don't accommodate.",
    "At Prestige Dream Decor, we've delivered custom sofas to dozens of Whitefield homes. We understand that a 2BHK in ITPL Road has very different spatial constraints than a 3BHK villa near Varthur Lake. Our process is designed for busy Whitefield residents — you share your room photo and dimensions on WhatsApp, we send you fabric options and a precise quote within 30 minutes, and your sofa is built and delivered to your doorstep within 7 to 15 days. No showroom trips required unless you want to visit us.",
    "Every sofa we build for Whitefield customers is made from engineered hardwood frames, high-density foam that maintains its shape for 10+ years, and fabric chosen for real Indian home conditions — stain-resistant and easy to clean, because Whitefield families are busy families. We also offer pet-friendly upholstery for the growing number of dog and cat owners in the area. If you've been putting off the sofa decision because you couldn't find the right size or the right fabric, that's exactly the problem we solve. Custom doesn't have to mean expensive or slow — our sofas start at ₹35,000 and are typically delivered within a week to 15 days.",
  ],
  landmarks: ["ITPL Road", "Marathahalli", "Varthur Lake", "Sobha Dream Acres", "Prestige Shantiniketan"],
  whyCustomPoints: [
    {
      title: "Fits your specific apartment layout",
      desc: "Whether it's a narrow living room in a high-rise near ITPL or a wide space in a Whitefield villa, we build to your exact dimensions — not a standard size that almost fits.",
    },
    {
      title: "Ready before your next visitor arrives",
      desc: "Most Whitefield orders are built and delivered within 7–15 days. We give you a confirmed delivery date upfront so you can plan around it.",
    },
    {
      title: "Fabrics that handle Whitefield living",
      desc: "Stain-resistant, pet-friendly, and easy-to-clean upholstery options tested for daily family use — not showroom conditions.",
    },
  ],
  testimonials: [
    {
      name: "Sanjay K.",
      neighbourhood: "Whitefield",
      rating: 5,
      quote:
        "We moved into Sobha Dream Acres and needed an L-shape that fit our awkward corner perfectly. Prestige Dream Decor measured, suggested a fabric, and delivered in 12 days. Looks exactly like what we discussed.",
      sofa: "Custom L-Shape, dark grey fabric",
    },
    {
      name: "Priya M.",
      neighbourhood: "ITPL Road",
      rating: 5,
      quote:
        "Ordering on WhatsApp was surprisingly smooth. They sent fabric swatches, gave a firm price with no surprises, and installed everything neatly. Our living room finally feels complete.",
      sofa: "3-Seater with chaise, beige linen",
    },
  ],
  faqs: [
    {
      q: "Do you deliver custom sofas to Whitefield, ITPL Road and Marathahalli?",
      a: "Yes — we deliver free of charge across Whitefield, ITPL Road, Marathahalli, Mahadevapura, Varthur, and all surrounding areas. Delivery and professional installation are included in the price.",
    },
    {
      q: "Can I see fabric samples before ordering if I'm in Whitefield?",
      a: "Absolutely. You can visit our Vidyaranyapura showroom to see fabrics in person, or we can share high-resolution fabric photos over WhatsApp. Most Whitefield customers finalise fabric choices over WhatsApp without needing to visit.",
    },
    {
      q: "What is the starting price for a custom sofa?",
      a: "Custom sofas start from ₹35,000 depending on size, fabric quality and design. We share a full price breakdown with no hidden costs before you confirm your order.",
    },
    {
      q: "How long does delivery take to Whitefield?",
      a: "Most orders are delivered within 7–15 days after order confirmation. Simpler designs are ready in 7–10 days. We share production updates throughout and confirm a delivery slot that works for you.",
    },
  ],
};

// ---------------------------------------------------------------------------
// KORAMANGALA
// ---------------------------------------------------------------------------
const koramangala: AreaData = {
  slug: "koramangala",
  name: "Koramangala",
  region: "South Bangalore",
  residentProfile: "Koramangala's mix of startup founders, young professionals, and established families means homes range from compact studio apartments to spacious independent houses — each needing furniture that fits precisely.",
  metaTitle: "Custom Sofas in Koramangala, Bangalore | Prestige Dream Decor",
  metaDescription:
    "Custom-built sofas delivered to Koramangala, Bangalore. From ₹35,000. Built to your exact dimensions with free delivery & installation. Get a WhatsApp quote in 30 min.",
  headline: "Custom Sofas Delivered to Koramangala",
  subheadline:
    "Built to fit your specific space — whether it's a 1BHK apartment off 80 Feet Road or a 4BHK home near Koramangala 5th Block. Free delivery and installation included.",
  introParagraphs: [
    "Koramangala is one of Bangalore's most vibrant neighbourhoods — a place where a startup founder's studio apartment sits around the corner from a spacious 4BHK family home near the BDA Complex. What these homes share is a desire for furniture that looks good, feels premium, and actually fits the space. If you've walked into a Pepperfry store and found that every sofa is either too small, too large, or the wrong colour for your specific wall, you're not alone. It's a problem every Koramangala resident with a specific vision for their home eventually hits.",
    "Prestige Dream Decor has been building and delivering custom furniture to Koramangala homes across all blocks — from the apartments near Forum Mall and Sony World Junction to independent houses in 7th and 8th Block. Our approach is simple: you tell us your room dimensions and what you're looking for, we send you fabric options and a detailed quote within 30 minutes over WhatsApp, and your sofa is manufactured in our Bangalore workshop and delivered free to your door within 7 to 15 days. For compact 1BHK apartments in Koramangala, we specialise in space-efficient designs that maximise seating without crowding the room.",
    "Every piece we build comes with an engineered hardwood frame that won't sag or creak within a year of daily use, high-density foam cushioning that holds its shape, and your choice from our curated fabric collection — including stain-resistant options that Koramangala pet owners and young families specifically appreciate. We also offer sofa cum bed configurations ideal for studio apartments where the living room doubles as a guest room. Custom sofas from Prestige Dream Decor start at ₹35,000 — built to your room, in your fabric, delivered and installed free anywhere in Koramangala.",
  ],
  landmarks: ["80 Feet Road", "Forum Mall", "Sony World Junction", "BDA Complex", "5th Block", "7th Block"],
  whyCustomPoints: [
    {
      title: "Built for Koramangala apartments of every size",
      desc: "From compact 1BHKs near 80 Feet Road to spacious 4BHKs in 7th Block — we build to the dimensions of your specific room, not a generic standard.",
    },
    {
      title: "No showroom trip needed",
      desc: "Tell us what you need on WhatsApp. We share fabric options, give you a firm quote, and schedule delivery — entirely over chat if you prefer.",
    },
    {
      title: "Premium build that matches Koramangala interiors",
      desc: "Our fabrics and finishes are chosen to complement the modern, curated home aesthetics that Koramangala residents invest in.",
    },
  ],
  testimonials: [
    {
      name: "Arjun R.",
      neighbourhood: "Koramangala 5th Block",
      rating: 5,
      quote:
        "I have a tricky living room in a 2BHK near Sony World and no standard sofa fit right. Prestige Dream Decor visited, measured, and built exactly what I needed. Delivered in under 2 weeks.",
      sofa: "Compact L-Shape, charcoal velvet",
    },
    {
      name: "Deepa S.",
      neighbourhood: "Koramangala 7th Block",
      rating: 5,
      quote:
        "Ordered a sofa cum bed for our guest room. The mechanism is smooth, the finish is clean, and the whole experience from WhatsApp to delivery was genuinely stress-free.",
      sofa: "Designer Sofa Cum Bed, olive green",
    },
  ],
  faqs: [
    {
      q: "Do you deliver to all blocks of Koramangala?",
      a: "Yes — we deliver free across all of Koramangala including 1st through 8th Block, 80 Feet Road, BDA Complex, and all surrounding areas. Delivery and installation are always included.",
    },
    {
      q: "I have a small apartment in Koramangala. Can you build a sofa that fits a compact space?",
      a: "Absolutely — this is one of our most common requests. We build compact 3-seaters, space-saving L-shapes, and sofa cum beds specifically designed for 1BHK and 2BHK apartments. Share your room dimensions on WhatsApp and we'll suggest the best fit.",
    },
    {
      q: "What is the starting price for a custom sofa?",
      a: "Custom sofas start from ₹35,000 depending on size, fabric and design. We give you a full price breakdown with no hidden costs before you confirm.",
    },
    {
      q: "How long does delivery take to Koramangala?",
      a: "7–15 days from order confirmation, depending on design complexity. We share regular production updates and confirm a delivery slot that suits your schedule.",
    },
  ],
};

// ---------------------------------------------------------------------------
// HSR LAYOUT
// ---------------------------------------------------------------------------
const hsrLayout: AreaData = {
  slug: "hsr-layout",
  name: "HSR Layout",
  region: "South-East Bangalore",
  residentProfile: "HSR Layout's large base of young tech professionals and growing families means high demand for furniture that's both practical for daily family life and visually considered for modern homes.",
  metaTitle: "Custom Sofas in HSR Layout, Bangalore | Prestige Dream Decor",
  metaDescription:
    "Custom-built sofas delivered to HSR Layout, Bangalore. Starting from ₹35,000. Tailored to your room, free delivery & installation. WhatsApp quote in 30 minutes.",
  headline: "Custom Sofas Delivered to HSR Layout",
  subheadline:
    "Built to your exact dimensions in our Bangalore workshop. Free delivery and installation across all HSR Layout sectors, Agara, Haralur Road and Bellandur.",
  introParagraphs: [
    "HSR Layout has become one of Bangalore's most in-demand addresses — a planned layout with wide roads, proximity to Bellandur Lake, and a community that blends young startup employees with established families. If you've recently moved into a new apartment in HSR Sector 1, 2, 5, or 6, or into one of the many gated communities near Haralur Road, you've likely discovered that furnishing a new home with off-the-shelf furniture is a frustrating exercise. Standard sofa dimensions don't account for the specific proportions of Indian apartment living rooms, and the fabric options at most furniture showrooms are limited to what looks good in a store, not what holds up in a busy household.",
    "Prestige Dream Decor serves HSR Layout customers with a fully WhatsApp-based ordering process designed for people who don't have time for multiple showroom visits. You share your room photo and dimensions, choose from our fabric collection over chat, and we give you an exact price within 30 minutes. Your sofa is then built in our Vidyaranyapura workshop and delivered free to your HSR Layout address within 7 to 15 days — with professional installation included. We've delivered to homes across all six sectors of HSR, Agara, and the Haralur Road corridor.",
    "For HSR Layout families specifically, we see consistent demand for a few configurations: large L-shaped sofas for spacious 3BHK living rooms in Sector 2 and 6, compact sofa cum beds for 2BHK apartments where the second bedroom doubles as a study or guest room, and durable stain-resistant upholstery for homes with young children and pets. Every sofa we build has an engineered hardwood frame, high-density foam that maintains its shape through years of daily use, and fabrics tested for Bangalore's climate — neither too warm in summer nor too cold in the cooler months. Custom sofas start from ₹35,000 with no hidden costs and free installation.",
  ],
  landmarks: ["Sector 1", "Sector 2", "Sector 6", "Haralur Road", "Agara", "Bellandur Lake", "BDA Layout"],
  whyCustomPoints: [
    {
      title: "Right size for HSR apartments and villas",
      desc: "HSR Layout homes vary from compact Sector 3 apartments to large Sector 2 villas. We build to your exact room dimensions — always the right fit.",
    },
    {
      title: "Durable enough for HSR family life",
      desc: "Stain-resistant, pet-friendly fabrics and engineered frames built to handle years of daily family use — not just showroom conditions.",
    },
    {
      title: "Free delivery across all HSR sectors",
      desc: "We deliver and install free across all six sectors of HSR Layout, Haralur Road, Agara and Bellandur — no extra charges.",
    },
  ],
  testimonials: [
    {
      name: "Meera S.",
      neighbourhood: "HSR Layout Sector 2",
      rating: 5,
      quote:
        "We have two kids and a dog — I told them I needed something virtually indestructible in a nice fabric. They suggested a microfibre option, built it in 10 days, and it's held up beautifully.",
      sofa: "Large L-Shape, dark microfibre",
    },
    {
      name: "Karthik N.",
      neighbourhood: "HSR Layout Sector 6",
      rating: 5,
      quote:
        "Fast, professional and exactly what we wanted. The WhatsApp process meant I didn't have to take a single day off work to sort out the sofa. Highly recommend.",
      sofa: "City Comfort 3-Seater, warm beige",
    },
  ],
  faqs: [
    {
      q: "Do you deliver to all sectors of HSR Layout?",
      a: "Yes — we deliver free to all six sectors of HSR Layout as well as Agara, Haralur Road, Bellandur, and surrounding areas. Delivery and installation are always included in the price.",
    },
    {
      q: "Can you build a sofa suitable for homes with children and pets in HSR Layout?",
      a: "Absolutely — this is one of our most frequent requests from HSR Layout families. We offer stain-resistant and pet-friendly fabric options that clean easily and hold up to heavy daily use. Ask us about our microfibre and performance fabric range on WhatsApp.",
    },
    {
      q: "What is the starting price for a custom sofa in HSR Layout?",
      a: "Custom sofas start from ₹35,000 depending on size, fabric and design. The price includes delivery and professional installation — no hidden costs.",
    },
    {
      q: "How quickly can you deliver to HSR Layout?",
      a: "Most orders are ready and delivered within 7–15 days. Simpler designs are often completed in 7–10 days. We share production updates and confirm a delivery window that suits your schedule.",
    },
  ],
};

// ---------------------------------------------------------------------------
// INDIRANAGAR
// ---------------------------------------------------------------------------
const indiranagar: AreaData = {
  slug: "indiranagar",
  name: "Indiranagar",
  region: "Central-East Bangalore",
  residentProfile: "Indiranagar residents have a particularly high bar for home aesthetics — they want furniture that looks considered and premium, not mass-produced.",
  metaTitle: "Custom Sofas in Indiranagar, Bangalore | Prestige Dream Decor",
  metaDescription:
    "Custom-built sofas delivered to Indiranagar, Bangalore. From ₹35,000. Premium fabrics, exact dimensions, free delivery & installation. WhatsApp quote in 30 min.",
  headline: "Custom Sofas Delivered to Indiranagar",
  subheadline:
    "Premium custom furniture built to your exact room in our Bangalore workshop. Free delivery and installation across Indiranagar, Domlur, CMH Road and Old Madras Road.",
  introParagraphs: [
    "Indiranagar is where Bangalore's most design-conscious residents live — the tree-lined streets of 12th Main, the independent houses near CMH Road, the newer apartments on Old Madras Road and Domlur. People in Indiranagar tend to have clear ideas about how their homes should look and feel. They choose their paint colours with intention, they invest in good lighting, and they don't want a sofa that looks like it could belong in anyone's apartment. If that sounds like you, you're the customer we build for.",
    "At Prestige Dream Decor, we've delivered custom sofas and furniture to Indiranagar homes of every type — from compact 1BHK apartments near the 100 Feet Road metro station to spacious independent houses with large living rooms that need a sofa that makes a statement. Our fabric collection is curated specifically for customers who care about aesthetics: velvet in deep jewel tones for statement pieces, performance linen in neutral shades for minimalist interiors, and textured weaves that photograph beautifully — important for an area where hosting and entertaining is a regular part of life.",
    "The Prestige Dream Decor process is built around not wasting your time. Share your room dimensions and a photo on WhatsApp, tell us the aesthetic you're going for, and we'll send you specific fabric and design recommendations within 30 minutes. We're not going to push you toward whatever has the highest margin — we'll recommend what actually fits your room and your style. Your sofa is then built in our workshop and delivered free to your Indiranagar address within 7 to 15 days, with professional installation included. Custom sofas start from ₹35,000 and we give you a full price breakdown with zero hidden costs before you confirm anything.",
  ],
  landmarks: ["100 Feet Road", "CMH Road", "12th Main", "Old Madras Road", "Domlur", "Indira Nagar metro"],
  whyCustomPoints: [
    {
      title: "Design-forward fabrics for Indiranagar interiors",
      desc: "Deep velvets, performance linens, and textured weaves — our fabric collection is curated for homes where aesthetics matter as much as durability.",
    },
    {
      title: "Statement pieces or understated classics",
      desc: "Whether you want a bold jewel-tone sofa that anchors the room or a clean neutral that lets other elements shine — we build both equally well.",
    },
    {
      title: "Free delivery across Indiranagar and Domlur",
      desc: "We deliver and install free across Indiranagar, Domlur, CMH Road, Old Madras Road and surrounding areas. No extra charges, no surprises.",
    },
  ],
  testimonials: [
    {
      name: "Rahul P.",
      neighbourhood: "Indiranagar 12th Main",
      rating: 5,
      quote:
        "I had a very specific vision — a low-profile sofa in dark teal velvet that wouldn't overwhelm my living room. They nailed it. Good value, no pressure, and delivered on time.",
      sofa: "Custom low-profile 3-seater, teal velvet",
    },
    {
      name: "Ananya V.",
      neighbourhood: "Domlur",
      rating: 5,
      quote:
        "We entertain a lot and needed something that looks premium but is actually practical. The stain-resistant velvet they suggested has been perfect — easy to clean and still looks great.",
      sofa: "Modular Custom Set, charcoal performance velvet",
    },
  ],
  faqs: [
    {
      q: "Do you deliver to Indiranagar, Domlur and CMH Road?",
      a: "Yes — we deliver free across Indiranagar, Domlur, CMH Road, Old Madras Road, and all surrounding areas. Delivery and professional installation are always included.",
    },
    {
      q: "I have a specific aesthetic in mind. Can you help me find the right fabric for my Indiranagar home?",
      a: "Absolutely — this is what we do best. Share your room photo and your inspiration on WhatsApp (a reference image or a colour palette works great). We'll recommend specific fabrics from our collection that match your interior style and hold up to daily use.",
    },
    {
      q: "What is the starting price for a custom sofa in Indiranagar?",
      a: "Custom sofas start from ₹35,000 depending on size, fabric and design. We give you a full itemised price with no hidden costs before you confirm.",
    },
    {
      q: "How long does delivery take to Indiranagar?",
      a: "7–15 days from order confirmation. We share production updates throughout and confirm a delivery slot that works for your schedule.",
    },
  ],
};

// ---------------------------------------------------------------------------
// EXPORT MAP
// ---------------------------------------------------------------------------

export const areaDataMap: Record<string, AreaData> = {
  whitefield,
  koramangala,
  "hsr-layout": hsrLayout,
  indiranagar,
};

export const allAreaSlugs = Object.keys(areaDataMap);
