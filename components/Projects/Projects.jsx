import React from 'react';
import { projects, projectsTitle, projectGrid } from './projects.module.scss';

export default function Projects() {
  return (
    <section className={projects}>
      <h2 className={projectsTitle}>Projects</h2>
      <div className={projectGrid}></div>
    </section>
  );
}
