import React from 'react';
import PropTypes from 'prop-types';
import {
  skillCard,
  skillCardTitle,
  skillCardLevel,
  skillCardXps,
} from './skill-card.module.scss';

const LEVEL_FACTOR = 0.025;

export default function SkillCard({ language }) {
  const { name, xps } = language;

  function getLevel(xps) {
    return Math.floor(LEVEL_FACTOR * Math.sqrt(xps));
  }

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
