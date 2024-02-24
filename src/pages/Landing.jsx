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
		<div className="flex flex-col justify-center items-center min-h-screen bg-warm dark:bg-eerie">
			<h1 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white">
				Welcome to Reflectify
			</h1>
			<p className="text-lg text-slate-600 dark:text-slate-400 mb-20">
				Your personal journaling application
			</p>
			<div className="space-x-4">
				<Link
					to="/login"
					className="ring-offset-2 ring-2 ring-blue-500 bg-blue-500 hover:bg-blue-600 text-white text-md p-[21.5px] rounded-[32px] transition duration-300 ease-in-out"
				>
					Login
				</Link>
				<Link
					to="/register"
					className="ring-offset-2 ring-2 ring-slate-700 bg-slate-700 hover:bg-slate-800 text-white text-md p-[21.5px] rounded-[32px] transition duration-300 ease-in-out"
				>
					Register
				</Link>
			</div>
		</div>
	);
};

export default Landing;
