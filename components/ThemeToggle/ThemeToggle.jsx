import React from 'react';
import { useTheme } from 'next-themes';
import PropTypes from 'prop-types';
import {
  themeToggle,
  themeToggleLight,
  themeToggleDark,
  themeToggleSwitch,
  moon,
  sun,
} from './theme-toggle.module.scss';
import MoonSVG from '../../public/moon.svg';
import SunSVG from '../../public/sun.svg';

export default function ThemeToggle({ className }) {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }}
      type="button"
      className={`${themeToggle} ${
        theme === 'light' ? themeToggleLight : themeToggleDark
      } ${className}`}
    >
      <span className={themeToggleSwitch}>
        <MoonSVG className={moon} />
        <SunSVG className={sun} />
      </span>
    </button>
  );
}

ThemeToggle.propTypes = {
  className: PropTypes.string,
};
