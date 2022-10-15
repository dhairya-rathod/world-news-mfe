import React from "react";
import { useLocation } from "react-router-dom";
import { formatArticleDate } from "container/globalUtils";
import useDetail from "./useDetail";
import TopHeadlines from "./TopHeadlines";

const ArticleDetail = () => {
	const location = useLocation();

	const { state } = location;
	const { title, author, description, image, createdAt, url, ...article } =
		state;

	const { loading, newsArticles } = useDetail(state);
	const publishDate = formatArticleDate(createdAt);

	const redirectToArticle = () => {
		window.open(url, "_blank");
	};

	return (
		<div className="px-24 xl:px-48 py-8 h-full flex flex-col">
			<div className="flex flex-col">
				<span className="text-gray-600">
					Author:{" "}
					<span className="font-semibold">
						{author || article?.source?.name}
					</span>
				</span>
				<div>
					<span className="pt-2 text-sm font-semibold text-gray-500 mr-4">
						{publishDate}
					</span>
					{article?.source?.name && (
						<span className="bg-gray-100 px-2 py-1 rounded-full text-xs font-semibold text-gray-500">
							{article?.source?.name}
						</span>
					)}
				</div>
			</div>
			<h2 className="mt-8 font-extrabold text-2xl">{title}</h2>
			<div className="news-image flex justify-center mt-8">
				<figure style={{ width: "100%" }} className="bg-gray-100">
					{image && (
						<img
							src={image}
							alt="news image"
							width={240}
							height={120}
							className="h-full w-full object-cover"
						/>
					)}
					<figcaption className="invisible absolute left-[999999px]">
						{title}
					</figcaption>
				</figure>
			</div>
			<p className="mt-8 text-lg text-gray-600">{description}</p>
			<div className="flex justify-center mt-4">
				<button
					onClick={redirectToArticle}
					type="button"
					className="shadow hover:bg-gray-100 py-2 px-4 rounded-full text-sm font-semibold text-gray-600"
				>
					Visit full article
				</button>
			</div>

			<TopHeadlines
				loading={loading}
				articles={newsArticles}
				source={article?.source}
			/>
		</div>
	);
};

export default ArticleDetail;
