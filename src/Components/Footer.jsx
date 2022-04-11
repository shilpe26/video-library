import React from "react";
import "../stylesheets/footer.css";
function Footer() {
	return (
		<div>
			<section className="footer-bookhub">
				<div className="share text">
					<a
						href="https://twitter.com/ShilpeSaxena"
						target="_blank"
						rel="noreferrer"
						className="fab fa-twitter footer_for-bookhub"
					></a>
					<a
						href="https://www.linkedin.com/in/shilpe-saxena-heartly-winner/"
						target="_blank"
						rel="noreferrer"
						className="fab fa-linkedin footer_for-bookhub"
					></a>
					<a
						href="https://github.com/shilpe26"
						target="_blank"
						rel="noreferrer"
						className="fab fa-github footer_for-bookhub"
					></a>
				</div>
				<div className="credit text-md font-bold mt-8 py-8 px-4 text">
					Made with 🧡 by
					<span className="span-note text-md font-bold"> Shilpe Saxena</span>
				</div>
			</section>
		</div>
	);
}

export { Footer };
