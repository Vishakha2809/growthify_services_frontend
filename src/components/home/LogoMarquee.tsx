import { BookOpenCheck, BriefcaseBusiness, HeartHandshake, LineChart, type LucideIcon } from "lucide-react";

/* Wordmarks of clients from our portfolio */
const clients: { name: string; icon: LucideIcon }[] = [
  { name: "Alpha Insight", icon: LineChart },
  { name: "Builds Your Mind", icon: BookOpenCheck },
  { name: "FreshersHunt", icon: BriefcaseBusiness },
  { name: "Anubhuti", icon: HeartHandshake },
];

// Repeat so one half of the track is wider than any screen
const track = [...clients, ...clients, ...clients];

export default function LogoMarquee() {
  return (
    <section aria-label="Our clients" className="py-16 sm:py-20">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
        Trusted by ambitious startups &amp; organisations
      </p>
      <div className="group relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <ul className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {[...track, ...track].map(({ name, icon: Icon }, i) => (
            <li
              key={i}
              aria-hidden={i >= clients.length}
              className="mx-8 flex items-center gap-2.5 text-xl font-bold tracking-tight text-gray-400 transition-colors duration-300 hover:text-brand-700 sm:mx-12 sm:text-2xl"
            >
              <Icon className="h-6 w-6" aria-hidden />
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
