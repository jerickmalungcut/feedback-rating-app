import PropTypes from "prop-types";
import Card from "./shared/Card";
import { HiOutlineX, HiOutlinePencil } from "react-icons/hi";

const FeedbackItem = ({ item, handleDelete }) => {
  return (
    <Card reverse={true}>
      <div className="num-display absolute -top-2 -left-2 bg-gray-800 text-white p-2 rounded-full h-[40px] w-[40px] flex justify-center items-center">
        <span className="font-bold">{item.rating}</span>
      </div>
      <div className="flex gap-4 absolute top-3 right-4">
        <button>
          <HiOutlinePencil />
        </button>
        <button onClick={() => handleDelete(item.id)}>
          <HiOutlineX />
        </button>
      </div>
      <div className="text-display text-center">{item.text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  item: PropTypes.object,
  handleDelete: PropTypes.func.isRequired,
};

export default FeedbackItem;
