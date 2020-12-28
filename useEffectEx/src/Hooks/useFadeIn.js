import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const useFadeIn = (duration = 1, delay = 0) => {
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            const { current } = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }
    }, []);

    if (typeof duration !== "number" || typeof delay !== "number") {
        return;
    }

    return { ref: element, style: { opacity: 0 } };
};

const App = () => {
    const fadeInH1 = useFadeIn();

    return (
        <div className="App">
            <h1 {...fadeInH1}>hello</h1>
        </div>
    );
};

export default App;
