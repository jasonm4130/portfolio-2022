import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';
import getLink from './getLink';

/**
 * Function that gets the data for a specific MDX file
 * @param {string} filePath
 * @returns {object} - Returns the content, frontmatter, and link of the file
 */
export default async function getFileMarkdown(filePath) {
  const { content: markdown, data: frontmatter } = matter.read(filePath);

  // Get the link
  const link = getLink(filePath);

  // Process the html
  const content = await await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(markdown);

  // Convet the output to a string
  const contentString = String(content);

  return {
    content: contentString,
    ...frontmatter,
    link,
  };
}
