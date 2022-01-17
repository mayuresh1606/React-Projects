import {React} from 'react';
import ReactLogo from './logo2.svg';
import { Link } from 'react-router-dom';
export const Navbar = () => {
    return <nav className="nav">
        <div className="nav-container">
            <div className="logo-container">
                <img src={ReactLogo} className="logo" alt="Logo" />
            </div>
            <div className="page-navigators">
                <ul className="list">
                    <li>
                        <Link to="/" className="nav-links">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/about' className="nav-links">
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>  
}