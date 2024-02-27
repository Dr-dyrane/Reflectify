// api/entryApi.js

import { addEntry, getEntriesByUserId, updateEntry, deleteEntry } from "../data/entryStore";

const addNewEntry = (userId, entryData) => {
  addEntry(userId, entryData);
};

const getAllEntriesByUserId = (userId) => {
  return getEntriesByUserId(userId);
};

const updateExistingEntry = (userId, entryId, updatedEntryData) => {
  updateEntry(userId, entryId, updatedEntryData);
};

const deleteExistingEntry = (userId, entryId) => {
  deleteEntry(userId, entryId);
};

export { addNewEntry, getAllEntriesByUserId, updateExistingEntry, deleteExistingEntry };
