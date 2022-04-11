import React from "react";
import { Link } from "react-router-dom";
function Signup() {
	return (
		<div className="login-form-container signup">
			<form className="login_form-bookhub" action="">
				<h3 className="heading-login">Signup</h3>
				<input
					type="email"
					name="email"
					className="box"
					placeholder="Email"
					aria-label="email"
				/>
				<input
					type="text"
					name="fname"
					className="box"
					placeholder="First name"
					aria-label="text"
				/>
				<input
					type="text"
					name="lname"
					className="box"
					placeholder="Last name"
					aria-label="text"
				/>
				<input
					type="password"
					name="password"
					className="box"
					placeholder="Password"
					aria-label="password"
				/>
				<input
					type="password"
					name="cpassword"
					className="box"
					placeholder="Confirm password"
					aria-label="password"
				/>
				<Link to="/">
					<button type="submit" value="sign up" className="btn">
						Signup
					</button>
				</Link>
			</form>
		</div>
	);
}

export { Signup };
