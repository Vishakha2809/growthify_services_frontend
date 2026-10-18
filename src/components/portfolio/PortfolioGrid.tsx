"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { categories, projects } from "@/data/portfolio";

const ease = [0.22, 1, 0.36, 1] as const;

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  const countFor = (c: string) => (c === "All" ? projects.length : projects.filter((p) => p.category === c).length);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Filter */}
      <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
        <div
          role="group"
          aria-label="Filter projects by category"
          className="mx-auto flex w-max gap-1 rounded-2xl border border-brand-100 bg-white/80 p-1.5 shadow-soft backdrop-blur"
        >
          {categories.map((category) => {
            const active = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={active}
                className={`relative whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 ${
                  active ? "text-white" : "text-gray-600 hover:text-brand-700"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="portfolio-filter"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-700 to-brand-500 shadow-[0_8px_20px_-8px_rgb(109_40_217/0.8)]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative flex items-center gap-2">
                  {category}
                  <span
                    className={`rounded-md px-1.5 text-[11px] ${active ? "bg-white/20" : "bg-brand-50 text-brand-700"}`}
                  >
                    {countFor(category)}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {filteredProjects.length} projects
      </p>

      {/* Projects Grid */}
      <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-soft transition-[border-color,box-shadow] duration-500 hover:border-brand-300 hover:shadow-glow"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-brand-50">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/10 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-90"
                  aria-hidden
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-800 backdrop-blur">
                  {project.category}
                </span>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-800 shadow-lg transition-all duration-500 hover:bg-brand-50 focus-visible:translate-y-0 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-300 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
                  >
                    View Project <ArrowUpRight className="h-4 w-4" aria-hidden />
                    <span className="sr-only">: {project.title} (opens in a new tab)</span>
                  </a>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-lg font-bold text-ink transition-colors group-hover:text-brand-700">{project.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{project.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <li key={tech} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-800">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
