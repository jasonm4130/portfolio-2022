import React from 'react';
import PropTypes from 'prop-types';

export default function Blob({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M159.6 45.4C173.1 54 177.1 77 176 98.9c-1 22-7.2 42.8-20.7 53.5-13.6 10.7-34.4 11.2-53.2 9.1-18.8-2.1-35.6-6.7-45.8-17.3-10.2-10.7-13.9-27.5-11.9-42.2 2-14.7 9.7-27.4 19.9-36 10.3-8.5 23-12.8 40.8-18 17.9-5.1 40.9-11.1 54.5-2.6Z" />
    </svg>
  );
}

Blob.propTypes = {
  className: PropTypes.string,
};
