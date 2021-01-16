/* eslint-disable react/prop-types */
/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable object-curly-newline */
/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ value, text, color }) => (
  <div className="rating">
    <span>
      <i
        style={{ color }}
        className={value >= 1 ? 'bi bi-star-fill' : value >= 0.5 ? 'bi bi-star-half' : 'bi bi-star'}
      />
    </span>
    <span>
      <i
        style={{ color }}
        className={value >= 2 ? 'bi bi-star-fill' : value >= 1.5 ? 'bi bi-star-half' : 'bi bi-star'}
      />
    </span>
    <span>
      <i
        style={{ color }}
        className={value >= 3 ? 'bi bi-star-fill' : value >= 2.5 ? 'bi bi-star-half' : 'bi bi-star'}
      />
    </span>
    <span>
      <i
        style={{ color }}
        className={value >= 4 ? 'bi bi-star-fill' : value >= 3.5 ? 'bi bi-star-half' : 'bi bi-star'}
      />
    </span>
    <span>
      <i
        style={{ color }}
        className={value >= 5 ? 'bi bi-star-fill' : value >= 4.5 ? 'bi bi-star-half' : 'bi bi-star'}
      />
    </span>
    <span className=" ps-1">{text && text}</span>
  </div>
);

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
};

Rating.defaultProps = {
  color: '#0d6efd'
};

export default Rating;
