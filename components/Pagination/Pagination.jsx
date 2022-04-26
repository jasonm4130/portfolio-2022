import React from 'react';
import PropTypes from 'prop-types';
import { usePagination, DOTS } from '../../lib/usePagination';
import {
  nav,
  list,
  button,
  buttonCurrent,
  dots,
} from './pagination.module.scss';

export default function Pagination({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
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
    <nav className={`${nav} ${className}`}>
      <ul className={list}>
        <li>
          <button
            onClick={onPrevious}
            type="button"
            className={button}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return <li className={dots}>&#8230;</li>;
          }

          return (
            <li>
              <button
                onClick={() => onPageChange(pageNumber)}
                type="button"
                className={`${button} ${
                  pageNumber === currentPage ? buttonCurrent : ''
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
            className={button}
            disabled={currentPage === lastPage}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  onPageChange: PropTypes.func,
  totalCount: PropTypes.number,
  siblingCount: PropTypes.number,
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
  className: PropTypes.string,
};
