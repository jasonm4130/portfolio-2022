import Head from 'next/head';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <HeroBanner />
      </Layout>
    </>
  );
}
