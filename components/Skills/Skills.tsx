import React, { useState, useEffect } from 'react';
import PropTypes, { string } from 'prop-types';
import axios from 'axios';
import styles from './skills.module.scss';
import SkillCard from './SkillCard';

export default function Skills({ statsData }: { statsData: any }) {
  // Set the stats data to the initial data
  const [statsDataState, setStatsDataState] = useState(statsData);

  // Get the new stats when the component mounts
  useEffect(() => {
    axios.get('https://codestats.net/api/users/jasonm4130').then((response) => {
      setStatsDataState(response.data as any);
    });
  }, []);

  let languagesArray = [];

  if (statsDataState.languages) {
    languagesArray = Object.keys(statsDataState.languages)
      .map((name) => {
        // eslint-disable-next-line camelcase
        const { xps, new_xps } = statsDataState.languages[name];

        return {
          name,
          xps,
          // eslint-disable-next-line camelcase
          newXps: new_xps,
        };
      })
      .sort((a, b) => b.xps - a.xps)
      .slice(0, 8);
  }

  return (
    <section className={styles.section}>
      <div className={styles.intro}>
        <h2 className={styles.title}>Hard Skills</h2>
        <p>
          A lot of portfolio sites have abitary skill rankings 5 stars in JS
          etc. I like data so I track my keystrokes in my code editor with a
          tool called CodeStats. This isn't really any better than arbitary star
          ratings but I think it's cool to look at data. So here are my top
          languages and the number of keystrokes I have done in them.
        </p>
      </div>
      <div className={styles.grid}>
        {languagesArray.map((language) => (
          <SkillCard key={language.name} language={language} />
        ))}
      </div>
    </section>
  );
}

Skills.propTypes = {
  statsData: PropTypes.object,
};
