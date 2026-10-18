"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Code,
  Database,
  ShoppingCart,
  Gauge,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Frontend Development",
    desc: "Modern React, Vue, and Next.js applications with pixel-perfect UI.",
  },
  {
    icon: Database,
    title: "Backend Development",
    desc: "Scalable Node.js, Python, and PHP backend solutions.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    desc: "Custom online stores with secure payment integrations.",
  },
  {
    icon: Globe,
    title: "CMS Development",
    desc: "WordPress, Strapi, and headless CMS implementations.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    desc: "Lightning-fast websites optimized for Core Web Vitals.",
  },
  {
    icon: Lock,
    title: "Security & SSL",
    desc: "Enterprise-grade security protocols and SSL certificates.",
  },
];
const tools = [
  {
    name: "HTML5",
    icon: "/icons/webdev/html5.svg",
    desc: "The latest standard for building structured and semantic web content.",
  },
  {
    name: "CSS3",
    icon: "/icons/webdev/css3.svg",
    desc: "Styling language used to create visually engaging layouts and designs.",
  },
  {
    name: "JavaScript",
    icon: "/icons/webdev/javascript.svg",
    desc: "Core programming language of the web for dynamic interactivity.",
  },
  {
    name: "React.js",
    icon: "/icons/webdev/react.svg",
    desc: "Popular frontend library for building fast and responsive UI.",
  },
  {
    name: "Node.js",
    icon: "/icons/webdev/nodejs.svg",
    desc: "JavaScript runtime for building scalable backend services.",
  },
  {
    name: "PHP",
    icon: "/icons/webdev/php.svg",
    desc: "Widely used server-side scripting language for dynamic websites.",
  },
  {
    name: "Laravel",
    icon: "/icons/webdev/laravel.svg",
    desc: "Powerful PHP framework for robust and maintainable web apps.",
  },
];

export default function WebDevelopmentPage() {
  const [activeTool, setActiveTool] = useState(0);
  return (
    <div className="pt-6 md:pt-8 pb-24 md:pb-32 overflow-x-hidden">
      {/* ─── HERO ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-16 sm:mb-20 text-center">
        {/* ✦ Badge */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-[#6D28D9] text-xl">✦</span>
          <span className="text-[#6D28D9] font-bold text-sm uppercase tracking-widest">
            WEB development
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-xl sm:text-5xl lg:text-6xl font-bold text-[#111111] mb-12 leading-tight">
          Web Builds That Fit Your{" "}
          <span className="bg-gradient-to-r from-[#6D28D9] to-[#A855F7] bg-clip-text text-transparent">
            Business Goals
          </span>
        </h1>

        {/* ─── Tool Icons + animated dashed connectors ─── */}
        <div className="flex items-center justify-center flex-wrap sm:flex-nowrap">
          {tools.map((tool, i) => (
            <div key={i} className="flex items-center">
              {/* Dark icon card — no filter, branded colours show */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </div>

              {/* SVG animated connector — exact animation from your code */}
              {i < tools.length - 1 && (
                <svg
                  width="90"
                  height="20"
                  viewBox="0 0 90 20"
                  className="mx-3 hidden sm:block"
                >
                  {/* running dashed line */}
                  <line
                    x1="0"
                    y1="10"
                    x2="70"
                    y2="10"
                    stroke="#444"
                    strokeWidth="2"
                    strokeDasharray="6 6"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="0"
                      to="-24"
                      dur="1.2s"
                      repeatCount="indefinite"
                    />
                  </line>

                  {/* moving arrow */}
                  <polygon points="70,4 88,10 70,16" fill="#444">
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      from="0 0"
                      to="6 0"
                      dur="1.2s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.4"
                      to="1"
                      dur="0.6s"
                      repeatCount="indefinite"
                    />
                  </polygon>
                </svg>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ─── SERVICES GRID ─── */}
      <section className="bg-[#F9FAFB] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-[#6D28D9] text-lg">✦</span>
            <span className="text-[#6D28D9] font-bold text-xs sm:text-sm uppercase tracking-widest">
              What We Offer
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] text-center mb-4">
            Web Development{" "}
            <span className="bg-gradient-to-r from-[#6D28D9] to-[#A855F7] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-[#6B7280] text-lg text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            Full-stack web development solutions for businesses of all sizes.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-[#E5E7EB] hover:border-[#6D28D9] hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#E9D5FF] to-[#DDD6FE] rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-[#6D28D9]" />
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#6B7280]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-[#6D28D9] text-lg">✦</span>
            <span className="text-[#6D28D9] font-bold text-xs sm:text-sm uppercase tracking-widest">
              Our Tech Stack
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] text-center mb-12 sm:mb-16">
            Our Weapons to{" "}
            <span className="bg-gradient-to-r from-[#6D28D9] to-[#A855F7] bg-clip-text text-transparent">
              Build Designs
            </span>
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Tool Selector */}
            <div className="flex flex-row lg:flex-col gap-3 lg:gap-4 flex-shrink-0 justify-center lg:justify-start flex-wrap lg:flex-nowrap">
              {tools.map((tool, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTool(i)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left ${
                    activeTool === i
                      ? "bg-[#6D28D9] shadow-lg shadow-purple-200"
                      : "bg-[#F9FAFB] hover:bg-[#EDE9FE]"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${activeTool === i ? "bg-white/20" : "bg-white"}`}
                  >
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <span
                    className={`font-semibold text-sm ${activeTool === i ? "text-white" : "text-[#111111]"}`}
                  >
                    {tool.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Description Panel */}
            <div className="flex-1 bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-md">
                  <img
                    src={tools[activeTool].icon}
                    alt={tools[activeTool].name}
                    className="w-9 h-9 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#111111]">
                  {tools[activeTool].name}
                </h3>
              </div>
              <p className="text-[#6B7280] text-base sm:text-lg leading-relaxed">
                {tools[activeTool].desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20">
        <div className="bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
          {/* Decorative SVGs */}
          <div className="absolute inset-0 opacity-10">
            <svg
              className="absolute top-10 left-10 w-48 h-48 sm:w-64 sm:h-64"
              viewBox="0 0 200 200"
            >
              <path
                d="M 20 100 Q 60 20, 100 100 T 180 100"
                stroke="#6D28D9"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <svg
              className="absolute bottom-10 right-10 w-48 h-48 sm:w-64 sm:h-64"
              viewBox="0 0 200 200"
            >
              <circle
                cx="100"
                cy="100"
                r="80"
                stroke="#8B5CF6"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
          <div className="absolute top-16 right-16 w-3 h-3 bg-[#6D28D9] rounded-full animate-pulse"></div>
          <div className="absolute bottom-24 left-24 w-2 h-2 bg-[#8B5CF6] rounded-full animate-ping"></div>

          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-[#8B5CF6] text-lg sm:text-xl animate-pulse">
                ✦
              </span>
              <span className="text-[#8B5CF6] font-bold text-xs sm:text-sm uppercase tracking-widest">
                GET IN TOUCH
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Build Your Website?
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#C084FC] bg-clip-text text-transparent">
                Let&apos;s Create Something
              </span>{" "}
              <span className="text-white">That Grows</span>
            </h3>
            <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto">
              From landing pages to full-scale web platforms — we build websites
              that attract visitors, convert leads, and scale with your
              business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 sm:gap-3 bg-white text-[#111111] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl w-full sm:w-auto justify-center"
              >
                <span>GET CONSULTATION</span>
                <div className="flex -space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
                    alt="Team"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
                    alt="Team"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
                    alt="Team"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
                  />
                </div>
              </Link>
              <div className="flex items-center gap-3 sm:gap-4">
                <svg
                  width="60"
                  height="30"
                  viewBox="0 0 80 40"
                  className="hidden sm:block"
                >
                  <path
                    d="M 10 20 Q 40 5, 70 25"
                    stroke="#6D28D9"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 70 25 L 65 20 M 70 25 L 65 30"
                    stroke="#6D28D9"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="bg-[#2d2d2d] px-4 sm:px-5 py-2 sm:py-3 rounded-full border border-[#6D28D9]/30">
                  <span className="text-white text-sm sm:text-base font-medium italic">
                    We get booked fast 🔥
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
