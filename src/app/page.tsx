import Hero from "@/components/home/Hero";
import StatsStrip from "@/components/home/StatsStrip";
import LogoMarquee from "@/components/home/LogoMarquee";
import ServicesGrid from "@/components/home/ServicesGrid";
import TechStack from "@/components/home/TechStack";
import Process from "@/components/home/Process";
import PortfolioShowcase from "@/components/home/PortfolioShowcase";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTABanner from "@/components/home/CTABanner";

export default function Page() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <LogoMarquee />
      <ServicesGrid />
      <TechStack />
      <Process />
      <PortfolioShowcase />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </>
  );
}
