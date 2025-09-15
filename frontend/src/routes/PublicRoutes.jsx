// PublicRoutes.js
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Footer from "../universityPages/component/Footer";
import Header from "../universityPages/component/Header";
import { StoreContext } from "../contextAPI/contextStore";

const PublicRoutes = ({ children }) => {
  const { token } = useContext(StoreContext);

  return !token ? (
    <>
      <Header />
      {children}
      <Footer />
    </>
  ) : (
    <Navigate to="/protectedHome" />
  );
};

export default PublicRoutes;
