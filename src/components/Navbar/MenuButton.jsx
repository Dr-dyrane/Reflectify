// MenuButton.js
import React from "react";
import { BsFillMenuButtonFill, BsFillMenuButtonWideFill } from "react-icons/bs";

const MenuButton = ({ isMenuOpen, toggleMenu }) => {
	return (
		<button
			data-collapse-toggle="navbar-cta"
			type="button"
			className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-golden rounded-lg md:hidden hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-200 dark:text-golden dark:hover:bg-golden/25 dark:focus:ring-golden-85"
			aria-controls="navbar-cta"
			aria-expanded="false"
			onClick={toggleMenu}
		>
			<span className="sr-only">Open main menu</span>
			{isMenuOpen ? (
				<BsFillMenuButtonWideFill size={20} />
			) : (
				<BsFillMenuButtonFill size={19} />
			)}
		</button>
	);
};

export default MenuButton;
