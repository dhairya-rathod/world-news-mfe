import { useState, useEffect, useReducer, useMemo } from "react";
import { getApi } from "container/service";

import {
	articleListReducer,
	initialState,
	REQUEST_ARTICLE_LIST,
	ARTICLE_LIST_SUCCESS,
	ARTICLE_LIST_FAILED,
} from "../redux/articleList/list.reducer";

const useArticle = () => {
	const [state, dispatch] = useReducer(articleListReducer, initialState);

	const RECORD_PER_PAGE = 10;
	const MAX_RECORD_LIMIT = 100;
	const MAX_PAGE = MAX_RECORD_LIMIT / RECORD_PER_PAGE;

	const [currentPage, setCurrentPage] = useState(1);
	const [totalRecord, setTotalRecord] = useState(0);

	const totalPage = useMemo(
		() => Math.ceil(totalRecord / RECORD_PER_PAGE),
		[totalRecord]
	);

	// Date for last 3 months records
	// const fromDate = useMemo(() => new Date().toISOString().slice(0, 10), []);
	// const toDate = useMemo(() => {
	// 	const tempDate = new Date();
	// 	tempDate.setMonth(tempDate.getMonth() - 3);
	// 	return tempDate.toISOString().slice(0, 10);
	// }, []);

	const getArticles = async () => {
		try {
			dispatch({ type: REQUEST_ARTICLE_LIST });
			const res = await getApi("top-headlines", {
				country: "in",
				category: "general",
				pageSize: RECORD_PER_PAGE,
				page: currentPage,
				// from: fromDate,
				// to: toDate,
			});

			setTotalRecord(res?.totalResults || 0);
			dispatch({
				type: ARTICLE_LIST_SUCCESS,
				payload: res?.articles || null,
			});
		} catch (error) {
			dispatch({ type: ARTICLE_LIST_FAILED });
		}
	};

	useEffect(() => {
		getArticles();
	}, [currentPage]);

	return {
		state,
		currentPage,
		setCurrentPage,
		maxPage: totalPage,
	};
};

export default useArticle;
