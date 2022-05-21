import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/Images/Signal-Air-Logo.png";
import headerStyle from "../../../assets/Styles/Header.module.css";

const Header = () => {
    return (
        <div className={headerStyle.bg}>
            <div className={headerStyle.container}>
                <nav className={headerStyle.navBar}>
                    <div >
                        <Link to="/home">
                            <img className={headerStyle.logoStyle} src={logo} alt="Main Logo" />
                        </Link>
                    </div>
                    <ul className={headerStyle.unorderList}>
                        <Link to="/home">
                            <li>
                                Home
                            </li>
                        </Link>
                        <Link to="/checkBulb">
                            <li>
                                Check Bulb
                            </li>
                        </Link>
                        <Link to="/users">
                            <li>
                                All Users
                            </li>
                        </Link>
                        <Link to="/radioStation">
                            <li>
                                Radio Station
                            </li>
                        </Link>
                        <Link to="/about">
                            <li>
                                About
                            </li>
                        </Link>
                        <Link to="/contact">
                            <li>
                                Contact
                            </li>
                        </Link>
                    </ul>
                    <div className={headerStyle.getStarted}>
                        <Link to="/signup">
                            Get Started
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;