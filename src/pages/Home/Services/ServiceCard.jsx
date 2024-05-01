import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
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
            <Link to={`/checkout/${_id}`}>
              <FaArrowRight className="text-xl text-orange-600" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
