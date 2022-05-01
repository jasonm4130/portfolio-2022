import matter from 'gray-matter';
import getLink from './getLink';
import { MarkdownFileContent } from './interfaces';

/**
 * Function that gets the front matter and the link of a specific file
 * @param {string} filePath - The file to get the frontmatter from
 * @returns {object} - The frontmatter and the link
 */
export default function getFileFrontmatter(filePath: string) {
  // Read the front matter and markdown from the file
  const { data: frontmatter } = matter.read(filePath);

  // Get the link
  const link = getLink(filePath);

  return {
    ...frontmatter,
    link,
  } as MarkdownFileContent;
}
