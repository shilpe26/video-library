import React from "react";
import "./videoPage.css";
import { Drawer, SingleVideoContainer } from "../../Components/Components";
function VideoPage() {
	return (
		<div className="main-container">
			<Drawer />
			<SingleVideoContainer />
		</div>
	);
}

export { VideoPage };
