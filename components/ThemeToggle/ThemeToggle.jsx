import React, { useState } from 'react';
import Head from 'next/head';
import { useTheme } from 'next-themes';
import {
  themeToggle,
  themeToggleLight,
  themeToggleDark,
  moon,
  sun,
} from './theme-toggle.module.scss';
import MoonSVG from '../../public/moon.svg';
import SunSVG from '../../public/sun.svg';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Head>
        <html lang="en" />
      </Head>
      <button
        onClick={() => {
          setTheme(theme === 'light' ? 'dark' : 'light');
        }}
        type="button"
        className={`${themeToggle} ${
          theme === 'light' ? themeToggleLight : themeToggleDark
        }`}
      >
        <MoonSVG className={moon} />
        <SunSVG className={sun} />
      </button>
    </>
  );
}
