import PropTypes from "prop-types";

const Button = ({ children, version, type, isDisabled }) => {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`border px-4 py-2 bg-gray-800 rounded-lg text-white cursor-pointer btn btn-${version}`}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  version: "primary",
  type: "submit",
  isDisabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default Button;
