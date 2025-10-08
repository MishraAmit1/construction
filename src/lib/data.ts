import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import heroimg from "../app/public/hero.png"
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
