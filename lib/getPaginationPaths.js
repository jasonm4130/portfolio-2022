import fs from 'fs';
import path from 'path';

export default async function getPaginationPaths(
  documentsPath,
  numberOfItemsToShow = 10
) {
  // Get all of the documents
  const files = fs.readdirSync(path.join(documentsPath));

  // Get the number pagination paths we will need
  const numberOfPages = Math.ceil(files.length / numberOfItemsToShow);

  // Create our array of params
  return Array.from({ length: numberOfPages }, (v, i) => ({
    params: {
      index: (i + 1).toString(),
    },
  }));
}
