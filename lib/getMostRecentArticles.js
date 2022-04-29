import { ARTICLES_PATH } from './consts';
import getAllFrontmatter from './getAllFrontmatter';
import sortByDate from './sortByDate';

/**
 * Function that gets the n number of most recent articles (if not all articles have dates it simply returns the articles in the inital load order)
 * @param {number} numberOfArticlesToGet - The number of recent articles to get
 * @returns {object[]} - An array of article objects frontmatter
 */
export default async function getMostRecentArticles(numberOfArticlesToGet) {
  const articlesData = await getAllFrontmatter(ARTICLES_PATH);

  let articlesArray = articlesData;

  // Order the articles by date
  articlesArray = sortByDate(articlesArray);

  // Return an array with the most recent x number of articles
  return articlesArray.slice(0, numberOfArticlesToGet);
}
