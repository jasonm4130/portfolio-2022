import Link from 'next/link';
import React from 'react';
import styles from './project-card.module.scss';
import ArrowRight from '../../public/arrow-right.svg';
import { MarkdownFileContent } from '../../lib/interfaces';

export default function ProjectCard({
  project,
}: {
  project: MarkdownFileContent;
}) {
  const { link, title, technologies, exerpt } = project;
  return (
    <Link href={link}>
      <a className={styles.link}>
        <article className={styles.card}>
          <div className={styles.title}>{title}</div>
          <ul className={styles.technologies}>
            {technologies.map((technology) => (
              <li key={technology} className={styles.technology}>
                {technology}
              </li>
            ))}
          </ul>
          <p className={styles.exerpt}>{exerpt}</p>
          <div className={styles.arrowWrapper}>
            <ArrowRight className={styles.arrow} />
          </div>
        </article>
      </a>
    </Link>
  );
}
