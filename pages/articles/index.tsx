import React from 'react';
import ArticlesWrapper from '../../components/ArticlesWrapper';
import styles from './articles.module.scss';
import { ARTICLES_PATH } from '../../lib/consts';
import Pagination from '../../components/Pagination';
import ArticleCard from '../../components/ArticleCard';
import { MarkdownFileContent } from '../../lib/interfaces';
import getArticlesPageProps from '../../lib/getArticlesPageProps';

export default function ArticlesPage({
  articles,
  pageNumber,
  numberOfPages,
}: {
  articles: MarkdownFileContent[];
  pageNumber: number;
  numberOfPages: number;
}) {
  return (
    <ArticlesWrapper>
      <div className={styles.grid}>
        {articles.map((article) => (
          <ArticleCard key={article.title} article={article} />
        ))}
      </div>
      <Pagination
        pageRoute="/articles/page-"
        currentPage={pageNumber}
        totalPages={numberOfPages}
      />
    </ArticlesWrapper>
  );
}

export async function getStaticProps() {
  return getArticlesPageProps({
    ARTICLES_PATH,
    pageNumber: 1,
  });
}
