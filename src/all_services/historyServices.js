import axios from "axios";

export const getHistoryService = async (encodedToken) => {
	return await axios.get("/api/user/history", {
		headers: { authorization: encodedToken },
	});
};

export const addToHistoryService = async (video, encodedToken) => {
	return await axios.post(
		"/api/user/history",
		{ video },
		{ headers: { authorization: encodedToken } }
	);
};

export const deleteFromHistoryService = async (videoId, encodedToken) => {
	return await axios.delete(`/api/user/history/${videoId}`, {
		headers: { authorization: encodedToken },
	});
};

export const clearAllHistoryService = async (encodedToken) => {
	return await axios.delete(`/api/user/history/all`, {
		headers: { authorization: encodedToken },
	});
};
