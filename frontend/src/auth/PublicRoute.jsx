import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../contextStore/contextStore';

const PublicRoute = ({ children }) => {
  const { token } = useContext(StoreContext);
  return !token ? children : <Navigate to="/profile" />;
};

export default PublicRoute;
