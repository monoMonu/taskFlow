import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const isAuthenticated = false;
  if (window.localStorage.getItem("token")) {
    isAuthenticated = true;
    console.log(window.localStorage.getItem("token"))
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
