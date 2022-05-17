import React from "react";
import { Drawer, VideosContainer } from "../../Components/Components";
import "./videoListing.css";
function VideoListing() {
	return (
		<div>
			<div className="main-container">
				<Drawer />
				<VideosContainer />
			</div>
		</div>
	);
}

export { VideoListing };
