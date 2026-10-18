"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  X,
  Youtube,
} from "lucide-react";
import { contact, services } from "@/data/site";

const companyLinks = [
  { name: "About Us", href: "/company/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Career", href: "/career" },
  { name: "Blog", href: "/company/blog" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/growthifyservices/" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/Growthifyservices" },
  { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/channel/UCibITwy4K88RxwzdMDRhmRQ" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/growthifyservices.in/?igsh=d2NkcHMwN3ZxeXMw" },
];

const pagesWithOwnCta = ["/", "/company/about", "/portfolio"];

const linkCls =
  "group inline-flex items-center gap-2 text-sm text-brand-100/70 transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none";

export default function Footer() {
  const pathname = usePathname();
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TEMP: no newsletter endpoint yet
    console.log("Subscribed Email:", email);
    setSubscribed(true);
    setEmail("");
  };

  // Close popup on escape key
  useEffect(() => {
    if (!showWhatsAppPopup) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowWhatsAppPopup(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [showWhatsAppPopup]);

  const openWhatsApp = () => {
    window.open(contact.whatsapp, "_blank", "noopener,noreferrer");
    setShowWhatsAppPopup(false);
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <button
        onClick={() => setShowWhatsAppPopup(true)}
        className="fixed bottom-4 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-brand-800 shadow-[0_12px_30px_-8px_rgb(109_40_217/0.8)] transition-transform duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-300 sm:bottom-6 sm:right-6"
        aria-label="Chat with Growthify"
        aria-haspopup="dialog"
      >
        <MessageCircle className="h-7 w-7 text-white" aria-hidden />
        <span className="absolute inset-0 animate-ping rounded-full bg-brand-600 opacity-30" aria-hidden />
      </button>

      {/* WhatsApp Chatbot Popup */}
      <AnimatePresence>
        {showWhatsAppPopup && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-end justify-center bg-ink/40 p-4 backdrop-blur-sm sm:items-center sm:justify-end"
            onClick={() => setShowWhatsAppPopup(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="chat-title"
              className="w-full overflow-hidden rounded-2xl bg-white shadow-2xl sm:w-96"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between bg-gradient-to-r from-brand-700 to-brand-500 p-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-white">
                    <MessageCircle className="h-5 w-5 text-brand-700" aria-hidden />
                  </div>
                  <div>
                    <h3 id="chat-title" className="font-semibold leading-tight text-white">
                      Growthify Assistant
                    </h3>
                    <p className="text-xs text-white/80">We usually reply instantly</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowWhatsAppPopup(false)}
                  className="rounded-lg p-1 text-white/80 hover:text-white"
                  aria-label="Close chat"
                  autoFocus
                >
                  <X className="h-5 w-5" aria-hidden />
                </button>
              </div>

              <div className="space-y-4 bg-gradient-to-b from-brand-50 to-white p-5">
                <div className="flex gap-3">
                  <div className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-brand-700">
                    <MessageCircle className="h-4 w-4 text-white" aria-hidden />
                  </div>
                  <div className="max-w-[85%] rounded-2xl rounded-tl-none border border-brand-200 bg-white p-4 shadow-sm">
                    <p className="text-sm text-gray-800">
                      👋 <strong>Thanks for reaching us!</strong>
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      We help businesses grow using AI, automation &amp; custom software.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-brand-700">
                    <MessageCircle className="h-4 w-4 text-white" aria-hidden />
                  </div>
                  <div className="max-w-[85%] rounded-2xl rounded-tl-none border border-brand-200 bg-white p-4 shadow-sm">
                    <p className="text-sm text-gray-600">💬 Click below to continue this conversation on WhatsApp.</p>
                  </div>
                </div>
              </div>

              <div className="border-t bg-gray-50 p-4">
                <button
                  onClick={openWhatsApp}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-700 py-3 font-semibold text-white transition-colors hover:bg-brand-800"
                >
                  Continue Chat
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </button>
                <p className="mt-2 text-center text-xs text-gray-500">You’ll be redirected to WhatsApp</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="relative overflow-hidden bg-night text-white">
        {/* Top glow line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400 to-transparent" aria-hidden />
        <div className="absolute left-1/2 top-0 h-40 w-[48rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/40 blur-[90px]" aria-hidden />
        <div className="bg-grid-dark absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_60%)]" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* CTA strip, skipped on pages that end with their own CTA banner */}
          {!pagesWithOwnCta.includes(pathname) && (
            <div className="pt-14 sm:pt-16">
              <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-gradient-to-r from-brand-700/40 via-brand-800/30 to-brand-900/20 p-6 text-center backdrop-blur sm:p-8 md:flex-row md:text-left">
                <div>
                  <h2 className="text-2xl font-bold sm:text-3xl">Have a project in mind?</h2>
                  <p className="mt-2 text-brand-100/70">Let&apos;s talk about how we can help you build and grow it.</p>
                </div>
                <Link
                  href="/contact"
                  className="group inline-flex flex-shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-brand-800 shadow-[0_10px_30px_-10px_rgb(255_255_255/0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_5px_rgb(255_255_255/0.12),0_14px_36px_-10px_rgb(255_255_255/0.5)]"
                >
                  Let&apos;s Talk
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </Link>
              </div>
            </div>
          )}

          {/* Columns */}
          <div className="grid gap-10 py-14 sm:grid-cols-2 sm:py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:gap-12">
            {/* Company Info */}
            <div>
              <Link href="/" className="inline-block" aria-label="Growthify Services home">
                <span className="block leading-none">
                  <span className="block text-xl font-extrabold tracking-tight">GROWTHIFY</span>
                  <span className="mt-0.5 block text-[10px] font-bold tracking-[0.35em] text-brand-200/70">SERVICES</span>
                </span>
              </Link>
              <p className="mt-4 bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-xs font-bold uppercase tracking-[0.15em] text-transparent">
                Turning Vision Into Destiny
              </p>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-100/70">
                Your trusted technology partner for digital transformation. We turn ideas into powerful digital solutions
                that drive growth.
              </p>
              <ul className="mt-6 flex gap-2.5">
                {socials.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-brand-100/80 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600 hover:text-white hover:shadow-[0_0_20px_rgb(124_58_237/0.6)] hover:ring-brand-400"
                    >
                      <s.icon className="h-4 w-4" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <nav aria-label="Services">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
              <ul className="mt-5 space-y-3">
                {services.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className={linkCls}>
                      <span className="h-px w-0 bg-brand-400 transition-all duration-300 group-hover:w-3" aria-hidden />
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Company */}
            <nav aria-label="Company">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
              <ul className="mt-5 space-y-3">
                {companyLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={linkCls}>
                      <span className="h-px w-0 bg-brand-400 transition-all duration-300 group-hover:w-3" aria-hidden />
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Get In Touch</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li>
                  <a href={`mailto:${contact.email}`} className="flex items-start gap-3 text-brand-100/70 transition-colors hover:text-white">
                    <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-400" aria-hidden />
                    <span className="break-all">{contact.email}</span>
                  </a>
                </li>
                <li>
                  <a href={contact.phoneHref} className="flex items-start gap-3 text-brand-100/70 transition-colors hover:text-white">
                    <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-400" aria-hidden />
                    {contact.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-brand-100/70">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-400" aria-hidden />
                  <address className="not-italic leading-relaxed">{contact.address}</address>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-6 border-t border-white/10 py-10 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-bold">
                Get the latest from <span className="text-brand-300">Growthify</span>
              </h3>
              <p className="mt-1 text-sm text-brand-100/60">Share your email so we can send you guides and industry news.</p>
            </div>
            <form onSubmit={handleSubscribe} className="w-full md:w-auto">
              <div className="flex rounded-xl bg-white/5 p-1.5 ring-1 ring-white/10 transition focus-within:ring-2 focus-within:ring-brand-400">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setSubscribed(false);
                  }}
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 bg-transparent px-3 text-sm text-white placeholder:text-brand-100/40 focus:outline-none md:w-72"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand-600 to-brand-500 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_24px_rgb(139_92_246/0.6)]"
                >
                  Subscribe <Send className="h-4 w-4" aria-hidden />
                </button>
              </div>
              <p role="status" className="mt-2 min-h-5 text-sm text-emerald-300">
                {subscribed && (
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4" aria-hidden /> Thanks for subscribing!
                  </span>
                )}
              </p>
            </form>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-center text-xs text-brand-100/60 sm:text-sm md:flex-row md:text-left">
            <p>© {new Date().getFullYear()} Growthify Services. All rights reserved.</p>
            <p>
              Made by <span className="text-brand-300">Growthify Services Team 💜</span>
            </p>
            <div className="flex gap-6">
              <Link href="#" className="transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="transition-colors hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
