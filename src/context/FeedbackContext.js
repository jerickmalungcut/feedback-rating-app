import { createContext, useState } from "react";
import PropTypes from "prop-types";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This item is from context",
      rating: 10,
    },
  ]);

  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

FeedbackContext.propTypes = {
  children: PropTypes.object,
};

export default FeedbackContext;
