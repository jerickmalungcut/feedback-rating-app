import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-3 max-w-[600px] w-full mx-auto text-gray-700">
      <h2 className="text-2xl">About Page - Feedback Rating App</h2>
      <h4 className="text-lg">Created by JRKM</h4>
      <p>
        Welcome to the Feedback Rating Application! This application, developed
        by JRKM, serves as a helpful starter for your React.js projects. It
        enables users to rate items or experiences on a scale from 1 to 10,
        accompanied by optional messages or comments.
      </p>
      <h4 className="text-lg">Key Features:</h4>
      <ul className="list-disc ml-4">
        <li>
          Rating Scale: Easily assign a score between 1 and 10 to provide
          feedback on various aspects
        </li>
        <li>
          Comment Section: Share your thoughts, suggestions, or opinions by
          leaving optional messages along with your rating.
        </li>
        <li>
          Edit and Delete: Take control of your feedback with the ability to
          edit or remove your previous ratings and comments.
        </li>
        <li>
          Review Total and Average: Keep track of the overall performance or
          satisfaction level through the aggregated review data, including the
          total number of reviews and the average rating.
        </li>
      </ul>
      <p>
        Whether you&apos;re building a website, application, or any project that
        requires user feedback and ratings, this Feedback Rating Application can
        jumpstart your development process. Enjoy the simplicity and flexibility
        it offers to enhance user engagement and gather valuable insights.
      </p>
      <p>
        Thank you for choosing this application created by JRKM. We hope it
        serves as a valuable tool in your journey towards building exceptional
        user experiences!
      </p>
      <Link to="/feedback-rating-app/" className="text-blue-500">
        Go back
      </Link>
    </div>
  );
};

export default AboutPage;
