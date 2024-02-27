// data/userStore.js

const USER_STORE_KEY = "userStore";

// Function to add a user to localStorage
const addUser = (userData) => {
  // Get existing users data from localStorage
  const existingUsersData = JSON.parse(localStorage.getItem(USER_STORE_KEY)) || [];
  
  // Generate unique ID for the user
  const userId = Date.now();
  const userWithId = { id: userId, ...userData };

  // Add or update user data
  const updatedUsersData = [...existingUsersData, userWithId];

  // Save updated users data to localStorage
  localStorage.setItem(USER_STORE_KEY, JSON.stringify(updatedUsersData));
};

// Function to get a user from localStorage by email
const getUserByEmail = (email) => {
  const usersData = JSON.parse(localStorage.getItem(USER_STORE_KEY)) || [];
  return usersData.find((user) => user.email === email);
};

// Export functions
export { addUser, getUserByEmail };
