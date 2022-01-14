import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const Loader = () => {
	return (
		<Container>
			<Image>
				<Animator />
			</Image>
			<Content>
				<Title>
					<Animator />
				</Title>
				<Description>
					<Animator />
				</Description>
			</Content>
		</Container>
	);
};

const animation = keyframes`
  from {
    background-color : rgba(0,0,0,0.5);
  }
  to{
    background-color : rgba(0,0,0);
  }
`;

const Animator = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	animation: ${animation} 200ms ease-in-out alternate;
`;

const Container = styled.div``;

const Image = styled.div`
	width: 100%;
	height: 100px;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	position: relative;
`;

const Content = styled.div`
	height: 50px;
	padding: 30px 20px;
`;

const Title = styled.div`
	height: 30px;
	position: relative;
`;

const Description = styled.div`
	height: 100px;
	position: relative;
`;

export default Loader;
