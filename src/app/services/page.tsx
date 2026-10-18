"use client";

import Link from "next/link";
import {
  Palette,
  Smartphone,
  Globe,
  Code2,
  Brain,
  TestTube,
  Wrench,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    name: "UI/UX Design",
    desc: "Create beautiful, intuitive interfaces that users love. Our design team combines aesthetics with usability to deliver exceptional user experiences.",
    href: "/services/ui-ux",
    features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
  },
  {
    icon: Smartphone,
    name: "App Development",
    desc: "Build powerful mobile applications for iOS and Android. From native to cross-platform, we deliver apps that perform.",
    href: "/services/app-development",
    features: [
      "iOS Development",
      "Android Development",
      "Cross-Platform",
      "App Store Optimization",
    ],
  },
  {
    icon: Globe,
    name: "Web Development",
    desc: "Modern, responsive websites that drive results. Using the latest technologies to build fast, scalable web solutions.",
    href: "/services/web-development",
    features: [
      "Frontend Development",
      "Backend Development",
      "E-Commerce",
      "CMS Solutions",
    ],
  },
  {
    icon: Code2,
    name: "Custom Software Development",
    desc: "Tailored software solutions designed specifically for your unique business challenges and requirements.",
    href: "/services/custom-software",
    features: [
      "Enterprise Solutions",
      "API Development",
      "System Integration",
      "Legacy Modernization",
    ],
  },
  {
    icon: Brain,
    name: "AI/ML Solutions",
    desc: "Harness the power of artificial intelligence and machine learning to transform your business operations.",
    href: "/services/ai-ml",
    features: [
      "Machine Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
    ],
  },
  {
    icon: TestTube,
    name: "QA & Testing",
    desc: "Comprehensive testing services to ensure your product is bug-free, secure, and ready for launch.",
    href: "/services/qa-testing",
    features: [
      "Manual Testing",
      "Automated Testing",
      "Performance Testing",
      "Security Testing",
    ],
  },
  {
    icon: Wrench,
    name: "Support & Maintenance",
    desc: "Keep your digital products running smoothly with our ongoing support and maintenance services.",
    href: "/services/support",
    features: [
      "24/7 Support",
      "Bug Fixes",
      "Performance Optimization",
      "Security Updates",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="container-custom mb-20">
        <div className="max-w-3xl">
          <span className="text-[#E10600] font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-[#111111] mt-4 mb-6">
            Comprehensive Digital Solutions
          </h1>
          <p className="text-xl text-[#6B7280]">
            From ideation to deployment and beyond, we offer end-to-end services
            to help your business thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container-custom">
        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white border border-[#E5E7EB] rounded-3xl p-8 md:p-12 card-hover ${
                index % 2 === 1 ? "md:ml-auto md:mr-0" : ""
              }`}
              style={{ maxWidth: "900px" }}
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-[#FEE2E2] rounded-2xl flex items-center justify-center">
                    <service.icon className="w-10 h-10 text-[#E10600]" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-4">
                    {service.name}
                  </h2>
                  <p className="text-[#6B7280] text-lg mb-6">{service.desc}</p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-[#333333]"
                      >
                        <CheckCircle className="w-5 h-5 text-[#E10600]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-[#E10600] font-semibold hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom mt-20">
        <div className="bg-[#111111] rounded-3xl p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Let&apos;s have a conversation about your project. Our team will
            help you identify the best solutions for your business goals.
          </p>
          <Link href="/contact" className="btn-primary">
            Schedule a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
