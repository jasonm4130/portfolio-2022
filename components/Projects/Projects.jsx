import React from 'react';
import { section, title, grid } from './projects.module.scss';

export default function Projects() {
  return (
    <section className={section}>
      <h2 className={title}>Projects</h2>
      <div className={grid} />
    </section>
  );
}
