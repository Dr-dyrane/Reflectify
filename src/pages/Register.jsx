import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { PiCaretLeftBold } from "react-icons/pi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Register = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [error, setError] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const { user, register } = useAuth();
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

	const handleTogglePassword = () => {
		setShowPassword(!showPassword);
	};

	const handleToggleConfirmPassword = () => {
		setShowConfirmPassword(!showConfirmPassword);
	};

	const handleRegister = async (e) => {
		e.preventDefault();
		if (formData.password !== formData.confirmPassword) {
			setError("Passwords do not match.");
			return;
		}

		try {
			// Call the register function from the AuthContext
			await register(formData); // Pass the formData directly

			// After successful registration, navigate to the home page
			navigate("/home");
		} catch (err) {
			setError("Failed to register. Please try again later.");
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
				<h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
					Start Reflecting
				</h1>
				<form onSubmit={handleRegister} className="space-y-6 lg:space-y-10">
					<div className="flex flex-col">
						<label
							htmlFor="email"
							className="text-gray-700 dark:text-white mb-2 text-start"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className="border border-gray-300 dark:border-gray-700 rounded-3xl p-4"
							required
						/>
					</div>
					<div className="flex flex-col relative">
						<label
							htmlFor="password"
							className="text-gray-700 dark:text-white mb-2 text-start"
						>
							Password
						</label>
						<input
							type={showPassword ? "text" : "password"}
							id="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							className="border border-gray-300 dark:border-gray-700 rounded-3xl p-4 pr-12"
							required
						/>
						<button
							type="button"
							className="absolute top-[68%] transform -translate-y-1/2 right-4"
							onClick={handleTogglePassword}
						>
							{showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
						</button>
					</div>
					<div className="flex flex-col relative">
						<label
							htmlFor="confirmPassword"
							className="text-gray-700 dark:text-white mb-2 text-start"
						>
							Confirm Password
						</label>
						<input
							type={showConfirmPassword ? "text" : "password"}
							id="confirmPassword"
							name="confirmPassword"
							value={formData.confirmPassword}
							onChange={handleChange}
							className="border border-gray-300 dark:border-gray-700 rounded-3xl p-4 pr-12"
							required
						/>
						<button
							type="button"
							className="absolute top-[68%] transform -translate-y-1/2 right-4"
							onClick={handleToggleConfirmPassword}
						>
							{showConfirmPassword ? (
								<AiOutlineEyeInvisible />
							) : (
								<AiOutlineEye />
							)}
						</button>
					</div>
					<button type="submit" className="w-full register-btn">
						Register
					</button>
					{error && <p className="text-red-500">{error}</p>}
					<p className="text-gray-600 dark:text-gray-400">
						Already have an account?{" "}
						<Link to="/login" className="text-blue-500">
							Login here
						</Link>
					</p>
				</form>
			</section>
		</div>
	);
};

export default Register;
