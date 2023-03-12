import Head from 'next/head';
import LighterBg from '../components/LighterBg';
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
        <LighterBg>
          <WhatIDo />
        </LighterBg>
        <Projects projects={projects} />
        <LighterBg>
          <Skills statsData={statsData} />
        </LighterBg>
        <Articles articles={articles} />
        <LighterBg>
          <About />
        </LighterBg>
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
  const response = await fetch('https://codestats.net/api/users/jasonm4130');
  const data = (await response.json()) as CodeStatsResponse;

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
