import axios from "axios";

export const getLikesService = async (encodedToken) => {
	return await axios.get("/api/user/likes", {
		headers: { authorization: encodedToken },
	});
};

export const addToLikesService = async (video, encodedToken) => {
	return await axios.post(
		"/api/user/likes",
		{ video },
		{ headers: { authorization: encodedToken } }
	);
};

export const deleteFromLikesService = async (videoId, encodedToken) => {
	return await axios.delete(`/api/user/likes/${videoId}`, {
		headers: { authorization: encodedToken },
	});
};
