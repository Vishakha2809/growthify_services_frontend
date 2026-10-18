export const categories = [
  "All",
  "Web Development",
  "App Development",
  "UI/UX Design",
  "AI/ML",
  "Custom Software",
];

export type Project = {
  title: string;
  category: string;
  image: string;
  description: string;
  tech: string[];
  result?: string;
  url: string | null;
};

export const projects: Project[] = [
  {
    title: "Alpha Insight - SEBI Registered Research Platform",
    category: "Web Development",
    image: "/portfolio/alpha.jpg",
    description:
      "Alpha Insight is a SEBI-registered research analyst platform offering institutional-grade technical market research, disciplined risk allocations, and real-time trading signals delivered via live dashboard, SMS, and WhatsApp.",
    tech: ["Next.js", "FastAPI", "Python", "PostgreSQL"],
    url: "https://www.alphainsiight.com/",
  },
  {
    title: "Builds Your Mind Website",
    category: "Web Development",
    image: "/portfolio/buildsyourmind.png",
    description:
      "Builds Your Mind is a purpose-driven educational kit brand focused on creating eco-friendly, engaging and practical learning solutions for students and learners of all ages.",
    tech: ["Next.js", "Docker", "MySQL", "Python"],
    url: "https://buildsyourmind.in/",
  },
  {
    title: "Healthcare Mobile App",
    category: "App Development",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60",
    description: "Patient management and telemedicine app for a leading healthcare provider.",
    tech: ["React Native", "Firebase", "Node.js"],
    result: "50K+ downloads",
    url: null,
  },
  {
    title: "AI Analytics Dashboard",
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    description: "AI-powered analytics dashboard for real-time business intelligence and predictions.",
    tech: ["Python", "TensorFlow", "React", "AWS"],
    result: "40% faster decisions",
    url: null,
  },
  {
    title: "Career & Job Opportunity Portal",
    category: "Web Development",
    image: "/portfolio/job.jpg",
    description:
      "FreshersHunt.in is an online career resource platform focused on helping students, fresh graduates, and early-career professionals find IT jobs, off-campus drives, internships, and free learning resources across India.",
    tech: ["React", "Next.js", "MySQL", "Node.js"],
    url: null,
  },
  {
    title: "Banking App Redesign",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=60",
    description: "Complete UX overhaul for a major bank's mobile application.",
    tech: ["Figma", "Principle", "Lottie"],
    result: "4.8 App Store rating",
    url: null,
  },
  {
    title: "Anubhuti Donation Management Software",
    category: "Custom Software",
    image: "/portfolio/donor-management-software.png",
    description:
      "A desktop-based donation management system developed to efficiently record, track, and manage donations with secure data handling, donor records, and transparent reporting for organizations.",
    tech: ["Python", "Django", "React", "PostgreSQL"],
    url: null,
  },
  {
    title: "Course Selling website",
    category: "Web Development",
    image: "/portfolio/course-selling.jpg",
    description: "Property listing and management platform with virtual tours.",
    tech: ["Next.js", "Three.js", "Node.js", "MongoDB"],
    url: null,
  },
];
