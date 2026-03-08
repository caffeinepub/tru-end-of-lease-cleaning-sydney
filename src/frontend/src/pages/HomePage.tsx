import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  DollarSign,
  Leaf,
  Phone,
  Shield,
  Star,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import ContactForm from "../components/ContactForm";
import FAQSection from "../components/FAQSection";
import { useMetaTags } from "../hooks/useMetaTags";

const services = [
  {
    title: "End of Lease / Bond Cleaning",
    excerpt:
      "Complete bond cleaning service covering every room, surface, and appliance. We follow a 400-point checklist to guarantee your property passes the final inspection.",
    image: "/assets/generated/hero-banner.dim_1200x600.jpg",
    alt: "End of lease bond cleaning Sydney – full apartment clean by Tru End of Lease Cleaning",
  },
  {
    title: "Kitchen Deep Cleaning",
    excerpt:
      "We deep clean ovens, rangehoods, benchtops, cupboards, and sinks using professional-grade degreasers. Kitchens are the most scrutinised area – we make them spotless.",
    image: "/assets/generated/service-kitchen-cleaning.dim_800x500.jpg",
    alt: "Professional kitchen deep cleaning Sydney – oven, benchtops and cupboards cleaned by Tru End of Lease Cleaning",
  },
  {
    title: "Bathroom & Toilet Cleaning",
    excerpt:
      "Soap scum, mould, limescale, and grubby grout – we tackle all of it. We disinfect and polish every surface so your bathroom passes any inspection.",
    image: "/assets/generated/service-bathroom-cleaning.dim_800x500.jpg",
    alt: "Sparkling bathroom bond cleaning Sydney – tiles, toilet and shower cleaned by Tru End of Lease Cleaning",
  },
  {
    title: "Carpet Steam Cleaning",
    excerpt:
      "Hot water extraction steam cleaning removes deep-seated dirt, allergens, stains, and pet odours. Required by most Sydney rental agreements.",
    image: "/assets/generated/service-carpet-cleaning.dim_800x500.jpg",
    alt: "Professional carpet steam cleaning Sydney for bond return – Tru End of Lease Cleaning",
  },
  {
    title: "Window Cleaning",
    excerpt:
      "Crystal-clear, streak-free windows inside and out. We clean tracks, frames, flyscreens, and mirrors throughout your property.",
    image: "/assets/generated/service-window-cleaning.dim_800x500.jpg",
    alt: "Professional window cleaning Sydney for end of lease – streak-free results by Tru End of Lease Cleaning",
  },
  {
    title: "Oven Cleaning",
    excerpt:
      "A dirty oven is the most common reason for bond disputes. We get your oven looking factory fresh using professional caustic cleaners and proven techniques.",
    image: "/assets/generated/service-oven-cleaning.dim_800x500.jpg",
    alt: "Professional oven cleaning Sydney for bond return – sparkling results by Tru End of Lease Cleaning",
  },
];

const features = [
  {
    icon: Shield,
    label: "Bond Guarantee",
    desc: "100% bond back or we come back FREE",
  },
  {
    icon: Award,
    label: "Fully Insured",
    desc: "Police-checked, trained cleaners",
  },
  {
    icon: Leaf,
    label: "Eco-Friendly",
    desc: "Safe, professional-grade products",
  },
  { icon: DollarSign, label: "Fixed Price", desc: "No hidden charges, ever" },
  {
    icon: Calendar,
    label: "Available 7 Days",
    desc: "Including public holidays",
  },
  {
    icon: Clock,
    label: "Same Day Available",
    desc: "Fast turnaround on bookings",
  },
];

const steps = [
  {
    num: "01",
    title: "Get a Free Quote",
    desc: "Fill in our quick online form or WhatsApp us on 0488 841 883. We give you a fixed price – no hidden fees.",
    icon: Phone,
  },
  {
    num: "02",
    title: "We Clean Your Place",
    desc: "Our team arrives on time with all the gear. We follow our 400-point checklist to make sure nothing is missed.",
    icon: CheckCircle2,
  },
  {
    num: "03",
    title: "Get Your Bond Back",
    desc: "We guarantee our work. If your property manager flags anything, we fix it for free within 72 hours.",
    icon: Award,
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    suburb: "Surry Hills",
    text: "I was so stressed about my end of lease clean, but Tru End of Lease Cleaning Sydney made it so easy. They cleaned every single corner of my apartment and my landlord was over the moon. Got my full bond back the next day!",
    rating: 5,
  },
  {
    name: "James T.",
    suburb: "Parramatta",
    text: "Brilliant service from start to finish. The team turned up on time, worked efficiently, and left my place looking better than when I moved in. The oven cleaning was absolutely incredible. Highly recommend!",
    rating: 5,
  },
  {
    name: "Aisha K.",
    suburb: "Bondi",
    text: "Amazing value for money. I shopped around a lot before booking, and Tru End of Lease Cleaning Sydney offered the best price with the bond back guarantee. The team was friendly, professional, and super thorough.",
    rating: 5,
  },
];

export default function HomePage() {
  useMetaTags({
    title:
      "End of Lease Cleaning Sydney | Tru Bond Cleaning – 100% Bond Back Guarantee",
    description:
      "Book Sydney's best end of lease cleaning service. Tru End of Lease Cleaning delivers spotless results with a 100% bond back guarantee. Get a free quote today!",
  });

  const scrollToContact = () => {
    const el = document.getElementById("contact-section");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col">
      {/* ──────────────── HERO ──────────────── */}
      <section
        className="relative hero-gradient text-white overflow-hidden"
        aria-label="Hero section"
      >
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/generated/hero-banner.dim_1200x600.jpg"
            alt="Professional end of lease cleaning service in Sydney – Tru End of Lease Cleaning team cleaning a spotless apartment"
            className="w-full h-full object-cover opacity-20"
            loading="eager"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium mb-6">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span>Trusted by 1000+ Sydney Renters</span>
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-6 text-balance">
              Get Your Full Bond Back –{" "}
              <span className="text-yellow-400">Guaranteed!</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/85 mb-4 font-medium">
              Sydney's most trusted end of lease cleaning service.
            </p>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              We clean, you move, landlords approve. 400-point checklist. 100%
              Bond Back Guarantee. Available 7 days a week.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-300 text-navy-950 font-bold text-lg px-8 gap-2 shadow-hero"
                onClick={scrollToContact}
                data-ocid="hero.quote.primary_button"
              >
                Get a Free Quote
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/60 text-white hover:bg-white hover:text-primary font-bold text-lg px-8 gap-2 bg-white/10 backdrop-blur-sm"
                asChild
                data-ocid="hero.call.secondary_button"
              >
                <a href="tel:0488841883">
                  <Phone className="h-5 w-5" />
                  Call Now on 0488 841 883
                </a>
              </Button>
            </div>

            {/* Guarantee Badge */}
            <div className="flex justify-center">
              <img
                src="/assets/generated/bond-back-guarantee-badge-transparent.png"
                alt="100% Bond Back Guarantee – Tru End of Lease Cleaning Sydney"
                className="h-28 md:h-36 w-auto drop-shadow-xl"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            aria-hidden="true"
            role="presentation"
          >
            <path
              d="M0 60L1440 60L1440 20C1200 60 720 0 0 40L0 60Z"
              fill="oklch(0.985 0.005 220)"
            />
          </svg>
        </div>
      </section>

      {/* ──────────────── WHY CHOOSE US ──────────────── */}
      <section
        className="py-16 md:py-24 bg-background"
        aria-labelledby="why-choose-heading"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-secondary text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Why Choose Us
              </span>
              <h2
                id="why-choose-heading"
                className="text-3xl md:text-4xl font-bold font-display text-foreground mb-6"
              >
                Sydney's Most Trusted End of Lease Cleaning Service
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Moving out is stressful enough without worrying about losing
                  your bond. At Tru End of Lease Cleaning Sydney, we take that
                  worry off your plate. We are a team of professional cleaners
                  who know exactly what Sydney landlords and real estate agents
                  look for during an inspection.
                </p>
                <p>
                  We follow a{" "}
                  <strong className="text-foreground">
                    400-point cleaning checklist
                  </strong>{" "}
                  that covers every single corner of your home. From the kitchen
                  benchtops to the bathroom grout, from the skirting boards to
                  the oven racks – we clean it all. Our goal is simple: help you
                  get every dollar of your bond back.
                </p>
                <p>
                  Here is why thousands of Sydney renters choose us every year:
                </p>
              </div>

              <ul className="mt-6 space-y-3">
                {[
                  "100% Bond Back Guarantee – if your landlord is not happy, we come back for free",
                  "Fully insured, police-checked cleaners",
                  "Available 7 days a week, including weekends and public holidays",
                  "Fixed pricing – no hidden charges, no surprises",
                  "Professional-grade eco-friendly cleaning products",
                  "Trusted by real estate agencies across Sydney",
                  "Fast turnaround – same day or next day availability",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-muted-foreground">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className="mt-8 font-semibold gap-2"
                size="lg"
                onClick={scrollToContact}
              >
                Book Your Bond Clean Today
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Feature badges */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((f) => (
                <Card
                  key={f.label}
                  className="border border-border shadow-card card-hover"
                >
                  <CardContent className="p-5 flex flex-col items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <f.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-sm">
                        {f.label}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {f.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── SERVICES ──────────────── */}
      <section
        className="py-16 md:py-24 section-gradient"
        aria-labelledby="services-heading"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-white text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Our Services
            </span>
            <h2
              id="services-heading"
              className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4"
            >
              Complete End of Lease Cleaning Services in Sydney
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From kitchen to carpet, we cover every inch of your rental
              property. Every service comes with our 100% Bond Back Guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card
                key={service.title}
                className="border border-border shadow-card card-hover overflow-hidden bg-white"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <CardContent className="p-5">
                  <h3 className="font-bold text-foreground text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {service.excerpt}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-semibold gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link to="/services">
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ──────────────── HOW IT WORKS ──────────────── */}
      <section
        className="py-16 md:py-24 bg-primary text-primary-foreground"
        aria-labelledby="how-heading"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              How It Works
            </span>
            <h2
              id="how-heading"
              className="text-3xl md:text-4xl font-bold font-display mb-4"
            >
              Book Your Bond Clean in 3 Simple Steps
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              We make end of lease cleaning easy. Here's how it works:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <div key={step.num} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-white/20" />
                )}
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold font-display text-white/20 -mt-2">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-primary-foreground/75 text-sm leading-relaxed max-w-xs">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-300 text-navy-950 font-bold gap-2"
              onClick={() => {
                const el = document.getElementById("contact-section");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get a Free Quote Now
              <ArrowRight className="h-5 w-5" />
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
                WhatsApp Us Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ──────────────── TESTIMONIALS ──────────────── */}
      <section
        className="py-16 md:py-24 bg-background"
        aria-labelledby="testimonials-heading"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-secondary text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Customer Reviews
            </span>
            <h2
              id="testimonials-heading"
              className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4"
            >
              What Sydney Renters Say About Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our happy customers
              across Sydney have to say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t) => (
              <Card
                key={t.name}
                className="border border-border shadow-card bg-white"
              >
                <CardContent className="p-6">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }, (_, i) => (
                      <Star
                        key={`star-${t.name}-${i}`}
                        className="h-4 w-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground">
                        {t.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {t.suburb}, Sydney
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust signals */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-center">
            {[
              { label: "Bond Returns", value: "1,000+" },
              { label: "5-Star Reviews", value: "500+" },
              { label: "Guarantee", value: "100%" },
              { label: "Days a Week", value: "7" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1"
              >
                <span className="text-4xl font-bold text-primary font-display">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── FAQ ──────────────── */}
      <FAQSection />

      {/* ──────────────── CONTACT CTA ──────────────── */}
      <section
        id="contact-section"
        className="py-16 md:py-24 section-gradient"
        aria-labelledby="contact-cta-heading"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div>
              <span className="inline-block bg-white text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Get a Free Quote
              </span>
              <h2
                id="contact-cta-heading"
                className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4"
              >
                Ready to Book? Get Your Free Quote Now
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Fill in the form and we'll get back to you within 1 hour. Or
                WhatsApp us directly for an instant response.
              </p>

              <div className="space-y-4">
                <a
                  href="https://wa.me/61488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-green-50 border border-green-200 hover:bg-green-100 transition-colors group"
                  data-ocid="contact.whatsapp.button"
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
                    <p className="font-semibold text-foreground">
                      Call Us Directly
                    </p>
                    <p className="text-sm text-muted-foreground">
                      0488 841 883
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-primary ml-auto group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-yellow-50 border border-yellow-200">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-yellow-700 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-yellow-800 text-sm">
                      100% Bond Back Guarantee
                    </p>
                    <p className="text-xs text-yellow-700 mt-0.5">
                      If your property manager raises any issues, we come back
                      and fix them for FREE within 72 hours. No questions asked.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border border-border shadow-card bg-white">
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground text-xl mb-1">
                  Get Your Free Quote
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Takes less than 2 minutes. We'll respond within 1 hour.
                </p>
                <ContactForm compact />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
