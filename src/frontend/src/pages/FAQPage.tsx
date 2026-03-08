import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import FAQSection from "../components/FAQSection";
import { useMetaTags } from "../hooks/useMetaTags";

export default function FAQPage() {
  useMetaTags({
    title: "Bond Cleaning FAQ Sydney | Tru End of Lease Cleaning",
    description:
      "Got questions about bond cleaning in Sydney? Find answers to the most common end of lease cleaning FAQs – costs, products, guarantees, and more.",
    ogImage: "/assets/generated/about-team.dim_800x500.jpg",
    geoPlacename: "Sydney NSW Australia",
  });

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="hero-gradient text-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Frequently Asked Questions About Bond Cleaning
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Everything you need to know about end of lease cleaning in Sydney.
            Can't find your answer? WhatsApp us and we'll reply in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <a href="tel:0488841883">
                <Phone className="h-5 w-5" />
                Call 0488 841 883
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* All FAQs */}
      <FAQSection showTitle={false} />

      {/* CTA Banner */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Still Have Questions? We're Happy to Help!
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Our friendly team is available 7 days a week. Chat with us on
            WhatsApp for an instant response.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                WhatsApp Us Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
