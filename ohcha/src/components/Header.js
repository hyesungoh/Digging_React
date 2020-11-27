import React from "react";
import bg from "./img/bg.jpeg";
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <div className="header__content">
                <h1>OH-</h1>
                <h1>CHA</h1>
                <span>practcing design, powered by nomadcoders movie web</span>
            </div>
            <div className="header__img">
                <img src={bg} alt="bg"></img>
            </div>
        </div>
    );
}

export default Header;
