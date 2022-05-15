import React from 'react';
import styles from './footer.module.scss';
import Logo from '../../public/logo.svg';
import SocialList from '../SocialList/SocialList';

export default function Footer() {
  return (
    <footer>
      <div className={styles.footerMainBg}>
        <div className={styles.footerMain}>
          <Logo className={styles.logo} />
          <div className={styles.socialSection}>
            <h2 className={styles.socialTitle}>Follow Me</h2>
            <SocialList inverse className={styles.socialList} />
          </div>
        </div>
      </div>
      <div className={styles.copyright}>Jason Matthew, Copyright © 2022</div>
    </footer>
  );
}
