import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

/* Highlights from /portfolio */
const projects = [
  {
    title: "Alpha Insight",
    category: "Web Development",
    image: "/portfolio/alpha.jpg",
    desc: "SEBI-registered research platform delivering real-time trading signals via live dashboard, SMS and WhatsApp.",
    tech: ["Next.js", "FastAPI", "PostgreSQL"],
    url: "https://www.alphainsiight.com/",
  },
  {
    title: "Builds Your Mind",
    category: "Web Development",
    image: "/portfolio/buildsyourmind.png",
    desc: "Website for a purpose-driven brand creating eco-friendly, practical learning kits for students.",
    tech: ["Next.js", "Docker", "MySQL"],
    url: "https://buildsyourmind.in/",
  },
  {
    title: "FreshersHunt Career Portal",
    category: "Web Development",
    image: "/portfolio/job.jpg",
    desc: "Career platform helping graduates find IT jobs, off-campus drives, internships and free learning resources.",
    tech: ["React", "Next.js", "Node.js"],
    url: null,
  },
  {
    title: "Anubhuti Donation Management",
    category: "Custom Software",
    image: "/portfolio/donor-management-software.png",
    desc: "Desktop system to record, track and report donations with secure donor records and transparent reporting.",
    tech: ["Python", "Django", "PostgreSQL"],
    url: null,
  },
];

export default function PortfolioShowcase() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our work"
          title={
            <>
              Products we&apos;re <span className="bg-gradient-to-r from-brand-700 to-brand-500 bg-clip-text text-transparent">proud of</span>
            </>
          }
          description="A selection of platforms we've designed, engineered and launched for our clients."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => {
            const card = (
              <article className="group h-full overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-brand-300 hover:shadow-glow">
                <div className="relative aspect-[16/10] overflow-hidden bg-brand-50">
                  <Image
                    src={p.image}
                    alt={`${p.title} project preview`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-800 backdrop-blur">
                    {p.category}
                  </span>
                  {p.url && (
                    <span className="absolute bottom-4 right-4 flex translate-y-2 items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-800 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      Visit site <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-ink transition-colors group-hover:text-brand-700">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{p.desc}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <li key={t} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-800">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
            return (
              <Reveal key={p.title} delay={(i % 2) * 0.1}>
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-300">
                    {card}
                  </a>
                ) : (
                  card
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 rounded-xl border border-brand-200 bg-white px-6 py-3 font-semibold text-brand-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:shadow-soft"
          >
            View all projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
