import PropTypes from 'prop-types';
import React from 'react';

export default function Logo({ className }) {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 334.01 112"
      className={className}
    >
      <path d="M334 73.54h-6.3l-5.7 18.6-6.16-18.68h-5.18l-6.16 18.68-5.69-18.6h-6.48l9.38 27.67H307l6.2-18 6.2 18h5.26ZM289 101v-5.36h-14.88v-5.77h12.95v-5.38h-12.95v-5.57h14.72v-5.38h-20.68V101Zm-27.48 0V73.54h-6v10.87h-11.15V73.54h-6V101h6V90h11.15v11ZM233.7 79.11v-5.57h-22.77v5.57h8.36V101h6.05V79.11Zm-25.44 0v-5.57H185.5v5.57h8.36V101h6V79.11Zm-36 8.78h-7.3l3.63-8.89Zm11 13.12-11.81-27.66h-5.57L154.1 101h6.16l2.52-6.16h11.61l2.52 6.16Zm-33.36 0V73.54h-6.51l-7.22 11.62-7.22-11.62h-6.52V101h6V83.2L136 94.81h.16l7.73-11.73V101Zm111.27-39.49V34.05h-6V51l-12.84-16.95h-5.57v27.47h6V44.06L256 61.52Zm-36.11-13.65a8.85 8.85 0 0 1-.61 3.31 8.45 8.45 0 0 1-1.68 2.73 7.65 7.65 0 0 1-2.61 1.85 8.37 8.37 0 0 1-3.34.66 8.17 8.17 0 0 1-3.36-.68 8.47 8.47 0 0 1-2.63-1.87 8.26 8.26 0 0 1-1.72-2.74 9.08 9.08 0 0 1-.61-3.34v-.08a8.94 8.94 0 0 1 .61-3.32 8.54 8.54 0 0 1 1.69-2.72 7.67 7.67 0 0 1 2.59-1.85 8.25 8.25 0 0 1 3.35-.67 8 8 0 0 1 3.34.69 8.24 8.24 0 0 1 4.37 4.61 9.08 9.08 0 0 1 .61 3.34Zm6.32-.08v-.08a14.06 14.06 0 0 0-1.08-5.51 13.42 13.42 0 0 0-3-4.48 14.63 14.63 0 0 0-4.61-3 14.91 14.91 0 0 0-5.85-1.12 15.08 15.08 0 0 0-5.84 1.1 14 14 0 0 0-7.67 7.57 14 14 0 0 0-1.1 5.52v.08a14.06 14.06 0 0 0 1.08 5.51 13.68 13.68 0 0 0 3 4.48 14.81 14.81 0 0 0 4.61 3 15.89 15.89 0 0 0 11.72 0 14.27 14.27 0 0 0 4.63-3.06 14.11 14.11 0 0 0 3-4.52 13.9 13.9 0 0 0 1.11-5.49Zm-33.24 5.61v-.08a7.69 7.69 0 0 0-.57-3.1 6.28 6.28 0 0 0-1.7-2.25 10 10 0 0 0-2.75-1.65 27.91 27.91 0 0 0-3.72-1.24 99.3 99.3 0 0 1-2.93-.82 9.24 9.24 0 0 1-1.83-.75 2.24 2.24 0 0 1-.92-.88 2.37 2.37 0 0 1-.26-1.16v-.08a2.09 2.09 0 0 1 .88-1.71A4.33 4.33 0 0 1 187 39a9.25 9.25 0 0 1 3.53.72 20.15 20.15 0 0 1 3.62 2l3.14-4.56a15.89 15.89 0 0 0-10.21-3.49 12.24 12.24 0 0 0-3.88.59 8.78 8.78 0 0 0-3 1.69 7.77 7.77 0 0 0-2 2.61 8.06 8.06 0 0 0-.7 3.39V42a8 8 0 0 0 .65 3.41 6.25 6.25 0 0 0 1.83 2.3 10.61 10.61 0 0 0 2.88 1.55 33.58 33.58 0 0 0 3.78 1.14c1.15.29 2.09.56 2.81.82a8.75 8.75 0 0 1 1.69.79 2.2 2.2 0 0 1 .83.84 2.44 2.44 0 0 1 .21 1V54a2.13 2.13 0 0 1-1 1.9 5.23 5.23 0 0 1-2.92.69 10.38 10.38 0 0 1-4.34-.9 17.77 17.77 0 0 1-3.92-2.45l-3.58 4.28a16.34 16.34 0 0 0 5.5 3.32 18.17 18.17 0 0 0 6.16 1.08 13.78 13.78 0 0 0 4.08-.57 9.31 9.31 0 0 0 3.16-1.65 7.46 7.46 0 0 0 2.08-2.7 8.56 8.56 0 0 0 .74-3.6ZM163.05 50h-7.3l3.65-8.91Zm11 11.49-11.78-27.63h-5.58l-11.77 27.66h6.16l2.51-6.16h11.62l2.51 6.16ZM141.11 52V34h-6.2v17.7a5.11 5.11 0 0 1-1 3.48 3.47 3.47 0 0 1-2.71 1.08 5.05 5.05 0 0 1-2.65-.73 11 11 0 0 1-2.37-2l-3.81 4.24A12.73 12.73 0 0 0 126 60.7a11 11 0 0 0 5.4 1.22 12.46 12.46 0 0 0 4-.61 8.09 8.09 0 0 0 3.08-1.84 8.63 8.63 0 0 0 2-3.09 12.14 12.14 0 0 0 .63-4.38Z" />
      <path d="m25.19 11.39 6.58 11.4 6.58-11.4L31.77 0Zm19.74 34.19 31.77 55H39.48l12-20.83-6.58-11.4L19.74 112h76.69L64.66 57l6.58-11.39 31.77 55h13.16L71.24 22.79 58.09 45.58 44.93 22.79 0 100.6h13.16Z" />
    </svg>
  );
}

Logo.propTypes = {
  className: PropTypes.string,
};
