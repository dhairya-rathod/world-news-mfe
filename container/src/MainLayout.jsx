import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";
import Header from "./components/Header";

const MainLayout = () => {
	return (
		<Router>
			<div className="h-full flex flex-col">
				<Header />
				<main className="h-full">
					<Routes />
				</main>
			</div>
		</Router>
	);
};

export default MainLayout;
