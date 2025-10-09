import ExploreProjects from '@/components/sections/explore-projects';
import MarketsExplorer from '@/components/sections/markets-explorer';
import { Projects } from '@/components/sections/projects';
import ProjectsHeader from '@/components/sections/projects-header';
import ProjectsSearchBar from '@/components/sections/projects-search-bar';
import { WhereWeWork } from '@/components/sections/weherewework';

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHeader />
      <ProjectsSearchBar />
      <ExploreProjects />
      <MarketsExplorer />
      <WhereWeWork />
    </>
  );
}
