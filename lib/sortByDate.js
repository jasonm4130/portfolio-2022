/**
 * Function that takes an array of documents and sorts them in date descending order
 * @param {object[]} itemsToSort - Array of documents with a date property
 * @returns {object[]} - Returns the items in date order (or in the origional order if not all documents have dates)
 */
export default async function sortByDate(itemsToSort) {
  // Check that each item has a date string
  if (!itemsToSort.every((item) => !!item.date)) {
    // If they don't have a date return the initial items in the same order
    return itemsToSort;
  }

  // Sort the items based on date
  const sortedItems = itemsToSort.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return sortedItems;
}
