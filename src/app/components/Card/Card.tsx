import styled from "@emotion/styled";
import { FC } from "react";

interface CardProps {
	imageURL: string;
	title: string;
	date: string;
	isLiked: boolean;
	description: string;
}

const Card: FC<CardProps> = (props) => {
	return (
		<Container>
			<Image src={props.imageURL} alt={props.title} />
			<Content>
				<Title>{props.title}</Title>
				<Description>{props.description}</Description>
				{/* //TODO create component for this button  */}
				<button>Like</button>
			</Content>
		</Container>
	);
};

const Container = styled.section``;

const Image = styled.img`
	display: block;
	width: 100%;
	object-fit: cover;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`;

const Content = styled.div`
	padding: 30px 20px;
`;

const Title = styled.h3``;

const Description = styled.p``;

export default Card;
