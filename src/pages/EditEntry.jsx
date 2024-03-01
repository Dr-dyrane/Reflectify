// src/pages/EditEntry.jsx

import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { updateExistingEntry, getEntryById } from "../api/entryApi";
import { FaChevronLeft, FaCheck } from "react-icons/fa";
import { SiAddthis } from "react-icons/si";
import Dropdown from "../components/Entry/Dropdown"; // Import the Dropdown component
import dropdownData from "../components/Entry/dropdownData"; // Import the dropdownData array

const EditEntry = () => {
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();
	const { id } = useParams();

	const [entryData, setEntryData] = useState({
		title: "",
		date: new Date().toISOString(),
		image: "/logo.png",
		content: "",
		mood: "",
		journalCategory: "",
		important: false,
		// Add more entry data fields as needed
	});

	useEffect(() => {
		if (user && user?.id) {
			getEntryById(user?.id, id)
				.then((data) => {
					if (data) {
						setEntryData(data);
					} else {
						console.log("Entry not found or data is undefined");
						// Handle the case where the entry is not found or data is undefined
						// For example, you could redirect the user to a different page or display an error message
					}
				})
				.catch((error) => {
					console.error("Error fetching entry:", error);
					// Handle the error gracefully (e.g., display an error message)
				});
		}
	}, [user]);

	if (!entryData) {
		return <div>Loading...</div>;
	}

	const handleChange = (e) => {
		const { name, value } = e.target;
		setEntryData({ ...entryData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Update the entry with the current user ID and entry ID
		updateExistingEntry(user.id, id, entryData);
		// Redirect to home page
		navigate("/home");
	};

	// Effect to handle keyboard visibility
	useEffect(() => {
		const handleResize = () => {
			const windowHeight = window.innerHeight;
			const contentHeight = document.getElementById("content").offsetHeight;
			const keyboardVisible = windowHeight < contentHeight;
			if (keyboardVisible) {
				// Adjust layout for keyboard visibility
				document.getElementById("content").style.bottom = "40vh";
			} else {
				// Reset layout when keyboard is hidden
				document.getElementById("content").style.bottom = "0";
			}
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="container text-golden font-thin mx-auto p-4 overflow-auto relative min-h-screen space-y-4">
			{/* Header UI */}
			<div className="grid grid-cols-2 items-center justify-between space-x-12">
				{/* Title Input */}
				<div className="col-span-1 flex space-x-4">
					{/* Go Back Button */}
					<button onClick={() => navigate(-1)} className="text-golden">
						<FaChevronLeft className="text-xl" />
					</button>
					<input
						type="text"
						style={{
							width: "calc(100% - 8px)",
							backgroundColor: "transparent",
						}}
						name="title"
						value={entryData.title}
						onChange={handleChange}
						placeholder="Title"
						className="p-2 focus:outline-none"
						autoFocus
					/>
				</div>
				{/* Dropdowns */}
				<Dropdown dropdownData={dropdownData} />
			</div>

			{/* Image Input */}
			<div className="relative w-full mb-8">
				<img
					src={entryData.image}
					alt="Entry Image"
					className="w-full h-48 object-cover mb-4 rounded-[32px] z-10"
				/>
				<label
					htmlFor="imageInput"
					className="absolute bottom-0 right-0 cursor-pointer text-golden"
				>
					<SiAddthis size={40} />
					<input
						type="file"
						id="imageInput"
						accept="image/*"
						className="hidden"
						onChange={(e) =>
							setEntryData({
								...entryData,
								image: URL.createObjectURL(e.target.files[0]),
							})
						}
					/>
				</label>
			</div>

			{/* Content Input */}
			<textarea
				id="content"
				name="content"
				value={entryData.content}
				onChange={handleChange}
				autoFocus
				placeholder="Start reflecting..."
				className="w-full h-[480px] p-8 bg-transparent rounded-[32px] focus:outline-none"
			/>

			{/* Save Button */}
			<button
				type="submit"
				onClick={handleSubmit}
				className="absolute bottom-8 right-8 bg-golden text-white p-6 rounded-full shadow-lg"
			>
				<FaCheck />
			</button>
		</div>
	);
};

export default EditEntry;
