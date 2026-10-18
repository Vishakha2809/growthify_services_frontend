"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const faqs = [
  {
    q: "What services does Growthify Services offer?",
    a: "We cover the full product lifecycle: UI/UX design, web development, mobile app development, custom software, AI/ML solutions, QA & testing, and ongoing support & maintenance.",
  },
  {
    q: "Do you work with startups or only enterprises?",
    a: "Both. We help early-stage startups launch their first product and work with established businesses to modernise and scale existing systems.",
  },
  {
    q: "How long does a typical project take?",
    a: "It depends on scope. After a discovery call we share a clear roadmap with milestones, so you know exactly what will be delivered and when.",
  },
  {
    q: "How much will my project cost?",
    a: "Every project is different, so we provide a transparent quote once we understand your requirements. The initial consultation is free.",
  },
  {
    q: "Which technologies do you use?",
    a: "We pick the right tool for the job — commonly React, Next.js, Node.js, Python, Java/Spring Boot, Flutter, AWS, Docker, and AI frameworks like TensorFlow, PyTorch and LangChain.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. Our Support & Maintenance service keeps your product secure, updated and running smoothly, including bug fixes, monitoring and feature improvements.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Frequently asked <span className="bg-gradient-to-r from-brand-700 to-brand-500 bg-clip-text text-transparent">questions</span>
            </>
          }
        />

        <Reveal className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            const btnId = `${baseId}-q${i}`;
            const panelId = `${baseId}-a${i}`;
            return (
              <div
                key={f.q}
                className={`rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen ? "border-brand-300 shadow-glow" : "border-brand-100 shadow-soft hover:border-brand-200"
                }`}
              >
                <h3>
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 rounded-2xl px-6 py-5 text-left font-semibold text-ink focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-200"
                  >
                    {f.q}
                    <span
                      className={`grid h-8 w-8 flex-shrink-0 place-items-center rounded-full transition-all duration-300 ${
                        isOpen ? "rotate-45 bg-brand-700 text-white" : "bg-brand-50 text-brand-700"
                      }`}
                      aria-hidden
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 leading-relaxed text-gray-600">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
