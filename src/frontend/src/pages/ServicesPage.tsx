import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useMetaTags } from "../hooks/useMetaTags";

const services = [
  {
    id: "bond-cleaning",
    title: "End of Lease / Bond Cleaning",
    image: "/assets/generated/hero-banner.dim_1200x600.jpg",
    alt: "End of lease bond cleaning Sydney – full apartment clean by Tru End of Lease Cleaning team",
    sections: [
      {
        subtitle: "Living Areas & Bedrooms",
        points: [
          "Vacuum and mop all floors",
          "Clean all skirting boards",
          "Wipe down windowsills and window tracks",
          "Remove cobwebs from ceilings and corners",
          "Clean light switches and power points",
          "Wipe down all walls to remove marks and scuffs",
        ],
      },
      {
        subtitle: "Kitchen",
        points: [
          "Deep clean the oven inside and out",
          "Clean the stovetop and rangehood",
          "Wipe all benchtops and splashbacks",
          "Clean the sink and taps",
          "Wipe down all cupboards inside and out",
          "Clean the dishwasher",
        ],
      },
      {
        subtitle: "Bathrooms",
        points: [
          "Scrub and disinfect toilet, bath, shower, and basin",
          "Clean tiles and grout",
          "Wipe down all mirrors and glass",
          "Polish taps and fittings",
          "Remove soap scum and mould",
        ],
      },
      {
        subtitle: "Laundry",
        points: [
          "Clean washing machine inside and out",
          "Wipe down the dryer",
          "Clean the laundry tub",
          "Mop the floor",
        ],
      },
    ],
    content: [
      "Moving out of a rental property in Sydney is a big deal. One of the most important things you need to do before you hand back the keys is make sure the place is spotlessly clean. That is exactly what end of lease cleaning – also called bond cleaning – is all about.",
      "At Tru End of Lease Cleaning Sydney, we have helped hundreds of Sydney renters get their full bond back. We know what real estate agents check during a final inspection. We know the spots that get missed. And we make sure every single one of them is taken care of before your inspection.",
      "Our end of lease cleaning service covers your entire property from top to bottom. We clean every room, every surface, every appliance, and every corner.",
      "Every bond clean comes with our 100% Bond Back Guarantee. If your property manager raises any issues after the inspection, we come back and fix them for free within 72 hours. No questions asked.",
      "We bring all our own professional-grade cleaning products and equipment. You do not need to supply a thing. All our cleaners are background-checked, fully trained, and insured.",
      "Book your end of lease clean today and take the stress out of moving.",
    ],
  },
  {
    id: "kitchen-cleaning",
    title: "Kitchen Deep Cleaning",
    image: "/assets/generated/service-kitchen-cleaning.dim_800x500.jpg",
    alt: "Professional kitchen deep cleaning for bond return in Sydney by Tru End of Lease Cleaning",
    sections: [
      {
        subtitle: "Oven & Cooktop",
        points: [
          "Dismantle oven racks, trays, and burners",
          "Soak and scrub every part until they shine",
          "Clean oven cavity, door, and glass",
          "Degrease stovetop and make burner caps look brand new",
        ],
      },
      {
        subtitle: "Rangehood",
        points: [
          "Remove filters and soak in degreaser",
          "Clean entire rangehood unit inside and out",
          "Remove grease build-up that causes bond disputes",
        ],
      },
      {
        subtitle: "Benchtops, Cupboards & Sink",
        points: [
          "Wipe down all benchtops with food-safe sanitising products",
          "Clean splashbacks and remove grease spots",
          "Clean inside and outside of every cupboard and drawer",
          "Descale, scrub, and polish sink and taps until they gleam",
        ],
      },
      {
        subtitle: "Appliances",
        points: [
          "Clean dishwasher filter, door seals, and run cleaning cycle",
          "Defrost, clean, and deodorise fridge if applicable",
        ],
      },
    ],
    content: [
      "The kitchen is the most heavily scrutinised room in any end of lease inspection. Landlords and property managers spend more time in the kitchen than anywhere else because it is the hardest room to clean and the easiest place to spot shortcuts. That is why our kitchen deep cleaning service is so thorough.",
      "At Tru End of Lease Cleaning Sydney, we treat every kitchen like it is our own. We use professional-grade degreasers and cleaning solutions that cut through years of built-up grease and grime in a way that household products simply cannot match. The results speak for themselves.",
      "Our kitchen deep cleaning service is included as part of our full bond clean, or you can book it as a standalone service. Either way, we guarantee you will be impressed with the results.",
    ],
  },
  {
    id: "bathroom-cleaning",
    title: "Bathroom & Toilet Cleaning",
    image: "/assets/generated/service-bathroom-cleaning.dim_800x500.jpg",
    alt: "Sparkling bathroom and toilet bond cleaning Sydney by Tru End of Lease Cleaning",
    sections: [
      {
        subtitle: "Shower & Bath",
        points: [
          "Scrub shower walls, screen, and floor",
          "Remove soap scum, mould, and limescale",
          "Clean showerhead and taps, polish fittings",
          "Scrub bathtub thoroughly and polish the surround",
        ],
      },
      {
        subtitle: "Tiles & Grout",
        points: [
          "Clean all tiles with professional tile cleaner",
          "Apply specialised grout cleaner to remove black mould",
          "Restore white grout to its original colour",
        ],
      },
      {
        subtitle: "Toilet & Vanity",
        points: [
          "Disinfect toilet bowl, under the rim, seat, lid, cistern, and base",
          "Clean basin, taps, and vanity unit",
          "Remove limescale from taps and polish everything",
          "Wipe down mirror and leave it streak-free",
        ],
      },
      {
        subtitle: "Floor & Extras",
        points: [
          "Mop and sanitise bathroom floor",
          "Clean exhaust fan cover and remove dust build-up",
          "Wipe down towel rails, toilet roll holders, and fixtures",
        ],
      },
    ],
    content: [
      "Bathrooms are another area where property managers look very carefully during an end of lease inspection. Soap scum, mould, limescale, and grubby grout are the most common reasons landlords raise cleaning issues and withhold bond money. Our bathroom cleaning service tackles all of these problems and more.",
      "At Tru End of Lease Cleaning Sydney, we use professional tile and grout cleaners, anti-mould treatments, and powerful disinfectants to get your bathroom looking immaculate. We pay special attention to the areas that are easy to overlook but impossible to miss during an inspection.",
      "We always bring our own cleaning products and equipment. You do not need to buy anything special or worry about what products to use. Our cleaners know exactly which products work best for different types of tiles, fittings, and surfaces.",
      "Book our bathroom cleaning service today and get one step closer to getting your full bond back.",
    ],
  },
  {
    id: "carpet-cleaning",
    title: "Carpet Steam Cleaning",
    image: "/assets/generated/service-carpet-cleaning.dim_800x500.jpg",
    alt: "Professional carpet steam cleaning Sydney for bond return by Tru End of Lease Cleaning",
    sections: [
      {
        subtitle: "What We Clean",
        points: [
          "All carpeted areas including bedrooms, living rooms, hallways, and stairs",
          "Move light furniture where possible to clean underneath",
          "Pre-treat all stains and high-traffic areas",
        ],
      },
      {
        subtitle: "Stain & Odour Treatment",
        points: [
          "Treat red wine, coffee, pet accidents, and food spills",
          "Apply specialised pet odour neutraliser",
          "Eliminates odours rather than just masking them",
        ],
      },
      {
        subtitle: "Hot Water Extraction Process",
        points: [
          "Pump hot water and cleaning solution deep into carpet fibres",
          "Extract water along with all dirt, dust mites, allergens, and bacteria",
          "Far more effective than surface vacuum or dry clean",
          "Carpets typically take 4–8 hours to dry fully",
        ],
      },
    ],
    content: [
      "Most rental leases in Sydney require professional carpet steam cleaning at the end of the tenancy. It is often written directly into your lease agreement. If you skip it or use a DIY carpet cleaner, your property manager can withhold bond money to pay for it themselves.",
      "At Tru End of Lease Cleaning Sydney, we provide hot water extraction steam cleaning – the gold standard of carpet cleaning recommended by most carpet manufacturers and required by most real estate agents in Sydney.",
      "Hiring a professional carpet steam cleaning service gives you a receipt and a guarantee that real estate agents accept. DIY hire machines use lower water temperatures and less powerful suction, which means they do not clean as deeply and leave carpets wet for longer.",
      "Our carpet steam cleaning service is available as a standalone booking or as part of our full end of lease cleaning package. Either way, you get our satisfaction guarantee – if the real estate agent is not happy, we come back and clean again for free.",
    ],
  },
  {
    id: "window-cleaning",
    title: "Window Cleaning",
    image: "/assets/generated/service-window-cleaning.dim_800x500.jpg",
    alt: "Professional window cleaning for end of lease in Sydney by Tru End of Lease Cleaning",
    sections: [
      {
        subtitle: "Interior & Exterior Windows",
        points: [
          "Clean inside face of all windows",
          "Remove dust, fingerprints, smudges, and water marks",
          "Clean outside face of all ground-level windows",
          "Remove dirt, grime, water stains, and insect marks",
        ],
      },
      {
        subtitle: "Tracks, Frames & Screens",
        points: [
          "Clean out all window tracks",
          "Wipe down frames, sills, and reveals",
          "Remove and clean fly screens",
          "Clean sliding door glass panels inside and out",
        ],
      },
      {
        subtitle: "Mirrors",
        points: [
          "Clean all interior mirrors throughout the property",
          "Bathroom mirrors and full-length mirrors",
          "Leave every surface streak-free and crystal clear",
        ],
      },
    ],
    content: [
      "Clean windows make a massive difference to the overall appearance of a property. When sunlight streams through streak-free glass, the whole place looks brighter, cleaner, and more cared for. Dirty or smudged windows, on the other hand, are one of the first things a property manager notices during an inspection.",
      "At Tru End of Lease Cleaning Sydney, our window cleaning service uses professional squeegees, microfibre cloths, and streak-free cleaning solutions to get every pane of glass looking crystal clear. We clean both the inside and outside of windows wherever safely accessible.",
      "Many tenants try to clean their own windows with paper towel and spray cleaner, but this often leaves streaks and smears. Property managers know the difference between a properly cleaned window and one that has been wiped with a cloth. Our professional technique and tools guarantee streak-free results every time.",
      "Our window cleaning is included in our full bond clean package, or you can book it as a standalone service. Either way, you get our 100% satisfaction guarantee.",
    ],
  },
  {
    id: "oven-cleaning",
    title: "Oven Cleaning",
    image: "/assets/generated/service-oven-cleaning.dim_800x500.jpg",
    alt: "Professional oven deep cleaning Sydney for end of lease by Tru End of Lease Cleaning",
    sections: [
      {
        subtitle: "Oven Cavity & Racks",
        points: [
          "Apply professional degreaser to entire oven cavity",
          "Scrub back wall, sides, floor, and roof",
          "Remove and soak all oven racks and trays in industrial degreaser",
          "Scrub until free of grease and discolouration",
        ],
      },
      {
        subtitle: "Oven Door & Stovetop",
        points: [
          "Clean exterior oven door glass thoroughly",
          "Clean door seals and hinges",
          "Remove and soak burner caps and grates",
          "Degrease stovetop surface until sparkling",
        ],
      },
      {
        subtitle: "Rangehood & Other Appliances",
        points: [
          "Clean rangehood interior and exterior",
          "Remove, soak, and clean grease filters",
          "Clean separate grill, sandwich press, or other appliances if applicable",
        ],
      },
    ],
    content: [
      "The oven is arguably the single most dreaded part of any end of lease clean. Years of baked-on grease, carbon deposits, and food spills make the oven one of the toughest cleaning jobs in any kitchen. It is also one of the most scrutinised items during an end of lease inspection. A dirty oven is one of the most common reasons for bond deductions in Sydney.",
      "At Tru End of Lease Cleaning Sydney, our oven cleaning specialists use professional-grade caustic cleaners, specialised tools, and a proven method to get your oven looking factory fresh. We have cleaned ovens of every brand and size, from small apartments to large family homes, and we always deliver exceptional results.",
      "Our oven cleaning is included in our full bond cleaning package and is also available as a standalone service. We guarantee you will be amazed at the results. Book today.",
    ],
  },
];

export default function ServicesPage() {
  useMetaTags({
    title: "End of Lease Cleaning Services Sydney | Tru Bond Cleaning",
    description:
      "Explore our full range of bond cleaning services in Sydney – kitchen, bathroom, carpet, oven, window and wall cleaning. 400-point checklist, guaranteed.",
    ogImage: "/assets/generated/service-kitchen-cleaning.dim_800x500.jpg",
    geoPlacename: "Sydney NSW Australia",
  });

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="hero-gradient text-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
            End of Lease Cleaning Services in Sydney
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Every service comes with our 400-point checklist and 100% Bond Back
            Guarantee. We make sure your property passes the final inspection –
            every time.
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

      {/* Services Detail */}
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 space-y-20">
        {services.map((service, idx) => (
          <article
            key={service.id}
            id={service.id}
            className="scroll-mt-20"
            aria-label={service.title}
          >
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${
                idx % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div className={`${idx % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-72 md:h-96 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full">
                    100% Bond Back Guarantee
                  </div>
                </div>
              </div>

              {/* Content */}
              <div
                className={`${idx % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
              >
                <span className="text-primary font-semibold text-sm">{`0${idx + 1}. Service`}</span>
                <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mt-1 mb-4">
                  {service.title}
                </h2>

                <div className="space-y-3 text-muted-foreground leading-relaxed mb-6">
                  {service.content.map((para) => (
                    <p key={para.slice(0, 40)}>{para}</p>
                  ))}
                </div>

                {/* Checklist sections */}
                <div className="space-y-4 mb-6">
                  {service.sections.map((sec) => (
                    <div key={sec.subtitle}>
                      <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                        {sec.subtitle}
                      </h3>
                      <ul className="ml-6 space-y-1.5">
                        {sec.points.map((pt) => (
                          <li
                            key={pt}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="text-green-600 mt-0.5">•</span>
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="font-semibold gap-2">
                    <Link to="/contact">
                      Book This Service
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="font-semibold gap-2 border-green-500 text-green-700 hover:bg-green-50"
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
            </div>

            {idx < services.length - 1 && (
              <div className="mt-20 border-t border-border" />
            )}
          </article>
        ))}
      </div>

      {/* CTA Banner */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Ready to Get Your Full Bond Back?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Book any of our services today and experience the difference a truly
            professional bond clean makes. 100% satisfaction guaranteed.
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
                WhatsApp 0488 841 883
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
