import React from 'react';
import Link from 'next/link';
import { usePagination, DOTS } from '../../lib/usePagination';
import styles from './pagination.module.scss';

export default function Pagination({
  pageRoute,
  totalPages,
  siblingCount = 1,
  currentPage,
  className,
}: {
  pageRoute: string;
  totalPages: number;
  siblingCount?: number;
  currentPage: number;
  className?: string;
}) {
  const paginationRange = usePagination({
    currentPage,
    totalPages,
    siblingCount,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <nav className={`${styles.nav} ${className}`}>
      <ul className={styles.list}>
        <li key="pagination-page-previous">
          <Link
            type="button"
            className={styles.button}
            href={`${pageRoute}${currentPage - 1}`}
          >
            Previous
          </Link>
        </li>
        {paginationRange.map((pageNumber: string | number) => {
          if (pageNumber === DOTS) {
            return (
              <li key="pagination-previous-dots" className={styles.dots}>
                &#8230;
              </li>
            );
          }

          return (
            <li key={`pagination-page-${pageNumber}`}>
              <Link
                href={`${pageRoute}${pageNumber}`}
                type="button"
                className={`${styles.button} ${
                  pageNumber === currentPage ? styles.buttonCurrent : ''
                }`}
              >
                <span className={styles.srOnly}>Go to </span>
                {pageNumber}
              </Link>
            </li>
          );
        })}
        <li key="pagination-page-next">
          <Link
            href={`${pageRoute}${currentPage + 1}`}
            type="button"
            className={styles.button}
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
}
