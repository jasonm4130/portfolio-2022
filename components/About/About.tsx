import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './about.module.scss';
import ArrowIcon from '../../public/arrow-right.svg';
import AboutMeImageBg from '../../public/about-me-img-bg.svg';
import HeroImage from '../../public/images/behrouz-sasani-cEnSr1WRHUY-unsplash-removebg-preview.png';

function getRedableTime(ms: number) {
  let miliseconds = Math.floor(ms);
  let seconds = Math.floor(ms / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  let weeks = Math.floor(days / 7);
  let months = Math.floor(days / 30);
  let years = Math.floor(days / 365);
  const decades = Math.floor(years / 10);

  miliseconds %= 1000;
  seconds %= 60;
  minutes %= 60;
  hours %= 24;
  days %= 7;
  weeks %= 4;
  months %= 12;
  years %= 10;

  return {
    miliseconds,
    seconds,
    minutes,
    hours,
    days,
    weeks,
    months,
    years,
    decades,
  };
}

export default function About() {
  const [industryInEpoch, setIndustryInEpoch] = useState(0);
  const [timePassed, setTimePassed] = useState({
    days: 0,
    weeks: 0,
    months: 0,
    years: 0,
    decades: 0,
  });

  useEffect(() => {
    const startingDate = new Date('01/11/2014');
    const nowDate = new Date();
    const timeInIndustry = nowDate.valueOf() - startingDate.valueOf();
    setInterval(
      () => setIndustryInEpoch(Date.now() - startingDate.valueOf()),
      100
    );
    const { days, weeks, months, years, decades } =
      getRedableTime(timeInIndustry);
    setTimePassed({
      days,
      weeks,
      months,
      years,
      decades,
    });
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>About Me</h2>
        <p>
          I'm a software engineer from Brisbane, Australia. I have been in the
          field in some shape or form for about{' '}
          {timePassed.decades > 0 ? `${timePassed.decades} decades,` : ''}{' '}
          {timePassed.years} years, {timePassed.months} months,{' '}
          {timePassed.weeks} weeks, and {timePassed.days} days, or to be more
          precise {industryInEpoch}ms.
        </p>
        <p>
          The thing that I enjoy most about development is every problem has a
          solution, there is nothing that can't be done given enough time. I
          enjoy this problem solving aspect and knowing that I can find a
          solution, I often aproach complex problems with this in mind.
        </p>
        <p>
          Due to the nature of the industry learning takes up a huge portion of
          what I like to do outside of work hours. With that said I have always
          found learning enjoyable, wether listening to a podcast or audiobook,
          or thinking up a side project that I can use a new technology I have
          been wanting to try on. Outside of these activities I enjoy biking
          (road and mountain), going to the gym, and the occasional computer
          game.
        </p>
        <Link href="/about" className={styles.primaryCta}>
          More about me <ArrowIcon className={styles.primaryCtaIcon} />
        </Link>
      </div>
      <div className={styles.imageContainer}>
        <AboutMeImageBg className={styles.imageBackground} />
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src={HeroImage}
            priority
            alt="Image of Jason Matthew"
          />
        </div>
      </div>
    </section>
  );
}
