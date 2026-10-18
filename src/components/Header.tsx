"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ArrowRight, ChevronDown, Menu, Sparkles, X } from "lucide-react";
import Image from "next/image";
import {
  companyLinks,
  services,
  type NavItem,
  type Service,
} from "@/data/site";

type MenuKey = "services" | "company";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [dropdown, setDropdown] = useState<MenuKey | null>(null);
  const [lastPath, setLastPath] = useState(pathname);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setIsScrolled(y > 12));

  // Close menus whenever the route changes
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMobileMenu(false);
    setDropdown(null);
  }

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenu]);

  // Escape and outside clicks close any open menu
  useEffect(() => {
    if (!dropdown && !mobileMenu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDropdown(null);
        setMobileMenu(false);
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (
        dropdown &&
        navRef.current &&
        !navRef.current.contains(e.target as Node)
      ) {
        setDropdown(null);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [dropdown, mobileMenu]);

  const openMenu = (menu: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdown(menu);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setDropdown(null), 180);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const servicesActive = pathname.startsWith("/services");
  const companyActive = companyLinks.some((c) => isActive(c.href));
  const solid = isScrolled || mobileMenu;
  // Home hero is dark: light nav text until the bar turns solid
  const onDark = pathname === "/" && !solid;

  return (
    <>
      <header
        data-dark={onDark}
        className={`group/header fixed inset-x-0 top-0 z-50 h-[72px] border-b transition-[background-color,border-color,box-shadow] duration-300 lg:h-20 ${
          solid
            ? "border-brand-100/80 bg-white/75 shadow-[0_8px_30px_-12px_rgb(76_29_149/0.18)] backdrop-blur-xl backdrop-saturate-150"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          {/* LOGO */}
          <Link
            href="/"
            className="flex-shrink-0"
            aria-label="Growthify Services home"
          >
            <span className="block leading-none">
              <span className="block text-lg font-extrabold tracking-tight text-brand-700 transition-colors sm:text-xl group-data-[dark=true]/header:text-white">
                GROWTHIFY
              </span>
              <span className="mt-0.5 block text-[10px] font-bold tracking-[0.35em] text-ink/70 transition-colors group-data-[dark=true]/header:text-brand-200/80">
                SERVICES
              </span>
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <nav
            ref={navRef}
            aria-label="Main"
            className="hidden items-center gap-1 lg:flex"
          >
            <NavLink href="/" active={isActive("/")}>
              Home
            </NavLink>

            <div
              className="relative"
              onMouseEnter={() => openMenu("services")}
              onMouseLeave={scheduleClose}
            >
              <DropdownTrigger
                label="Services"
                open={dropdown === "services"}
                active={servicesActive}
                onClick={() =>
                  setDropdown(dropdown === "services" ? null : "services")
                }
                controls="menu-services"
              />
              <AnimatePresence>
                {dropdown === "services" && (
                  <motion.div
                    id="menu-services"
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2, ease }}
                    className="fixed inset-x-0 top-[68px] mx-auto w-[min(800px,calc(100vw-2rem))] pt-3"
                  >
                    <div className="overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-[0_30px_80px_-20px_rgb(46_16_101/0.4)]">
                      <div className="p-5">
                        <p className="px-2 pb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
                          Our services
                        </p>
                        <ul className="grid grid-cols-2 gap-1">
                          {services.map((s) => (
                            <li key={s.href}>
                              <ServiceMenuItem
                                item={s}
                                active={isActive(s.href)}
                              />
                            </li>
                          ))}
                          <li>
                            <Link
                              href="/services"
                              className="group flex h-full items-center justify-between gap-3 rounded-2xl border border-dashed border-brand-200 px-5 py-4 text-sm font-semibold text-brand-700 transition-colors hover:border-brand-400 hover:bg-brand-50"
                            >
                              <span>
                                View all services
                                <span className="mt-0.5 block text-xs font-normal text-gray-500">
                                  Explore everything we offer
                                </span>
                              </span>
                              <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-50 transition-all duration-300 group-hover:bg-brand-700 group-hover:text-white">
                                <ArrowRight className="h-4 w-4" aria-hidden />
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="flex items-center justify-between gap-4 border-t border-brand-100 bg-gradient-to-r from-brand-50 via-white to-brand-50 px-7 py-4">
                        <div className="flex items-center gap-3">
                          {/* <span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-brand-600 shadow-soft ring-1 ring-brand-100">
                            <Sparkles className="h-4 w-4" aria-hidden />
                          </span> */}
                          <p className="text-sm">
                            <span className="font-semibold text-ink">
                              Not sure where to start?
                            </span>{" "}
                            <span className="text-gray-500">
                              Get a free consultation and a clear roadmap.
                            </span>
                          </p>
                        </div>
                        <Link
                          href="/contact"
                          className="group inline-flex flex-shrink-0 items-center gap-1.5 rounded-xl bg-gradient-to-r from-brand-700 to-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_20px_-8px_rgb(109_40_217/0.8)] transition-all hover:shadow-[0_0_0_4px_rgb(139_92_246/0.18),0_10px_24px_-8px_rgb(124_58_237/0.9)]"
                        >
                          Book a free call
                          <ArrowRight
                            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                            aria-hidden
                          />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink href="/portfolio" active={isActive("/portfolio")}>
              Portfolio
            </NavLink>

            <div
              className="relative"
              onMouseEnter={() => openMenu("company")}
              onMouseLeave={scheduleClose}
            >
              <DropdownTrigger
                label="Company"
                open={dropdown === "company"}
                active={companyActive}
                onClick={() =>
                  setDropdown(dropdown === "company" ? null : "company")
                }
                controls="menu-company"
              />
              <AnimatePresence>
                {dropdown === "company" && (
                  <motion.div
                    id="menu-company"
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2, ease }}
                    className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4"
                  >
                    <ul className="rounded-2xl border border-brand-100 bg-white p-2 shadow-[0_30px_80px_-20px_rgb(46_16_101/0.45)]">
                      {companyLinks.map((c) => (
                        <li key={c.href}>
                          <MenuItem item={c} active={isActive(c.href)} />
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* CTA */}
          <Link
            href="/contact"
            className="group relative hidden items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-brand-700 to-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgb(109_40_217/0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_4px_rgb(139_92_246/0.18),0_12px_32px_-6px_rgb(124_58_237/0.85)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-300 lg:inline-flex"
          >
            <span
              className="absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-[300%]"
              aria-hidden
            />
            <span className="relative">Let&apos;s Talk</span>
            <ArrowRight
              className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>

          {/* MOBILE BUTTON */}
          <button
            className="-mr-2 grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl text-ink transition hover:bg-brand-50 lg:hidden group-data-[dark=true]/header:text-white group-data-[dark=true]/header:hover:bg-white/10"
            onClick={() => setMobileMenu((v) => !v)}
            aria-label={mobileMenu ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenu}
            aria-controls="mobile-menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileMenu ? "close" : "open"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.15 }}
              >
                {mobileMenu ? <X size={24} /> : <Menu size={24} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
              onClick={() => setMobileMenu(false)}
            />
            <motion.nav
              id="mobile-menu"
              aria-label="Mobile"
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.3, ease }}
              className="absolute inset-x-0 bottom-0 top-[72px] overflow-y-auto border-t border-brand-100 bg-white px-4 pb-10 pt-4 sm:px-6"
            >
              <ul className="space-y-1">
                <MobileLink href="/" active={isActive("/")}>
                  Home
                </MobileLink>
                <MobileAccordion
                  label="Services"
                  open={dropdown === "services"}
                  onToggle={() =>
                    setDropdown(dropdown === "services" ? null : "services")
                  }
                  items={services}
                  isActive={isActive}
                />
                <MobileLink href="/portfolio" active={isActive("/portfolio")}>
                  Portfolio
                </MobileLink>
                <MobileAccordion
                  label="Company"
                  open={dropdown === "company"}
                  onToggle={() =>
                    setDropdown(dropdown === "company" ? null : "company")
                  }
                  items={companyLinks}
                  isActive={isActive}
                />
              </ul>

              <Link
                href="/contact"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-700 to-brand-500 px-6 py-3.5 font-semibold text-white shadow-[0_10px_30px_-10px_rgb(109_40_217/0.8)]"
              >
                Let&apos;s Talk <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ---------- Desktop pieces ---------- */

const linkBase =
  "group relative inline-flex items-center gap-1 rounded-lg px-3.5 py-2 text-[15px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300";

function Underline({ active }: { active: boolean }) {
  return (
    <span
      aria-hidden
      className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left rounded-full bg-gradient-to-r from-brand-700 to-brand-400 transition-transform group-data-[dark=true]/header:from-brand-300 group-data-[dark=true]/header:to-brand-500 duration-300 ${
        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
      }`}
    />
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`${linkBase} ${active ? "text-brand-700 group-data-[dark=true]/header:text-white" : "text-gray-700 hover:text-brand-700 group-data-[dark=true]/header:text-white/80 group-data-[dark=true]/header:hover:text-white"}`}
    >
      {children}
      <Underline active={active} />
    </Link>
  );
}

function DropdownTrigger({
  label,
  open,
  active,
  onClick,
  controls,
}: {
  label: string;
  open: boolean;
  active: boolean;
  onClick: () => void;
  controls: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      aria-controls={controls}
      className={`${linkBase} ${active || open ? "text-brand-700 group-data-[dark=true]/header:text-white" : "text-gray-700 hover:text-brand-700 group-data-[dark=true]/header:text-white/80 group-data-[dark=true]/header:hover:text-white"}`}
    >
      {label}
      <ChevronDown
        size={16}
        className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        aria-hidden
      />
      <Underline active={active || open} />
    </button>
  );
}

function ServiceMenuItem({ item, active }: { item: Service; active: boolean }) {
  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      className={`group flex items-center gap-3.5 rounded-2xl p-2.5 transition-colors hover:bg-brand-50 focus-visible:bg-brand-50 focus-visible:outline-none ${
        active ? "bg-brand-50" : ""
      }`}
    >
      <span className="relative h-14 w-[72px] flex-shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 ring-1 ring-brand-100 transition-shadow duration-300 group-hover:shadow-[0_8px_20px_-8px_rgb(109_40_217/0.6)] group-hover:ring-brand-300">
        <Image
          src={item.image}
          alt=""
          fill
          sizes="72px"
          className="object-cover object-[50%_40%] mix-blend-multiply transition-transform duration-500 [transform:scale(1.3)] group-hover:[transform:scale(1.45)]"
        />
      </span>
      <span className="min-w-0">
        <span className="flex items-center gap-1 text-sm font-semibold text-ink group-hover:text-brand-700">
          {item.name}
          <ArrowRight
            className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            aria-hidden
          />
        </span>
        <span className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-gray-500">
          {item.desc}
        </span>
      </span>
    </Link>
  );
}

function MenuItem({ item, active }: { item: NavItem; active: boolean }) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      className={`group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-brand-50 focus-visible:bg-brand-50 focus-visible:outline-none ${
        active ? "bg-brand-50" : ""
      }`}
    >
      <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-brand-600 group-hover:to-brand-800 group-hover:text-white group-hover:shadow-[0_6px_16px_-4px_rgb(109_40_217/0.6)]">
        <Icon size={18} aria-hidden />
      </span>
      <span>
        <span className="block text-sm font-semibold text-ink group-hover:text-brand-700">
          {item.name}
        </span>
        <span className="mt-0.5 block text-xs leading-relaxed text-gray-500">
          {item.desc}
        </span>
      </span>
    </Link>
  );
}

/* ---------- Mobile pieces ---------- */

function MobileLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        aria-current={active ? "page" : undefined}
        className={`block rounded-xl px-3 py-3 text-lg font-semibold transition-colors ${
          active ? "bg-brand-50 text-brand-700" : "text-ink hover:bg-gray-50"
        }`}
      >
        {children}
      </Link>
    </li>
  );
}

function MobileAccordion({
  label,
  open,
  onToggle,
  items,
  isActive,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  items: NavItem[];
  isActive: (href: string) => boolean;
}) {
  const id = `mobile-${label.toLowerCase()}`;
  return (
    <li>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={id}
        className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-lg font-semibold text-ink transition-colors hover:bg-gray-50"
      >
        {label}
        <ChevronDown
          size={20}
          className={`text-gray-400 transition-transform duration-300 ${open ? "rotate-180 text-brand-700" : ""}`}
          aria-hidden
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease }}
            className="overflow-hidden"
          >
            {items.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`ml-2 flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] font-medium transition-colors ${
                      active
                        ? "text-brand-700"
                        : "text-gray-700 hover:bg-brand-50 hover:text-brand-700"
                    }`}
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-50 text-brand-700">
                      <Icon size={16} aria-hidden />
                    </span>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}
