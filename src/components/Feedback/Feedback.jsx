export default function Feedback({
  feedback,
}) {
  const { total, positive } = feedback;
  return (
    <div>
      <ul>
        {total ? (
          <>
            {Object.entries(feedback).map(([key, value], index) =>
              index < 3 ? (
                <li key={index}>
                  {key} : {value}
                </li>
              ) : (
                ''
              )
            )}
            <p>Total: {total}</p>
            <p>Positive: {positive}%</p>
          </>
        ) : (
          <p>No feedback yet</p>
        )}
      </ul>
    </div>
  );
}
