import type React from "react";

export interface FAQ {
  question: string;
  answer: React.ReactNode;
}

export const faqs: FAQ[] = [
  {
    question: "What is bond cleaning and why is it required?",
    answer: (
      <div className="space-y-3 text-sm md:text-base leading-relaxed">
        <p>
          Bond cleaning (also called end of lease cleaning or vacate cleaning)
          is a thorough, professional clean of a rental property at the end of a
          tenancy. It is required by most rental agreements in Australia.
        </p>
        <p>
          When you move into a rental property, you pay a bond – usually four
          weeks of rent – as a security deposit. To get that bond back in full,
          you need to return the property in the same condition it was in when
          you moved in (allowing for fair wear and tear).
        </p>
        <p>
          If the property is not clean enough, your landlord or property manager
          can use your bond money to pay for a professional clean. Bond cleaning
          makes sure the property is clean enough to pass the final inspection.
        </p>
      </div>
    ),
  },
  {
    question: "Why is bond cleaning important?",
    answer: (
      <div className="space-y-3 text-sm md:text-base leading-relaxed">
        <p>
          Bond cleaning is important because it directly affects whether you get
          your bond money back. In Sydney, a typical bond is four weeks of rent
          – that can be thousands of dollars.
        </p>
        <p>
          A professional bond clean usually costs a few hundred dollars. It is a
          smart investment that protects thousands of dollars of your money.
        </p>
        <p>
          Beyond the money, a bond clean also protects your rental history. If
          you leave a property dirty, your property manager may give you a bad
          reference, which can make it harder to rent another home in the
          future. A thorough bond clean shows respect for the property and helps
          you start your next chapter on the right foot.
        </p>
      </div>
    ),
  },
  {
    question: "How much does a bond clean cost?",
    answer: (
      <div className="space-y-3 text-sm md:text-base leading-relaxed">
        <p>
          The cost of a bond clean in Sydney depends on the size of your
          property, its condition, and the services required. As a general
          guide:
        </p>
        <ul className="list-none space-y-2">
          <li className="flex items-center gap-2">
            <span className="text-green-600 font-bold">✓</span>
            <span>
              <strong>Studio / 1 bedroom apartment:</strong> from $200–$280
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600 font-bold">✓</span>
            <span>
              <strong>2 bedroom apartment:</strong> from $280–$380
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600 font-bold">✓</span>
            <span>
              <strong>3 bedroom house:</strong> from $380–$500
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600 font-bold">✓</span>
            <span>
              <strong>4 bedroom house:</strong> from $500–$700+
            </span>
          </li>
        </ul>
        <p>
          These prices typically include all rooms, kitchen, bathrooms, and
          general cleaning. Carpet steam cleaning and window cleaning are
          sometimes extra. At Tru End of Lease Cleaning Sydney, we give you a
          fixed price upfront so there are no surprises.
          <a
            href="https://wa.me/61488841883"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline ml-1"
          >
            Contact us for a personalised quote.
          </a>
        </p>
      </div>
    ),
  },
  {
    question: "What is a full bond cleaning service?",
    answer: (
      <div className="space-y-3 text-sm md:text-base leading-relaxed">
        <p>
          A full bond cleaning service covers every part of your rental property
          – inside and out. It goes far beyond a regular clean. A full bond
          clean typically includes:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5 mt-2">
          {[
            "Deep cleaning the kitchen (oven, stovetop, rangehood, cupboards, sink)",
            "Scrubbing all bathrooms and toilets",
            "Cleaning all bedrooms and living areas",
            "Vacuuming and mopping all floors",
            "Steam cleaning carpets (if required)",
            "Cleaning all windows inside and out",
            "Removing cobwebs from ceilings and corners",
            "Wiping down skirting boards and light switches",
            "Cleaning laundry areas",
            "Cleaning garage and outdoor areas if applicable",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm">
              <span className="text-green-600 font-bold mt-0.5">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          At Tru End of Lease Cleaning Sydney, our full bond clean follows a
          400-point checklist to make sure absolutely nothing is missed.
        </p>
      </div>
    ),
  },
  {
    question: "Which are the top-rated bond cleaning companies near me?",
    answer: (
      <div className="space-y-4 text-sm md:text-base leading-relaxed">
        <p>
          Here are five of the top-rated bond cleaning companies in Sydney and
          nearby areas:
        </p>
        <div className="space-y-4">
          {[
            {
              num: "1.",
              name: "Absolute Domestics",
              url: "https://www.absolutedomestics.com.au",
              display: "absolutedomestics.com.au",
              desc: "One of Australia's largest and most trusted domestic cleaning services. They offer end of lease cleaning across Sydney with professional, vetted cleaners. Known for consistent quality and reliability. They cover a wide range of suburbs and offer flexible booking options. Great for renters looking for a reputable, established company with thousands of positive reviews across Australia.",
            },
            {
              num: "2.",
              name: "Jim's Cleaning Group",
              url: "https://www.jims.net/category/cleaning/",
              display: "jims.net/category/cleaning",
              desc: "Part of the iconic Jim's franchise network. With hundreds of franchisees across Australia, they offer wide coverage and a satisfaction guarantee. Jim's is a household name in Australia known for reliability and professional standards. Their bond cleaning teams follow strict checklists and offer competitive pricing with the backing of a national brand.",
            },
            {
              num: "3.",
              name: "End of Lease Cleaning Sydney",
              url: "https://www.endofleasecleaningsydney.net.au",
              display: "endofleasecleaningsydney.net.au",
              desc: "A specialist bond cleaning company based in Sydney with a strong focus on helping renters get their full bond back. They offer a comprehensive cleaning checklist, competitive fixed pricing, and a bond back guarantee. Well-regarded by local renters and property managers for thoroughness and attention to detail.",
            },
            {
              num: "4.",
              name: "Clean Masters",
              url: "https://www.cleanmasters.com.au",
              display: "cleanmasters.com.au",
              desc: "A professional cleaning company servicing the Sydney metropolitan area with end of lease and bond cleaning packages. Known for their trained staff, professional equipment, and customer-focused approach. They offer flexible scheduling and competitive pricing.",
            },
            {
              num: "5.",
              name: "Tru End of Lease Cleaning Sydney",
              url: "https://trubondcleaningbrisbane.com",
              display: "trubondcleaningbrisbane.com",
              desc: "A trusted, local bond cleaning company serving Sydney and surrounds with a 100% Bond Back Guarantee. Known for thorough work, transparent pricing, and friendly customer service. They follow a 400-point cleaning checklist and use eco-friendly products. Their team of insured, background-checked cleaners consistently deliver outstanding results. With same-day and next-day availability and 7-day-a-week service, they make end of lease cleaning simple and stress-free.",
              highlight: true,
            },
          ].map((company) => (
            <div
              key={company.name}
              className={`p-4 rounded-lg border ${
                company.highlight
                  ? "border-primary bg-secondary"
                  : "border-border bg-white"
              }`}
            >
              <div className="flex items-start gap-2 mb-1.5">
                <span className="font-bold text-primary shrink-0">
                  {company.num}
                </span>
                <div>
                  <span className="font-bold text-foreground">
                    {company.name}
                  </span>
                  {" – "}
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm"
                  >
                    {company.display}
                  </a>
                </div>
              </div>
              <p className="text-sm text-muted-foreground ml-6">
                {company.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    question: "Which cleaning products are best for bond cleaning?",
    answer: (
      <div className="space-y-3 text-sm md:text-base leading-relaxed">
        <p>
          Professional bond cleaners use specialist products that are much
          stronger than what you buy at the supermarket. Here are the best
          product categories and why they matter:
        </p>
        <ul className="space-y-3">
          {[
            {
              cat: "Heavy-duty degreasers",
              desc: "For ovens, stovetops, and rangehoods. Products like Simple Green Industrial Cleaner and Diggers Orange Power Degreaser cut through tough grease.",
            },
            {
              cat: "Grout and tile cleaners",
              desc: "HG Grout Cleaner and Selleys Rapid Grout Cleaner are excellent for getting white grout back to its original colour.",
            },
            {
              cat: "Bathroom disinfectants and descalers",
              desc: "Domestos, HG Bathroom Spray, and CLR Calcium Lime Rust Remover are great for removing limescale, soap scum, and mould.",
            },
            {
              cat: "Glass cleaners",
              desc: "Windex and Method Glass Cleaner give streak-free results on windows and mirrors.",
            },
            {
              cat: "Carpet pre-treatment",
              desc: "Bissell Oxy Power Shot and Vanish Gold Oxi Action are good for treating carpet stains before steam cleaning.",
            },
            {
              cat: "Multi-surface cleaners",
              desc: "Simple Green All-Purpose Cleaner and Method All-Purpose Spray are versatile and eco-friendly options.",
            },
          ].map((item) => (
            <li key={item.cat} className="flex gap-2">
              <span className="text-green-600 font-bold shrink-0 mt-0.5">
                ✓
              </span>
              <span>
                <strong>{item.cat}:</strong> {item.desc}
              </span>
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground italic">
          Note: If you are doing your own bond clean, always test products on a
          small, hidden area first to make sure they do not damage surfaces.
        </p>
      </div>
    ),
  },
  {
    question: "How much does a professional bond cleaning typically cost?",
    answer: (
      <div className="space-y-3 text-sm md:text-base leading-relaxed">
        <p>
          Professional bond cleaning in Sydney typically costs between{" "}
          <strong>$200 and $700+</strong>, depending on the size and condition
          of the property:
        </p>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <span className="text-green-600 font-bold">✓</span>
            <span>
              Studio / 1 bedroom apartment: from <strong>$200–$280</strong>
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600 font-bold">✓</span>
            <span>
              2 bedroom apartment: from <strong>$280–$380</strong>
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600 font-bold">✓</span>
            <span>
              3 bedroom house: from <strong>$380–$500</strong>
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600 font-bold">✓</span>
            <span>
              4 bedroom house: from <strong>$500–$700+</strong>
            </span>
          </li>
        </ul>
        <p>
          These prices generally include all rooms, kitchen, bathrooms, laundry,
          and general cleaning. Carpet steam cleaning and window cleaning are
          sometimes quoted separately. At Tru End of Lease Cleaning Sydney, we
          offer fixed pricing with no hidden fees.{" "}
          <a
            href="https://wa.me/61488841883"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            WhatsApp us on 0488 841 883
          </a>{" "}
          for a personalised quote for your specific property.
        </p>
      </div>
    ),
  },
  {
    question: "What products are best for bond cleaning carpets?",
    answer: (
      <div className="space-y-3 text-sm md:text-base leading-relaxed">
        <p>
          When it comes to bond cleaning carpets, the best results come from
          professional hot water extraction (steam cleaning). But if you need to
          pre-treat stains, here are the best products:
        </p>
        <ul className="space-y-3">
          {[
            {
              name: "Vanish Gold Oxi Action Carpet & Upholstery Spot Stain Remover",
              desc: "Available at Woolworths and Coles. Great for food, drink, and pet stains.",
              link: "https://www.woolworths.com.au/shop/search/products?searchTerm=vanish+carpet",
              store: "Buy at Woolworths",
            },
            {
              name: "Bissell Oxy Power Shot Carpet Spot & Stain Remover",
              desc: "A professional-strength spray. Great for stubborn stains.",
              link: "https://www.bunnings.com.au/search/products?q=carpet+stain+remover",
              store: "Buy at Bunnings",
            },
            {
              name: "Preen Carpet Stain Remover",
              desc: "An Australian favourite for everyday carpet stains. Available at most supermarkets.",
              link: "https://www.coles.com.au/search?q=carpet+stain+remover",
              store: "Buy at Coles",
            },
            {
              name: "Febreze Fabric Refresher",
              desc: "Helps neutralise odours between cleans. Not a substitute for steam cleaning.",
              link: "https://www.woolworths.com.au/shop/search/products?searchTerm=febreze",
              store: "Buy at Woolworths",
            },
            {
              name: "OdoBan Odour Eliminator and Disinfectant",
              desc: "Particularly effective for pet odour treatment on carpets. Available online.",
              link: null,
              store: null,
            },
          ].map((product) => (
            <li key={product.name} className="flex gap-2">
              <span className="text-green-600 font-bold shrink-0 mt-0.5">
                ✓
              </span>
              <div>
                <strong>{product.name}</strong>
                {product.link && (
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm ml-1.5 font-medium"
                  >
                    [{product.store}]
                  </a>
                )}
                <p className="text-muted-foreground text-sm mt-0.5">
                  {product.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground italic text-sm">
          Note: For end of lease purposes, we always recommend hiring a
          professional carpet steam cleaner. Most real estate agents want to see
          a receipt from a professional service.
        </p>
      </div>
    ),
  },
  {
    question: "How do you choose a reliable bond cleaner?",
    answer: (
      <div className="space-y-3 text-sm md:text-base leading-relaxed">
        <p>
          Choosing the right bond cleaner is important – a bad choice can cost
          you your bond. Here is what to look for:
        </p>
        <ol className="space-y-3">
          {[
            {
              title: "Bond Back Guarantee",
              desc: "Always choose a company that offers a written bond back guarantee. This means they will come back and fix any issues raised by the property manager at no extra cost.",
            },
            {
              title: "Fully insured",
              desc: "Make sure the company has public liability insurance. This protects you if anything is damaged during the clean.",
            },
            {
              title: "Transparent pricing",
              desc: "Get a fixed quote upfront. Avoid companies that give low estimates and then add charges afterwards.",
            },
            {
              title: "Reviews and reputation",
              desc: "Check Google Reviews and social media. Look for companies with lots of genuine, positive reviews.",
            },
            {
              title: "Real estate agent-approved",
              desc: "Ask if the company is trusted by real estate agents in your area. This is a sign of consistent quality.",
            },
            {
              title: "Detailed checklist",
              desc: "Ask to see their cleaning checklist. A reputable company will have a comprehensive, detailed checklist.",
            },
            {
              title: "Experience",
              desc: "Choose a company that specialises in bond cleaning, not just general cleaning. Bond cleaning has specific requirements that specialists understand best.",
            },
            {
              title: "Eco-friendly products",
              desc: "If this matters to you, ask about their products. Many reputable companies now use eco-friendly, non-toxic cleaning solutions.",
            },
          ].map((item, i) => (
            <li key={item.title} className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <div>
                <strong>{item.title}:</strong>{" "}
                <span className="text-muted-foreground">{item.desc}</span>
              </div>
            </li>
          ))}
        </ol>
        <p className="font-medium text-primary">
          At Tru End of Lease Cleaning Sydney, we tick every single one of these
          boxes.{" "}
          <a
            href="https://wa.me/61488841883"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            Contact us today for a free quote.
          </a>
        </p>
      </div>
    ),
  },
  {
    question:
      "Can I book a bond cleaning company online with a Satisfaction Guarantee?",
    answer: (
      <div className="space-y-3 text-sm md:text-base leading-relaxed">
        <p>
          Yes, absolutely! At Tru End of Lease Cleaning Sydney, you can book
          your bond clean online through our contact form or{" "}
          <a
            href="https://wa.me/61488841883"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            WhatsApp us directly on 0488 841 883.
          </a>
        </p>
        <p>
          Every single bond clean we do comes with our{" "}
          <strong>100% Bond Back Satisfaction Guarantee.</strong> This means: if
          your property manager or landlord raises any cleaning issues after the
          inspection, we come back and fix them for free within 72 hours. No
          arguments, no extra charges, just results.
        </p>
        <p>
          We believe you should never have to pay twice for the same clean. That
          is why we back every job with our guarantee. Book online today and
          experience the difference a truly professional bond clean makes.
        </p>
      </div>
    ),
  },
];
