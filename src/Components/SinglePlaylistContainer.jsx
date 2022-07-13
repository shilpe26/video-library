import React from "react";
import { useParams } from "react-router-dom";
import { VideoCards } from "../Components/Components";
import { EmptyMessage } from "../pages/Pages";
import { usePlaylist } from "../Context/playlistContext/playlist-context";

function SinglePlaylistContainer() {
	const { id } = useParams();
	const { playlistState } = usePlaylist();
	const currentPlaylist = playlistState.playlists.find(
		(item) => item._id === id
	);

	return (
		<div>
			{currentPlaylist && currentPlaylist.videos.length !== 0 ? (
				<div className="item-listing">
					{currentPlaylist.videos.map(({ _id, title, creator }) => {
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

export { SinglePlaylistContainer };
