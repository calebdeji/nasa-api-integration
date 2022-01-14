export interface APOD {
	copyright?: string;
	date: Date;
	explanation: string;
	hdurl: string;
	media_type: string;
	service_version: string;
	title: string;
	url: string;
}

export interface FetchApodsPayload {
	start_date: string;
	end_date: string;
}

export type FetchApodsResponse = Array<APOD>;
