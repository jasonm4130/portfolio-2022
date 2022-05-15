import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './skills.module.scss';
import SkillCard from './SkillCard';

interface ResponseData {
  languages: {
    [key: string]: {
      xps: number;
      new_xps: number;
    };
  };
}

/**
 * Take an array of language names and combine their values into one language
 * @param languageNames - Array of string for the languages that should be combined
 * @param newLanguageName- The new name for the combined languages
 * @param languages - The array of languages that the combined languages should come from
 * @return {object} - The new langauges array (with the combined languages removed) and the combined languages object
 */
function combineLanguages(
  languageNames: string[],
  newLanguageName: string,
  languages: { name: string; xps: number; newXps: number }[]
) {
  // Get all of the languages as objects from the names
  const languagesToCombine = languages.filter((language) =>
    languageNames.includes(language.name)
  );

  let xpsCount = 0;
  let newXpsCount = 0;

  // Loop through each of the langauges
  languagesToCombine.forEach((language) => {
    const { xps, newXps } = language;

    xpsCount += xps;
    newXpsCount += newXps;
  });

  // Filter the array to exclude the now combined languages
  const filteredLanguagesArray = languages.filter(
    (language) => !languageNames.includes(language.name)
  );

  return {
    combinedLanguage: {
      name: newLanguageName,
      xps: xpsCount,
      newXps: newXpsCount,
    },
    languages: filteredLanguagesArray,
  };
}

export default function Skills({ statsData }: { statsData: ResponseData }) {
  // Set the stats data to the initial data
  const [statsDataState, setStatsDataState] = useState(statsData);

  // Get the new stats when the component mounts
  useEffect(() => {
    axios.get('https://codestats.net/api/users/jasonm4130').then((response) => {
      setStatsDataState(response.data as ResponseData);
    });
  }, []);

  let combinedLanguagesArray: { name: string; xps: number; newXps: number }[] =
    [];

  if (statsDataState.languages) {
    let languagesArray = Object.keys(statsDataState.languages).map(
      (name: string) => {
        // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
        const { xps, new_xps } = statsDataState.languages[name];

        return {
          name,
          xps,
          // eslint-disable-next-line camelcase
          newXps: new_xps,
        };
      }
    );

    // Loop through each of the languages and combine them if they are similar, then add the combined languages to the combinedLanguage array
    for (const language of languagesArray) {
      const { name } = language;

      // Get the JS related Languages
      if (name === 'JavaScript' || name === 'JavaScript (JSX)') {
        const { combinedLanguage, languages } = combineLanguages(
          ['JavaScript', 'JavaScript (JSX)'],
          'JavaScript',
          languagesArray
        );

        // Push the new combined language to the combined languages array
        combinedLanguagesArray.push(combinedLanguage);

        // Update the languages array to be our new filtered array
        languagesArray = languages;
      } else if (name === 'TypeScript' || name === 'TypeScript (JSX)') {
        const { combinedLanguage, languages } = combineLanguages(
          ['TypeScript', 'TypeScript (JSX)'],
          'TypeScript',
          languagesArray
        );

        // Push the new combined language to the combined languages array
        combinedLanguagesArray.push(combinedLanguage);

        // Update the languages array to be our new filtered array
        languagesArray = languages;
      } else if (name === 'Markdown' || name === 'MDX' || name === 'AsciiDoc') {
        const { combinedLanguage, languages } = combineLanguages(
          ['Markdown', 'MDX', 'AsciiDoc'],
          'Markdown',
          languagesArray
        );

        // Push the new combined language to the combined languages array
        combinedLanguagesArray.push(combinedLanguage);

        // Update the languages array to be our new filtered array
        languagesArray = languages;
      } else if (name === 'Sass' || name === 'SCSS') {
        const { combinedLanguage, languages } = combineLanguages(
          ['Sass', 'SCSS'],
          'SASS',
          languagesArray
        );

        // Push the new combined language to the combined languages array
        combinedLanguagesArray.push(combinedLanguage);

        // Update the languages array to be our new filtered array
        languagesArray = languages;
      } else if (
        name === 'SilverStripe' ||
        name === 'PHP' ||
        name === 'Blade'
      ) {
        const { combinedLanguage, languages } = combineLanguages(
          ['SilverStripe', 'PHP', 'Blade'],
          'PHP',
          languagesArray
        );

        // Push the new combined language to the combined languages array
        combinedLanguagesArray.push(combinedLanguage);

        // Update the languages array to be our new filtered array
        languagesArray = languages;
      } else if (
        name === 'nunjucks' ||
        name === 'Handlebars' ||
        name === 'Pug' ||
        name === 'HTML' ||
        name === 'njk'
      ) {
        const { combinedLanguage, languages } = combineLanguages(
          ['nunjucks', 'Handlebars', 'Pug', 'HTML', 'njk'],
          'HTML',
          languagesArray
        );

        // Push the new combined language to the combined languages array
        combinedLanguagesArray.push(combinedLanguage);

        // Update the languages array to be our new filtered array
        languagesArray = languages;
      } else {
        // Default action if we don't need to combine anything Push the language to the combined languages array
        combinedLanguagesArray.push(language);
      }
    }

    // Sort and get the top 8 languages
    combinedLanguagesArray = combinedLanguagesArray
      .sort((a, b) => b.xps - a.xps)
      .slice(0, 8);
  }

  return (
    <section className={styles.section}>
      <div className={styles.intro}>
        <h2 className={styles.title}>Hard Skills</h2>
        <p className={styles.intro}>
          A lot of portfolio sites have abitary skill rankings 5 stars in JS
          etc. I like data so I track my keystrokes in my code editor with a
          tool called CodeStats. This isn't really any better than arbitary star
          ratings but I think it's cool to look at data. So here are my top
          languages and the number of keystrokes I have done in them.
        </p>
      </div>
      <div className={styles.grid}>
        {combinedLanguagesArray.map(
          (language: { name: string; xps: number; newXps: number }) => (
            <SkillCard key={language.name} language={language} />
          )
        )}
      </div>
    </section>
  );
}
