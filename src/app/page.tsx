import { About } from '@/components/sections/about';
import { BuildingTomorrow } from '@/components/sections/building-tomorrow';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { Hero } from '@/components/sections/hero';
import { InspiringProjects } from '@/components/sections/inspiring-projects';
import { Legacy } from '@/components/sections/legacy';
import { QualityPeople } from '@/components/sections/quality-people';
import { WeBuildHistory } from '@/components/sections/we-build-history';

export default function Home() {
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
    </>
  );
}
