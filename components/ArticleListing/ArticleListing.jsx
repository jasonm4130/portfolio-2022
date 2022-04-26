import React from 'react';
import PropTypes from 'prop-types';
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

ArticleListing.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      exerpt: PropTypes.string,
      link: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};
