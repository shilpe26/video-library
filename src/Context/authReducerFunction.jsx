import { initialAuthData } from "./initialAuthData";

export function authReducerFunction(authState, action) {
	switch (action.type) {
		case "EMAIL":
			return { ...authState, email: action.payload };
		case "PASSWORD":
			return { ...authState, password: action.payload };
		case "NAME":
			return { ...authState, name: action.payload };
		case "USER-DATA":
			const { encodedToken } = action.payload;
			return { ...authState, encodedToken };
		case "RESET-DATA":
			return { ...initialAuthData };
		case "RESET-FORM":
			return { ...authState, email: "", password: "", name: "" };
		case "ERROR":
			return { ...authState, errorMessage: action.payload };
		case "TEST-CREDENTIALS":
			return {
				...authState,
				email: "adarshbalika@gmail.com",
				password: "adarshBalika123",
			};
		case "LOCAL-STORAGE":
			return {
				...authState,
				encodedToken: localStorage.getItem("userToken"),
			};
		default:
			return authState;
	}
}
