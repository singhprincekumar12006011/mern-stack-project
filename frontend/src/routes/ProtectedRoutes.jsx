// ProtectedRoutes.js
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { StoreContext } from "../contextAPI/contextStore";

const ProtectedRoutes = ({ children }) => {
  const { token } = useContext(StoreContext);

  return token ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
