import Axios from "axios";

const NEWS_API_KEY = "fd1e60af132c4a97938c9d00b29f499e";
const API_URL = "https://newsapi.org/v2/";

function authRequestInterceptor(config) {
	// const token = storage.getToken();
	// if (token) {
	// 	config.headers.authorization = `${token}`;
	// }
	config.headers.Accept = "application/json";
	config.headers.Authorization = NEWS_API_KEY;
	return config;
}

const axios = Axios.create({
	baseURL: API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
	(response) => {
		return response.data;
	},
	(error) => {
		const message = error.response?.data?.message || error.message;
		console.error("Error in API call >>> ", message);

		return Promise.reject(error);
	}
);

const getApi = (url, queryParams) => {
	return axios.get(url, {
		params: queryParams,
	});
};

const postApi = (url, apiData) => {
	return axios.post(url, apiData);
};

export { getApi, postApi };
