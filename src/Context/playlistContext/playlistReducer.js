const playlistReducer = (state, action) => {
	switch (action.type) {
		case "ALL_PLAYLIST_REQUEST":
			return { ...state, loading: true };
		case "ALL_PLAYLIST_SUCCESS":
			return { ...state, playlists: [...action.payload] };
		case "DELETE_PLAYLIST":
			return { ...state, playlists: [...action.payload] };
		case "CREATE_PLAYLIST":
			return { ...state, playlists: [...action.payload] };
		case "PLAYLIST_REQUEST":
			return { ...state, loading: true };
		case "PLAYLIST_SUCCESS":
			return { ...state, playlists: [...action.payload] };
		case "ADD_TO_PLAYLIST":
			return {
				...state,
				playlists: state.playlists.map((item) =>
					item._id === action.payload._id ? { ...action.payload } : item
				),
			};
		case "DELETE_FROM_PLAYLIST":
			return {
				...state,
				playlists: state.playlists.filter(
					(item) => item._id !== action.payload._id
				),
			};

		default:
			return state;
	}
};
export { playlistReducer };
