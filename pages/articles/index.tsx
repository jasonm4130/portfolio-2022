import React, { useState, useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './articles.module.scss';
import getAllMarkdown from '../../lib/getAllMarkdown';
import {
  ARTICLES_PATH,
  DESKTOP_BREAKPOINT,
  TABLET_BREAKPOINT,
} from '../../lib/consts';
import Pagination from '../../components/Pagination';
import ArticleCard from '../../components/ArticleCard';
import sortByDate from '../../lib/sortByDate';
import { MarkdownFileContent } from '../../lib/interfaces';

export default function ArticlesPage({
  articles,
}: {
  articles: MarkdownFileContent[];
}) {
  // Default number of articles to display per page on mobile
  let ARTICLES_PER_PAGE = 6;

  if (useMediaQuery({ query: TABLET_BREAKPOINT })) {
    ARTICLES_PER_PAGE = 8;
  }

  if (useMediaQuery({ query: DESKTOP_BREAKPOINT })) {
    ARTICLES_PER_PAGE = 12;
  }

  const [currentPage, setCurrentPage] = useState(1);

  const currentArticles = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
    const lastPageIndex = firstPageIndex + ARTICLES_PER_PAGE;
    return articles.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, articles, ARTICLES_PER_PAGE]);

  return (
    <main>
      <h1 className={styles.title}>Articles</h1>
      <p className={styles.intro}>
        Check out my recent articles. I mostly use this as a place to share
        things that I have found useful or to write down my own thoughts on
        particular topics. I like so many others continue to learn and as such
        these items only really represent my viewpoint at a particular point in
        time.
      </p>
      <div className={styles.grid}>
        {currentArticles.map((article) => (
          <ArticleCard key={article.title} article={article} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalCount={articles.length}
        pageSize={ARTICLES_PER_PAGE}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
    </main>
  );
}

export async function getStaticProps() {
  // Get the files that we want to display
  let articles = await getAllMarkdown(ARTICLES_PATH);

  // Sort the articles by date
  const sortedArticles = sortByDate(articles);

  // Remove the content from the filesToDisplay array
  articles = sortedArticles.map((article) => ({
    ...article,
    content: null,
  }));

  return {
    props: {
      articles,
    },
  };
}
