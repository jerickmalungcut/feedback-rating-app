import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import FeedbackData from "./data/feedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    //The uuid is used to generate an unique ID
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
    console.log(newFeedback);
  };

  //This will delete the feedback
  const deleteFeedback = (id) => {
    const delArray = feedback.filter((item) => item.id !== id);
    setFeedback(delArray);
  };

  return (
    <Router>
      <>
        <Header text="Rating Application" />
        <div className="container py-8 px-2 mx-auto">
          <FeedbackForm handleAdd={addFeedback} />
          <FeedbackStats feedback={feedback} />
          <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />

          <Switch>
            <Route path="/about" component={AboutPage} />
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;

// const deleteFeedback = (id) => {
//   setFeedback(feedback.filter((item) => item.id !== id));
// };
