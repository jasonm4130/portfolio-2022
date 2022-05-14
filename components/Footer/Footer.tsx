import React, { useState } from 'react';
import styles from './footer.module.scss';
import ArrowIcon from '../../public/arrow-right.svg';
import SocialList from '../SocialList/SocialList';

export default function Footer() {
  // Setup our state for the form
  const [formState, setFormState] = useState({
    email: '',
    name: '',
    message: '',
  });

  function handleFormChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target as
      | HTMLInputElement
      | HTMLTextAreaElement;
    setFormState({ ...formState, [name]: value });
  }

  return (
    <footer className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>Stay in touch</h2>
        <p className={styles.intro}>
          While I'm not actively seeking work right now, I'm always happy to
          have a chat, feel free to get in touch.
        </p>
      </div>
      <div className={styles.social}>
        <h3 className={styles.subTitle}>Follow me on</h3>
        <SocialList />
      </div>
      <div className={styles.formWrapper}>
        <form
          className={styles.form}
          method="post"
          action="https://api.formcake.com/api/form/9222c758-0dfc-4823-b5af-239a62792900/submission"
        >
          <label htmlFor="name">First name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleFormChange}
            value={formState.name}
            autoComplete="name"
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleFormChange}
            value={formState.email}
            autoComplete="email"
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            onChange={handleFormChange}
            value={formState.message}
            required
          />
          <div className={styles.submitWrapper}>
            <button className={`primary-cta ${styles.submit}`} type="submit">
              Say Hi{' '}
              <ArrowIcon className={`primary-cta__icon ${styles.submitIcon}`} />
            </button>
          </div>
        </form>
      </div>
      <div className={styles.copyright}>
        Jason Matthew, Copyright © {new Date().getFullYear()}
      </div>
    </footer>
  );
}
