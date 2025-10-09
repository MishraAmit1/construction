import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import heroimg from "../app/public/hero.png"
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
    title: 'Delhi-Mumbai Expressway',
    description: 'A 1,350 km long, 8-lane wide expressway connecting India\'s capital, Delhi with its financial hub, Mumbai. A landmark project for the nation.',
    image: getImage('project-1'),
    location: 'Delhi-Mumbai',
    startDate: '2019-03-08',
    endDate: '2024-12-31',
    budget: 13000000000,
    keyPersonnel: 'Nitin Gadkari (MoRTH), R. K. Pandey (NHAI)',
    lat: 22.9868,
    lng: 78.255,
  },
  {
    id: 2,
    title: 'Bangalore-Chennai Expressway',
    description: 'A 258 km, 4-lane access-controlled expressway to reduce travel time between two of South India\'s major cities.',
    image: getImage('project-2'),
    location: 'Bangalore-Chennai',
    startDate: '2021-09-01',
    endDate: '2025-03-31',
    budget: 2400000000,
    keyPersonnel: 'Anand Kumar (Project Director)',
    lat: 12.9716,
    lng: 79.9426,
  },
  {
    id: 3,
    title: 'Mumbai Trans Harbour Sea Link',
    description: 'A 21.8 km, 6-lane sea bridge connecting Mumbai with its satellite city, Navi Mumbai, significantly easing commuter traffic.',
    image: getImage('project-3'),
    location: 'Mumbai, Maharashtra',
    startDate: '2018-04-22',
    endDate: '2024-01-12',
    budget: 2200000000,
    keyPersonnel: 'S.V.R. Srinivas (MMRDA)',
    lat: 19.0760,
    lng: 72.8777,
  },
  {
    id: 4,
    title: 'Delhi-Mumbai Expressway',
    description: 'A 1,350 km long, 8-lane wide expressway connecting India\'s capital, Delhi with its financial hub, Mumbai. A landmark project for the nation.',
    image: getImage('project-1'),
    location: 'Delhi-Mumbai',
    startDate: '2019-03-08',
    endDate: '2024-12-31',
    budget: 13000000000,
    keyPersonnel: 'Nitin Gadkari (MoRTH), R. K. Pandey (NHAI)',
    lat: 22.9868,
    lng: 78.255,
  },
  {
    id: 5,
    title: 'Mumbai Trans Harbour Sea Link',
    description: 'A 21.8 km, 6-lane sea bridge connecting Mumbai with its satellite city, Navi Mumbai, significantly easing commuter traffic.',
    image: getImage('project-3'),
    location: 'Mumbai, Maharashtra',
    startDate: '2018-04-22',
    endDate: '2024-01-12',
    budget: 2200000000,
    keyPersonnel: 'S.V.R. Srinivas (MMRDA)',
    lat: 19.0760,
    lng: 72.8777,
  },
  {
    id: 6,
    title: 'Bangalore-Chennai Expressway',
    description: 'A 258 km, 4-lane access-controlled expressway to reduce travel time between two of South India\'s major cities.',
    image: getImage('project-2'),
    location: 'Bangalore-Chennai',
    startDate: '2021-09-01',
    endDate: '2025-03-31',
    budget: 2400000000,
    keyPersonnel: 'Anand Kumar (Project Director)',
    lat: 12.9716,
    lng: 79.9426,
  },
  {
    id: 7,
    title: 'Bangalore-Chennai Expressway',
    description: 'A 258 km, 4-lane access-controlled expressway to reduce travel time between two of South India\'s major cities.',
    image: getImage('project-2'),
    location: 'Bangalore-Chennai',
    startDate: '2021-09-01',
    endDate: '2025-03-31',
    budget: 2400000000,
    keyPersonnel: 'Anand Kumar (Project Director)',
    lat: 12.9716,
    lng: 79.9426,
  },
  {
    id: 8,
    title: 'Bangalore-Chennai Expressway',
    description: 'A 258 km, 4-lane access-controlled expressway to reduce travel time between two of South India\'s major cities.',
    image: getImage('project-2'),
    location: 'Bangalore-Chennai',
    startDate: '2021-09-01',
    endDate: '2025-03-31',
    budget: 2400000000,
    keyPersonnel: 'Anand Kumar (Project Director)',
    lat: 12.9716,
    lng: 79.9426,
  },
  {
    id: 9,
    title: 'Bangalore-Chennai Expressway',
    description: 'A 258 km, 4-lane access-controlled expressway to reduce travel time between two of South India\'s major cities.',
    image: getImage('project-2'),
    location: 'Bangalore-Chennai',
    startDate: '2021-09-01',
    endDate: '2025-03-31',
    budget: 2400000000,
    keyPersonnel: 'Anand Kumar (Project Director)',
    lat: 12.9716,
    lng: 79.9426,
  },
  {
    id: 10,
    title: 'Bangalore-Chennai Expressway',
    description: 'A 258 km, 4-lane access-controlled expressway to reduce travel time between two of South India\'s major cities.',
    image: getImage('project-2'),
    location: 'Bangalore-Chennai',
    startDate: '2021-09-01',
    endDate: '2025-03-31',
    budget: 2400000000,
    keyPersonnel: 'Anand Kumar (Project Director)',
    lat: 12.9716,
    lng: 79.9426,
  },
  {
    id: 11,
    title: 'Bangalore-Chennai Expressway',
    description: 'A 258 km, 4-lane access-controlled expressway to reduce travel time between two of South India\'s major cities.',
    image: getImage('project-2'),
    location: 'Bangalore-Chennai',
    startDate: '2021-09-01',
    endDate: '2025-03-31',
    budget: 2400000000,
    keyPersonnel: 'Anand Kumar (Project Director)',
    lat: 12.9716,
    lng: 79.9426,
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
