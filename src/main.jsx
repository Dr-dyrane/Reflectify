// src/Main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/index.css";

const rootElement = document.getElementById("root");

// Create a root using ReactDOM.createRoot
if (!rootElement._reactRootContainer) {
	const root = ReactDOM.createRoot(rootElement);

	function Main() {
		return (
			<React.StrictMode>
				<App />
			</React.StrictMode>
		);
	}

	// Use .render() on the root to render the Main component
	root.render(<Main />);
}
