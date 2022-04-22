import React from 'react';
import ArticleCard from './ArticleCard';
import { section, title, intro, content, grid } from './articles.module.scss';

export default function Articles({ articles }) {
  return (
    <section className={section}>
      <div className={content}>
        <h2 className={title}>Articles</h2>
        <p className={intro}>
          Some recent ramblings on software engineering, general development,
          business, leadership, and the industry space in general.
        </p>
      </div>
      <div className={grid}>
        {articles.map((article) => (
          <ArticleCard key={article.title} article={article} />
        ))}
      </div>
    </section>
  );
}
