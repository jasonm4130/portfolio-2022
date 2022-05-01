import React from 'react';
import Footer from './Footer/Footer';
import Menu from './Menu/Menu';

export default function Layout({ children }: { children: JSX.Element[] }) {
  return (
    <>
      <Menu />
      {children}
      <Footer />
    </>
  );
}
