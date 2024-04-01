import React from "react";
import logo from '../../images/logo.svg'

import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <a href="/">
                    <img src={logo} className="logo" alt="logo"></img>
                </a>
                <div className="links">
                    <ul>
                        <li><a href="/">FAQs</a></li>
                        <li><a href="/">Contact Us</a></li>
                    </ul>
                    <ul>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Press Kit</a></li>
                    </ul>
                    <ul>
                        <li><a href="/">Install Guide</a></li>
                    </ul>
                </div>
                <ul className="social">
                    <li><a href="/"><i className="fa-brands fa-square-facebook"></i></a></li>
                    <li><a href="/"><i className="fa-brands fa-twitter"></i></a></li>
                    <li><a href="/"><i className="fa-brands fa-instagram"></i></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer