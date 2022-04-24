import matter from 'gray-matter';
import React from 'react';
import path from 'path';
import getPaginatedFiles from '../../../lib/getPaginatedFiles';
import getPaginationPaths from '../../../lib/getPaginationPaths';

export default function ArticleList() {
  return <div>ArticleList</div>;
}

export async function getStaticPaths() {
  // Get the articles paths from the file name
  const paths = await getPaginationPaths('articles');

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { index } }) {
  const filesToDisplay = await getPaginatedFiles('articles', index);

  // Transform the files into usable content
  const filesMarkdown = filesToDisplay.map((file) => {
    const { content: markdown, data: frontmatter } = matter.read(
      path.join('articles', file)
    );

    return {
      markdown,
      ...frontmatter,
    };
  });

  return {
    props: { articles: filesMarkdown },
  };
}
