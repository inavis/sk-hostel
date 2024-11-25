import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";
export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  let navigate = useNavigate();
  const routeChange = (path, newPage) => {
    if (newPage === "_blank" || path.includes("tel:")) {
      window.open(path, newPage);
    } else {
      navigate(path);
    }
  };

  return (
    <StateContext.Provider value={{ routeChange }}>
      {children}
    </StateContext.Provider>
  );
};
