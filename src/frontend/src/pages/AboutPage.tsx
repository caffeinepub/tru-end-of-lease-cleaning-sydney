import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  Heart,
  MapPin,
  Shield,
  Zap,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useMetaTags } from "../hooks/useMetaTags";

const values = [
  {
    icon: Heart,
    title: "Honesty",
    desc: "We give you a fixed price upfront with no hidden costs. What we quote is what you pay.",
  },
  {
    icon: Award,
    title: "Quality",
    desc: "We do not cut corners. Ever. Our 400-point checklist makes sure nothing is missed.",
  },
  {
    icon: Clock,
    title: "Reliability",
    desc: "We show up when we say we will. We respect your time and your moving schedule.",
  },
  {
    icon: Shield,
    title: "Care",
    desc: "We treat every property as if it were our own. We take pride in every single job.",
  },
];

const differentiators = [
  "We know what real estate agents look for. We have built relationships with agents and property managers across Sydney, and we know their inspection standards inside out.",
  "We use a 400-point cleaning checklist. Nothing gets missed, ever.",
  "We back our work with a 100% Bond Back Guarantee. If your property manager raises any issues, we come back and fix them for free within 72 hours.",
  "We are fully insured. All our cleaners are background-checked, professionally trained, and carry public liability insurance.",
  "We use eco-friendly cleaning products wherever possible, so you can feel good about your clean.",
  "We are always on time. We respect your time and we respect your home.",
];

const suburbs = [
  "Sydney CBD",
  "Parramatta",
  "Bondi",
  "Newtown",
  "Chatswood",
  "Liverpool",
  "Penrith",
  "Manly",
  "Sutherland",
  "Hurstville",
  "Blacktown",
  "Campbelltown",
  "Hornsby",
  "Cronulla",
  "Strathfield",
  "Auburn",
];

export default function AboutPage() {
  useMetaTags({
    title: "About Tru End of Lease Cleaning Sydney | Trusted Bond Cleaners",
    description:
      "Meet the team behind Tru End of Lease Cleaning Sydney. We are local, experienced and committed to helping you get your full bond back.",
    ogImage: "/assets/generated/about-team.dim_800x500.jpg",
    geoPlacename: "Sydney NSW Australia",
  });

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="hero-gradient text-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
            About Tru End of Lease Cleaning Sydney
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            We are a local, family-run bond cleaning company with years of
            experience helping Sydney renters get their full bond back.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section
        className="py-16 md:py-24 bg-background"
        aria-labelledby="story-heading"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-secondary text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Our Story
              </span>
              <h2
                id="story-heading"
                className="text-3xl md:text-4xl font-bold font-display text-foreground mb-6"
              >
                We Started Tru Because We Felt the Pain Too
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We started Tru End of Lease Cleaning Sydney because we
                  experienced firsthand how stressful and confusing end of lease
                  cleaning can be. We saw too many people lose their hard-earned
                  bond money over cleaning issues that could have been avoided
                  with a thorough, professional clean. We decided to do
                  something about it.
                </p>
                <p>
                  Today, we are one of Sydney's most trusted bond cleaning
                  companies. We have helped hundreds of renters, families,
                  students, and professionals across Greater Sydney get their
                  properties cleaned to the highest standard – and get their
                  full bond back.
                </p>
                <p>
                  We are not a big corporate company. We are a local, family-run
                  business that genuinely cares about every customer we work
                  with. When you book with us, you are not just a number. You
                  are a real person with real money on the line, and we take
                  that seriously.
                </p>
              </div>
              <Button asChild className="mt-6 font-semibold gap-2" size="lg">
                <Link to="/contact">
                  Book Your Clean Today
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <img
                src="/assets/generated/about-team.dim_800x500.jpg"
                alt="Tru End of Lease Cleaning Sydney team – professional bond cleaners ready to help you get your bond back"
                className="w-full rounded-2xl shadow-card-hover object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-card p-4 border border-border">
                <div className="flex items-center gap-3">
                  <Zap className="h-8 w-8 text-yellow-500" />
                  <div>
                    <p className="font-bold text-foreground text-lg">1,000+</p>
                    <p className="text-xs text-muted-foreground">
                      Bonds Returned
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground rounded-xl shadow-card p-4">
                <p className="font-bold text-lg">100%</p>
                <p className="text-xs text-primary-foreground/80">
                  Bond Back Guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section
        className="py-16 md:py-24 section-gradient"
        aria-labelledby="different-heading"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-white text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              What Makes Us Different
            </span>
            <h2
              id="different-heading"
              className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4"
            >
              Why Sydney Renters Choose Tru End of Lease Cleaning
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              There are a lot of cleaning companies in Sydney. Here is what
              makes us stand out.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {differentiators.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-border shadow-xs"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section
        className="py-16 md:py-24 bg-background"
        aria-labelledby="values-heading"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-secondary text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Our Values
            </span>
            <h2
              id="values-heading"
              className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4"
            >
              The Values That Drive Everything We Do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((v) => (
              <Card
                key={v.title}
                className="border border-border shadow-card text-center card-hover bg-white"
              >
                <CardContent className="p-6 flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <v.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg">
                    {v.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {v.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section
        className="py-16 md:py-24 bg-primary text-primary-foreground"
        aria-labelledby="area-heading"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Service Area
            </span>
            <h2
              id="area-heading"
              className="text-3xl md:text-4xl font-bold font-display mb-4"
            >
              We Cover All of Greater Sydney
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              No matter where you are in Sydney, we can get to you. We service
              all suburbs across Greater Sydney.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-8">
            {suburbs.map((suburb) => (
              <span
                key={suburb}
                className="flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 text-sm font-medium"
              >
                <MapPin className="h-3 w-3" />
                {suburb}
              </span>
            ))}
            <span className="flex items-center gap-1.5 bg-yellow-400/20 border border-yellow-400/40 rounded-full px-3 py-1.5 text-sm font-medium text-yellow-300">
              + many more suburbs
            </span>
          </div>

          <div className="max-w-3xl mx-auto mb-10 rounded-2xl overflow-hidden shadow-card">
            <img
              src="/assets/generated/sydney-suburbs-coverage.dim_800x400.jpg"
              alt="Tru End of Lease Cleaning Sydney – bond cleaning service coverage across all Greater Sydney suburbs"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
          </div>

          <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-300 text-navy-950 font-bold gap-2"
              asChild
            >
              <Link to="/contact">
                Get a Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/60 text-white hover:bg-white hover:text-primary gap-2 bg-white/10"
              asChild
            >
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiWhatsapp className="h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
