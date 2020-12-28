import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const useNetwork = (onChange) => {
    const [status, setStatus] = useState(navigator.onLine);

    const handleChange = () => {
        if (typeof onChange === "function") {
            onChange(navigator.onLine);
        }
        setStatus(navigator.onLine);
    };

    useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);

        return () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("offline", handleChange);
        };
    }, []);

    return status;
};

const App = () => {
    const onNetworkChange = (isOnline) => {
        console.log(isOnline ? "Im online" : "OFFLINE");
    };
    const isOnline = useNetwork(onNetworkChange);

    return (
        <div className="App">
            <h1>{isOnline ? "ONLINE" : "OFFLINE"}</h1>
        </div>
    );
};

export default App;
