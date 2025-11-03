export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

import { Metadata } from 'next';
import Script from 'next/script';
import ExploreProjects from '@/components/sections/explore-projects';
import MarketsExplorer from '@/components/sections/markets-explorer';
import ProjectsHeader from '@/components/sections/projects-header';
import { WhereWeWork } from '@/components/sections/weherewework';
import { getCategories } from '@/lib/api/categories';
import { getProjectsWithCategory } from '@/lib/api/projects';

export const metadata: Metadata = {
  title: 'Our Projects - Road Construction & Infrastructure Portfolio | A&T Infracon',
  description: 'Explore A&T Infracon\'s completed infrastructure projects worth ₹500+ Crores. Road construction, border infrastructure, buildings, and bridges across Gujarat, Rajasthan, J&K & Ladakh.',
  keywords: 'infrastructure projects portfolio, road construction projects, border infrastructure projects, CPWD projects, NBCC projects, completed construction projects, government infrastructure projects',
  openGraph: {
    title: 'Infrastructure Projects Portfolio - A&T Infracon',
    description: '100+ completed projects across challenging terrains',
    url: 'https://atinfracon.com/projects',
    images: [{ url: '/images/construction1.webp', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://atinfracon.com/projects' },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function ProjectsPage() {
  const categories = await getCategories();
  const projects = await getProjectsWithCategory();

  // Schema 1: CollectionPage
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Our Projects",
    "description": "Portfolio of infrastructure projects completed by A&T Infracon",
    "url": "https://atinfracon.com/projects",
    "publisher": {
      "@type": "Organization",
      "name": "A&T Infracon Pvt. Ltd.",
      "logo": "https://atinfracon.com/images/logo.png"
    }
  };

  // Schema 2: ItemList of Projects (first 10)
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Infrastructure Projects",
    "itemListElement": projects.slice(0, 10).map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Project",
        "name": project.project_name,
        "url": `https://atinfracon.com/projects/${project.project_slug}`,
        "description": project.tagline || project.project_name,
        "image": project.thumbnail_image,
        "location": {
          "@type": "Place",
          "name": project.location || "India"
        }
      }
    }))
  };

  // Schema 3: Breadcrumb
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://atinfracon.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://atinfracon.com/projects"
      }
    ]
  };

  return (
    <>
      <Script
        id="collection-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <Script
        id="itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className='bg-white'>
        <ProjectsHeader />
        <ExploreProjects />
        <div id="markets-section">
          <MarketsExplorer
            categories={categories}
            projects={projects}
          />
        </div>
        <div id="regions-section">
          <WhereWeWork />
        </div>
      </div>
    </>
  );
}