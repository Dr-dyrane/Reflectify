// src/routes/routes.js

import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Register from "../pages/Register";
import Home from "../pages/Home";
import AddEntry from "../pages/AddEntry";

const RouteConfig = () => {
	const routes = [
		{
			path: "/",
			element: Landing,
			props: {},
		},
		{
			path: "/add-entry",
			element: AddEntry,
			props: {},
		},
		{
			path: "/login",
			element: Login,
			props: {},
		},
		{
			path: "/logout",
			element: Logout,
			props: {},
		},
		{
			path: "/register",
			element: Register,
			props: {},
		},
		{
			path: "/home",
			element: Home,
			props: {},
		},
		// Add more routes as needed
	];

	return routes;
};

export default RouteConfig;
