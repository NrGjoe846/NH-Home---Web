import { Project, Service, Blog, TeamMember, Testimonial, FAQItem, ConstructionPackage } from "../types";

export const signatureProjects: Project[] = [
  {
    id: "nh-grandeur",
    name: "NH Grandeur",
    category: "Apartment",
    location: "OMR, Thoraipakkam, Chennai",
    status: "Ongoing",
    price: "Starting from ₹55 Lakhs",
    area: "950 - 1650 Sq.ft",
    approved: "DTCP & RERA Approved",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    overview: "NH Grandeur is a stunning high-rise residential apartment project located in the heart of Chennai's IT hub, OMR Thoraipakkam. Designed for modern tech professionals and growing families, these homes provide a perfect balance of connectivity, comfort, and sustainable modern architecture.",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
    ],
    amenities: [
      "Fully Equipped Gymnasium",
      "Infinity Swimming Pool",
      "Landscaped Terrace Garden",
      "24/7 Security & CCTV Surveillance",
      "100% Power Backup",
      "EV Charging Stations",
      "Kids Play Area & Indoor Games Room",
      "Water Treatment Plant"
    ],
    nearby: {
      schools: ["Sishya OMR School (2.5 km)", "Hindustan International School (3.8 km)", "OMR Oakridge (5.0 km)"],
      hospitals: ["Apollo Proton Cancer Centre (3.2 km)", "Gleneagles Global Health City (6.0 km)", "Lifeline Hospital (4.5 km)"],
      transit: ["Thoraipakkam Bus Stop (400m)", "Proposed OMR Metro Station (600m)", "Adyar Junction (8.5 km)"]
    },
    virtualTourUrl: "https://matterport.com/discover/space/simulated-tour",
    brochureUrl: "/brochures/nh_grandeur.pdf"
  },
  {
    id: "nh-orange-county",
    name: "NH Orange County",
    category: "Apartment",
    location: "Kasturba Nagar, Adyar, Chennai",
    status: "Upcoming",
    price: "Starting from ₹1.2 Crores",
    area: "1400 - 2200 Sq.ft",
    approved: "CMDA Approved",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    overview: "Located in one of Chennai's most premium and historic neighborhoods, NH Orange County represents pure luxury and exclusivity. With only 12 customized smart homes, this boutique apartment promotion offers unparalleled privacy, state-of-the-art automation, and custom modular woodwork.",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    ],
    amenities: [
      "Smart Home Automation (Alexa-controlled lights, ACs, curtains)",
      "Private Covered Car Parking with EV charger",
      "Italian Marble Flooring",
      "Private Balcony Gardens",
      "Video Door Phone & Biometric Locks",
      "Fully Integrated Modular Kitchen",
      "Sky Lounge for gatherings"
    ],
    nearby: {
      schools: ["Sishya Adyar School (1.2 km)", "St. Patrick's Academy (1.8 km)", "Kendriya Vidyalaya (2.0 km)"],
      hospitals: ["Fortis Malar Hospital (2.0 km)", "Dr. Kamakshi Memorial Hospital (5.5 km)", "VHS Hospital (2.2 km)"],
      transit: ["Kasturba Nagar MRTS Station (500m)", "Guindy Metro Station (4.2 km)", "Chennai Airport (11 km)"]
    },
    virtualTourUrl: "https://matterport.com/discover/space/simulated-tour",
    brochureUrl: "/brochures/nh_orange_county.pdf"
  },
  {
    id: "nh-elite-villas",
    name: "NH Elite Villas",
    category: "Villa",
    location: "Injambakkam, ECR, Chennai",
    status: "Ongoing",
    price: "Starting from ₹2.1 Crores",
    area: "2500 - 4000 Sq.ft",
    approved: "DTCP & RERA Approved",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    overview: "NH Elite Villas are highly curated beachside smart villas located along Chennai's beautiful East Coast Road. Experience true resort-style living with independent private pools, personalized structural blueprints, organic terrace gardens, and triple-height glass facades that flood your living space with light.",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
    ],
    amenities: [
      "Private Independent Plunge Pool",
      "Rooftop Barbeque Counter",
      "In-Villa Elevator provision",
      "Multi-car private garage",
      "Solar Panel System (5kW) integrated",
      "24/7 Security Patrol & Bio-fence",
      "Exclusive Beach Access pathway"
    ],
    nearby: {
      schools: ["The British International School (3.0 km)", "Vael's Billabong High School (4.5 km)", "Ebenezer International (5.2 km)"],
      hospitals: ["Global Hospital (8.0 km)", "Chettinad Health City (12 km)", "Lifeline Multispecialty (6.5 km)"],
      transit: ["Injambakkam Bus Terminus (800m)", "Sholinganallur Junction (6.2 km)", "Adyar Junction (10.5 km)"]
    },
    virtualTourUrl: "https://matterport.com/discover/space/simulated-tour",
    brochureUrl: "/brochures/nh_elite_villas.pdf"
  },
  {
    id: "nh-green-meadows",
    name: "NH Green Meadows",
    category: "Residential",
    location: "Guduvanchery, Chennai",
    status: "Completed",
    price: "Starting from ₹30 Lakhs",
    area: "1200 - 2400 Sq.ft",
    approved: "DTCP Approved",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    overview: "NH Green Meadows is a highly successful layout development featuring fully compounded premium villa plots with blacktop roads, integrated avenue trees, water connections to each plot, and storm water drains, fully completed and sold to over 80 happy families.",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=800&q=80"
    ],
    amenities: [
      "60-Feet and 40-Feet Wide Blacktop Roads",
      "Fully Compounded Gated Layout",
      "Dedicated Children Park & Walking Track",
      "Street Lights and Avenue Plantations",
      "Underground Water Pipeline for each plot",
      "Efficient Storm Water Drainage"
    ],
    nearby: {
      schools: ["Velammal Vidyalaya (1.5 km)", "SRM Public School (3.0 km)", "Delhi Public School (4.2 km)"],
      hospitals: ["SRM Medical College & Hospital (3.5 km)", "Deepam Hospital (2.8 km)", "JS Hospital (1.2 km)"],
      transit: ["Guduvanchery Railway Station (2.2 km)", "GST Road National Highway (2.0 km)", "Tambaram Terminus (12 km)"]
    },
    virtualTourUrl: "https://matterport.com/discover/space/simulated-tour",
    brochureUrl: "/brochures/nh_green_meadows.pdf"
  }
];

export const services: Service[] = [
  {
    id: "residential-construction",
    title: "Residential Construction",
    description: "Premium independent house & luxury villa construction with customizable plans, detailed material lists, and on-time structural guarantees.",
    iconName: "Home",
    features: [
      "100% customized architectural blueprints",
      "3D elevation and interior walkthroughs",
      "Experienced structural engineers supervision",
      "Soil test, water analysis, and load design",
      "On-site project engineer for daily updates"
    ],
    details: "We build premium residential homes on your own land with full turn-key packages. From standard independent houses to ultra-luxury oceanfront villas, our team utilizes modern civil engineering concepts, premium materials, and earthquake-resistant structural designs. We sign a legal penalty contract for on-time delivery."
  },
  {
    id: "apartment-promotion",
    title: "Apartment Promotion",
    description: "Developing modern, secure multi-family residential apartments in key neighborhoods featuring premium layouts and elite amenities.",
    iconName: "Building2",
    features: [
      "CMDA/DTCP & RERA approved layouts",
      "Optimal space utilization with zero dead space",
      "Secured gated communities with smart access",
      "EV chargers and robust solar panels",
      "Clear legal titles verified by top counsels"
    ],
    details: "As flat promoters, NH Homes builds structural landmarks in Chennai. We identify high-potential areas, carry out meticulous legal screenings, obtain strict government clearances, and design flats with rich amenities. Every apartment we construct comes with double-compounded parking, clear-flow drainage, and high-speed automatic elevators."
  },
  {
    id: "joint-venture",
    title: "Joint Venture Development",
    description: "Unlock the real financial potential of your land. NH Homes partners with land owners to create premium landmarks with high revenue sharing.",
    iconName: "Handshake",
    features: [
      "Most transparent revenue sharing (60:40 / 50:50 options)",
      "High, non-refundable goodwill advance payout",
      "We bear 100% of planning, clearance, and building costs",
      "Superior legal framework protecting owner's complete rights",
      "Highest quality builder track record in Chennai"
    ],
    details: "If you own a land of 1.5 grounds or more (with or without an old structure) in Chennai, you can partner with NH Homes for a highly profitable Joint Venture (JV). We convert your plot into an architectural masterwork. We handle the entire DTCP/CMDA approvals, construct with top-tier materials, and sell the flats, distributing cash or flats as per the mutual agreement."
  },
  {
    id: "government-approvals",
    title: "Government Approvals",
    description: "Hassle-free preparation and clearance of CMDA, DTCP, RERA, Patta transfers, and planning permits with 100% legal compliance.",
    iconName: "FileCheck",
    features: [
      "Fast-track CMDA & DTCP planning permission",
      "RERA promoter registration compliance",
      "Patta name transfer & subdivision support",
      "Structural stability certificates & licensing",
      "Panchayat and Corporation approvals"
    ],
    details: "Real estate compliance can be overwhelming. NH Homes has a dedicated liaison team that screens titles, prepares flawless engineering blueprints matching FSI guidelines, coordinates with the Chennai Metropolitan Development Authority (CMDA) and Directorate of Town and Country Planning (DTCP) offices, and secures clean planning approvals."
  },
  {
    id: "interior-design",
    title: "Interior Design & Woodwork",
    description: "Complete modular kitchens, customizable wardrobes, smart false ceilings, and modern lighting styled by expert designers.",
    iconName: "Palette",
    features: [
      "3D interior renderings and material boards",
      "Premium water-proof BWR plywood cabinetry",
      "Hafele, Hettich, or Ebco smart hardware",
      "Designer LED cove lighting and gypsum ceilings",
      "Space-saving storage hacks for modern homes"
    ],
    details: "Our interior design department transforms bare masonry into warm, functional, premium living spaces. Whether it's a modular kitchen with seamless acrylic pullouts, fully custom floor-to-ceiling bedroom wardrobes, elegant living room TV paneling, or smart-home lighting integrations, we craft interiors that reflect your personal taste."
  },
  {
    id: "renovation-remodeling",
    title: "Renovation & Remodeling",
    description: "Breathe new life into your existing building. Structural strengthening, modern extensions, and high-end exterior face-lifts.",
    iconName: "Hammer",
    features: [
      "Retrofitting and structural cracks treatment",
      "Bathroom waterproofing and high-end tiling",
      "Additional floor extensions with steel framing",
      "Modernizing old facades with ACP/Glass cladding",
      "Electrical rewire and plumbing overhauls"
    ],
    details: "NH Homes has special experts for restoration. If you have an old building that needs structural strengthening, waterproofing, a modern kitchen extension, or an elegant modern facade update to boost its commercial/rental value, we offer safe, fast-track engineering solutions without disrupting the existing framework."
  },
  {
    id: "earth-mover-services",
    title: "Earth Mover & Site Services",
    description: "Heavy-duty machinery solutions including excavation, earth moving, site development, and land clearing for safe foundation works.",
    iconName: "Truck",
    features: [
      "Heavy excavation & professional foundation pits",
      "Grading, earth moving & sand levelling services",
      "Full-scale site development & access roads setup",
      "Rapid land clearing, stump extraction & debris hauling"
    ],
    details: "NH Homes operates a modern, captive fleet of heavy earth-moving machinery. Our licensed operators deliver precision engineering works, including bulk excavation, professional site grading, complete site development, and thorough land clearing across Chennai to ensure a perfectly prepared canvas for structural concrete foundations."
  }
];

export const constructionPackages: ConstructionPackage[] = [
  {
    name: "Basic Plan",
    price: "₹1,800",
    description: "Essential robust construction with highly reliable standard branded materials and standard layouts.",
    color: "gray",
    specifications: [
      "Steel: ISI Branded Fe 500/550 TMT Bars",
      "Cement: OPC/PPC of ACC, Ultratech, or Ramco",
      "Bricks: Standard Quality Red Clay Bricks (9 inches outer, 4.5 inches inner)",
      "Flooring: Premium Vitrified Tiles (Up to ₹50/Sq.ft)",
      "Kitchen: Black Granite Countertop (₹100/Sq.ft) with Stainless Steel Sink",
      "Bathrooms: Hindware/Parryware sanitaryware & basic CP fittings",
      "Main Door: Solid Padauk wood frame with engineered flush door",
      "Windows: Powder-coated Aluminium windows with safety MS grill",
      "Wiring: Finolex or Kundan fire-resistant wires",
      "Warranty: 1 Year Maintenance & 10 Years Structural Warranty"
    ]
  },
  {
    name: "Premium Plan",
    price: "₹2,200",
    description: "Our highly recommended package featuring teakwood, modular kitchen woodwork, and high-end bathroom fittings.",
    color: "orange",
    specifications: [
      "Steel: Vizag, JSW, or Tata Tiscon TMT Steel",
      "Cement: Top grade Ultratech, Ramco, or Birla Super",
      "Bricks: Premium Red Bricks or High-Strength Solid AAC Blocks",
      "Flooring: Double-charged premium Vitrified Tiles (Up to ₹80/Sq.ft) or Granite for staircase",
      "Kitchen: Modular Kitchen Woodwork + Black Galaxy Granite with hob and chimney provision",
      "Bathrooms: Jaguar or Cera CP Fittings & Wall-hung premium closets",
      "Main Door: Fully-customized Solid Teak Wood Door & Frame with brass locks",
      "Windows: Premium UPVC Windows with bug mesh and safety grills",
      "Wiring: Havells or Anchor wires with modular switches (Legrand/Havells)",
      "Painting: Asian Paints Apex Ultima for exteriors, Royal Silk for interiors",
      "Warranty: 2 Years Maintenance & 20 Years Structural Warranty"
    ]
  },
  {
    name: "Luxury Plan",
    price: "₹2,600",
    description: "Ultra-luxury living featuring Italian marble, home automation, acoustic UPVC, and custom interior design.",
    color: "charcoal",
    specifications: [
      "Steel: Tata Tiscon or JSW Neo Fe 550D TMT Bars",
      "Cement: Premium Ultratech Super or Ambuja Kawach (waterproof)",
      "Bricks: Premium quality solid cement blocks or machine-molded clay bricks",
      "Flooring: Exquisite Italian Marble or Engineered Wooden Floors in master bedroom",
      "Kitchen: Elite fully equipped Acrylic Modular Kitchen with soft-close Blum runners",
      "Bathrooms: Kohler, Jaguar Artize, or Grohe wall-hung sanitary and concealed diverters",
      "Main Door: Ultra-premium carving Teakwood main door with biometric digital lock",
      "Automation: Touch switches, Alexa control for main lights, AC, and geysers",
      "Windows: Soundproof heavy-gauge UPVC double-glazed windows",
      "Elevator: Smart vertical lift provision (collapsible/glass capsule)",
      "Warranty: 3 Years Maintenance & 30 Years Structural Warranty"
    ]
  }
];

export const blogs: Blog[] = [
  {
    id: "blog-1",
    title: "Understanding CMDA vs DTCP Approvals in Chennai",
    category: "Government Approval Guide",
    excerpt: "Before buying land or starting your home construction in Chennai, it's vital to know whether you need CMDA or DTCP approval. Here's a complete guide.",
    content: "When developing property in Tamil Nadu, securing government approvals is the most critical hurdle. Chennai and its surrounding areas are governed by two major planning authorities: CMDA (Chennai Metropolitan Development Authority) and DTCP (Directorate of Town and Country Planning). \n\nCMDA covers the Chennai Metropolitan Area which spans Chennai district, parts of Thiruvallur, and Kancheepuram districts. On the other hand, DTCP covers the rest of Tamil Nadu outside of the Chennai Metropolitan limits.\n\nBuilding without these approvals is extremely risky: banks will strictly refuse to issue home loans, government bodies can issue demolition notices, and you cannot secure electricity, water, or sewerage connections. A clean approval ensures that your property adheres to local FSI (Floor Space Index) and OSR (Open Space Reservation) regulations, safeguarding your investment for life.",
    date: "July 12, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "blog-2",
    title: "Why Joint Venture is a Win-Win for Land Owners",
    category: "Property Investment",
    excerpt: "Partnering with a trusted builder via Joint Venture allows you to build multi-million rupee apartments on your land with zero capital outlay.",
    content: "Many families in Chennai own old independent houses or vacant plots in prime locations, but lack the capital (usually ₹2 Crores to ₹10 Crores), technical engineering team, and legal experience required to build modern apartment complexes.\n\nThis is where a Joint Venture (JV) becomes incredibly profitable. By partnering with NH Homes, you provide the land, and we bear 100% of the cost for clearing old structures, drawing modern architectural blueprints, getting government approvals, executing top-tier RCC construction, and marketing the building. \n\nAt the end of the project, the developed apartments are shared on a percentage basis (e.g., 60% to the landowner and 40% to the builder). You can choose to live in one apartment, rent out the rest for steady monthly cash flows, or sell them for high lumpsum capital gains. It unlocks maximum wealth from your land with absolutely zero financial risk.",
    date: "June 28, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "blog-3",
    title: "10 Essential Steps to Follow Before Constructing Your Home",
    category: "Construction Tips",
    excerpt: "From soil testing to selecting the right grade of cement and steel, make sure you check these 10 points for a rock-solid foundation.",
    content: "Constructing your dream home is a lifetime achievement, but a lack of structural oversight can lead to damp walls, structural cracks, and legal disputes. Here are the top elements you must ensure before starting:\n\n1. Soil Testing: Determines the bearing capacity of your soil and the type of foundation (isolated, raft, or pile footing) needed.\n2. Legal Documentation: Verify clear titles, secure Patta, and check encumbrance certificate (EC) for the last 30 years.\n3. Government Permission: Obtain planning permission from the local body to avoid demolition hazards.\n4. Quality of Water: Construction water must be tested; high salinity can rust reinforcing steel inside columns.\n5. Steel Selection: Always use certified Fe 550D TMT steel which offers superior ductility against seismic forces.\n6. Cement Grades: Use OPC 53 Grade for structural items like columns and slabs, and PPC for plastering.\n\nWorking with an experienced home promoter like NH Homes ensures that each of these engineering checks is thoroughly carried out by certified structural consultants.",
    date: "May 15, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: "Er. Nehemiah Nesanathan",
    role: "Founder & Chairman",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    bio: "Over 15 years of civil engineering and property development expertise in Chennai. He established NH Homes with the vision of providing absolute transparent pricing and top-tier construction quality to every family."
  },
  {
    name: "H Charles Immanuvel",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    bio: "Co-directs strategic growth, corporate governance, and joint venture promotions at NH Homes. His focus on strict legal clearances and robust builder agreements ensures safety for land owners. Contact: +91 95512 34597."
  },
  {
    name: "S Prasanna",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    bio: "Directs operations, technical engineering standards, and developer logistics at NH Homes. Ensures compliance with premium construction plans and on-time structural deliveries across Chennai. Contact: +91 98847 70108."
  },
  {
    name: "Ar. Sneha Nair",
    role: "Chief Architect",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    bio: "A graduate of School of Architecture & Planning, Anna University, specializing in minimalist luxury layouts, eco-friendly ventilation structures, and high-end modern residential elevations."
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Anandakrishnan G.",
    role: "Software Architect, CTS",
    quote: "NH Homes has completely changed my perception of builders. Their pricing was 100% transparent with no hidden charges. They sent weekly WhatsApp photos of our slab concreting, brickwork, and modular wood fittings. Outstanding delivery on-time!",
    project: "NH Grandeur (OMR)",
    rating: 5
  },
  {
    name: "Dr. Meera Vasudevan",
    role: "Retd. Professor, Madras Medical College",
    quote: "We partnered with NH Homes for a Joint Venture on our old ancestral property in Adyar. From legal documentation to vacating our house, they assisted us with high sensitivity. We received beautiful luxury apartments and high cash advance. Strongly recommend their JV model.",
    project: "NH Orange County (Adyar)",
    rating: 5
  },
  {
    name: "Karthik Raja",
    role: "Business Owner",
    quote: "They constructed our 4 BHK custom beachside villa in Injambakkam. The structural strength, customized electrical points, and Italian marble flooring they did were absolutely top-notch. Er. Nehemiah's engineering team is highly professional and responsive.",
    project: "NH Elite Villas (ECR)",
    rating: 5
  }
];

export const faqs: FAQItem[] = [
  {
    category: "Construction",
    question: "What is a turn-key house construction project?",
    answer: "A turn-key project means NH Homes handles everything from the architectural blueprints, soil testing, government planning approvals, raw materials procurement, RCC structural building, plastering, plumbing, wiring, interior woodwork, to final hand-key delivery. You just provide the land, and we build your home ready for moving in."
  },
  {
    category: "Payment",
    question: "What is your payment schedule during home construction?",
    answer: "Our payments are strictly milestone-based. We do not demand massive upfront amounts. The standard schedule is: 10% on Agreement/Soil Test, 15% on Foundation/Plinth level, 15% on Ground Floor Slab, 15% on First Floor Slab, 15% on Brickwork, 15% on Plastering & Tiles, 10% on Wiring & Plumbing, and the final 5% upon key handover."
  },
  {
    category: "Home Loans",
    question: "Do you have tie-ups with banks for home loans?",
    answer: "Yes! NH Homes is an approved promoter partner with leading public and private banks including SBI (State Bank of India), HDFC Bank, LIC Housing Finance, Axis Bank, and ICICI Bank. Our projects are pre-cleared, meaning your home loan can be approved in as fast as 7 working days with minimal documents."
  },
  {
    category: "Joint Venture",
    question: "What is the minimum land size required for a Joint Venture (JV)?",
    answer: "For a Joint Venture apartment promotion, the minimum land size we recommend is 1.5 Grounds (3,600 Sq.ft) with at least a 30-feet wide road. For larger commercial promotions, we look for properties on main commercial roads. This ensures viableCMDA/DTCP approvals for FSI."
  },
  {
    category: "Approvals",
    question: "Who will apply and pay for the government planning approvals?",
    answer: "For both our own residential apartment sales and custom turn-key construction clients, our in-house liaison department takes care of 100% of the paper submission, liaisoning with corporation/DTCP/CMDA engineers, and secures the planning permit. For turn-key clients, government license fees are transparently billed as per official receipts."
  }
];
