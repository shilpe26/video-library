import React from "react";
import "../stylesheets/drawer.css";
import { Link, NavLink } from "react-router-dom";
function Drawer() {
	return (
		<div>
			<aside className="side-bar flex flex-col pr-8">
				<ul className="side-list text-md">
					<li className="p-2">
						<Link to="/" className="links">
							<span className="material-icons">home</span>
							<span className="side-items">Home</span>
						</Link>
					</li>
					<li className="p-2">
						<NavLink
							to="/videos"
							className={({ isActive }) =>
								isActive ? "active links" : "links"
							}
						>
							<span className="material-icons">explore</span>
							<span className="side-items">Explore</span>
						</NavLink>
					</li>
					<li className="p-2">
						<NavLink
							to="/playlist"
							className={({ isActive }) =>
								isActive ? "active links" : "links"
							}
						>
							<span className="material-icons">playlist_add</span>
							<span className="side-items">Playlists</span>
						</NavLink>
					</li>
					<li className="p-2">
						<NavLink
							to="/liked"
							className={({ isActive }) =>
								isActive ? "active links" : "links"
							}
						>
							<span className="material-icons">thumb_up</span>
							<span className="side-items">Liked</span>
						</NavLink>
					</li>
					<li className="p-2">
						<NavLink
							to="/history"
							className={({ isActive }) =>
								isActive ? "active links" : "links"
							}
						>
							<span className="material-icons">history</span>
							<span className="side-items">History</span>
						</NavLink>
					</li>
					<li className="p-2">
						<NavLink
							to="/watchlater"
							className={({ isActive }) =>
								isActive ? "active links" : "links"
							}
						>
							<span className="material-icons">watch_later</span>
							<span className="side-items">Watch Later</span>
						</NavLink>
					</li>
				</ul>
			</aside>
		</div>
	);
}

export { Drawer };
