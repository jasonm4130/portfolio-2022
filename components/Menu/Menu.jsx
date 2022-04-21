import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from '../Logo';
import {
  nav,
  list,
  listOpen,
  listItem,
  listItemActive,
  listItemLink,
  logo,
  button,
  themeToggle,
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
    <nav className={nav}>
      <Logo className={logo} />
      <ul className={`${list} ${isOpen ? listOpen : ''}`}>
        {items.map((item) => {
          let href = `/${item.name.toLowerCase()}`;
          if (item.link) {
            href = item.link;
          }

          const classList = [listItem];

          if (pathname === href) {
            classList.push(listItemActive);
          }

          return (
            <li key={item.name} className={classList.join(' ')}>
              <Link href={href}>
                <a className={listItemLink}>{item.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      <ThemeToggle className={themeToggle} />
      <button
        className={button}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MenuBurger isOpen={isOpen} />
      </button>
    </nav>
  );
}
