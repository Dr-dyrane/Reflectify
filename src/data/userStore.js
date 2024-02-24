// data/userStore.js

// Define the key for localStorage
const USER_STORE_KEY = "userStore";

// Function to add a user to localStorage
const addUser = (email, userData) => {
  // Get existing users data from localStorage
  const existingUsersData = JSON.parse(localStorage.getItem(USER_STORE_KEY)) || {};

  // Add or update user data
  existingUsersData[email] = userData;

  // Save updated users data to localStorage
  localStorage.setItem(USER_STORE_KEY, JSON.stringify(existingUsersData));
};

// Function to get a user from localStorage
const getUserByEmail = (email) => {
  // Get users data from localStorage
  const usersData = JSON.parse(localStorage.getItem(USER_STORE_KEY));
  if (usersData && usersData[email]) {
    return usersData[email];
  }
  return null;
};

// Export functions
export { addUser, getUserByEmail };
