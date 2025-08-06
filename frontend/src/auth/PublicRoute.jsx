import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const token = ''
  return !token ? children : <Navigate to="/profile" />;
};

export default PublicRoute;
