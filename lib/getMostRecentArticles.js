import { ARTICLES_PATH } from './consts';
import { getAllFrontmatter } from './getAllFrontmatter';

export default async function getMostRecentArticles(numberOfArticlesToGet) {
  const articlesData = await getAllFrontmatter(ARTICLES_PATH);

  let articlesArray = articlesData;

  // Check that every article has a date
  if (articlesData.every((article) => !!article.date)) {
    // Order the articles by date
    articlesArray = articlesArray.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  }

  // Return an array with the most recent x number of articles
  return articlesArray.slice(0, numberOfArticlesToGet);
}
