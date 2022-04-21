import React from 'react';
import ProjectCard from './ProjectCard';
import { section, title, grid, intro } from './projects.module.scss';

export default function Projects() {
  const projects = [
    {
      title:
        'Consequat nulla officia fugiat culpa irure nisi nostrud pariatur laboris.',
      exerpt:
        'Fugiat sit mollit minim magna non non commodo pariatur elit nisi duis. Do pariatur ad mollit esse Lorem adipisicing Lorem pariatur commodo Lorem sint fugiat consectetur. Tempor ea do sit enim do. Ea nulla ex et culpa laboris id eu quis sit ullamco ut duis.',
    },
    {
      title:
        'Nisi ad excepteur ut qui reprehenderit labore officia ullamco nulla aliquip sit nisi.',
      exerpt:
        'Proident ipsum ea irure sint veniam consequat dolore pariatur. Irure dolore sint nisi adipisicing cillum. Ullamco elit incididunt cillum et culpa est labore sunt eiusmod est consequat nisi aliquip veniam.',
    },
    {
      title: 'Irure sint do ullamco ex labore veniam.',
      exerpt:
        'Commodo et elit fugiat laboris adipisicing aute laborum. Sint labore eiusmod nostrud occaecat aliqua nostrud eu. Magna culpa officia deserunt labore commodo ipsum eiusmod velit aute commodo minim. Est aliqua irure qui non adipisicing pariatur do eu quis velit velit et.',
    },
    {
      title:
        'Proident id voluptate in exercitation ullamco mollit consectetur cillum labore eiusmod labore aliquip cupidatat.',
      exerpt:
        'Excepteur nulla aliquip incididunt veniam eiusmod consectetur adipisicing culpa commodo non Lorem culpa commodo esse. Commodo dolore Lorem ea officia culpa aliquip minim occaecat quis adipisicing. Incididunt laborum consectetur et ut ex ipsum deserunt proident esse. Consectetur do esse sit veniam ea adipisicing nulla ex. Nulla tempor sunt sit nisi excepteur magna esse Lorem sunt ea in aliqua.',
    },
    {
      title: 'Quis do Lorem nostrud cupidatat mollit magna amet culpa ut qui.',
      exerpt:
        'Id cupidatat adipisicing ipsum sunt aute quis ullamco est anim exercitation reprehenderit officia excepteur. Aute anim eu incididunt laboris quis. Qui aliqua ad do est consequat sit.',
    },
  ];

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
