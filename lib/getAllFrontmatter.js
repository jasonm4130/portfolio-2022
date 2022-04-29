import fs from 'fs';
import path from 'path';
import getFileFrontmatter from './getFileFrontMatter';

/**
 * Function that gets the front matter from all MDX files within a directory
 * @param {string} documentsPath - The path to get all the documents from
 * @returns {Object[]} - Returns an array of objects with the frontmatter and links
 */
export default async function getAllFrontmatter(documentsPath) {
  // Get all the documents we want
  const files = fs.readdirSync(documentsPath);

  // Get the markdown and front matter for the documents
  const documents = files.map((file) =>
    getFileFrontmatter(path.join(documentsPath, file))
  );

  return Promise.all(documents);
}
