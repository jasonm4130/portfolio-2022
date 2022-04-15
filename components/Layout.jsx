import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Menu from './Menu/Menu';
import Head from './Head';

export default function Layout({ children }) {
  return (
    <>
      <Head />
      <Menu />
      <main>{children}</main>
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
