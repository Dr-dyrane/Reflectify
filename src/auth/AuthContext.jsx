// src/auth/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext({});


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initial user state

  const login = (userData) => {
    // Implement login logic here
    setUser(userData);
  };

  const logout = () => {
    // Implement logout logic here
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth, AuthContext };
