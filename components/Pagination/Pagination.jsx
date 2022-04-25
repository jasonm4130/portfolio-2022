import Link from 'next/link';
import React from 'react';
import { nav, list, listItem, link } from './pagination.module.scss';

export default function Pagination({
  totalPageCount,
  siblingCount,
  currentPage,
  linkPrefix,
}) {
  return (
    <nav className={nav}>
      <ul className={list}>
        {listArray.map((pageIndex) => (
          <Link key={pageIndex} href={`${linkPrefix}${pageIndex}`}>
            <li className={listItem}>
              <a className={link}>
                <span className="sr-only">Go to page</span>
                {pageIndex}
              </a>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
