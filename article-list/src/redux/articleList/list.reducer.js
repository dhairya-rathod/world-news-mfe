export const REQUEST_ARTICLE_LIST = "REQUEST_ARTICLE_LIST";
export const ARTICLE_LIST_SUCCESS = "ARTICLE_LIST_SUCCESS";
export const ARTICLE_LIST_FAILED = "ARTICLE_LIST_FAILED";

export const initialState = {
	loading: false,
	data: null,
	isError: false,
};

export const articleListReducer = (state, action) => {
	switch (action.type) {
		case REQUEST_ARTICLE_LIST:
			return {
				...state,
				loading: true,
			};
		case ARTICLE_LIST_SUCCESS:
			return {
				...state,
				loading: false,
				data: action.payload,
			};
		case ARTICLE_LIST_FAILED:
			return {
				...state,
				loading: false,
				isError: true,
			};
		default:
			throw new Error();
	}
};
