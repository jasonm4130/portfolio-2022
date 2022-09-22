import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MarkdownFileContent } from '../../lib/interfaces';
import styles from './article-card.module.scss';

export default function ArticleCard({
  article,
  className,
}: {
  article: MarkdownFileContent;
  className?: string;
}) {
  const { date, link, title, exerpt, image } = article;
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
    <Link href={link}>
      <a className={`${styles.link} ${className}`}>
        <article className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              layout="responsive"
              width="100%"
              height="100%"
              src={image}
              objectFit="cover"
            />
          </div>
          <div className={styles.cardContent}>
            <div className={styles.title}>{title}</div>
            <div className={styles.date}>{dateFormatted}</div>
            <p className={styles.exerpt}>{exerpt}</p>
          </div>
        </article>
      </a>
    </Link>
  );
}
