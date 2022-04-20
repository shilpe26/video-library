import { createContext, useContext, useReducer, useEffect } from "react";
import { initialAuthData } from "./initialAuthData";
import { authReducerFunction } from "./authReducerFunction";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	useEffect(() => {
		if (localStorage.getItem("userToken")) {
			authDispatch({ type: "LOCAL-STORAGE" });
		}
	}, []);

	const [authState, authDispatch] = useReducer(
		authReducerFunction,
		initialAuthData
	);
	return (
		<AuthContext.Provider value={{ authState, authDispatch }}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
