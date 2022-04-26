import { ARTICLES_PATH } from './consts';
import { getAllFrontmatter } from './getAllFrontmatter';

/**
 * Function that gets the n number of most recent articles (if not all articles have dates it simply returns the articles in the inital load order)
 * @param {number} numberOfArticlesToGet - The number of recent articles to get
 * @returns {object[]} - An array of article objects frontmatter
 */
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
