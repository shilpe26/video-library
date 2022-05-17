import axios from "axios";

export const getHistoryService = async (token) => {
	return await axios.get("/api/user/history", {
		headers: { authorization: token },
	});
};

export const addToHistoryService = async (video, token) => {
	return await axios.post(
		"/api/user/history",
		{ video },
		{ headers: { authorization: token } }
	);
};

export const deleteFromHistoryService = async (videoId, token) => {
	return await axios.delete(`/api/user/history/${videoId}`, {
		headers: { authorization: token },
	});
};

export const clearAllHistoryService = async (token) => {
	return await axios.delete(`/api/user/history/all`, {
		headers: { authorization: token },
	});
};
