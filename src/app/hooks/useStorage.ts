import Storage, { StorageKey } from "app/utils/storage";
import * as React from "react";
import useComponentDidUpdate from "./useComponentDidUpdate";

interface Props {
	storedItemKey: StorageKey;
}

const useStorage = <T extends Array<any>>(props: Props) => {
	const [storage, setStorage] = React.useState<T>([] as unknown as T);

	React.useEffect(() => {
		var response = Storage.get(props.storedItemKey);
		if (response != null) {
			setStorage(response);
		}
	}, []);

	useComponentDidUpdate(() => {
		Storage.save(props.storedItemKey, storage);
	}, [storage]);

	const save = (prevData: T[0], newData: T[0]) => {
		setStorage((storage) => {
			var data = storage.filter((el) => el !== prevData) as T;

			data.push(newData);

			return data;
		});
	};

	const remove = (prevData: T[0]) => {
		setStorage((storage) => {
			var data = storage.filter((el) => el !== prevData) as T;

			return data;
		});
	};

	return { storage, save, remove };
};

export default useStorage;
