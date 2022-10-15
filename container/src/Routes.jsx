import React from "react";
import { Routes as ReduxRoutes, Route, Navigate } from "react-router-dom";

import ArticleList from "article_list/ArticleList";
import ArticleDetail from "article_detail/ArticleDetail";

const Routes = () => {
	return (
		<ReduxRoutes>
			<Route index element={<ArticleList />} />
			<Route exact path="/news-details" element={<ArticleDetail />} />
			<Route path="*" element={<Navigate to="/" />} />
		</ReduxRoutes>
	);
};

export default Routes;
