import { PROJECTS_PATH } from './consts';
import { getAllFrontmatter } from './getAllFrontmatter';

export default async function getFeaturedProjects() {
  // Get all of the projects
  const projectData = await getAllFrontmatter(PROJECTS_PATH);

  // Filter the projects so only the ones with feature = true are in the array
  const featuredProjects = projectData.filter(
    (project) => project.featured === true
  );

  return featuredProjects;
}
