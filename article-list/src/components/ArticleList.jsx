import React from "react";
import { isValidArray } from "container/globalUtils";
import Loader from "container/Loader";

import ArticleCard from "./ArticleCard";
import useArticle from "./useArticle";
import Pagination from "./Pagination";

const ArticleList = () => {
	const { state, currentPage, maxPage, setCurrentPage } = useArticle();

	if (!state.data || !isValidArray(state.data)) {
		return (
			<div className="px-16 py-8 h-full flex justify-center items-center text-4xl text-gray-600">
				Zero news to display at the moment
			</div>
		);
	}

	return (
		<div className="px-24 xl:px-48  py-8 h-full">
			{state.loading && <Loader />}

			{state.data.map((article, index) => (
				<ArticleCard
					key={`${article?.source?.id}-${index}`}
					image={article?.urlToImage}
					createdAt={article?.publishedAt}
					{...article}
				/>
			))}

			<Pagination
				loading={state.loading}
				currentPage={currentPage}
				setPage={setCurrentPage}
				maxPage={maxPage}
			/>
		</div>
	);
};

export default ArticleList;
