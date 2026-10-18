import { Award, Briefcase, Star, Users, type LucideIcon } from "lucide-react";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";

type Stat = {
  icon: LucideIcon;
  to: number;
  decimals?: number;
  suffix: string;
  label: string;
  href?: string;
};

const stats: Stat[] = [
  {
    icon: Star,
    to: 4.9,
    decimals: 1,
    suffix: "★",
    label: "Google rating · 50+ reviews",
    href: "https://share.google/ytbZDfvsGiogHKb9l",
  },
  { icon: Users, to: 50, suffix: "+", label: "Happy clients" },
  { icon: Briefcase, to: 100, suffix: "+", label: "Projects delivered" },
  { icon: Award, to: 2, suffix: "+", label: "Years of experience" },
];

export default function StatsStrip() {
  return (
    <section aria-label="Our achievements" className="relative z-10 -mt-16 px-4 sm:-mt-20 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-brand-100 bg-brand-100 shadow-[0_30px_80px_-30px_rgb(76_29_149/0.35)] lg:grid-cols-4">
          {stats.map((s) => {
            const Icon = s.icon;
            const body = (
              <>
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-brand-600 group-hover:to-brand-800 group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="mt-4 block text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                  <Counter to={s.to} decimals={s.decimals} suffix={s.suffix} />
                </span>
                <span className="mt-1 block text-sm font-medium text-gray-500">{s.label}</span>
              </>
            );
            const cls = "group flex flex-col items-center bg-white/95 p-6 text-center backdrop-blur sm:p-8";
            return s.href ? (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={`${cls} transition-colors hover:bg-brand-50/60`}>
                {body}
              </a>
            ) : (
              <div key={s.label} className={cls}>
                {body}
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
