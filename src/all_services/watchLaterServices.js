import axios from "axios";

export const getWatchLaterService = async (token) => {
	return await axios.get("/api/user/watchlater", {
		headers: { authorization: token },
	});
};

export const addToWatchLaterService = async (video, token) => {
	return await axios.post(
		"/api/user/watchlater",
		{ video },
		{ headers: { authorization: token } }
	);
};

export const deleteFromWatchLaterService = async (videoId, token) => {
	return await axios.delete(`/api/user/watchlater/${videoId}`, {
		headers: { authorization: token },
	});
};
