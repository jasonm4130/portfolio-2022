import React from 'react';
import styles from './skill-card.module.scss';

export default function SkillCard({
  language,
}: {
  language: { name: string; xps: number };
}) {
  const { name, xps } = language;

  return (
    <article>
      <div className={styles.title}>{name}</div>
      <div>{xps.toLocaleString('en-US')} key strokes</div>
    </article>
  );
}
