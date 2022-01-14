import * as React from "react";
import { DatePicker, Modal } from "@shopify/polaris";
import Homestyles from "./styles";
import Formatters from "app/utils/formatters";
import Date_Constants from "app/constants/date";

interface HomeDateModalProps {
	open: boolean;
	onClose: () => void;
	onSearch: (start_date: string, end_date: string) => void;
}

const HomeDateModal: React.FC<HomeDateModalProps> = (props) => {
	const [{ month, year }, setDate] = React.useState({
		month: Date_Constants.UNFORMATTED_START_DATE.getMonth(),
		year: Date_Constants.UNFORMATTED_START_DATE.getFullYear(),
	});
	const [selectedDates, setSelectedDates] = React.useState({
		start: Date_Constants.UNFORMATTED_START_DATE,
		end: Date_Constants.UNFORMATTED_END_DATE,
	});

	const handleMonthChange = React.useCallback((month: number, year: number) => setDate({ month, year }), []);

	const filter = () => {
		props.onSearch(
			Formatters.formateDateToReadableString(selectedDates.start),
			Formatters.formateDateToReadableString(selectedDates.end)
		);
		props.onClose();
	};

	const clearFilter = () => {
		setSelectedDates({
			start: Date_Constants.UNFORMATTED_START_DATE,
			end: Date_Constants.UNFORMATTED_END_DATE,
		});
		filter();
	};

	return (
		<Modal
			open={props.open}
			onClose={props.onClose}
			title="Choose Date"
			titleHidden
			primaryAction={{ content: "Search", onAction: filter }}
			secondaryActions={[{ content: "Clear", onAction: clearFilter }]}
		>
			<Modal.Section>
				<Homestyles.ModalPadding>
					<DatePicker
						month={month}
						year={year}
						onChange={setSelectedDates}
						onMonthChange={handleMonthChange}
						selected={selectedDates}
						allowRange
						disableDatesAfter={Date_Constants.UNFORMATTED_END_DATE}
						disableDatesBefore={Date_Constants.UNFORMATTED_API_START_DATE_LIMIT}
					/>
				</Homestyles.ModalPadding>
			</Modal.Section>
		</Modal>
	);
};

export default HomeDateModal;
