import React from 'react';
import styles from './skill-card.module.scss';
import HTML from '../../public/html.svg';
import JS from '../../public/js.svg';
import Markdown from '../../public/markdown.svg';
import PHP from '../../public/php.svg';
import SASS from '../../public/sass.svg';
import Code from '../../public/code.svg';
import TS from '../../public/typescript.svg';
import JSON from '../../public/json.svg';
import Dart from '../../public/dart.svg';

interface IconInterface {
  className?: string;
}

export default function SkillCard({
  language,
}: {
  language: { name: string; xps: number };
}) {
  const { name, xps } = language;

  // Define a var to hold our icon
  let Icon;

  // Get the icon
  switch (name) {
    case 'JavaScript':
      Icon = JS as React.FC<IconInterface>;
      break;
    case 'SASS':
      Icon = SASS as React.FC<IconInterface>;
      break;
    case 'HTML':
      Icon = HTML as React.FC<IconInterface>;
      break;
    case 'Markdown':
      Icon = Markdown as React.FC<IconInterface>;
      break;
    case 'PHP':
      Icon = PHP as React.FC<IconInterface>;
      break;
    case 'JSON':
      Icon = JSON as React.FC<IconInterface>;
      break;
    case 'TypeScript':
      Icon = TS as React.FC<IconInterface>;
      break;
    case 'Dart':
      Icon = Dart as React.FC<IconInterface>;
      break;

    default:
      Icon = Code as React.FC<IconInterface>;
      break;
  }

  return (
    <article className={styles.card}>
      <Icon className={styles.icon} />
      <div className={styles.title}>{name}</div>
      <div className={styles.lead}>
        {xps.toLocaleString('en-US')} key strokes
      </div>
    </article>
  );
}
