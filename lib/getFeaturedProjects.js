import { PROJECTS_PATH } from './consts';
import { getAllMarkdown } from './getAllMarkdown';

export default async function getFeaturedProjects() {
  // Get all of the projects
  const projectData = await getAllMarkdown(PROJECTS_PATH);

  // Filter the projects so only the ones with feature = true are in the array
  const featuredProjects = projectData.filter(
    (project) => project.featured === true
  );

  return featuredProjects;
}
