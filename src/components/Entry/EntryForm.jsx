import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown"; // Import the Dropdown component
import dropdownData from "./dropdownData"; // Import the dropdownData array
import ImageInput from "./ImageInput";
import useKeyboardVisibility from "../../hooks/useKeyboardVisibility";
import { FaCheck, FaChevronLeft } from "react-icons/fa";

const EntryForm = ({ entryId, fetchEntryById, saveEntry }) => {
	const navigate = useNavigate();
	const { keyboardHeight, isKeyboardVisible } = useKeyboardVisibility();

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
		if (entryId) {
			fetchEntryById(entryId)
				.then((data) => {
					if (data) {
						setEntryData(data);
						//console.log(data.image)
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
	}, [entryId]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setEntryData({ ...entryData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		saveEntry(entryData);
		// Redirect to home page
		navigate("/home");
	};

	const setImage = (image) => {
		setEntryData({ ...entryData, image });
	};

	return (
		<div
			className="container text-golden font-thin mx-auto p-4 overflow-auto relative min-h-screen space-y-4"
			style={{ marginBottom: isKeyboardVisible ? keyboardHeight : 0 }}
		>
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
				<Dropdown dropdownData={dropdownData} setEntryData={setEntryData}/>
			</div>

			{/* Image Input */}
			<ImageInput setImage={setImage} entryData={entryData} />

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

export default EntryForm;
