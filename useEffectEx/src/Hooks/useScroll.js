import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const useScroll = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleScroll = () => {
        setPosition({
            x: window.scrollX,
            y: window.scrollY,
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return position;
};

const App = () => {
    const { y } = useScroll();

    return (
        <div className="App" style={{ height: "1000vh" }}>
            <h1 style={{ position: "fixed" }}>
                {y > 200 ? "over 200" : "under 200"}
            </h1>
        </div>
    );
};

export default App;
