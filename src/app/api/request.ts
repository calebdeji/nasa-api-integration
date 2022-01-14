import axios, { AxiosError } from "axios";

const request = axios.create({
	baseURL: process.env.REACT_APP_BASE_API_URL,
});

request.interceptors.request.use((config) => {
	const apiKey = process.env.REACT_APP_API_KEY;
	if (apiKey) {
		let url = config.url;
		url = `${url}&api_key=${apiKey}`;
		config.url = url;
	}
	return config;
});

request.interceptors.response.use(
	(response) => {
		return response;
	},
	async (error: AxiosError) => {
		return Promise.reject(error);
	}
);

export default request;
