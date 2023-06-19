import { Link } from "react-router-dom";
import { FaQuestion } from "react-icons/fa";

const AboutIconLink = () => {
  return (
    <div className="absolute bottom-8 right-8 cursor-pointer">
      <Link to="/feedback-rating-app/about">
        <FaQuestion size={22} title="This is the about page" />
      </Link>
    </div>
  );
};

export default AboutIconLink;
