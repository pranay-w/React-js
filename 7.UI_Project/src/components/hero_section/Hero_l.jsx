import { FiArrowUpRight } from "react-icons/fi";

const Hero_l = () => {
  return (
    <>
      <div className=" w-1/4 flex flex-col justify-between overflow-hidden rounded-4xl p-10">
        <div className="font-bold size-2.5 text-6xl">
          <h1>Prospective Customer Segmentation</h1>
        </div>
        <p className="text-2xl">
          Depending on customer satisfaction and access to banking products,
          potential target audience can be divided into three groups
        </p>
        <div className="p-3">
          <FiArrowUpRight size={100}/>
        </div>
      </div>
    </>
  );
};

export default Hero_l;
