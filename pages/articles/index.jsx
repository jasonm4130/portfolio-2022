import React from 'react';
import { title } from './articles.module.scss';
import { getAllMarkdown } from '../../lib/getAllMarkdown';
import { ARTICLES_PATH } from '../../lib/consts';

export default function Articles({ articles }) {
  console.log(articles);
  return (
    <main>
      <h1 className={title}>Articles</h1>
    </main>
  );
}

export async function getStaticProps() {
  // Get the files that we want to display
  let articles = await getAllMarkdown(ARTICLES_PATH);

  // Remove the content from the filesToDisplay array
  articles = articles.map((article) => ({
    ...article,
    content: null,
  }));

  return {
    props: {
      articles,
    },
  };
}
