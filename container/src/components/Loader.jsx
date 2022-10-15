import React from "react";

const Loader = () => {
	return (
		<div className="fixed flex items-center justify-center top-0 bottom-0 right-0 left-0 bg-black opacity-40">
			<div className="w-20 h-20 border-b-4 border-gray-500 rounded-full animate-spin"></div>
		</div>
	);
};

export default Loader;
