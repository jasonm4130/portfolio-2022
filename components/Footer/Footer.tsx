import React from 'react';
import styles from './footer.module.scss';
import Logo from '../../public/logo.svg';
import SocialList from '../SocialList/SocialList';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo className={styles.logo} />
      <div className={styles.socialSection}>
        <h2 className={styles.socialTitle}>Follow Me</h2>
        <SocialList className={styles.socialList} />
      </div>
    </footer>
  );
}
