import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body h-full">
          <h2 className="card-title">{title}</h2>
          <div className="flex items-center justify-between">
            <h2 className="card-title text-orange-600">Price: ${price}</h2>
            <FaArrowRight className="text-xl text-orange-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
