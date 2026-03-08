import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock, MapPin, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import ContactForm from "../components/ContactForm";
import { useMetaTags } from "../hooks/useMetaTags";

export default function ContactPage() {
  useMetaTags({
    title: "Contact Tru End of Lease Cleaning Sydney | Get a Free Quote",
    description:
      "Get in touch with Tru End of Lease Cleaning Sydney. Call or WhatsApp us on 0488 841 883. Fill out our quote form and we'll get back to you fast.",
    ogImage: "/assets/generated/contact-us.dim_800x400.jpg",
  });

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="hero-gradient text-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Get Your Free Quote Today
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Ready to get your full bond back? Contact us now and we'll give you
            a fixed price quote with no hidden fees.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section
        className="py-16 md:py-24 bg-background"
        aria-labelledby="contact-heading"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2
                id="contact-heading"
                className="text-2xl md:text-3xl font-bold font-display text-foreground mb-6"
              >
                We're Here to Help You Get Your Bond Back
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you want to book a bond clean, get a price estimate, or
                just ask a question – we are here for you. Contact us by phone,
                WhatsApp, or use the form and we will get back to you fast.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4 mb-8">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/61488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-xl bg-green-50 border border-green-200 hover:bg-green-100 transition-colors group"
                  data-ocid="contact.whatsapp.button"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                    <SiWhatsapp className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-green-800 text-lg">
                      Chat on WhatsApp Now
                    </p>
                    <p className="text-sm text-green-600">
                      0488 841 883 – Fastest way to reach us
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-green-600 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Phone */}
                <a
                  href="tel:0488841883"
                  className="flex items-center gap-4 p-5 rounded-xl bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-foreground text-lg">
                      Call Us Directly
                    </p>
                    <p className="text-sm text-muted-foreground">
                      0488 841 883
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Address */}
                <div className="flex items-center gap-4 p-5 rounded-xl bg-secondary border border-border">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">
                      Service Area
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Sydney, NSW, Australia
                    </p>
                    <p className="text-sm text-muted-foreground">
                      All of Greater Sydney
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-4 p-5 rounded-xl bg-secondary border border-border">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">
                      Business Hours
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Monday – Sunday, 7am – 7pm
                    </p>
                    <p className="text-sm text-green-600 font-medium">
                      We're open 7 days a week!
                    </p>
                  </div>
                </div>
              </div>

              {/* Hero image */}
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img
                  src="/assets/generated/contact-us.dim_800x400.jpg"
                  alt="Contact Tru End of Lease Cleaning Sydney – get a free quote for your bond clean"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Form */}
            <Card className="border border-border shadow-card bg-white">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold font-display text-foreground mb-2">
                  Get Your Free Quote
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Fill in your details below and we'll get back to you within 1
                  hour during business hours.
                </p>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick WhatsApp CTA */}
      <section className="py-12 bg-green-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-3">
            Want an Instant Answer? Chat on WhatsApp!
          </h2>
          <p className="text-white/80 text-lg mb-6 max-w-xl mx-auto">
            Get a fast quote, ask questions, or book your clean – all on
            WhatsApp. We reply quickly!
          </p>
          <Button
            size="lg"
            className="bg-white text-green-700 hover:bg-green-50 font-bold gap-2 text-lg px-8"
            asChild
          >
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiWhatsapp className="h-6 w-6" />
              Chat on WhatsApp Now – 0488 841 883
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
