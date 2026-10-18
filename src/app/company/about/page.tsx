import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, Eye, Heart, Target, Users, Flame } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import GlowCard from "@/components/ui/GlowCard";
import SectionHeading from "@/components/ui/SectionHeading";
import TeamMosaic from "@/components/about/TeamMosaic";
import TeamAvatar from "@/components/about/TeamAvatar";
import { gradientText, primaryBtn, secondaryBtn } from "@/components/ui/styles";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "About Us | Growthify Services",
  description:
    "Growthify is a technology company helping businesses thrive in the digital age, with 100+ successful projects delivered.",
};

const values = [
  {
    icon: Target,
    title: "Excellence",
    desc: "We strive for excellence in everything we do, delivering quality that exceeds expectations.",
  },
  {
    icon: Heart,
    title: "Integrity",
    desc: "We operate with complete transparency and honesty in all our business dealings.",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "We believe in the power of teamwork and partnership with our clients.",
  },
  {
    icon: Award,
    title: "Innovation",
    desc: "We continuously explore new technologies and approaches to solve complex problems.",
  },
];

const missionVision = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in an ever-evolving digital landscape.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To be the most trusted technology partner for businesses worldwide, known for delivering exceptional quality, innovation, and measurable business impact.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Growthify"
        title={
          <>
            We Build Digital <span className={gradientText}>Futures</span>
          </>
        }
        description="Growthify is a technology company dedicated to helping businesses thrive in the digital age. With over 2 years of experience, we've delivered 100+ successful projects worldwide."
        actions={
          <>
            <Link href="/contact" className={primaryBtn}>
              Work With Us
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </Link>
            <Link href="/portfolio" className={secondaryBtn}>
              See Our Work
            </Link>
          </>
        }
      >
        <TeamMosaic />
      </PageHero>

      {/* Mission & Vision */}
      <section className="relative overflow-hidden bg-night py-20 text-white sm:py-28">
        <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" aria-hidden />
        <div className="absolute left-1/2 top-0 h-72 w-[56rem] max-w-full -translate-x-1/2 rounded-full bg-brand-700/30 blur-[120px]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            dark
            eyebrow="Why we exist"
            title={
              <>
                Driven by purpose, <span className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">built for impact</span>
              </>
            }
          />
          <div className="grid gap-6 md:grid-cols-2">
            {missionVision.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.1}>
                <GlowCard
                  dark
                  className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 sm:p-10"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-800 shadow-[0_0_30px_rgb(124_58_237/0.5)]">
                    <m.icon className="h-7 w-7" aria-hidden />
                  </span>
                  <h3 className="mt-6 text-2xl font-bold">{m.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-brand-100/70 sm:text-lg">{m.desc}</p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our values"
            title={
              <>
                Our core <span className={gradientText}>values</span>
              </>
            }
            description="The principles that guide everything we do at Growthify."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <GlowCard className="h-full rounded-2xl border border-brand-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-glow">
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-brand-600 group-hover:to-brand-800 group-hover:text-white">
                      <v.icon className="h-6 w-6" aria-hidden />
                    </span>
                    <span className="text-3xl font-extrabold text-brand-100 transition-colors group-hover:text-brand-200" aria-hidden>
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{v.desc}</p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="scroll-mt-24 bg-gradient-to-b from-brand-50/70 to-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our people"
            title={
              <>
                Leadership <span className={gradientText}>team</span>
              </>
            }
            description="Meet the people driving innovation at Growthify."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <article className="group h-full overflow-hidden rounded-3xl border border-brand-100 bg-white text-center shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-glow">
                  {/* Banner */}
                  <div className="relative h-28 overflow-hidden bg-gradient-to-br from-brand-600 via-brand-800 to-brand-950">
                    <div className="bg-grid-dark absolute inset-0" aria-hidden />
                    <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-brand-400/40 blur-2xl transition-transform duration-700 group-hover:scale-150" aria-hidden />
                  </div>
                  {/* Portrait with gradient ring */}
                  <div className="relative mx-auto -mt-16 w-fit rounded-full bg-gradient-to-br from-brand-300 via-brand-500 to-brand-800 p-1 shadow-[0_16px_40px_-12px_rgb(76_29_149/0.6)] transition-transform duration-500 group-hover:scale-105">
                    <TeamAvatar
                      src={m.image}
                      crop={m.crop}
                      alt={m.name}
                      sizes="160px"
                      className="h-32 w-32 ring-4 ring-white"
                    />
                  </div>
                  <div className="px-5 pb-7 pt-5">
                    <h3 className="text-lg font-bold text-ink">{m.name}</h3>
                    <p className="mx-auto mt-2 w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
                      {m.role}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 px-6 py-14 text-center text-white shadow-[0_40px_100px_-30px_rgb(76_29_149/0.8)] sm:px-12 sm:py-20">
          <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" aria-hidden />
          <div className="animate-blob absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-400/40 blur-3xl" aria-hidden />
          <div className="animate-blob absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-brand-500/30 blur-3xl [animation-delay:-8s]" aria-hidden />
          <div className="relative">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-200">✦ Get in touch</span>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Ready to start your journey with us?{" "}
              <span className="bg-gradient-to-r from-brand-200 to-brand-400 bg-clip-text text-transparent">
                Let&apos;s build something amazing together.
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-brand-100/80 sm:text-lg">
              Let&apos;s discuss how we can help your business grow with technology.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-brand-800 shadow-[0_10px_30px_-10px_rgb(255_255_255/0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_5px_rgb(255_255_255/0.15),0_18px_40px_-10px_rgb(255_255_255/0.5)]"
              >
                Get Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium italic ring-1 ring-white/20">
                <Flame className="h-4 w-4 text-brand-200" aria-hidden /> We get booked fast
              </span>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
