// api/entryApi.js

import { addEntry, getEntriesByUserId, updateEntry, deleteEntry } from "../data/entryStore";
import { v4 as uuidv4 } from 'uuid';

// Function to add a new entry
const addNewEntry = (userId, entryData) => {
  const entryWithId = { id: uuidv4(), ...entryData }; // Generate unique ID for the entry
  addEntry(userId, entryWithId);
};

// Function to retrieve all entries for a given userId
const getAllEntriesByUserId = (userId) => {
  return getEntriesByUserId(userId);
};

// Function to retrieve an entry by its ID
const getEntryById = (userId, entryId) => {
  return new Promise((resolve, reject) => {
    const entries = getEntriesByUserId(userId);
    const entry = entries.find((entry) => entry.id === entryId);
    if (entry) {
      resolve(entry); // Entry found, resolve with the entry
    } else {
      reject(new Error(`Entry with ID ${entryId} not found`)); // Entry not found, reject with an error
    }
  });
};

// Function to update an existing entry
const updateExistingEntry = (userId, entryId, updatedEntryData) => {
  updateEntry(userId, entryId, updatedEntryData);
};

// Function to delete an existing entry
const deleteExistingEntry = (userId, entryId) => {
  deleteEntry(userId, entryId);
};

export { addNewEntry, getAllEntriesByUserId, getEntryById, updateExistingEntry, deleteExistingEntry };
