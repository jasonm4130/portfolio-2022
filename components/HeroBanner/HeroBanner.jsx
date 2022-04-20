import Image from 'next/image';
import React from 'react';
import Blob from './Blob';
import {
  heroBannerWrapper,
  heroBanner,
  heroBannerImage,
  heroBannerImageBG,
  heroBannerImageProfile,
  heroBannerContent,
} from './hero-banner.module.scss';
import ProfilePic from './ProfilePic';

export default function HeroBanner() {
  return (
    <section className={heroBannerWrapper}>
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
        <div className={heroBannerImage}>
          <ProfilePic className={heroBannerImageProfile} />
        </div>
      </div>
      {/* <Blob className={heroBannerImageBG} /> */}
    </section>
  );
}
