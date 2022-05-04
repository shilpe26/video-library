import { React, useState } from "react";
import "./login.css";
import { useTheme } from "../../Context/theme-context";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/auth-context";
import { useAuthFunctions } from "../../Context/useAuthFunctions";
import { Loading } from "../../Components/Components";

function Login() {
	const { theme } = useTheme();
	const [showPassword, setShowPassword] = useState(false);
	const { authState, authDispatch } = useAuth();
	const [loading, setLoading] = useState(false);
	const { login } = useAuthFunctions();

	const loginHandler = (e) => {
		e.preventDefault();
		login(setLoading);
	};

	return (
		<div className="flex justify-center mt-16 mb-8">
			<div className="login-signup-container flex flex-col gap-y-4">
				<h3>Login</h3>
				<form onSubmit={loginHandler}>
					<div className="input-group">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="shilpe@gmail.com"
							required
							value={authState.email}
							onFocus={() => authDispatch({ type: "ERROR", payload: "" })}
							onChange={(e) =>
								authDispatch({ type: "EMAIL", payload: e.target.value })
							}
						/>
					</div>
					<div className="input-group">
						<label className="password-label" htmlFor="password">
							Password
							<button
								className={`eye-btn ${theme.isLight ? "light" : "dark"}`}
								onClick={(e) => {
									e.preventDefault();
									setShowPassword((val) => !val);
								}}
							>
								{showPassword ? (
									<i className="fas fa-eye"></i>
								) : (
									<i className="fas fa-eye-slash"></i>
								)}
							</button>
						</label>
						<input
							type={showPassword ? "text" : "password"}
							id="password"
							name="password"
							placeholder="********"
							required
							minLength="8"
							value={authState.password}
							onFocus={() => authDispatch({ type: "ERROR", payload: "" })}
							onChange={(e) =>
								authDispatch({ type: "PASSWORD", payload: e.target.value })
							}
						/>
					</div>
					<div className="login-test-login-btn">
						<button
							className={`btn login-btn ${theme.isLight ? "dark" : "light"}`}
						>
							Login
						</button>
						<button
							className="btn btn-info"
							onClick={() => authDispatch({ type: "TEST-CREDENTIALS" })}
						>
							Test Login
						</button>
					</div>
				</form>
				<p className="no-account text-md">
					Don't have an account ?{" "}
					<Link to="/signup" className="link">
						SignUp
					</Link>
				</p>
			</div>
			{loading && <Loading />}
		</div>
	);
}

export { Login };
