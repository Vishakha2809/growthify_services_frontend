import {
  Palette,
  Smartphone,
  Globe,
  Code2,
  Brain,
  TestTube,
  Wrench,
  Building2,
  BookOpen,
  BriefcaseBusiness,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  name: string;
  href: string;
  icon: LucideIcon;
  desc: string;
};

export type Service = NavItem & { image: string; tags: string[] };

export const services: Service[] = [
  {
    name: "Web Development",
    href: "/services/web-development",
    image: "/images/services/web-dev.png",
    tags: ["Next.js", "React", "Node.js"],
    icon: Globe,
    desc: "Responsive, scalable websites and web apps that align with your goals.",
  },
  {
    name: "App Development",
    href: "/services/app-development",
    image: "/images/services/app-dev.png",
    tags: ["iOS", "Android", "Flutter"],
    icon: Smartphone,
    desc: "Scalable mobile applications for iOS and Android platforms.",
  },
  {
    name: "UI/UX Design",
    href: "/services/ui-ux",
    image: "/images/services/ui-ux.png",
    tags: ["Figma", "Prototyping", "Design systems"],
    icon: Palette,
    desc: "Intuitive, user-centric design solutions for better engagement.",
  },
  {
    name: "AI/ML Solutions",
    href: "/services/ai-ml",
    image: "/images/services/ai-ml.png",
    tags: ["TensorFlow", "PyTorch", "LLMs"],
    icon: Brain,
    desc: "We transform complex data into intelligent, actionable insights.",
  },
  {
    name: "Custom Software",
    href: "/services/custom-software",
    image: "/images/services/custom-software.png",
    tags: ["Requirements", "Integrations", "Scalable"],
    icon: Code2,
    desc: "Tailored software solutions designed for your unique needs.",
  },
  {
    name: "QA & Testing",
    href: "/services/qa-testing",
    image: "/images/services/qa-testing.png",
    tags: ["Selenium", "Cypress", "Appium"],
    icon: TestTube,
    desc: "Thorough manual and automated testing for a bug-free product.",
  },
  {
    name: "Support & Maintenance",
    href: "/services/support",
    image: "/images/services/support-maintainance.png",
    tags: ["Bug fixes", "Security", "Monitoring"],
    icon: Wrench,
    desc: "Keeping your digital solutions secure, updated and running.",
  },
];

export const companyLinks: NavItem[] = [
  { name: "About Us", href: "/company/about", icon: Building2, desc: "Our story, team and values" },
  { name: "Blog", href: "/company/blog", icon: BookOpen, desc: "Guides and industry insights" },
  { name: "Career", href: "/career", icon: BriefcaseBusiness, desc: "Join the Growthify team" },
];

export const contact = {
  email: "support@growthifyservices.in",
  phone: "+91 89892 82885",
  phoneHref: "tel:+918989282885",
  whatsapp: "https://wa.me/918989282885",
  address: "Plot No. 460, IDA Scheme No. 134, Nipania, Indore, Madhya Pradesh – 452010, India",
};
