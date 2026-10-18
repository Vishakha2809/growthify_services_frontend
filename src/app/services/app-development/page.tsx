"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Smartphone,
  Apple,
  Tablet,
  Rocket,
  Shield,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Apple,
    title: "iOS Development",
    desc: "Native iOS apps built with Swift for optimal performance and seamless user experience across all Apple devices.",
  },
  {
    icon: Smartphone,
    title: "Android Development",
    desc: "Kotlin-powered Android applications that work seamlessly across all devices and screen sizes.",
  },
  {
    icon: Tablet,
    title: "Cross-Platform",
    desc: "React Native and Flutter solutions for cost-effective multi-platform development without compromising quality.",
  },
  {
    icon: Rocket,
    title: "App Store Optimization",
    desc: "Strategic ASO to maximize your app's visibility, downloads, and overall presence in app stores.",
  },
  {
    icon: Shield,
    title: "Security First",
    desc: "Enterprise-grade security measures to protect user data and privacy throughout the entire app lifecycle.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    desc: "Lightning-fast apps optimized for speed, smooth animations, and excellent battery efficiency.",
  },
];
const tools = [
  {
    name: "iOS (Swift)",
    icon: "/icons/appdev/apple.svg",
    desc: "Native iOS development using Swift for smooth and modern mobile apps.",
  },
  {
    name: "Android",
    icon: "/icons/appdev/android.svg",
    desc: "Android app development using Java & Kotlin for scalable Android experiences.",
  },
  {
    name: "Flutter",
    icon: "/icons/appdev/flutter.svg",
    desc: "Cross-platform app development using Flutter and Dart for native-like performance.",
  },
  {
    name: "React Native",
    icon: "/icons/appdev/react.svg",
    desc: "Build mobile apps with React Native for shared code and fast development.",
  },
];

export default function AppDevelopmentPage() {
  return (
    <div className="pt-6 md:pt-8 pb-24 md:pb-32 overflow-x-hidden">
      {/* ─── HERO ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-16 sm:mb-20 text-center">
        {/* ✦ Badge */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-[#6D28D9] text-xl">✦</span>
          <span className="text-[#6D28D9] font-bold text-sm uppercase tracking-widest">
            APP development
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-xl sm:text-5xl lg:text-6xl font-bold text-[#111111] mb-12 leading-tight">
          Custom-Built Apps for{" "}
          <span className="bg-gradient-to-r from-[#6D28D9] to-[#A855F7] bg-clip-text text-transparent">
            Real Business Needs
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
            App Development{" "}
            <span className="bg-gradient-to-r from-[#6D28D9] to-[#A855F7] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-[#6B7280] text-lg text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            End-to-end mobile app development for every platform.
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
              Ready to Build Your Mobile App?
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#C084FC] bg-clip-text text-transparent">
                Let&apos;s Turn Your Idea
              </span>{" "}
              <span className="text-white">Into Reality</span>
            </h3>
            <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto">
              From concept to launch — we build mobile apps that engage users,
              drive growth, and deliver results for your business.
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
