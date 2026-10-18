import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Growthify Services | Your Tech Partner for Digital Excellence",
  description:
    "We help startups and enterprises design, develop, and grow with cutting-edge technology solutions. Expert UI/UX, App Development, Web Development, AI/ML, and more.",
  keywords:
    "software development, web development, app development, UI/UX design, AI/ML solutions, QA testing, digital transformation",
  authors: [{ name: "Growthify Services" }],
  openGraph: {
    title: "Growthify Services | Your Tech Partner for Digital Excellence",
    description:
      "We help startups and enterprises design, develop, and grow with cutting-edge technology solutions.",
    type: "website",
    locale: "en_US",
    siteName: "Growthify Services",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="antialiased font-sans text-gray-800">
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-brand-700 focus:shadow-soft"
          >
            Skip to content
          </a>
          <Header />
          <main id="main" className="pt-[72px] lg:pt-20">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
