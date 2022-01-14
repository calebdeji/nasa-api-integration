import styled from "@emotion/styled";

const Container = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Button = styled.button`
	width: 150px;
	height: 40px;
	color: #ffffff;
	background-color: #08bd37;
	border: solid 1px #08bd37;
	border-radius: 5px;
	margin-top: 20px;
`;

const ErrorStyles = {
	Container,
	Button,
};

export default ErrorStyles;
