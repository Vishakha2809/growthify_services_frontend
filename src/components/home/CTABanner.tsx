import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { contact } from "@/data/site";

export default function CTABanner() {
  return (
    <section className="px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 px-6 py-14 text-center text-white shadow-[0_40px_100px_-30px_rgb(76_29_149/0.8)] sm:px-12 sm:py-20">
        <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" aria-hidden />
        <div className="animate-blob absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-400/40 blur-3xl" aria-hidden />
        <div className="animate-blob absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-brand-500/30 blur-3xl [animation-delay:-8s]" aria-hidden />

        <div className="relative">
          <h2 className="mx-auto max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Ready to turn your idea into a product people love?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-brand-100/80 sm:text-lg">
            Tell us about your project and get a free consultation with a clear plan, timeline and quote.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-brand-800 shadow-[0_10px_30px_-10px_rgb(255_255_255/0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_5px_rgb(255_255_255/0.15),0_18px_40px_-10px_rgb(255_255_255/0.5)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 font-semibold text-white ring-1 ring-white/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              <Mail className="h-4 w-4" aria-hidden /> {contact.email}
            </a>
          </div>
          <a href={contact.phoneHref} className="mt-6 inline-flex items-center gap-2 text-sm text-brand-100/70 transition-colors hover:text-white">
            <Phone className="h-4 w-4" aria-hidden /> Or call us at {contact.phone}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
