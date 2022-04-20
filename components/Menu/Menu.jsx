import React, { useState } from 'react';
import Link from 'next/link';
import Logo from '../Logo';
import {
  mainNav,
  mainNavList,
  mainNavListOpen,
  mainNavListItem,
  mainNavListItemLink,
  mainNavLogo,
  mainNavButton,
} from './menu.module.scss';
import MenuBurger from './Menu-Burger';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

export default function Menu() {
  const items = [
    {
      name: 'Home',
      link: '/',
    },
    { name: 'About' },
    { name: 'Portfolio' },
    { name: 'Articles' },
    { name: 'Contact' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={mainNav}>
      <Logo className={mainNavLogo} />
      <ul className={`${mainNavList} ${isOpen ? mainNavListOpen : ''}`}>
        {items.map((item) => (
          <li key={item.name} className={mainNavListItem}>
            <Link
              className={mainNavListItemLink}
              href={item.link ? item.link : `/${item.name.toLowerCase()}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <ThemeToggle />
      <button
        className={mainNavButton}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MenuBurger isOpen={isOpen} />
      </button>
    </nav>
  );
}
