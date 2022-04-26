import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

/**
 * Function that gets the front matter from all MDX files within a directory
 * @param {string} documentsPath - The path to get all the documents from
 * @returns {Object[]} - Returns an array of objects with the frontmatter and links
 */
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
