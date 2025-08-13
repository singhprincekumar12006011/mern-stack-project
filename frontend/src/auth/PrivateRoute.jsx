import { Navigate } from "react-router-dom";
import Header from "../profilePages/Header";
import { useContext } from "react";
import { StoreContext } from "../contextStore/contextStore";


const PrivateRoute = ({ children }) => {
  const { token } = useContext(StoreContext);
  return token ? (
    <>
      <Header />
      {children}
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
