import PropTypes from "prop-types";

const Card = ({ children }) => {
  // return (
  //   <div
  //     className={`card border-2 border-gray-800 rounded-lg py-6 px-4 mb-4 shadow-lg relative ${
  //       reverse && "reverse"
  //     }`}
  //   >
  //     {children}
  //   </div>
  // );
  return (
    <div className="card border-2 border-gray-800 rounded-lg py-6 px-4 mb-4 shadow-lg relative">
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.array.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
