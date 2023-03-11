import React from 'react';
import Link from 'next/link';
import ArrowIcon from '../../public/arrow-right.svg';
import styles from './primary-cta-button.module.scss';

export default function PrimaryCtaButton({
  href,
  children,
  customClasses,
}: {
  href: string;
  children: React.ReactNode;
  customClasses?: {
    primaryCta?: string;
    primaryCtaIcon?: string;
  };
}) {
  // Define default classes
  const classes = {
    primaryCta: styles.primaryCta,
    primaryCtaIcon: styles.primaryCtaIcon,
  };

  // If custom classes are passed in, combine them with the default classes
  if (customClasses) {
    Object.keys(customClasses).forEach((key) => {
      if (typeof customClasses[key] === 'string' && classes[key]) {
        classes[key] = [classes[key], customClasses[key]].join(' ');
      }
    });
  }

  return (
    <Link href={href} className={classes.primaryCta}>
      {children} <ArrowIcon className={classes.primaryCtaIcon} />
    </Link>
  );
}
