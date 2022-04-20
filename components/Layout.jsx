import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Menu from './Menu/Menu';

export default function Layout({ children }) {
  return (
    <>
      <Menu />
      {children}
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
