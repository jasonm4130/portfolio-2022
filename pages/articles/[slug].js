/* eslint-disable react/no-danger */
import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkPrism from 'remark-prism';
// Import styles for syntax highlighting
import 'prismjs/themes/prism-tomorrow.css';
import { article } from '../../styles/article.module.scss';

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
  // Get all of the articles
  const files = fs.readdirSync(path.join('articles'));

  // Get the articles paths from the file name
  const paths = files.map((fileName) => {
    // Get the slug from the article
    const slug = fileName.split('.').at(0);

    // Return our params
    return {
      params: {
        slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const { content: markdown, data: frontmatter } = matter.read(
    path.join('articles', `${slug}.mdx`)
  );

  const html = await remark()
    .use(remarkHtml, { sanitize: false })
    .use(remarkPrism)
    .process(markdown);

  const content = html.toString();

  return {
    props: {
      content,
      ...frontmatter,
    },
  };
}
