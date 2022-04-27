import React from 'react';
import PropTypes from 'prop-types';
import { PROJECTS_PATH } from '../../lib/consts';
import { getAllFrontmatter } from '../../lib/getAllFrontmatter';
import ProjectCard from '../../components/Projects/ProjectCard';
import { title, grid } from './projects.module.scss';

export default function ProjectsPage({ projects }) {
  return (
    <main>
      <h1 className={title}>Projects</h1>
      <div className={grid}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </main>
  );
}

ProjectsPage.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      exerpt: PropTypes.string,
      technologies: PropTypes.arrayOf(PropTypes.string),
      featured: PropTypes.bool,
    })
  ),
};

export async function getStaticProps() {
  const projects = await getAllFrontmatter(PROJECTS_PATH);

  return {
    props: {
      projects,
    },
  };
}
