import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Prestige Dream Decor",
  description:
    "Privacy policy for Prestige Dream Decor. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "March 2026";

  return (
    <div className="bg-white text-slate-900">

      {/* Header */}
      <div className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 py-12">
          <nav className="mb-4 flex items-center gap-1.5 text-xs text-slate-400">
            <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
            <span>/</span>
            <span>Privacy Policy</span>
          </nav>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-slate-500">Last updated: {lastUpdated}</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 py-14">

        <p className="text-sm leading-relaxed text-slate-600">
          Prestige Dream Decor ("we", "our", or "us") is committed to protecting your privacy. This policy
          explains what information we collect, how we use it, and your rights regarding your data. By using
          our website at{" "}
          <a href="https://www.prestigedreamdecor.in" className="text-emerald-600 hover:underline">
            www.prestigedreamdecor.in
          </a>{" "}
          or contacting us via WhatsApp, you agree to this policy.
        </p>

        {[
          {
            title: "1. Information We Collect",
            body: `We collect information you provide directly to us, including:

• Name and contact number (when you fill a form or WhatsApp us)
• WhatsApp messages and conversations related to your enquiry or order
• Room dimensions, photos, and design preferences you share with us for the purpose of creating your furniture
• Payment information (processed through secure third-party payment providers — we do not store card details)
• Your approximate location when you request delivery or directions

We also automatically collect basic website analytics data (pages visited, time spent, device type) through tools like Google Analytics. This data is anonymised and does not identify you personally.`,
          },
          {
            title: "2. How We Use Your Information",
            body: `We use the information we collect to:

• Respond to your enquiries and provide quotes
• Process and fulfil your furniture orders
• Coordinate delivery and installation at your address
• Send order updates and production status via WhatsApp
• Improve our website and services based on usage patterns
• Comply with legal obligations

We do not use your information for automated decision-making or profiling.`,
          },
          {
            title: "3. WhatsApp Communications",
            body: `When you contact us via WhatsApp, your messages are received and stored within the WhatsApp platform, which has its own privacy policy. We use WhatsApp solely to respond to your enquiries, share fabric options, provide quotes, and coordinate orders. We will not add you to bulk promotional broadcast lists without your consent.`,
          },
          {
            title: "4. Sharing Your Information",
            body: `We do not sell, rent, or trade your personal information to third parties. We may share your information only in the following limited circumstances:

• With delivery partners solely to coordinate delivery of your order to your address
• With payment processors to complete transactions (they have their own privacy policies)
• With legal authorities if required by law or court order
• With Google (anonymised analytics data only — no personally identifiable information)`,
          },
          {
            title: "5. Data Storage and Security",
            body: `Your information is stored securely. Lead form submissions are stored in our Google Sheets (accessible only to our team) and forwarded to our business email. WhatsApp conversations are stored within the WhatsApp platform. We take reasonable precautions to protect your data from unauthorised access, but no method of transmission over the internet is 100% secure.`,
          },
          {
            title: "6. Cookies",
            body: `Our website uses cookies to improve your browsing experience and to analyse traffic. These include:

• Essential cookies: required for the website to function correctly
• Analytics cookies: help us understand how visitors use the site (via Google Analytics)

You can disable cookies in your browser settings, though this may affect some website functionality. We do not use advertising or tracking cookies.`,
          },
          {
            title: "7. Google Analytics",
            body: `We use Google Analytics to understand how visitors interact with our website. This service collects anonymised data such as pages viewed, session duration, and device type. Google Analytics does not identify individual users. You can opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on at tools.google.com/dlpage/gaoptout.`,
          },
          {
            title: "8. Your Rights",
            body: `You have the right to:

• Access the personal information we hold about you
• Request correction of inaccurate information
• Request deletion of your personal data (subject to legal and business obligations)
• Withdraw consent for us to contact you for marketing purposes at any time

To exercise any of these rights, please contact us via WhatsApp at +91 79757 09648 or email us at prestigedreamdecor@gmail.com.`,
          },
          {
            title: "9. Data Retention",
            body: `We retain customer order information for a minimum of 3 years for warranty and business record purposes. Enquiry data from visitors who do not place an order is retained for up to 6 months. You may request deletion of your data at any time by contacting us directly.`,
          },
          {
            title: "10. Children's Privacy",
            body: `Our website and services are not directed at children under the age of 18. We do not knowingly collect personal information from minors. If you believe a minor has submitted information to us, please contact us and we will delete it promptly.`,
          },
          {
            title: "11. Links to Other Websites",
            body: `Our website contains links to external sites such as Google Maps and Google Reviews. We are not responsible for the privacy practices of these third-party websites. We encourage you to read their privacy policies before sharing any personal information.`,
          },
          {
            title: "12. Changes to This Policy",
            body: `We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. The latest version will always be available at this page. We encourage you to review this policy periodically.`,
          },
          {
            title: "13. Contact Us",
            body: `If you have any questions, concerns, or requests regarding this privacy policy, please reach out to us:\n\nWhatsApp: +91 79757 09648\nEmail: prestigedreamdecor@gmail.com\nAddress: Vidyaranyapura, Bengaluru — 560097, Karnataka, India`,
          },
        ].map((section) => (
          <div key={section.title} className="mt-8">
            <h2 className="text-base font-bold text-slate-900 mb-2">{section.title}</h2>
            <p className="text-sm leading-relaxed text-slate-600 whitespace-pre-line">{section.body}</p>
          </div>
        ))}

        <div className="mt-12 rounded-2xl border border-slate-100 bg-slate-50 px-6 py-5">
          <p className="text-xs text-slate-500">
            This privacy policy applies to all personal data collected through our website, WhatsApp, and any
            other channel through which you interact with Prestige Dream Decor.
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            <Link href="/terms" className="text-xs font-medium text-emerald-600 hover:underline">
              Terms &amp; Conditions →
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