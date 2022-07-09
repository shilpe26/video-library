import React from "react";
import Dogo from "../../assets/dog-bg-pic.png";
import { Link } from "react-router-dom";
import "./home.css";
function Home() {
	return (
		<div>
			<div className="flex items-center justify-center flex-col">
				<img className="w-80p" src={Dogo} alt="dogo-bg" />
			</div>
			<div className="flex items-center justify-center">
				<Link to="/videos">
					<button className="explore-btn text-md mt-4 cursor border-5 p-2 w-40">
						Explore
					</button>
				</Link>
			</div>
		</div>
	);
}

export { Home };
