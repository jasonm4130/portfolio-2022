import React from 'react';
import ProjectCard from './ProjectCard';
import { section, title, grid, intro } from './projects.module.scss';

export default function Projects({ projects }) {
  return (
    <section className={section}>
      <div className={grid}>
        <div>
          <h2 className={title}>Projects</h2>
          <p className={intro}>
            Like so many engineers, a lot of my work is hidden behind portal
            logins or is just not able to be shown to the public due to various
            contractual arangements. What you will find here are some of the
            recent projects I have been working on in my spare time. These range
            from tools that help me in my daily life (fuel notifications when
            it's the optimal time to fill up) to coding challenges like Advent
            of Code.
          </p>
        </div>
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </section>
  );
}
