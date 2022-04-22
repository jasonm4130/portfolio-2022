import Link from 'next/link';
import React from 'react';
import ArrowIcon from '../../public/arrow-right.svg';
import {
  container,
  title,
  exerpt,
  date,
  icon,
  link,
} from './article-card.module.scss';

export default function ArticleCard({ article }) {
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const dateFormatted = new Date(Date.parse(article.date)).toLocaleString(
    'en-GB',
    dateOptions
  );

  return (
    <Link href={article.link}>
      <a className={link}>
        <article className={container}>
          <div className={title}>{article.title}</div>
          <div className={date}>{dateFormatted}</div>
          <p className={exerpt}>{article.exerpt}</p>
          <ArrowIcon className={icon} />
        </article>
      </a>
    </Link>
  );
}