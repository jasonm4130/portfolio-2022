import Link from 'next/link';
import React from 'react';
import { MarkdownFileContent } from '../../lib/interfaces';
import ArrowIcon from '../../public/arrow-right.svg';
import styles from './article-card.module.scss';

export default function ArticleCard({
  article,
  className,
}: {
  article: MarkdownFileContent;
  className?: string;
}) {
  const { date, link, title, exerpt } = article;
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
      <a className={`${link} ${className}`}>
        <article className={styles.container}>
          <div className={styles.title}>{title}</div>
          <div className={styles.date}>{dateFormatted}</div>
          <p className={styles.exerpt}>{exerpt}</p>
          <ArrowIcon className={styles.icon} />
        </article>
      </a>
    </Link>
  );
}
