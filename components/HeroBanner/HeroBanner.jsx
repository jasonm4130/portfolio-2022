import Image from 'next/image';
import React from 'react';
import Blob from './Blob';
import {
  heroBanner,
  heroBannerImage,
  heroBannerImageBG,
  heroBannerImageProfile,
  heroBannerContent,
} from './hero-banner.module.scss';
import profilePic from '../../public/profile-pic.svg';

export default function HeroBanner() {
  return (
    <section className={heroBanner}>
      <div className={heroBannerContent}>
        <h1>Hi, I'm Jason</h1>
      </div>
      <div className={heroBannerImage}>
        <Image
          className={heroBannerImageProfile}
          src={profilePic}
          layout="fill"
        />
        <Blob className={heroBannerImageBG} />
      </div>
    </section>
  );
}
