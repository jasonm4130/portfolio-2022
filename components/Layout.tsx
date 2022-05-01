import React from 'react';
import Footer from './Footer/Footer';
import Menu from './Menu/Menu';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Menu />
      {children}
      <Footer />
    </>
  );
}
