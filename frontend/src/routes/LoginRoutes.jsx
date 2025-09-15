// LoginRoutes.js
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { StoreContext } from "../contextAPI/contextStore";

const LoginRoutes = ({ children }) => {
  const { token } = useContext(StoreContext);

  return !token ? <>{children}</> : <Navigate to="/protectedHome" />;
};

export default LoginRoutes;
