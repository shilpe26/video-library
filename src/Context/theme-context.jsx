import { createContext, useContext, useState } from "react";

const light = {
	bgColor: "#FFC8C8",
	textColor: "#3E4149",
	secondaryColor: "#FF9999",
};

const dark = {
	bgColor: "#3E4149",
	textColor: "#FFC8C8",
	secondaryColor: "#FF9999",
};
const ThemeContext = createContext({ mode: light, isLight: true });
const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState({ mode: light, isLight: true });
	const themeHandler = () => {
		theme.isLight
			? setTheme({ mode: dark, isLight: false })
			: setTheme({ mode: light, isLight: true });
	};
	return (
		<ThemeContext.Provider value={{ theme, themeHandler }}>
			{children}
		</ThemeContext.Provider>
	);
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
