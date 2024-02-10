import fs from 'fs';
import path from 'path';
import getAllMarkdown from './getAllMarkdown';
import sortByDate from './sortByDate';
import { MarkdownFileContent } from './interfaces';

export default async function getAllMarkdownSorted(documentsPath: string) {
  // Get the files from the documents path
  const markdownFiles = await getAllMarkdown(documentsPath);

  // Sort the files by date
  const sortedFiles = sortByDate(markdownFiles);

  // Return the sorted files
  return sortedFiles;
}
