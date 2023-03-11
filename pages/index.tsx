import Head from 'next/head';
import axios from 'axios';
import HeroBanner from '../components/HeroBanner';
import Skills from '../components/Skills';
import About from '../components/About';
import Projects from '../components/Projects';
import Articles from '../components/Articles';
import getMostRecentArticles from '../lib/getMostRecentArticles';
import getFeaturedProjects from '../lib/getFeaturedProjects';
import { MarkdownFileContent } from '../lib/interfaces';
import WhatIDo from '../components/WhatIDo';

type LanguageData = {
  languages: {
    [key: string]: {
      xps: number;
      new_xps: number;
    };
  };
};

export default function Home({
  statsData,
  projects,
  articles,
}: {
  statsData: LanguageData;
  projects: MarkdownFileContent[];
  articles: MarkdownFileContent[];
}) {
  return (
    <>
      <Head>
        <title>Jason Matthew - Software Engineer</title>
      </Head>
      <main>
        <HeroBanner />
        <div className="lighterBg">
          <WhatIDo />
        </div>
        <Projects projects={projects} />
        <div className="lighterBg">
          <Skills statsData={statsData} />
        </div>
        <Articles articles={articles} />
        <div className="lighterBg">
          <About />
        </div>
      </main>
    </>
  );
}

type CodeStatsResponse = {
  data: {
    LanguageData;
  };
};

export async function getStaticProps() {
  // Get the code stats data
  const { data } = await axios.get<CodeStatsResponse>(
    'https://codestats.net/api/users/jasonm4130'
  );

  // Get the projects
  const projects = getFeaturedProjects();

  // Get the articles
  const articles = getMostRecentArticles(3);

  return {
    props: {
      statsData: data,
      projects,
      articles,
    },
  };
}
