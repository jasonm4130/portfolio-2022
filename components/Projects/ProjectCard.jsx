import Link from 'next/link';
import React from 'react';
import { card, title, exerpt, link } from './project-card.module.scss';

export default function ProjectCard({ project }) {
  return (
    <article className={card}>
      <div className={title}>{project.title}</div>
      <div className={exerpt}>{project.exerpt}</div>
      <Link href="/">
        <a className={link}>Link</a>
      </Link>
    </article>
  );
}
