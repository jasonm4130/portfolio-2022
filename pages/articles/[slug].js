/* eslint-disable react/no-danger */
import React from 'react';
import path from 'path';
import Head from 'next/head';
// Import styles for syntax highlighting
import 'prismjs/themes/prism-tomorrow.css';
import PropTypes from 'prop-types';
import { article } from '../../styles/article.module.scss';
import getPaths from '../../lib/getPaths';
import getFileMarkdown from '../../lib/getFileMarkdown';

export default function Article({ title, content }) {
  return (
    <>
      <Head>
        <title>{title} - Articles</title>
      </Head>
      <main className={article} dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}

export async function getStaticPaths() {
  // Get the articles paths from the file name
  const paths = await getPaths('articles');

  return {
    paths,
    fallback: false,
  };
}

Article.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export async function getStaticProps({ params: { slug } }) {
  const filePath = path.join('articles', `${slug}.mdx`);

  return getFileMarkdown(filePath);
}
