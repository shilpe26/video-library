import { useEffect } from "react";
import axios from "axios";
import { usePlaylist } from "./playlist-context";
import { useAlert } from "react-alert";

function usePlaylistServerCall() {
	const { playlistDispatch } = usePlaylist();
	const alert = useAlert();
	const token = localStorage.getItem("userToken");

	useEffect(() => {
		(async () => {
			if (token) {
				try {
					const response = await axios.get("/api/user/playlists", {
						headers: { authorization: token },
					});
					playlistDispatch({
						type: "ALL_PLAYLIST_REQUEST",
						payload: { status: true },
					});
					if (response.status === 200) {
						playlistDispatch({
							type: "ALL_PLAYLIST_SUCCESS",
							payload: response.data.playlists,
						});
					}
				} catch (error) {
					alert.show("Playlist: Internal Server Error", {
						type: "error",
					});
				}
			}
		})();
	});

	const createPlaylist = async (title) => {
		try {
			const response = await axios.post(
				"/api/user/playlists",
				{ playlist: { title: title, description: "User Created Playlist" } },
				{ headers: { authorization: token } }
			);
			if (response.status === 200 || response.status === 201) {
				playlistDispatch({
					type: "CREATE_PLAYLIST",
					payload: response.data.playlists,
				});
				alert.show("Playlist Created", {
					type: "success",
				});
			}
		} catch (err) {
			alert.show("Error: Can't Create Playlist", {
				type: "error",
			});
		}
	};

	const deletePlaylist = async (playlistID) => {
		try {
			const response = await axios.delete(`/api/user/playlists/${playlistID}`, {
				headers: { authorization: token },
			});
			if (response.status === 200 || response.status === 201) {
				playlistDispatch({
					type: "DELETE_PLAYLIST",
					payload: response.data.playlists,
				});
				alert.show("Playlist Deleted", {
					type: "success",
				});
			}
		} catch (err) {
			alert.show("Error: Can't Delete Playlist", {
				type: "error",
			});
		}
	};

	const addToPlaylist = async (playlistID, video) => {
		try {
			const response = await axios.post(
				`/api/user/playlists/${playlistID}`,
				{ video },
				{ headers: { authorization: token } }
			);
			if (response.status === 200 || response.status === 201) {
				playlistDispatch({
					type: "ADD_TO_PLAYLIST",
					payload: response.data.playlist,
				});
				alert.show("Added to Playlist", {
					type: "success",
				});
			}
		} catch (err) {
			alert.show("Error: Can't Add to Playlist", {
				type: "error",
			});
		}
	};

	const deleteFromPlaylist = async (playlistID, videoID) => {
		try {
			const response = await axios.delete(
				`/api/user/playlists/${playlistID}/${videoID}`,
				{
					headers: {
						authorization: token,
					},
				}
			);
			if (response.status === 200 || response.status === 201) {
				playlistDispatch({
					type: "DELETE_FROM_PLAYLIST",
					payload: response.data.playlist,
				});
				alert.show("Removed From Playlist", {
					type: "success",
				});
			}
		} catch (err) {
			alert.show("Error: Can't Delete From Playlist", {
				type: "error",
			});
		}
	};

	const getPlaylistById = async (playlistID, encodedToken) => {
		try {
			const response = await axios.get(`/api/user/playlists/${playlistID}`, {
				headers: { authorization: encodedToken },
			});
			playlistDispatch({
				type: "PLAYLIST_REQUEST",
				payload: { status: true },
			});
			if (response.status === 200) {
				playlistDispatch({
					type: "PLAYLIST_SUCCESS",
					payload: response.data.playlist,
				});
			}
		} catch (err) {
			alert.show("Error: Can't Fetch Playlist Details", {
				type: "error",
			});
		}
	};

	return {
		createPlaylist,
		deleteFromPlaylist,
		deletePlaylist,
		addToPlaylist,
		getPlaylistById,
	};
}

export { usePlaylistServerCall };
