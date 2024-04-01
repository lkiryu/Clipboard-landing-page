import React from "react";
import logo from '../../images/logo.svg'
import Buttons from "../buttons/buttons";

const Header = () => {
    return (
        <header className="header">
            <a href="/">
                <img src={logo} className="logo" alt="logo"></img>
            </a>
            <h1 className="title">A history of everything you copy</h1>
            <p className="description">Clipboard allows you to track and organize everything you
                copy. Instantly access your clipboard on all your devices.</p>
                
            <Buttons />
        </header>
    )
}

export default Header