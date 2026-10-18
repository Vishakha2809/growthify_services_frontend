"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Quote, Star } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const testimonials = [
  {
    name: "Ankit Rathore",
    content: "Growthify delivered beyond expectations. Premium quality and solid execution.",
    rating: 5,
  },
  {
    name: "Aastha Mahajan",
    content: "Very professional team with deep technical expertise.",
    rating: 5,
  },
  {
    name: "Bhumika Nayak",
    content: "AI solution completely changed how we work with data.",
    rating: 5,
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

const AUTOPLAY_MS = 6000;

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const autoplay = !paused && !reduce;

  const go = (next: number) => {
    setDirection(next > active || (active === testimonials.length - 1 && next === 0) ? 1 : -1);
    setActive((next + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(() => {
      setDirection(1);
      setActive((i) => (i + 1) % testimonials.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [autoplay]);

  const t = testimonials[active];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-brand-50/70 to-white py-20 sm:py-28">
      <div className="pointer-events-none absolute left-[-10%] top-1/3 h-96 w-96 rounded-full bg-brand-300/30 blur-[100px]" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 right-[-5%] h-96 w-96 rounded-full bg-brand-500/20 blur-[110px]" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8">
        {/* LEFT – heading + rating summary */}
        <Reveal className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700 ring-1 ring-brand-100">
            <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Loved by the clients{" "}
            <span className="bg-gradient-to-r from-brand-700 to-brand-500 bg-clip-text text-transparent">we build for</span>
          </h2>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            Trusted by businesses who care about quality and outcomes. Here&apos;s what they say about working with us.
          </p>

          <a
            href="https://share.google/ytbZDfvsGiogHKb9l"
            target="_blank"
            rel="noopener noreferrer"
            className="group mx-auto mt-8 flex max-w-sm items-center gap-5 rounded-2xl border border-brand-100 bg-white/80 p-5 text-left shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-glow lg:mx-0"
          >
            <span className="text-5xl font-extrabold tracking-tight text-ink">4.9</span>
            <span className="flex-1">
              <span className="flex gap-0.5" aria-hidden>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </span>
              <span className="mt-1 block text-sm font-medium text-gray-600">Based on 50+ Google reviews</span>
            </span>
            <ArrowUpRight
              className="h-5 w-5 text-gray-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600"
              aria-hidden
            />
          </a>
        </Reveal>

        {/* RIGHT – spotlight carousel */}
        <Reveal delay={0.1}>
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            role="region"
            aria-roledescription="carousel"
            aria-label="Client testimonials"
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 p-8 text-white shadow-[0_40px_90px_-30px_rgb(76_29_149/0.8)] sm:p-12">
              <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" aria-hidden />
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-400/30 blur-3xl" aria-hidden />
              <Quote className="absolute right-8 top-8 h-20 w-20 rotate-180 text-white/10 sm:h-28 sm:w-28" aria-hidden />

              <div className="relative min-h-[220px] sm:min-h-[240px]" aria-live={autoplay ? "off" : "polite"}>
                <AnimatePresence mode="wait" custom={direction} initial={false}>
                  <motion.figure
                    key={active}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -40 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="flex h-full flex-col"
                  >
                    <div className="flex gap-1" role="img" aria-label={`${t.rating} out of 5 stars`}>
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden />
                      ))}
                    </div>
                    <blockquote className="mt-6 text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                      &ldquo;{t.content}&rdquo;
                    </blockquote>
                    <figcaption className="mt-8 flex items-center gap-4">
                      <span
                        className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-sm font-bold ring-1 ring-white/25"
                        aria-hidden
                      >
                        {initials(t.name)}
                      </span>
                      <span>
                        <span className="block font-bold">{t.name}</span>
                        <span className="block text-sm text-brand-200/80">Growthify client</span>
                      </span>
                    </figcaption>
                  </motion.figure>
                </AnimatePresence>
              </div>

              {/* Controls */}
              <div className="relative mt-10 flex items-center justify-between gap-4">
                <div className="flex flex-1 gap-2" aria-hidden>
                  {testimonials.map((item, i) => (
                    <span key={item.name} className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/15">
                      {i === active && (
                        <motion.span
                          key={`${active}-${autoplay}`}
                          className="absolute inset-y-0 left-0 rounded-full bg-white"
                          initial={{ width: autoplay ? "0%" : "100%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: autoplay ? AUTOPLAY_MS / 1000 : 0, ease: "linear" }}
                        />
                      )}
                      {i < active && <span className="absolute inset-0 rounded-full bg-white/40" />}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => go(active - 1)}
                    aria-label="Previous testimonial"
                    className="grid h-11 w-11 place-items-center rounded-full ring-1 ring-white/25 transition-all hover:bg-white hover:text-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(active + 1)}
                    aria-label="Next testimonial"
                    className="grid h-11 w-11 place-items-center rounded-full bg-white text-brand-800 transition-all hover:shadow-[0_0_24px_rgb(255_255_255/0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </button>
                </div>
              </div>
            </div>

            {/* Client chips */}
            <div className="mt-5 grid grid-cols-3 gap-3">
              {testimonials.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Show testimonial from ${item.name}`}
                  aria-pressed={i === active}
                  className={`flex items-center gap-3 rounded-2xl border p-3 text-left transition-all duration-300 ${
                    i === active
                      ? "border-brand-300 bg-white shadow-glow"
                      : "border-brand-100 bg-white/60 hover:border-brand-200 hover:bg-white"
                  }`}
                >
                  <span
                    className={`grid h-9 w-9 flex-shrink-0 place-items-center rounded-full text-xs font-bold transition-colors ${
                      i === active ? "bg-gradient-to-br from-brand-600 to-brand-800 text-white" : "bg-brand-50 text-brand-700"
                    }`}
                    aria-hidden
                  >
                    {initials(item.name)}
                  </span>
                  <span className="hidden truncate text-sm font-semibold text-ink sm:block">{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
