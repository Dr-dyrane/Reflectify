// src/pages/Landing.jsx

import { Link } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

const Landing = () => {
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		// If user is logged in, redirect to home page
		if (user) {
			navigate("/home");
		}
	}, [user, navigate]);

	if (user) {
		return null;
	}

	return (
		<div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
			<h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
				Welcome to Reflectify
			</h1>
			<p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
				Your personal journaling application
			</p>
			<div className="space-x-4">
				<Link
					to="/login"
					className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
				>
					Login
				</Link>
				<Link
					to="/register"
					className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
				>
					Register
				</Link>
			</div>
		</div>
	);
};

export default Landing;
