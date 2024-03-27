import css from './Options.module.css';

export default function Options({ feedback, updateFeedBack, resetFeedback }) {
  const feedbackValues = Object.keys(feedback);

  return (
    <div className={css.container}>
      <button onClick={() => updateFeedBack(feedbackValues[0])}>
        {feedbackValues[0]}
      </button>
      <button onClick={() => updateFeedBack(feedbackValues[1])}>
        {feedbackValues[1]}
      </button>
      <button onClick={() => updateFeedBack(feedbackValues[2])}>
        {feedbackValues[2]}
      </button>
      {feedback.total ? <button onClick={resetFeedback}>Reset</button> : ''}
    </div>
  );
}
