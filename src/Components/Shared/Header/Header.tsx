import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/Images/Signal-Air-Logo.png";
import headerStyle from "../../../assets/Styles/Header.module.css";
import { signOut } from 'firebase/auth';
import auth from "../../../Firebase/Firebase.init";
import { useAuthState } from 'react-firebase-hooks/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

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
                        <Link to="/dashboard">
                            <li>
                                Dashboard
                            </li>
                        </Link>
                        {
                            user ?
                                <>
                                    <Link to="/home" onClick={() => logout()}>
                                        <li>
                                            Sign Out
                                        </li>
                                    </Link>
                                    <Link to="/home" onClick={() => logout()}>
                                        <li style={{ backgroundColor: "red" }}>
                                            {user.displayName}
                                        </li>
                                    </Link>
                                </>
                                :
                                <>
                                    <Link to="/signup">
                                        <li>
                                            SignUp
                                        </li>
                                    </Link>
                                    <Link to="/signin">
                                        <li>
                                            SignIn
                                        </li>
                                    </Link>
                                </>
                        }
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