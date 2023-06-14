import { useState } from "react";
import FeedbackData from "./data/feedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    const delArray = feedback.filter((item) => item.id !== id);
    setFeedback(delArray);
  };

  return (
    <>
      <Header text="Rating Application" />
      <div className="container py-8 px-2 mx-auto">
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;

// const deleteFeedback = (id) => {
//   setFeedback(feedback.filter((item) => item.id !== id));
// };
