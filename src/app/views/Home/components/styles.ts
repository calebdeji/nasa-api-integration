import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Container = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
	row-gap: 50px;
	column-gap: 50px;

	.Polaris-Card {
		margin-top: 0px;
		position: relative;
		padding-bottom: 50px;
	}

	@media all and (max-width: 500px) {
		grid-template-columns: none;
		grid-auto-flow: row;
		padding: 0 20px;
	}
`;

const MediaImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
`;

interface MediaButtonProps {
	isLiked: boolean;
}
const MediaButton = styled.button<MediaButtonProps>`
	display: block;
	position: absolute;
	bottom: 20px;
	left: 1.6rem;
	border: none;
	outline: none;

	width: 70px;
	height: 30px;

	border-radius: 5px;
	cursor: pointer;

	${(props) =>
		props.isLiked &&
		css`
			border: none;
			background-color: #ff0000;
			color: #ffffff;
		`}

	${(props) =>
		!props.isLiked &&
		css`
			border: solid 1px rgba(0, 0, 0, 0.5);
			background-color: transparent;
			color: #000000;
		`}


	transition: all 200ms ease-in;

	@media screen and (min-width: 30.625em) {
		left: 2rem;
	}
`;

const ModalPadding = styled.div`
	padding: 30px 0 0;
`;

const Homestyles = { Container, MediaImage, ModalPadding, MediaButton };

export default Homestyles;
