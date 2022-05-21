
import React from 'react';
import footerStyle from "../../../assets/Styles/Footer.module.css";
import logo from "../../../assets/Images/Signal-Air-Logo.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className={footerStyle.bg}>
            <div className={footerStyle.container}>
                <div className={footerStyle.footerGrid}>
                    <div>
                        <img src={logo} alt="Footer Logo" className={footerStyle.footerLogo} />
                        <div className={footerStyle.socialLink}>
                            <FontAwesomeIcon className={footerStyle.socialIcon} icon={faFacebook} />
                            <FontAwesomeIcon className={footerStyle.socialIcon} icon={faTwitter} />
                            <FontAwesomeIcon className={footerStyle.socialIcon} icon={faYoutube} />
                            <FontAwesomeIcon className={footerStyle.socialIcon} icon={faLinkedin} />
                        </div>
                    </div>
                    <div>
                        <h2 className={footerStyle.footerHead}>Get In Touch</h2>
                        <Link to="/home">
                            <p>457 Morningview Lane, NY</p>
                        </Link>
                        <Link to="/home">
                            <p>example@mail.com</p>
                        </Link>
                        <Link to="/home">
                            <p>+1 (234) 567 890</p>
                        </Link>

                        <Link to="/home">
                            <p>07.00 AM - 19.00 PM</p>
                        </Link>
                    </div>
                    <div>
                        <h2 className={footerStyle.footerHead}>Quick Links</h2>
                        <Link to="/home">
                            <p>Home</p>
                        </Link>
                        <Link to="/about">
                            <p>About</p>
                        </Link>
                        <Link to="/podcast">
                            <p>Podcast</p>
                        </Link>
                        <Link to="/team">
                            <p>Team</p>
                        </Link>
                    </div>
                    <div>
                        <h2 className={footerStyle.footerHead}>Support</h2>
                        <Link to="/help">
                            <p>Help Centre</p>
                        </Link>
                        <Link to="/career">
                            <p>Career</p>
                        </Link>
                        <Link to="/faq">
                            <p>FAQs</p>
                        </Link>
                        <Link to="/contact">
                            <p>Contact</p>
                        </Link>
                    </div>
                </div>
                <p className={footerStyle.copyrightText}>Copyright © 2022 Signal Air Radio Station</p>
            </div>
        </div>
    );
};

export default Footer;