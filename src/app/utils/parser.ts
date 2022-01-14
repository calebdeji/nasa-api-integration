import Axios, { AxiosError } from "axios";

const parseError = (error: AxiosError): string => {
	if (Axios.isCancel(error)) {
		return error.message;
	} else {
		if (error) {
			const { request, response, message } = error;
			if (response) {
				if (response.data) {
					const {
						data: { message },
					} = response;
					return message;
				}
				return response.statusText;
			} else if (request) {
				const statusCodeForNoInternet = 0;
				const { status, statusText: errorMessage } = request;
				if (status === statusCodeForNoInternet) {
					return "Network error, seems you are offline";
				}
				return errorMessage;
			} else {
				return message;
			}
		}
		return "Network error, seems you are offline";
	}
};

const Parser = { parseError };
export default Parser;
