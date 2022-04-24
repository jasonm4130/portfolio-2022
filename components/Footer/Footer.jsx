import Link from 'next/link';
import React, { useState } from 'react';
import {
  section,
  content,
  social,
  title,
  intro,
  subTitle,
  socialList,
  socialListItem,
  link,
  copyright,
  form,
  formWrapper,
  submit,
  submitWrapper,
  submitIcon,
} from './footer.module.scss';
import ArrowIcon from '../../public/arrow-right.svg';

export default function Footer() {
  // Setup our state for the form
  const [formState, setFormState] = useState({
    email: '',
    name: '',
    message: '',
  });

  function handleFormChange(event) {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  }

  const socials = [
    {
      name: 'Twitter',
      link: 'https://twitter.com/jasonm4130',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/jasonm4130/',
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/jasonm4130',
    },
    {
      name: 'Github',
      link: 'https://github.com/jasonm4130',
    },
  ];

  return (
    <footer className={section}>
      <div className={content}>
        <h2 className={title}>Stay in touch</h2>
        <p className={intro}>
          While I'm not actively seeking work right now, I'm always happy to
          have a chat, feel free to get in touch.
        </p>
      </div>
      <div className={social}>
        <h3 className={subTitle}>Follow me on</h3>
        <ul className={socialList}>
          {socials.map((social) => (
            <li key={social.name} className={socialListItem}>
              <Link href={social.link}>
                <a className={link}>{social.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={formWrapper}>
        <form
          className={form}
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
          <div className={submitWrapper}>
            <button className={`primary-cta ${submit}`} type="submit">
              Say Hi <ArrowIcon className={`primary-cta__icon ${submitIcon}`} />
            </button>
          </div>
        </form>
      </div>
      <div className={copyright}>
        Jason Matthew, Copyright © {new Date().getFullYear()}
      </div>
    </footer>
  );
}
