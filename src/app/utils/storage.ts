export type StorageKey = "liked_contents";

const get = (key: StorageKey = "liked_contents") => {
	var storedData = window.localStorage.getItem(key);
	if (storedData != null) {
		const token = JSON.parse(storedData);
		return token;
	}
	return null;
};

const save = (key: StorageKey = "liked_contents", value: any): void => {
	window.localStorage.setItem(key, JSON.stringify(value));
};

const Storage = {
	get,
	save,
};

export default Storage;
