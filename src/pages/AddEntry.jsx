import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { addNewEntry } from "../api/entryApi";
import {
	FaChevronLeft,
	FaRegSmile,
	FaRegBookmark,
	FaStar,
} from "react-icons/fa";

const AddEntry = () => {
	const { user } = useAuth();
	const navigate = useNavigate();
	const [dropdowns, setDropdowns] = useState({
		mood: false,
		journalCategory: false,
		important: false,
	});

	const toggleDropdown = (dropdown) => {
		setDropdowns((prevDropdowns) => ({
			...prevDropdowns,
			[dropdown]: !prevDropdowns[dropdown],
		}));
	};

	const handleSelect = (option, dropdown) => {
		console.log("Selected", option, "in", dropdown);
		// Here you can set the selected value in your state or perform any other action
	};

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

	const handleChange = (e) => {
		const { name, value } = e.target;
		setEntryData({ ...entryData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Add the entry for the current user
		addNewEntry(user.id, entryData);
		// Redirect to home page
		navigate("/home");
	};

	return (
		<div className="container mx-auto px-4 py-8 overflow-auto relative">
			{/* Header UI */}
			<div className="grid grid-cols-2 items-center justify-between border-b border-gray-300 dark:border-gray-700 pb-4 mb-4">
				{/* Title Input */}
				<div className="col-span-1 mr-4">
					{" "}
					<input
						type="text"
                        style={{ width: 'calc(100% - 8px)' }}
						name="title"
						value={entryData.title}
						onChange={handleChange}
						placeholder="Title"
						className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none"
					/>
				</div>
                {/* features */}
				<div className="col-span-1 flex flex-row space-x-2">
					{/* Mood Dropdown */}
					<div className="relative">
						<button
							onClick={() => toggleDropdown("mood")}
							className="border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 focus:outline-none"
						>
							<FaRegSmile className="text-xl" />
						</button>
						{dropdowns.mood && (
							<div className="absolute top-full left-0 bg-white dark:bg-gray-800 shadow-lg border border-gray-300 dark:border-gray-700 rounded-md mt-1 w-full">
								<ul>
									<li
										onClick={() => handleSelect("Happy", "mood")}
										className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
									>
										Happy
									</li>
									<li
										onClick={() => handleSelect("Sad", "mood")}
										className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
									>
										Sad
									</li>
									{/* Add more mood options as needed */}
								</ul>
							</div>
						)}
					</div>

					{/* Journal Category Dropdown */}
					<div className="relative">
						<button
							onClick={() => toggleDropdown("journalCategory")}
							className="border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 focus:outline-none"
						>
							<FaRegBookmark className="text-xl" />
						</button>
						{dropdowns.journalCategory && (
							<div className="absolute top-full left-0 bg-white dark:bg-gray-800 shadow-lg border border-gray-300 dark:border-gray-700 rounded-md mt-1 w-full">
								<ul>
									<li
										onClick={() => handleSelect("Personal", "journalCategory")}
										className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
									>
										Personal
									</li>
									<li
										onClick={() => handleSelect("Work", "journalCategory")}
										className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
									>
										Work
									</li>
									{/* Add more journal category options as needed */}
								</ul>
							</div>
						)}
					</div>

					{/* Importance Dropdown */}
					<div className="relative">
						<button
							onClick={() => toggleDropdown("important")}
							className="border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 focus:outline-none"
						>
							<FaStar className="text-xl" />
						</button>
						{dropdowns.important && (
							<div className="absolute top-full left-0 bg-white dark:bg-gray-800 shadow-lg border border-gray-300 dark:border-gray-700 rounded-md mt-1 w-full">
								<ul>
									<li
										onClick={() => handleSelect("Important", "important")}
										className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
									>
										Important
									</li>
									<li
										onClick={() => handleSelect("Not Important", "important")}
										className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
									>
										Not Important
									</li>
								</ul>
							</div>
						)}
					</div>
				</div>
			</div>

			{/* Image Input */}
			<div className="relative w-full mb-8">
				<img
					src={entryData.image}
					alt="Entry Image"
					className="w-full h-48 object-cover mb-4 rounded-lg"
				/>
				<label
					htmlFor="imageInput"
					className="absolute bottom-0 right-0 bg-blue-500 text-white px-2 py-1 rounded-md cursor-pointer"
				>
					Add Image
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
				name="content"
				value={entryData.content}
				onChange={handleChange}
				placeholder="Enter your content here..."
				className="w-full h-80 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none"
			/>

			{/* Save Button */}
			<button
				type="submit"
				onClick={handleSubmit}
				className="absolute bottom-2 right-4 bg-blue-500 text-white p-6 rounded-full"
			>
				Save
			</button>

			{/* Go Back Button */}
			<button
				onClick={() => navigate(-1)}
				className="absolute top-40 left-4 text-golden"
			>
				<FaChevronLeft size={32}/>
			</button>
		</div>
	);
};

export default AddEntry;
