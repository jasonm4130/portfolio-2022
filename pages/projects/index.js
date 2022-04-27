import React from 'react';
import PropTypes from 'prop-types';
import { PROJECTS_PATH } from '../../lib/consts';
import { getAllFrontmatter } from '../../lib/getAllFrontmatter';
import ProjectCard from '../../components/Projects/ProjectCard';
import { title, intro, grid } from './projects.module.scss';

export default function ProjectsPage({ projects }) {
  return (
    <main>
      <h1 className={title}>Projects</h1>
      <div className={intro}>
        <p>
          These are a list of some of my recent side projects. Feel free to have
          a look around, the majority of them I will have done some kind of
          write up of what the aim of the project was along with the things that
          I learnt while doing it.
        </p>
        <p>
          The vast majority of these projects as simply things that I have
          thought would be useful in my own life, or things that have been
          chosen as part of the self learning that I have undertaken. I find I
          learn best by doing and so I try and choose appropriate projects that
          I believe would be well suited to a specific technology. Worst case
          scenario I learn some limitations of the technology and understand why
          it wasn't well suited. I think we can learn as much and sometimes even
          more from what goes wrong, or what doesn't work well.
        </p>
      </div>
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
