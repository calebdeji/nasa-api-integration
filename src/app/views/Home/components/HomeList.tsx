import * as React from "react";
import { MediaCard } from "@shopify/polaris";

import { APOD } from "app/api/apod/types";
import Homestyles from "./styles";
import useStorage from "app/hooks/useStorage";

interface HomeListProps {
	items: Array<APOD>;
}

const HomeList: React.FC<HomeListProps> = (props) => {
	return (
		<Homestyles.Container>
			{props.items.map((apod) => {
				return <Card apod={apod} key={`${apod.title}-${apod.explanation}`} />;
			})}
		</Homestyles.Container>
	);
};

const Card: React.FC<{ apod: APOD }> = ({ apod }) => {
	const { remove, save, storage } = useStorage<Array<string>>({ storedItemKey: "liked_contents" });

	const id = `${apod.title}-${apod.explanation}`;

	const isLiked = storage.includes(id);

	const unLike = () => {
		remove(id);
	};

	const like = () => {
		save(id, id);
	};

	return (
		<MediaCard title={apod.title} description={apod.explanation} portrait key={`${apod.title}-${apod.explanation}`}>
			<Homestyles.MediaImage src={apod.url} />
			<Homestyles.MediaButton isLiked={isLiked} onClick={isLiked ? unLike : like}>
				{isLiked ? "Unlike" : "Like"}
			</Homestyles.MediaButton>
		</MediaCard>
	);
};

export default HomeList;
