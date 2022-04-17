import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import markdownToHtml from '../../lib/markdown';

export default function Article({ title, content }) {
  return (
    <>
      <Head>
        <title>{title} - Articles</title>
      </Head>
      <div>{markdownToHtml(content)}</div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((fileName) => {
    const slug = fileName.split('.').at(0);

    return {
      params: {
        slug,
      },
    };
  });

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdown = matter.read(path.join('posts', `${slug}.mdx`));

  return {
    props: {
      ...markdown,
    },
  };
}
