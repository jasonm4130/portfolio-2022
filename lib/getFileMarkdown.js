import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkPrism from 'remark-prism';

export default async function getFileMarkdown(filePath) {
  const { content: markdown, data: frontmatter } = matter.read(filePath);

  // Get the link
  const link = `/${filePath.split('.')[0]}`;

  // Process the html
  const html = await remark()
    .use(remarkHtml, { sanitize: false })
    .use(remarkPrism)
    .process(markdown);

  // Define the content
  const content = html.toString();

  return {
    props: {
      content,
      ...frontmatter,
      link,
    },
  };
}
