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
		<div className="flex flex-col justify-center items-center min-h-screen bg-warm dark:bg-eerie space-y-20">
			{/* Hero Section */}
			<section className="flex flex-col md:flex-row justify-center items-center">
				<div className="flex w-full items-center justify-center">
					<img
						src="/logo.png"
						alt="reflectify logo"
						className="p-8 bg-transparent"
					/>
				</div>
				<div className="space-y-20 sm:w-full sm:p-20 md:p-24 lg:p-28">
					<div>
						<h1 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white">
							Welcome to Reflectify
						</h1>
						<p className="text-lg text-slate-600 dark:text-slate-400">
							Your personal journaling application
						</p>
					</div>

					{/* CTA component */}
					<div className="space-x-4 md:space-x-8">
						<Link to="/login" className="login-btn">
							Login
						</Link>
						<Link to="/register" className="register-btn">
							Register
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Landing;
