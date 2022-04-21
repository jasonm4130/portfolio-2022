import React from 'react';
import { useTheme } from 'next-themes';
import PropTypes from 'prop-types';
import {
  toggle,
  toggleLight,
  toggleDark,
  toggleSwitch,
  moon,
  sun,
} from './theme-toggle.module.scss';
import MoonSVG from '../../public/moon.svg';
import SunSVG from '../../public/sun.svg';

export default function Toggle({ className }) {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }}
      type="button"
      className={`${toggle} ${
        theme === 'light' ? toggleLight : toggleDark
      } ${className}`}
    >
      <span className={toggleSwitch}>
        <MoonSVG className={moon} />
        <SunSVG className={sun} />
      </span>
    </button>
  );
}

toggle.propTypes = {
  className: PropTypes.string,
};
