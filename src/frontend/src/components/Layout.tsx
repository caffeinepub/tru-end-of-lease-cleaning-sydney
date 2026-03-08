import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { CheckCircle2, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { SiWhatsapp } from "react-icons/si";

interface LayoutProps {
  children: React.ReactNode;
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export default function Layout({ children }: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname is the only reactive dependency
  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-card border-b border-border"
            : "bg-white shadow-xs border-b border-border"
        }`}
      >
        {/* Top bar */}
        <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm font-medium">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            <span>
              100% Bond Back Guarantee – If your landlord isn't happy, we come
              back for FREE!
            </span>
            <a
              href="tel:0488841883"
              className="ml-2 font-bold underline hover:no-underline whitespace-nowrap"
            >
              Call 0488 841 883
            </a>
          </div>
        </div>

        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            data-ocid="nav.home.link"
          >
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-primary leading-tight font-display">
                Tru End of Lease Cleaning
              </span>
              <span className="text-xs text-muted-foreground font-medium">
                Sydney's Trusted Bond Cleaners
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                data-ocid={`nav.${link.label.toLowerCase()}.link`}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-secondary ${
                  isActive(link.href)
                    ? "text-primary bg-secondary font-semibold"
                    : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:0488841883"
              className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <Phone className="h-4 w-4" />
              0488 841 883
            </a>
            <Button
              asChild
              className="whatsapp-green border-0 gap-2 font-semibold"
              data-ocid="nav.whatsapp.button"
            >
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiWhatsapp className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-foreground hover:bg-secondary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-white px-4 pb-4 pt-2 animate-fade-in">
            <nav className="flex flex-col gap-1 mb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  data-ocid={`nav.${link.label.toLowerCase()}.link`}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors hover:bg-secondary ${
                    isActive(link.href)
                      ? "text-primary bg-secondary font-semibold"
                      : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2">
              <a
                href="tel:0488841883"
                className="flex items-center justify-center gap-2 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm"
              >
                <Phone className="h-4 w-4" />
                Call 0488 841 883
              </a>
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-md whatsapp-green font-semibold text-sm"
                data-ocid="nav.whatsapp.button"
              >
                <SiWhatsapp className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground mt-16">
        <div className="container mx-auto px-4 py-12 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold font-display mb-3">
                Tru End of Lease Cleaning
              </h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
                Sydney's most trusted bond cleaning service. We clean, you move,
                landlords approve. 100% Bond Back Guarantee on every clean.
              </p>
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold text-sm px-4 py-2.5 rounded-md transition-colors"
              >
                <SiWhatsapp className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Our Services</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>End of Lease / Bond Cleaning</li>
                <li>Kitchen Deep Cleaning</li>
                <li>Bathroom & Toilet Cleaning</li>
                <li>Carpet Steam Cleaning</li>
                <li>Window Cleaning</li>
                <li>Oven Cleaning</li>
              </ul>
              <div className="mt-4 space-y-1 text-sm text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0" />
                  <a
                    href="tel:0488841883"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    0488 841 883
                  </a>
                </div>
                <p>Sydney, NSW, Australia</p>
                <p>Mon–Sun, 7am–7pm</p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/70">
            <p>
              © {new Date().getFullYear()} Tru End of Lease Cleaning Sydney. All
              rights reserved.
            </p>
            <p>
              Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground underline transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
