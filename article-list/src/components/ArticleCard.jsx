import React from "react";
import { useNavigate } from "react-router-dom";
import { formatArticleDate, scrollToTop } from "container/globalUtils";

const ArticleCard = ({
	title,
	author,
	description,
	image,
	createdAt,
	url,
	...article
}) => {
	const navigate = useNavigate();

	const publishDate = formatArticleDate(createdAt);

	const showDetails = () => {
		const props = {
			title,
			author,
			description,
			image,
			createdAt,
			url,
			...article,
		};

		scrollToTop();
		navigate("/news-details", { state: props });
	};

	return (
		<div className="flex justify-between items-center gap-8 lg:gap-16 p-4 mb-2 bg-white border-b border-gray-300">
			<div className="news-content flex-1 cursor-pointer" onClick={showDetails}>
				<div className="flex items-center mb-3 text-sm">
					<span className="font-semibold pr-2 text-gray-600">
						{author || article?.source?.name}
					</span>{" "}
					-
					<span className="pl-2 font-semibold text-gray-400">
						{publishDate}
					</span>
				</div>
				<h2 className="mb-2 font-extrabold text-2xl">{title}</h2>
				<p className="mb-4 text-gray-500">{description}</p>
				{article?.source?.name && (
					<span className="bg-gray-100 px-2 py-1 rounded-full text-xs font-semibold text-gray-500">
						{article?.source?.name}
					</span>
				)}
			</div>
			<div className="news-image cursor-pointer" onClick={showDetails}>
				<figure
					style={{ width: "240px", height: "120px" }}
					className="bg-gray-100"
				>
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
		</div>
	);
};

export default ArticleCard;
