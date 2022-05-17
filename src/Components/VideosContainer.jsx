import React, { useEffect } from "react";
import { VideoCards } from "./Components";
import { useVideos } from "../Context/video-context";
import {
	ALL,
	FUNDAMENTALS,
	AGGRESSIVE,
	GERMAN_SHEPHERD,
} from "../global_constants/video-constants";
import { categorisedVideos } from "../utils/filterFunction";
import "../stylesheets/videosContainer.css";

function VideosContainer() {
	const { state, dispatch } = useVideos();
	const categorisedData = categorisedVideos(state.videos, state.categories);
	const data = categorisedData;

	return (
		<div className="video-listing mt-8">
			<div className="chips flex flex-wrap p-4">
				<button
					onClick={() => dispatch({ type: ALL })}
					className="chip flex items-center cursor"
				>
					All
				</button>
				<button
					onClick={() => dispatch({ type: FUNDAMENTALS })}
					className="chip flex items-center cursor"
				>
					Fundamentals
				</button>
				<button
					onClick={() => dispatch({ type: AGGRESSIVE })}
					className="chip flex items-center cursor"
				>
					Agressive
				</button>
				<button
					onClick={() => dispatch({ type: GERMAN_SHEPHERD })}
					className="chip flex items-center cursor"
				>
					German Shepherd
				</button>
			</div>
			<div className="video-card-listing flex flex-wrap items-stretch mt-2">
				{data.map(({ _id, title, creator }) => (
					<VideoCards key={_id} _id={_id} title={title} creator={creator} />
				))}
			</div>
		</div>
	);
}

export { VideosContainer };
