import Head from 'next/head';
import HeroBanner from '../components/HeroBanner/HeroBanner';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jason Matthew - Software Engineer</title>
      </Head>
      <main>
        <HeroBanner />
      </main>
    </>
  );
}
