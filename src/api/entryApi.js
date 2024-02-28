// api/entryApi.js

import { addEntry, getEntriesByUserId, updateEntry, deleteEntry } from "../data/entryStore";

// Function to add a new entry
const addNewEntry = (userId, entryData) => {
  addEntry(userId, entryData);
};

// Function to retrieve all entries for a given userId
const getAllEntriesByUserId = (userId) => {
  return getEntriesByUserId(userId);
};

// Function to retrieve an entry by its ID
const getEntryById = (userId, entryId) => {
  const entries = getEntriesByUserId(userId);
  return entries.find((entry) => entry.id === entryId);
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
