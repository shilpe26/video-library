import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./auth-context";

function useAuthFunctions() {
	const { authState, authDispatch } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();

	//login request
	const login = async () => {
		try {
			const { data, status } = await axios.post("/api/auth/login", {
				email: authState.email,
				password: authState.password,
			});
			const { encodedToken } = data;
			if (status === 200) {
				localStorage.setItem("userToken", encodedToken);
				authDispatch({
					type: "USER-DATA",
					payload: { encodedToken },
				});
				authDispatch({ type: "RESET-FORM" });
				navigate(location?.state?.from?.pathname);
			} else if (status === 401) {
				authDispatch({ type: "ERROR", payload: "Invalid Credentials." });
				setTimeout(() => authDispatch({ type: "ERROR", payload: "" }), 4000);
			}
		} catch (err) {
			authDispatch({
				type: "ERROR",
				payload: "Email is not registered.",
			});
			setTimeout(() => authDispatch({ type: "ERROR", payload: "" }), 4000);
			authDispatch({ type: "RESET-FORM" });
			console.log(err.message);
		}
	};
	//logout request
	const logout = () => {
		localStorage.clear();
		authDispatch({ type: "RESET-DATA" });
		navigate("/");
	};
	//signup request
	const signup = async () => {
		try {
			const { data, status } = await axios.post("/api/auth/signup", {
				email: authState.email,
				password: authState.password,
				name: authState.name,
			});
			const { encodedToken } = data;
			if (status === 201) {
				localStorage.setItem("userToken", encodedToken);
				authDispatch({
					type: "USER-DATA",
					payload: { encodedToken },
				});
				authDispatch({ type: "RESET-FORM" });
				navigate(location?.state?.from?.pathname);
			} else {
				authDispatch({ type: "ERROR", payload: "Something Went Wrong." });
				setTimeout(() => authDispatch({ type: "ERROR", payload: "" }), 4000);
			}
		} catch (err) {
			authDispatch({
				type: "ERROR",
				payload: "Email Already Exists.",
			});
			setTimeout(() => authDispatch({ type: "ERROR", payload: "" }), 4000);
			authDispatch({ type: "RESET-FORM" });
			console.log(err.message);
		}
	};
	return { login, logout, signup };
}

export { useAuthFunctions };
