import { createContext, useState, useEffect } from "react";

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState(() => {
    return localStorage.getItem("token") || null;
  });

  //store user details from localstorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Invalid user data in localStorage", e);
        setUser(""); // reset to empty or null
      }
    }
  }, [token]);

  // Optional: Sync token to localStorage when it changes
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const contextValue = {
    token,
    setToken,
    user,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
