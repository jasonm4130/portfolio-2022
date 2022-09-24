import React from 'react';
import styles from './what-i-do.module.scss';
import Cable from '../../public/cable.svg';
import Coding from '../../public/coding.svg';
import Talk from '../../public/talk.svg';

interface IconInterface {
  className?: string;
}

function WhatIDoItem({
  Icon,
  title,
  description,
}: {
  Icon: React.FC<IconInterface>;
  title?: string;
  description?: string;
}) {
  return (
    <div className={styles.item}>
      <Icon className={styles.icon} />
      {title && <h3 className={styles.title}>{title}</h3>}
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}

export default function WhatIDo() {
  return (
    <section className={styles.section}>
      <div className={styles.intro}>
        <h2 className={styles.title}>Who I do?</h2>
        <p className={styles.intro}>
          I am a software engineer and team lead currently working at Squiz. I
          am drawn to engineering as I enjoy the problem solving aspects,
          allowing for creativity in finding and working through the
          requirements. I enjoy working with people who have my back and like
          that we are all working together towards a common goal.
        </p>
      </div>
      <div className={styles.grid}>
        <WhatIDoItem
          Icon={Coding as React.FC<IconInterface>}
          title="Software Engineer"
          description="I am a software engineer focused on delivering maintainable and efficient products that help the companies that I work at as well as their clients are able to deliver high quality projects on time and under budget."
        />
        <WhatIDoItem
          Icon={Talk as React.FC<IconInterface>}
          title="Team Lead"
          description="I am a team lead focused on helping provide those I work with the opportunities to work on what matters to them, while also ensuring that team goals and objectives are meet."
        />
        <WhatIDoItem
          Icon={Cable as React.FC<IconInterface>}
          title="Technology"
          description="Along with my day-to-day roles I also am keenly interested in technology from networking to hardware and all things in between, I love playing and learning about all manner of tech."
        />
      </div>
    </section>
  );
}
