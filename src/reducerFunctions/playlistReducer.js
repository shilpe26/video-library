import {
	ALL_PLAYLIST_SUCCESS,
	ALL_PLAYLIST_REQUEST,
	ADD_TO_PLAYLIST,
	DELETE_FROM_PLAYLIST,
	PLAYLIST_REQUEST,
	PLAYLIST_SUCCESS,
	CREATE_PLAYLIST,
	DELETE_PLAYLIST,
} from "../global_constants/playlist-constants";

const playlistReducer = (state, action) => {
	switch (action.type) {
		case ALL_PLAYLIST_REQUEST:
			return { ...state, loading: true };
		case ALL_PLAYLIST_SUCCESS:
			return { ...state, playlists: [...action.payload] };
		case DELETE_PLAYLIST:
			return { ...state, playlists: [...action.payload] };
		case CREATE_PLAYLIST:
			return { ...state, playlists: [...action.payload] };
		case PLAYLIST_REQUEST:
			return { ...state, loading: true };
		case PLAYLIST_SUCCESS:
			return { ...state, playlists: [...action.payload] };
		case ADD_TO_PLAYLIST:
			return {
				...state,
				playlists: state.playlists.map((item) => {
					if (item._id === action.payload._id) {
						return { ...action.payload };
					}
					return item;
				}),
			};
		case DELETE_FROM_PLAYLIST:
			return {
				...state,
				playlists: state.playlists.map((item) => {
					if (item._id === action.payload._id) {
						return { ...action.payload };
					}
					return item;
				}),
			};

		default:
			return state;
	}
};
export { playlistReducer };
