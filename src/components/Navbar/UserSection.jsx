// UserSection.js
import React from "react";
import { Link } from "react-router-dom";

const UserSection = ({
	isLoggedIn,
	isUserOpen,
	toggleUserDropdown,
	userDropdownRef,
	userDropdownItems,
}) => {
	const imagUrl =
		"https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
	return (
		<div>
			{isLoggedIn ? (
				<>
					<button
						className="flex text-sm bg-golden rounded-full md:me-0 focus:ring-4 focus:ring-golden dark:focus:ring-golden"
						type="button"
						id="user-menu-button"
						aria-expanded={isUserOpen}
						data-dropdown-toggle="user-dropdown"
						data-dropdown-placement="bottom"
						onClick={toggleUserDropdown}
					>
						<span className="sr-only">Open user menu</span>
						<img
							className="w-8 h-8 rounded-full border border-slate-700"
							src={imagUrl}
							alt="user photo"
						/>
					</button>
					{/* User dropdown menu */}
					<div
						className={`z-50 ${
							isUserOpen ? "block" : "hidden"
						} border-[1px] border-slate-500 absolute my-4 right-2 lg:right-[270px] text-base list-none bg-warm divide-y divide-slate-100 rounded-lg  dark:bg-eerie/85 dark:divide-slate-600`}
						id="user-dropdown"
						ref={userDropdownRef}
					>
						<div className="px-4 py-3">
							<span className="block text-sm text-slate-900 dark:text-warm">
								Bonnie Green
							</span>
							<span className="block text-sm text-slate-500 truncate dark:text-slate-400">
								name@flowbite.com
							</span>
						</div>
						<ul className="py-2" aria-labelledby="user-menu-button">
							{userDropdownItems.map((item) => (
								<li key={item.to}>
									<Link
										to={item.to}
										className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-100 dark:hover:bg-golden dark:text-slate-200 dark:hover:text-warm"
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</>
			) : (
				<Link to="/login">
					<button
						type="button"
						className="text-warm bg-golden hover:bg-golden/85 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-[32px] text-sm px-4 py-2 text-center dark:bg-golden dark:hover:bg-golden/85 dark:focus:ring-amber-300"
					>
						Get started
					</button>
				</Link>
			)}
		</div>
	);
};

export default UserSection;
