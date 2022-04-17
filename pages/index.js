import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import HeroBanner from '../components/HeroBanner/HeroBanner';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jason Matthew - Software Engineer</title>
      </Head>
      <HeroBanner />
    </>
  );
}

export async function getStaticProps() {
  // Get the files from the posts dir
  const files = fs.readdirSync(path.join('posts'));

  // Get post info
  const posts = files.map((fileName) => {
    // Get the file name before the extension
    const slug = fileName.split('.').at(0);

    // Get the front matter
    const { data: frontmatter } = matter.read(path.join('posts', fileName));

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
