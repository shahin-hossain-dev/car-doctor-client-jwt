import { useEffect, useState } from "react";

const useServices = (ace) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/services?sort=${ace ? "acc" : "desc"}`) //sort query
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [ace]);
  return services;
};

export default useServices;
