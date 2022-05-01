/* eslint-disable react/no-danger */
import React from 'react';
import path from 'path';
import Head from 'next/head';
import styles from '../../styles/article.module.scss';
import getPaths from '../../lib/getPaths';
import getFileMarkdown from '../../lib/getFileMarkdown';
import { PROJECTS_PATH } from '../../lib/consts';

export default function Article({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <>
      <Head>
        <title>{title} - Projects</title>
      </Head>
      <main
        className={styles.article}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  );
}

export function getStaticPaths() {
  // Get the projects paths from the file name
  const paths = getPaths(PROJECTS_PATH);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const filePath = path.join(PROJECTS_PATH, `${slug}.mdx`);

  return { props: await getFileMarkdown(filePath) };
}
