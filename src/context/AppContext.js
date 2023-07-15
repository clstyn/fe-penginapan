import React, { createContext, useReducer, useEffect } from "react";

const initialState = {
  isLogged: false,
  userData: null,
  myPropertyData: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLogged: true,
        userData: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isLogged: false,
        userData: null,
      };
    case "SET_PENGINAPAN_DATA":
      return {
        ...state,
        myPropertyData: action.payload,
      };
    default:
      return state;
  }
};

const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = (val) => {
    dispatch({ type: "LOGIN", payload: val });
  };

  const logout = (val) => {
    dispatch({ type: "LOGOUT", payload: val });
  };

  const setPenginapanData = (val) => {
    dispatch({ type: "SET_PENGINAPAN_DATA", payload: val });
  };

  return (
    <AppContext.Provider value={{ ...state, login, logout, setPenginapanData }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
