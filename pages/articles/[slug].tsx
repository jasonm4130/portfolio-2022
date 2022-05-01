/* eslint-disable react/no-danger */
import React from 'react';
import path from 'path';
import Head from 'next/head';
import getPaths from '../../lib/getPaths';
import getFileMarkdown from '../../lib/getFileMarkdown';
import { ARTICLES_PATH } from '../../lib/consts';

type ArticleProps = {
  title: string;
  content: string;
};

export default function Article({ title, content }: ArticleProps) {
  return (
    <>
      <Head>
        <title>{title} - Articles</title>
      </Head>
      <main dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}

export function getStaticPaths() {
  // Get the articles paths from the file name
  const paths = getPaths(ARTICLES_PATH);

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
  const filePath = path.join(ARTICLES_PATH, `${slug}.mdx`);

  return { props: await getFileMarkdown(filePath) };
}
