import React from 'react';
import { PROJECTS_PATH } from '../../lib/consts';
import getAllFrontmatter from '../../lib/getAllFrontmatter';
import ProjectCard from '../../components/ProjectCard';
import styles from './projects.module.scss';
import { MarkdownFileContent } from '../../lib/interfaces';

export default function ProjectsPage({
  projects,
}: {
  projects: MarkdownFileContent[];
}) {
  return (
    <main>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.intro}>
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
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </main>
  );
}

export function getStaticProps() {
  const projects = getAllFrontmatter(PROJECTS_PATH);

  return {
    props: {
      projects,
    },
  };
}
