import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000/",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    // interceptor হলো request client side থেকে  server side অথবা server side থেকে client side   আদান-প্রদান করার সময় request কে বাধা দেয়া. এবং বাধা দিয়ে কিছু set করে দিতে পারে।

    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("error tracked in interceptor", error.response.status);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("logout the user");
          logOut()
            .then(() => {
              navigate("/login");
            })
            .catch((error) => console.log(error.message));
        }
      }
    );
  }, []);
  return axiosSecure;
};

export default useAxiosSecure;
