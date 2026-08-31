import { useContext } from 'react';
import { ThemeDataContext } from '../Context/ThemeContext';

const Button = () => {
    // Destructuring state array properly
    const [theme, setTheme] = useContext(ThemeDataContext);

    const changeTheme = () => {
        // Toggles back and forth dynamically
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <div>
            <button onClick={changeTheme}>
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
        </div>
    );
};

export default Button;
