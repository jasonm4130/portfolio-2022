import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { title, grid } from './articles.module.scss';
import { getAllMarkdown } from '../../lib/getAllMarkdown';
import { ARTICLES_PATH } from '../../lib/consts';
import Pagination from '../../components/Pagination/Pagination';
import ArticleCard from '../../components/Articles/ArticleCard';

const ARTICLES_PER_PAGE = 10;

export default function ArticlesPage({ articles }) {
  const [currentPage, setCurrentPage] = useState(1);

  const currentArticles = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
    const lastPageIndex = firstPageIndex + ARTICLES_PER_PAGE;
    return articles.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, articles]);

  return (
    <main>
      <h1 className={title}>Articles</h1>
      <div className={grid}>
        {currentArticles.map((article) => (
          <ArticleCard key={article.title} article={article} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalCount={articles.length}
        pageSize={ARTICLES_PER_PAGE}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </main>
  );
}

ArticlesPage.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      exerpt: PropTypes.string,
      link: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};

export async function getStaticProps() {
  // Get the files that we want to display
  let articles = await getAllMarkdown(ARTICLES_PATH);

  // Remove the content from the filesToDisplay array
  articles = articles.map((article) => ({
    ...article,
    content: null,
  }));

  return {
    props: {
      articles,
    },
  };
}
