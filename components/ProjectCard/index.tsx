import Link from 'next/link';
import { MarkdownFileContent } from '../../lib/interfaces';
import ArrowRight from '../../public/arrow-right.svg';
import Watermark from '../../public/watermark.svg';
import styles from './project-card.module.scss';

export default function ProjectCard({
  project,
}: {
  project: MarkdownFileContent;
}) {
  const { link, title, technologies, excerpt } = project;
  return (
    <Link href={link} className={styles.link}>
      <article className={styles.card}>
        <Watermark className={styles.watermark} />
        <div className={styles.title}>{title}</div>
        <ul className={styles.technologies}>
          {technologies.map((technology) => (
            <li key={technology} className={styles.technology}>
              {technology}
            </li>
          ))}
        </ul>
        <p className={styles.excerpt}>{excerpt}</p>
        <div className={styles.arrowWrapper}>
          <ArrowRight className={styles.arrow} />
        </div>
      </article>
    </Link>
  );
}
