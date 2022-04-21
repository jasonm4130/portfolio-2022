import Link from 'next/link';
import React from 'react';
import {
  card,
  title,
  exerpt,
  link,
  arrow,
  arrowWrapper,
} from './project-card.module.scss';
import ArrowRight from '../../public/arrow-right.svg';

export default function ProjectCard({ project }) {
  return (
    <Link href="/">
      <a className={link}>
        <article className={card}>
          <div className={title}>{project.title}</div>
          <p className={exerpt}>{project.exerpt}</p>
          <div className={arrowWrapper}>
            <ArrowRight className={arrow} />
          </div>
        </article>
      </a>
    </Link>
  );
}
