import React from "react";
import { VideoCards } from "../Components/Components";
import { useUserData } from "../Context/userDataContext/userData-context";
import { EmptyMessage } from "../pages/Pages";
import "../stylesheets/watchLaterContainer.css";

function WatchLaterContainer() {
	const {
		dataState: { watchlater },
	} = useUserData();

	return (
		<div>
			{watchlater.length ? (
				<div className="item-listing">
					{watchlater.map(({ _id, title, creator }) => {
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

export { WatchLaterContainer };
