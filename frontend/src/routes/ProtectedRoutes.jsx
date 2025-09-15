import { useContext, useEffect } from "react";
import { StoreContext } from "../contextAPI/contextStore";

const ProtectedRoutes = ({ children }) => {
  const token = useContext(StoreContext);
  return token ? (
    <>
      {children}
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoutes;
