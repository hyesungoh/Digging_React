import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const useBeforeLeave = (action) => {
    const handle = (event) => {
        const { clientY } = event;
        if (clientY <= 0) {
            action();
        }
    };

    useEffect(() => {
        document.addEventListener("mouseleave", handle);

        return () => document.removeEventListener("mouseleave", handle);
    }, []);

    // useEffect가 호출안되는 경우 존재시 에러 발생
    if (typeof action !== "function") {
        return;
    }
};

const App = () => {
    const beforeLeaveAction = () => {
        console.log("leaving");
    };
    useBeforeLeave(beforeLeaveAction);

    return (
        <div className="App">
            <h1>hello</h1>
        </div>
    );
};

export default App;
