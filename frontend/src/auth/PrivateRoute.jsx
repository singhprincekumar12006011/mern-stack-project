import { Navigate } from "react-router-dom";
import Header from "../components/Header";

const PrivateRoute = ({ children }) => {
  const token = "";
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
