import Head from 'next/head';
import axios from 'axios';
import PropTypes from 'prop-types';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import Skills from '../components/Skills/Skills';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Articles from '../components/Articles/Articles';
import getMostRecentArticles from '../lib/getMostRecentArticles';
import getFeaturedProjects from '../lib/getFeaturedProjects';

export default function Home({ statsData, projects, articles }) {
  return (
    <>
      <Head>
        <title>Jason Matthew - Software Engineer</title>
      </Head>
      <main>
        <HeroBanner />
        <Projects projects={projects} />
        <Skills statsData={statsData} />
        <Articles articles={articles} />
        <About />
      </main>
    </>
  );
}

Home.propTypes = {
  statsData: PropTypes.object,
  projects: PropTypes.array,
  articles: PropTypes.array,
};

export async function getStaticProps() {
  // Get the code stats data
  const { data } = await axios.get(
    'https://codestats.net/api/users/jasonm4130'
  );

  // Get the projects
  const projects = await getFeaturedProjects();

  // Get the articles
  const articles = await getMostRecentArticles(3);

  return {
    props: {
      statsData: data,
      projects,
      articles,
    },
  };
}
