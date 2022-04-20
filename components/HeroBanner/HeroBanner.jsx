import Image from 'next/image';
import React from 'react';
import {
  heroBanner,
  heroBannerImage,
  heroBannerImageWrapper,
  heroBannerImageContainer,
  heroBannerContent,
} from './hero-banner.module.scss';
import HeroImage from '/public/images/behrouz-sasani-cEnSr1WRHUY-unsplash-removebg-preview.png';

export default function HeroBanner() {
  return (
    <section>
      <div className={heroBanner}>
        <div className={heroBannerContent}>
          <h1>
            Hi, I'm <span className="highlight">Jason</span> Matthew,
            <br />
            <span className="h2">
              a software engineer from Brisbane, Australia
            </span>
          </h1>
          <p>
            I'm constantly learning and improving, this is my corner of the web
            where I share what I have been up to, and try and bring people along
            on my journey.
          </p>
        </div>
        <div className={heroBannerImageContainer}>
          <div className={heroBannerImageWrapper}>
            <Image
              className={heroBannerImage}
              src={HeroImage}
              layout="responsive"
            />
          </div>
        </div>
      </div>
      {/* <Blob className={heroBannerImageBG} /> */}
    </section>
  );
}
