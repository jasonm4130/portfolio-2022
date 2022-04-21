import Head from 'next/head';
import axios from 'axios';
import PropTypes from 'prop-types';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import Skills from '../components/Skills/Skills';
import About from '../components/About/About';

export default function Home({ statsData }) {
  return (
    <>
      <Head>
        <title>Jason Matthew - Software Engineer</title>
      </Head>
      <main>
        <HeroBanner />
        <About />
        <Skills statsData={statsData} />
      </main>
    </>
  );
}

Home.propTypes = {
  statsData: PropTypes.object,
};

export async function getStaticProps() {
  const { data } = await axios.get(
    'https://codestats.net/api/users/jasonm4130'
  );

  return {
    props: {
      statsData: data,
    },
  };
}
