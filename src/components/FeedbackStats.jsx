import PropTypes from "prop-types";

const FeedbackStats = ({ feedback }) => {
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  //To toFixed is used to add a decimal point while .replace(/[.,]0$  /,'') is used to remove the decimal when it's a whole number
  average.toFixed(1);

  return (
    <div className="flex justify-between py-4">
      <h4>Reviews : {feedback.length}</h4>
      {/* isNaN is used when it reaches 0 it will not output NaN */}
      <h4>Average Rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  );
};

FeedbackStats.propTypes = {
  feedback: PropTypes.array,
};

export default FeedbackStats;
