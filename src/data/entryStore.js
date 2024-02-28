// data/entryStore.js

const ENTRY_STORE_KEY = "entryStore";

const addEntry = (userId, entryData) => {
  const entries = JSON.parse(localStorage.getItem(ENTRY_STORE_KEY)) || {};
  if (!entries[userId]) {
    entries[userId] = [];
  }
  entries[userId].push(entryData);
  localStorage.setItem(ENTRY_STORE_KEY, JSON.stringify(entries));
};

const getEntriesByUserId = (userId) => {
  const entries = JSON.parse(localStorage.getItem(ENTRY_STORE_KEY)) || {};
  return entries[userId] || [];
};

const updateEntry = (userId, entryId, updatedEntryData) => {
  const entries = JSON.parse(localStorage.getItem(ENTRY_STORE_KEY)) || {};
  if (entries[userId]) {
    const updatedEntries = entries[userId].map((entry) =>
      entry.id === entryId ? { ...entry, ...updatedEntryData } : entry
    );
    entries[userId] = updatedEntries;
    localStorage.setItem(ENTRY_STORE_KEY, JSON.stringify(entries));
  }
};

const deleteEntry = (userId, entryId) => {
  const entries = JSON.parse(localStorage.getItem(ENTRY_STORE_KEY)) || {};
  if (entries[userId]) {
    const filteredEntries = entries[userId].filter((entry) => entry.id !== entryId);
    entries[userId] = filteredEntries;
    localStorage.setItem(ENTRY_STORE_KEY, JSON.stringify(entries));
  }
};

export { addEntry, getEntriesByUserId, updateEntry, deleteEntry };
