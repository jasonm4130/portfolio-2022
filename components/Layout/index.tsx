import React from 'react';
import Footer from '../Footer';
import Menu from '../Menu';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Menu />
      {children}
      <Footer />
    </>
  );
}
