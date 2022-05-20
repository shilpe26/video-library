import axios from "axios";

export const getAllPlaylistService = async (encodedToken) => {
	return await axios.get("/api/user/playlists", {
		headers: { authorization: encodedToken },
	});
};
export const createPlaylistService = async (title, encodedToken) => {
	return await axios.post(
		"/api/user/playlists",
		{ playlist: { title: title, description: "User Created Playlist" } },
		{ headers: { authorization: encodedToken } }
	);
};
export const deletePlaylistService = async (playlistID, encodedToken) => {
	return await axios.delete(`/api/user/playlists/${playlistID}`, {
		headers: { authorization: encodedToken },
	});
};

export const getPlaylistByIdService = async (playlistID, encodedToken) => {
	return await axios.get(`/api/user/playlists/${playlistID}`, {
		headers: { authorization: encodedToken },
	});
};

export const addToPlaylistService = async (playlistID, video, encodedToken) => {
	return axios.post(
		`/api/user/playlists/${playlistID}`,
		{ video },
		{ headers: { authorization: encodedToken } }
	);
};
export const deleteFromPlaylistService = async (
	playlistID,
	videoID,
	encodedToken
) => {
	return await axios.delete(`/api/user/playlists/${playlistID}/${videoID}`, {
		headers: {
			authorization: encodedToken,
		},
	});
};
