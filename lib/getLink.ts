/**
 * Gets the link for a file in the data folder
 * @param {string} filePath - The file path (For a data folder file)
 * @returns {string} - The files link in the site
 */
export default function getLink(filePath: string) {
  return `/${filePath.replace('data/', '').split('.')[0]}`;
}
