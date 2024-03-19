import PropTypes from "prop-types";
import Feture from "../Feture/Feture";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-sky-400 rounded-lg p-5 shadow-lg flex flex-col">
      <h2 className="text-center">
        <span className="text-5xl">{price}</span>
        <span className="text-xl">/mon</span>
      </h2>
      <h4 className="text-3xl text-center my-4">{name}</h4>
    <div className="pl-8 flex-grow">
    {features.map((feture,idx) => (
        <Feture key={idx} feture={feture}></Feture>
      ))}
    </div>
      <button className="mt-10 bg-green-500 py-4 w-full rounded-lg shadow-md hover:bg-green-800">Buy Now</button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object.isRequired,
};

export default PriceOption;
