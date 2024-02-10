import React from 'react';
import styles from './articlesWrapper.module.scss';

export default function ArticlesWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <h1 className={styles.title}>Articles</h1>
      <p className={styles.intro}>
        Check out my recent articles. I mostly use this as a place to share
        things that I have found useful or to write down my own thoughts on
        particular topics. I like so many others continue to learn and as such
        these items only really represent my viewpoint at a particular point in
        time.
      </p>
      {children}
    </main>
  );
}
