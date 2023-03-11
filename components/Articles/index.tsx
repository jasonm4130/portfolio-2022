import React from 'react';
import ArticleCard from '../ArticleCard';
import styles from './articles.module.scss';
import { MarkdownFileContent } from '../../lib/interfaces';
import PrimaryCtaButton from '../PrimaryCtaButton';

export default function Articles({
  articles,
}: {
  articles: MarkdownFileContent[];
}) {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>Articles</h2>
        <p className={styles.intro}>
          Some recent ramblings on software engineering, general development,
          business, leadership, and the industry space in general.
        </p>
        <PrimaryCtaButton
          href="/articles"
          customClasses={{
            primaryCta: styles.primaryCta,
          }}
        >
          View more
        </PrimaryCtaButton>
      </div>
      <div className={styles.grid}>
        {articles.map((article) => (
          <ArticleCard key={article.title} article={article} />
        ))}
      </div>
    </section>
  );
}
