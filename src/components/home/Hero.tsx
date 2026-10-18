"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, ArrowUpRight, Award, Briefcase, Layers, Star, Users, type LucideIcon } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const lines: { word: string; accent?: boolean }[][] = [
  [{ word: "We" }, { word: "Build" }, { word: "Software" }],
  [{ word: "That" }, { word: "Scales", accent: true }, { word: "Your", accent: true }, { word: "Business", accent: true }],
];

/* Real proof points only — they rotate through the stacked pill */
const proofs: { icon: LucideIcon; text: string }[] = [
  { icon: Star, text: "Rated 4.9★ on Google from 50+ client reviews" },
  { icon: Briefcase, text: "100+ projects delivered across web, mobile & AI" },
  { icon: Users, text: "50+ happy clients, from startups to enterprises" },
  { icon: Layers, text: "Design, development, AI & QA under one roof" },
  { icon: Award, text: "2+ years of building products that scale" },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const wordVariant: Variants = {
  hidden: { opacity: 0, y: "0.5em", filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease } },
};

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

export default function Hero() {
  return (
    <section className="relative -mt-[72px] flex min-h-[100svh] items-center overflow-hidden bg-night pb-32 pt-[120px] text-white lg:-mt-20 lg:pt-[130px]">
      <Backdrop />

      <div className="relative mx-auto w-full max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <motion.span
          {...fadeUp(0)}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] py-1.5 pl-1.5 pr-4 text-xs font-medium text-brand-100 backdrop-blur sm:text-sm"
        >
          <span className="rounded-full bg-gradient-to-r from-brand-600 to-brand-400 px-2.5 py-0.5 text-[11px] font-bold text-white">
            Growthify
          </span>
          Your tech partner for web, mobile &amp; AI
        </motion.span>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-7 text-[2.5rem] font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-6xl lg:text-[4.5rem]"
        >
          {lines.map((line, li) => (
            <span key={li} className="block whitespace-normal lg:whitespace-nowrap">
              {line.map(({ word, accent }) => (
                <motion.span
                  key={word}
                  variants={wordVariant}
                  className={`mr-[0.22em] inline-block last:mr-0 ${
                    accent ? "hero-shimmer bg-clip-text pb-2 text-transparent" : ""
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        <motion.p {...fadeUp(0.8)} className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-100/65 sm:text-lg">
          We help startups and enterprises design, develop and scale modern digital products — from pixel-perfect UI
          to cloud-ready, AI-powered platforms.
        </motion.p>

        <motion.div {...fadeUp(0.95)} className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-brand-600 to-brand-400 px-7 py-3.5 font-semibold text-white shadow-[0_0_40px_-8px_rgb(139_92_246/0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_5px_rgb(139_92_246/0.25),0_0_50px_-6px_rgb(167_139_250/0.9)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-400/60"
          >
            <span
              className="absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-[300%]"
              aria-hidden
            />
            <span className="relative">Get Free Consultation</span>
            <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </Link>
          <Link
            href="/portfolio"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white/[0.06] px-7 py-3.5 font-semibold text-white ring-1 ring-white/15 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:ring-white/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
          >
            View Our Work
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
          </Link>
        </motion.div>

        <motion.div {...fadeUp(1.1)} className="mt-14">
          <ProofStack />
        </motion.div>
      </div>
    </section>
  );
}

/* Stacked, rotating proof pills: front pill lifts away, the rest move forward */
function ProofStack() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const n = proofs.length;

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setActive((i) => (i + 1) % n), 3000);
    return () => clearInterval(id);
  }, [reduce, n]);

  return (
    <>
      <ul className="sr-only">
        {proofs.map((p) => (
          <li key={p.text}>{p.text}</li>
        ))}
      </ul>
      <div className="relative mx-auto h-[100px] max-w-xl sm:h-[92px]" aria-hidden>
        {proofs.map((p, i) => {
          const offset = (i - active + n) % n;
          const leaving = offset === n - 1;
          const Icon = p.icon;
          return (
            <motion.div
              key={p.text}
              className="absolute inset-x-0 top-0 mx-auto flex h-[68px] items-center justify-center gap-3 rounded-2xl border px-5 text-left text-sm font-medium leading-snug sm:h-[60px] sm:text-[15px]"
              initial={false}
              animate={
                leaving
                  ? { y: -24, scale: 1.03, opacity: 0, filter: "blur(6px)", zIndex: 10 }
                  : {
                      y: Math.min(offset, 3) * 12,
                      scale: 1 - Math.min(offset, 3) * 0.06,
                      opacity: offset === 0 ? 1 : offset === 1 ? 0.75 : offset === 2 ? 0.45 : 0,
                      filter: `blur(${offset === 0 ? 0 : offset * 1.2}px)`,
                      zIndex: n - offset,
                      // front card is brightest; cards behind get lighter edges so the stack reads
                      backgroundColor: offset === 0 ? "rgb(36 19 74)" : "rgb(52 30 102)",
                      borderColor: offset === 0 ? "rgb(167 139 250 / 0.35)" : "rgb(196 181 253 / 0.25)",
                    }
              }
              transition={{ duration: 0.7, ease }}
              style={{ boxShadow: "0 18px 40px -18px rgb(0 0 0 / 0.8)" }}
            >
              <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-300/30">
                <Icon className="h-3.5 w-3.5" />
              </span>
              <span>{p.text}</span>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}

function Backdrop() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {/* spotlight from the top */}
      <div className="absolute left-1/2 top-[-35%] h-[85%] w-[110%] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(124_58_237/0.5),transparent)]" />
      <div className="animate-blob absolute -left-[15%] top-[30%] h-[520px] w-[520px] rounded-full bg-brand-700/35 blur-[130px]" />
      <div className="animate-blob absolute -right-[15%] top-[40%] h-[520px] w-[520px] rounded-full bg-brand-600/25 blur-[130px] [animation-delay:-8s]" />
      {/* grid fading out from the centre */}
      <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_60%_55%_at_50%_45%,black,transparent_90%)]" />
      {/* light beams */}
      <div className="absolute left-1/2 top-0 h-[70%] w-px -translate-x-[220px] bg-gradient-to-b from-brand-300/0 via-brand-300/25 to-transparent" />
      <div className="absolute left-1/2 top-0 h-[70%] w-px translate-x-[220px] bg-gradient-to-b from-brand-300/0 via-brand-300/25 to-transparent" />
      {/* horizon */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-950/60 to-transparent" />
    </div>
  );
}
