// src/App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/appRoutes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from './auth/AuthContext';

const App = () => {
	return (
		<Router>
			 <AuthProvider>
			<div className="bg-warm dark:bg-eerie min-h-screen flex flex-col">
				<Navbar />
				<div className="flex-1 justify-center items-center text-indigo-700 font-bold text-center">
					<AppRoutes />
				</div>
				<Footer />
			</div>
			</AuthProvider>
		</Router>
	);
};

export default App;
