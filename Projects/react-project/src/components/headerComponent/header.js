import './header.css';
import ThemeContext from '../../themes';
import { useContext } from 'react';

const Header = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    return (
        <header>
            <div className="appTitle"><b style={{color:theme.primary}}>CLICK</b> CONSULT</div>
            <nav className="nav-wrapper">
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <a className="theme" href="#"><button className="toggleTheme" style={{backgroundColor: theme.primary,color:theme.secondary}} onClick={setTheme}>theme</button></a>
        </header>
    )
}
export default Header;