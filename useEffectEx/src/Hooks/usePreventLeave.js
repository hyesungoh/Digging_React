import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const usePreventLeave = () => {
    const listener = (event) => {
        event.preventDefault();
        event.returnValue = "";
    };
    const enablePrevent = () =>
        window.addEventListener("beforeunload", listener);
    const disablePrevent = () =>
        window.removeEventListener("beforeunload", listener);

    return { enablePrevent, disablePrevent };
};

const App = () => {
    const { enablePrevent, disablePrevent } = usePreventLeave();
    return (
        <div className="App">
            <button onClick={enablePrevent}>PROTECT</button>
            <button onClick={disablePrevent}>UNPROTECT</button>
        </div>
    );
};

export default App;