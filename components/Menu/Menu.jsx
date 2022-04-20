import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from '../Logo';
import {
  mainNav,
  mainNavList,
  mainNavListOpen,
  mainNavListItem,
  mainNavListItemActive,
  mainNavListItemLink,
  mainNavLogo,
  mainNavButton,
  mainNavThemeToggle,
} from './menu.module.scss';
import MenuBurger from './Menu-Burger';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

export default function Menu() {
  const { pathname } = useRouter();

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

  useEffect(() => {
    const bodyClasses = document.body.classList;
    if (isOpen && !bodyClasses.contains('scroll-lock')) {
      bodyClasses.add('scroll-lock');
    } else if (bodyClasses.contains('scroll-lock')) {
      bodyClasses.remove('scroll-lock');
    }
  });

  return (
    <nav className={mainNav}>
      <Logo className={mainNavLogo} />
      <ul className={`${mainNavList} ${isOpen ? mainNavListOpen : ''}`}>
        {items.map((item) => {
          let href = `/${item.name.toLowerCase()}`;
          if (item.link) {
            href = item.link;
          }

          const classList = [mainNavListItem];

          if (pathname === href) {
            classList.push(mainNavListItemActive);
          }

          return (
            <li key={item.name} className={classList.join(' ')}>
              <Link className={mainNavListItemLink} href={href}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <ThemeToggle className={mainNavThemeToggle} />
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
