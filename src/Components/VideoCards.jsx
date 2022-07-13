import React, { useState, useEffect } from "react";
import { useAuth } from "../Context/auth-context";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { usePlaylist } from "../Context/playlistContext/playlist-context";
import Dogo from "../assets/bg-doggo.png";
import "../stylesheets/videoCards.css";
import { useAlert } from "react-alert";
import { useUserData } from "../Context/userDataContext/userData-context";
import { useLikesServerCalls } from "../Context/userDataContext/useLikesServerCalls";
import { useWatchLaterServerCalls } from "../Context/userDataContext/useWatchLaterServerCalls";
import { useHistoryServerCalls } from "../Context/userDataContext/useHistoryServerCalls";
import { usePlaylistServerCall } from "../Context/playlistContext/usePlaylistServerCall";

function VideoCards({ _id, title, creator }) {
	const location = useLocation();
	const { authState } = useAuth();
	const { id } = useParams();
	const navigate = useNavigate();
	const alert = useAlert();
	const {
		dataState: { watchlater, likes },
	} = useUserData();
	const video = { _id, title, creator };
	const { addToWatchLater, removeFromWatchLater } = useWatchLaterServerCalls();
	const { removeFromLikes } = useLikesServerCalls();
	const { removeFromHistory } = useHistoryServerCalls();
	const { setModal } = usePlaylist();
	const { deleteFromPlaylist } = usePlaylistServerCall();

	const inLikes = likes.find((item) => item._id === video._id);
	const [dropdown, setDropdown] = useState("none");
	const [inWatchlater, setInWatchlater] = useState(false);

	useEffect(() => {
		if (watchlater) {
			watchlater.find((item) => item._id === video._id) &&
				setInWatchlater(true);
		}
	}, [watchlater]);

	const addClickHandler = () => {
		if (authState.encodedToken.length === 0) {
			navigate("/login");
			alert.show("Please Login First!", { type: "info" });
		}
		addToWatchLater(video);
		setDropdown("none");
	};

	const deleteClickHandler = () => {
		if (authState.encodedToken.length === 0) {
			navigate("/login");
			alert.show("Please Login First!", { type: "info" });
		}
		removeFromWatchLater(_id);
		setDropdown("none");
	};
	const dislikeHandler = () => {
		removeFromLikes(_id);
		setDropdown("none");
	};
	const addToPlaylistHandler = () => {
		if (authState.encodedToken.length === 0) {
			navigate("/login");
			alert.show("Please Login First!", { type: "info" });
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
					<span onClick={() => addToPlaylistHandler(_id)}>Add to Playlist</span>
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
						<span onClick={() => dislikeHandler(_id)}>Dislke</span>
					</li>
				)}
				{location.pathname === "/history" && (
					<li>
						<span className="material-icons">thumb_down</span>
						<span onClick={() => removeFromHistory(_id)}>
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
