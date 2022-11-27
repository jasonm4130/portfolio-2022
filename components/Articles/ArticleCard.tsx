import Image from 'next/image';
import Link from 'next/link';
import { MarkdownFileContent } from '../../lib/interfaces';
import styles from './article-card.module.scss';

export default function ArticleCard({
  article,
  className,
}: {
  article: MarkdownFileContent;
  className?: string;
}) {
  const { date, link, title, excerpt, image, imageAlt } = article;
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const dateFormatted = new Date(Date.parse(date)).toLocaleString(
    'en-GB',
    dateOptions
  );

  return (
    <Link href={link} className={`${styles.link} ${className}`}>
      <article className={styles.container}>
        <div className={styles.imageContainer}>
          <Image fill src={image} alt={imageAlt} />
        </div>
        <div className={styles.cardContent}>
          <div className={styles.title}>{title}</div>
          <div className={styles.date}>{dateFormatted}</div>
          <p className={styles.excerpt}>{excerpt}</p>
        </div>
      </article>
    </Link>
  );
}
