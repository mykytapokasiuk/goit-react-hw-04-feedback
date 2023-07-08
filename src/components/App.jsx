import React, { useEffect, useState } from 'react';
import Section from './Section/Section.js';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.js';
import Statistics from './Statistics/Statistics.js';
import Notification from './Notification/Notification.js';

const App = () => {
  const [goodFeedBack, setGood] = useState(0);
  const [neutralFeedBack, setNeutral] = useState(0);
  const [badFeedBack, setBad] = useState(0);
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [positiveFeedbackPercentage, setPositiveFeedbackPercentage] =
    useState(0);

  const arrayOfOptionKeys = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(goodFeedBack + 1);
        break;
      case 'neutral':
        setNeutral(neutralFeedBack + 1);
        break;
      case 'bad':
        setBad(badFeedBack + 1);
        break;
      default:
        console.log('Array is empty');
        break;
    }
  };

  useEffect(() => {
    setTotalFeedback(() => goodFeedBack + neutralFeedBack + badFeedBack);
  }, [goodFeedBack, neutralFeedBack, badFeedBack]);

  useEffect(() => {
    setPositiveFeedbackPercentage(
      () => +((goodFeedBack * 100) / totalFeedback || 0).toFixed(0)
    );
  }, [goodFeedBack, totalFeedback]);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={arrayOfOptionKeys}
          onLeaveFeedback={onLeaveFeedback}
        />
        {totalFeedback !== 0 ? (
          <Statistics
            good={goodFeedBack}
            neutral={neutralFeedBack}
            bad={badFeedBack}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;
