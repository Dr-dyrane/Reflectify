// src/pages/Login.jsx

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const Login = () => {
	const [formData, setFormData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	const { login, user } = useAuth();
	const navigate = useNavigate();

	// Redirect user to home page if already logged in
	useEffect(() => {
		if (user) {
			navigate("/home");
		}
	}, [user, navigate]);

	if (user) {
		return null;
	}

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			// Call the login function from the AuthContext
			await login(formData.email, formData.password); // Pass email and password directly

			// After successful login, navigate to the home page
			navigate("/home");
		} catch (err) {
			setError("Invalid email or password");
		}
	};

	return (
		<div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
			<h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
				Login to Reflectify
			</h1>
			<form onSubmit={handleLogin} className="space-y-4">
				<div className="flex flex-col">
					<label htmlFor="email" className="text-gray-700 dark:text-white">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className="border border-gray-300 dark:border-gray-700 rounded-md p-2"
						required
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="password" className="text-gray-700 dark:text-white">
						Password
					</label>
					<input
						type="password"
						id="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						className="border border-gray-300 dark:border-gray-700 rounded-md p-2"
						required
					/>
				</div>
				<button
					type="submit"
					className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
				>
					Login
				</button>
				{error && <p className="text-red-500">{error}</p>}
				<p className="text-gray-600 dark:text-gray-400">
					Don't have an account?{" "}
					<Link to="/register" className="text-blue-500">
						Register here
					</Link>
				</p>
			</form>
		</div>
	);
};

export default Login;
