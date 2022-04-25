import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function getAllFrontmatter(documentsPath) {
  // Get all the documents we want
  const files = fs.readdirSync(path.join(documentsPath));

  // Get the markdown and front matter for the documents
  const documents = files.map(async (file) => {
    // Get the slug
    const [slug] = file.split('.');

    // Read the front matter and markdown from the file
    const { data: frontmatter } = matter.read(path.join(documentsPath, file));

    // Get the file link
    const link = `/${documentsPath}/${slug}`;

    return {
      ...frontmatter,
      link,
    };
  });

  return Promise.all(documents);
}
