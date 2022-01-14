import * as React from "react";

import API from "app/api";
import { FetchApodsPayload } from "app/api/apod/types";
import { useMutation } from "react-query";
import Date_Constants from "app/constants/date";
import Parser from "app/utils/parser";
import { AxiosError } from "axios";

const useHome = () => {
	const [lastDateSelected, setLastDateSelected] = React.useState<{ start_date: string; end_date: string }>();

	const { isLoading, error, data, mutate } = useMutation((params: FetchApodsPayload) => {
		return API.ApodServices.fetchApods({ start_date: params.start_date, end_date: params.end_date });
	});

	React.useEffect(() => {
		mutate(
			{ start_date: Date_Constants.START_DATE, end_date: Date_Constants.END_DATE },
			{
				onError: (error, { start_date, end_date }) => {
					setLastDateSelected({ start_date, end_date });
				},
			}
		);
		// eslint-disable-next-line
	}, []);

	const retry = () => {
		if (lastDateSelected) {
			mutate({ start_date: lastDateSelected.start_date, end_date: lastDateSelected.end_date });
		}
	};

	const filter = (start_date: string, end_date: string) => {
		mutate({ start_date, end_date });
	};

	return { isLoading, error: error ? Parser.parseError(error as AxiosError) : null, data, filter, retry };
};

export default useHome;
