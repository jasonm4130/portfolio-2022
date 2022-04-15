import React, { useState } from 'react';
import Link from 'next/link';
import Logo from '../Logo';
import {
  mainNavWrapper,
  mainNav,
  mainNavList,
  mainNavListOpen,
  mainNavListItem,
  mainNavListItemLink,
  mainNavLogo,
  mainNavButton,
} from './menu.module.scss';
import MenuBurger from './Menu-Burger';

export default function Menu() {
  const items = ['Home', 'About', 'Portfolio', 'Posts', 'Contacts'];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={mainNavWrapper}>
      <nav className={mainNav}>
        <Logo className={mainNavLogo} />
        <ul className={`${mainNavList} ${isOpen ? mainNavListOpen : ''}`}>
          {items.map((item) => (
            <li key={item} className={mainNavListItem}>
              <Link className={mainNavListItemLink} href={`/${item}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className={mainNavButton}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuBurger isOpen={isOpen} />
        </button>
      </nav>
    </div>
  );
}
