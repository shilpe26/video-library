import React from "react";
import { VideoCards } from "../Components/Components";
import { useWatchlater } from "../Context/watchLater-context";
import { EmptyMessage } from "../pages/Pages";
import "../stylesheets/watchLaterContainer.css";

function WatchLaterContainer() {
	const { watchlater } = useWatchlater();
	return (
		<div>
			{watchlater.watchlaterItems.length ? (
				<div className="item-list">
					{watchlater.watchlaterItems.map(({ _id, title, creator }) => {
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
