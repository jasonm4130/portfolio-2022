import fs from 'fs';
import path from 'path';
import getFileMarkdown from './getFileMarkdown';

/**
 * Function that gets the frontmatter and the content of all MDX files in a dir
 * @param {string} documentsPath - The path to read all the markdown from
 * @returns {object[]} - Returns an array of the document objects (content, frontmatter, and link)
 */
export async function getAllMarkdown(documentsPath) {
  // Get all the documents we want
  const files = fs.readdirSync(documentsPath);

  // Get the markdown and front matter for the documents
  const documents = files.map((file) =>
    getFileMarkdown(path.join(documentsPath, file))
  );

  return Promise.all(documents);
}
