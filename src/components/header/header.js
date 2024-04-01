import React from "react";

const Header = () => {
    return (
        <header className="header">
                <a href="/">
                    <img src="" className="logo" alt="logo"></img>
                </a>
                <h1 className="title"></h1>
                <p className="description"></p>
                <div className="buttons">
                    <a href="/" className="button ios"></a>
                    <a href="/" className="button mac"></a>
                </div>
            </header>
    )
}

export default Header