import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  //   console.log(user);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  console.log(bookings);
  return (
    <div>
      <h2>Bookings Page</h2>
    </div>
  );
};

export default Bookings;
