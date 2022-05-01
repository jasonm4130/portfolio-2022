import React from 'react';
import { usePagination, DOTS } from '../../lib/usePagination';
import styles from './pagination.module.scss';

export default function Pagination({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}: {
  onPageChange: (number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className?: string;
}) {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <nav className={`${styles.nav} ${className}`}>
      <ul className={styles.list}>
        <li>
          <button
            onClick={onPrevious}
            type="button"
            className={styles.button}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {paginationRange.map((pageNumber: string | number) => {
          if (pageNumber === DOTS) {
            return <li className={styles.dots}>&#8230;</li>;
          }

          return (
            <li>
              <button
                onClick={() => onPageChange(pageNumber)}
                type="button"
                className={`${styles.button} ${
                  pageNumber === currentPage ? styles.buttonCurrent : ''
                }`}
              >
                <span className="sr-only">Go to </span>
                {pageNumber}
              </button>
            </li>
          );
        })}
        <li>
          <button
            onClick={onNext}
            type="button"
            className={styles.button}
            disabled={currentPage === lastPage}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}
