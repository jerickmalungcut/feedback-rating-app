import { useState } from "react";

import PropTypes from "prop-types";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

const FeedbackForm = ({ handleAdd }) => {
  const [textInput, setTextInput] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextInput = (e) => {
    e.preventDefault();

    if (textInput === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (textInput !== "" && textInput.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("You must at least input 10 characters");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setTextInput(e.target.value);
  };

  //Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Its working!");

    if (textInput.trim().length > 10) {
      const newFeedback = {
        text: textInput,
        rating: rating,
      };

      console.log(newFeedback.rating);

      handleAdd(newFeedback);

      setTextInput("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        {/* Heading */}
        <h2 className="text-center text-2xl font-bold text-gray-600">
          How would you rate your service with us?
        </h2>
        {/* @todo rating -select component */}
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-container flex justify-between my-6 border border-gray-900 py-1 px-1 rounded-lg w-full max-w-2xl mx-auto">
          <input
            onChange={handleTextInput}
            type="text"
            placeholder="Write a review"
            className="w-full outline-none mx-2"
            value={textInput}
          />
          <Button isDisabled={btnDisabled} type="submit">
            Submit
          </Button>
        </div>

        {/* This will output the error message */}
        {message && (
          <div className="message text-center text-red-700">{message}</div>
        )}
      </form>
    </Card>
  );
};

FeedbackForm.propTypes = {
  handleAdd: PropTypes.func,
};

export default FeedbackForm;
