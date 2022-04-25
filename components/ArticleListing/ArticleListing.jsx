import React from 'react';
import { grid } from './article-listing.module.scss';
import ArticleCard from '../Articles/ArticleCard';

export default function ArticleListing({ articles }) {
  return (
    <div className={grid}>
      {articles.map((articleData) => (
        <ArticleCard key={articleData.title} article={articleData} />
      ))}
    </div>
  );
}
