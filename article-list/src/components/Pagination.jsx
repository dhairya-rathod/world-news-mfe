import React from "react";
import { scrollToTop } from "container/globalUtils";

const PAGINATION_BTN =
	"hover:bg-gray-100 cursor-pointer rounded-full shadow py-2 px-3 w-32 text-center";

const Pagination = ({ loading, currentPage, setPage, maxPage }) => {
	const handlePrevious = () => {
		if (!loading && currentPage !== 1) {
			scrollToTop();
			setPage((c) => c - 1);
		}
	};

	const handleNext = () => {
		if (!loading && currentPage !== maxPage) {
			scrollToTop();
			setPage((c) => c + 1);
		}
	};

	return (
		<ul className="flex justify-center gap-5 text-xl mt-8">
			<li
				className={`${PAGINATION_BTN} ${
					currentPage !== 1 ? "cursor-pointer" : "cursor-not-allowed"
				}`}
				onClick={handlePrevious}
			>
				Previous
			</li>
			<li
				className={`${PAGINATION_BTN} ${
					currentPage !== maxPage ? "cursor-pointer" : "cursor-not-allowed"
				}`}
				onClick={handleNext}
			>
				Next
			</li>
		</ul>
	);
};

export default Pagination;
