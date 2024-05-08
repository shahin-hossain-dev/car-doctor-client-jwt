// import { useEffect } from "react";
// import { useState } from "react";
import useServices from "../../../hooks/useServices";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = useServices(); //custom hook use করা হয়েছে।
  // const [services, setServices] = useState([]);
  // useEffect(() => {
  //   fetch("https://car-doctor-server-jwt-eight.vercel.app/services")
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, []);

  return (
    <div>
      <div className="text-center md:w-1/2 mx-auto mt-12 md:mt-24 mb-12 space-y-4">
        <h4 className="text-2xl text-orange-500 font-bold">Service</h4>
        <h2 className="text-4xl font-bold">Our Services </h2>
        <p className="">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.{" "}
        </p>
      </div>
      <div>Services : {services.length}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
