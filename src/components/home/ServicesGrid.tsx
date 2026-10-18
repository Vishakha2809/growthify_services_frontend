import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/site";
import GlowCard from "@/components/ui/GlowCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

/* First card is wide from tablet up, last card on desktop only: 2+1 / 1+1+1 / 1+2 bento */
const layouts = {
  md: {
    cell: "md:col-span-2",
    card: "md:grid md:grid-cols-[1fr_1.1fr] md:items-stretch md:gap-2",
    media: "aspect-[16/10] md:order-2 md:aspect-auto md:min-h-[300px]",
    body: "md:justify-center md:px-6 md:py-6",
    title: "text-2xl lg:text-3xl",
  },
  lg: {
    cell: "lg:col-span-2",
    card: "flex flex-col lg:grid lg:grid-cols-[1fr_1.1fr] lg:items-stretch lg:gap-2",
    media: "aspect-[16/10] lg:order-2 lg:aspect-auto lg:min-h-[300px]",
    body: "lg:justify-center lg:px-6 lg:py-6",
    title: "text-xl lg:text-3xl",
  },
};
const layoutFor = (i: number) => (i === 0 ? layouts.md : i === services.length - 1 ? layouts.lg : null);

export default function ServicesGrid() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-40 h-[500px] w-[900px] max-w-full -translate-x-1/2 rounded-full bg-brand-200/30 blur-[120px]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              End-to-end services to{" "}
              <span className="bg-gradient-to-r from-brand-700 to-brand-500 bg-clip-text text-transparent">grow your product</span>
            </>
          }
          description="From the first wireframe to production and beyond — one team for design, engineering, AI and quality."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const wide = layoutFor(i);
            return (
              <Reveal key={s.href} delay={(i % 3) * 0.08} className={wide?.cell ?? ""}>
                <Link
                  href={s.href}
                  className="block h-full rounded-3xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-300"
                >
                  <GlowCard
                    className={`h-full rounded-3xl border border-brand-100 bg-white p-3 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-glow ${
                      wide ? wide.card : "flex flex-col"
                    }`}
                  >
                    {/* Illustration */}
                    <div
                      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-50 via-white to-brand-100/70 ${
                        wide ? wide.media : "aspect-[16/10]"
                      }`}
                    >
                      <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />
                      <Image
                        src={s.image}
                        alt=""
                        fill
                        sizes={wide ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"}
                        className="object-cover object-[50%_40%] mix-blend-multiply transition-transform duration-700 ease-out [transform:scale(1.15)] group-hover:[transform:scale(1.22)]"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-white/80 px-2.5 py-1 text-xs font-bold text-brand-700 shadow-sm backdrop-blur">
                        0{i + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div className={`flex flex-1 flex-col px-4 pb-4 pt-6 ${wide?.body ?? ""}`}>
                      <h3 className={`font-bold text-ink transition-colors group-hover:text-brand-700 ${wide ? wide.title : "text-xl"}`}>
                        {s.name}
                      </h3>
                      <p className={`mt-2 leading-relaxed text-gray-600 ${wide ? "text-sm sm:text-base" : "text-sm"}`}>{s.desc}</p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {s.tags.map((t) => (
                          <li key={t} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-800 ring-1 ring-brand-100">
                            {t}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-6 flex items-center justify-between border-t border-brand-100 pt-5 text-sm font-semibold text-brand-700 lg:mt-auto">
                        Explore service
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition-all duration-300 group-hover:rotate-45 group-hover:bg-gradient-to-br group-hover:from-brand-600 group-hover:to-brand-800 group-hover:text-white group-hover:shadow-[0_8px_20px_-6px_rgb(109_40_217/0.7)]">
                          <ArrowUpRight className="h-4 w-4" aria-hidden />
                        </span>
                      </span>
                    </div>
                  </GlowCard>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
