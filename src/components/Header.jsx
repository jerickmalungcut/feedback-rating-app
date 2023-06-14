import PropTypes from "prop-types";

const Header = ({ text }) => {
  return (
    <header className="w-full bg-white flex justify-center items-center shadow-xl">
      <h3 className="text-xl font-extrabold text-center py-4 uppercase tracking-wider text-gray-700">
        {text}
      </h3>
    </header>
  );
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
