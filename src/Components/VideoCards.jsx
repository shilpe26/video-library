import React, { useState, useEffect } from "react";
import "../stylesheets/videoCards.css";
import { useAuth } from "../Context/auth-context";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useLikes } from "../Context/like-context";
import { useHistory } from "../Context/history-context";
import { useWatchlater } from "../Context/watchLater-context";
import { usePlaylist } from "../Context/playlist-context";
import Dogo from "../assets/bg-doggo.png";
function VideoCards({ _id, title, creator }) {
	const location = useLocation();
	const { authState } = useAuth();
	const { id } = useParams();
	const navigate = useNavigate();
	const video = { _id, title, creator };
	const { watchlater, addToWatcherLater, deleteFromWatchlater } =
		useWatchlater();
	const { likesState, deleteFromLikes } = useLikes();
	const { historyState, addToHistory, deleteFromHistory } = useHistory();
	const { setModal, deleteFromPlaylist } = usePlaylist();
	const inLikes = likesState.likes.find((item) => item._id === video._id);
	const inHistory = historyState.history.find((item) => item._id === video._id);
	const [dropdown, setDropdown] = useState("none");
	const [inWatchlater, setInWatchlater] = useState(false);
	useEffect(() => {
		if (watchlater.watchlaterItems) {
			watchlater.watchlaterItems.find((item) => item._id === video._id) &&
				setInWatchlater(true);
		}
	}, [watchlater.watchlaterItems]);

	const addClickHandler = () => {
		if (!authState.encodedToken.length === 0) {
			navigate("/login");
		}
		addToWatcherLater(video);
		setDropdown("none");
	};

	const deleteClickHandler = () => {
		if (!authState.encodedToken.length === 0) {
			navigate("/login");
		}
		deleteFromWatchlater(_id);
		setDropdown("none");
	};
	const dislikeHandler = () => {
		deleteFromLikes(video);
		setDropdown("none");
	};
	const addToPlaylistHandler = () => {
		if (!authState.encodedToken.length === 0) {
			navigate("/login");
		} else {
			setModal(video);
			setDropdown("none");
		}
	};
	return (
		<div className="card border-8 cursor">
			<div>
				<img
					onClick={() => {
						navigate(`/videos/${_id}`);
						authState.encodedToken.length !== 0 &&
							!inHistory &&
							addToHistory(video);
					}}
					className="card-img mt-2"
					src={`https://i.ytimg.com/vi/${_id}/maxresdefault.jpg`}
					alt="dogo-image"
				/>
			</div>
			<ul className="video-card-list p-0">
				<li className="video-card-items flex">
					<img
						src={Dogo}
						className="avatar avatar-small mt-4"
						alt="dogo-avatar"
					/>
					<div className="list-content text-sm">
						<p className="font-semibold text-md">
							{title.substring(0, 25) + " ..."}
						</p>
						<p className="ffont-light text-md">{creator}</p>
					</div>
					<button
						onClick={() => setDropdown("show")}
						className="icon-btn three-dots material-icons mt-8 cursor"
					>
						more_vert
					</button>
				</li>
			</ul>
			<ul
				className={`list-group dropdown-list pl-0 text-md p-4 border-8 ${dropdown}`}
			>
				<div className="icon-div">
					<span
						onClick={() => setDropdown("none")}
						className="material-icons clear-icon ml-2 p-2p"
					>
						clear
					</span>
				</div>
				<li>
					<span className="material-icons">playlist_add</span>
					<span onClick={() => addToPlaylistHandler()}>Add to Playlist</span>
				</li>

				<li>
					<span className="material-icons">watch_later</span>
					{!inWatchlater && (
						<span onClick={() => addClickHandler()}>Add to Watch later</span>
					)}

					{inWatchlater && (
						<span onClick={() => deleteClickHandler()}>
							Delete From Watch Later
						</span>
					)}
				</li>
				{inLikes && (
					<li>
						<span className="material-icons">thumb_down</span>
						<span onClick={() => dislikeHandler()}>Dislke</span>
					</li>
				)}
				{location.pathname === "/history" && (
					<li>
						<span className="material-icons">thumb_down</span>
						<span onClick={() => deleteFromHistory(video)}>
							Delete From History
						</span>
					</li>
				)}
				{location.pathname === `/playlist/${id}` && (
					<li>
						<span className="material-icons">delete</span>
						<span onClick={() => deleteFromPlaylist(id, video._id)}>
							Delete From Playlist
						</span>
					</li>
				)}
			</ul>
		</div>
	);
}

export { VideoCards };
