import Image from 'next/image';
import HeroImageBg from '../../public/hero-image-bg.svg';
import HeroImage from '../../public/images/behrouz-sasani-cEnSr1WRHUY-unsplash-removebg-preview.png';
import SocialList from '../SocialList/SocialList';
import styles from './hero-banner.module.scss';

export default function HeroBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1>
          I'm <span className={styles.highlight}>Jason</span> Matthew,
          <br />
          <span className={styles.h3}>a software engineer</span>
        </h1>
        <p>
          I'm pashionate about learning, and wanted a place to share. I've
          carved out this little corner of the internet to do just that. Come
          and join me on my journey of improvment and learning to be a better
          engineer.
        </p>
        <SocialList className={styles.socialList} />
      </div>
      <div className={styles.imageContainer}>
        <HeroImageBg className={styles.imageBackground} />
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src={HeroImage}
            alt="Picture of Jason Matthew"
            priority
            fill
          />
        </div>
      </div>
    </section>
  );
}
