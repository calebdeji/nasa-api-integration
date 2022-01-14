import * as React from "react";
import Lottie from "react-lottie";
import animationData from "app/assets/data/error.json";
import ErrorStyles from "./styles";
import { TextStyle } from "@shopify/polaris";

interface Props {
	message?: string;
	retryAction?: () => void;
}

const ErrorContainer: React.FC<Props> = (props) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const handleClick = () => {
		props.retryAction?.();
	};

	return (
		<ErrorStyles.Container>
			<Lottie options={defaultOptions} width={200} height={200} />
			<TextStyle variation="subdued"> {props.message || "Error Occured"} </TextStyle>
			<ErrorStyles.Button onClick={handleClick}>Try Again</ErrorStyles.Button>
		</ErrorStyles.Container>
	);
};

export default ErrorContainer;
