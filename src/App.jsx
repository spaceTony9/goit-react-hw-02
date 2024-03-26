import React, { useEffect, useState } from 'react';

import { Feedback, Options, Description } from './Components/Index.jsx';

export default function App() {
  const feedbackEmpty = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [feedback, setFeedback] = useState(() => {
    const savedObject = window.localStorage.getItem('feedback');
    if (savedObject !== null) {
      return JSON.parse(savedObject);
    }
    return feedbackEmpty;
  });

  useEffect(() => {
    window.localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  function updateFeedback(feedbackType) {
    setFeedback(prevFeedback => {
      const updatedFeedback = {
        ...prevFeedback,
        [feedbackType]: prevFeedback[feedbackType] + 1,
      };

      const totalFeedback =
        updatedFeedback.good + updatedFeedback.bad + updatedFeedback.neutral;
      const positivePercent = Math.round(
        (updatedFeedback.good / totalFeedback) * 100
      );
      return {
        ...updatedFeedback,
        total: totalFeedback,
        positive: positivePercent,
      };
    });
  }

  function resetFeedback() {
    setFeedback(feedbackEmpty);
  }

  return (
    <div>
      <Description />
      <Options
        updateFeedBack={updateFeedback}
        feedback={feedback}
        // totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      <Feedback
        feedback={feedback}
        // totalFeedback={totalFeedback}
        // totalFeedbackPersent={positivePersent}
      />
    </div>
  );
}
