import { createContext, useContext, useReducer, useState } from "react";
import { playlistReducer } from "./playlistReducer";

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
	const [modal, setModal] = useState(null);
	const [playlistState, playlistDispatch] = useReducer(playlistReducer, {
		playlists: [],
		loading: false,
	});

	return (
		<PlaylistContext.Provider
			value={{
				playlistState,
				playlistDispatch,
				modal,
				setModal,
			}}
		>
			{children}
		</PlaylistContext.Provider>
	);
};
const usePlaylist = () => useContext(PlaylistContext);
export { usePlaylist, PlaylistProvider };
