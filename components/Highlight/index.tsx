import React from 'react';
import styles from './highlight.module.scss';

export default function Highlight({ children }: { children: React.ReactNode }) {
  return <span className={styles.wrapper}>{children}</span>;
}
