import { FaArrowRight } from "react-icons/fa";
const Card = (props) => {
  return (
    <div
      className={` h-170 rounded-4xl w-90 p-10 mt-10 bg-no-repeat bg-center bg-cover flex flex-col justify-between shrink-0 `}
      style={{ backgroundImage: `url(${props.img})` }}
    >
      <div className="bg-white flex justify-center items-center h-10 w-10 rounded-full text-2xl font-bold">
        {props.index}
      </div>
      <div className="text-2xl text-amber-50 mt-70">
        <p>
          Prime customers, that have access to bank credit and are satisfied
          with the current product
        </p>
      </div>
      <div className="text-3xl text-white text-shadow-black flex justify-between">
        <button
          className={`px-10 rounded-full ${props.color} flex justify-center items-center`}
        >
          {props.feedback}
        </button>
        <button
          className={`h-15 w-15 rounded-full ${props.color} flex justify-center items-center`}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Card;
