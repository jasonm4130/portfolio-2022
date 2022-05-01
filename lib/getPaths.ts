import fs from 'fs';
import path from 'path';

/**
 * Gets all the paths for statically generating pages from a given path
 * @param {string} documentsPath - The path to get all the paths from
 * @returns {object[]} - Returns an array of nextjs path params
 */
export default function getPaths(documentsPath: string) {
  // Get all of the documents
  const files = fs.readdirSync(path.join(documentsPath));

  // Get the slug from the path
  const paths = files.map((fileName) => {
    // Get the slug from the file namne
    const [slug] = fileName.split('.');

    // Return the slug
    return {
      params: {
        slug,
      },
    };
  });

  // Return the array of paths
  return paths;
}
