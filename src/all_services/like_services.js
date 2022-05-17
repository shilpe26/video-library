import axios from "axios";

export const getLikesService = async (token) => {
	return await axios.get("/api/user/likes", {
		headers: { authorization: token },
	});
};

export const addToLikesService = async (video, token) => {
	return await axios.post(
		"/api/user/likes",
		{ video },
		{ headers: { authorization: token } }
	);
};

export const deleteFromLikesService = async (videoId, token) => {
	return await axios.delete(`/api/user/likes/${videoId}`, {
		headers: { authorization: token },
	});
};
