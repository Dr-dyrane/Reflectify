import React, { createContext, useContext, useState, useEffect } from 'react';
import { registerUser, loginUser } from '../api/userApi';


const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initial user state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check local storage for user data upon app initialization
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  // Function to handle user login
  const login = (email, password) => {
    const userData = loginUser(email, password);
    if (userData) {
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
    } else {
      throw new Error('Invalid email or password');
    }
  };

  // Function to handle user registration
  const register = (userData) => {
    registerUser(userData);
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Function to handle user logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
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
