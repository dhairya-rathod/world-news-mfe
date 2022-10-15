import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import MainLayout from "./MainLayout";

const App = () => (
	<StrictMode>
		<MainLayout />
	</StrictMode>
);

ReactDOM.render(<App />, document.getElementById("app"));
