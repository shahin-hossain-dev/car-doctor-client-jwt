// import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  // const { user, loading } = useContext(AuthContext);
  //custom hook use করা হয়েছে। যেন reptative code কমানো যায়।
  const { user, loading } = useAuth();

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  if (user?.email) {
    return children;
  }
  return <Navigate to={"/login"} replace></Navigate>;
};

export default PrivateRoute;
