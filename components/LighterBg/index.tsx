import React from 'react';
import styles from './lighter-bg.module.scss';

export default function LighterBg({ children }: { children: React.ReactNode }) {
  return <div className={styles.lighterBg}>{children}</div>;
}
