// src/pages/Logout.jsx

import React, { useEffect } from 'react';
import { useAuth } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Call the logout function when the component mounts
    logout();
    // Redirect to the landing page after logout
    navigate('/');
  }, [logout, navigate]);

  // Render nothing or a message if needed
  return null;
};

export default Logout;