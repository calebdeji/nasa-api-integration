const formateDateToReadableString = (date: Date) => {
	return date.toISOString().slice(0, 10);
};

const Formatters = { formateDateToReadableString };

export default Formatters;
