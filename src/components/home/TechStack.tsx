/* eslint-disable @next/next/no-img-element -- small remote SVG logos, lazy-loaded */
import SectionHeading from "@/components/ui/SectionHeading";

const technologies = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
  { name: "LangChain", logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
  { name: "Hugging Face", logo: "https://huggingface.co/front/assets/huggingface_logo.svg" },
  { name: "Scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
];

const rows = [technologies.slice(0, 9), technologies.slice(9)];

export default function TechStack() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/70 to-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tech stack"
          title={
            <>
              Technologies we <span className="bg-gradient-to-r from-brand-700 to-brand-500 bg-clip-text text-transparent">excel in</span>
            </>
          }
          description="Empowering businesses with cutting-edge technologies to deliver reliable, scalable, and future-ready solutions."
        />
      </div>

      {/* Full list for assistive tech; the animated rows are decorative duplicates */}
      <ul className="sr-only">
        {technologies.map((t) => (
          <li key={t.name}>{t.name}</li>
        ))}
      </ul>

      <div className="space-y-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]" aria-hidden>
        {rows.map((row, r) => (
          <div key={r} className="group overflow-hidden">
            <div
              className={`flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused] ${
                r === 1 ? "[animation-direction:reverse]" : ""
              }`}
            >
              {[...row, ...row, ...row, ...row].map((t, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-2xl border border-brand-100 bg-white px-5 py-3.5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-glow"
                >
                  <img src={t.logo} alt="" width={28} height={28} loading="lazy" decoding="async" className="h-7 w-7 object-contain" />
                  <span className="whitespace-nowrap text-sm font-semibold text-gray-700">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
