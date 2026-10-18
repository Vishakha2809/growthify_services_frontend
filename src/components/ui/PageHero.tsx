"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  /* Optional right-hand visual; without it the hero is centred */
  children?: React.ReactNode;
};

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease },
});

/* Shared hero for inner pages: purple gradient mesh, subtle grid, staggered entrance */
export default function PageHero({ eyebrow, title, description, actions, children }: PageHeroProps) {
  const split = Boolean(children);
  return (
    <section className="relative -mt-[72px] overflow-hidden bg-[#faf8ff] pb-20 pt-[128px] sm:pb-24 lg:-mt-20 lg:pt-[160px]">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="animate-blob absolute -left-[10%] -top-[25%] h-[460px] w-[460px] rounded-full bg-brand-300/50 blur-[110px]" />
        <div className="animate-blob absolute right-[-8%] top-0 h-[480px] w-[480px] rounded-full bg-brand-500/25 blur-[120px] [animation-delay:-7s]" />
        <div className="bg-grid absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white" />
      </div>

      <div
        className={`relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${
          split ? "grid items-center gap-14 lg:grid-cols-2 lg:gap-12" : ""
        }`}
      >
        <div className={split ? "text-center lg:text-left" : "mx-auto max-w-3xl text-center"}>
          <motion.span
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-800 shadow-soft backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" aria-hidden />
            {eyebrow}
          </motion.span>
          <motion.h1
            {...fadeUp(0.1)}
            className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl xl:text-6xl"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              {...fadeUp(0.2)}
              className={`mt-6 text-base text-gray-600 sm:text-lg ${split ? "mx-auto max-w-xl lg:mx-0" : "mx-auto max-w-2xl"}`}
            >
              {description}
            </motion.p>
          )}
          {actions && (
            <motion.div
              {...fadeUp(0.3)}
              className={`mt-9 flex flex-col gap-3 sm:flex-row ${split ? "justify-center lg:justify-start" : "justify-center"}`}
            >
              {actions}
            </motion.div>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
