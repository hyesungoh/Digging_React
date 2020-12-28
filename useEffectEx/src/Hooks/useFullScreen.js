import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const useFullScreen = (callback) => {
    const element = useRef();
    const runCB = (isFull) => {
        if (callback && typeof callback === "function") {
            callback(isFull);
        }
    };

    const enterFullScreen = () => {
        if (element.current) {
            element.current.requestFullscreen();
            // firefox mozRequestFullscreen
            // opera webkitRequestFullscreen
            // ms msRequestFullscreen
            runCB(true);
        }
    };
    const exitFullScreen = () => {
        document.exitFullscreen();
        runCB(false);
    };

    return { element, enterFullScreen, exitFullScreen };
};

const App = () => {
    const onFullScreen = (isFullScreen) => {
        console.log(isFullScreen ? "im full" : "im not full");
    };
    const { element, enterFullScreen, exitFullScreen } = useFullScreen(
        onFullScreen
    );

    return (
        <div className="App">
            <h1>hello</h1>
            <div ref={element} style={{ backgroundColor: "blue" }}>
                <button onClick={exitFullScreen}>exit full</button>
            </div>

            <button onClick={enterFullScreen}>enter full</button>
        </div>
    );
};

export default App;
