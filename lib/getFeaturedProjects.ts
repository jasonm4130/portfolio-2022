import { PROJECTS_PATH } from './consts';
import getAllFrontmatter from './getAllFrontmatter';

/**
 * Function that gets all projects from the projects path and returns all projects with the frontmatter featured === true
 * @returns {object[]} - Returns an array of projects
 */
export default function getFeaturedProjects() {
  // Get all of the projects
  const projectData = getAllFrontmatter(PROJECTS_PATH);

  // Filter the projects so only the ones with feature = true are in the array
  const featuredProjects = projectData.filter(
    (project) => project.featured === true,
  );

  return featuredProjects;
}
