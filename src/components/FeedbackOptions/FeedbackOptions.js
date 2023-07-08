import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttonColors = [css.good, css.neutral, css.bad];
  return (
    <div className={css.feedbackOptions}>
      <ul className={css.feedbackOptionslist}>
        {options.map((option, index) => (
          <li key={option} className={css.feedbackOptionsListItem}>
            <button
              type="button"
              className={buttonColors[index]}
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
