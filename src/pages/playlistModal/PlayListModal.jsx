import React, { useState } from "react";
import { usePlaylist } from "../../Context/playlist-context";
import "./playListModal.css";

function PlayListModal({ modal }) {
	const { playlistState, createPlaylist, setModal, addToPlaylist } =
		usePlaylist();
	const [title, setTitle] = useState("");

	const createClickHandler = () => {
		if (title !== "") {
			createPlaylist(title);
			setTitle("");
		}
	};
	return (
		<div className={`modal-container ${modal ? "show" : "none"}`}>
			<div className="card modal mt-48 border-8">
				<div>
					<h2>Your Playlists</h2>
				</div>
				<div className="text-sm card-desc">
					<ul className="play-list">
						{playlistState.playlists.map((item) => {
							return (
								<li
									key={item._id}
									onClick={() => {
										addToPlaylist(item._id, modal);
										setModal(null);
									}}
								>
									{" "}
									<div className="ply-new-items flex items-end justify-end border-4">
										<span className="mt-4">{item.title}</span>
										<span className="material-icons mt-2 cursor">add</span>
									</div>
								</li>
							);
						})}
					</ul>

					<div className="icon-div">
						<span
							onClick={() => setModal(null)}
							className="material-icons cursor"
							id="close-modal"
						>
							clear
						</span>
					</div>
					<div className="modal-footer">
						<input
							type="text"
							value={title}
							className="ply-modal-input"
							placeholder="Playlist Name"
							onChange={(e) => setTitle(e.target.value)}
							aria-label="true"
						/>
						<button
							onClick={() => createClickHandler()}
							className="btn btn-secondary"
						>
							Create New
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export { PlayListModal };
