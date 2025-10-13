import { About } from '@/components/sections/about';
import { BuildingTomorrow } from '@/components/sections/building-tomorrow';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { Hero } from '@/components/sections/hero';
import { getFeaturedClients } from '@/lib/api/clients';
import { InspiringProjects } from '@/components/sections/inspiring-projects';
import { Legacy } from '@/components/sections/legacy';
import MajorClients from '@/components/sections/majorClients';
import { QualityPeople } from '@/components/sections/quality-people';
import { WeBuildHistory } from '@/components/sections/we-build-history';

export default async function Home() {
  const clients = await getFeaturedClients();

  return (
    <>
      <Hero />
      <InspiringProjects />
      <QualityPeople />
      <BuildingTomorrow />
      <About />
      <WeBuildHistory />
      <FeaturedProjects />
      <Legacy />
      <MajorClients clients={clients} />
    </>
  );
}
