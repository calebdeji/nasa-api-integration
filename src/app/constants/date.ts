import Formatters from "app/utils/formatters";

const START_DATE = "2022-01-01";
const END_DATE = Formatters.formateDateToReadableString(new Date());
const UNFORMATTED_START_DATE = new Date(START_DATE);
const UNFORMATTED_END_DATE = new Date();
const API_START_DATE_LIMIT = "1995-07-01";
const UNFORMATTED_API_START_DATE_LIMIT = new Date(API_START_DATE_LIMIT);

const Date_Constants = {
	START_DATE,
	END_DATE,
	UNFORMATTED_END_DATE,
	UNFORMATTED_START_DATE,
	UNFORMATTED_API_START_DATE_LIMIT,
};

export default Date_Constants;
