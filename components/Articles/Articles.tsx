import React from 'react';
import Link from 'next/link';
import ArticleCard from './ArticleCard';
import styles from './articles.module.scss';
import ArrowIcon from '../../public/arrow-right.svg';
import { MarkdownFileContent } from '../../lib/interfaces';

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
        <Link href="/articles" className={styles.primaryCta}>
          View more <ArrowIcon className={styles.primaryCtaIcon} />
        </Link>
      </div>
      <div className={styles.grid}>
        {articles.map((article) => (
          <ArticleCard key={article.title} article={article} />
        ))}
      </div>
    </section>
  );
}
