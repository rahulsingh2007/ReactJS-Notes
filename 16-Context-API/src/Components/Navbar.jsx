import { useContext } from 'react';
import Nav2 from './Nav2';
import { ThemeDataContext } from '../Context/ThemeContext';

const Navbar = () => {
    const [theme] = useContext(ThemeDataContext);

    return (
        // The navbar container now properly carries 'light' or 'dark' CSS class
        <div className={`navbar ${theme}`}>
            <h2>Sheryians</h2>
            <Nav2 />
        </div>
    );
};

export default Navbar;
