"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Code2, PenTool, Rocket, Search, type LucideIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const steps: { title: string; icon: LucideIcon; desc: string; points: string[] }[] = [
  {
    title: "Discover",
    icon: Search,
    desc: "We dig into your goals, users and constraints to define what success looks like.",
    points: ["Requirement workshops", "Scope & roadmap"],
  },
  {
    title: "Design",
    icon: PenTool,
    desc: "Wireframes become polished, user-tested interfaces and a clear technical architecture.",
    points: ["UX flows & prototypes", "System architecture"],
  },
  {
    title: "Develop",
    icon: Code2,
    desc: "Agile sprints with regular demos, clean code and continuous quality checks.",
    points: ["Sprint demos", "QA & code reviews"],
  },
  {
    title: "Deploy",
    icon: Rocket,
    desc: "We launch to production, monitor performance and keep improving after go-live.",
    points: ["Launch & monitoring", "Ongoing support"],
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section className="relative overflow-hidden bg-night py-20 text-white sm:py-28">
      <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" aria-hidden />
      <div className="absolute left-1/2 top-0 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-brand-700/30 blur-[120px]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark
          eyebrow="How we work"
          title={
            <>
              A proven process from <span className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">idea to launch</span>
            </>
          }
          description="Four clear stages, full transparency and a team that stays with you after release."
        />

        <div ref={ref} className="relative">
          {/* Track + scroll-driven fill (horizontal on desktop, vertical on mobile) */}
          <div className="absolute left-6 top-6 h-[calc(100%-3rem)] w-px bg-white/10 lg:left-[12.5%] lg:right-[12.5%] lg:h-px lg:w-auto" aria-hidden>
            <motion.div style={{ scaleY: progress }} className="h-full w-full origin-top bg-gradient-to-b from-brand-400 to-brand-600 lg:hidden" />
            <motion.div style={{ scaleX: progress }} className="hidden h-full w-full origin-left bg-gradient-to-r from-brand-400 to-brand-600 lg:block" />
          </div>

          <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-6">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <li key={s.title} className="lg:text-center">
                  <Reveal delay={i * 0.12} className="relative pl-20 lg:pl-0">
                    <div className="absolute left-0 top-0 lg:static lg:mx-auto lg:w-fit">
                      <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-800 shadow-[0_0_0_6px_rgb(15_7_32),0_0_30px_rgb(124_58_237/0.6)]">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:bg-white/[0.07] lg:mt-6">
                      <span className="text-xs font-semibold uppercase tracking-widest text-brand-300">Step 0{i + 1}</span>
                      <h3 className="mt-2 text-xl font-bold">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-brand-100/70">{s.desc}</p>
                      <ul className="mt-4 flex flex-wrap gap-2 lg:justify-center">
                        {s.points.map((p) => (
                          <li key={p} className="rounded-full bg-brand-500/15 px-3 py-1 text-xs font-medium text-brand-200 ring-1 ring-brand-400/20">
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
