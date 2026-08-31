import { useState, createContext } from "react";

// The context tracking our data
export const ThemeDataContext = createContext(null);

const ThemeContext = ({ children }) => {
    const [theme, setTheme] = useState("light");

    return (
        // Stripped out the <div> wrapper to prevent layout breaking
        <ThemeDataContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeDataContext.Provider>
    );
};

export default ThemeContext;
