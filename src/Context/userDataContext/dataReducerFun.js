import { userInitialData } from "./userInitialData";

export const dataReducerFun = (dataState, action) => {
	switch (action.type) {
		case "WATCHLATER":
			return { ...dataState, watchlater: action.payload };
		case "HISTORY":
			return { ...dataState, history: action.payload };
		case "LIKES":
			return { ...dataState, likes: action.payload };
		case "CLEAR_ALL":
			return userInitialData;
		default:
			return dataState;
	}
};
