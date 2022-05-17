import axios from "axios";

export const getAllPlaylistService = async (token) => {
	return await axios.get("/api/user/playlists", {
		headers: { authorization: token },
	});
};
export const createPlaylistService = async (title, token) => {
	return await axios.post(
		"/api/user/playlists",
		{ playlist: { title: title, description: "User Created Playlist" } },
		{ headers: { authorization: token } }
	);
};
export const deletePlaylistService = async (playlistID, token) => {
	return await axios.delete(`/api/user/playlists/${playlistID}`, {
		headers: { authorization: token },
	});
};

export const getPlaylistByIdService = async (playlistID, token) => {
	return await axios.get(`/api/user/playlists/${playlistID}`, {
		headers: { authorization: token },
	});
};

export const addToPlaylistService = async (playlistID, video, token) => {
	return axios.post(
		`/api/user/playlists/${playlistID}`,
		{ video },
		{ headers: { authorization: token } }
	);
};
export const deleteFromPlaylistService = async (playlistID, videoID, token) => {
	return await axios.delete(`/api/user/playlists/${playlistID}/${videoID}`, {
		headers: {
			authorization: token,
		},
	});
};
