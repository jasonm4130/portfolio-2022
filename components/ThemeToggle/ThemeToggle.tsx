import React from 'react';
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
}

export default function Toggle({ className }: { className: string }) {
  const { theme, setTheme } = useTheme() as UseTheme;

  return (
    <button
      onClick={() => {
        setTheme(getThemeInverseString(theme));
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
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

Toggle.propTypes = {
  className: PropTypes.string,
};
