import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import heroimg from "../app/assets/hero.png"
import gujrat from "../app/assets/Gujarat_Img_1[1].png"
import rajashthan from "../app/assets/rajasthan_Img_1[1].png"
import jammu from "../app/assets/jammu_Img_1[1].png"
import Ladakh from "../app/assets/ladakh_Img_1[1].png"
import Sikkim from "../app/assets/sikkim_Img_1[1].png"
import { Bolt, Leaf, Factory, Pickaxe, Shield, Atom } from "lucide-react";
const getImage = (id: string): ImagePlaceholder => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    // Fallback or error
    return {
      id: 'fallback',
      description: 'Fallback image',
      imageUrl: heroimg.src,
      imageHint: 'placeholder',
    };
  }
  return image;
};
// lib/demoData.ts

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
      "A&T is delivering the diverse infrastructure, sustainable technologies, and fuels needed to meet the world’s rising energy demand in the coming decades.",
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
      "Expanding renewable energy — solar, wind, and hydro — for a cleaner, sustainable future.",
    hero: {
      imageUrl:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop",
      alt: "Renewable power facilities",
    },
    icon: Atom,
  },
];

// ✳️ Demo projects separated from real `projects` in data.ts
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
        "https://www.bechtel.com/wp-content/uploads/2024/11/2_Overview-rendering-of-RGLNG.png",
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
export const projects = [
  {
    id: 1,
    title: 'Gujarat',
    description: 'Our journey in Gujarat began with critical infrastructure works that strengthened both border security and industrial growth. From the Indo-Pak Border fencing and embankment projects to major renewable energy installations for Suzlon, Zamil Industrial, and Gujarat Fluorochemicals, A&T has played a central role in shaping the state\'s defense and energy landscape.',
    image: {
      imageUrl: gujrat,
      description: 'Gujarat Infrastructure Projects'
    },
    location: 'Gujarat',
  },
  {
    id: 2,
    title: 'Rajasthan',
    description: 'In Rajasthan, our work stretches across the deserts and borders that define India\'s western frontier. A&T has executed key BSF and CPWD projects—including fencing, embankments, and BOP infrastructure—that enhance national security along the Indo-Pak boundary. We\'ve also contributed to wind power foundations, solar energy parks, and infrastructure for industrial zones.',
    image: {
      imageUrl: rajashthan,
      description: 'Rajasthan Infrastructure Projects'
    },
    location: 'Rajasthan',
  },
  {
    id: 3,
    title: 'Jammu & Kashmir',
    description: 'In Jammu & Kashmir, A&T has been trusted with some of the region\'s most challenging terrain projects. We have constructed administrative blocks, border roads, and earthen bunds under CPWD and NBCC, supporting both defense logistics and local connectivity. Our focus here has been on durable infrastructure that withstands extreme weather.',
    image: {
      imageUrl: jammu,
      description: 'Jammu & Kashmir Infrastructure Projects'
    },
    location: 'Jammu & Kashmir',
  },
  {
    id: 4,
    title: 'Ladakh',
    description: 'Working at altitudes where few can, A&T has built strategic road infrastructure for ITBP and CPWD—linking remote posts and vital border regions near the Indo-China frontier. Our projects include office complexes, access roads, and maintenance works in areas like Kargil, helping strengthen India\'s high-altitude defense readiness.',
    image: {
      imageUrl: Ladakh,
      description: 'Ladakh High Altitude Infrastructure'
    },
    location: 'Ladakh (Union Territory)',
  },
  {
    id: 5,
    title: 'Sikkim',
    description: 'In Sikkim, A&T has undertaken high-elevation infrastructure projects under CPWD, including the construction of mountain roads to Indo-China border points. These works have enhanced defense mobility and regional connectivity while reflecting our ability to deliver quality engineering in environmentally sensitive, logistically complex zones.',
    image: {
      imageUrl: Sikkim,
      description: 'Sikkim Mountain Infrastructure'
    },
    location: 'Sikkim',
  },
];

export const services = [
  {
    id: 1,
    slug: 'commissioning-startup', // ADD THIS
    title: 'Commissioning and Startup',
    description:
      'Our experts are skilled in systems engineering, process controls and instrumentation, high-voltage electrical generation and transmission, water chemistry and wastewater treatment process operations, and systems integration. We perform plant operability reviews, test-program development, facility startup and commissioning, procedure development, operations and maintenance training, turnkey commissioning, facility operations, facility outage support, facility inspections, and process safety management.',
    image: 'https://www.bechtel.com/wp-content/uploads/2024/12/153825.webp',
  },
  {
    id: 2,
    slug: 'site-operations', // ADD THIS
    title: 'Site Operations',
    description:
      'The keys to our successful site operations and management approach are partnership, integration, and communication. Successful partnering ensures all parties understand each other\'s interests, objectives, and expectations. We incorporate the interests of all stakeholders to deliver work efficiently and cost-effectively while maintaining clear communication and alignment across teams.',
    image: 'https://www.bechtel.com/wp-content/uploads/2025/01/site-operations.webp',
  },
  {
    id: 3,
    slug: 'water-services', // ADD THIS
    title: 'Water Services',
    description:
      "Our teams manage the complexities and interface risks in large desalination projects and related infrastructure. We evaluate all available technologies, considering impact on operations, energy use, uptime, maintenance, and replacement cycles to deliver cost-efficient, reliable solutions tailored to the owner's needs.",
    image: 'https://www.bechtel.com/wp-content/uploads/2025/01/water-services.webp'
  },
  {
    id: 4,
    slug: 'civil-site-works', // ADD THIS
    title: 'Civil Site Works',
    description:
      "Our teams bring extensive experience executing site works on the world's largest and most complex public infrastructure and industrial projects. This includes clearing, surveying, soil testing, piling, excavation, grading, drainage, concrete works, roadway design and construction, and underground utilities. We integrate site works and construction seamlessly to optimize cost and schedule.",
    image: 'https://www.bechtel.com/wp-content/uploads/2025/01/civil-site-works.webp',
  },
  {
    id: 5,
    slug: 'energy-transition', // ADD THIS
    title: 'Energy Transition',
    description:
      'The energy transition is one of the most significant global shifts in modern history. We collaborate with customers worldwide to develop and deploy resources, fuels, technologies, and infrastructure enabling a cleaner, less carbon-intensive energy future.',
    image: 'https://www.bechtel.com/wp-content/uploads/2025/01/energy-transition.webp',
  },
  {
    id: 6,
    slug: 'digital-tools', // ADD THIS
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
    title: 'A&TAwarded National Safety Award',
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
