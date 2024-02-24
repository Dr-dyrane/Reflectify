// data/userStore.js

// Simple store for user data
let users = {};

// Function to add a user to the store
const addUser = (email, userData) => {
  users[email] = userData;
};

// Function to get a user by email
const getUserByEmail = (email) => {
  return users[email] || null;
};

// Export functions
export { addUser, getUserByEmail };
