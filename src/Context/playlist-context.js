import {
	createContext,
	useContext,
	useEffect,
	useReducer,
	useState,
} from "react";
import { useAuth } from "./auth-context";
import {
	getAllPlaylistService,
	createPlaylistService,
	deletePlaylistService,
	addToPlaylistService,
	deleteFromPlaylistService,
} from "../all_services/playlist_services";
import {
	ALL_PLAYLIST_SUCCESS,
	ALL_PLAYLIST_REQUEST,
	ADD_TO_PLAYLIST,
	DELETE_FROM_PLAYLIST,
	CREATE_PLAYLIST,
	DELETE_PLAYLIST,
} from "../global_constants/playlist-constants";
import { playlistReducer } from "../reducerFunctions/playlistReducer";

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
	const { authState } = useAuth();
	const [modal, setModal] = useState(null);
	const [playlistState, playlistDispatch] = useReducer(playlistReducer, {
		playlists: [],
		loading: false,
	});
	useEffect(() => {
		(async () => {
			if (authState.encodedToken.length === 0) {
				try {
					const response = await getAllPlaylistService(authState.encodedToken);
					playlistDispatch({
						type: ALL_PLAYLIST_REQUEST,
						payload: { status: true },
					});
					if (response.status === 200) {
						playlistDispatch({
							type: ALL_PLAYLIST_SUCCESS,
							payload: response.data.playlists,
						});
					}
				} catch (error) {
					console.log(error);
				}
			}
		})();
	});

	const createPlaylist = async (title) => {
		try {
			const response = await createPlaylistService(
				title,
				authState.encodedToken
			);
			if (response.status === 200 || response.status === 201) {
				playlistDispatch({
					type: CREATE_PLAYLIST,
					payload: response.data.playlists,
				});
			}
		} catch (err) {
			console.log(err);
		}
	};

	const deletePlaylist = async (playlistID) => {
		try {
			const response = await deletePlaylistService(
				playlistID,
				authState.encodedToken
			);
			if (response.status === 200 || response.status === 201) {
				playlistDispatch({
					type: DELETE_PLAYLIST,
					payload: response.data.playlists,
				});
			}
		} catch (err) {
			console.log(err);
		}
	};

	const addToPlaylist = async (playlistID, video) => {
		try {
			const response = await addToPlaylistService(
				playlistID,
				video,
				authState.encodedToken
			);
			if (response.status === 200 || response.status === 201) {
				playlistDispatch({
					type: ADD_TO_PLAYLIST,
					payload: response.data.playlist,
				});
			}
		} catch (err) {
			console.log(err);
		}
	};
	const deleteFromPlaylist = async (playlistID, videoID) => {
		try {
			const response = await deleteFromPlaylistService(
				playlistID,
				videoID,
				authState.encodedToken
			);
			if (response.status === 200 || response.status === 201) {
				playlistDispatch({
					type: DELETE_FROM_PLAYLIST,
					payload: response.data.playlist,
				});
			}
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<PlaylistContext.Provider
			value={{
				playlistState,
				playlistDispatch,
				createPlaylist,
				deletePlaylist,
				modal,
				setModal,
				addToPlaylist,
				deleteFromPlaylist,
			}}
		>
			{children}
		</PlaylistContext.Provider>
	);
};
const usePlaylist = () => useContext(PlaylistContext);
export { usePlaylist, PlaylistProvider };
