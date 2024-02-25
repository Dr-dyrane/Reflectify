// src/pages/Home.jsx

import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { getAllEntries } from "../api/entryApi";
import EntryCard from "../components/Home/EntryCard";
import { FaSearch, FaCog, FaPlus } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";

function Home() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // If user is not logged in, navigate to login page
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]); // Ensure navigate is added as a dependency

  // If user is not logged in, return null (prevent rendering anything before redirection)
  if (!user) {
    return null;
  }

  const [entries, setEntries] = useState([]);

  useEffect(() => {
    // Fetch all entries when the component mounts
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const allEntries = await getAllEntries();
      setEntries(allEntries);
    } catch (error) {
      console.error("Error fetching entries:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="p-4 md:p-8">
        <h1 className="text-2xl font-bold text-metal dark:text-white-coco">
          All Entries
        </h1>

        {/* Entry Count */}
        <div className="p-2 bg-white dark:bg-eerie text-lg font-thin text-slate-700 dark:text-slate-400">
          <h2 className="">{entries.length} entries</h2>
          {entries.length === 0 && <p>No entries found.</p>}
        </div>
      </section>

      {/* Navigation Bar */}
      <div className="flex justify-end items-center p-4">
        <div className="flex items-center space-x-4 text-slate-700 dark:text-slate-200 text-xl">
          <FaSearch className="cursor-pointer" />
          <SlOptionsVertical className="cursor-pointer" />
        </div>
      </div>

      {/* Entry Cards */}
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {entries.map((entry) => (
          <EntryCard key={entry.id} entry={entry} />
        ))}
      </div>

      {/* Add Button */}
      <div className="fixed bottom-8 right-8">
        <button className="p-6 bg-golden text-white rounded-full shadow-lg">
          <FaPlus className="text-2xl" />
        </button>
      </div>
    </div>
  );
}

export default Home;
