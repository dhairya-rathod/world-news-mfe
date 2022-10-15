import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/images/logo.png";

const Header = () => {
	const navigate = useNavigate();

	const redirectToHome = () => {
		navigate("/");
	};

	return (
		<header className="border-b py-4 shadow px-12 xl:px-24 sticky top-0 z-10 bg-white">
			<nav className="flex items-center">
				<div
					className="flex text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-400 cursor-pointer"
					onClick={redirectToHome}
				>
					<img src={logo} alt="site logo" width={40} height={40} />
					<span className="ml-4">World News</span>
				</div>
				{/* <ul className="ml-auto flex">
					<li className="font-semibold text-xl px-4 cursor-pointer">Home</li>
					<li className="font-semibold text-xl px-4 cursor-pointer">Create</li>
				</ul> */}
			</nav>
		</header>
	);
};

export default Header;
