import Cookies from 'js-cookie';

export const getFromCookies = (key: string) => {
	let result = [];
	if (key) {
		const localData = Cookies.get(key);
		if (localData && localData.length > 0) {
			result = JSON.parse(localData);
		}
	}

	console.log({ result });
	return result;
};

export const setCookie = (key: string, value: any) => {
	console.log(`Setted value to '${key}' cookie`, { value });
	Cookies.set(key, JSON.stringify(value));
	// Cookies.converter.write(value, key);
};
