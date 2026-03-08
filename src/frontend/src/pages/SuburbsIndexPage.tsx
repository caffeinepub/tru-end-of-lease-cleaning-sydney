import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { suburbs } from "../data/suburbsData";
import { useMetaTags } from "../hooks/useMetaTags";

export default function SuburbsIndexPage() {
  useMetaTags({
    title: "End of Lease Cleaning Sydney Suburbs | Tru Bond Cleaning",
    description:
      "Tru End of Lease Cleaning services all Sydney suburbs. Find your local bond cleaning page for pricing, services, and info. 100% bond back guarantee.",
    ogImage: "/assets/generated/sydney-suburbs-coverage.dim_800x400.jpg",
    geoPlacename: "Sydney NSW Australia",
  });

  return (
    <div className="flex flex-col">
      {/* ──────────────── HERO ──────────────── */}
      <section className="relative hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/generated/sydney-suburbs-coverage.dim_800x400.jpg"
            alt="Tru End of Lease Cleaning Sydney – bond cleaning services across all Sydney suburbs"
            className="w-full h-full object-cover opacity-20"
            loading="eager"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-6 py-20 md:py-28 text-center">
          <span className="inline-block bg-white/10 border border-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <MapPin className="inline h-3.5 w-3.5 mr-1.5 -mt-0.5" />
            All Sydney Suburbs
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-6 text-balance">
            Bond Cleaning Across All{" "}
            <span className="text-yellow-400">Sydney Suburbs</span>
          </h1>
          <p className="text-xl text-white/85 mb-4 max-w-2xl mx-auto">
            No matter which Sydney suburb you're in, we've got you covered.
          </p>
          <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
            100% Bond Back Guarantee on every clean. Fixed pricing. Available 7
            days a week.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-300 text-navy-950 font-bold text-lg px-8 gap-2"
              asChild
              data-ocid="suburbs.hero.primary_button"
            >
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiWhatsapp className="h-5 w-5" />
                Get a Free Quote
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/60 text-white hover:bg-white hover:text-primary font-bold text-lg px-8 gap-2 bg-white/10"
              asChild
            >
              <a href="tel:0488841883">
                <Phone className="h-5 w-5" />
                Call 0488 841 883
              </a>
            </Button>
          </div>
        </div>

        {/* Wave */}
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

      {/* ──────────────── WHY US ──────────────── */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {[
              "100% Bond Back Guarantee",
              "Fixed Price – No Hidden Fees",
              "Available 7 Days a Week",
              "400-Point Cleaning Checklist",
              "Fully Insured Cleaners",
              "Fast Response via WhatsApp",
            ].map((point) => (
              <div
                key={point}
                className="flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── COVERAGE MAP IMAGE ──────────────── */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="rounded-2xl overflow-hidden shadow-card-hover">
            <img
              src="/assets/generated/sydney-suburbs-coverage.dim_800x400.jpg"
              alt="Tru End of Lease Cleaning Sydney suburbs coverage map – bond cleaning across Greater Sydney"
              className="w-full h-64 md:h-80 object-cover"
              loading="lazy"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            We service all suburbs across Greater Sydney – from the CBD to the
            outer suburbs and the Northern Beaches.
          </p>
        </div>
      </section>

      {/* ──────────────── SUBURBS GRID ──────────────── */}
      <section
        className="py-16 md:py-24 section-gradient"
        aria-labelledby="suburbs-grid-heading"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-white text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Choose Your Suburb
            </span>
            <h2
              id="suburbs-grid-heading"
              className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4"
            >
              Find End of Lease Cleaning in Your Sydney Suburb
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Click your suburb below for local pricing, service information,
              and to book your bond clean.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suburbs.map((suburb, index) => (
              <Card
                key={suburb.slug}
                className="border border-border shadow-card card-hover overflow-hidden bg-white"
                data-ocid={`suburbs.item.${index + 1}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={suburb.image}
                    alt={suburb.alt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="flex items-center gap-1 bg-primary/90 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      <MapPin className="h-3 w-3" />
                      {suburb.name}
                    </span>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h2 className="font-bold text-foreground text-xl mb-2">
                    {suburb.name}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {suburb.shortDesc}
                  </p>
                  <div className="flex gap-2">
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 font-semibold gap-1.5 text-xs"
                    >
                      <Link
                        to={`/suburbs/${suburb.slug}` as "/suburbs/sydney-cbd"}
                      >
                        Learn More
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="flex-1 font-semibold gap-1.5 text-xs border-green-500 text-green-700 hover:bg-green-50"
                    >
                      <a
                        href="https://wa.me/61488841883"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SiWhatsapp className="h-3.5 w-3.5" />
                        Book Now
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── CTA BANNER ──────────────── */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Can't See Your Suburb? We Still Cover You!
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            We clean across all of Greater Sydney. If your suburb is not listed
            here, just get in touch and we will sort you out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-300 text-navy-950 font-bold gap-2"
              asChild
            >
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiWhatsapp className="h-5 w-5" />
                WhatsApp for a Quote
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/60 text-white hover:bg-white hover:text-primary gap-2 bg-white/10"
              asChild
            >
              <a href="tel:0488841883">
                <Phone className="h-5 w-5" />
                Call 0488 841 883
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
