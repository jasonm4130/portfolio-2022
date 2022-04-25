import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkPrism from 'remark-prism';
import matter from 'gray-matter';

export async function getAllMarkdown(documentsPath) {
  // Get all the documents we want
  const files = fs.readdirSync(path.join(documentsPath));

  // Get the markdown and front matter for the documents
  const documents = files.map(async (file) => {
    // Get the slug
    const [slug] = file.split('.');

    // Read the front matter and markdown from the file
    const { content: markdown, data: frontmatter } = matter.read(
      path.join(documentsPath, file)
    );

    // Get the file link
    const link = `/${documentsPath}/${slug}`;

    // Get the markdown as HTML
    const html = await remark()
      .use(remarkHtml, { sanitize: false })
      .use(remarkPrism)
      .process(markdown);

    // Convert the HTML to a string that we can pass as the content
    const content = html.toString();

    return {
      content,
      ...frontmatter,
      link,
    };
  });

  return Promise.all(documents);
}
