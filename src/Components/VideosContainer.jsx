import React from "react";
import { VideoCards } from "./Components";
import { useVideo } from "../Context/videoContext/video-context";
import "../stylesheets/videosContainer.css";

function VideosContainer() {
	const { videoCategoryHandler, filteredVideos } = useVideo();

	return (
		<div className="video-listing mt-8">
			<div className="chips">
				<button
					value="all"
					onClick={(e) => videoCategoryHandler(e.target.value)}
					className="chip flex items-center cursor"
				>
					All
				</button>
				<button
					value="fundamentals"
					onClick={(e) => videoCategoryHandler(e.target.value)}
					className="chip flex items-center cursor"
				>
					Fundamentals
				</button>
				<button
					value="aggressive"
					onClick={(e) => videoCategoryHandler(e.target.value)}
					className="chip flex items-center cursor"
				>
					Agressive
				</button>
				<button
					value="german_shepherd"
					onClick={(e) => videoCategoryHandler(e.target.value)}
					className="chip flex items-center cursor"
				>
					German Shepherd
				</button>
			</div>
			<div className="video-card-listing flex flex-wrap items-stretch mt-2">
				{filteredVideos.map(({ _id, title, creator }) => (
					<VideoCards key={_id} _id={_id} title={title} creator={creator} />
				))}
			</div>
		</div>
	);
}

export { VideosContainer };
