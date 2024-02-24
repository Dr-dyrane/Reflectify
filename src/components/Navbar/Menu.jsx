import React from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = ({ to, label }) => {
	const location = useLocation();

	return (
		<li>
			<Link
				to={to}
				className={`block py-2 px-3 md:p-0 ${
					location.pathname === to
						? "text-warm bg-golden rounded md:bg-transparent md:text-golden md:dark:text-golden"
						: "text-slate-900 rounded hover:bg-amber-100 md:hover:bg-transparent md:hover:text-golden md:dark:hover:text-golden dark:text-warm dark:hover:bg-golden/85 dark:hover:text-warm md:dark:hover:bg-transparent dark:border-slate-700"
				}`}
				aria-current={location.pathname === to ? "page" : undefined}
			>
				{label}
			</Link>
		</li>
	);
};

export default Menu;
