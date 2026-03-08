import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Home, MapPin, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import ContactForm from "../components/ContactForm";
import { suburbs as allSuburbs } from "../data/suburbsData";
import { useMetaTags } from "../hooks/useMetaTags";

interface SuburbPageProps {
  slug: string;
}

const SERVICES_LIST = [
  "Full Bond / End of Lease Clean",
  "Kitchen Deep Clean (Oven, Rangehood, Cupboards)",
  "Bathroom & Toilet Scrub",
  "Carpet Steam Cleaning",
  "Window Cleaning (Inside & Out)",
  "Oven & Stovetop Cleaning",
  "Wall Spot Cleaning & Skirting Boards",
  "Laundry Room Clean",
];

const PRICING = [
  { size: "Studio", from: "$199" },
  { size: "1 Bedroom", from: "$249" },
  { size: "2 Bedrooms", from: "$329" },
  { size: "3 Bedrooms", from: "$429" },
];

export default function SuburbPage({ slug }: SuburbPageProps) {
  const suburb = allSuburbs.find((s) => s.slug === slug);

  useMetaTags({
    title: suburb
      ? suburb.metaTitle
      : "End of Lease Cleaning Sydney | Tru Bond Cleaning",
    description: suburb
      ? suburb.metaDescription
      : "Professional end of lease cleaning in Sydney. 100% bond back guarantee.",
    ogImage: suburb ? suburb.image : undefined,
    geoPlacename: suburb ? `${suburb.name} Sydney NSW` : "Sydney NSW Australia",
  });

  if (!suburb) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <MapPin className="h-16 w-16 text-muted-foreground mb-4" />
        <h1 className="text-3xl font-bold font-display text-foreground mb-2">
          Suburb Not Found
        </h1>
        <p className="text-muted-foreground mb-6">
          Sorry, we could not find that suburb page.
        </p>
        <Button asChild>
          <Link to="/suburbs">View All Suburbs</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* ──────────────── HERO ──────────────── */}
      <section className="relative hero-gradient text-white overflow-hidden min-h-[420px] flex items-center">
        {/* Background suburb image */}
        <div className="absolute inset-0 z-0">
          <img
            src={suburb.image}
            alt={suburb.alt}
            className="w-full h-full object-cover opacity-25"
            loading="eager"
          />
        </div>

        <div className="relative z-10 w-full container mx-auto px-4 md:px-6 py-16 md:py-24">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-sm text-white/70 mb-6"
            aria-label="Breadcrumb"
          >
            <Link
              to="/"
              className="hover:text-white transition-colors flex items-center gap-1"
              data-ocid="suburb.breadcrumb.link"
            >
              <Home className="h-3.5 w-3.5" />
              Home
            </Link>
            <span>/</span>
            <Link
              to="/suburbs"
              className="hover:text-white transition-colors"
              data-ocid="suburb.breadcrumb.link"
            >
              Suburbs
            </Link>
            <span>/</span>
            <span className="text-white font-medium">{suburb.name}</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 border border-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <MapPin className="inline h-3.5 w-3.5 mr-1.5 -mt-0.5" />
              {suburb.name}, Sydney NSW
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-display leading-tight mb-4 text-balance">
              End of Lease Cleaning {suburb.name}
            </h1>
            <p className="text-xl text-white/85 mb-8 max-w-2xl">
              {suburb.shortDesc} 100% Bond Back Guarantee on every clean.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-300 text-navy-950 font-bold text-lg px-8 gap-2 shadow-hero"
                asChild
                data-ocid="suburb.quote.primary_button"
              >
                <a href="#suburb-contact">
                  Get a Free Quote
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/60 text-white hover:bg-white hover:text-primary font-bold text-lg px-8 gap-2 bg-white/10 backdrop-blur-sm"
                asChild
                data-ocid="suburb.whatsapp.secondary_button"
              >
                <a
                  href="https://wa.me/61488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiWhatsapp className="h-5 w-5" />
                  WhatsApp 0488 841 883
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg
            viewBox="0 0 1440 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            aria-hidden="true"
            role="presentation"
          >
            <path
              d="M0 50L1440 50L1440 15C1200 50 720 0 0 30L0 50Z"
              fill="oklch(0.985 0.005 220)"
            />
          </svg>
        </div>
      </section>

      {/* ──────────────── SUBURB CONTENT ──────────────── */}
      <section
        className="py-16 md:py-24 bg-background"
        aria-labelledby="suburb-intro-heading"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Text content */}
            <div>
              <span className="inline-block bg-secondary text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Bond Cleaning in {suburb.name}
              </span>
              <h2
                id="suburb-intro-heading"
                className="text-3xl md:text-4xl font-bold font-display text-foreground mb-6"
              >
                Why Choose Tru for Your {suburb.name} Bond Clean?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
                {suburb.content.map((para) => (
                  <p key={para.slice(0, 60)}>{para}</p>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button className="font-semibold gap-2" size="lg" asChild>
                  <Link to="/services">
                    View All Services
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="font-semibold gap-2 border-green-500 text-green-700 hover:bg-green-50"
                  size="lg"
                  asChild
                >
                  <a
                    href="https://wa.me/61488841883"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiWhatsapp className="h-4 w-4" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>

            {/* Suburb image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card-hover">
                <img
                  src={suburb.image}
                  alt={suburb.alt}
                  className="w-full h-80 md:h-96 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-card p-4 border border-border">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-8 w-8 text-green-500" />
                  <div>
                    <p className="font-bold text-foreground text-sm">
                      100% Bond Back
                    </p>
                    <p className="text-xs text-muted-foreground">Guaranteed!</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-5 -right-5 bg-primary text-primary-foreground rounded-xl shadow-card p-4">
                <p className="font-bold text-lg">From $199</p>
                <p className="text-xs text-primary-foreground/80">
                  Fixed price
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── SERVICES CHECKLIST ──────────────── */}
      <section
        className="py-16 md:py-20 section-gradient"
        aria-labelledby="services-checklist-heading"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="inline-block bg-white text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              What's Included
            </span>
            <h2
              id="services-checklist-heading"
              className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4"
            >
              What We Clean in Your {suburb.name} Property
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our full bond cleaning service covers every room and every
              surface. Here is what is included as standard:
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {SERVICES_LIST.map((service) => (
              <div
                key={service}
                className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border shadow-xs"
              >
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground font-medium">
                  {service}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg" className="font-semibold gap-2">
              <Link to="/services">
                See Full Service Details
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ──────────────── PRICING ──────────────── */}
      <section
        className="py-16 md:py-20 bg-background"
        aria-labelledby="pricing-heading"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="inline-block bg-secondary text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Pricing
            </span>
            <h2
              id="pricing-heading"
              className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4"
            >
              How Much Does End of Lease Cleaning Cost in {suburb.name}?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer transparent, fixed pricing with no hidden fees. Here are
              our starting prices for {suburb.name} properties:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {PRICING.map((p) => (
              <Card
                key={p.size}
                className="border border-border shadow-card text-center card-hover bg-white"
              >
                <CardContent className="p-6">
                  <p className="text-sm font-medium text-muted-foreground mb-2">
                    {p.size}
                  </p>
                  <p className="text-3xl font-bold font-display text-primary">
                    {p.from}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    starting from
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6 max-w-xl mx-auto">
            Prices vary based on property size, number of bathrooms, and the
            condition of the property. WhatsApp us on{" "}
            <a
              href="https://wa.me/61488841883"
              className="text-primary font-semibold hover:underline"
            >
              0488 841 883
            </a>{" "}
            for a personalised quote.
          </p>
        </div>
      </section>

      {/* ──────────────── CONTACT CTA ──────────────── */}
      <section
        id="suburb-contact"
        className="py-16 md:py-24 section-gradient"
        aria-labelledby="suburb-contact-heading"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div>
              <span className="inline-block bg-white text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Book Your Clean
              </span>
              <h2
                id="suburb-contact-heading"
                className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4"
              >
                Ready to Book Your {suburb.name} Bond Clean?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Get a free, fixed-price quote today. Fill in the form or
                WhatsApp us directly for an instant response.
              </p>

              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-green-50 border border-green-200 hover:bg-green-100 transition-colors group mb-4"
              >
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                  <SiWhatsapp className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-green-800">
                    Chat on WhatsApp
                  </p>
                  <p className="text-sm text-green-600">
                    0488 841 883 – Instant response
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-green-600 ml-auto group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:0488841883"
                className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Call Us</p>
                  <p className="text-sm text-muted-foreground">0488 841 883</p>
                </div>
                <ArrowRight className="h-4 w-4 text-primary ml-auto group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <Card className="border border-border shadow-card bg-white">
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground text-xl mb-1">
                  Get Your Free {suburb.name} Quote
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Takes less than 2 minutes. We'll respond within 1 hour.
                </p>
                <ContactForm compact data-ocid="suburb.contact.submit_button" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ──────────────── INTERNAL LINKS ──────────────── */}
      <section className="py-10 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center gap-3 justify-center text-sm">
            <span className="text-muted-foreground">Explore:</span>
            <Link to="/" className="text-primary hover:underline font-medium">
              Home
            </Link>
            <span className="text-border">|</span>
            <Link
              to="/services"
              className="text-primary hover:underline font-medium"
            >
              All Services
            </Link>
            <span className="text-border">|</span>
            <Link
              to="/suburbs"
              className="text-primary hover:underline font-medium"
            >
              All Sydney Suburbs
            </Link>
            <span className="text-border">|</span>
            <Link
              to="/contact"
              className="text-primary hover:underline font-medium"
            >
              Get a Quote
            </Link>
            <span className="text-border">|</span>
            <Link
              to="/faq"
              className="text-primary hover:underline font-medium"
            >
              FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
