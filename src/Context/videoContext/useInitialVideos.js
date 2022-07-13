import { useState, useEffect } from "react";
import axios from "axios";

function useInitialVideos() {
	const [videoData, setVideoData] = useState([]);

	useEffect(() => {
		try {
			(async () => {
				const response = await axios.get("/api/videos");
				const videosArray = response.data.videos;
				setVideoData([...videosArray]);
			})();
		} catch (err) {
			console.log(err);
		}
	}, []);

	return { videoData };
}

export { useInitialVideos };
