import getAllMarkdownSorted from './getAllMarkdownSorted';
import { ARTICLES_PER_PAGE } from './consts';

export default async function getArticlePageProps({
  ARTICLES_PATH,
  pageNumber = 1,
}: {
  ARTICLES_PATH: string;
  pageNumber: number;
}) {
  // Get the articles for the current page
  const articles = await getAllMarkdownSorted(ARTICLES_PATH);

  // Get only the articles for the current page
  const returnedArticles = articles.slice(
    (pageNumber - 1) * ARTICLES_PER_PAGE,
    pageNumber * ARTICLES_PER_PAGE,
  );

  // Get the number of pages
  const numberOfPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);

  return {
    props: {
      articles: returnedArticles,
      pageNumber,
      numberOfPages,
    },
  };
}
