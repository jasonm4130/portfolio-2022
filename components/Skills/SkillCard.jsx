import React from 'react';
import PropTypes from 'prop-types';
import { title } from './skill-card.module.scss';

export default function SkillCard({ language }) {
  const { name, xps } = language;

  return (
    <article>
      <div className={title}>{name}</div>
      <div>{xps} key strokes</div>
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
