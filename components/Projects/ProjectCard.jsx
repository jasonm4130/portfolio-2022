import Link from 'next/link';
import React from 'react';
import {
  card,
  title,
  technologies,
  technology,
  exerpt,
  link,
  arrow,
  arrowWrapper,
} from './project-card.module.scss';
import ArrowRight from '../../public/arrow-right.svg';

export default function ProjectCard({ project }) {
  return (
    <Link href={project.link}>
      <a className={link}>
        <article className={card}>
          <div className={title}>{project.title}</div>
          <ul className={technologies}>
            {project.technologies.map((technologyString) => (
              <li key={technologyString} className={technology}>
                {technologyString}
              </li>
            ))}
          </ul>
          <p className={exerpt}>{project.exerpt}</p>
          <div className={arrowWrapper}>
            <ArrowRight className={arrow} />
          </div>
        </article>
      </a>
    </Link>
  );
}
