import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

class Navigation extends React.Component {
    componentDidMount() {
        this.changeNavOpacity();
    }

    changeNavOpacity = () => {
        const nav = document.querySelector(".navigation");
        window.onscroll = () => {
            if (window.pageYOffset > 100) {
                nav.style.opacity = "0.5";
            } else {
                nav.style.opacity = "1";
            }
        };
    };

    render() {
        return (
            <div className="navigation">
                <div className="logo">
                    <h1 className="navi__logo">
                        <Link to="/">Ohcha</Link>
                    </h1>
                </div>

                <div className="center"></div>
                <div className="link">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </div>
            </div>
        );
    }
}

export default Navigation;
