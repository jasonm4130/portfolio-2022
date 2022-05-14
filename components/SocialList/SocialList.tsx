import Link from 'next/link';
import React from 'react';
import Twitter from '../../public/twitter.svg';
import LinkedIn from '../../public/linkedin.svg';
import Instagram from '../../public/instagram.svg';
import GitHub from '../../public/github.svg';
import Email from '../../public/email.svg';
import styles from './social-list.module.scss';

interface IconInterface {
  className?: string;
}

export default function SocialList() {
  const socials = [
    {
      name: 'Twitter',
      link: 'https://twitter.com/jasonm4130',
      Icon: Twitter as React.FC<IconInterface>,
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/jasonm4130/',
      Icon: LinkedIn as React.FC<IconInterface>,
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/jasonm4130',
      Icon: Instagram as React.FC<IconInterface>,
    },
    {
      name: 'Github',
      link: 'https://github.com/jasonm4130',
      Icon: GitHub as React.FC<IconInterface>,
    },
    {
      name: 'email',
      link: 'mailto:jasonm4130@gmail.com',
      Icon: Email as React.FC<IconInterface>,
    },
  ];

  return (
    <ul className={styles.list}>
      {socials.map((social) => {
        const { name, link, Icon } = social;
        return (
          <li key={name} className={styles.listItem}>
            <Link href={link}>
              <a className={styles.link}>
                <Icon className={styles.icon} />
                <span className="sr-only">{name}</span>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
