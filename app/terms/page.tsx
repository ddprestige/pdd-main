import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Prestige Dream Decor",
  description:
    "Terms and conditions for purchasing custom sofas and furniture from Prestige Dream Decor, Bangalore.",
};

export default function TermsPage() {
  const lastUpdated = "March 2026";

  return (
    <div className="bg-white text-slate-900">

      {/* Header */}
      <div className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 py-12">
          <nav className="mb-4 flex items-center gap-1.5 text-xs text-slate-400">
            <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
            <span>/</span>
            <span>Terms &amp; Conditions</span>
          </nav>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Terms &amp; Conditions
          </h1>
          <p className="mt-2 text-sm text-slate-500">Last updated: {lastUpdated}</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 py-14 prose prose-slate prose-sm max-w-none">

        <p className="text-sm leading-relaxed text-slate-600">
          Welcome to Prestige Dream Decor. These terms and conditions govern your use of our website at{" "}
          <a href="https://www.prestigedreamdecor.in" className="text-emerald-600 hover:underline">
            www.prestigedreamdecor.in
          </a>{" "}
          and any orders you place with us. By placing an order or using our services, you agree to these terms.
        </p>

        {[
          {
            title: "1. About Us",
            body: "Prestige Dream Decor is a custom furniture manufacturer based in Vidyaranyapura, Bengaluru, Karnataka, India. We design and manufacture custom sofas, beds, dining tables, recliners, and related furniture to order. Our showroom is located at Vidyaranyapura, Bengaluru — 560097.",
          },
          {
            title: "2. Orders and Customisation",
            body: `All our products are made to order based on specifications you provide. Once an order is confirmed and advance payment is received, customisation details (dimensions, fabric, colour, and design) are finalised. Changes to specifications after production begins may not be possible and may incur additional charges. We will inform you of any such charges before proceeding. Please review all specifications carefully before confirming your order.`,
          },
          {
            title: "3. Pricing",
            body: `All prices quoted are in Indian Rupees (₹) and are inclusive of applicable taxes unless stated otherwise. Starting prices displayed on our website are indicative and the final price depends on the specific size, fabric, and design chosen. We will provide an exact quote before any payment is collected. Prices are subject to change without notice, but any confirmed order will be honoured at the quoted price.`,
          },
          {
            title: "4. Payment",
            body: `We typically require an advance payment at the time of order confirmation. The balance is collected at the time of delivery. Specific payment terms will be communicated at the time of your order. We accept bank transfers, UPI, and other payment methods as communicated by our team. EMI options are available on select orders through partner arrangements.`,
          },
          {
            title: "5. Delivery",
            body: `We offer free delivery and professional installation within Bengaluru. Delivery timelines are typically 7 to 15 working days from order confirmation depending on design complexity. We will provide you with an estimated delivery date at the time of order. Delivery slots are scheduled in advance and our team will coordinate with you. Delays due to factors beyond our control (supply chain, weather, etc.) do not entitle you to cancellation or compensation.`,
          },
          {
            title: "6. Cancellations and Refunds",
            body: `As all products are made to order, cancellations after production has begun may not be eligible for a full refund. If you wish to cancel before production begins, please contact us immediately on WhatsApp at +91 79757 09648. Advance payments for orders cancelled before production begins will be refunded within 7 to 10 working days. No refund will be issued for orders where production has commenced, as materials and labour costs have already been incurred. If there is a defect or damage in the delivered product caused by us, we will repair or replace the affected part at no charge.`,
          },
          {
            title: "7. Warranty",
            body: `We provide a structural warranty on our furniture frames. Fabric and upholstery are not covered under warranty for general wear and tear. Warranty claims must be reported to us within the warranty period via WhatsApp or email with photos of the issue. The warranty does not cover damage caused by misuse, accidents, improper cleaning, or modification by third parties.`,
          },
          {
            title: "8. Intellectual Property",
            body: `All content on this website — including text, images, logos, and design — is the property of Prestige Dream Decor. You may not reproduce, copy, or use any content from this site without our prior written permission.`,
          },
          {
            title: "9. Limitation of Liability",
            body: `Prestige Dream Decor shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services beyond the value of the order placed. Our total liability is limited to the amount paid by you for the specific order in question.`,
          },
          {
            title: "10. Governing Law",
            body: `These terms are governed by the laws of India. Any disputes arising from these terms or your use of our services will be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.`,
          },
          {
            title: "11. Changes to These Terms",
            body: `We may update these terms from time to time. The latest version will always be available at this URL. Continued use of our website or services after changes are posted constitutes your acceptance of the updated terms.`,
          },
          {
            title: "12. Contact Us",
            body: `If you have any questions about these terms, please contact us:\n\nWhatsApp: +91 79757 09648\nEmail: prestigedreamdecor@gmail.com\nAddress: Vidyaranyapura, Bengaluru — 560097`,
          },
        ].map((section) => (
          <div key={section.title} className="mt-8">
            <h2 className="text-base font-bold text-slate-900 mb-2">{section.title}</h2>
            <p className="text-sm leading-relaxed text-slate-600 whitespace-pre-line">{section.body}</p>
          </div>
        ))}

        <div className="mt-12 rounded-2xl border border-slate-100 bg-slate-50 px-6 py-5">
          <p className="text-xs text-slate-500">
            By using our website or placing an order, you confirm that you have read and agree to these terms.
            If you do not agree, please do not use our services.
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            <Link href="/privacy-policy" className="text-xs font-medium text-emerald-600 hover:underline">
              Privacy Policy →
            </Link>
            <Link href="/contact" className="text-xs font-medium text-emerald-600 hover:underline">
              Contact Us →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}