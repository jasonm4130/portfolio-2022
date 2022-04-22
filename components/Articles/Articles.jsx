import React from 'react';
import Link from 'next/link';
import ArticleCard from './ArticleCard';
import { section, title, intro, content, grid } from './articles.module.scss';
import ArrowIcon from '../../public/arrow-right.svg';

export default function Articles({ articles }) {
  return (
    <section className={section}>
      <div className={content}>
        <h2 className={title}>Articles</h2>
        <p className={intro}>
          Some recent ramblings on software engineering, general development,
          business, leadership, and the industry space in general.
        </p>
        <Link href="/articles">
          <a className="primary-cta">
            View more <ArrowIcon className="primary-cta__icon" />
          </a>
        </Link>
      </div>
      <div className={grid}>
        {articles.map((article) => (
          <ArticleCard key={article.title} article={article} />
        ))}
      </div>
    </section>
  );
}
