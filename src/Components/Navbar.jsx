import React from "react";
import { useTheme } from "../Context/theme-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from "../assets/paw-logo.png";
import "../stylesheets/navbar.css";

function Navbar() {
	const { theme, themeHandler } = useTheme();
	return (
		<div>
			<nav className="container-note px-12">
				<h1 className="heading-note">
					<Link to="/">
						<img src={Logo} alt="paw-logo" />
					</Link>
				</h1>
				<button className="btn-theme text-md md:text-xl" onClick={themeHandler}>
					<FontAwesomeIcon icon={theme.isLight ? faSun : faMoon} />
				</button>
			</nav>
		</div>
	);
}

export { Navbar };
