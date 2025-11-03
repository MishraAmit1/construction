// src/lib/data.ts
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Bolt, Leaf, Factory, Pickaxe, Shield, Atom } from "lucide-react";

// ✅ String paths for local images (move to public/images/)
const localImages = {
  hero: "/images/hero.webp",
  states: {
    gujarat: "/images/gujarat-img.webp",        // renamed from Gujarat_Img_1[1].webp
    rajasthan: "/images/rajasthan-img.webp",    // renamed from rajasthan_Img_1[1].webp
    jammu: "/images/jammu-img.webp",            // renamed from jammu_Img_1[1].webp
    ladakh: "/images/ladakh-img.webp",          // renamed from ladakh_Img_1[1].webp
    sikkim: "/images/sikkim-img.webp"           // renamed from sikkim_Img_1[1].webp
  }
};

const getImage = (id: string): ImagePlaceholder => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    return {
      id: 'fallback',
      description: 'Fallback image',
      imageUrl: localImages.hero,
      imageHint: 'placeholder',
    };
  }
  return image;
};

export type MarketKey =
  | "Energy"
  | "Environmental Cleanup"
  | "Manufacturing & Technology"
  | "Mining & Critical Minerals"
  | "National Defense & Security"
  | "Nuclear"
  | "Infrastructure"
  | "Renewables";
export const marketsData = [
  {
    key: "Energy" as MarketKey,
    title: "Energy",
    description:
      "A&T is delivering the diverse infrastructure, sustainable technologies, and fuels needed to meet the world's rising energy demand in the coming decades.",
    hero: {
      imageUrl:
        "https://www.bechtel.com/wp-content/uploads/2024/10/energy-market.webp",
      alt: "Energy infrastructure",
    },
    icon: Bolt,
  },
  {
    key: "Environmental Cleanup" as MarketKey,
    title: "Environmental Cleanup",
    description:
      "Protecting people and the environment by cleaning up legacy sites and remediating complex environmental challenges.",
    hero: {
      imageUrl:
        "https://images.unsplash.com/photo-1503516459261-40c66117780d?q=80&w=1600&auto=format&fit=crop",
      alt: "Environmental cleanup",
    },
    icon: Leaf,
  },
  {
    key: "Manufacturing & Technology" as MarketKey,
    title: "Manufacturing & Technology",
    description:
      "Accelerating advanced manufacturing and technology facilities, from semiconductors to next‑gen industrial systems.",
    hero: {
      imageUrl:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
      alt: "Manufacturing & Technology",
    },
    icon: Factory,
  },
  {
    key: "Mining & Critical Minerals" as MarketKey,
    title: "Mining & Critical Minerals",
    description:
      "Developing critical mineral supply chains and modern mining projects for a resilient future.",
    hero: {
      imageUrl:
        "https://images.unsplash.com/photo-1616406432329-c9a5f2fbf434?q=80&w=1600&auto=format&fit=crop",
      alt: "Mining & Critical Minerals",
    },
    icon: Pickaxe,
  },
  {
    key: "National Defense & Security" as MarketKey,
    title: "National Defense & Security",
    description:
      "Delivering secure, mission‑critical facilities and infrastructure for national security.",
    hero: {
      imageUrl:
        "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=1600&auto=format&fit=crop",
      alt: "National Defense & Security",
    },
    icon: Shield,
  },
  {
    key: "Nuclear" as MarketKey,
    title: "Nuclear",
    description:
      "Advancing clean, reliable nuclear power and lifecycle solutions to support net‑zero goals.",
    hero: {
      imageUrl:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1600&auto=format&fit=crop",
      alt: "Nuclear facilities",
    },
    icon: Atom,
  },
  {
    key: "Infrastructure" as MarketKey,
    title: "Infrastructure",
    description:
      "Connecting communities and economies with transformative infrastructure initiatives worldwide.",
    hero: {
      imageUrl:
        "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1600&auto=format&fit=crop",
      alt: "Infrastructure projects",
    },
    icon: Atom,
  },
  {
    key: "Renewables" as MarketKey,
    title: "Renewables",
    description:
      "Expanding renewable energy — solar, wind, and hydro — for a cleaner, sustainable future.",
    hero: {
      imageUrl:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop",
      alt: "Renewable power facilities",
    },
    icon: Atom,
  },
];

export const demoProjects = [
  {
    id: "p1",
    title: "Rio Grande LNG",
    location: "Texas, U.S.",
    market: "Energy" as MarketKey,
    description:
      "A large‑scale LNG export facility delivering energy to global markets.",
    image: {
      imageUrl:
        "https://www.bechtel.com/wp-content/uploads/2024/11/2_Overview-rendering-of-RGLNG.webp",
      description: "Rio Grande LNG terminal",
    },
  },
  {
    id: "p2",
    title: "Port Arthur LNG",
    location: "Texas, U.S.",
    market: "Energy" as MarketKey,
    description:
      "Major LNG export project on the U.S. Gulf Coast driving sustainable growth.",
    image: {
      imageUrl:
        "https://www.bechtel.com/wp-content/uploads/2024/11/Corpus_Christi_LNG-84532624-1.jpg",
      description: "Port Arthur LNG",
    },
  },
  {
    id: "p3",
    title: "Semiconductor Plant Facility",
    location: "Arizona, U.S.",
    market: "Manufacturing & Technology" as MarketKey,
    description:
      "Advanced semiconductor fab supporting next‑generation chipmaking and industrial innovation.",
    image: {
      imageUrl:
        "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
      description: "Semiconductor manufacturing facility",
    },
  },
];

export const atServices = [
  {
    id: 1,
    title: 'Road Construction',
    description: 'Specialist in constructing challenging roads across diverse terrains - from high-altitude hill roads at 15,000+ feet to PMGSY rural connectivity projects. Our expertise includes CRF highways, link roads, and strategic border roads executed in extreme weather conditions from the deserts of Rajasthan to the mountains of Ladakh.',
    image: {
      imageUrl: "/images/services1.webp",
      description: 'Road Construction Services - Hill Roads, CRF, PMGSY, Link Roads'
    },
    category: 'Infrastructure',
  },
  {
    id: 2,
    title: 'Border Security Infrastructure',
    description: 'Trusted by BSF, ITBP, and CPWD for critical border security infrastructure along Indo-Pak and Indo-China borders. We construct fencing systems, bunkers, Border Out Posts (BOPs), earthen embankments, and strategic access roads in sensitive and challenging border areas across Gujarat, Rajasthan, Jammu & Kashmir, and Ladakh.',
    image: {
      imageUrl: "/images/services2.webp",
      description: 'Border Security Infrastructure - Fencing, Bunkers, BOPs'
    },
    category: 'Security',
  },
  {
    id: 3,
    title: 'Building & Institutional Structures',
    description: 'Construction of administrative buildings, institutional complexes, platoon-level BOPs, and office structures for government departments and PSUs. Our building works portfolio includes projects for CPWD, NBCC, and various government organizations, executed with precision in remote and challenging locations.',
    image: {
      imageUrl: "/images/services3.webp",
      description: 'Building & Institutional Structures'
    },
    category: 'Construction',
  },
  {
    id: 4,
    title: 'Bridges & Culverts',
    description: 'Expert construction of bridges, causeways, and cross-drainage structures across rivers and nallahs. Our bridge works include major crossings over Tarna River, Khari River, Devak Nallah, and Phag Nallah, along with specialized high-level vented causeways and culvert systems designed for flood-prone areas.',
    image: {
      imageUrl: "https://i.pinimg.com/736x/f4/38/24/f43824816b9bc690382f2055c69f67d4.jpg",
      description: 'Bridges & Culverts Construction'
    },
    category: 'Infrastructure',
  },
  {
    id: 5,
    title: 'Wind & Solar Power Infrastructure',
    description: 'Developing renewable energy infrastructure including Wind Turbine Generator (WTG) foundations and solar power installations. We\'ve executed projects for leading companies like Suzlon, Gujarat Fluorochemicals, and Kintech Synergy, contributing to India\'s clean energy transition with specialized civil and foundation works.',
    image: {
      imageUrl: "/images/services5.webp",

      description: 'Wind & Solar Power Infrastructure'
    },
    category: 'Energy',
  },
  {
    id: 6,
    title: 'Civil Projects for PSUs & Private Sector',
    description: 'Comprehensive civil engineering solutions for Public Sector Undertakings and private enterprises. Our clientele includes IOCL, ONGC, GAIL, Cairn Energy, and industrial companies requiring robust infrastructure in challenging locations. From industrial estates to specialized facilities, we deliver excellence.',
    image: {
      imageUrl: "/images/services6.webp",

      description: 'Civil Projects for PSUs and Private Sector'
    },
    category: 'Industrial',
  },
];
// lib/data.ts mein add karo

export const serviceDetailsData: Record<string, any> = {
  "road-construction": {
    id: "road-construction",
    title: "Road Construction",
    tagline: "Building Connections Across Challenging Terrains",
    heroImage: "/images/services1.webp",
    description: "Specialist in constructing challenging roads across diverse terrains - from high-altitude hill roads at 15,000+ feet to PMGSY rural connectivity projects.",
    longDescription: "A&T Infracon's road construction expertise spans 35+ years of building critical infrastructure across India's most challenging environments. From the deserts of Rajasthan to the high-altitude regions of Ladakh, we've successfully completed highway projects, border roads, rural connectivity initiatives, and strategic access roads that connect remote communities and secure national borders.",

    keyFeatures: [
      {
        icon: "Mountain",
        title: "High-Altitude Expertise",
        description: "Construction at 15,000+ feet in extreme weather conditions"
      },
      {
        icon: "Route",
        title: "CRF & Highway Projects",
        description: "Major road widening and strengthening projects across Gujarat"
      },
      {
        icon: "Network",
        title: "PMGSY Rural Roads",
        description: "Connecting remote villages with all-weather road access"
      },
      {
        icon: "Shield",
        title: "Border Access Roads",
        description: "Strategic roads for defense forces along Indo-Pak and Indo-China borders"
      }
    ],

    capabilities: [
      "High-Altitude Hill Road Construction",
      "CRF Highway Development",
      "PMGSY Rural Connectivity",
      "Border Road Construction",
      "Road Widening & Strengthening",
      "Bituminous Pavement Works",
      "WMM & Granular Sub-Base",
      "Cross Drainage Structures",
      "Road Maintenance & Repairs"
    ],

    statistics: [
      { value: "₹112.37 Cr", label: "Largest Project", description: "Ladakh Hill Road to Indo-China Border" },
      { value: "200+ Km", label: "Roads Built", description: "Across challenging terrains" },
      { value: "15,000 ft", label: "Altitude", description: "Highest construction elevation" },
      { value: "35+ Years", label: "Experience", description: "In road construction" }
    ],

    majorProjects: [
      {
        title: "High Altitude Hill Road to Indo-China Border",
        location: "Ladakh, UT",
        value: "₹112.37 Crore",
        description: "Construction of strategic hill road from Silungla Base to ITBP Post at extreme altitude",
        image: "/images/sr1.webp",
        highlights: [
          "12.42 km at 14,832 to 15,331 feet altitude",
          "Extreme weather construction (-40°C)",
          "Strategic defense infrastructure",
          "EPC Mode-III execution"
        ],
        link: "/projects"
      },
      {
        title: "Dehgam Bayad Road Widening",
        location: "Gujarat",
        value: "₹28.33 Crore",
        description: "Widening from 6.10m to 10.0m for 43.8 km stretch under CRF 2017-18",
        image: "/images/sr2.webp",
        highlights: [
          "43.8 km road widening",
          "Major bridge construction",
          "CRF specifications",
          "Heavy traffic corridor"
        ],
        link: "/projects"
      },
      {
        title: "Border Roads Gujarat Sector",
        location: "Rann of Kutch, Gujarat",
        value: "₹58.93 Crore (Ongoing)",
        description: "Link road construction with slope protection and culvert works",
        image: "/images/sr3.webp",
        highlights: [
          "25 km border access road",
          "Slope protection works",
          "Multiple culverts",
          "Marshy terrain construction"
        ],
        link: "/projects"
      }
    ],

    equipment: [
      "Hot Mix Plants (Batch & Drum Type)",
      "WMM Plants",
      "Bituminous Pavers",
      "Soil Compactors & Rollers",
      "Motor Graders",
      "Excavators & Loaders"
    ],

    relatedServices: ["border-security-infrastructure", "bridges-culverts"],

    testimonial: {
      quote: "A&T Infracon's expertise in high-altitude road construction has been instrumental in providing all-weather connectivity to our forward posts in Ladakh.",
      author: "ITBP Project Director",
      company: "Indo-Tibetan Border Police"
    }
  },

  "border-security-infrastructure": {
    id: "border-security-infrastructure",
    title: "Border Security Infrastructure",
    tagline: "Securing India's Frontiers",
    heroImage: "/images/services2.webp",
    description: "Trusted by BSF, ITBP, and CPWD for critical border security infrastructure along Indo-Pak and Indo-China borders.",
    longDescription: "For over three decades, A&T Infracon has been the trusted partner for India's border security forces in constructing critical infrastructure along sensitive international borders. Our specialized expertise in building fencing systems, bunkers, Border Out Posts (BOPs), earthen embankments, and strategic access roads has secured thousands of kilometers of India's frontiers across Gujarat, Rajasthan, Jammu & Kashmir, and Ladakh.",

    keyFeatures: [
      {
        icon: "Shield",
        title: "BSF & ITBP Projects",
        description: "Trusted contractor for border security forces"
      },
      {
        icon: "Building2",
        title: "Border Out Posts",
        description: "Complete BOP complexes with modern facilities"
      },
      {
        icon: "Lock",
        title: "Fencing Systems",
        description: "Multi-row fencing with advanced detection systems"
      },
      {
        icon: "Mountain",
        title: "Extreme Conditions",
        description: "Desert heat to Himalayan cold construction"
      }
    ],

    capabilities: [
      "Border Fencing (Multi-row Systems)",
      "Border Out Posts (BOPs) - Platoon Level",
      "Fighting Bunkers & Machans",
      "Earthen Embankments & Ditches",
      "Border Access Roads",
      "RCC Nakas (G+1 Structures)",
      "Watchtowers & Observation Posts",
      "Perimeter Security Systems",
      "Camp & Accommodation Facilities"
    ],

    statistics: [
      { value: "₹101.78 Cr", label: "Major Project", description: "26.76 km Earthen Bundh Jammu Sector" },
      { value: "100+ Km", label: "Fencing", description: "Along Indo-Pak border" },
      { value: "50+ BOPs", label: "Constructed", description: "For BSF & ITBP" },
      { value: "4 States", label: "Coverage", description: "Gujarat, Rajasthan, J&K, Ladakh" }
    ],

    majorProjects: [
      {
        title: "Composite Earthen Bundh - Jammu Sector",
        location: "Jammu & Kashmir",
        value: "₹101.78 Crore",
        description: "26.762 km earthen bundh with ditch, bituminous road and RCC Nakas along Indo-Pak border",
        image: "/images/sb1.webp",
        highlights: [
          "26.76 km composite structure",
          "135 feet width land strip",
          "Bituminous road construction",
          "RCC Naka (G+1) structures",
          "BP 113 to BP 51 coverage"
        ],
        link: "/projects"
      },
      {
        title: "Border Out Posts - Gujarat Sector",
        location: "Kutch, Gujarat",
        value: "₹22.72 Crore",
        description: "Construction of 21 Border Out Posts for BSF along Indo-Pak border",
        image: "/images/sb2.webp",
        highlights: [
          "21 platoon-level BOPs",
          "Modern amenities & facilities",
          "Coastal & desert terrain",
          "Strategic locations",
          "BSF specifications"
        ],
        link: "/projects"
      },
      {
        title: "Border Fencing - Gujarat Sector",
        location: "Rann of Kutch, Gujarat",
        value: "₹12.50 Crore",
        description: "Multi-row fencing with embankment from BP 976 to BP 1012",
        image: "/images/sb3.webp",
        highlights: [
          "Two-row fencing system",
          "29 km coverage",
          "Marshy terrain execution",
          "Flood-resistant design",
          "Round-the-year construction"
        ],
        link: "/projects"
      }
    ],

    equipment: [
      "Excavators for Bundh Work",
      "Soil Compactors",
      "Concrete Batching Plants",
      "Transit Mixers",
      "Specialized Border Fencing Equipment"
    ],

    relatedServices: ["road-construction", "building-institutional-structures"],

    testimonial: {
      quote: "A&T Infracon has consistently delivered high-quality border infrastructure in the most challenging conditions, ensuring our jawans have the best facilities at the frontline.",
      author: "Chief Engineer",
      company: "Border Security Force"
    }
  },

  "building-institutional-structures": {
    id: "building-institutional-structures",
    title: "Building & Institutional Structures",
    tagline: "Creating Spaces That Serve the Nation",
    heroImage: "/images/services3.webp",
    description: "Construction of administrative buildings, institutional complexes, platoon-level BOPs, and office structures for government departments and PSUs.",
    longDescription: "A&T Infracon specializes in constructing government buildings, institutional complexes, and administrative structures across challenging locations. Our portfolio includes projects for CPWD, NBCC, and various government organizations. From building Border Out Posts in remote areas to constructing modern office complexes and educational institutions, we deliver structures that combine functionality with durability, executed with precision even in the most remote and challenging locations.",

    keyFeatures: [
      {
        icon: "Building2",
        title: "Government Buildings",
        description: "Administrative complexes for PSUs and government departments"
      },
      {
        icon: "Users",
        title: "Institutional Projects",
        description: "Educational facilities, BRC centers, and KGBV buildings"
      },
      {
        icon: "Shield",
        title: "Defense Infrastructure",
        description: "BOPs, bunkers, and accommodation for security forces"
      },
      {
        icon: "Mountain",
        title: "Remote Construction",
        description: "Building in challenging terrains from deserts to high altitudes"
      }
    ],

    capabilities: [
      "Government Office Complexes",
      "Border Out Posts (BOPs)",
      "Educational Institutions",
      "Industrial Buildings",
      "Administrative Blocks",
      "Residential Complexes",
      "Community Centers",
      "Healthcare Facilities",
      "Multi-story Structures"
    ],

    statistics: [
      { value: "₹56.42 Cr", label: "Largest Project", description: "Industrial Estate Kathua" },
      { value: "50+ BOPs", label: "Built", description: "For BSF across borders" },
      { value: "100+", label: "Buildings", description: "Completed successfully" },
      { value: "35 Years", label: "Experience", description: "In building construction" }
    ],

    majorProjects: [
      {
        title: "Industrial Estate Development",
        location: "Kathua, J&K",
        value: "₹56.42 Crore",
        description: "Complete development of New Industrial Estate including admin blocks, boundary walls, CETP, and infrastructure",
        image: "/images/sbi1.webp",
        highlights: [
          "Complete industrial infrastructure",
          "Administrative blocks construction",
          "Underground tanks & CETP",
          "River bund & electrical works",
          "Modern facilities development"
        ],
        link: "/projects"
      },
      {
        title: "BSF Border Out Posts",
        location: "Kutch, Gujarat",
        value: "₹20.21 Crore",
        description: "Construction of multiple platoon-level BOPs for BSF along Indo-Pak border",
        image: "/images/sbi2.webp",
        highlights: [
          "3 Platoon Level BOPs",
          "Modern amenities",
          "Strategic locations",
          "All-weather construction",
          "Complete infrastructure"
        ],
        link: "/projects/bsf-bops-kutch"
      },
      {
        title: "Central University Gujarat",
        location: "Vadodara, Gujarat",
        value: "₹8.60 Crore",
        description: "Construction of permanent campus facilities including labs and office infrastructure",
        image: "/images/sbi3.webp",
        highlights: [
          "Laboratory facilities",
          "Office furniture works",
          "Internal electrical works",
          "Modern campus infrastructure",
          "Academic block completion"
        ],
        link: "/projects"
      }
    ],

    equipment: [
      "Concrete Batching Plants",
      "Transit Mixers",
      "Tower Cranes",
      "Bar Cutting & Bending Machines",
      "Concrete Pumps",
      "Material Hoists"
    ],

    relatedServices: ["border-security-infrastructure", "civil-projects-psus-private-sector"],

    testimonial: {
      quote: "A&T Infracon delivered our industrial estate project with exceptional quality, completing all phases on schedule despite challenging conditions.",
      author: "Project Director",
      company: "Ircon International Ltd."
    }
  },

  "bridges-culverts": {
    id: "bridges-culverts",
    title: "Bridges & Culverts",
    tagline: "Connecting Communities, Crossing Barriers",
    heroImage: "https://i.pinimg.com/736x/f4/38/24/f43824816b9bc690382f2055c69f67d4.jpg",
    description: "Expert construction of bridges, causeways, and cross-drainage structures across rivers and nallahs.",
    longDescription: "A&T Infracon brings decades of expertise in constructing bridges, causeways, and culvert systems designed to withstand extreme weather conditions and heavy traffic loads. Our bridge works include major crossings over Tarna River, Khari River, Devak Nallah, and Phag Nallah, along with specialized high-level vented causeways and culvert systems designed for flood-prone areas. We excel in building critical infrastructure that ensures year-round connectivity even in the most challenging terrains.",

    keyFeatures: [
      {
        icon: "Route",
        title: "Major River Crossings",
        description: "Bridges over Tarna, Khari, and other major rivers"
      },
      {
        icon: "Shield",
        title: "Strategic Bridges",
        description: "Border area bridges for defense connectivity"
      },
      {
        icon: "Mountain",
        title: "Causeway Systems",
        description: "High-level vented causeways for flood-prone areas"
      },
      {
        icon: "Network",
        title: "Drainage Solutions",
        description: "Complex culvert systems for water management"
      }
    ],

    capabilities: [
      "Major Bridge Construction",
      "Causeway Development",
      "Box Culverts",
      "Pipe Culverts",
      "Slab Culverts",
      "High-Level Vented Causeways",
      "River Training Works",
      "Approach Roads",
      "Foundation Works in Rivers"
    ],

    statistics: [
      { value: "₹14.30 Cr", label: "Largest Bridge", description: "Tarna River Bridge" },
      { value: "50+", label: "Structures", description: "Bridges & culverts built" },
      { value: "10+ Rivers", label: "Crossed", description: "Major river crossings" },
      { value: "500m", label: "Longest", description: "Causeway constructed" }
    ],

    majorProjects: [
      {
        title: "Bridge over Tarna River",
        location: "Jammu Sector",
        value: "₹14.30 Crore",
        description: "Major bridge construction over Tarna River near Bobiya for Indo-Pak border connectivity",
        image: "/images/sbc1.webp",
        highlights: [
          "Strategic border connectivity",
          "Complex river crossing",
          "Year-round accessibility",
          "Heavy load capacity",
          "Flood-resistant design"
        ],
        link: "/projects"
      },
      {
        title: "Major Bridge on SH-237",
        location: "Gujarat",
        value: "₹9.19 Crore",
        description: "Construction of major bridge as part of Himatnagar-Talod-Ujediya Road widening",
        image: "/images/sbc2.webp",
        highlights: [
          "Highway standard bridge",
          "CRF specifications",
          "Heavy traffic corridor",
          "Modern design standards",
          "30.8 km road section"
        ],
        link: "/projects"
      },
      {
        title: "High-Level Vented Causeway",
        location: "Gujarat Border",
        value: "₹2.39 Crore",
        description: "Redesigning 500m causeway as high-level vented causeway near BP 1107",
        image: "/images/sbc3.webp",
        highlights: [
          "500m vented causeway",
          "Flood mitigation design",
          "CRRI recommendations",
          "Border road connectivity",
          "Marshy terrain solution"
        ],
        link: "/projects"
      }
    ],

    equipment: [
      "Piling Rigs",
      "Concrete Pumps",
      "Batching Plants",
      "Heavy Cranes",
      "Launching Girders",
      "Hydraulic Jacks"
    ],

    relatedServices: ["road-construction", "border-security-infrastructure"],

    testimonial: {
      quote: "The bridge constructed by A&T Infracon has transformed connectivity in our border region, standing strong even during heavy floods.",
      author: "Executive Engineer",
      company: "CPWD Border Division"
    }
  },

  "wind-solar-power-infrastructure": {
    id: "wind-solar-power-infrastructure",
    title: "Wind & Solar Power Infrastructure",
    tagline: "Powering India's Clean Energy Future",
    heroImage: "/images/services5.webp",
    description: "Developing renewable energy infrastructure including Wind Turbine Generator foundations and solar power installations.",
    longDescription: "A&T Infracon is at the forefront of India's renewable energy transition, specializing in wind and solar power infrastructure development. We've executed critical projects for leading companies like Suzlon, Gujarat Fluorochemicals, and Kintech Synergy. Our expertise includes constructing robust WTG foundations capable of withstanding extreme weather conditions, developing solar farm infrastructure, and creating access roads to remote renewable energy sites. We contribute to India's clean energy goals through specialized civil and foundation works that ensure long-term stability and performance.",

    keyFeatures: [
      {
        icon: "Zap",
        title: "WTG Foundations",
        description: "Heavy foundations for wind turbines up to 2.1 MW capacity"
      },
      {
        icon: "Sun",
        title: "Solar Infrastructure",
        description: "Complete civil works for solar power projects"
      },
      {
        icon: "Route",
        title: "Access Roads",
        description: "39+ km roads for wind farm connectivity"
      },
      {
        icon: "Building2",
        title: "Substation Works",
        description: "Electrical substation civil infrastructure"
      }
    ],

    capabilities: [
      "Wind Turbine Foundations",
      "Solar Panel Mounting Structures",
      "Substation Civil Works",
      "Access Road Construction",
      "Cable Trenching",
      "Control Room Buildings",
      "Transformer Foundations",
      "Boundary Walls & Security",
      "Drainage Systems"
    ],

    statistics: [
      { value: "10 MW", label: "Solar Projects", description: "Total capacity installed" },
      { value: "39 Km", label: "Access Roads", description: "For wind farms" },
      { value: "50+", label: "WTG Foundations", description: "Successfully completed" },
      { value: "5 Projects", label: "Major Clients", description: "Leading energy companies" }
    ],

    majorProjects: [
      {
        title: "Wind Power Project - Gujarat Fluorochemicals",
        location: "Jaisalmer, Rajasthan",
        value: "2.1 MW Capacity",
        description: "WTG Foundation No. 19 for Gujarat Fluorochemicals wind power project",
        image: "/images/sws1.webp",
        highlights: [
          "2.1 MW turbine foundation",
          "Desert terrain execution",
          "Heavy reinforcement work",
          "Extreme weather resistance",
          "Precision foundation casting"
        ],
        link: "/projects/"
      },
      {
        title: "Solar Power Project - Zamil Industrial",
        location: "Dahisar, Gujarat",
        value: "10 MW Project",
        description: "Complete civil infrastructure for 10 MW solar power installation",
        image: "/images/sws2.webp",
        highlights: [
          "10 MW solar capacity",
          "Complete civil works",
          "Mounting structures",
          "Electrical infrastructure",
          "Drainage systems"
        ],
        link: "/projects"
      },
      {
        title: "Suzlon Wind Farm Infrastructure",
        location: "Kutch, Gujarat",
        value: "39 Km Roads + WTG",
        description: "Access roads and WTG foundation for Suzlon Infrastructure Services",
        image: "/images/sws3.webp",
        highlights: [
          "39 km access roads",
          "2.1 MW WTG foundation",
          "Complete infrastructure",
          "Substation works",
          "Heavy equipment transport roads"
        ],
        link: "/projects"
      }
    ],

    equipment: [
      "Heavy Concrete Pumps",
      "Specialized Foundation Equipment",
      "Transit Mixers",
      "Excavators",
      "Compactors",
      "Cranes for Heavy Lifting"
    ],

    relatedServices: ["civil-projects-psus-private-sector", "road-construction"],

    testimonial: {
      quote: "A&T Infracon's expertise in renewable energy infrastructure has been crucial in establishing our wind farms in challenging desert conditions.",
      author: "Project Manager",
      company: "Suzlon Infrastructure Services"
    }
  },

  "civil-projects-for-psus-private-sector": {
    id: "civil-projects-for-psus-private-sector",
    title: "Civil Projects for PSUs & Private Sector",
    tagline: "Engineering Excellence for Industry Leaders",
    heroImage: "/images/services6.webp",
    description: "Comprehensive civil engineering solutions for Public Sector Undertakings and private enterprises.",
    longDescription: "A&T Infracon is the trusted partner for India's leading PSUs and private sector companies, delivering complex civil engineering projects in challenging locations. Our prestigious clientele includes IOCL, ONGC, GAIL, Cairn Energy, and major industrial companies. From constructing infrastructure in oil fields to developing industrial estates, we provide end-to-end civil engineering solutions. Our expertise in working in remote locations, adherence to strict safety standards, and ability to meet demanding project schedules makes us the contractor of choice for critical industrial infrastructure.",

    keyFeatures: [
      {
        icon: "Building2",
        title: "Oil & Gas Infrastructure",
        description: "Projects for IOCL, ONGC, GAIL, and Cairn Energy"
      },
      {
        icon: "Shield",
        title: "Industrial Estates",
        description: "Complete industrial park development"
      },
      {
        icon: "Network",
        title: "PSU Projects",
        description: "Trusted by major public sector companies"
      },
      {
        icon: "Mountain",
        title: "Remote Locations",
        description: "Expertise in challenging industrial sites"
      }
    ],

    capabilities: [
      "Oil Field Infrastructure",
      "Industrial Building Construction",
      "Tank Farms & Storage",
      "Pipeline Support Structures",
      "Industrial Roads",
      "Boundary Walls & Security",
      "Administrative Buildings",
      "Warehouse Construction",
      "Utility Infrastructure"
    ],

    statistics: [
      { value: "₹56.42 Cr", label: "Largest Project", description: "Industrial Estate J&K" },
      { value: "10+ PSUs", label: "Clients", description: "Major PSU partnerships" },
      { value: "₹7.83 Cr", label: "OOT Vadinar", description: "Port infrastructure" },
      { value: "100+", label: "Projects", description: "Successfully completed" }
    ],

    majorProjects: [
      {
        title: "Industrial Estate Development",
        location: "Bhagthali, Kathua, J&K",
        value: "₹56.42 Crore",
        description: "Complete development of new industrial estate with all infrastructure",
        image: "/images/scpc1.webp",
        highlights: [
          "Admin blocks construction",
          "Complete infrastructure",
          "CETP facility",
          "Electrical works",
          "River bund protection"
        ],
        link: "/projects/"
      },
      {
        title: "OOT Vadinar Port Infrastructure",
        location: "Vadinar, Gujarat",
        value: "₹7.83 Crore",
        description: "Strengthening of road from colony to jetty at Deendayal Port",
        image: "/images/scpc2.webp",
        highlights: [
          "Port road strengthening",
          "Heavy vehicle corridor",
          "Special repair works",
          "Marine environment construction",
          "Critical port connectivity"
        ],
        link: "/projects"
      },
      {
        title: "Cairn Energy Civil Works",
        location: "Barmer, Rajasthan",
        value: "Multiple Projects",
        description: "Various civil works for Cairn Energy's oil field operations",
        image: "/images/scpc3.webp",
        highlights: [
          "Oil field infrastructure",
          "Desert construction",
          "Access roads",
          "Support structures",
          "Continuous operations support"
        ],
        link: "/projects/"
      }
    ],

    equipment: [
      "Heavy Earth Moving Equipment",
      "Concrete Batching Plants",
      "Material Handling Equipment",
      "Specialized Industrial Tools",
      "Safety Equipment",
      "Quality Testing Equipment"
    ],

    relatedServices: ["building-institutional-structures", "wind-solar-power-infrastructure"],

    testimonial: {
      quote: "A&T Infracon has been our reliable partner for critical infrastructure projects, consistently delivering quality work in our challenging oil field locations.",
      author: "General Manager",
      company: "Indian Oil Corporation Ltd."
    }
  }
};
export const projects = [
  {
    id: 1,
    title: 'Gujarat',
    description: 'Our journey in Gujarat began with critical infrastructure works that strengthened both border security and industrial growth. From the Indo-Pak Border fencing and embankment projects to major renewable energy installations for Suzlon, Zamil Industrial, and Gujarat Fluorochemicals, A&T has played a central role in shaping the state\'s defense and energy landscape.',
    image: {
      imageUrl: localImages.states.gujarat,
      description: 'Gujarat Infrastructure Projects'
    },
    location: 'Gujarat',
  },
  {
    id: 2,
    title: 'Rajasthan',
    description: 'In Rajasthan, our work stretches across the deserts and borders that define India\'s western frontier. A&T has executed key BSF and CPWD projects—including fencing, embankments, and BOP infrastructure—that enhance national security along the Indo-Pak boundary. We\'ve also contributed to wind power foundations, solar energy parks, and infrastructure for industrial zones.',
    image: {
      imageUrl: localImages.states.rajasthan,
      description: 'Rajasthan Infrastructure Projects'
    },
    location: 'Rajasthan',
  },
  {
    id: 3,
    title: 'Jammu & Kashmir',
    description: 'In Jammu & Kashmir, A&T has been trusted with some of the region\'s most challenging terrain projects. We have constructed administrative blocks, border roads, and earthen bunds under CPWD and NBCC, supporting both defense logistics and local connectivity. Our focus here has been on durable infrastructure that withstands extreme weather.',
    image: {
      imageUrl: localImages.states.jammu,
      description: 'Jammu & Kashmir Infrastructure Projects'
    },
    location: 'Jammu & Kashmir',
  },
  {
    id: 4,
    title: 'Ladakh',
    description: 'Working at altitudes where few can, A&T has built strategic road infrastructure for ITBP and CPWD—linking remote posts and vital border regions near the Indo-China frontier. Our projects include office complexes, access roads, and maintenance works in areas like Kargil, helping strengthen India\'s high-altitude defense readiness.',
    image: {
      imageUrl: localImages.states.ladakh,
      description: 'Ladakh High Altitude Infrastructure'
    },
    location: 'Ladakh (Union Territory)',
  },
  {
    id: 5,
    title: 'Sikkim',
    description: 'In Sikkim, A&T has undertaken high-elevation infrastructure projects under CPWD, including the construction of mountain roads to Indo-China border points. These works have enhanced defense mobility and regional connectivity while reflecting our ability to deliver quality engineering in environmentally sensitive, logistically complex zones.',
    image: {
      imageUrl: localImages.states.sikkim,
      description: 'Sikkim Mountain Infrastructure'
    },
    location: 'Sikkim',
  },
];

export const services = [
  {
    id: 1,
    slug: 'commissioning-startup',
    title: 'Commissioning and Startup',
    description:
      'Our experts are skilled in systems engineering, process controls and instrumentation, high-voltage electrical generation and transmission, water chemistry and wastewater treatment process operations, and systems integration. We perform plant operability reviews, test-program development, facility startup and commissioning, procedure development, operations and maintenance training, turnkey commissioning, facility operations, facility outage support, facility inspections, and process safety management.',
    image: 'https://www.bechtel.com/wp-content/uploads/2024/12/153825.webp',
  },
  {
    id: 2,
    slug: 'site-operations',
    title: 'Site Operations',
    description:
      'The keys to our successful site operations and management approach are partnership, integration, and communication. Successful partnering ensures all parties understand each other\'s interests, objectives, and expectations. We incorporate the interests of all stakeholders to deliver work efficiently and cost-effectively while maintaining clear communication and alignment across teams.',
    image: 'https://www.bechtel.com/wp-content/uploads/2025/01/site-operations.webp',
  },
  {
    id: 3,
    slug: 'water-services',
    title: 'Water Services',
    description:
      "Our teams manage the complexities and interface risks in large desalination projects and related infrastructure. We evaluate all available technologies, considering impact on operations, energy use, uptime, maintenance, and replacement cycles to deliver cost-efficient, reliable solutions tailored to the owner's needs.",
    image: 'https://www.bechtel.com/wp-content/uploads/2025/01/water-services.webp'
  },
  {
    id: 4,
    slug: 'civil-site-works',
    title: 'Civil Site Works',
    description:
      "Our teams bring extensive experience executing site works on the world's largest and most complex public infrastructure and industrial projects. This includes clearing, surveying, soil testing, piling, excavation, grading, drainage, concrete works, roadway design and construction, and underground utilities. We integrate site works and construction seamlessly to optimize cost and schedule.",
    image: 'https://www.bechtel.com/wp-content/uploads/2025/01/civil-site-works.webp',
  },
  {
    id: 5,
    slug: 'energy-transition',
    title: 'Energy Transition',
    description:
      'The energy transition is one of the most significant global shifts in modern history. We collaborate with customers worldwide to develop and deploy resources, fuels, technologies, and infrastructure enabling a cleaner, less carbon-intensive energy future.',
    image: 'https://www.bechtel.com/wp-content/uploads/2025/01/energy-transition.webp',
  },
  {
    id: 6,
    slug: 'digital-tools',
    title: 'Digital Tools',
    description:
      'Our teams use proprietary digital technologies — including data-driven automation, survey robots, drones, and machine-controlled equipment — to boost operational efficiency and team collaboration. Our digital execution hub enables 100% digital delivery, collecting real-time field data and transforming it into interactive, map-based visualizations.',
    image: 'https://www.bechtel.com/wp-content/uploads/2025/01/digital-tools.webp',
  },
];

export const certifications = [
  { name: 'ISO 9001:2015', description: 'Quality Management Systems' },
  { name: 'ISO 14001:2015', description: 'Environmental Management Systems' },
  { name: 'ISO 45001:2018', description: 'Occupational Health and Safety' },
  { name: 'NHAI Prequalified', description: 'National Highways Authority of India' },
  { name: 'MoRTH Certified', description: 'Ministry of Road Transport and Highways' },
  { name: 'LEED Certified Professionals', description: 'Leadership in Energy and Environmental Design' },
];

export const teamMembers = [
  {
    name: 'Rajesh Kumar',
    title: 'Chief Executive Officer',
    image: getImage('team-member-1'),
  },
  {
    name: 'Priya Sharma',
    title: 'Chief Operations Officer',
    image: getImage('team-member-2'),
  },
  {
    name: 'Anil Mehta',
    title: 'Head of Engineering',
    image: getImage('team-member-3'),
  },
];

export const featuredContent = [
  {
    id: 1,
    title: "India's Nuclear Energy Future is Now",
    image: getImage('featured-1'),
  },
  {
    id: 2,
    title: 'New Expressway to Connect North and South',
    image: getImage('project-1'),
  },
  {
    id: 3,
    title: 'A&T Awarded National Safety Award',
    image: getImage('award-image'),
  }
];

export const legacyData = [
  {
    decade: '1950s',
    projectTitle: 'Bhakra Dam',
    projectLocation: 'HIMACHAL PRADESH, INDIA',
    projectDescription: 'One of the first major river valley development projects undertaken by independent India, crucial for irrigation and power.',
    image: getImage('legacy-bhakra-dam'),
  },
  {
    decade: '1960s',
    projectTitle: 'Idukki Dam',
    projectLocation: 'KERALA, INDIA',
    projectDescription: 'An engineering marvel, this arch dam was one of the largest in Asia at the time of its construction.',
    image: getImage('legacy-idukki-dam'),
  },
  {
    decade: '1970s',
    projectTitle: 'Calcutta Metro',
    projectLocation: 'KOLKATA, INDIA',
    projectDescription: 'Pioneering underground mass transit in India, a complex project that set the stage for future metro systems.',
    image: getImage('legacy-kolkata-metro'),
  },
  {
    decade: '1980s',
    projectTitle: 'Konkan Railway',
    projectLocation: 'WESTERN COAST, INDIA',
    projectDescription: 'A monumental project connecting the western coast, carving through challenging terrain with numerous tunnels and bridges.',
    image: getImage('legacy-konkan-railway'),
  },
  {
    decade: '1990s',
    projectTitle: 'Golden Quadrilateral',
    projectLocation: 'NATIONWIDE, INDIA',
    projectDescription: 'The largest highway project in India, connecting the major metropolitan cities of Delhi, Mumbai, Chennai, and Kolkata.',
    image: getImage('legacy-golden-quad'),
  },
  {
    decade: '2000s',
    projectTitle: 'Delhi Metro',
    projectLocation: 'DELHI, INDIA',
    projectDescription: 'A world-class modern metro system that transformed public transportation in the national capital.',
    image: getImage('legacy-delhi-metro'),
  },
  {
    decade: '2010s',
    projectTitle: 'Chenab Rail Bridge',
    projectLocation: 'JAMMU & KASHMIR, INDIA',
    projectDescription: 'The world\'s highest railway bridge, a testament to modern engineering in extreme conditions.',
    image: getImage('legacy-chenab-bridge'),
  },
  {
    decade: '2020s',
    projectTitle: 'Atal Tunnel',
    projectLocation: 'HIMACHAL PRADESH, INDIA',
    projectDescription: 'The longest highway tunnel in the world above 10,000 feet, providing all-weather connectivity.',
    image: getImage('legacy-atal-tunnel'),
  },
];

export const aboutUsImage = getImage('about-us');
export const heroImage = getImage('hero-background');
export const mediaReportImage = getImage('media-report');
export const welderImage = getImage('welder-pipeline');
export const qualityPeopleImage = getImage('quality-people-bg');
export const weAreVeritasImage = getImage('we-are-veritas');
export const careersHeroImage = getImage('careers-hero');