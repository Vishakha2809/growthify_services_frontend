import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import { gradientText } from "@/components/ui/styles";

export const metadata: Metadata = {
  title: "Portfolio | Growthify Services",
  description:
    "Explore our portfolio of successful web, mobile, UI/UX, AI/ML and custom software projects across various industries.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our portfolio"
        title={
          <>
            Our Work Speaks <span className={gradientText}>For Itself</span>
          </>
        }
        description="Explore our portfolio of successful projects across various industries. Each project showcases our commitment to excellence and innovation."
      />

      <div className="pb-20 sm:pb-28">
        <PortfolioGrid />
      </div>

      {/* CTA */}
      <section className="px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 px-6 py-14 text-center text-white shadow-[0_40px_100px_-30px_rgb(76_29_149/0.8)] sm:px-12 sm:py-20">
          <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" aria-hidden />
          <div className="animate-blob absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-400/40 blur-3xl" aria-hidden />
          <div className="animate-blob absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-brand-500/30 blur-3xl [animation-delay:-8s]" aria-hidden />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Want your project featured here?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-brand-100/80 sm:text-lg">
              Let&apos;s create something amazing together. Share your idea and we&apos;ll bring it to life.
            </p>
            <Link
              href="/contact"
              className="group mt-10 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-brand-800 shadow-[0_10px_30px_-10px_rgb(255_255_255/0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_5px_rgb(255_255_255/0.15),0_18px_40px_-10px_rgb(255_255_255/0.5)]"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
