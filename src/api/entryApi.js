// api/entryApi.js

// Example implementation of entry API functions

// Function to fetch all entries (simulated data)
const getAllEntries = () => {
    // Simulated entries data
    const entries = [
      {
        id: 1,
        title: "First Entry",
        date: "2024-02-26",
        image: "https://via.placeholder.com/300",
      },
      {
        id: 2,
        title: "Second Entry",
        date: "2024-02-25",
        image: "https://via.placeholder.com/300",
      },
      // Add more entries as needed
    ];
    return Promise.resolve(entries);
  };
  
  // Export API functions
  export { getAllEntries };
  