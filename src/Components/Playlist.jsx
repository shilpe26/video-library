import React from "react";
import { Drawer, PlaylistContainer } from "./Components";

function Playlist() {
	return (
		<div>
			<div className="main-container">
				<Drawer />
				<PlaylistContainer />
			</div>
		</div>
	);
}

export { Playlist };
