import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "../data/faqs";

interface FAQSectionProps {
  showTitle?: boolean;
  limit?: number;
}

export default function FAQSection({
  showTitle = true,
  limit,
}: FAQSectionProps) {
  const displayFaqs = limit ? faqs.slice(0, limit) : faqs;

  return (
    <section
      className="py-16 md:py-24 bg-white"
      aria-label="Frequently Asked Questions"
    >
      <div className="container mx-auto px-4 md:px-6">
        {showTitle && (
          <div className="text-center mb-12">
            <span className="inline-block bg-secondary text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              FAQs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Got questions about bond cleaning? We've got answers. Here are the
              most common questions Sydney renters ask us.
            </p>
          </div>
        )}

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {displayFaqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index + 1}`}
                data-ocid={`faq.item.${index + 1}`}
                className="border border-border rounded-xl bg-white shadow-xs overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground hover:text-primary hover:no-underline text-sm md:text-base leading-snug">
                  <span className="flex items-start gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center mt-0.5">
                      {index + 1}
                    </span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 pt-0 text-muted-foreground">
                  <div className="pl-9">{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
