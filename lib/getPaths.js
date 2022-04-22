import fs from 'fs';
import path from 'path';

export default async function getPaths(documentsPath) {
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
