import { useState, useEffect } from "react";
import { getApi } from "container/service";

const DEFAULT_NEWS_SOURCE = "the-times-of-india,google-news-in,the-hindu";
const RECORD_PER_PAGE = 5;

const useDetail = (props) => {
	const { source } = props;

	const [loading, setLoading] = useState(false);
	const [newsArticles, setNewsArticles] = useState(null);

	const getArticles = async () => {
		try {
			const res = await getApi("top-headlines", {
				sources: source?.id || DEFAULT_NEWS_SOURCE,
				pageSize: RECORD_PER_PAGE,
				page: 1,
			});
			setLoading(false);
			setNewsArticles(res?.articles || null);
		} catch (error) {
			setLoading(false);
		}
	};

	useEffect(() => {
		getArticles();
	}, []);

	return {
		loading,
		newsArticles,
	};
};

export default useDetail;
