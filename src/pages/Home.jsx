// src/pages/Home.jsx

import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { getAllEntriesByUserId, deleteExistingEntry } from "../api/entryApi";
import EntryCard from "../components/Home/EntryCard";
import { FaSearch, FaPlus } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";

function Home() {
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();
	const [entries, setEntries] = useState([]);

	useEffect(() => {
		// If user is not logged in, navigate to login page
		if (!user) {
			navigate("/login");
		} else {
			fetchEntries();
			console.log(user);
		}
	}, [user, navigate]);

	const fetchEntries = async () => {
		try {
			const allEntries = await getAllEntriesByUserId(user.id);
			setEntries(allEntries);
		} catch (error) {
			console.error("Error fetching entries:", error);
		}
	};

	const handleEdit = (id) => {
		navigate(`/edit-entry/${id}`);
	};

	const handleDelete = async (id) => {
		try {
			await deleteExistingEntry(user.id, id);
			setEntries(entries.filter((entry) => entry.id !== id));
		} catch (error) {
			console.error("Error deleting entry:", error);
		}
	};

	const handleAddEntry = () => {
		navigate("/add-entry");
	};

	return (
		<div className="flex flex-col min-h-screen">
			{/* Header */}
			<section className="p-4 md:p-8">
				<h1 className="text-2xl font-bold text-metal dark:text-white-coco">
					All Entries
				</h1>

				{/* Entry Count */}
				<div className="p-2 text-lg font-thin text-slate-700 dark:text-slate-400">
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
					<EntryCard
						key={entry.id}
						entry={entry}
						onEdit={handleEdit}
						onDelete={handleDelete}
					/>
				))}
			</div>

			{/* Add Button */}
			<div className="fixed bottom-8 right-8">
				<button
					className="p-6 bg-golden text-white rounded-full shadow-lg"
					onClick={handleAddEntry}
				>
					<FaPlus className="text-2xl" />
				</button>
			</div>
		</div>
	);
}

export default Home;
