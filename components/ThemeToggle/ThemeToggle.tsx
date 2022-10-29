import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import PropTypes from 'prop-types';
import styles from './theme-toggle.module.scss';
import MoonSVG from '../../public/moon.svg';
import SunSVG from '../../public/sun.svg';

function getThemeInverseString(theme) {
  if (theme === 'dark') {
    return 'light';
  }
  return 'dark';
}

interface UseTheme {
  theme: string;
  setTheme: (string) => void;
  resolvedTheme: string;
}

export default function Toggle({ className }: { className: string }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme() as UseTheme;

  useEffect(() => {
    setMounted(true);
  }, []);

  // If the component isn't mounted don't return anything (prevent rehydration issues)
  if (!mounted) {
    return null;
  }

  // Return the theme switcher when the component is mounted
  return (
    <button
      onClick={() => {
        setTheme(getThemeInverseString(resolvedTheme));
      }}
      type="button"
      className={`${styles.toggle} ${
        theme === 'light' ? styles.toggleLight : styles.toggleDark
      } ${className}`}
    >
      <span className={styles.toggleSwitch}>
        <MoonSVG className={styles.moon} />
        <SunSVG className={styles.sun} />
      </span>
      <span className={styles.srOnly}>Toggle theme</span>
    </button>
  );
}

Toggle.propTypes = {
  className: PropTypes.string,
};
