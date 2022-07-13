import React from "react";
import { VideoCards } from "./Components";
import { useUserData } from "../Context/userDataContext/userData-context";
import { EmptyMessage } from "../pages/Pages";

function LikedVideoContainer() {
	const {
		dataState: { likes },
	} = useUserData();
	return (
		<div>
			{likes.length ? (
				<div className="item-listing">
					{likes.map(({ _id, title, creator }) => {
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
