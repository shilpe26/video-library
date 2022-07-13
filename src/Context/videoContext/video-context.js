import { createContext, useContext, useState } from "react";
import { useInitialVideos } from "./useInitialVideos";

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
	const { videoData } = useInitialVideos();
	const [videosCategory, setVideosCategory] = useState({ category: "all" });

	const videoCategoryHandler = (selectedCategory) => {
		setVideosCategory((val) => ({ ...val, category: selectedCategory }));
	};

	const filteredVideos =
		videosCategory.category === "all"
			? videoData
			: videoData.filter(
					(video) => video.categoryName === videosCategory.category
			  );

	return (
		<VideoContext.Provider
			value={{ videosCategory, videoCategoryHandler, filteredVideos }}
		>
			{children}
		</VideoContext.Provider>
	);
};

const useVideo = () => useContext(VideoContext);

export { useVideo, VideoProvider };
