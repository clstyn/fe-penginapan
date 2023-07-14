import React, { useState, useContext, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [userData, setUserData] = useState(null);

  const login = (user) => {
    setIsLogged(true);
    setUserData(user);
  };

  const logout = () => {
    setIsLogged(false);
    setUserData(null);
  };

  return (
    <AuthContext.Provider value={{ isLogged, userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
