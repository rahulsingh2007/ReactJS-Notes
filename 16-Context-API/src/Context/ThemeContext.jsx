import { useState } from "react";
import { ThemeDataContext } from "./ThemeDataContext"; 

const ThemeContext = ({ children }) => {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeDataContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeDataContext.Provider>
    );
};

export default ThemeContext;
