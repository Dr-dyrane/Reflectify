// src/pages/Home.jsx

import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

function Home() {
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		// If user is not logged in, navigate to login page
		if (!user) {
			navigate("/login");
		}
	}, [user, navigate]); // Ensure navigate is added as a dependency

	// If user is not logged in, return null (prevent rendering anything before redirection)
	if (!user) {
		return null;
	}

	// If user is logged in, render home content
	return (
		<div className="flex h-screen text-slate-800 dark:text-slate-200 justify-center items-center text-xl scrollbar-thin">
			Welcome to Reflectify: A safe space
		</div>
	);
}

export default Home;
