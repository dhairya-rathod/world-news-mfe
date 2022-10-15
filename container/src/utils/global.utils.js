const isValidArray = (data) => {
	return data && Array.isArray(data) && data.length > 0;
};

const formatArticleDate = (dateString) => {
	const date = new Date(Date.parse(dateString));

	return `${date.getDate()}-${date.toLocaleString("default", {
		month: "short",
	})}-${date.getFullYear()}`;
};

const scrollToTop = () => {
	window.scrollTo(0, 0);
};

export { isValidArray, formatArticleDate, scrollToTop };
