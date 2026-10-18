"use client";

import { useState } from "react";
import Link from "next/link";

const tools = [
  {
    name: "Figma",
    icon: "/icons/figma.svg",
    desc: "A powerful collaborative design tool for creating interactive prototypes, wireframes, and high-fidelity UI designs. Perfect for real-time team collaboration and design systems.",
  },
  {
    name: "Photoshop",
    icon: "/icons/photoshop.svg",
    desc: "Industry-standard image editing software for creating stunning visuals, photo manipulation, and detailed graphic designs. Essential for creating unique UI elements and assets.",
  },
  {
    name: "Illustrator",
    icon: "/icons/illustrator.svg",
    desc: "Vector graphics editor for creating scalable logos, icons, and illustrations. Perfect for crafting pixel-perfect UI elements that look sharp on any screen size.",
  },
  {
    name: "Adobe XD",
    icon: "/icons/xd.svg",
    desc: "All-in-one UX/UI design platform for wireframing, prototyping, and creating interactive user experiences. Streamlines the design workflow from concept to handoff.",
  },
  {
    name: "After Effects",
    icon: "/icons/aftereffects.svg",
    desc: "Motion graphics and animation software for creating engaging UI animations, micro-interactions, and promotional videos that bring designs to life.",
  },
];

const whyUs = [
  {
    title: "User Centered Approach",
    desc: "Innovative User-Centered Design.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8 text-[#6D28D9]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    title: "Creative & Modern Visuals",
    desc: "Unique, Engaging, And Trend-Driven Designs.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8 text-[#6D28D9]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Seamless User Experience",
    desc: "Optimized Flows That Enhance Usability.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8 text-[#6D28D9]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: "Responsive & Adaptive",
    desc: "Consistent Across Mobile, Tablet, And Desktop.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8 text-[#6D28D9]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "Prototyping & Testing",
    desc: "Prototypes & Usability Testing For Perfection.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8 text-[#6D28D9]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "Brand-Driven Design",
    desc: "That Reflect And Elevate Your Brand Identity.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8 text-[#6D28D9]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const process = [
  {
    step: "01",
    title: "Research",
    desc: "Starting with research, competitor insights, and audience understanding.",
  },
  {
    step: "02",
    title: "Wireframing",
    desc: "Creating low-fidelity wireframes to define layout, flow, and structure.",
  },
  {
    step: "03",
    title: "UI Design",
    desc: "Designing pixel-perfect interfaces with the right colors, typography & branding.",
  },
  {
    step: "04",
    title: "Prototyping",
    desc: "Building interactive prototypes to visualize user journeys and test usability.",
  },
  {
    step: "05",
    title: "Testing",
    desc: "Conducting usability testing, gathering feedback, and refining for the best experience.",
  },
];

export default function UIUXPage() {
  const [activeTool, setActiveTool] = useState(0);

  return (
    <div className="pt-6 md:pt-8 pb-8 md:pb-16 overflow-x-hidden">
      {/* ─── HERO ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-16 sm:mb-20 text-center">
        {/* ✦ Badge */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-[#6D28D9] text-xl">✦</span>
          <span className="text-[#6D28D9] font-bold text-sm uppercase tracking-widest">
            UI/UX Design
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-xl sm:text-5xl lg:text-6xl font-bold text-[#111111] mb-12 leading-tight">
          Building Interfaces That{" "}
          <span className="bg-gradient-to-r from-[#6D28D9] to-[#A855F7] bg-clip-text text-transparent">
            User Love
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

      {/* ─── WHY CHOOSE US ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 sm:pt-20  py-16 sm:py-20">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-[#6D28D9] text-lg">✦</span>
          <span className="text-[#6D28D9] font-bold text-xs sm:text-sm uppercase tracking-widest">
            Why Work With Us
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] text-center mb-12 sm:mb-16">
          Why Choose Our{" "}
          <span className="bg-gradient-to-r from-[#6D28D9] to-[#A855F7] bg-clip-text text-transparent">
            UI/UX Design
          </span>{" "}
          Services?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyUs.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-white border border-[#E5E7EB] rounded-2xl p-6 hover:border-[#6D28D9] hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 shrink-0 bg-gradient-to-br from-[#E9D5FF] to-[#DDD6FE] rounded-xl flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#111111] mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6B7280]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="bg-[#F9FAFB] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-[#6D28D9] text-lg">✦</span>
            <span className="text-[#6D28D9] font-bold text-xs sm:text-sm uppercase tracking-widest">
              UI/UX Design Process
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] text-center mb-12 sm:mb-16">
            How We Make Your Design{" "}
            <span className="bg-gradient-to-r from-[#6D28D9] to-[#A855F7] bg-clip-text text-transparent">
              Stand Out
            </span>
          </h2>

          <div className="grid sm:grid-cols-5 gap-4 sm:gap-3">
            {process.map((item, i) => (
              <div key={i} className="relative group">
                <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 h-full hover:border-[#6D28D9] hover:shadow-lg transition-all text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6D28D9] to-[#8B5CF6] flex items-center justify-center mx-auto mb-4 shadow-md">
                    <span className="text-white font-bold text-sm">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#111111] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#6B7280] text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                {i < process.length - 1 && (
                  <div className="hidden sm:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <polygon points="0,0 16,8 0,16" fill="#6D28D9" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TECH STACK ─── */}
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
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
              Let&apos;s Build The Future Together
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#C084FC] bg-clip-text text-transparent">
                Connect With Our Team
              </span>{" "}
              <span className="text-white">Today</span>
            </h3>
            <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto">
              We&apos;re here to answer your questions, discuss your project
              ideas, or provide support whenever you need it.
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
