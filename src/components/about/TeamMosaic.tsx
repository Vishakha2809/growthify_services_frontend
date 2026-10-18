"use client";

import TeamAvatar from "@/components/about/TeamAvatar";
import { motion } from "framer-motion";
import { ArrowDown, Award, Briefcase, MapPin, Sparkles, Star, Users } from "lucide-react";
import { team } from "@/data/team";

const ease = [0.22, 1, 0.36, 1] as const;

const float = (duration: number, delay = 0) => ({
  animate: { y: [0, -10, 0] },
  transition: { duration, delay, repeat: Infinity, ease: "easeInOut" as const },
});

const stats = [
  { icon: Award, value: "2+", label: "Years of experience" },
  { icon: Users, value: "50+", label: "Happy clients" },
  { icon: Briefcase, value: "100+", label: "Projects delivered" },
  { icon: Star, value: "4.9★", label: "Google rating" },
];

/* Hero visual for the About page: company snapshot card with the team as small avatars */
export default function TeamMosaic() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.25, ease }}
      className="relative mx-auto w-full max-w-[500px] py-6"
    >
      <div className="absolute inset-[8%] rounded-full bg-gradient-to-br from-brand-400/50 to-brand-700/40 blur-3xl" aria-hidden />

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 p-7 text-white shadow-[0_40px_90px_-30px_rgb(46_16_101/0.8)] sm:p-8">
        <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_75%)]" aria-hidden />
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-400/30 blur-3xl" aria-hidden />

        <div className="relative">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-200">Growthify at a glance</p>

          <dl className="mt-6 grid grid-cols-2 gap-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.08, ease }}
                className="flex flex-col-reverse rounded-2xl bg-white/[0.06] p-4 ring-1 ring-white/10 transition-colors hover:bg-white/10"
              >
                <dt className="mt-1 text-xs text-brand-100/70">{s.label}</dt>
                <dd className="flex items-center justify-between text-2xl font-extrabold sm:text-3xl">
                  {s.value}
                  <s.icon className="h-5 w-5 text-brand-300" aria-hidden />
                </dd>
              </motion.div>
            ))}
          </dl>

          <a
            href="#team"
            className="group mt-6 flex items-center gap-4 rounded-2xl bg-white p-4 text-ink transition-shadow hover:shadow-[0_0_0_4px_rgb(255_255_255/0.15)]"
          >
            <span className="flex -space-x-3">
              {team.map((m) => (
                <TeamAvatar key={m.name} src={m.image} crop={m.crop} sizes="88px" className="h-11 w-11 ring-2 ring-white" />
              ))}
            </span>
            <span className="flex-1">
              <span className="block text-sm font-bold">Meet the team</span>
              <span className="block text-xs text-gray-500">The people behind your product</span>
            </span>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-50 text-brand-700 transition-all duration-300 group-hover:bg-brand-700 group-hover:text-white">
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden />
            </span>
          </a>
        </div>
      </div>

      {/* Floating chips */}
      <motion.div
        {...float(6)}
        className="glass absolute -left-3 top-0 flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-ink shadow-[0_20px_40px_-16px_rgb(46_16_101/0.4)] sm:-left-8"
        aria-hidden
      >
        <MapPin className="h-4 w-4 text-brand-600" /> Indore, India
      </motion.div>

      <motion.div
        {...float(7, 0.8)}
        className="glass absolute -bottom-1 -right-3 flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-ink shadow-[0_20px_40px_-16px_rgb(46_16_101/0.4)] sm:-right-8"
        aria-hidden
      >
        <Sparkles className="h-4 w-4 text-brand-600" /> Design · Code · AI
      </motion.div>
    </motion.div>
  );
}
