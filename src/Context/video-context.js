import { createContext, useContext, useReducer, useEffect } from "react";
import {
	VIDEO_LIST_REQUEST,
	VIDEO_LIST_SUCCESS,
} from "../global_constants/video-constants.js";
import { videoListReducer } from "../reducerFunctions/videoListReducer";
import { videoListService } from "../all_services/videoService";

const VideoListContext = createContext();

const VideoListProvider = ({ children }) => {
	const [state, dispatch] = useReducer(videoListReducer, {
		videos: [],
		categories: {
			fundamentals: false,
			aggressive: false,
			german_shepherd: false,
		},
		videoLoading: false,
	});

	useEffect(() => {
		(async () => {
			try {
				const res = await videoListService();

				dispatch({
					type: VIDEO_LIST_REQUEST,
					payload: { status: true },
				});

				if (res.status === 200) {
					const videos = res.data.videos;
					dispatch({
						type: VIDEO_LIST_SUCCESS,
						payload: { videos, status: false },
					});
				}
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	return (
		<VideoListContext.Provider value={{ state, dispatch }}>
			{children}
		</VideoListContext.Provider>
	);
};
const useVideos = () => useContext(VideoListContext);
export { useVideos, VideoListProvider };
