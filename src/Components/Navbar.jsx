import React from "react";
import { useTheme } from "../Context/theme-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from "../assets/paw-logo.svg";
import "../stylesheets/navbar.css";

function Navbar() {
	const { theme, themeHandler } = useTheme();
	return (
		<div>
			<nav className="container-note px-12 flex justify-between">
				<h1 className="heading-note">
					<Link to="/">
						<img src={Logo} alt="paw-logo" />
					</Link>
				</h1>
				<button
					style={{ color: theme.mode.textColor }}
					className="btn-theme text-xmd md:text-xl"
					onClick={themeHandler}
				>
					<FontAwesomeIcon icon={theme.isLight ? faSun : faMoon} />
				</button>
			</nav>
		</div>
	);
}

export { Navbar };
