import React from 'react';
import path from 'path';
import getArticlePageProps from 'lib/getArticlesPageProps';
import getPaths from '../../lib/getPaths';
import getFileMarkdown from '../../lib/getFileMarkdown';
import { ARTICLES_PATH, ARTICLES_PER_PAGE } from '../../lib/consts';
import { MarkdownFileContent } from '../../lib/interfaces';
import Article from '../../components/Article';
import ArticlesPage from '.';

export default function ArticlePage({
  title,
  content,
  articles,
  numberOfPages,
  pageNumber,
}: {
  title?: string;
  content?: string;
  articles?: MarkdownFileContent[];
  numberOfPages?: number;
  pageNumber?: number;
}) {
  // If we have a page number, then this is a pagination page
  if (pageNumber) {
    return (
      <ArticlesPage
        articles={articles}
        pageNumber={pageNumber}
        numberOfPages={numberOfPages}
      />
    );
  }

  // Otherwise, this is an article page
  return <Article title={title} content={content} />;
}

export function getStaticPaths() {
  // Get the articles paths from the file name
  const paths = getPaths(ARTICLES_PATH);

  // Also get the paths for the articles pagination pages (if any)
  const numberOfPages = Math.ceil(paths.length / ARTICLES_PER_PAGE);
  const paginationPaths = Array.from({ length: numberOfPages }, (_, i) => ({
    params: { slug: `page-${i + 1}`.toString() },
  }));

  // Return the paths
  return {
    paths: [...paths, ...paginationPaths],
    fallback: false,
  };
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  // Determine if this is a pagination page or an article page
  if (slug.startsWith('page-')) {
    // Get the page number from the slug
    const pageNumber = parseInt(slug.replace('page-', ''), 10);

    // Get the articles for the current page and the other props
    return getArticlePageProps({
      ARTICLES_PATH,
      pageNumber,
    });
  }

  // Otherwise, get the article content
  const filePath = path.join(ARTICLES_PATH, `${slug}.mdx`);

  // return the article content
  return { props: await getFileMarkdown(filePath) };
}
