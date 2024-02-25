// src/pages/Login.jsx

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { PiCaretLeftBold } from "react-icons/pi";

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

	const goBack = () => {
		navigate(-1);
	};

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
		<div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-warm dark:bg-eerie relative">
			<button
				onClick={goBack}
				className="absolute top-8 right-8 text-2xl text-golden hover:opacity-75"
			>
				<PiCaretLeftBold />
			</button>
			<div className="flex w-full items-center justify-center">
				<img
					src="/logo.png"
					alt="reflectify logo"
					className="p-8 bg-transparent"
				/>
			</div>
			<section className="sm:w-full sm:p-20 md:p-24 lg:p-28">
				<h1 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white">
					Login to Reflectify
				</h1>
				<form onSubmit={handleLogin} className="space-y-6 lg:space-y-10">
					<div className="flex flex-col">
						<label
							htmlFor="email"
							className="text-slate-700 dark:text-white mb-2 text-start"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className="border border-slate-300 dark:border-slate-700 rounded-3xl p-4"
							required
						/>
					</div>
					<div className="flex flex-col">
						<label
							htmlFor="password"
							className="text-slate-700 dark:text-white mb-2 text-start"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							className="border border-slate-300 dark:border-slate-700 rounded-3xl p-4"
							required
						/>
					</div>
					<button type="submit" className="login-btn w-full">
						Login
					</button>
					{error && <p className="text-red-500">{error}</p>}
					<p className="text-slate-600 dark:text-slate-400">
						Don't have an account?{" "}
						<Link to="/register" className="text-blue-500">
							Register here
						</Link>
					</p>
				</form>
			</section>
		</div>
	);
};

export default Login;
