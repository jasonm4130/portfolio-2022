import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from '../../public/logo.svg';
import styles from './menu.module.scss';
import MenuBurger from '../MenuBurger';
import ThemeToggle from '../ThemeToggle';

export default function Menu() {
  const { pathname } = useRouter();

  const items = [
    {
      name: 'Home',
      link: '/',
    },
    { name: 'About' },
    { name: 'Projects' },
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
    <nav className={styles.nav}>
      <Link href="/" className={styles.logoLink} aria-label="Go to home">
        <Logo className={styles.logo} />
      </Link>
      <ul className={`${styles.list} ${isOpen ? styles.listOpen : ''}`}>
        {items.map((item) => {
          const { link, name } = item;
          let href = `/${name.toLowerCase()}`;
          if (link) {
            href = link;
          }

          const classList = [styles.listItem];

          if (pathname === href) {
            classList.push(styles.listItemActive);
          }

          return (
            <li key={name} className={classList.join(' ')}>
              <Link href={href} className={styles.listItemLink}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
      <ThemeToggle className={styles.themeToggle} />
      <button
        className={styles.button}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <MenuBurger isOpen={isOpen} />
      </button>
    </nav>
  );
}
