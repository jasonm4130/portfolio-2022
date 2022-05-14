import React from 'react';
import Image from 'next/image';
import styles from './hero-banner.module.scss';
import HeroImage from '../../public/images/behrouz-sasani-cEnSr1WRHUY-unsplash-removebg-preview.png';
import SocialList from '../SocialList/SocialList';
import HeroImageBg from '../../public/hero-image-bg.svg';

export default function HeroBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1>
          I'm <span className="highlight">Jason</span> Matthew,
          <br />
          <span className="h3">a software engineer</span>
        </h1>
        <p>
          I'm pashionate about learning, and wanted a place href share. I've
          carved out this little corner of the internet href do just that. Come
          and join me on my journey of improvment and learning href be a better
          engineer.
        </p>
        <SocialList />
      </div>
      <div className={styles.imageContainer}>
        <HeroImageBg className={styles.imageBackground} />
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src={HeroImage}
            layout="responsive"
            priority
          />
        </div>
      </div>
    </section>
  );
}
