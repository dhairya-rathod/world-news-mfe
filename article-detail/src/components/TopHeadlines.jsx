import React from "react";
import { isValidArray } from "container/globalUtils";
import ArticleCard from "article_list/ArticleCard";

const TopHeadlines = ({ source, loading, articles }) => {
	const heading = source?.id ? source?.name : "India";

	return (
		<>
			{!loading && isValidArray(articles) && (
				<div className=" mt-16 py-4 rounded">
					<h2 className="px-4 text-xl text-left font-semibold text-gray-600">
						Top headings from {heading}
					</h2>
					<div className="mt-4">
						{articles.map((article, index) => (
							<ArticleCard
								key={`${article?.source?.id}-${index}`}
								image={article?.urlToImage}
								createdAt={article?.publishedAt}
								{...article}
							/>
						))}
					</div>
				</div>
			)}
		</>
	);
};

export default TopHeadlines;
