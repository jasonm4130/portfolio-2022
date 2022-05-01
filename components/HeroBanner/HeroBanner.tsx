import React from 'react';
import Image from 'next/image';
import styles from './hero-banner.module.scss';
import HeroImage from '../../public/images/behrouz-sasani-cEnSr1WRHUY-unsplash-removebg-preview.png';

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
          I'm pashionate about learning, and wanted a place to share. I've
          carved out this little corner of the internet to do just that. Come
          and join me on my journey of improvment and learning to be a better
          engineer.
        </p>
      </div>
      <div className={styles.imageContainer}>
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
