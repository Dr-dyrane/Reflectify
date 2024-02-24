// api/userApi.js

import { addUser, getUserByEmail } from '../data/userStore';

// Function to register a new user
const registerUser = (userData) => {
  const { email } = userData;
  addUser(email, userData);
};

// Function to login a user
const loginUser = (email, password) => {
  const user = getUserByEmail(email);
  if (user && user.password === password) {
    return user;
  }
  return null;
};

// Function to logout a user (not needed in this scenario)

// Export API functions
export { registerUser, loginUser };
