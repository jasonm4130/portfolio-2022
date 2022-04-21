import React from 'react';
import PropTypes from 'prop-types';
import {
  skillCard,
  skillCardTitle,
  skillCardXps,
} from './skill-card.module.scss';

export default function SkillCard({ language }) {
  const { name, xps } = language;

  return (
    <article className={skillCard}>
      <div className={skillCardTitle}>{name}</div>
      <div className={skillCardXps}>{xps} key strokes</div>
    </article>
  );
}

SkillCard.propTypes = {
  language: PropTypes.shape({
    name: PropTypes.string,
    xps: PropTypes.number,
    newXps: PropTypes.number,
  }),
};
