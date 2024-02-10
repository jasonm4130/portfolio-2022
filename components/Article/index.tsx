import React from 'react';
import Head from 'next/head';

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
      {/* eslint-disable-next-line react/no-danger */}
      <main dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}
