import * as React from "react";
import { Page } from "@shopify/polaris";
import HomeList from "./components/HomeList";
import HomeSkeleton from "./components/HomeSkeleton";
import HomeDateModal from "./components/HomeDateModal";
import useHome from "./hooks/useHome";
import ErrorContainer from "app/components/Error";

const Home = () => {
	const [isModalActive, setIsModalActive] = React.useState(false);
	const { isLoading, filter, data, error, retry } = useHome();

	const openModal = () => {
		setIsModalActive(true);
	};

	const closeModal = () => {
		setIsModalActive(false);
	};

	return (
		<Page
			title="APOD Gallery"
			fullWidth
			primaryAction={{ content: "Choose Date ", onAction: isLoading ? () => {} : openModal, disabled: isLoading }}
		>
			{isLoading && <HomeSkeleton />}
			{!isLoading && error ? <ErrorContainer message={error} retryAction={retry} /> : null}
			{!isLoading && data ? (
				<>
					<HomeList items={data.data} />
				</>
			) : null}
			<HomeDateModal open={isModalActive} onClose={closeModal} onSearch={filter} />
		</Page>
	);
};

export default Home;
