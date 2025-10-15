import ExploreProjects from '@/components/sections/explore-projects';
import MarketsExplorer from '@/components/sections/markets-explorer';
import ProjectsHeader from '@/components/sections/projects-header';
import ProjectsSearchBar from '@/components/sections/projects-search-bar';
import { WhereWeWork } from '@/components/sections/weherewework';
import { getCategories } from '@/lib/api/categories';
import { getProjectsWithCategory } from '@/lib/api/projects';

export default async function ProjectsPage() {
  // Database se data fetch karo
  const categories = await getCategories();
  const projects = await getProjectsWithCategory();

  return (
    <>
      <div className='bg-white'>
        <ProjectsHeader />
        <ProjectsSearchBar />
        <ExploreProjects />
        <MarketsExplorer
          categories={categories}
          projects={projects}
        />
        <WhereWeWork />
      </div>
    </>
  );
}