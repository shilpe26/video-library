import React from "react";
import { VideoCards } from "./Components";
import { useLikes } from "../Context/like-context";
import { EmptyMessage } from "../pages/Pages";

function LikedVideoContainer() {
	const { likesState } = useLikes();
	return (
		<div>
			{likesState.likes.length ? (
				<div className="item-list">
					{likesState.likes.map(({ _id, title, creator }) => {
						return (
							<VideoCards key={_id} _id={_id} title={title} creator={creator} />
						);
					})}
				</div>
			) : (
				<EmptyMessage />
			)}
		</div>
	);
}

export { LikedVideoContainer };
