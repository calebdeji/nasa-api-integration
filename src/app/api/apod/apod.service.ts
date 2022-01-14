import request from "../request";
import { FetchApodsPayload, FetchApodsResponse } from "./types";

const fetchApods = async (params: FetchApodsPayload) => {
	return await request.get<FetchApodsResponse>(`/apod?start_date=${params.start_date}&end_date=${params.end_date}`);
};

const ApodServices = { fetchApods };

export default ApodServices;
