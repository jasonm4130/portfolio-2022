import Head from 'next/head';
import axios from 'axios';
import PropTypes from 'prop-types';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import Skills from '../components/Skills/Skills';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import { getAllMarkdown } from '../lib/getMarkdown';
import Articles from '../components/Articles/Articles';

export default function Home({ statsData, projects, articles }) {
  console.log(articles);

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
  const projects = await getAllMarkdown('projects');

  // Get the articles
  const articles = await getAllMarkdown('articles');

  console.log(articles);

  return {
    props: {
      statsData: data,
      projects,
      articles,
    },
  };
}
