import React from 'react';
import ProjectCard from '../ProjectCard';
import styles from './projects.module.scss';
import { MarkdownFileContent } from '../../lib/interfaces';
import PrimaryCtaButton from '../PrimaryCtaButton';

export default function Projects({
  projects,
}: {
  projects: MarkdownFileContent[];
}) {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div>
          <h2 className={styles.title}>Projects</h2>
          <p className={styles.intro}>
            Like so many engineers, a lot of my work is hidden behind portal
            logins or is just not able to be shown to the public due to various
            contractual arangements. What you will find here are some of the
            recent projects I have been working on in my spare time. These range
            from tools that help me in my daily life (fuel notifications when
            it's the optimal time to fill up) to coding challenges like Advent
            of Code.
          </p>
          <PrimaryCtaButton
            href="/projects"
            customClasses={{
              primaryCta: styles.primaryCta,
            }}
          >
            View more
          </PrimaryCtaButton>
        </div>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
