import { createContext, useEffect, useState } from "react";

const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load token + role once when app starts
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedRole = localStorage.getItem("role");

    if (savedToken) setToken(savedToken);
    if (savedRole) setRole(savedRole);

    setLoading(false);
  }, []);

  // Save token to localStorage whenever it changes
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token"); // cleanup on logout
    }
  }, [token]);

  // Save role to localStorage whenever it changes
  useEffect(() => {
    if (role) {
      localStorage.setItem("role", role);
    } else {
      localStorage.removeItem("role"); // cleanup on logout
    }
  }, [role]);

  const contextValue = {
    token,
    setToken,
    role,
    setRole,
    loading,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext };
export default StoreContextProvider;
