import { createContext, useEffect } from "react";

const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  

  const token = localStorage.getItem("token");
  


  const contextValue = {
    token
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext };
export default StoreContextProvider;
