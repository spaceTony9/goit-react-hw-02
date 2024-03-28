export default function Feedback({
  feedback,
  totalFeedback,
  positiveFeedbackPercent,
}) {
  return (
    <div>
      <ul>
        {Object.entries(feedback).map(([key, value], index) => (
          <li key={index}>
            {key} : {value}
          </li>
        ))}
        <p>Total: {totalFeedback}</p>
        <p>Positive: {positiveFeedbackPercent}%</p>
      </ul>
    </div>
  );
}
