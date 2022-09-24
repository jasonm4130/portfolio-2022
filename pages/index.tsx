import Head from 'next/head';
import axios from 'axios';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import Skills from '../components/Skills/Skills';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Articles from '../components/Articles/Articles';
import getMostRecentArticles from '../lib/getMostRecentArticles';
import getFeaturedProjects from '../lib/getFeaturedProjects';
import { MarkdownFileContent } from '../lib/interfaces';
import WhatIDo from '../components/WhatIDo/WhatIDo';

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
        <div className="ligher-bg">
          <WhatIDo />
        </div>
        <Projects projects={projects} />
        <div className="ligher-bg">
          <Skills statsData={statsData} />
        </div>
        <Articles articles={articles} />
        <div className="ligher-bg">
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
