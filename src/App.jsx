import { useEffect, useState } from 'react';

import {
  Feedback,
  Options,
  Description,
  Notification,
} from './components/Index.jsx';

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
  const totalFeedback = feedback.good + feedback.bad + feedback.neutral;
  const positiveFeedbackPercent = Math.round(
    (feedback.good / totalFeedback) * 100
  );

  useEffect(() => {
    window.localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  function updateFeedback(feedbackType) {
    setFeedback(prevFeedback => {
      return {
        ...prevFeedback,
        [feedbackType]: prevFeedback[feedbackType] + 1,
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
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedbackPercent={positiveFeedbackPercent}
        />
      ) : (
        <Notification />
      )}
      {/*<Feedback feedback={feedback} />*/}
    </div>
  );
}
