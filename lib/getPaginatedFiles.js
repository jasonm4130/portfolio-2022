import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export default async function getPaginatedFiles(
  documentsPath,
  index,
  numberOfItemsToShow = 10
) {
  // Get all the files from the document path
  const files = fs.readdirSync(path.join(documentsPath));

  // Read the front matter from the files to check if they have a date / should be sorted in date order
  const filesData = files.map((file) => {
    const { data: frontmatter } = matter.read(path.join(documentsPath, file));

    return {
      file,
      ...frontmatter,
    };
  });

  // if every file has a date
  const filesHaveDates = filesData.every((data) => !!data.date);

  let filesArray = filesData;

  if (filesHaveDates) {
    // Sort the files by the dates (newest first)
    filesArray = filesData.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  // transform the array back to simple file names
  filesArray = filesArray.map((data) => data.file);

  // Split the files into arrays of arrays that are the length of numberOfItemsToShow
  const chunkedArray = Array.from(
    { length: Math.ceil(filesArray.length / numberOfItemsToShow) },
    (v, index) =>
      filesArray.slice(
        index * numberOfItemsToShow,
        index * numberOfItemsToShow + numberOfItemsToShow
      )
  );

  return chunkedArray[index - 1];
}
