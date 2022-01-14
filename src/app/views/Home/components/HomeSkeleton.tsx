import { Card, SkeletonBodyText, SkeletonThumbnail, TextContainer } from "@shopify/polaris";
import Homestyles from "./styles";

const HomeSkeleton = () => {
	return (
		<Homestyles.Container>
			{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((elem) => {
				return (
					<Card sectioned key={elem}>
						<TextContainer>
							<SkeletonThumbnail size="large" />
							<SkeletonBodyText />
						</TextContainer>
					</Card>
				);
			})}
		</Homestyles.Container>
	);
};

export default HomeSkeleton;
