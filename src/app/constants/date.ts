import Formatters from "app/utils/formatters";

const START_DATE = "2022-01-01";
const END_DATE = Formatters.formateDateToReadableString(new Date());
const UNFORMATTED_START_DATE = new Date(START_DATE);
const UNFORMATTED_END_DATE = new Date();

const Date_Constants = { START_DATE, END_DATE, UNFORMATTED_END_DATE, UNFORMATTED_START_DATE };

export default Date_Constants;
