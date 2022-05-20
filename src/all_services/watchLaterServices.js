import axios from "axios";

export const getWatchLaterService = async (encodedToken) => {
	return await axios.get("/api/user/watchlater", {
		headers: { authorization: encodedToken },
	});
};

export const addToWatchLaterService = async (video, encodedToken) => {
	return await axios.post(
		"/api/user/watchlater",
		{ video },
		{ headers: { authorization: encodedToken } }
	);
};

export const deleteFromWatchLaterService = async (videoId, encodedToken) => {
	return await axios.delete(`/api/user/watchlater/${videoId}`, {
		headers: { authorization: encodedToken },
	});
};
