import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  dark?: boolean;
};

export default function SectionHeading({ eyebrow, title, description, dark }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      <span
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
          dark
            ? "bg-white/10 text-brand-200 ring-1 ring-white/15"
            : "bg-brand-50 text-brand-700 ring-1 ring-brand-100"
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
        {eyebrow}
      </span>
      <h2
        className={`mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base sm:text-lg ${dark ? "text-brand-100/70" : "text-gray-600"}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
